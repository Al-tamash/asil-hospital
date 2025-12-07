"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { Button, Input, Textarea, Label } from "@/components/ui";
import { AnimatedSection } from "@/components/common";
import { GoogleMap } from "@/components/common";
import { siteConfig } from "@/lib/data";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredDate: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        preferredDate: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to submit form"
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-50 to-white py-16 md:py-24">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
              Contact Us
            </span>
            <h1 className="heading-1 text-neutral-900 mt-2 mb-6">
              Get in Touch <span className="text-gradient">With Us</span>
            </h1>
            <p className="text-lg text-neutral-600">
              Have a question or need to book an appointment? We&apos;re here to
              help. Reach out to us through any of the channels below.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 bg-white border-b border-neutral-100">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center space-x-4 p-4 bg-brand-50 rounded-xl hover:bg-brand-100 transition-colors"
            >
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-brand-600" />
              </div>
              <div>
                <p className="text-sm text-neutral-500">Call Us</p>
                <p className="font-semibold text-neutral-900">
                  {siteConfig.phoneDisplay}
                </p>
              </div>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center space-x-4 p-4 bg-brand-50 rounded-xl hover:bg-brand-100 transition-colors"
            >
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-brand-600" />
              </div>
              <div>
                <p className="text-sm text-neutral-500">Email Us</p>
                <p className="font-semibold text-neutral-900">
                  {siteConfig.email}
                </p>
              </div>
            </a>

            <a
              href={siteConfig.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 bg-brand-50 rounded-xl hover:bg-brand-100 transition-colors"
            >
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-brand-600" />
              </div>
              <div>
                <p className="text-sm text-neutral-500">Location</p>
                <p className="font-semibold text-neutral-900">Sangareddy</p>
              </div>
            </a>

            <div className="flex items-center space-x-4 p-4 bg-brand-50 rounded-xl">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-brand-600" />
              </div>
              <div>
                <p className="text-sm text-neutral-500">Emergency</p>
                <p className="font-semibold text-neutral-900">24/7 Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection direction="right">
              <div className="bg-neutral-50 rounded-2xl p-8">
                <h2 className="heading-3 text-neutral-900 mb-2">
                  Book an Appointment
                </h2>
                <p className="text-neutral-600 mb-6">
                  Fill out the form below and we&apos;ll get back to you as soon
                  as possible.
                </p>

                {status === "success" ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-green-800 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-green-700">
                      Your message has been received. We&apos;ll contact you
                      shortly to confirm your appointment.
                    </p>
                    <Button
                      className="mt-4"
                      variant="outline"
                      onClick={() => setStatus("idle")}
                    >
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {status === "error" && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
                        <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <p className="text-red-700 text-sm">{errorMessage}</p>
                      </div>
                    )}

                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="mt-1"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="preferredDate">Preferred Date</Label>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your concern or the service you need..."
                        className="mt-1 min-h-[120px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Submit Request
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Map & Address */}
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-6">
                <div>
                  <h2 className="heading-3 text-neutral-900 mb-2">
                    Visit Our Hospital
                  </h2>
                  <p className="text-neutral-600">
                    Located in the heart of Sangareddy, we&apos;re easily
                    accessible from all parts of the city.
                  </p>
                </div>

                <GoogleMap className="rounded-2xl overflow-hidden shadow-lg" />

                <div className="bg-brand-50 rounded-xl p-6">
                  <h3 className="font-semibold text-neutral-900 mb-4">
                    Address
                  </h3>
                  <a
                    href={siteConfig.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-3 text-neutral-600 hover:text-brand-600 transition-colors"
                  >
                    <MapPin className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                    <span>{siteConfig.address.full}</span>
                  </a>

                  <div className="mt-4 pt-4 border-t border-brand-100">
                    <h4 className="font-medium text-neutral-900 mb-2">
                      Working Hours
                    </h4>
                    <div className="space-y-1 text-sm text-neutral-600">
                      <p>
                        <strong>Emergency:</strong>{" "}
                        {siteConfig.workingHours.weekdays}
                      </p>
                      <p>
                        <strong>OPD:</strong> {siteConfig.workingHours.opd}
                      </p>
                      <p>
                        <strong>Sunday:</strong> {siteConfig.workingHours.sunday}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
