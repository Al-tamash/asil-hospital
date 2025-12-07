import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";
import {
  AnimatedSection,
  AnimatedContainer,
  AnimatedItem,
  ServiceCard,
  DoctorCard,
  TestimonialCard,
  BlogCard,
} from "@/components/common";
import { services, doctors, testimonials, galleryImages, blogPosts, faqs, siteConfig } from "@/lib/data";
import {
  Phone,
  Calendar,
  Clock,
  Shield,
  Award,
  Users,
  Heart,
  Building,
  ArrowRight,
  CheckCircle,
  Camera,
  MessageCircleQuestion,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-50 via-white to-brand-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-200 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="container-custom relative">
          <div className="py-20 md:py-28 lg:py-36">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <AnimatedSection direction="right">
                <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Shield className="w-4 h-4" />
                  <span>Trusted Healthcare Since 2010</span>
                </div>

                <h1 className="heading-1 text-neutral-900 mb-6">
                  Your Health Is Our{" "}
                  <span className="text-gradient">Top Priority</span>
                </h1>

                <p className="text-lg text-neutral-600 mb-8 max-w-xl">
                  At Asil Hospital, we combine advanced medical technology with
                  compassionate care to provide the best healthcare experience
                  for you and your family in Sangareddy.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="xl" asChild>
                    <Link href="/contact">
                      <Calendar className="w-5 h-5 mr-2" />
                      Book Appointment
                    </Link>
                  </Button>
                  <Button variant="outline" size="xl" asChild>
                    <a href={`tel:${siteConfig.phone}`}>
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </div>

                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-brand-600" />
                    <span className="text-neutral-600 text-sm">24/7 Emergency</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-brand-600" />
                    <span className="text-neutral-600 text-sm">Expert Doctors</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-brand-600" />
                    <span className="text-neutral-600 text-sm">Modern Facilities</span>
                  </div>
                </div>
              </AnimatedSection>
              {/* Right - Hero Image */}
              <AnimatedSection direction="left" delay={0.2}>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/hero/doctors.png"
                      alt="Asil Hospital Medical Team"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  {/* Floating Stats Card */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl hidden md:block">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-brand-600" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-neutral-900">50,000+</p>
                        <p className="text-neutral-500 text-sm">Happy Patients</p>
                      </div>
                    </div>
                  </div>
                  {/* Floating Badge */}
                  <div className="absolute -top-4 -right-4 bg-accent text-white rounded-xl p-3 shadow-xl hidden md:block">
                    <div className="text-center">
                      <p className="text-xl font-bold">15+</p>
                      <p className="text-xs">Years</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview / Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="heading-2 text-neutral-900 mt-2 mb-6">
                Experience Healthcare Excellence
              </h2>
              <p className="text-neutral-600 mb-8">
                We are committed to providing exceptional healthcare services
                with a patient-first approach. Our modern facilities, expert
                doctors, and compassionate staff ensure you receive the best
                possible care.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Clock,
                    title: "24/7 Emergency Services",
                    desc: "Round-the-clock emergency care with rapid response teams",
                  },
                  {
                    icon: Shield,
                    title: "Advanced Technology",
                    desc: "State-of-the-art medical equipment for accurate diagnosis",
                  },
                  {
                    icon: Users,
                    title: "Expert Medical Team",
                    desc: "Experienced specialists across all major departments",
                  },
                  {
                    icon: Heart,
                    title: "Patient-Centered Care",
                    desc: "Personalized treatment plans focused on your wellbeing",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 bg-neutral-50 p-4 rounded-xl"
                  >
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

              <Button variant="outline" className="mt-6" asChild>
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden relative">
                  <Image
                    src="/images/about/lobby.png"
                    alt="Asil Hospital Modern Facility"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-neutral-900">98%</p>
                      <p className="text-neutral-500 text-sm">
                        Patient Satisfaction
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-brand-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="heading-2 text-neutral-900 mt-2 mb-4">
              Comprehensive Healthcare Services
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We offer a wide range of medical services to cater to all your
              healthcare needs with state-of-the-art facilities and experienced
              medical professionals.
            </p>
          </AnimatedSection>

          <AnimatedContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, index) => (
              <AnimatedItem key={service.id}>
                <ServiceCard service={service} />
              </AnimatedItem>
            ))}
          </AnimatedContainer>

          <AnimatedSection className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
              Our Doctors
            </span>
            <h2 className="heading-2 text-neutral-900 mt-2 mb-4">
              Meet Our Expert Medical Team
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Our team of highly qualified doctors brings years of experience
              and expertise to provide you with the best medical care.
            </p>
          </AnimatedSection>

          <AnimatedContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.slice(0, 3).map((doctor) => (
              <AnimatedItem key={doctor.id}>
                <DoctorCard doctor={doctor} />
              </AnimatedItem>
            ))}
          </AnimatedContainer>

          <AnimatedSection className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link href="/doctors">
                View All Doctors
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Preview Section with Street View */}
      <section className="section-padding bg-brand-900 text-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="text-brand-300 font-semibold text-sm uppercase tracking-wider">
              Virtual Tour
            </span>
            <h2 className="heading-2 text-white mt-2 mb-4">
              Explore Our Modern Facilities
            </h2>
            <p className="text-brand-200 max-w-2xl mx-auto">
              Take a virtual tour of Asil Hospital through our Street View and
              browse our photo gallery to see our state-of-the-art facilities.
            </p>
          </AnimatedSection>

          {/* Street View */}
          <AnimatedSection className="mb-12">
            <div className="max-w-5xl mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1765095883792!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ2F5SXVUbUFF!2m2!1d17.58972429990513!2d78.08418247867104!3f356.44897863060436!4f2.4139367789234427!5f0.7820865974627469"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Asil Hospital Street View"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </AnimatedSection>

          {/* Gallery Preview Images */}
          <AnimatedContainer className="grid md:grid-cols-3 gap-6 mb-10">
            {galleryImages.slice(0, 3).map((image) => (
              <AnimatedItem key={image.id}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 group">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={image.image}
                      alt={image.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white">{image.title}</h3>
                    <p className="text-brand-200 text-sm mt-1">{image.category}</p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedContainer>

          <AnimatedSection className="text-center">
            <Button size="lg" variant="accent" asChild>
              <Link href="/gallery">
                <Camera className="w-5 h-5 mr-2" />
                View Full Gallery
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="heading-2 text-neutral-900 mt-2 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Hear from our patients about their experience at Asil Hospital.
              Your trust and satisfaction are our greatest achievements.
            </p>
          </AnimatedSection>

          <AnimatedContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial) => (
              <AnimatedItem key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="section-padding bg-brand-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
              Health Blog
            </span>
            <h2 className="heading-2 text-neutral-900 mt-2 mb-4">
              Latest Health Tips & Articles
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Stay informed with our latest health articles, tips, and medical
              insights from our expert doctors.
            </p>
          </AnimatedSection>

          <AnimatedContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <AnimatedItem key={post.id}>
                <BlogCard post={post} />
              </AnimatedItem>
            ))}
          </AnimatedContainer>

          <AnimatedSection className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link href="/blog">
                View All Articles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
                FAQ
              </span>
              <h2 className="heading-2 text-neutral-900 mt-2 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-neutral-600 mb-6">
                Find answers to common questions about our services, facilities,
                and how we can help you with your healthcare needs.
              </p>

              <div className="space-y-3">
                {faqs.slice(0, 3).map((faq, index) => (
                  <div key={index} className="bg-neutral-50 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <MessageCircleQuestion className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                      <div>
                        <h4 className="font-medium text-neutral-900 mb-1">
                          {faq.question}
                        </h4>
                        <p className="text-neutral-600 text-sm line-clamp-2">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="mt-6" asChild>
                <Link href="/faq">
                  View All FAQs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <div className="bg-brand-50 rounded-2xl p-8">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mx-auto">
                    <MessageCircleQuestion className="w-10 h-10 text-brand-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    Have More Questions?
                  </h3>
                  <p className="text-neutral-600">
                    Our team is here to help you with any questions or concerns
                    you may have about our services.
                  </p>
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      Contact Us
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-brand-600 to-brand-700">
        <div className="container-custom">
          <AnimatedSection className="text-center">
            <h2 className="heading-2 text-white mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-brand-100 max-w-2xl mx-auto mb-8">
              Book an appointment today and experience world-class healthcare at
              Asil Hospital. Our team is ready to provide you with the care you
              deserve.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="xl"
                variant="accent"
                asChild
              >
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
                  {siteConfig.phoneDisplay}
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
