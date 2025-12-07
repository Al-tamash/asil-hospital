import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui";
import {
  AnimatedSection,
  AnimatedContainer,
  AnimatedItem,
  ServiceCard,
} from "@/components/common";
import { services, siteConfig } from "@/lib/data";
import {
  Phone,
  Calendar,
  Clock,
  Shield,
  Award,
  Users,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore comprehensive healthcare services at Asil Hospital including Emergency Care, Cardiology, Orthopedics, Pediatrics, Gynecology, Neurology, and more.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-50 to-white py-16 md:py-24">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="heading-1 text-neutral-900 mt-2 mb-6">
              Comprehensive Healthcare{" "}
              <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg text-neutral-600">
              We offer a wide range of medical services with state-of-the-art
              facilities and experienced specialists to cater to all your
              healthcare needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <AnimatedItem key={service.id}>
                <div id={service.id}>
                  <ServiceCard service={service} showModal={true} />
                </div>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="section-padding bg-brand-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
                Why Choose Our Services
              </span>
              <h2 className="heading-2 text-neutral-900 mt-2 mb-6">
                Quality Care You Can Trust
              </h2>
              <p className="text-neutral-600 mb-8">
                At Asil Hospital, we combine expertise with compassion to
                deliver healthcare services that exceed expectations.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Award,
                    title: "Experienced Specialists",
                    desc: "Our doctors bring years of expertise across all specialties",
                  },
                  {
                    icon: Shield,
                    title: "Advanced Technology",
                    desc: "Latest medical equipment for accurate diagnosis and treatment",
                  },
                  {
                    icon: Clock,
                    title: "Timely Care",
                    desc: "Minimal wait times with efficient appointment management",
                  },
                  {
                    icon: Users,
                    title: "Patient-First Approach",
                    desc: "Personalized treatment plans focused on your needs",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">
                        {item.title}
                      </h3>
                      <p className="text-neutral-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="font-semibold text-xl text-neutral-900 mb-6">
                  Insurance & Payment
                </h3>
                <p className="text-neutral-600 mb-6">
                  We accept all major insurance providers and offer flexible
                  payment options:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Ayushman Bharat / PMJAY",
                    "Aarogyasri",
                    "All private health insurance",
                    "Cashless claim assistance",
                    "EMI options available",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-neutral-600">
                      <CheckCircle className="w-5 h-5 text-brand-500 mr-3 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contact">Contact for Details</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-brand-600 to-brand-700">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="heading-2 text-white mb-4">
              Need a Medical Consultation?
            </h2>
            <p className="text-brand-100 max-w-2xl mx-auto mb-8">
              Our specialists are ready to help. Book an appointment or call us
              for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="xl" variant="accent" asChild>
                <Link href="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Link>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-600"
                asChild
              >
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
