import type { SVGProps } from "react";

// Primary icon set: lucide-react (via shadcn/ui's Nova preset). Re-exported
// under names that read as their catalog/UI role so call sites don't couple
// to lucide's naming.
export {
  Hand as GloveIcon,
  VenetianMask as MaskIcon,
  Syringe as SyringeIcon,
  Droplet as IvIcon,
  Bandage as WoundIcon,
  Scissors as SurgicalIcon,
  FlaskConical as LabIcon,
  ChevronDown as CaretIcon,
  ArrowRight as ArrowIcon,
  Search as SearchIcon,
  Menu as MenuIcon,
  X as CloseIcon,
  MapPin as PinIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  Clock as ClockIcon,
  Download as DownloadIcon,
  FileCheck2 as TrackIcon,
  Globe as GlobeIcon,
  ShieldCheck as QualityIcon,
  Truck as DeliveryIcon,
  Users as BulkIcon,
  Headset as SupportIcon,
  Package as PackageIcon,
  FileText as QuoteFileIcon,
  Heart as WishlistIcon,
  LayoutGrid as GridViewIcon,
  List as ListViewIcon,
  Minus as MinusIcon,
  Plus as PlusIcon,
  ZoomIn as ZoomIcon,
  Check as CheckIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  ChevronUp as ChevronUpIcon,
  Home as HomeIcon,
  ShoppingCart as CartIcon,
  Trash2 as TrashIcon,
  Send as SendIcon,
  Building2 as CompanyIcon,
  User as UserIcon,
  CheckCircle2 as SuccessIcon,
  Calendar as CalendarIcon,
  Paperclip as AttachIcon,
  LayoutDashboard as DashboardIcon,
  ClipboardList as RfqManagementIcon,
  Receipt as QuotationsIcon,
  Box as OrdersIcon,
  UserPlus as LeadsIcon,
  Contact as CustomersIcon,
  Tags as CategoriesIcon,
  Warehouse as InventoryIcon,
  FileStack as DocumentsIcon,
  Image as BannersIcon,
  FileEdit as PagesIcon,
  Settings as SettingsIcon,
  ExternalLink as ExternalLinkIcon,
  Bell as NotificationIcon,
  Filter as FilterIcon,
  MoreHorizontal as MoreIcon,
  Eye as ViewIcon,
  RotateCcw as ResetIcon,
  ArrowUpRight as TrendUpIcon,
  ArrowDownRight as TrendDownIcon,
  Handshake as WonIcon,
  XCircle as LostIcon,
  ClipboardCheck as QuotedIcon,
} from "lucide-react";

// lucide-react has no dental or brand-logo icons — hand-authored exceptions.
type IconProps = SVGProps<SVGSVGElement>;

export const DentalIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M12 3c2.3 0 4.2 1.1 5 2.7.9 1.9.4 4.3 0 7-.3 2.4-.6 5.8-1.9 6.3-1.4.6-1.8-2.4-3.1-2.4s-1.7 3-3.1 2.4c-1.3-.5-1.6-3.9-1.9-6.3-.4-2.7-.9-5.1 0-7C7.8 4.1 9.7 3 12 3Z" />
  </svg>
);

export const FacebookIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M14 22v-8h2.7l.4-3.2H14V8.7c0-.9.3-1.6 1.6-1.6H17V4.3C16.6 4.2 15.6 4 14.5 4 12 4 10.3 5.5 10.3 8.4v2.4H7.6v3.2h2.7V22h3.7Z" />
  </svg>
);

export const LinkedinIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M6.9 8.6H3.6V20h3.3V8.6ZM5.3 3.5a1.9 1.9 0 1 0 0 3.9 1.9 1.9 0 0 0 0-3.9ZM20.4 20h-3.3v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V20H9.6V8.6h3.2v1.6h.05c.44-.83 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5V20Z" />
  </svg>
);

export const YoutubeIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M21.6 7.6a2.7 2.7 0 0 0-1.9-1.9C18 5.2 12 5.2 12 5.2s-6 0-7.7.5A2.7 2.7 0 0 0 2.4 7.6 28 28 0 0 0 2 12a28 28 0 0 0 .4 4.4 2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.4ZM10 15V9l5.2 3-5.2 3Z" />
  </svg>
);
