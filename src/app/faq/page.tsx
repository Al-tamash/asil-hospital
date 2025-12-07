import type { Metadata } from "next";
import { Button } from "@/components/ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";
import { AnimatedSection, AnimatedContainer, AnimatedItem } from "@/components/common";
import { faqs, siteConfig } from "@/lib/data";
import { Phone, Mail, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about Asil Hospital services, visiting hours, insurance, appointments, and more.",
};

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-50 to-white py-16 md:py-24">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h1 className="heading-1 text-neutral-900 mt-2 mb-6">
              Frequently Asked{" "}
              <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-lg text-neutral-600">
              Find answers to common questions about our services, facilities,
              and procedures. Can&apos;t find what you&apos;re looking for?
              Contact us directly.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="bg-neutral-50 rounded-xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-medium text-neutral-900">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-brand-50">
        <div className="container-custom">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-brand-600" />
            </div>
            <h2 className="heading-2 text-neutral-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-neutral-600 mb-8">
              If you couldn&apos;t find the answer you were looking for, our
              team is here to help. Reach out to us through any of the following
              channels.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
