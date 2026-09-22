/**
 * Prime Leaf Processing — CMS Configuration
 * ==========================================
 * This file is the single source of truth for all editable website content.
 * Developers/administrators: update values here to reflect changes across the site.
 * Fields marked [TO BE PROVIDED] require real company data before launch.
 *
 * Future: This file can be replaced by a backend CMS API call.
 */

const COMPANY_CONFIG = {
  name: "Prime Leaf Processing",
  tagline: "Cut-Rag & Cut Rolled Expanded Stems (CRES) Processing",
  country: "Bangladesh",
  website: "www.primeleafp.com",

  // Contact — update before launch
  email: "info@primeleafp.com",
  phone: "+880 31 740 000",
  whatsapp: "+880 17 000 00000",
  address: {
    line1: "Plot # 528A",
    line2: "BEPZA EZ",
    city: "Chattogram",
    country: "Bangladesh",
    full: "Plot # 528A, BEPZA EZ, Chattogram, Bangladesh"
  },
  businessHours: "Sunday–Thursday, 09:00–18:00 BST",

  // Social media
  social: {
    linkedin: "#",
    facebook: "#",
    instagram: "#",
    youtube: "#"
  },

  // Logo paths
  logo: {
    main: "assets/images/logo.png",
    svg: null,
    alt: "Prime Leaf Processing Logo",
    width: 180,
    height: 60
  }
};

// ---------------------------------------------------------------------------
// STATISTICS
// ---------------------------------------------------------------------------
const STATS_CONFIG = [
  { value: "36 000", suffix: " Tonnes", label: "Annual Processing Capacity", placeholder: "36 000 Tonnes Annually" },
  { value: "+35", suffix: "%", label: "CRES Filling Power Increase", placeholder: "+35%" },
  { value: "±0.5", suffix: "%", label: "Moisture Control Precision", placeholder: "±0.5%" },
  { value: "25", suffix: "+", label: "Years Technical Heritage", placeholder: "25+" },
  { value: "100", suffix: "%", label: "Specification-Driven B2B", placeholder: "100%" }
];

