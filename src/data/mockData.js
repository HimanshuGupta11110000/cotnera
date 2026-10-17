export const BRAND = {
  name: "COTNERA",
  tagline: "wear it. style it. rewear it.",
  phone: "+91 63979 43289",
  whatsapp: "+91 63979 43289",
  upiId: "6397943289@upi",
  upiName: "COTNERA",
  instagram: "https://instagram.com/cotnera__",
  instagramHandle: "@cotnera__",
  founders: "Akanksha & Riya",
  supportHours: "Monday to Saturday, 10am to 7pm IST",
  address: "Handcrafted with love in India",
  currencySymbol: "₹",
  freeShippingThreshold: 1499,
  acceptedPayments: "Google Pay, PhonePe, Paytm, all UPI apps, Net Banking & Cash on Delivery (COD)",
};

export const NAV_LINKS = [
  { name: "Most Wanted", href: "#collection" },
  { name: "Co-ord Sets", href: "#collection" },
  { name: "Kurtis", href: "#collection" },
  { name: "Festive Collection", href: "#collection" },
  { name: "Dresses", href: "#collection" },
];

export const MEGA_MENU_DROPS = [
  { name: "MOST WANTED", href: "#collection" },
  { name: "CO-ORD SETS", href: "#collection" },
  { name: "KURTIS & PALAZZO", href: "#collection" },
  { name: "FESTIVE COLLECTION", href: "#collection" },
  { name: "DRESSES & GOWNS", href: "#collection" },
  { name: "SHOP ALL PIECES", href: "#collection" },
];

export const MEGA_MENU_COLLECTIONS = [
  {
    category: "SECTIONS",
    items: [
      { name: "Most Wanted", isBold: true },
      { name: "Co-ord Sets" },
      { name: "Kurtis & Suits" },
      { name: "Festive Collection" },
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
      { name: "Diwali Festive Edit" },
      { name: "Everyday Minimal" },
      { name: "Peach Fuzz Edit" },
      { name: "Heritage Weaves" },
      { name: "View All Pieces", isBold: true },
    ],
  },
  {
    category: "COTNERA STUDIO",
    items: [
      { name: "By Akanksha & Riya" },
      { name: '"Wear It. Style It. Rewear It."' },
      { name: "Handcrafted in India" },
      { name: "10% Inaugural Drop Discount", isBold: true },
      { name: "Direct 1-Click UPI & COD" },
      { name: "Custom Sizing on WhatsApp" },
    ],
  },
];

export const CATEGORIES = [
  { id: "all", name: "All Pieces", count: "(22)" },
  { id: "most-wanted", name: "Most Wanted", count: "(6)" },
  { id: "coord-sets", name: "Co-ord Sets", count: "(8)" },
  { id: "kurtis", name: "Kurtis", count: "(4)" },
  { id: "festive", name: "Festive Collection", count: "(6)" },
  { id: "dresses", name: "Dresses", count: "(5)" },
];

export const STORIES = [
  {
    id: "story-1",
    title: "COTNEROTSAV '26",
    slides: [
      {
        image: "/images/catalog/IMG-20261017-WA0039.jpg",
        caption: "Sitara Halter Peplum Set",
        productLink: "#collection",
        productName: "Sitara Halter Set",
      },
      {
        image: "/images/catalog/IMG-20261017-WA0043.jpg",
        caption: "Denim Halter Maxi Dress",
        productLink: "#collection",
        productName: "Denim Halter Dress",
      },
    ],
  },
  {
    id: "story-2",
    title: "MOST WANTED",
    slides: [
      {
        image: "/images/catalog/IMG-20261017-WA0032.jpg",
        caption: "Beige Tailored Vest & Trouser Set",
        productLink: "#collection",
        productName: "Beige Vest Set",
      },
      {
        image: "/images/catalog/IMG-20261017-WA0029.jpg",
        caption: "Prism Geometric Peplum Co-ord",
        productLink: "#collection",
        productName: "Prism Co-ord",
      },
    ],
  },
  {
    id: "story-3",
    title: "FESTIVE EDIT",
    slides: [
      {
        image: "/images/catalog/IMG-20261017-WA0027.jpg",
        caption: "Surya Rust Orange Anarkali",
        productLink: "#collection",
        productName: "Surya Anarkali",
      },
    ],
  },
];

