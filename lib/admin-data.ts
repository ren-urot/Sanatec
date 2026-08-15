export type RfqStatus = "New" | "Under Review" | "Contacted" | "Quoted" | "Won" | "Lost";

export const statusStyles: Record<RfqStatus, string> = {
  New: "bg-[#dbeafe] text-[#1d4ed8]",
  "Under Review": "bg-[#fef3c7] text-[#b45309]",
  Contacted: "bg-[#cffafe] text-[#0e7490]",
  Quoted: "bg-[#dcfce7] text-[#15803d]",
  Won: "bg-[#ede9fe] text-[#6d28d9]",
  Lost: "bg-[#fee2e2] text-[#b91c1c]",
};

export type AdminRfq = {
  id: string;
  company: string;
  contactPerson: string;
  contactEmail: string;
  date: string;
  status: RfqStatus;
  totalItems: number;
  salesOwner: string;
  lastUpdated: string;
};

const owners = ["Sarah Reyes", "Allen Bautista", "James Dela Cruz"];
const companies = [
  "Metro Health Clinic",
  "Cebu Doctors Hospital",
  "HealthPlus Inc.",
  "WellCare Medical",
  "MedLife Solutions",
  "Prime Medical Supplies",
  "LifeLine Diagnostics",
  "CarePoint Medical",
  "Unity Health Corp.",
  "MedioPlus Trading",
];
const contacts = [
  { name: "Maria Santos", email: "maria@metrohealth.com" },
  { name: "John Lim", email: "john.lim@cebudoctors.ph" },
  { name: "Anna Reyes", email: "anna@healthplus.com" },
  { name: "Kevin Tan", email: "kevin@wellcare.com" },
  { name: "Riza Santos", email: "riza@medlifeph.com" },
  { name: "Jane Dela Cruz", email: "jane@primemed.com" },
  { name: "Mark Antonio", email: "mark@lifelinedx.com" },
  { name: "Anna Reyes", email: "anna@carepoint.com" },
  { name: "John Lim", email: "john@unityhealth.com" },
  { name: "Riza Santos", email: "riza@medicplus.com" },
];
const statuses: RfqStatus[] = [
  "New",
  "Under Review",
  "New",
  "Quoted",
  "Contacted",
  "Quoted",
  "Lost",
  "Under Review",
  "Contacted",
  "New",
];

export const adminRfqs: AdminRfq[] = Array.from({ length: 10 }, (_, i) => {
  const day = 18 - i;
  return {
    id: `RFQ-2026-${(125 - i).toString().padStart(5, "0")}`,
    company: companies[i],
    contactPerson: contacts[i].name,
    contactEmail: contacts[i].email,
    date: `May ${day}, 2026`,
    status: statuses[i],
    totalItems: [3, 2, 4, 5, 2, 6, 1, 3, 4, 2][i],
    salesOwner: owners[i % owners.length],
    lastUpdated: `May ${day}, 2026, ${["10:15 AM", "04:30 PM", "11:20 AM", "02:10 PM", "08:30 AM", "03:20 PM", "01:30 PM", "04:00 PM", "11:15 AM", "01:40 PM"][i]}`,
  };
});

export const dashboardStats = [
  { label: "New RFQs", value: 24, delta: "+20%", trend: "up" as const, color: "accent" },
  { label: "Under Review", value: 18, delta: "+12%", trend: "up" as const, color: "best" },
  { label: "Quoted RFQs", value: 32, delta: "+15%", trend: "up" as const, color: "stock" },
  { label: "Won RFQs", value: 12, delta: "+9%", trend: "up" as const, color: "purple" },
  { label: "Lost RFQs", value: 6, delta: "-8%", trend: "down" as const, color: "danger" },
];

export const rfqManagementStats = [
  { label: "Total RFQs", value: 92, sub: "All time", color: "accent" },
  { label: "New", value: 24, sub: "26.1%", color: "accent" },
  { label: "Under Review", value: 18, sub: "19.6%", color: "best" },
  { label: "Contacted", value: 10, sub: "10.9%", color: "new" },
  { label: "Quoted", value: 32, sub: "34.8%", color: "stock" },
  { label: "Won", value: 12, sub: "13.0%", color: "purple" },
  { label: "Lost", value: 6, sub: "6.5%", color: "danger" },
];

export const rfqOverviewSeries = [
  { day: "May 12", New: 32, Quoted: 20, Won: 10, Lost: 5 },
  { day: "May 13", New: 41, Quoted: 25, Won: 12, Lost: 6 },
  { day: "May 14", New: 30, Quoted: 18, Won: 8, Lost: 4 },
  { day: "May 15", New: 45, Quoted: 27, Won: 15, Lost: 7 },
  { day: "May 16", New: 43, Quoted: 25, Won: 16, Lost: 8 },
  { day: "May 17", New: 38, Quoted: 24, Won: 14, Lost: 7 },
  { day: "May 18", New: 41, Quoted: 26, Won: 14, Lost: 6 },
];

export const rfqStatusBreakdown = [
  { label: "New", value: 24, pct: "26.1%", color: "#2563eb" },
  { label: "Under Review", value: 18, pct: "19.6%", color: "#f59e0b" },
  { label: "Contacted", value: 10, pct: "10.9%", color: "#06b6d4" },
  { label: "Quoted", value: 32, pct: "34.8%", color: "#22c55e" },
  { label: "Won", value: 12, pct: "13.0%", color: "#8b5cf6" },
  { label: "Lost", value: 6, pct: "6.5%", color: "#ef4444" },
];

export const topRequestedProducts = [
  { name: "Nitrile Examination Gloves Powder Free", requests: 28, image: "/images/products/gloves.png" },
  { name: "5ml Disposable Syringe With Needle", requests: 24, image: "/images/products/syringe.png" },
  { name: "Surgical Face Mask 3-Ply Blue", requests: 18, image: "/images/products/mask.png" },
  { name: "Alcohol Swab 70% Isopropyl", requests: 14, image: "/images/products/alcohol-swab.png" },
  { name: "IV Cannula (Various Sizes)", requests: 12, image: "/images/products/iv-set.png" },
];

export const recentLeads = [
  { company: "Prime Medical Supplies", contact: "Jane Dela Cruz", date: "May 18, 2026" },
  { company: "Lifeline Diagnostics", contact: "Mark Antonio", date: "May 18, 2026" },
  { company: "CarePoint Medical", contact: "Anna Reyes", date: "May 17, 2026" },
  { company: "Unity Health Corp.", contact: "John Lim", date: "May 17, 2026" },
  { company: "MedicoPlus Trading", contact: "Riza Santos", date: "May 16, 2026" },
];

export const systemActivity = [
  { text: "New RFQ received from Metro Health Clinic", time: "2 minutes ago", type: "rfq" as const },
  {
    text: "Quotation QUO-2026-00032 has been accepted by Cebu Doctors Hospital",
    time: "12 minutes ago",
    type: "quote" as const,
  },
  { text: "New user added: Sales Manager", time: "1 hour ago", type: "user" as const },
];

export const notifications = [
  { text: "5 new RFQs received today", time: "10 minutes ago", tone: "accent" as const },
  { text: "12 quotations pending follow up", time: "1 hour ago", tone: "best" as const },
  { text: "Low stock alert: Surgical Gloves", time: "3 hours ago", tone: "danger" as const },
];
