export * from "./services";
export * from "./doctors";
export * from "./testimonials";
export * from "./faq";
export * from "./blog";
export * from "./gallery";

export const siteConfig = {
  name: "Asil Hospital",
  description: "Asil Hospital - Your trusted healthcare partner in Sangareddy. Providing comprehensive medical services with modern facilities and experienced doctors.",
  url: "https://asilhospital.com",
  phone: "+91 96030 13571",
  phoneDisplay: "+91 96030 13571",
  email: "info@asilhospital.com",
  address: {
    full: "10-20/3, Vidya Nagar Colony, Sangareddy, Telangana 502295",
    street: "10-20/3, Vidya Nagar Colony",
    city: "Sangareddy",
    state: "Telangana",
    pincode: "502295",
    country: "India"
  },
  mapLink: "https://share.google/tkEHQ43KF9jpTcA8j",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.123456!2d78.0123456!3d17.6123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAsil%20Hospital!5e0!3m2!1sen!2sin!4v1234567890",
  workingHours: {
    weekdays: "24/7 Emergency Services",
    opd: "9:00 AM - 8:00 PM (Mon-Sat)",
    sunday: "10:00 AM - 2:00 PM (OPD Only)"
  },
  socialLinks: {
    facebook: "https://facebook.com/asilhospital",
    twitter: "https://twitter.com/asilhospital",
    instagram: "https://instagram.com/asilhospital",
    linkedin: "https://linkedin.com/company/asilhospital"
  }
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];