// All clustered products from real shoot photos & WhatsApp chat prices (Cut price -> 10% discount)
export const PRODUCTS = [
  {
    id: "prod-denim-halter",
    name: "Denim Chambray Halter Maxi Dress",
    category: "dresses",
    featuredCategory: "most-wanted",
    color: "Indigo Chambray",
    originalPrice: 2499,
    price: 2249, // 10% discount: 2499 * 0.9 = 2249
    badge: "Bestseller",
    images: [
      "/images/catalog/IMG-20261017-WA0043.jpg",
      "/images/catalog/IMG-20261018-WA0010.jpg",
      "/images/catalog/IMG-20261018-WA0016.jpg",
      "/images/catalog/IMG-20261018-WA0018.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Breathable pure chambray cotton halter maxi dress. Features tiered flared hemline, flattering fitted waist with smocked elastic back, and deep neck halter tie.",
  },
  {
    id: "prod-sitara-peplum",
    name: "Sitara Halter Peplum & Trouser Set",
    category: "coord-sets",
    featuredCategory: "most-wanted",
    color: "Ivory & Subtle Gold",
    originalPrice: 2599,
    price: 2339, // 10% discount: 2599 * 0.9 = 2339
    badge: "Gold Foil Slub",
    images: [
      "/images/catalog/IMG-20261017-WA0039.jpg",
      "/images/catalog/IMG-20261017-WA0050.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Delicate gold metallic leaf motifs on pure cotton slub. Features halter neckline with tie-back bow, pleated peplum waist, and coordinating tailored wide-leg trousers with deep pockets.",
  },
  {
    id: "prod-beige-vest",
    name: "Beige Tailored Vest & Trouser Set",
    category: "coord-sets",
    featuredCategory: "most-wanted",
    color: "Warm Sand / Beige",
    originalPrice: 2499,
    price: 2249, // 10% discount: 2499 * 0.9 = 2249
    badge: "Tailored Luxe",
    images: [
      "/images/catalog/IMG-20261017-WA0032.jpg",
      "/images/catalog/IMG-20261017-WA0038.jpg",
      "/images/catalog/IMG-20261018-WA0000.jpg",
      "/images/catalog/IMG-20261018-WA0002.jpg",
      "/images/catalog/IMG-20261018-WA0029.jpg",
      "/images/catalog/IMG-20261018-WA0030.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Structured high-fashion tailoring in lightweight cotton linen blend. Sleeveless button-front waistcoat paired with pleated high-waisted relaxed trousers.",
  },
  {
    id: "prod-prism-coord",
    name: "Prism Geometric Peplum Co-ord Set",
    category: "coord-sets",
    featuredCategory: "most-wanted",
    color: "Slate & Sand Geometric",
    originalPrice: 2200,
    price: 1980, // 10% discount: 2200 * 0.9 = 1980
    badge: "Pure Cotton",
    images: [
      "/images/catalog/IMG-20261017-WA0029.jpg",
      "/images/catalog/IMG-20261017-WA0040.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Contemporary abstract geometric print on breathable pure cotton. Sleeveless peplum top with keyhole button back closure and relaxed wide-leg trousers.",
  },
  {
    id: "prod-indigo-kurti",
    name: "Indigo Floral Peplum Kurti & Palazzo Set",
    category: "kurtis",
    featuredCategory: "most-wanted",
    color: "Indigo Blue Print",
    originalPrice: 1999,
    price: 1799, // 10% discount: 1999 * 0.9 = 1799
    badge: "Handblock Indigo",
    images: [
      "/images/catalog/IMG-20260930-WA0007.jpg",
      "/images/catalog/IMG-20261017-WA0045.jpg",
      "/images/catalog/IMG-20261017-WA0046.jpg",
      "/images/catalog/IMG-20261018-WA0001.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Artisanal handblock-inspired indigo floral printed peplum kurti with bell sleeves, paired with airy coordinating palazzo pants in 100% fine cotton.",
  },
  {
    id: "prod-noir-vest",
    name: "Noir Black Peplum Vest & Trouser Set",
    category: "coord-sets",
    featuredCategory: "most-wanted",
    color: "Jet Black",
    originalPrice: 1899,
    price: 1709, // 10% discount: 1899 * 0.9 = 1709
    badge: "Jet Black Luxe",
    images: [
      "/images/catalog/IMG-20261017-WA0030.jpg",
      "/images/catalog/IMG-20261017-WA0031.jpg",
      "/images/catalog/IMG-20261018-WA0004.jpg",
      "/images/catalog/IMG-20261018-WA0005.jpg",
      "/images/catalog/IMG-20261018-WA0006.jpg",
      "/images/catalog/IMG-20261018-WA0008.jpg",
      "/images/catalog/IMG-20261018-WA0013.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Sleek and structured everyday luxury. Tailored sleeveless peplum waistcoat with cinched waist belt and matching straight-leg trousers.",
  },
  {
    id: "prod-peach-floral-kurti",
    name: "Peach Floral Printed Kurti with Tie Belt",
    category: "kurtis",
    featuredCategory: "kurtis",
    color: "Peach Rust Floral",
    originalPrice: 2369,
    price: 2132, // 10% discount: 2369 * 0.9 = 2132.1 -> 2132
    badge: "Peach Edit",
    images: [
      "/images/catalog/IMG-20261017-WA0042.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Floral longline kurti dress crafted in lightweight breathable cotton, featuring self-fabric tie waist belt and side slits.",
  },
  {
    id: "prod-yellow-polka-anarkali",
    name: "Mustard Polka & Gold Festive Gown",
    category: "festive",
    featuredCategory: "festive",
    color: "Mustard Yellow",
    originalPrice: 1800,
    price: 1620, // 10% discount: 1800 * 0.9 = 1620
    badge: "Festive Edit",
    images: [
      "/images/catalog/IMG-20261017-WA0041.jpg",
      "/images/catalog/IMG-20261018-WA0009.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Festive flared anarkali gown in vibrant mustard with delicate polka accents, golden piping and handcrafted dori back ties.",
  },
  {
    id: "prod-royal-blue-gown",
    name: "Royal Blue Halter Staircase Evening Gown",
    category: "dresses",
    featuredCategory: "dresses",
    color: "Royal Sapphire Blue",
    originalPrice: 2699,
    price: 2429, // 10% discount: 2699 * 0.9 = 2429.1 -> 2429
    badge: "Evening Luxe",
    images: [
      "/images/catalog/IMG-20261017-WA0037.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Floor-length royal sapphire blue halter neck gown. Flattering silhouette crafted for cocktail evenings and wedding festivities.",
  },
  {
    id: "prod-sky-blue-lehenga",
    name: "Sky Blue Handblock Crop Top & Lehenga Skirt",
    category: "festive",
    featuredCategory: "festive",
    color: "Sky Blue Print",
    originalPrice: 2199,
    price: 1979, // 10% discount: 2199 * 0.9 = 1979.1 -> 1979
    badge: "Handblock Festive",
    images: [
      "/images/catalog/IMG-20261017-WA0036.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Traditional handblock floral print in serene sky blue. Sleeveless fitted crop top paired with high-volume flared lehenga skirt with drawstring latkans.",
  },
  {
    id: "prod-pink-lehenga",
    name: "Blush Pink Handblock Crop Top & Lehenga Skirt",
    category: "festive",
    featuredCategory: "festive",
    color: "Blush Rose Pink",
    originalPrice: 2199,
    price: 1979, // 10% discount: 2199 * 0.9 = 1979.1 -> 1979
    badge: "Handblock Festive",
    images: [
      "/images/catalog/IMG-20261017-WA0033.jpg",
      "/images/catalog/IMG-20261017-WA0035.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Delicate blush pink handblock floral print. Coordinated crop blouse with sweetheart neckline and flowing multi-meter flared cotton skirt.",
  },
  {
    id: "prod-navy-garden-dress",
    name: "Navy Blue Garden Tiered Maxi Dress",
    category: "dresses",
    featuredCategory: "dresses",
    color: "Midnight Navy",
    originalPrice: 1899,
    price: 1709, // 10% discount: 1899 * 0.9 = 1709.1 -> 1709
    badge: "Garden Tiered",
    images: [
      "/images/catalog/IMG-20261017-WA0034.jpg",
      "/images/catalog/IMG-20261018-WA0037.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Effortless sleeveless tier dress in deep midnight navy cotton. Multiple gathering tiers create fluid movement for outdoor brunches and vacations.",
  },
  {
    id: "prod-pink-organza-anarkali",
    name: "Gulabo Pink Flowy Organza Anarkali Gown",
    category: "festive",
    featuredCategory: "festive",
    color: "Rose Pink Organza",
    originalPrice: 3299,
    price: 2969, // 10% discount: 3299 * 0.9 = 2969.1 -> 2969
    badge: "Pure Organza",
    images: [
      "/images/catalog/IMG-20261017-WA0053.jpg",
      "/images/catalog/IMG-20261017-WA0054.jpg",
      "/images/catalog/IMG-20261018-WA0025.jpg",
      "/images/catalog/IMG-20261018-WA0033.jpg",
      "/images/catalog/IMG-20261018-WA0036.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Dreamy rose pink flowy organza anarkali with deep back detailing, delicate latkan tassels and sheer matching dupatta.",
  },
  {
    id: "prod-rust-orange-anarkali",
    name: "Surya Rust Orange Deep Back Festive Anarkali",
    category: "festive",
    featuredCategory: "festive",
    color: "Rust Orange",
    originalPrice: 3499,
    price: 3149, // 10% discount: 3499 * 0.9 = 3149.1 -> 3149
    badge: "Deep Back Gown",
    images: [
      "/images/catalog/IMG-20261017-WA0027.jpg",
      "/images/catalog/IMG-20261018-WA0034.jpg",
      "/images/catalog/IMG-20261018-WA0035.jpg",
      "/images/catalog/IMG-20261018-WA0038.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Warm sunset rust orange anarkali gown in pure chanderi weave. Dramatic deep back cutout with handcrafted dori ties and border dupatta.",
  },
  {
    id: "prod-maya-ikat-dress",
    name: "Maya Handloom Green Ikat Slit Dress",
    category: "dresses",
    featuredCategory: "dresses",
    color: "Olive Green & Gold",
    originalPrice: 2699,
    price: 2429, // 10% discount: 2699 * 0.9 = 2429.1 -> 2429
    badge: "Handloom Ikat",
    images: [
      "/images/catalog/IMG-20261018-WA0020.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Handcrafted in authentic green & gold Ikat weave. Sleeveless V-neck midi dress featuring covered button closure and thigh-high side slit with potli detailing.",
  },
  {
    id: "prod-olive-peplum-kurti",
    name: "Kasturi Olive Floral Peplum Kurti & Palazzo",
    category: "kurtis",
    featuredCategory: "kurtis",
    color: "Olive Sage Print",
    originalPrice: 1999,
    price: 1799, // 10% discount: 1999 * 0.9 = 1799
    badge: "Pure Cotton",
    images: [
      "/images/catalog/IMG-20261018-WA0003.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Lightweight sage olive green peplum style kurti with all-over botanical booti motifs, paired with wide palazzo pants.",
  },
  {
    id: "prod-black-sheer-shrug",
    name: "Noir Sheer Embroidered Overlay Shrug",
    category: "coord-sets",
    featuredCategory: "coord-sets",
    color: "Sheer Noir Black",
    originalPrice: 1499,
    price: 1349, // 10% discount: 1499 * 0.9 = 1349.1 -> 1349
    badge: "Layering Luxe",
    images: [
      "/images/catalog/IMG-20261018-WA0007.jpg",
      "/images/catalog/IMG-20261018-WA0011.jpg",
    ],
    sizes: ["Free Size (XS-XXL)"],
    description: "Translucent black organza sheer open jacket with delicate tonal threadwork. An effortless layering piece over halters, jumpsuits and kurti sets.",
  },
  {
    id: "prod-red-halter-top",
    name: "Scarlet Crimson Halter Backless Top",
    category: "coord-sets",
    featuredCategory: "coord-sets",
    color: "Crimson Red Print",
    originalPrice: 1599,
    price: 1439, // 10% discount: 1599 * 0.9 = 1439.1 -> 1439
    badge: "Summer Edit",
    images: [
      "/images/catalog/IMG-20261018-WA0014.jpg",
      "/images/catalog/IMG-20261018-WA0031.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Vibrant scarlet red floral printed halter top with adjustable neck ties and open back silhouette in soft cotton poplin.",
  },
  {
    id: "prod-black-halter-top",
    name: "Nocturne Black Printed Halter Top",
    category: "coord-sets",
    featuredCategory: "coord-sets",
    color: "Monochrome Black Print",
    originalPrice: 1599,
    price: 1439, // 10% discount: 1599 * 0.9 = 1439.1 -> 1439
    badge: "Minimal Chic",
    images: [
      "/images/catalog/IMG-20261018-WA0019.jpg",
      "/images/catalog/IMG-20261018-WA0026.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Contemporary black & ivory printed halter neck top with neck binding and tie back. Style with trousers or lehengas.",
  },
  {
    id: "prod-monochrome-jumpsuit",
    name: "Monochrome Geometric Sleeveless Jumpsuit",
    category: "dresses",
    featuredCategory: "dresses",
    color: "Black & Cream",
    originalPrice: 2599,
    price: 2339, // 10% discount: 2599 * 0.9 = 2339.1 -> 2339
    badge: "Urban Luxe",
    images: [
      "/images/catalog/IMG-20261018-WA0022.jpg",
      "/images/catalog/IMG-20261018-WA0027.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Wide-leg sleeveless jumpsuit in geometric optical cotton print. Featuring square neck, cinched waist, and seamless deep side pockets.",
  },
  {
    id: "prod-pink-peplum-skort",
    name: "Petal Pink Collared Peplum & Skort Set",
    category: "coord-sets",
    featuredCategory: "coord-sets",
    color: "Petal Blush Pink",
    originalPrice: 2399,
    price: 2159, // 10% discount: 2399 * 0.9 = 2159.1 -> 2159
    badge: "Cotton Co-ord",
    images: [
      "/images/catalog/IMG-20261017-WA0052.jpg",
      "/images/catalog/IMG-20261018-WA0015.jpg",
      "/images/catalog/IMG-20261018-WA0023.jpg",
      "/images/catalog/IMG-20261018-WA0024.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Modern Parisian chic in Indian cotton. Collared sleeveless peplum button-down top with matching wrap skort featuring an elasticated back waist.",
  },
  {
    id: "prod-rust-tiered-skirt",
    name: "Terracotta Rust Tiered Ruffle Mini Skirt",
    category: "coord-sets",
    featuredCategory: "coord-sets",
    color: "Terracotta Rust",
    originalPrice: 1699,
    price: 1529, // 10% discount: 1699 * 0.9 = 1529.1 -> 1529
    badge: "Tiered Ruffles",
    images: [
      "/images/catalog/IMG-20261017-WA0051.jpg",
      "/images/catalog/IMG-20261018-WA0021.jpg",
      "/images/catalog/IMG-20261018-WA0028.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Playful double-tiered ruffle mini skirt in breathable earthy terracotta cotton. Concealed side zip closure with comfortable inner cotton lining.",
  },
];