// ---------------------------------------------------------------------------
// PRODUCTS (Exclusively Cut Rag & Cut Rolled Expanded Stems)
// ---------------------------------------------------------------------------
const PRODUCTS_CONFIG = [
  {
    id: "american-blend-cut-rag",
    title: "American Blend Cut-Rag",
    subtitle: "Classic Cigarette Blend (Virginia, Burley & Oriental)",
    description: "Our flagship cut-rag blend formulated with carefully balanced Virginia leaf, toasted Burley, and aromatic Oriental tobacco. Precision cut at 0.60mm–0.85mm with custom casing for international cigarette manufacturers.",
    image: "assets/images/product-cut-rag.jpg",
    tobacco_type: "Flue-Cured Virginia, Toasted Burley & Sun-Cured Oriental",
    processing: "Vacuum Conditioning · Flavor Casing · Precision Rotary Cutting · Drum Drying · Bulking",
    applications: ["King Size Cigarettes", "Super Slims & Queen Size", "Private Label OEM Cigarettes"],
    specifications: [
      "Cut Width: 0.60 mm – 0.85 mm (±0.03 mm)",
      "Moisture Content: 12.5% – 13.5% (±0.5%)",
      "Filling Value: 5.2 – 6.4 cm³/g (Borgwaldt)",
      "Sand & Dust (< 1.0mm): < 1.5%"
    ],
    packaging: ["Standard C-48 corrugated boxes (200 kg net) with hermetically sealed poly liner"],
    moq: "1 x 40ft HC (Approx. 20,000 kg) / 1 x 20ft FCL trial",
    availability: "Continuous Production & Scheduled Export",
    enabled: true,
    featured: true
  },
  {
    id: "virginia-blend-cut-rag",
    title: "Virginia Gold Cut-Rag",
    subtitle: "100% Selected Flue-Cured Virginia Lamina",
    description: "Pure flue-cured Virginia cut-rag known for its bright golden color, naturally high reducing sugars, and clean, sweet smoking character. Cut precisely to customer-agreed width and moisture parameters.",
    image: "assets/images/product-flue-cured.jpg",
    tobacco_type: "100% Grade-Selected Flue-Cured Virginia (FCV)",
    processing: "Thermal Conditioning · Light Sugar Casing · High-Speed Slicing · Rotary Aeration Drying",
    applications: ["English / British Style Cigarettes", "Premium Virginia Cigarettes", "Roll-Your-Own"],
    specifications: [
      "Cut Width: 0.55 mm – 0.80 mm",
      "Moisture Content: 12.0% – 13.5% (±0.5%)",
      "Natural Sugar Content: 14.0% – 20.0%",
      "Filling Value: 5.0 – 5.8 cm³/g"
    ],
    packaging: ["C-48 export cartons (200 kg net)"],
    moq: "1 x 20ft FCL (10,000 kg)",
    availability: "Available for Global Export",
    enabled: true,
    featured: true
  },
  {
    id: "ryo-myo-cut-rag",
    title: "Fine-Cut RYO & MYO Volume Cut-Rag",
    subtitle: "Hand-Rolling (0.35–0.50mm) & Machine Tubing (0.65–0.85mm)",
    description: "Specialty fine-cut tobacco processed with long, elastic strands designed specifically for consumer hand-rolling (RYO) and mechanical tubing machines (MYO). Engineered with high strand integrity to prevent fallout.",
    image: "assets/images/product-burley.jpg",
    tobacco_type: "Halfzware, Zware, and American Blend Profiles",
    processing: "Steam Conditioning · Elasticity Enhancer · Micro-Rotary Slicing · Low-Breakage Drying",
    applications: ["Roll-Your-Own (RYO) Pouches", "Make-Your-Own (MYO) Tubing Tins/Buckets"],
    specifications: [
      "Cut Width (RYO): 0.35 mm – 0.50 mm ultra-fine cut",
      "Cut Width (MYO): 0.65 mm – 0.85 mm high-volume cut",
      "Target Moisture: 14.0% – 16.0% (flexible for pouch life)",
      "Fiber Elasticity: High tensile strand retention"
    ],
    packaging: ["Bulk C-48 export cartons", "Vacuum-packed Master Bags"],
    moq: "1 x 20ft FCL",
    availability: "Custom Batches to Order",
    enabled: true,
    featured: true
  },
  {
    id: "cased-menthol-cut-rag",
    title: "Cased & Mentholated Cut-Rag",
    subtitle: "Controlled Flavor & Menthol Infused Blends",
    description: "Cut-rag infused with proprietary casings, aromatic top dressings, or high-purity natural menthol crystals. Processed in specialized closed-circuit flavor cylinders ensuring uniform aroma distribution without bleeding.",
    image: "assets/images/product-oriental.jpg",
    tobacco_type: "American Blend or Virginia Base with Flavor Treatment",
    processing: "Automated Flavor Kitchen · Closed-Loop Spray Cylinder · Maturing & Stabilizing Silos",
    applications: ["Menthol Cigarettes", "Flavored Tobacco Products", "Specialty Export Brands"],
    specifications: [
      "Menthol Application: 1.5% – 3.5% (uniform concentration)",
      "Cut Width: 0.60 mm – 0.80 mm",
      "Moisture Content: 12.5% – 13.5% (±0.5%)",
      "Aroma Stability: Hermetically sealed for marine transit"
    ],
    packaging: ["Foil-lined moisture-proof C-48 cartons (180–200 kg net)"],
    moq: "1 x 20ft FCL",
    availability: "Manufactured to Agreed Recipe",
    enabled: true,
    featured: false
  },
  {
    id: "custom-blends",
    title: "Custom Formulated Cut-Rag Blends",
    subtitle: "Tailored Cut Rag + CRES Formulations",
    description: "Bespoke cut-rag blends co-developed with client blenders. Incorporates lamina (Virginia, Burley, Oriental) with customer-specified proportions of Cut Rolled Expanded Stems (CRES) for maximum filling efficiency and cost reduction.",
    image: "assets/images/product-blends.jpg",
    tobacco_type: "Client-Defined Lamina Ratios + CRES (0–30%)",
    processing: "Silo Layering · Dual-Stage Blending · Precision Rotary Cutting · CRES Integration",
    applications: ["High-Yield Commercial Cigarette Manufacturing", "Cost-Optimized Private Label Brands"],
    specifications: [
      "Formulation: Tailored to target price, tar/nicotine & taste",
      "Filling Power: Up to 7.5 cm³/g with CRES inclusion",
      "Cut Width: 0.45 mm – 1.00 mm to specification",
      "Moisture: 11.5% – 14.0% to specification"
    ],
    packaging: ["C-48 corrugated cartons (200 kg net)"],
    moq: "20 Metric Tons (1 x 40ft HC)",
    availability: "Simulate via Online Blend Builder",
    enabled: true,
    featured: true
  },
  {
    id: "cut-rolled-stems",
    title: "Cut Rolled Expanded Stems (CRES / CRS)",
    subtitle: "High-Expansion Stems (+35% Filling Power)",
    description: "Engineered high-expansion stem filaments produced on our dedicated second line. Saturated steam conditioning, heavy rolling (<0.20mm), micro-cutting, and flash air expansion (250°C–300°C) deliver +35% filling power and significant raw lamina savings.",
    image: "assets/images/hero-facility.jpg",
    tobacco_type: "100% Selected Virginia & Burley Leaf Stems",
    processing: "Superheated Steam Conditioning · Dual-Roller Mill (≤0.2mm) · Precision Cutter (0.1–0.2mm) · Flash Air Expansion",
    applications: [
      "Blend Inclusion (15% to 30%) in Cigarette Rods",
      "Filling Power Enhancement & Weight Reduction",
      "Tar & Nicotine Smoke Delivery Optimization"
    ],
    specifications: [
      "Filling Power Boost: +35% to +40% over lamina",
      "Fiber Thickness: 0.10 – 0.20 mm",
      "Fiber Length: Up to 50 mm interlocking filaments",
      "Moisture: 11.5% – 13.5% (±0.5%)",
      "Lamina Savings: ~0.5% leaf saved per 1% CRES added"
    ],
    packaging: ["C-48 corrugated export cartons (200 kg net) with sealed poly liner"],
    moq: "1 x 40ft HC (Approx. 18,000–20,000 kg)",
    availability: "Available as Standalone or Pre-Blended",
    enabled: true,
    featured: true
  }
];

