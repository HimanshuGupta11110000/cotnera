export const BRAND = {
  name: "COTNERA",
  tagline: "wear it. style it. rewear it.",
  phone: "+91 95081 23270",
  whatsapp: "+91 95081 23270",
  upiId: "riyaranjan8242@oksbi",
  upiName: "COTNERA",
  instagram: "https://instagram.com/cotnera__",
  instagramHandle: "@cotnera__",
  supportHours: "24x7 Support on Call & WhatsApp",
  address: "Handcrafted with love in India",
  currencySymbol: "₹",
  freeShippingThreshold: 1499,
  acceptedPayments: "Direct UPI (Google Pay, PhonePe, Paytm, QR) & WhatsApp Orders",
};

export const NAV_LINKS = [
  { name: "Trousers", href: "#collection" },
  { name: "Kurtis", href: "#collection" },
  { name: "Anarkali", href: "#collection" },
  { name: "Co-ord Sets", href: "#collection" },
  { name: "Farshi Salwar", href: "#collection" },
  { name: "Dresses", href: "#collection" },
];

export const MEGA_MENU_DROPS = [
  { name: "TROUSERS", href: "#collection" },
  { name: "KURTIS", href: "#collection" },
  { name: "ANARKALI", href: "#collection" },
  { name: "CO-ORD SETS", href: "#collection" },
  { name: "FARSHI SALWAR", href: "#collection" },
  { name: "DRESSES & GOWNS", href: "#collection" },
  { name: "SHOP ALL PIECES", href: "#collection" },
];

export const MEGA_MENU_COLLECTIONS = [
  {
    category: "SECTIONS",
    items: [
      { name: "Trousers", isBold: true },
      { name: "Kurtis", isBold: true },
      { name: "Anarkali", isBold: true },
      { name: "Co-ord Sets", isBold: true },
      { name: "Farshi Salwar", isBold: true },
      { name: "Dresses & Maxis" },
      { name: "All Products" },
    ],
  },
  {
    category: "FABRICS & CRAFT",
    items: [
      { name: "Pure Cotton Slub" },
      { name: "Handloom Ikat" },
      { name: "Chanderi Silk" },
      { name: "Gold Foil Detailing" },
      { name: "Fine Organza Silk" },
      { name: "100% Breathable Weaves", isBold: true },
    ],
  },
  {
    category: "THE EDITS",
    items: [
      { name: "The Debut Edit '26" },
      { name: "Everyday Minimal" },
      { name: "Peach Fuzz Edit" },
      { name: "Heritage Weaves" },
      { name: "View All Pieces", isBold: true },
    ],
  },
  {
    category: "COTNERA STUDIO",
    items: [
      { name: '"Wear It. Style It. Rewear It."' },
      { name: "Handcrafted in India" },
      { name: "10% OFF on all pieces", isBold: true },
      { name: "Direct UPI & WhatsApp Orders" },
      { name: "Custom Sizing on WhatsApp" },
    ],
  },
];

export const CATEGORIES = [
  { id: "all", name: "All Pieces", count: "(26)" },
  { id: "trouser", name: "Trousers", count: "(4)" },
  { id: "kurti", name: "Kurtis", count: "(5)" },
  { id: "anarkali", name: "Anarkali", count: "(2)" },
  { id: "coord-sets", name: "Co-ord Sets", count: "(9)" },
  { id: "farshi-salwar", name: "Farshi Salwar", count: "(3)" },
  { id: "dresses", name: "Dresses", count: "(3)" },
];

