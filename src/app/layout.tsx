import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import {
  GoogleTagManagerHead,
  GoogleTagManagerBody,
} from "@/components/GoogleTagManager";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import DynamicMetadata from "../../DynamicMetadata";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import {
  Footer,
  LoaderProvider,
  FloatingTextForm,
} from "@/components/ClientComponents";

// Lazy load header component
const Header = dynamic(() => import("@/components/layouts/header"), {
  ssr: true,
  loading: () => <div className="h-20 bg-white" />, // Placeholder to prevent layout shift
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose what you need
  variable: "--font-poppins", // optional: define CSS variable
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Smiling Molar Dental | Dentist in Plainfield, NJ | Cosmetic & Family Dentist",
  description:
    "Top-rated cosmetic & family dentist in Plainfield, NJ. Serving patients from Plainfield and nearby areas. Call (908) 264-2357 or visit us at 1024 Park Ave Suite 6C, Plainfield, NJ 07060.",
  keywords:
    "dentist plainfield nj, cosmetic dentist plainfield, family dentist plainfield, dental implants plainfield, root canal plainfield, emergency dentist plainfield",
  authors: [{ name: "Smiling Molar Dental" }],
  creator: "Smiling Molar Dental",
  publisher: "Smiling Molar Dental",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smilingmolardental.com",
    siteName: "Smiling Molar Dental",
    title:
      "Smiling Molar Dental | Dentist in Plainfield, NJ | Cosmetic & Family Dentist",
    description:
      "Top-rated cosmetic & family dentist in Plainfield, NJ. Serving patients from Plainfield and nearby areas. Call (908) 264-2357 or visit us at 1024 Park Ave Suite 6C, Plainfield, NJ 07060.",
    images: [
      {
        url: "/Images/Smiling Molar Header.png",
        width: 1200,
        height: 630,
        alt: "Smiling Molar Dental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Smiling Molar Dental | Dentist in Plainfield, NJ | Cosmetic & Family Dentist",
    description:
      "Top-rated cosmetic & family dentist in Plainfield, NJ. Serving patients from Plainfield and nearby areas. Call (908) 264-2357 or visit us at 1024 Park Ave Suite 6C, Plainfield, NJ 07060.",
    images: ["/Images/Smiling Molar Header.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManagerHead />
        <GoogleAnalytics />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <link rel="canonical" href="https://smilingmolardental.com" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/Images/Smiling Molar Header.png" />
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/Images/Smiling Molar Header.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/Images/Banner-1.webp"
          as="image"
          type="image/webp"
        />
        <link
          rel="preload"
          href="/Images/heart.webm"
          as="image"
          type="image/webm"
        />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "Smiling Molar Dental Plainfield",
              url: "https://www.smilingmolar.com",
              logo: "https://www.smilingmolar.com/path-to-your-logo.png",
              image:
                "https://www.smilingmolar.com/wp-content/uploads/2025/10/smiling-molar-logo.png",
              priceRange: "$55 - $2999",
              telephone: "+1-908-264-2357",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1024 Park Ave Suite 6C",
                addressLocality: "Plainfield",
                addressRegion: "NJ",
                postalCode: "07060",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 40.61535,
                longitude: -74.39148,
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "978",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Monday",
                  opens: "09:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Tuesday",
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Wednesday",
                  opens: "09:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Thursday",
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Friday",
                  opens: "09:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:30",
                  closes: "15:00",
                },
              ],
              areaServed: [
                {
                  "@type": "City",
                  name: "Plainfield",
                  sameAs:
                    "https://en.wikipedia.org/wiki/Plainfield,_New_Jersey",
                  address: {
                    "@type": "PostalAddress",
                    addressRegion: "NJ",
                    postalCode: "07060",
                  },
                },
                {
                  "@type": "City",
                  name: "North Plainfield",
                  sameAs:
                    "https://en.wikipedia.org/wiki/North_Plainfield,_New_Jersey",
                  address: {
                    "@type": "PostalAddress",
                    addressRegion: "NJ",
                    postalCode: ["07062", "07063"],
                  },
                },
                {
                  "@type": "City",
                  name: "South Plainfield",
                  sameAs:
                    "https://en.wikipedia.org/wiki/South_Plainfield,_New_Jersey",
                  address: {
                    "@type": "PostalAddress",
                    addressRegion: "NJ",
                    postalCode: "07080",
                  },
                },
                {
                  "@type": "City",
                  name: "Scotch Plains",
                  sameAs:
                    "https://en.wikipedia.org/wiki/Scotch_Plains,_New_Jersey",
                  address: {
                    "@type": "PostalAddress",
                    addressRegion: "NJ",
                    postalCode: "07076",
                  },
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services and Pricing",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "New Adult Patient Examination and X-rays - Special Promo",
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "79",
                      priceCurrency: "USD",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "New Child Patient Examination (under 5 years) - Special Promo",
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "79",
                      priceCurrency: "USD",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "New Child Patient Examination (above 5 years) - Special Promo",
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "79",
                      priceCurrency: "USD",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Teeth Whitening Special Promo",
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "299",
                      priceCurrency: "USD",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Periodic Examination and X-rays for Adults and Kids (above 5 years)",
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "100",
                      priceCurrency: "USD",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Periodic Examination and Cleaning for Kids Under 5",
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "95",
                      priceCurrency: "USD",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Emergency Visit and Limited Examination",
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "55",
                      priceCurrency: "USD",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Scaling and Root Planning (Deep Cleaning)",
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "140",
                      priceCurrency: "USD",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Root Canal Treatment (Anterior)",
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "700",
                      priceCurrency: "USD",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Root Canal Treatment (Pre-Molar)",
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "750",
                      priceCurrency: "USD",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Root Canal Treatment (Molar)",
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "850",
                      priceCurrency: "USD",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Crowns (PFM)",
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "800",
                      priceCurrency: "USD",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Crowns (Zirconia)",
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "900",
                      priceCurrency: "USD",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Partial Dentures",
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "1120",
                      priceCurrency: "USD",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Full Dentures",
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "1000",
                      priceCurrency: "USD",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Immediate Dentures",
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "1000",
                      priceCurrency: "USD",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Anterior Extraction",
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "150",
                      priceCurrency: "USD",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Posterior Extraction",
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "220",
                      priceCurrency: "USD",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Surgical Extraction",
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "250",
                      priceCurrency: "USD",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Wisdom Teeth Extraction",
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "450",
                      priceCurrency: "USD",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Orthodontic Consultation",
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "85",
                      priceCurrency: "USD",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Why is Smiling Molar Dental Plainfield a trusted choice for dental care?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Smiling Molar Dental Plainfield is committed to providing high-quality, personalized dental care in a warm and welcoming environment. We treat patients of all ages, offering preventive, restorative, and cosmetic treatments to ensure every smile stays healthy and confident.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Smiling Molar Dental accept new patients in Plainfield, NJ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we welcome new patients from Plainfield and surrounding areas. Our friendly team is ready to provide personalized dental care, whether you are new to the area or seeking a trusted local dentist.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I get same-day appointments for dental emergencies?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. We understand that dental emergencies require immediate attention, so Smiling Molar Dental offers same-day appointments for urgent issues like tooth pain, broken teeth, or other dental emergencies.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What cosmetic dental treatments does Smiling Molar Dental offer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our cosmetic dentistry services include teeth whitening, porcelain veneers, dental bonding, crowns, bridges, Invisalign®, and dental implants to help you achieve a beautiful, confident smile.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Smiling Molar Dental suitable for children as well as adults?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, our practice is family-friendly and provides comprehensive dental care for patients of all ages. From toddlers visiting for their first checkup to adults seeking advanced treatment, we ensure everyone receives comfortable and compassionate care.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I schedule an appointment at Smiling Molar Dental?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Appointments can be scheduled by calling our Plainfield office at +1 908-264-2357 or through our online booking system. Our team will help you find a convenient time that fits your schedule.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which areas do you serve near Plainfield, NJ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Smiling Molar Dental proudly serves Plainfield (07060), North Plainfield (07062, 07063), South Plainfield (07080), Scotch Plains (07076), and nearby neighborhoods, making us a trusted local destination for dental care.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased pt-18 md:pt-20`}
      >
        <GoogleTagManagerBody />
        <DynamicMetadata />
        <PerformanceMonitor />
        <Header />
        <LoaderProvider>{children}</LoaderProvider>
        <Footer />
        <FloatingTextForm />
      </body>
    </html>
  );
}