// ---------------------------------------------------------------------------
// PROCESSING STAGES
// ---------------------------------------------------------------------------
const PROCESSING_STAGES = [
  {
    number: "01",
    title: "Leaf Selection",
    subtitle: "Quality at the Source",
    description: "Selection and preparation of tobacco leaf according to required specifications. Incoming leaf is assessed for grade, type and quality compliance before entering the processing cycle.",
    icon: "icon-leaf",
    image: "assets/images/process-leaf-selection.jpg",
    quality_note: "All incoming leaf is inspected against agreed grade specifications."
  },
  {
    number: "02",
    title: "Threshing & Separation",
    subtitle: "Controlled Mechanical Processing",
    description: "Controlled mechanical threshing and separation of tobacco material, maintaining the integrity of leaf lamina while removing stems and non-tobacco material.",
    icon: "icon-machine",
    image: "assets/images/process-threshing.jpg",
    quality_note: "Foreign material control at this stage."
  },
  {
    number: "03",
    title: "Conditioning",
    subtitle: "Moisture & Physical Preparation",
    description: "Moisture and physical conditioning of tobacco before further processing. Controlled conditioning ensures leaf is in optimum condition for cutting and further operations.",
    icon: "icon-conditioning",
    image: "assets/images/process-conditioning.jpg",
    quality_note: "Moisture levels monitored and controlled."
  },
  {
    number: "04",
    title: "Cutting",
    subtitle: "Precision to Specification",
    description: "Precision cutting of tobacco to agreed customer cut-width specifications. Cut consistency is maintained throughout each production batch.",
    icon: "icon-cutting",
    image: "assets/images/process-cutting.jpg",
    quality_note: "Cut-width verification at regular intervals."
  },
  {
    number: "05",
    title: "Drying & Conditioning",
    subtitle: "Controlled Physical Characteristics",
    description: "Controlled drying and conditioning to achieve required physical characteristics and moisture levels as agreed with each customer.",
    icon: "icon-drying",
    image: "assets/images/process-drying.jpg",
    quality_note: "Final moisture verified against specification."
  },
  {
    number: "06",
    title: "Blending",
    subtitle: "Consistent Formulations",
    description: "Blending of tobacco types and grades according to customer-defined blend specifications and formulations. Blend consistency is maintained across batches.",
    icon: "icon-blend",
    image: "assets/images/process-blending.jpg",
    quality_note: "Blend composition verified before dispatch."
  },
  {
    number: "07",
    title: "Quality Control",
    subtitle: "Throughout the Cycle",
    description: "Inspection and testing throughout the processing cycle — from incoming leaf to finished product. Quality is controlled at each stage, not only at the end.",
    icon: "icon-quality",
    image: "assets/images/process-quality.jpg",
    quality_note: "Multi-stage quality verification."
  },
  {
    number: "08",
    title: "Packaging & Dispatch",
    subtitle: "Ready for Shipment",
    description: "Bulk or customer-specified packaging and shipment preparation. Documentation and logistics coordinated according to customer and destination requirements.",
    icon: "icon-packaging",
    image: "assets/images/process-packaging.jpg",
    quality_note: "Final packaging inspection before dispatch."
  }
];

