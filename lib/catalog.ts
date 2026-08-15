import type { ComponentType, SVGProps } from "react";
import {
  DentalIcon,
  GloveIcon,
  IvIcon,
  LabIcon,
  MaskIcon,
  SurgicalIcon,
  SyringeIcon,
  WoundIcon,
} from "@/components/icons";

export type Category = {
  code: string;
  slug: string;
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  count: number;
};

export const categories: Category[] = [
  { code: "CAT.01", slug: "gloves", name: "Gloves", icon: GloveIcon, count: 48 },
  { code: "CAT.02", slug: "ppe", name: "PPE", icon: MaskIcon, count: 36 },
  {
    code: "CAT.03",
    slug: "syringes-needles",
    name: "Syringes & Needles",
    icon: SyringeIcon,
    count: 42,
  },
  { code: "CAT.04", slug: "iv-infusion", name: "IV & Infusion", icon: IvIcon, count: 28 },
  { code: "CAT.05", slug: "wound-care", name: "Wound Care", icon: WoundIcon, count: 31 },
  {
    code: "CAT.06",
    slug: "surgical-supplies",
    name: "Surgical Supplies",
    icon: SurgicalIcon,
    count: 27,
  },
  {
    code: "CAT.07",
    slug: "laboratory-supplies",
    name: "Laboratory Supplies",
    icon: LabIcon,
    count: 24,
  },
  { code: "CAT.08", slug: "dental-supplies", name: "Dental Supplies", icon: DentalIcon, count: 18 },
];

export function categoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export type Brand = { name: string; count: number };

export const brands: Brand[] = [
  { name: "MedTech", count: 26 },
  { name: "SafeCare", count: 23 },
  { name: "HealthPlus", count: 21 },
  { name: "Bionet", count: 18 },
  { name: "Unicare", count: 17 },
];

export type ProductStatus = "stock" | "best" | "new";
export type Sterility = "Sterile" | "Non-Sterile";

export type Spec = { label: string; value: string };

export type Product = {
  slug: string;
  name: string;
  sku: string;
  categorySlug: string;
  brand: string;
  status: ProductStatus;
  statusLabel: string;
  image: string;
  images: string[];
  specLine: string;
  tags: string[];
  sterility: Sterility;
  disposable: boolean;
  singleUse: boolean;
  inStock: boolean;
  description: string;
  specifications: Spec[];
  features: string[];
  sizes?: string[];
  packagingOptions?: string[];
};

