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
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const categories: Category[] = [
  { code: "CAT.01", name: "Gloves", icon: GloveIcon },
  { code: "CAT.02", name: "PPE", icon: MaskIcon },
  { code: "CAT.03", name: "Syringes & Needles", icon: SyringeIcon },
  { code: "CAT.04", name: "IV & Infusion", icon: IvIcon },
  { code: "CAT.05", name: "Wound Care", icon: WoundIcon },
  { code: "CAT.06", name: "Surgical Supplies", icon: SurgicalIcon },
  { code: "CAT.07", name: "Laboratory Supplies", icon: LabIcon },
  { code: "CAT.08", name: "Dental Supplies", icon: DentalIcon },
];

export type ProductStatus = "stock" | "best" | "new";

export type Product = {
  name: string;
  sku: string;
  status: ProductStatus;
  statusLabel: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  image: string;
};

export const featuredProducts: Product[] = [
  {
    name: "Nitrile Examination Gloves, Powder Free",
    sku: "GLV-NTR-001",
    status: "stock",
    statusLabel: "In Stock",
    icon: GloveIcon,
    image: "/images/products/gloves.png",
  },
  {
    name: "Surgical Face Mask, 3-Ply",
    sku: "MSK-3PLY-001",
    status: "best",
    statusLabel: "Best Seller",
    icon: MaskIcon,
    image: "/images/products/mask.png",
  },
  {
    name: "5ml Disposable Syringe",
    sku: "SYR-5ML-001",
    status: "stock",
    statusLabel: "In Stock",
    icon: SyringeIcon,
    image: "/images/products/syringe.png",
  },
  {
    name: "IV Infusion Set",
    sku: "IV-SET-001",
    status: "new",
    statusLabel: "New",
    icon: IvIcon,
    image: "/images/products/iv-set.png",
  },
  {
    name: "Alcohol Swab",
    sku: "ASW-001",
    status: "stock",
    statusLabel: "In Stock",
    icon: WoundIcon,
    image: "/images/products/alcohol-swab.png",
  },
  {
    name: "Sterile Gauze Pad",
    sku: "GP-STER-001",
    status: "stock",
    statusLabel: "In Stock",
    icon: WoundIcon,
    image: "/images/products/gauze-pad.png",
  },
];

export const statusStyles: Record<ProductStatus, string> = {
  stock: "bg-stock-bg text-stock",
  best: "bg-best-bg text-best",
  new: "bg-new-bg text-new",
};
