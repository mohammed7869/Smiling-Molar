import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import ClientPage from "./bhargavi-gogineni-client";

export const metadata: Metadata = generatePageMetadata(
  "bhargavi-gogineni-trenton-nj-dentist",
  "/Images/Team/Dr. Bhargavi Gogineni, DDS.avif"
);

export default function Page() {
  return <ClientPage />;
}
