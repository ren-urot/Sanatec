import type { Metadata } from "next";
import { AdminTopbar } from "@/components/admin/admin-topbar";
import { RfqManagementTable } from "@/components/admin/rfq-management-table";

export const metadata: Metadata = { title: "RFQ Management | Sanatec Admin" };

export default function RfqManagementPage() {
  return (
    <>
      <AdminTopbar title="RFQ Management" breadcrumb="Dashboard > RFQ Management" />
      <RfqManagementTable />
    </>
  );
}
