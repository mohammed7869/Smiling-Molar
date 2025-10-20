import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import ClientPage from "./dr-steven-reff-client";

export const metadata: Metadata = generatePageMetadata(
  "dr-steven-reff-plainfield-nj-dentist",
  "/Images/Team/Dr. Steven Reff, DDS.avif"
);

export default function Page() {
  return <ClientPage />;
}
