import type { Metadata } from "next";
import HomePage from "./home/page";

export const metadata: Metadata = {
  title:
    "Smiling Molar Dental | Dentist in Plainfield NJ | Plainfield Cosmetic Dentist | Family Dentist",
  description:
    "Top-rated cosmetic & family dentist in Plainfield, NJ. Serving patients from Plainfield and nearby areas. Call (908) 264-2357 or visit us at 1024 Park Ave Suite 6C, Plainfield, NJ 07060.",
};

export default function Home() {
  return <HomePage />;
}