// ---------------------------------------------------------------------------
// FACILITIES
// ---------------------------------------------------------------------------
const FACILITIES_CONFIG = [
  {
    id: "processing-facility",
    title: "Processing Facility",
    description: "Primary tobacco processing operations including threshing, conditioning and cutting production areas.",
    image: "assets/images/facility-processing.jpg",
    category: "production"
  },
  {
    id: "raw-storage",
    title: "Raw Tobacco Storage",
    description: "Controlled warehouse and storage areas for incoming raw tobacco leaf prior to processing.",
    image: "assets/images/facility-storage.jpg",
    category: "storage"
  },
  {
    id: "blending",
    title: "Blending Facility",
    description: "Dedicated blending and preparation operations for custom tobacco blend production.",
    image: "assets/images/facility-blending.jpg",
    category: "production"
  },
  {
    id: "conditioning",
    title: "Conditioning Systems",
    description: "Controlled moisture and physical conditioning systems throughout the production process.",
    image: "assets/images/facility-conditioning.jpg",
    category: "production"
  },
  {
    id: "cut-rag-production",
    title: "Cut-Rag Production",
    description: "Precision cutting and cut-rag processing equipment for specification-driven production.",
    image: "assets/images/facility-cutting.jpg",
    category: "production"
  },
  {
    id: "quality-lab",
    title: "Quality Control",
    description: "Laboratory and inspection facilities supporting quality verification throughout the processing cycle.",
    image: "assets/images/facility-lab.jpg",
    category: "quality"
  },
  {
    id: "packaging-logistics",
    title: "Packaging & Logistics",
    description: "Bulk packaging operations and shipment preparation area.",
    image: "assets/images/facility-packaging.jpg",
    category: "logistics"
  },
  {
    id: "warehouse",
    title: "Finished Goods Warehouse",
    description: "Storage and handling of finished processed tobacco prior to dispatch.",
    image: "assets/images/facility-warehouse.jpg",
    category: "storage"
  }
];