export const STORIES = [
  {
    id: "story-1",
    title: "COTNEROTSAV '26",
    slides: [
      {
        image: "/images/catalog/anarkali-rust-front.jpg",
        caption: "Surya Terracotta Anarkali Set",
        productLink: "#collection",
        productName: "Surya Anarkali Set",
      },
      {
        image: "/images/catalog/salwar-sky-yellow-front.jpg",
        caption: "Aasmani Farshi Salwar Suit",
        productLink: "#collection",
        productName: "Farshi Salwar Set",
      },
    ],
  },
  {
    id: "story-2",
    title: "CO-ORD EDIT",
    slides: [
      {
        image: "/images/catalog/coord-brushstroke-peplum-editorial.jpg",
        caption: "Prism Abstract Peplum Co-ord",
        productLink: "#collection",
        productName: "Prism Peplum Set",
      },
      {
        image: "/images/catalog/coord-oatmeal-sand-vest-front.jpg",
        caption: "Sahara Sand Tailored Vest Set",
        productLink: "#collection",
        productName: "Sahara Vest Set",
      },
    ],
  },
  {
    id: "story-3",
    title: "DRESSES & GOWNS",
    slides: [
      {
        image: "/images/catalog/dress-yellow-polka-front.jpg",
        caption: "Basanti Polka Flared Midi Dress",
        productLink: "#collection",
        productName: "Basanti Polka Dress",
      },
      {
        image: "/images/catalog/dress-sapphire-halter-front.jpg",
        caption: "Neelam Indigo Halter Gown",
        productLink: "#collection",
        productName: "Neelam Indigo Gown",
      },
    ],
  },
];

