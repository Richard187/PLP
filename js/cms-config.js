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
  tagline: "Tobacco Processing & Cut-Rag Manufacturing",
  country: "Bangladesh",
  website: "www.primeleafp.com",

  // Contact — update before launch
  email: "info@primeleafp.com",
  phone: "[TO BE PROVIDED]",
  whatsapp: "[TO BE PROVIDED]",
  address: {
    line1: "Plot # 528A",
    line2: "BEPZA EZ",
    city: "Chattogram",
    country: "Bangladesh",
    full: "Plot # 528A, BEPZA EZ, Chattogram, Bangladesh"
  },
  businessHours: "[TO BE PROVIDED — e.g. Sunday–Thursday, 09:00–18:00 BST]",

  // Social media — update with official account URLs before launch
  social: {
    linkedin: "#",
    facebook: "#",
    instagram: "#",
    youtube: "#"
  },

  // Logo paths
  logo: {
    main: "assets/logo/prime-leaf-logo.png",
    svg: null, // SVG logo path if available
    alt: "Prime Leaf Processing Logo",
    width: 180,
    height: 60
  }
};

// ---------------------------------------------------------------------------
// STATISTICS
// All values are editable. Set to null to hide a stat.
// ---------------------------------------------------------------------------
const STATS_CONFIG = [
  { value: null, suffix: "+", label: "Years of Industry Experience", placeholder: "XX" },
  { value: null, suffix: " MT", label: "Annual Processing Capacity", placeholder: "XX,000" },
  { value: null, suffix: "+", label: "Markets Served", placeholder: "XX" },
  { value: null, suffix: "+", label: "Specifications Supported", placeholder: "XX" },
  { value: null, suffix: "+", label: "Product Categories", placeholder: "5" }
];

// ---------------------------------------------------------------------------
// PRODUCTS
// ---------------------------------------------------------------------------
const PRODUCTS_CONFIG = [
  {
    id: "cut-rag",
    title: "Cut-Rag Tobacco",
    subtitle: "Specification-Driven Processing",
    description: "Processed tobacco cut to agreed customer specifications for use in tobacco product manufacturing. Available in a range of cut widths, moisture levels and tobacco types.",
    image: "assets/images/product-cut-rag.jpg",
    tobacco_type: "Various — Flue-Cured, Burley, Oriental, Blends",
    processing: "Threshing · Conditioning · Precision Cutting · Drying · Blending",
    applications: ["Tobacco product manufacturing", "Industrial tobacco processing", "Blended tobacco production"],
    specifications: ["Cut width: to specification", "Moisture: to specification", "Grade: to specification"],
    packaging: ["Cartons", "Cases", "Bulk — to specification"],
    moq: "[Contact for MOQ details]",
    availability: "Available — Contact for scheduling",
    enabled: true,
    featured: true
  },
  {
    id: "flue-cured",
    title: "Flue-Cured Tobacco",
    subtitle: "Selected & Processed Leaf",
    description: "Carefully selected and processed flue-cured tobacco leaf, prepared according to agreed customer grades and specifications.",
    image: "assets/images/product-flue-cured.jpg",
    tobacco_type: "Flue-Cured Virginia (FCV)",
    processing: "Leaf Selection · Grading · Threshing · Conditioning · Processing",
    applications: ["Blended tobacco products", "International tobacco manufacturing"],
    specifications: ["Grade: to specification", "Moisture: to specification", "Processing level: to specification"],
    packaging: ["Cases", "Cartons", "Bulk — to specification"],
    moq: "[Contact for MOQ details]",
    availability: "Available — Contact for scheduling",
    enabled: true,
    featured: true
  },
  {
    id: "burley",
    title: "Burley Tobacco",
    subtitle: "Processed Burley Leaf",
    description: "Processed Burley tobacco prepared and supplied according to agreed customer grades and physical specifications.",
    image: "assets/images/product-burley.jpg",
    tobacco_type: "Burley",
    processing: "Leaf Selection · Grading · Threshing · Conditioning · Processing",
    applications: ["Blended tobacco products", "International manufacturing"],
    specifications: ["Grade: to specification", "Moisture: to specification"],
    packaging: ["Cases", "Cartons", "Bulk — to specification"],
    moq: "[Contact for MOQ details]",
    availability: "Available — Contact for scheduling",
    enabled: true,
    featured: false
  },
  {
    id: "oriental",
    title: "Oriental Tobacco",
    subtitle: "Specialty Leaf Processing",
    description: "Specialty oriental and aromatic tobacco processing where applicable, subject to sourcing availability and customer specification.",
    image: "assets/images/product-oriental.jpg",
    tobacco_type: "Oriental / Aromatic",
    processing: "Leaf Selection · Conditioning · Processing — to specification",
    applications: ["Specialty tobacco blends", "International manufacturing"],
    specifications: ["To customer specification"],
    packaging: ["To specification"],
    moq: "[Contact for MOQ details]",
    availability: "Contact Us — Subject to Availability",
    enabled: true,
    featured: false
  },
  {
    id: "custom-blends",
    title: "Custom Tobacco Blends",
    subtitle: "Customer-Specific Formulations",
    description: "Precision blending according to customer-defined formulations. Prime Leaf Processing prepares and processes tobacco blends to agreed specifications for consistent, repeatable supply.",
    image: "assets/images/product-blends.jpg",
    tobacco_type: "Multi-type — as per customer blend specification",
    processing: "Leaf Preparation · Blending · Conditioning · Cutting · Quality Control",
    applications: ["Private label tobacco products", "Blended tobacco manufacturing"],
    specifications: ["Blend composition: to specification", "Cut: to specification", "Moisture: to specification"],
    packaging: ["To specification"],
    moq: "[Contact for MOQ details]",
    availability: "Available — Contact to discuss your blend",
    enabled: true,
    featured: true
  },
  {
    id: "expanded-reconstituted",
    title: "Expanded / Reconstituted Tobacco",
    subtitle: "Coming Soon",
    description: "Contact us to discuss expanded or reconstituted tobacco processing capabilities.",
    image: "assets/images/product-coming-soon.jpg",
    tobacco_type: "—",
    processing: "—",
    applications: [],
    specifications: [],
    packaging: [],
    moq: "Contact Us",
    availability: "Coming Soon — Contact for Information",
    enabled: false,
    featured: false,
    coming_soon: true
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