// ---------------------------------------------------------------------------
// GLOBAL MARKETS
// ---------------------------------------------------------------------------
const MARKETS_CONFIG = [
  {
    id: "south-asia",
    region: "South Asia",
    status: "current", // "current" | "target" | "developing" | "partner"
    description: "Key operating region. Bangladesh-based operations serving regional and international customers.",
    countries: ["Bangladesh", "India", "Sri Lanka"]
  },
  {
    id: "southeast-asia",
    region: "Southeast Asia",
    status: "target",
    description: "Target export market for processed tobacco and cut-rag supply.",
    countries: ["[To be confirmed]"]
  },
  {
    id: "middle-east",
    region: "Middle East",
    status: "target",
    description: "Developing business relationships with tobacco importers and traders in the region.",
    countries: ["[To be confirmed]"]
  },
  {
    id: "africa",
    region: "Africa",
    status: "target",
    description: "Target market for B2B tobacco processing supply partnerships.",
    countries: ["[To be confirmed]"]
  },
  {
    id: "europe",
    region: "Europe",
    status: "target",
    description: "Pursuing international business development with European tobacco trading companies.",
    countries: ["[To be confirmed]"]
  },
  {
    id: "other",
    region: "Other International",
    status: "developing",
    description: "Open to international business enquiries globally.",
    countries: []
  }
];

// ---------------------------------------------------------------------------
// QUALITY CONTROL CHECKPOINTS
// ---------------------------------------------------------------------------
const QUALITY_CONFIG = {
  statement: "Quality is controlled at every stage — from incoming leaf to finished cut-rag.",
  certifications: [], // Add verified certifications only — e.g. { name: "ISO 9001", body: "...", year: "..." }
  checkpoints: [
    { id: "raw-inspection", title: "Raw Leaf Inspection", description: "All incoming tobacco leaf is inspected against agreed grade and quality specifications before entering the processing cycle." },
    { id: "moisture-control", title: "Moisture Control", description: "Moisture levels are monitored and controlled at multiple points throughout the conditioning and drying stages." },
    { id: "grade-verification", title: "Grade Verification", description: "Tobacco grade and type are verified against customer order requirements at key stages." },
    { id: "physical-inspection", title: "Physical Inspection", description: "Physical characteristics of tobacco are assessed during and after processing operations." },
    { id: "cut-width", title: "Cut-Width Consistency", description: "Cut-width measurements are verified at regular intervals during cutting operations to ensure consistency." },
    { id: "foreign-material", title: "Foreign-Material Control", description: "Non-tobacco material (NTM) and foreign material controls are applied throughout the process." },
    { id: "batch-traceability", title: "Batch Traceability", description: "Each production batch is recorded and traceable from incoming raw material through to finished product dispatch." },
    { id: "packaging-inspection", title: "Packaging Inspection", description: "Finished product packaging is inspected before dispatch to confirm condition and labelling accuracy." },
    { id: "final-verification", title: "Final Product Verification", description: "Final product is verified against agreed customer specifications before release for shipment." }
  ]
};

// ---------------------------------------------------------------------------
// SUSTAINABILITY
// ---------------------------------------------------------------------------
const SUSTAINABILITY_CONFIG = {
  headline: "Responsible Processing",
  statement: "Prime Leaf Processing is committed to operating responsibly across its supply chain, processing operations and business relationships.",
  pillars: [
    { title: "Responsible Tobacco Sourcing", description: "Working to source raw tobacco leaf from responsible supply sources in accordance with applicable requirements.", icon: "icon-leaf" },
    { title: "Resource Efficiency", description: "Pursuing continuous improvement in the efficient use of resources across processing operations.", icon: "icon-efficiency" },
    { title: "Waste Reduction", description: "Committed to minimising processing waste and identifying responsible disposal and utilisation routes.", icon: "icon-waste" },
    { title: "Energy Awareness", description: "Working towards greater energy awareness and efficiency within our processing facility.", icon: "icon-energy" },
    { title: "Agricultural Partnerships", description: "Supporting responsible agricultural practices within our tobacco supply network where possible.", icon: "icon-farming" },
    { title: "Environmental Awareness", description: "Operating with awareness of environmental responsibilities and working to reduce our environmental footprint.", icon: "icon-environment" },
    { title: "Community Engagement", description: "Committed to maintaining positive relationships with the communities in which we operate.", icon: "icon-community" }
  ],
  note: "Specific environmental metrics, statistics and certifications will be added as verified data becomes available."
};