// All clustered products from real shoot photos & WhatsApp chat prices (Cut price -> 10% discount)
export const PRODUCTS = [
  {
    "id": "prod-tailored-wide-leg-trouser-navy",
    "name": "Midnight Navy Tailored Wide-Leg Trousers",
    "category": "trouser",
    "featuredCategory": "trouser",
    "color": "Midnight Navy Blue",
    "originalPrice": 1759,
    "price": 1599,
    "badge": "New Drop",
    "images": [
      "/images/catalog/trouser-navy-front.jpg",
      "/images/catalog/trouser-navy-back.jpg",
      "/images/catalog/trouser-navy-detail.jpg"
    ],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "style": "High-Waisted Wide-Leg Trousers",
    "fabric": "Premium Structured Suiting Twill",
    "fit": "High-rise pleated front with relaxed wide-leg drape",
    "description": "Impeccably tailored wide-leg trousers in rich midnight navy. Features clean front knife pleats, slant pockets, a refined extended waistband tab closure, and welt back detailing."
  },
  {
    "id": "prod-tailored-wide-leg-trouser-white",
    "name": "Crisp White Tailored Wide-Leg Trousers",
    "category": "trouser",
    "featuredCategory": "trouser",
    "color": "Crisp Optical White",
    "originalPrice": 1759,
    "price": 1599,
    "badge": "New Drop",
    "images": [
      "/images/catalog/trouser-white-front.jpg",
      "/images/catalog/trouser-white-back.jpg",
      "/images/catalog/trouser-white-detail.jpg"
    ],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "style": "High-Waisted Wide-Leg Trousers",
    "fabric": "Structured Breathable Cotton Twill",
    "fit": "High-rise tailored waist with flowing straight wide-leg cut",
    "description": "Signature crisp white tailored trousers designed for effortless luxury. Cut from opaque structured cotton twill with deep front knife pleats and clean back welt lines."
  },
  {
    "id": "prod-tailored-wide-leg-trouser-black",
    "name": "Onyx Black Tailored Wide-Leg Trousers",
    "category": "trouser",
    "featuredCategory": "trouser",
    "color": "Deep Onyx Black",
    "originalPrice": 1759,
    "price": 1599,
    "badge": "New Drop",
    "images": [
      "/images/catalog/trouser-black-front.jpg",
      "/images/catalog/trouser-black-back.jpg",
      "/images/catalog/trouser-black-detail.jpg"
    ],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "style": "High-Waisted Wide-Leg Trousers",
    "fabric": "High-Density Tailored Cotton Slub",
    "fit": "Flattering high-waisted fit with sweeping wide leg",
    "description": "The quintessential power trouser in pitch black. Tailored with front knife pleats, belt loops, side entry pockets, and an elongated wide-leg silhouette that pairs with everything."
  },
  {
    "id": "prod-tailored-wide-leg-trouser-cream",
    "name": "Vanilla Cream Tailored Wide-Leg Trousers",
    "category": "trouser",
    "featuredCategory": "trouser",
    "color": "Warm Vanilla Cream",
    "originalPrice": 1759,
    "price": 1599,
    "badge": "New Drop",
    "images": [
      "/images/catalog/trouser-cream-front.jpg",
      "/images/catalog/trouser-cream-back.jpg"
    ],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "style": "High-Waisted Wide-Leg Trousers",
    "fabric": "Rich Cream Natural Cotton Weave",
    "fit": "High rise with structured waistband & relaxed wide-leg fall",
    "description": "Understated neutral luxury. Rendered in a soothing vanilla cream palette with clean front pleating, tailored waistband, and a fluid relaxed silhouette."
  },
  {
    "id": "prod-kurti-pink-hakoba-halter",
    "name": "Blush Pink Embroidered Hakoba Halter Kurti",
    "category": "kurti",
    "featuredCategory": "kurti",
    "color": "Blush Pink",
    "originalPrice": 1099,
    "price": 999,
    "badge": "10% OFF",
    "images": [
      "/images/catalog/kurti-pink-hakoba-front.jpg",
      "/images/catalog/kurti-pink-hakoba-back.jpg"
    ],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "style": "Halter Neck Eyelet Kurti",
    "fabric": "100% Pure Schiffli Hakoba Cotton",
    "fit": "Flattering V-neck with back bow tie & open back",
    "description": "Delicate blush pink cotton kurti in airy geometric schiffli eyelet embroidery. Features a plunging halter V-neckline, flattering princess darts, and a feminine self-tie bow at the back."
  },
  {
    "id": "prod-kurti-black-floral-halter",
    "name": "Midnight Black Floral Handblock Halter Kurti",
    "category": "kurti",
    "featuredCategory": "kurti",
    "color": "Midnight Black & Terra Floral",
    "originalPrice": 1099,
    "price": 999,
    "badge": "10% OFF",
    "images": [
      "/images/catalog/kurti-black-floral-front.jpg",
      "/images/catalog/kurti-black-floral-back.jpg"
    ],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "style": "Backless Halter Kurti",
    "fabric": "100% Handcrafted Breathable Indian Cotton",
    "fit": "V-neck with dramatic criss-cross lace-up back cords",
    "description": "Heritage handblock floral motifs printed on breathable pitch black cotton. Styled with a halter neckline, side slits, and an open back laced with adjustable cord ties."
  },
  {
    "id": "prod-kurti-rust-printed-square",
    "name": "Terracotta Rust Block-Print Sleeveless Kurti",
    "category": "kurti",
    "featuredCategory": "kurti",
    "color": "Terracotta Rust & Gold Print",
    "originalPrice": 1099,
    "price": 999,
    "badge": "10% OFF",
    "images": [
      "/images/catalog/kurti-rust-printed-front.jpg",
      "/images/catalog/kurti-rust-printed-back.jpg"
    ],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "style": "Sleeveless Square Neck Kurti",
    "fabric": "Pure Slub Cotton with Handblock Foil Detailing",
    "fit": "Tailored straight silhouette with square neckline & back zip",
    "description": "Warm terracotta rust straight-cut kurti adorned with artisanal damask block prints. Features wide supportive straps, clean architectural square neckline, and concealed back zip closure."
  },
  {
    "id": "prod-kurti-indigo-chevron-halter",
    "name": "Indus Blue Chevron Block-Print Halter Kurti",
    "category": "kurti",
    "featuredCategory": "kurti",
    "color": "Indigo & Ivory Chevron",
    "originalPrice": 1099,
    "price": 999,
    "badge": "10% OFF",
    "images": [
      "/images/catalog/kurti-indigo-chevron-front.jpg",
      "/images/catalog/kurti-indigo-chevron-back.jpg"
    ],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "style": "Halter Backless Kurti",
    "fabric": "100% Pure Indian Indigo Cotton",
    "fit": "Halter V-neck with adjustable lattice back ties",
    "description": "Vibrant indigo blue and ivory chevron pattern handblock printed on natural cotton. Designed with a plunging halter neck, side vents, and an alluring open back with criss-cross cords."
  },
  {
    "id": "prod-kurti-noir-sheer-layered",
    "name": "Noir Sheer Layered Tunic Kurti & Bandeau Set",
    "category": "kurti",
    "featuredCategory": "kurti",
    "color": "Sheer Noir Black & Monotone Print",
    "originalPrice": 1209,
    "price": 1099,
    "badge": "10% OFF",
    "images": [
      "/images/catalog/kurti-noir-sheer-front.jpg",
      "/images/catalog/kurti-noir-sheer-back.jpg"
    ],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "style": "Layered Sheer Tunic Kurti",
    "fabric": "Fine Cotton Mulmul / Sheer Organza & Printed Cotton",
    "fit": "Relaxed V-neck tunic with bell sleeves over printed inner bustier",
    "description": "Modern Bohemian evening elegance. Lightweight sheer noir overlay tunic with flared bell sleeves and deep V-neck, paired over a coordinating handblock printed cotton bustier with shell detailing."
  },
  {
    "id": "prod-anarkali-surya-terracotta",
    "name": "Surya Terracotta Chanderi Silk Anarkali Set",
    "category": "anarkali",
    "featuredCategory": "anarkali",
    "color": "Terracotta Rust & Burgundy",
    "originalPrice": 3959,
    "price": 3599,
    "badge": "10% OFF",
    "images": [
      "/images/catalog/anarkali-rust-front.jpg",
      "/images/catalog/anarkali-rust-back.jpg",
      "/images/catalog/anarkali-rust-sketch.jpg"
    ],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "style": "Kalidar Anarkali & Dupatta Set",
    "fabric": "Pure Handloom Chanderi Silk with Organza Dupatta",
    "fit": "Fitted bodice with dramatic flared floor-length kalis",
    "description": "Opulent terracotta rust floor-sweeping Anarkali in pure handloom Chanderi silk. Hand-embroidered zardozi neckline, deep scoop back, paired with a sheer burgundy organza dupatta with botanical needlework."
  },
  {
    "id": "prod-anarkali-gulabi-blush",
    "name": "Gulabi Blush Chanderi Silk Anarkali Set",
    "category": "anarkali",
    "featuredCategory": "anarkali",
    "color": "Blush Rose Pink & Silver",
    "originalPrice": 3959,
    "price": 3599,
    "badge": "10% OFF",
    "images": [
      "/images/catalog/anarkali-blush-front.jpg",
      "/images/catalog/anarkali-blush-back.jpg",
      "/images/catalog/anarkali-blush-sketch.jpg"
    ],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "style": "Kalidar Anarkali & Dupatta Set",
    "fabric": "Pure Handloom Chanderi Silk with Sheer Dupatta",
    "fit": "Fitted bodice with sweeping flared hem & tassel back tie",
    "description": "Ethereal blush rose pink Anarkali gown crafted from lustrous Chanderi silk. Features intricate silver zardozi beadwork along the neckline, deep scoop back with embellished tassels, and a gossamer embroidered dupatta."
  },
  {
    "id": "prod-farshi-sky-yellow",
    "name": "Aasmani Sky & Buttercup Farshi Salwar Suit Set",
    "category": "farshi-salwar",
    "featuredCategory": "farshi-salwar",
    "color": "Sky Blue & Buttercup Yellow",
    "originalPrice": 2199,
    "price": 1999,
    "badge": "10% OFF",
    "images": [
      "/images/catalog/salwar-sky-yellow-front.jpg",
      "/images/catalog/salwar-sky-yellow-back.jpg"
    ],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "style": "3-Piece Farshi Salwar Suit Set",
    "fabric": "100% Breathable Fine Indian Cotton",
    "fit": "Flared bell sleeve kurti with sweeping farshi salwar & dupatta",
    "description": "Regal Awadhi-inspired silhouette in soothing sky blue pinstripe cotton with delicate floral needlework. Features bell sleeves with scalloped border trims, paired with buttercup yellow sweeping farshi salwar pants and a coordinating tasseled cotton dupatta."
  },
  {
    "id": "prod-farshi-indigo-booti",
    "name": "Neelambari Indigo Booti Farshi Salwar Suit Set",
    "category": "farshi-salwar",
    "featuredCategory": "farshi-salwar",
    "color": "Indigo Blue & Pure White",
    "originalPrice": 1979,
    "price": 1799,
    "badge": "10% OFF",
    "images": [
      "/images/catalog/salwar-indigo-booti-front.jpg",
      "/images/catalog/salwar-indigo-booti-back.jpg"
    ],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "style": "3-Piece Farshi Salwar Suit Set",
    "fabric": "100% Handblock Printed Indian Cotton",
    "fit": "Sweetheart neck tunic with scoop tie-up back, flared farshi salwar & dupatta",
    "description": "Timeless heritage charm featuring artisanal indigo blue floral booti handblock prints on crisp white cotton. Styled with a sweetheart neckline, flared cuff sleeves, an alluring scoop back with handmade tassel tie cords, voluminous farshi salwar, and matching azure blue dupatta."
  },
  {
    "id": "prod-farshi-peach-coral",
    "name": "Noorani Peach Coral Booti Farshi Salwar Suit Set",
    "category": "farshi-salwar",
    "featuredCategory": "farshi-salwar",
    "color": "Soft Peach Coral & Ivory",
    "originalPrice": 1979,
    "price": 1799,
    "badge": "10% OFF",
    "images": [
      "/images/catalog/salwar-peach-coral-front.jpg",
      "/images/catalog/salwar-peach-coral-back.jpg"
    ],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "style": "3-Piece Farshi Salwar Suit Set",
    "fabric": "100% Breathable Fine Indian Cotton with Crochet Lace Insets",
    "fit": "Straight tunic with delicate crochet hem lace, pleated wide farshi salwar & dupatta",
    "description": "Delicate feminine grace in warm peach coral. Features heritage all-over floral booti motifs on breathable pure cotton, crochet lace ladder detailing along the sleeves and hemline, paired with voluminous pleated farshi salwar pants and an airy sheer matching dupatta."
  },
  {
    "id": "prod-mustard-polka-gown",
    "name": "Basanti Yellow Polka Dot One-Shoulder Flared Midi Dress",
    "category": "dresses",
    "featuredCategory": "dresses",
    "color": "Buttercup Yellow & Onyx Polka",
    "originalPrice": 2499,
    "price": 2249,
    "badge": "10% OFF",
    "images": [
      "/images/catalog/dress-yellow-polka-front.jpg",
      "/images/catalog/dress-yellow-polka-back.jpg"
    ],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "style": "One-Shoulder Flared Midi Dress",
    "fabric": "100% Breathable Fine Indian Cotton",
    "fit": "Asymmetrical one-shoulder neckline with draped scarf tie & voluminous flared skirt",
    "description": "Joyous retro charm meets modern resort elegance. Crafted in sunny buttercup yellow cotton with bold onyx polka dots, featuring an architectural one-shoulder neckline, attached flowing neck scarf, cinched gathered waist, and an expansive twirl-worthy flared midi skirt."
  },
  {
    "id": "prod-coord-green-ikat",
    "name": "Avani Emerald Ikat Vest & Slit Maxi Skirt Set",
    "category": "coord-sets",
    "featuredCategory": "coord-sets",
    "color": "Emerald Green Ikat",
    "originalPrice": 1748,
    "price": 1589,
    "badge": "10% OFF",
    "images": [
      "/images/catalog/coord-green-ikat-front.jpg",
      "/images/catalog/coord-green-ikat-back.jpg"
    ],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "style": "2-Piece Waistcoat & Slit Skirt Set",
    "fabric": "100% Handloom Cotton Ikat",
    "fit": "Cropped tailored waistcoat with high-slit buttoned maxi skirt",
    "description": "Artisanal handloom ikat weave in deep emerald green. Features a sleeveless V-neck buttoned waistcoat paired with a high-waisted maxi skirt showcasing delicate loop button accents and an elegant side slit."
  },
  {
    "id": "prod-coord-pink-swissdot",
    "name": "Gulabi Swiss Dot Flared Tunic & Mini Skirt Set",
    "category": "coord-sets",
    "featuredCategory": "coord-sets",
    "color": "Pastel Blush Pink",
    "originalPrice": 1649,
    "price": 1499,
    "badge": "10% OFF",
    "images": [
      "/images/catalog/coord-pink-swissdot-front.jpg",
      "/images/catalog/coord-pink-swissdot-back.jpg",
      "/images/catalog/coord-pink-swissdot-detail.jpg"
    ],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "style": "2-Piece Flared Tunic & Mini Skirt Set",
    "fabric": "Pure Cotton Swiss Dot (Dobby Weave)",
    "fit": "Front-slit flared tunic with lace-up corset back & tailored mini skirt",
    "description": "Delicate feminine tailoring in breathable blush pink Swiss dot cotton. Features flared bell sleeves, covered fabric buttons, open front slit, an adjustable lace-up corset tie back, and matching A-line mini skirt."
  },
  {
    "id": "prod-prism-coord",
    "name": "Prism Abstract Peplum Top & Wide-Leg Palazzo Set",
    "category": "coord-sets",
    "featuredCategory": "coord-sets",
    "color": "Slate & Sand Brushstroke",
    "originalPrice": 2089,
    "price": 1899,
    "badge": "10% OFF",
    "images": [
      "/images/catalog/coord-brushstroke-peplum-front.jpg",
      "/images/catalog/coord-brushstroke-peplum-back.jpg",
      "/images/catalog/coord-brushstroke-peplum-editorial.jpg",
      "/images/catalog/coord-brushstroke-peplum-mannequin.jpg"
    ],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "style": "2-Piece Peplum & Palazzo Set",
    "fabric": "100% Soft Structured Cotton",
    "fit": "Tailored peplum waist with breezy wide-leg palazzo pants",
    "description": "Contemporary abstract geometric brushstrokes in muted slate and sand earth tones. Features a sleeveless boatneck peplum silhouette with rear keyhole fastening and relaxed wide-leg trousers."
  },
  {
    "id": "prod-coord-terracotta-corset",
    "name": "Surya Terracotta Block Print Tunic & Skirt Set",
    "category": "coord-sets",
    "featuredCategory": "coord-sets",
    "color": "Warm Terracotta & Sand",
    "originalPrice": 1748,
    "price": 1589,
    "badge": "10% OFF",
    "images": [
      "/images/catalog/coord-terracotta-corset-front.jpg",
      "/images/catalog/coord-terracotta-corset-back.jpg"
    ],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "style": "2-Piece Longline Tunic & Skirt Set",
    "fabric": "Pure Cotton Block Print",
    "fit": "Button-front slit tunic with lace-up corset back & matching skirt",
    "description": "Heritage floral booti block print in earthy terracotta hues. Features chevron border trim, flared bell sleeves, button-down front slit, adjustable lace-up corset ties at back, and a coordinated mini skirt."
  },
  {
    "id": "prod-noir-vest-trousers",
    "name": "Noir Linen Tailored Waistcoat & Trouser Set",
    "category": "coord-sets",
    "featuredCategory": "coord-sets",
    "color": "Onyx Jet Black",
    "originalPrice": 2599,
    "price": 2339,
    "badge": "10% OFF",
    "images": [
      "/images/catalog/coord-noir-tailored-vest-front.jpg",
      "/images/catalog/coord-noir-tailored-vest-back.jpg"
    ],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "style": "2-Piece Waistcoat & Trouser Set",
    "fabric": "Premium Cotton Linen Suiting",
    "fit": "V-neck tailored waistcoat with self-tie belt & wide-leg trousers",
    "description": "Effortless power dressing in breathable pure cotton linen. Features a deep V-neck buttoned waistcoat with cinching sash belt and tailored front-pleat wide-leg trousers with deep pockets."
  },
  {
    "id": "prod-beige-vest-set",
    "name": "Sahara Sand Tailored Linen Waistcoat & Trouser Set",
    "category": "coord-sets",
    "featuredCategory": "coord-sets",
    "color": "Oatmeal Beige / Sahara Sand",
    "originalPrice": 2599,
    "price": 2339,
    "badge": "10% OFF",
    "images": [
      "/images/catalog/coord-oatmeal-sand-vest-front.jpg",
      "/images/catalog/coord-oatmeal-sand-vest-back.jpg"
    ],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "style": "2-Piece Waistcoat & Trouser Set",
    "fabric": "Premium Cotton Linen Suiting",
    "fit": "V-neck tailored waistcoat with self-tie belt & wide-leg trousers",
    "description": "Understated neutral luxury in crisp oatmeal cotton linen. Sleeveless button-front waistcoat with sash belt paired with flattering high-waist relaxed wide-leg trousers."
  },
  {
    "id": "prod-coord-indigo-slate-vest",
    "name": "Indus Slate Blue Linen Waistcoat & Palazzo Set",
    "category": "coord-sets",
    "featuredCategory": "coord-sets",
    "color": "Denim Slate Blue",
    "originalPrice": 2499,
    "price": 2249,
    "badge": "10% OFF",
    "images": [
      "/images/catalog/coord-indigo-slate-vest-front.jpg",
      "/images/catalog/coord-indigo-slate-vest-back.jpg"
    ],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "style": "2-Piece Square-Neck Vest & Palazzo Set",
    "fabric": "100% Washed Linen Cotton",
    "fit": "Square neck buttoned waistcoat with voluminous flared palazzos",
    "description": "Breezy architectural summer tailoring in slate denim blue washed linen. Features a modern square neckline, buttoned waistcoat bodice, and flowing wide-leg palazzo pants."
  },
  {
    "id": "prod-noir-cutout-jumpsuit",
    "name": "Nocturne Onyx Cutout Cross-Front Jumpsuit Set",
    "category": "coord-sets",
    "featuredCategory": "coord-sets",
    "color": "Jet Onyx Black",
    "originalPrice": 2699,
    "price": 2429,
    "badge": "10% OFF",
    "images": [
      "/images/catalog/coord-onyx-cutout-jumpsuit-front.jpg",
      "/images/catalog/coord-onyx-cutout-jumpsuit-back.jpg"
    ],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "style": "Cutout Wide-Leg Jumpsuit Set",
    "fabric": "Structured Cotton Linen Twill",
    "fit": "Crossover sweetheart bodice with flank cutouts & wide-leg trousers",
    "description": "Striking evening couture silhouette featuring architectural crossover wrap bodice, delicate gold strap accents, sculpted side waist cutouts, and floor-sweeping tailored wide-leg trousers."
  },
  {
    "id": "prod-coord-noir-halter-booti",
    "name": "Zeenat Noir Halter Booti Vest & Palazzo Set",
    "category": "coord-sets",
    "featuredCategory": "coord-sets",
    "color": "Monochrome Black & Silver Floral",
    "originalPrice": 2499,
    "price": 2249,
    "badge": "10% OFF",
    "images": [
      "/images/catalog/coord-noir-halter-booti-front.jpg",
      "/images/catalog/coord-noir-halter-booti-back.jpg"
    ],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "style": "2-Piece Halter Vest & Palazzo Set",
    "fabric": "Pure Cotton Handblock Weave",
    "fit": "V-neck halter waistcoat with open back & flared wide palazzo pants",
    "description": "Intricate floral booti block print on rich black cotton. Features a sleek V-neck halter waistcoat top with button closure, backless collar, and easy pull-on wide-leg palazzo trousers with pockets."
  },
  {
    "id": "prod-royal-blue-gown",
    "name": "Neelam Indigo Floral Halter Staircase Evening Gown",
    "category": "dresses",
    "featuredCategory": "dresses",
    "color": "Indigo Sapphire & Botanical Motif",
    "originalPrice": 2699,
    "price": 2429,
    "badge": "10% OFF",
    "images": [
      "/images/catalog/dress-sapphire-halter-front.jpg",
      "/images/catalog/dress-sapphire-halter-back.jpg"
    ],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "style": "Halter Choker Column Evening Gown",
    "fabric": "100% Pure Indian Handblock Printed Cotton",
    "fit": "Choker neck with long draped streamers, open corset back & column maxi fall",
    "description": "Sophisticated bohemian evening couture. Rendered in rich indigo sapphire with subtle tonal floral motifs. Features a statement choker neckline with long trailing fabric streamers, backless silhouette with lace-up corset ties, and an elongated fluid maxi fall."
  },
  {
    "id": "prod-navy-garden-dress",
    "name": "Nocturne Navy Corset-Bodice Garden Midi Dress",
    "category": "dresses",
    "featuredCategory": "dresses",
    "color": "Midnight Navy Blue",
    "originalPrice": 2599,
    "price": 2339,
    "badge": "10% OFF",
    "images": [
      "/images/catalog/dress-navy-garden-front.jpg",
      "/images/catalog/dress-navy-garden-back.jpg"
    ],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "style": "Corset-Bodice Flared Garden Dress",
    "fabric": "100% Pure Structured Cotton Poplin",
    "fit": "Deep sweetheart bodice with bow tie & lace-up corset back",
    "description": "Romantic cottagecore elegance in deep midnight navy. Designed with a plunging sweetheart neckline, delicate front bust tie, structured boned corset bodice, adjustable criss-cross lace-up back, and a full flowing pleated skirt with hidden side pockets."
  }
];

