import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui";
import {
  AnimatedSection,
  AnimatedContainer,
  AnimatedItem,
  DoctorCard,
} from "@/components/common";
import { doctors, siteConfig } from "@/lib/data";
import { Calendar, Phone, Users, Award, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Doctors",
  description:
    "Meet our team of expert doctors at Asil Hospital. Experienced specialists in Cardiology, Orthopedics, Gynecology, Pediatrics, Neurology, and more.",
};

export default function DoctorsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-50 to-white py-16 md:py-24">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
              Our Doctors
            </span>
            <h1 className="heading-1 text-neutral-900 mt-2 mb-6">
              Meet Our Expert{" "}
              <span className="text-gradient">Medical Team</span>
            </h1>
            <p className="text-lg text-neutral-600">
              Our team of highly qualified and experienced doctors is dedicated
              to providing you with the best medical care. Each specialist
              brings expertise and compassion to patient care.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b border-neutral-100">
        <div className="container-custom">
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-brand-600" />
              </div>
              <div className="text-2xl font-bold text-neutral-900">25+</div>
              <div className="text-neutral-500 text-sm">Doctors</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-brand-600" />
              </div>
              <div className="text-2xl font-bold text-neutral-900">10+</div>
              <div className="text-neutral-500 text-sm">Specialties</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-6 h-6 text-brand-600" />
              </div>
              <div className="text-2xl font-bold text-neutral-900">15+</div>
              <div className="text-neutral-500 text-sm">Years Avg. Exp</div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <AnimatedItem key={doctor.id}>
                <DoctorCard doctor={doctor} />
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      {/* Appointment Info */}
      <section className="section-padding bg-brand-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="heading-2 text-neutral-900 mb-4">
                How to Book an Appointment
              </h2>
              <p className="text-neutral-600 mb-8">
                Booking an appointment with our doctors is easy. Choose the
                method that works best for you.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6">
                  <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-brand-600 font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Online Booking
                  </h3>
                  <p className="text-neutral-500 text-sm">
                    Fill out our contact form with your preferred date and
                    doctor
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-brand-600 font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Call Us
                  </h3>
                  <p className="text-neutral-500 text-sm">
                    Speak with our reception to schedule your appointment
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-brand-600 font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Walk-In
                  </h3>
                  <p className="text-neutral-500 text-sm">
                    Visit our hospital during OPD hours for direct consultation
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Online
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    {siteConfig.phoneDisplay}
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