export const products: Product[] = [
  {
    slug: "nitrile-examination-gloves-powder-free",
    name: "Nitrile Examination Gloves Powder Free",
    sku: "GLV-NTR-001",
    categorySlug: "gloves",
    brand: "MedTech",
    status: "stock",
    statusLabel: "In Stock",
    image: "/images/products/gloves.png",
    images: ["/images/products/gloves.png", "/images/products/gloves.png"],
    specLine: "Sizes: XS, S, M, L, XL",
    tags: ["Powder Free", "Non-Sterile", "Latex Free", "Ambidextrous"],
    sterility: "Non-Sterile",
    disposable: true,
    singleUse: true,
    inStock: true,
    description:
      "High quality nitrile examination gloves designed for superior protection and comfort. Ideal for medical examination, patient care, and general purpose use.",
    specifications: [
      { label: "Material", value: "Nitrile" },
      { label: "Color", value: "Blue" },
      { label: "Sterility", value: "Non-Sterile" },
      { label: "Powder", value: "Powder Free" },
      { label: "Surface", value: "Textured Fingertips" },
      { label: "Cuff", value: "Beaded" },
      { label: "Thickness", value: "3.5 mil (Palm)" },
      { label: "Length", value: "240 mm (Min.)" },
      { label: "Sizes Available", value: "XS, S, M, L, XL" },
      { label: "Shelf Life", value: "5 Years" },
      { label: "Standards", value: "ASTM D6319, EN 455, ISO 13485" },
    ],
    features: [
      "Latex free — safe for sensitive users",
      "Excellent tactile sensitivity and fit",
      "Textured fingertips for better grip",
      "Comfortable and flexible",
      "Ambidextrous — fits either hand",
      "Single use only",
      "For medical examination and general purpose use",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    packagingOptions: ["100 pcs/box", "10 boxes/case (1,000 pcs)", "20 boxes/case (2,000 pcs)"],
  },
  {
    slug: "vinyl-examination-gloves-clear",
    name: "Vinyl Examination Gloves Clear",
    sku: "GLV-VIN-001",
    categorySlug: "gloves",
    brand: "SafeCare",
    status: "stock",
    statusLabel: "In Stock",
    image: "/images/products/gloves.png",
    images: ["/images/products/gloves.png"],
    specLine: "Sizes: S, M, L, XL",
    tags: ["Powder Free", "Non-Sterile", "Latex Free"],
    sterility: "Non-Sterile",
    disposable: true,
    singleUse: true,
    inStock: true,
    description:
      "Latex-free vinyl examination gloves for low-risk, general-purpose tasks where cost efficiency and comfort matter most.",
    specifications: [
      { label: "Material", value: "Vinyl" },
      { label: "Color", value: "Clear" },
      { label: "Sterility", value: "Non-Sterile" },
      { label: "Powder", value: "Powder Free" },
      { label: "Sizes Available", value: "S, M, L, XL" },
      { label: "Shelf Life", value: "3 Years" },
      { label: "Standards", value: "EN 455" },
    ],
    features: [
      "Latex free",
      "Smooth, comfortable fit",
      "Good for short procedures and general handling",
      "Single use only",
    ],
    sizes: ["S", "M", "L", "XL"],
    packagingOptions: ["100 pcs/box", "10 boxes/case (1,000 pcs)"],
  },
  {
    slug: "surgical-face-mask-3-ply",
    name: "Surgical Face Mask 3-Ply",
    sku: "MSK-3PLY-001",
    categorySlug: "ppe",
    brand: "MedTech",
    status: "best",
    statusLabel: "Best Seller",
    image: "/images/products/mask.png",
    images: ["/images/products/mask.png"],
    specLine: "Color: Blue",
    tags: ["3-Ply", "Non-Sterile", "BFE ≥ 95%", "Ear Loop"],
    sterility: "Non-Sterile",
    disposable: true,
    singleUse: true,
    inStock: true,
    description:
      "3-ply disposable face mask with a melt-blown filter layer, ear loops and an adjustable nose bridge for a secure, breathable fit.",
    specifications: [
      { label: "Layers", value: "3-Ply" },
      { label: "Color", value: "Blue" },
      { label: "Filtration", value: "BFE ≥ 95%" },
      { label: "Closure", value: "Ear Loop" },
      { label: "Nose Bridge", value: "Adjustable" },
      { label: "Standards", value: "EN 14683 Type IIR" },
    ],
    features: [
      "3-ply construction with melt-blown filter",
      "Adjustable nose clip for a secure fit",
      "Soft ear loops for extended wear",
      "Single use only",
    ],
    packagingOptions: ["50 pcs/box", "10 boxes/case (500 pcs)"],
  },
  {
    slug: "5ml-disposable-syringe",
    name: "5ml Disposable Syringe",
    sku: "SYR-5ML-001",
    categorySlug: "syringes-needles",
    brand: "HealthPlus",
    status: "stock",
    statusLabel: "In Stock",
    image: "/images/products/syringe.png",
    images: ["/images/products/syringe.png"],
    specLine: "With or Without Needle",
    tags: ["Sterile", "Single Use", "Luer Slip"],
    sterility: "Sterile",
    disposable: true,
    singleUse: true,
    inStock: true,
    description:
      "Sterile single-use 5ml syringe with clear graduation markings, available with or without an attached needle.",
    specifications: [
      { label: "Capacity", value: "5ml" },
      { label: "Sterility", value: "Sterile, EO Gas" },
      { label: "Needle", value: "With or Without" },
      { label: "Luer Type", value: "Luer Slip" },
      { label: "Standards", value: "ISO 7886-1" },
    ],
    features: [
      "Clear barrel with easy-to-read graduations",
      "Smooth plunger action",
      "Individually blister packed",
      "Single use, sterile",
    ],
    packagingOptions: ["100 pcs/box", "10 boxes/case (1,000 pcs)"],
  },
  {
    slug: "iv-infusion-set",
    name: "IV Infusion Set",
    sku: "IV-SET-001",
    categorySlug: "iv-infusion",
    brand: "Bionet",
    status: "new",
    statusLabel: "New",
    image: "/images/products/iv-set.png",
    images: ["/images/products/iv-set.png"],
    specLine: "Luer Lock, Sterile",
    tags: ["Sterile", "Luer Lock", "Latex Free"],
    sterility: "Sterile",
    disposable: true,
    singleUse: true,
    inStock: true,
    description:
      "Sterile gravity IV infusion set with a Luer lock connector, drip chamber and roller clamp for accurate flow control.",
    specifications: [
      { label: "Connector", value: "Luer Lock" },
      { label: "Sterility", value: "Sterile, EO Gas" },
      { label: "Drip Chamber", value: "Standard, 20 drops/ml" },
      { label: "Tubing Length", value: "150 cm" },
      { label: "Standards", value: "ISO 8536" },
    ],
    features: [
      "Precise roller clamp flow control",
      "Latex-free drip chamber",
      "Secure Luer lock connection",
      "Single use, sterile",
    ],
    packagingOptions: ["1 pc", "50 pcs/box"],
  },
  {
    slug: "alcohol-swab",
    name: "Alcohol Swab",
    sku: "ASW-001",
    categorySlug: "wound-care",
    brand: "SafeCare",
    status: "stock",
    statusLabel: "In Stock",
    image: "/images/products/alcohol-swab.png",
    images: ["/images/products/alcohol-swab.png"],
    specLine: "70% Isopropyl Alcohol",
    tags: ["Sterile", "Single Use", "Individually Wrapped"],
    sterility: "Sterile",
    disposable: true,
    singleUse: true,
    inStock: true,
    description:
      "Individually wrapped 70% isopropyl alcohol swabs for quick skin prep and surface disinfection.",
    specifications: [
      { label: "Solution", value: "70% Isopropyl Alcohol" },
      { label: "Sterility", value: "Sterile" },
      { label: "Size", value: "6cm x 3cm" },
      { label: "Packaging", value: "Individually Wrapped" },
    ],
    features: [
      "Fast-acting skin and surface prep",
      "Individually wrapped for hygiene",
      "Lint-free non-woven fabric",
      "Single use only",
    ],
    packagingOptions: ["100 pcs/box", "10 boxes/case (1,000 pcs)"],
  },
  {
    slug: "sterile-gauze-pad",
    name: "Sterile Gauze Pad",
    sku: "GP-STER-001",
    categorySlug: "wound-care",
    brand: "MedTech",
    status: "stock",
    statusLabel: "In Stock",
    image: "/images/products/gauze-pad.png",
    images: ["/images/products/gauze-pad.png"],
    specLine: "8 Ply, 10cm x 10cm",
    tags: ["Sterile", "100% Cotton", "High Absorbency"],
    sterility: "Sterile",
    disposable: true,
    singleUse: true,
    inStock: true,
    description:
      "Highly absorbent 8-ply sterile gauze pads for wound dressing and general wound care.",
    specifications: [
      { label: "Ply", value: "8 Ply" },
      { label: "Size", value: "10cm x 10cm" },
      { label: "Sterility", value: "Sterile" },
      { label: "Material", value: "100% Cotton" },
    ],
    features: [
      "High absorbency for wound exudate",
      "Soft, lint-free weave",
      "Individually sealed, sterile",
      "Single use only",
    ],
    packagingOptions: ["25 pcs/box", "10 boxes/case (250 pcs)"],
  },
  {
    slug: "surgical-gown",
    name: "Surgical Gown",
    sku: "SGN-001",
    categorySlug: "surgical-supplies",
    brand: "HealthPlus",
    status: "stock",
    statusLabel: "In Stock",
    image: "/images/products/surgical-gown.png",
    images: ["/images/products/surgical-gown.png"],
    specLine: "SMS, Disposable",
    tags: ["Sterile", "AAMI Level 3", "Fluid Resistant"],
    sterility: "Sterile",
    disposable: true,
    singleUse: true,
    inStock: true,
    description:
      "Fluid-resistant SMS surgical gown with reinforced sleeves, designed for reliable barrier protection in the operating room.",
    specifications: [
      { label: "Material", value: "SMS Non-Woven" },
      { label: "Sterility", value: "Sterile" },
      { label: "Closure", value: "Rear Tie" },
      { label: "Sizes Available", value: "M, L, XL" },
      { label: "Standards", value: "AAMI Level 3" },
    ],
    features: [
      "Fluid-resistant barrier protection",
      "Reinforced sleeves for high-risk areas",
      "Breathable, lightweight fabric",
      "Single use, sterile",
    ],
    sizes: ["M", "L", "XL"],
    packagingOptions: ["1 pc", "25 pcs/case"],
  },
  {
    slug: "vacutainer-blood-collection-tube",
    name: "Vacutainer Blood Collection Tube",
    sku: "VCT-001",
    categorySlug: "laboratory-supplies",
    brand: "Bionet",
    status: "stock",
    statusLabel: "In Stock",
    image: "",
    images: [],
    specLine: "Various Sizes",
    tags: ["Sterile Interior", "Color-Coded", "Vacuum Draw"],
    sterility: "Sterile",
    disposable: true,
    singleUse: true,
    inStock: true,
    description:
      "Vacuum blood collection tubes for venous sample draws, available in multiple additive types and draw volumes.",
    specifications: [
      { label: "Draw Volume", value: "2ml – 10ml" },
      { label: "Additive", value: "EDTA, Plain, Heparin" },
      { label: "Sterility", value: "Sterile, Interior" },
      { label: "Standards", value: "ISO 6710" },
    ],
    features: [
      "Consistent vacuum draw",
      "Color-coded caps by additive type",
      "Shatter-resistant plastic tube",
      "Single use only",
    ],
    packagingOptions: ["100 pcs/box", "10 boxes/case (1,000 pcs)"],
  },
  {
    slug: "shoe-cover",
    name: "Shoe Cover",
    sku: "SC-001",
    categorySlug: "ppe",
    brand: "SafeCare",
    status: "stock",
    statusLabel: "In Stock",
    image: "",
    images: [],
    specLine: "Non-Woven, Disposable",
    tags: ["Non-Sterile", "Elastic Opening", "Slip-Resistant"],
    sterility: "Non-Sterile",
    disposable: true,
    singleUse: true,
    inStock: true,
    description:
      "Non-woven disposable shoe covers with an elastic opening for a secure, slip-resistant fit in clinical and cleanroom settings.",
    specifications: [
      { label: "Material", value: "Non-Woven Polypropylene" },
      { label: "Sterility", value: "Non-Sterile" },
      { label: "Opening", value: "Elastic" },
      { label: "Size", value: "One Size Fits Most" },
    ],
    features: [
      "Elastic opening for a snug fit",
      "Slip-resistant sole texture",
      "Lightweight and breathable",
      "Single use only",
    ],
    packagingOptions: ["100 pcs/box", "10 boxes/case (1,000 pcs)"],
  },
  {
    slug: "safety-goggles",
    name: "Safety Goggles",
    sku: "SG-001",
    categorySlug: "ppe",
    brand: "MedTech",
    status: "stock",
    statusLabel: "In Stock",
    image: "/images/products/safety-goggles.png",
    images: ["/images/products/safety-goggles.png"],
    specLine: "Anti-Fog, Clear Lens",
    tags: ["Reusable", "Anti-Fog", "Adjustable Strap"],
    sterility: "Non-Sterile",
    disposable: false,
    singleUse: false,
    inStock: true,
    description:
      "Anti-fog clear safety goggles with an adjustable strap and indirect venting, built for reuse across a full shift.",
    specifications: [
      { label: "Lens", value: "Clear, Anti-Fog" },
      { label: "Venting", value: "Indirect" },
      { label: "Fit", value: "Adjustable Strap" },
      { label: "Standards", value: "EN 166" },
    ],
    features: [
      "Anti-fog coated lens",
      "Wraps over most prescription glasses",
      "Adjustable strap for a secure fit",
      "Reusable — wipe clean between uses",
    ],
    packagingOptions: ["1 pc", "12 pcs/box"],
  },
  {
    slug: "bouffant-cap",
    name: "Bouffant Cap",
    sku: "BC-001",
    categorySlug: "ppe",
    brand: "Unicare",
    status: "best",
    statusLabel: "Best Seller",
    image: "/images/products/bouffant-cap.png",
    images: ["/images/products/bouffant-cap.png"],
    specLine: "Non-Woven, Disposable",
    tags: ["Non-Sterile", "Elastic Edging", "Latex Free"],
    sterility: "Non-Sterile",
    disposable: true,
    singleUse: true,
    inStock: true,
    description:
      "Lightweight non-woven bouffant cap with elastic edging for full hair coverage in clinical environments.",
    specifications: [
      { label: "Material", value: "Non-Woven Polypropylene" },
      { label: "Sterility", value: "Non-Sterile" },
      { label: "Edging", value: "Elastic" },
      { label: "Size", value: "21\" / 24\" Available" },
    ],
    features: [
      "Full elastic edging for secure coverage",
      "Lightweight, breathable fabric",
      "Latex free",
      "Single use only",
    ],
    packagingOptions: ["100 pcs/box", "10 boxes/case (1,000 pcs)"],
  },
  {
    slug: "iv-catheter",
    name: "IV Catheter",
    sku: "IV-CATH-001",
    categorySlug: "iv-infusion",
    brand: "Bionet",
    status: "stock",
    statusLabel: "In Stock",
    image: "",
    images: [],
    specLine: "14G, 16G, 18G, 20G, 22G, 24G",
    tags: ["Sterile", "Color-Coded", "Sharps-Safe"],
    sterility: "Sterile",
    disposable: true,
    singleUse: true,
    inStock: true,
    description:
      "Sterile IV catheter with a color-coded hub and sharps-safe design, available across the full standard gauge range.",
    specifications: [
      { label: "Gauge Range", value: "14G – 24G" },
      { label: "Sterility", value: "Sterile, EO Gas" },
      { label: "Hub", value: "Color-Coded" },
      { label: "Standards", value: "ISO 10555-5" },
    ],
    features: [
      "Color-coded hub for quick gauge ID",
      "Sharps-safe passive needle guard",
      "Smooth insertion bevel",
      "Single use, sterile",
    ],
    packagingOptions: ["50 pcs/box", "10 boxes/case (500 pcs)"],
  },
];

const FEATURED_SLUGS = [
  "nitrile-examination-gloves-powder-free",
  "surgical-face-mask-3-ply",
  "5ml-disposable-syringe",
  "iv-infusion-set",
  "alcohol-swab",
  "sterile-gauze-pad",
];

export const featuredProducts: Product[] = FEATURED_SLUGS.map(
  (slug) => products.find((p) => p.slug === slug)!,
);

// "Vinyl Examination Gloves Clear" exists only as a related-product
// cross-sell (matching the detail-page wireframe) and isn't one of the 12
// products shown in the main catalog grid.
export const catalogProducts: Product[] = products.filter(
  (p) => p.slug !== "vinyl-examination-gloves-clear",
);

export const statusStyles: Record<ProductStatus, string> = {
  stock: "bg-stock-bg text-stock",
  best: "bg-best-bg text-best",
  new: "bg-new-bg text-new",
};

export function productBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function relatedProducts(product: Product, limit = 5): Product[] {
  const sameCategory = products.filter(
    (p) => p.slug !== product.slug && p.categorySlug === product.categorySlug,
  );
  const rest = products.filter(
    (p) => p.slug !== product.slug && p.categorySlug !== product.categorySlug,
  );
  return [...sameCategory, ...rest].slice(0, limit);
}
