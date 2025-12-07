import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";
import { AnimatedSection, AnimatedContainer, AnimatedItem } from "@/components/common";
import { siteConfig } from "@/lib/data";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Building,
  Shield,
  Clock,
  CheckCircle,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Asil Hospital, your trusted healthcare partner in Sangareddy with modern facilities, experienced doctors, and patient-centered care.",
};

export default function AboutPage() {
  const stats = [
    { value: "15+", label: "Years of Excellence", icon: Award },
    { value: "50,000+", label: "Patients Served", icon: Users },
    { value: "25+", label: "Expert Doctors", icon: Heart },
    { value: "50+", label: "Hospital Beds", icon: Building },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "We treat every patient with empathy, respect, and understanding, ensuring a comfortable healthcare experience.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for the highest standards in medical care, continuously improving our services and outcomes.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We maintain transparency and ethical practices in all our interactions with patients and their families.",
    },
    {
      icon: Users,
      title: "Teamwork",
      description:
        "Our multidisciplinary team works together to provide comprehensive and coordinated patient care.",
    },
  ];

  const facilities = [
    "Modern Operation Theatres",
    "Advanced ICU & NICU",
    "24/7 Emergency Services",
    "Digital X-Ray & Imaging",
    "Fully Equipped Laboratory",
    "Comfortable Patient Rooms",
    "Pharmacy & Medical Store",
    "Ambulance Services",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-50 to-white py-16 md:py-24">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="heading-1 text-neutral-900 mt-2 mb-6">
              Your Trusted Healthcare{" "}
              <span className="text-gradient">Partner</span>
            </h1>
            <p className="text-lg text-neutral-600">
              Asil Hospital has been serving the Sangareddy community with
              quality healthcare since 2010. Our commitment to excellence and
              patient-centered care has made us a trusted name in healthcare.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-neutral-100">
        <div className="container-custom">
          <AnimatedContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <AnimatedItem key={index}>
                <div className="text-center p-6 rounded-xl bg-brand-50">
                  <stat.icon className="w-8 h-8 text-brand-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-neutral-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-neutral-500 text-sm">{stat.label}</div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="heading-2 text-neutral-900 mt-2 mb-6">
                A Legacy of Caring for the Community
              </h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  Founded in 2010, Asil Hospital began with a simple yet
                  profound vision: to provide accessible, high-quality
                  healthcare to the people of Sangareddy and surrounding areas.
                </p>
                <p>
                  Over the years, we have grown from a small clinic to a
                  full-fledged multi-specialty hospital, equipped with modern
                  technology and staffed by experienced medical professionals.
                </p>
                <p>
                  Today, Asil Hospital stands as a beacon of hope and healing,
                  serving thousands of patients annually with the same
                  dedication and compassion that inspired our founding.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <div className="aspect-video rounded-2xl overflow-hidden relative shadow-lg">
                <Image
                  src="/images/hero/hospital.png"
                  alt="Asil Hospital Building"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-brand-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 h-full shadow-sm">
                <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-brand-600" />
                </div>
                <h3 className="heading-3 text-neutral-900 mb-4">Our Mission</h3>
                <p className="text-neutral-600">
                  To provide comprehensive, affordable, and accessible
                  healthcare services with compassion and clinical excellence.
                  We are committed to improving the health and wellbeing of our
                  community through prevention, treatment, and education.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 h-full shadow-sm">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h3 className="heading-3 text-neutral-900 mb-4">Our Vision</h3>
                <p className="text-neutral-600">
                  To be the most trusted healthcare institution in Telangana,
                  recognized for our clinical excellence, patient satisfaction,
                  and contribution to community health. We aspire to set new
                  standards in healthcare delivery.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="heading-2 text-neutral-900 mt-2 mb-4">
              What We Stand For
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Our core values guide everything we do, from patient care to
              community engagement.
            </p>
          </AnimatedSection>

          <AnimatedContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedItem key={index}>
                <div className="bg-neutral-50 rounded-xl p-6 h-full hover:bg-brand-50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-neutral-500 text-sm">
                    {value.description}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="section-padding bg-brand-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <span className="text-brand-300 font-semibold text-sm uppercase tracking-wider">
                Our Facilities
              </span>
              <h2 className="heading-2 text-white mt-2 mb-6">
                State-of-the-Art Infrastructure
              </h2>
              <p className="text-brand-200 mb-8">
                We have invested in modern medical equipment and comfortable
                facilities to ensure the best care for our patients.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {facilities.map((facility, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-brand-100 text-sm">{facility}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-brand-800 rounded-xl p-6 text-center">
                  <Clock className="w-10 h-10 text-accent mx-auto mb-3" />
                  <p className="font-semibold text-white">24/7</p>
                  <p className="text-brand-300 text-sm">Emergency Care</p>
                </div>
                <div className="bg-brand-800 rounded-xl p-6 text-center">
                  <Shield className="w-10 h-10 text-accent mx-auto mb-3" />
                  <p className="font-semibold text-white">ISO</p>
                  <p className="text-brand-300 text-sm">Certified</p>
                </div>
                <div className="bg-brand-800 rounded-xl p-6 text-center col-span-2">
                  <Building className="w-10 h-10 text-accent mx-auto mb-3" />
                  <p className="font-semibold text-white">
                    Modern Multi-Specialty Facility
                  </p>
                  <p className="text-brand-300 text-sm">
                    Equipped with latest technology
                  </p>
                </div>
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
              Experience the Asil Difference
            </h2>
            <p className="text-brand-100 max-w-2xl mx-auto mb-8">
              Schedule a visit or book an appointment to experience our
              commitment to quality healthcare firsthand.
            </p>
            <Button size="xl" variant="accent" asChild>
              <Link href="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Book an Appointment
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
