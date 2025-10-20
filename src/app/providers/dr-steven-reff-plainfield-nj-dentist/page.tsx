import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import ClientPage from "./navleen-kaur-thind-client";

export const metadata: Metadata = generatePageMetadata(
  "navleen-kaur-thind-trenton-nj-dentist",
  "/Images/Team/Dr. Navleen Kaur Thind, DDS.avif"
);

export default function Page() {
  return <ClientPage />;
}