// ---------------------------------------------------------------------------
// COMPANY TIMELINE (About page)
// ---------------------------------------------------------------------------
const TIMELINE_CONFIG = [
  { year: "[YYYY]", event: "Company Founded", description: "Prime Leaf Processing established in Chattogram, Bangladesh." },
  { year: "[YYYY]", event: "Facility Development", description: "Development and commissioning of the BEPZA EZ processing facility." },
  { year: "[YYYY]", event: "Processing Equipment Expansion", description: "Expansion of processing and cut-rag production capabilities." },
  { year: "[YYYY]", event: "International Market Development", description: "Development of international B2B customer relationships and export operations." },
  { year: "[YYYY]", event: "Continued Growth", description: "Ongoing investment in processing capability, quality systems and customer partnerships." }
];

// ---------------------------------------------------------------------------
// TEAM (About page)
// ---------------------------------------------------------------------------
const TEAM_CONFIG = [
  {
    name: "[Name — To Be Provided]",
    position: "Managing Director",
    bio: "[Biography to be provided]",
    photo: "assets/images/team-placeholder.jpg",
    linkedin: "#"
  },
  {
    name: "[Name — To Be Provided]",
    position: "Head of Processing Operations",
    bio: "[Biography to be provided]",
    photo: "assets/images/team-placeholder.jpg",
    linkedin: "#"
  },
  {
    name: "[Name — To Be Provided]",
    position: "Quality Control Manager",
    bio: "[Biography to be provided]",
    photo: "assets/images/team-placeholder.jpg",
    linkedin: "#"
  },
  {
    name: "[Name — To Be Provided]",
    position: "Commercial & Export Manager",
    bio: "[Biography to be provided]",
    photo: "assets/images/team-placeholder.jpg",
    linkedin: "#"
  }
];

// ---------------------------------------------------------------------------
// INSIGHTS / ARTICLES
// ---------------------------------------------------------------------------
const INSIGHTS_CONFIG = [
  {
    id: "understanding-cut-rag",
    title: "Understanding Cut-Rag Tobacco: Specifications and Processing",
    category: "Cut-Rag",
    date: "2025",
    excerpt: "An overview of the key parameters that define cut-rag tobacco quality — cut width, moisture, grade and blend composition — and how specification-driven processing delivers consistent results.",
    image: "assets/images/insight-cut-rag.jpg",
    author: "Prime Leaf Processing",
    enabled: true
  },
  {
    id: "tobacco-leaf-grading",
    title: "Tobacco Leaf Grading: The Foundation of Consistent Processing",
    category: "Tobacco Leaf",
    date: "2025",
    excerpt: "Leaf grading is the essential first step in producing consistent processed tobacco. This article explores the grading criteria and how they influence downstream processing quality.",
    image: "assets/images/insight-grading.jpg",
    author: "Prime Leaf Processing",
    enabled: true
  },
  {
    id: "b2b-sourcing-bangladesh",
    title: "Bangladesh as a Tobacco Processing Hub: Opportunities for International Buyers",
    category: "Markets",
    date: "2025",
    excerpt: "Bangladesh's strategic location, processing capability and B2B supply infrastructure make it a growing centre for international tobacco processing partnerships.",
    image: "assets/images/insight-bangladesh.jpg",
    author: "Prime Leaf Processing",
    enabled: true
  }
];

