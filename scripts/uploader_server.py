import os
import sys
import cgi
import json
from http.server import HTTPServer, BaseHTTPRequestHandler

UPLOAD_DIR = os.path.abspath('incoming_images')
os.makedirs(UPLOAD_DIR, exist_ok=True)

HTML_PAGE = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
  <title>Cotnera • Dress Images Upload</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
    body { background: #F8F7F4; color: #482922; min-height: 100vh; padding: 24px 16px; display: flex; flex-direction: column; align-items: center; }
    .card { background: #FFFFFF; width: 100%; max-width: 500px; border-radius: 20px; padding: 28px 20px; box-shadow: 0 10px 30px rgba(72,41,34,0.08); text-align: center; }
    .logo { font-size: 26px; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 4px; color: #482922; }
    .subtitle { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #9B7E6B; margin-bottom: 24px; font-weight: 600; }
    .upload-zone { border: 2px dashed #DCCEC4; background: #FCFBF9; border-radius: 16px; padding: 32px 16px; margin-bottom: 20px; cursor: pointer; transition: all 0.2s; }
    .upload-zone:hover, .upload-zone:active { border-color: #482922; background: #F7F3EF; }
    .upload-icon { font-size: 40px; margin-bottom: 12px; }
    .btn-choose { display: inline-block; background: #482922; color: #FFFFFF; font-size: 14px; font-weight: 700; padding: 12px 24px; border-radius: 30px; letter-spacing: 0.05em; text-transform: uppercase; margin-top: 8px; }
    input[type="file"] { display: none; }
    .file-count { margin-top: 12px; font-size: 13px; font-weight: 600; color: #2E7D32; min-height: 20px; }
    .btn-upload { width: 100%; background: #C5A059; color: #FFFFFF; border: none; font-size: 15px; font-weight: 700; padding: 14px 20px; border-radius: 30px; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer; transition: all 0.2s; margin-top: 8px; box-shadow: 0 4px 15px rgba(197,160,89,0.35); }
    .btn-upload:disabled { background: #D5CCC5; cursor: not-allowed; box-shadow: none; }
    .progress-bar-container { width: 100%; height: 8px; background: #EFEBE7; border-radius: 4px; margin: 18px 0; overflow: hidden; display: none; }
    .progress-bar { width: 0%; height: 100%; background: #482922; transition: width 0.2s; }
    .status-msg { font-size: 13px; font-weight: 600; margin-top: 10px; color: #482922; }
    .uploaded-list-card { background: #FFFFFF; width: 100%; max-width: 500px; border-radius: 20px; padding: 20px; box-shadow: 0 10px 30px rgba(72,41,34,0.06); margin-top: 18px; text-align: left; }
    .list-title { font-size: 13px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #482922; margin-bottom: 12px; display: flex; justify-content: space-between; }
    .files-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; max-height: 260px; overflow-y: auto; padding-right: 4px; }
    .file-thumb { position: relative; border-radius: 10px; overflow: hidden; background: #F0EAE4; aspect-ratio: 1; border: 1px solid #E5DCD4; }
    .file-thumb img { width: 100%; height: 100%; object-fit: cover; }
    .file-name { position: absolute; bottom: 0; left: 0; right: 0; background: rgba(72,41,34,0.75); color: #FFF; font-size: 9px; padding: 2px 4px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; }
  </style>
</head>
<body>

  <div class="card">
    <div class="logo">COTNERA</div>
    <div class="subtitle">Dress Catalog Upload Portal</div>

    <div class="upload-zone" onclick="document.getElementById('fileInput').click()">
      <div class="upload-icon">📸</div>
      <div style="font-size: 15px; font-weight: 700; margin-bottom: 4px;">Tap to Select Photos</div>
      <div style="font-size: 12px; color: #8C786D;">Select all WhatsApp dress images</div>
      <div class="btn-choose">Choose Images</div>
      <input type="file" id="fileInput" multiple accept="image/*" onchange="handleFileSelect(event)">
      <div class="file-count" id="fileCount"></div>
    </div>

    <div class="progress-bar-container" id="progressContainer">
      <div class="progress-bar" id="progressBar"></div>
    </div>

    <button id="uploadBtn" class="btn-upload" disabled onclick="uploadFiles()">Upload Images to Mac</button>
    <div class="status-msg" id="statusMsg"></div>
  </div>

  <div class="uploaded-list-card">
    <div class="list-title">
      <span>Uploaded Images on Mac</span>
      <span id="uploadedCountBadge" style="background: #482922; color: #FFF; padding: 2px 8px; border-radius: 10px; font-size: 11px;">0</span>
    </div>
    <div class="files-grid" id="filesGrid"></div>
  </div>

  <script>
    let selectedFiles = [];

    function handleFileSelect(e) {
      selectedFiles = Array.from(e.target.files);
      const countEl = document.getElementById('fileCount');
      const btn = document.getElementById('uploadBtn');
      if (selectedFiles.length > 0) {
        countEl.textContent = `✓ ${selectedFiles.length} photos ready to upload`;
        btn.disabled = false;
        btn.textContent = `Upload ${selectedFiles.length} Photos`;
      } else {
        countEl.textContent = '';
        btn.disabled = true;
        btn.textContent = 'Upload Images to Mac';
      }
    }

    async function uploadFiles() {
      if (!selectedFiles.length) return;
      const btn = document.getElementById('uploadBtn');
      const progressContainer = document.getElementById('progressContainer');
      const progressBar = document.getElementById('progressBar');
      const statusMsg = document.getElementById('statusMsg');

      btn.disabled = true;
      progressContainer.style.display = 'block';
      progressBar.style.width = '0%';
      statusMsg.textContent = 'Uploading... Please keep page open.';

      const formData = new FormData();
      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append('files', selectedFiles[i]);
      }

      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/upload', true);

      xhr.upload.onprogress = function(e) {
        if (e.lengthComputable) {
          const pct = Math.round((e.loaded / e.total) * 100);
          progressBar.style.width = pct + '%';
          statusMsg.textContent = `Uploading: ${pct}%`;
        }
      };

      xhr.onload = function() {
        if (xhr.status === 200) {
          progressBar.style.width = '100%';
          statusMsg.textContent = '🎉 All ' + selectedFiles.length + ' photos uploaded successfully!';
          btn.textContent = 'Upload Completed';
          selectedFiles = [];
          document.getElementById('fileCount').textContent = '';
          fetchUploadedFiles();
        } else {
          statusMsg.textContent = '❌ Upload error: ' + xhr.statusText;
          btn.disabled = false;
        }
      };

      xhr.onerror = function() {
        statusMsg.textContent = '❌ Connection failed. Check Wi-Fi.';
        btn.disabled = false;
      };

      xhr.send(formData);
    }

    async function fetchUploadedFiles() {
      try {
        const res = await fetch('/api/list');
        const data = await res.json();
        const badge = document.getElementById('uploadedCountBadge');
        const grid = document.getElementById('filesGrid');
        badge.textContent = data.length;
        grid.innerHTML = '';
        data.forEach(name => {
          const div = document.createElement('div');
          div.className = 'file-thumb';
          div.innerHTML = `<img src="/incoming/${encodeURIComponent(name)}" loading="lazy"><span class="file-name">${name}</span>`;
          grid.appendChild(div);
        });
      } catch (err) {
        console.error(err);
      }
    }

    fetchUploadedFiles();
    setInterval(fetchUploadedFiles, 4000);
  </script>
</body>
</html>
"""

class UploadHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/' or self.path == '/upload':
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.end_headers()
            self.wfile.write(HTML_PAGE.encode('utf-8'))
        elif self.path == '/api/list':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Cache-Control', 'no-cache')
            self.end_headers()
            files = sorted([f for f in os.listdir(UPLOAD_DIR) if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))], reverse=True)
            self.wfile.write(json.dumps(files).encode('utf-8'))
        elif self.path.startswith('/incoming/'):
            filename = os.path.basename(self.path[10:])
            filepath = os.path.join(UPLOAD_DIR, filename)
            if os.path.isfile(filepath):
                self.send_response(200)
                if filename.lower().endswith('.png'):
                    self.send_header('Content-Type', 'image/png')
                elif filename.lower().endswith('.webp'):
                    self.send_header('Content-Type', 'image/webp')
                else:
                    self.send_header('Content-Type', 'image/jpeg')
                self.end_headers()
                with open(filepath, 'rb') as f:
                    self.wfile.write(f.read())
            else:
                self.send_response(404)
                self.end_headers()
        else:
            self.send_response(404)
            self.end_headers()

    def do_POST(self):
        if self.path == '/upload':
            try:
                ctype, pdict = cgi.parse_header(self.headers.get('content-type'))
                if ctype == 'multipart/form-data':
                    pdict['boundary'] = bytes(pdict['boundary'], "utf-8")
                    fields = cgi.parse_multipart(self.rfile, pdict)
                    saved_files = []
                    # Files can come as a list under 'files'
                    for field_name in fields:
                        file_data_list = fields[field_name]
                        for i, file_bytes in enumerate(file_data_list):
                            if isinstance(file_bytes, bytes) and len(file_bytes) > 0:
                                # determine extension or generic name
                                ext = '.jpg'
                                if file_bytes.startswith(b'\x89PNG'):
                                    ext = '.png'
                                elif file_bytes.startswith(b'RIFF') and b'WEBP' in file_bytes[:16]:
                                    ext = '.webp'
                                
                                import time
                                filename = f"dress_{int(time.time())}_{len(saved_files)+1}{ext}"
                                filepath = os.path.join(UPLOAD_DIR, filename)
                                with open(filepath, 'wb') as f:
                                    f.write(file_bytes)
                                saved_files.append(filename)
                                print(f"[RECEIVED] Saved {filename} ({len(file_bytes)} bytes)")
                    
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({'status': 'ok', 'saved': saved_files}).encode('utf-8'))
                    return
            except Exception as e:
                print(f"[ERROR] Upload processing error: {e}")
                self.send_response(500)
                self.end_headers()
                self.wfile.write(str(e).encode('utf-8'))
                return

        self.send_response(404)
        self.end_headers()

if __name__ == '__main__':
    port = 8080
    server = HTTPServer(('0.0.0.0', port), UploadHandler)
    print(f"Cotnera Upload Server listening on http://0.0.0.0:{port}")
    print(f"Accessible on local network at http://192.168.1.2:{port}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
