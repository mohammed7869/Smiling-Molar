import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import ClientPage from "./dr-neetu-bhanushali-client";

export const metadata: Metadata = generatePageMetadata(
  "dr-neetu-bhanushali-plainfield-nj-dentist",
  "/Images/Team/Dr. Neetu Bhanushali, DDS.avif"
);

export default function Page() {
  return <ClientPage />;
}
