import type { Metadata } from "next";
import { AnimatedSection } from "@/components/common";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn about how Asil Hospital collects, uses, and protects your personal and medical information.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-50 to-white py-16 md:py-20">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="heading-1 text-neutral-900 mb-4">Privacy Policy</h1>
            <p className="text-neutral-600">Last updated: December 2024</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none prose-headings:text-neutral-900 prose-p:text-neutral-600">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="mb-6">
                {siteConfig.name} is committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our hospital or use
                our website.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">
                2. Information We Collect
              </h2>
              <p className="mb-4">We may collect information about you in various ways:</p>
              <ul className="list-disc pl-6 mb-6 text-neutral-600">
                <li>
                  <strong>Personal Information:</strong> Name, email address,
                  phone number, and other contact details you provide when
                  booking appointments.
                </li>
                <li>
                  <strong>Medical Information:</strong> Health history, symptoms,
                  diagnosis, treatment records, and other medical data necessary
                  for your care.
                </li>
                <li>
                  <strong>Payment Information:</strong> Billing information,
                  insurance details, and payment records.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">
                3. How We Use Your Information
              </h2>
              <p className="mb-4">We use the collected information for:</p>
              <ul className="list-disc pl-6 mb-6 text-neutral-600">
                <li>Providing medical care and treatment</li>
                <li>Processing appointments and billing</li>
                <li>Communicating about your health and appointments</li>
                <li>Maintaining accurate medical records</li>
                <li>Improving our services and patient experience</li>
                <li>Complying with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">
                4. Data Security
              </h2>
              <p className="mb-6">
                We implement appropriate technical and organizational security
                measures to protect your personal and medical information
                against unauthorized access, alteration, disclosure, or
                destruction. All sensitive data is stored securely and accessed
                only by authorized personnel.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">
                5. Information Sharing
              </h2>
              <p className="mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 mb-6 text-neutral-600">
                <li>Healthcare providers involved in your care</li>
                <li>Insurance companies for claim processing</li>
                <li>Laboratory and diagnostic service providers</li>
                <li>Government authorities as required by law</li>
              </ul>
              <p className="mb-6">
                We do not sell or rent your personal information to third
                parties for marketing purposes.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">6. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-6 text-neutral-600">
                <li>Access your medical records</li>
                <li>Request corrections to your information</li>
                <li>Receive a copy of your health information</li>
                <li>Request restrictions on certain uses of your information</li>
                <li>File a complaint if you believe your rights have been violated</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">
                7. Contact Information
              </h2>
              <p className="mb-4">
                For questions about this Privacy Policy or to exercise your
                rights, please contact us:
              </p>
              <ul className="list-disc pl-6 mb-6 text-neutral-600">
                <li>Phone: {siteConfig.phoneDisplay}</li>
                <li>Email: {siteConfig.email}</li>
                <li>Address: {siteConfig.address.full}</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
