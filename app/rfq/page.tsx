import type { Metadata } from "next";
import { RfqForm } from "@/components/rfq-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Submit an RFQ | Sanatec Marketing",
  description: "Complete your Request for Quote for the items in your cart.",
};

export default function RfqPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--color-bg)]">
        <RfqForm />
      </main>
      <SiteFooter />
    </>
  );
}
