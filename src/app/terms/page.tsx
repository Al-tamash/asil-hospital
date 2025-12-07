import type { Metadata } from "next";
import { AnimatedSection } from "@/components/common";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions for using Asil Hospital services and website.",
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-50 to-white py-16 md:py-20">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="heading-1 text-neutral-900 mb-4">
              Terms & Conditions
            </h1>
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
                Welcome to {siteConfig.name}. These terms and conditions outline
                the rules and regulations for the use of our hospital services
                and website. By accessing this website or using our services,
                you accept these terms and conditions in full.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">
                2. Medical Services
              </h2>
              <p className="mb-4">
                The medical information provided on this website is for general
                informational purposes only. It is not intended to be a
                substitute for professional medical advice, diagnosis, or
                treatment.
              </p>
              <p className="mb-6">
                Always seek the advice of your physician or other qualified
                health provider with any questions you may have regarding a
                medical condition.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">
                3. Appointment Booking
              </h2>
              <p className="mb-4">
                Appointments booked through our website are subject to
                availability and confirmation by our staff. We will make
                reasonable efforts to confirm appointments within 24 hours.
              </p>
              <p className="mb-6">
                Cancellations should be made at least 24 hours before the
                scheduled appointment time.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">
                4. Payment Terms
              </h2>
              <p className="mb-4">
                Payment for services is expected at the time of service unless
                prior arrangements have been made with our billing department.
              </p>
              <p className="mb-6">
                We accept various payment methods including cash, credit/debit
                cards, and UPI. Insurance claims are processed as per the
                respective insurance company&apos;s guidelines.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">
                5. Patient Rights
              </h2>
              <p className="mb-4">
                Every patient has the right to receive information about their
                diagnosis, treatment options, and expected outcomes. Patients
                have the right to privacy and confidentiality of their medical
                information.
              </p>
              <p className="mb-6">
                Patients may request copies of their medical records as per
                applicable laws and regulations.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">
                6. Limitation of Liability
              </h2>
              <p className="mb-6">
                While we strive to provide the highest quality of care, the
                hospital shall not be liable for any indirect, incidental,
                special, or consequential damages arising out of or in
                connection with the use of our services or website.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">
                7. Contact Information
              </h2>
              <p className="mb-4">
                For any questions about these Terms & Conditions, please contact
                us:
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
