import Link from "next/link";

export default function SitemapPage() {
  // Define all the pages organized by categories
  const pages = {
    "Main Pages": [
      { name: "Home", link: "/" },
      { name: "About Us", link: "/about-smiling-molar-dental-plainfield-nj" },
      { name: "Contact Us", link: "/contact-tulip-dental-maplewood-nj" },
      { name: "Blog", link: "/dental-blog" },
      { name: "Reviews", link: "/patient-reviews-maplewood-nj" },
      { name: "Providers", link: "/providers" },
      { name: "Services", link: "/services" },
      { name: "Offers", link: "/teeth-whitening-offer-plainfield-nj" },
      //   { name: "Booking", link: "/booking" },
    ],
    Services: [
      {
        name: "Emergency Dentistry",
        link: "/services/emergency-dentistry-maplewood-nj",
      },
      {
        name: "Root Canal",
        link: "/services/root-canal-treatment-maplewood-nj",
      },
      { name: "Oral Surgery", link: "/services/oral-surgery-maplewood-nj" },
      {
        name: "Cosmetic Dentistry",
        link: "/services/cosmetic-dentistry-maplewood-nj",
      },
      {
        name: "Dental Fillings",
        link: "/services/dental-fillings-maplewood-nj",
      },
      {
        name: "Dental Implants",
        link: "/services/dental-implants-maplewood-nj",
      },
      { name: "Orthodontics", link: "/services/orthodontics-maplewood-nj" },
      {
        name: "Crowns and Bridges",
        link: "/services/crowns-and-bridges-maplewood-nj",
      },
      {
        name: "Dental Emergencies",
        link: "/services/dental-emergencies-maplewood-nj",
      },
      {
        name: "Tooth Extraction",
        link: "/services/tooth-extraction-maplewood-nj",
      },
      {
        name: "Wisdom Teeth",
        link: "/services/wisdom-teeth-removal-maplewood-nj",
      },
      {
        name: "Invisalign",
        link: "/services/invisalign-clear-aligners-maplewood-nj",
      },
      {
        name: "Kids & Children Dentistry",
        link: "/services/kids-and-children-dentistry-maplewood-nj",
      },
      {
        name: "Permanent Teeth Replacement",
        link: "/services/permanent-teeth-replacement-maplewood-nj",
      },
      {
        name: "Sports Dentistry",
        link: "/services/sports-dentistry-maplewood-nj",
      },
      {
        name: "Whitening & Veneers",
        link: "/services/teeth-whitening-and-veneers-maplewood-nj",
      },
      {
        name: "Same Day Dentistry",
        link: "/services/same-day-dentistry-maplewood-nj",
      },
      { name: "Perio Protect", link: "/services/perio-protect-maplewood-nj" },
      {
        name: "Painless Treatment",
        link: "/services/painless-dental-treatment-maplewood-nj",
      },
      { name: "Halitosis", link: "/services/halitosis-treatment-maplewood-nj" },
      { name: "Endodontics", link: "/services/endodontics-maplewood-nj" },
    ],
    "Service Areas": [
      {
        name: "Maplewood, NJ",
        link: "service-areas/maplewood-nj-dentist-near-you",
      },
      {
        name: "South Orange, NJ",
        link: "/service-areas/south-orange-nj-dentist-near-you",
      },
      {
        name: "Irvington, NJ",
        link: "/service-areas/irvington-nj-dentist-near-you",
      },
      {
        name: "Vauxhall, NJ",
        link: "/service-areas/vauxhall-nj-dentist-near-you",
      },
      {
        name: "Newark, NJ",
        link: "/service-areas/newark-nj-dentist-near-you",
      },
    ],
    "Legal & Information": [
      { name: "Terms and Conditions", link: "/terms-and-conditions" },
      { name: "Privacy Policy", link: "/privacy-policy" },
      { name: "Accessibility", link: "/accessibility" },
    ],
  };

  return (
    <div className="min-h-screen ">
      {/* Header Section */}
      <div className="details-page-header-section">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-3 py-4 sm:py-3">
          <div className="text-center">
            <h1>Sitemap</h1>
            <p>
              Navigate through all the pages and services available on our
              website
            </p>
          </div>
        </div>
      </div>

      {/* Sitemap Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8">
        <div className="space-y-6 sm:space-y-8">
          {Object.entries(pages).map(([category, pageList]) => (
            <div
              key={category}
              className="bg-white rounded-lg shadow-sm p-4 sm:p-6"
            >
              <h2 className=" text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-primary mt-2">
                {category}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2 sm:gap-3">
                {pageList.map((page) => (
                  <Link
                    key={page.link}
                    href={page.link}
                    className="bg-primary text-white px-3 py-2 rounded-md text-sm hover:primary font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm text-white font-medium leading-tight">
                      {page.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
