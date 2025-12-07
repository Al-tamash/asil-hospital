import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";
import { AnimatedSection, AnimatedContainer, AnimatedItem } from "@/components/common";
import { galleryImages, siteConfig } from "@/lib/data";
import { Calendar, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore our modern hospital facilities through our photo gallery and virtual tour. See our state-of-the-art equipment and comfortable patient care areas.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-50 to-white py-16 md:py-24">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
              Gallery
            </span>
            <h1 className="heading-1 text-neutral-900 mt-2 mb-6">
              Tour Our <span className="text-gradient">Modern Facilities</span>
            </h1>
            <p className="text-lg text-neutral-600">
              Take a virtual tour of Asil Hospital and explore our state-of-the-art
              medical facilities, comfortable patient rooms, and welcoming environment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Virtual Tour / Street View Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
              Virtual Tour
            </span>
            <h2 className="heading-2 text-neutral-900 mt-2 mb-4">
              360° Street View Experience
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Explore our hospital from the outside with Google Street View.
              Navigate around to see our accessible location and modern building.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="max-w-5xl mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1765095883792!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ2F5SXVUbUFF!2m2!1d17.58972429990513!2d78.08418247867104!3f356.44897863060436!4f2.4139367789234427!5f0.7820865974627469"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Asil Hospital Street View"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="section-padding bg-brand-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
              Photo Gallery
            </span>
            <h2 className="heading-2 text-neutral-900 mt-2 mb-4">
              Inside Our Hospital
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Browse through our facilities and see the quality of care we provide
              to our patients every day.
            </p>
          </AnimatedSection>

          <AnimatedContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <AnimatedItem key={image.id}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={image.image}
                      alt={image.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="inline-block px-3 py-1 bg-brand-100 text-brand-700 text-xs font-medium rounded-full mb-2">
                      {image.category}
                    </div>
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                      {image.title}
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      {image.description}
                    </p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-brand-600 to-brand-700">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="heading-2 text-white mb-4">
              Ready to Visit Us?
            </h2>
            <p className="text-brand-100 max-w-2xl mx-auto mb-8">
              Schedule an appointment or visit us to experience our facilities
              in person and meet our expert medical team.
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
                <a href={siteConfig.mapLink} target="_blank" rel="noopener noreferrer">
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Directions
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