// ---------------------------------------------------------------------------
// SEO METADATA (per page)
// ---------------------------------------------------------------------------
const SEO_CONFIG = {
  default: {
    title: "Prime Leaf Processing | Tobacco Processing & Cut-Rag Manufacturing",
    description: "Prime Leaf Processing is a Bangladesh-based B2B tobacco processing company specialising in cut-rag tobacco processing, tobacco leaf processing, blending and specification-driven processing solutions.",
    keywords: "tobacco processing company Bangladesh, cut rag tobacco Bangladesh, cut rag tobacco processing, tobacco leaf processing, tobacco processing company, cut tobacco supplier, tobacco processing factory, tobacco leaf supplier Bangladesh, cut rag tobacco supplier, tobacco blending and processing"
  },
  pages: {
    index: {
      title: "Prime Leaf Processing | Tobacco Processing & Cut-Rag Manufacturing | Bangladesh",
      description: "Prime Leaf Processing — Bangladesh-based B2B tobacco processing and cut-rag manufacturing. Specification-driven processing for international manufacturers, traders and industry partners.",
      canonical: "https://www.primeleafp.com/"
    },
    about: {
      title: "About Prime Leaf Processing | B2B Tobacco Processing Company | Bangladesh",
      description: "Learn about Prime Leaf Processing — our mission, values, processing philosophy and commitment to consistent, specification-driven B2B tobacco processing from Chattogram, Bangladesh.",
      canonical: "https://www.primeleafp.com/about.html"
    },
    processing: {
      title: "Tobacco Processing Capabilities | Prime Leaf Processing | Bangladesh",
      description: "Our full tobacco processing capabilities — leaf selection, threshing, conditioning, precision cutting, drying, blending and quality control for B2B customers.",
      canonical: "https://www.primeleafp.com/processing.html"
    },
    products: {
      title: "Processed Tobacco Products | Cut-Rag & Leaf | Prime Leaf Processing",
      description: "B2B tobacco product catalogue — cut-rag tobacco, flue-cured, Burley, Oriental and custom tobacco blends processed to customer specifications in Bangladesh.",
      canonical: "https://www.primeleafp.com/products.html"
    },
    quality: {
      title: "Quality Control | Tobacco Processing Standards | Prime Leaf Processing",
      description: "Prime Leaf Processing quality control — multi-stage inspection and verification from incoming leaf to finished cut-rag, ensuring consistency for B2B customers.",
      canonical: "https://www.primeleafp.com/quality.html"
    },
    facilities: {
      title: "Processing Facilities | Prime Leaf Processing | Chattogram, Bangladesh",
      description: "Prime Leaf Processing facility — processing, blending, conditioning, cut-rag production, quality control and packaging operations in BEPZA EZ, Chattogram.",
      canonical: "https://www.primeleafp.com/facilities.html"
    },
    contact: {
      title: "Contact Prime Leaf Processing | B2B Tobacco Processing Enquiries",
      description: "Contact Prime Leaf Processing for B2B tobacco processing enquiries, cut-rag specifications, export information and commercial discussions.",
      canonical: "https://www.primeleafp.com/contact.html"
    },
    quote: {
      title: "Request a Quote | Cut-Rag & Tobacco Processing | Prime Leaf Processing",
      description: "Submit your tobacco processing or cut-rag specification for a professional B2B quotation from Prime Leaf Processing.",
      canonical: "https://www.primeleafp.com/quote.html"
    }
  }
};

// ---------------------------------------------------------------------------
// EXPORT — make all configs available globally
// ---------------------------------------------------------------------------
window.PLP = {
  COMPANY: COMPANY_CONFIG,
  STATS: STATS_CONFIG,
  PRODUCTS: PRODUCTS_CONFIG,
  PROCESSING: PROCESSING_STAGES,
  FACILITIES: FACILITIES_CONFIG,
  MARKETS: MARKETS_CONFIG,
  QUALITY: QUALITY_CONFIG,
  SUSTAINABILITY: SUSTAINABILITY_CONFIG,
  TIMELINE: TIMELINE_CONFIG,
  TEAM: TEAM_CONFIG,
  INSIGHTS: INSIGHTS_CONFIG,
  SEO: SEO_CONFIG
};
