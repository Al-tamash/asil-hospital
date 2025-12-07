import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection, AnimatedContainer, AnimatedItem, BlogCard } from "@/components/common";
import { blogPosts, siteConfig } from "@/lib/data";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Health Blog",
  description:
    "Read our latest health articles, tips, and medical advice from the expert doctors at Asil Hospital.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-50 to-white py-16 md:py-24">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
              Health Blog
            </span>
            <h1 className="heading-1 text-neutral-900 mt-2 mb-6">
              Health Tips & <span className="text-gradient">Medical Insights</span>
            </h1>
            <p className="text-lg text-neutral-600">
              Stay informed with the latest health tips, medical advice, and
              insights from our expert doctors. Your health education matters to
              us.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <AnimatedItem key={post.id}>
                <BlogCard post={post} />
              </AnimatedItem>
            ))}
          </AnimatedContainer>

          {blogPosts.length === 0 && (
            <div className="text-center py-16">
              <FileText className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                No Posts Yet
              </h3>
              <p className="text-neutral-600">
                Check back soon for health tips and medical insights.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-brand-50">
        <div className="container-custom max-w-2xl text-center">
          <AnimatedSection>
            <h2 className="heading-2 text-neutral-900 mb-4">
              Stay Updated on Health
            </h2>
            <p className="text-neutral-600 mb-6">
              Follow us on social media for regular health tips, hospital
              updates, and community health initiatives.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-brand-100 hover:bg-brand-200 rounded-lg flex items-center justify-center transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                </svg>
              </a>
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-brand-100 hover:bg-brand-200 rounded-lg flex items-center justify-center transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/>
                </svg>
              </a>
              <a
                href={siteConfig.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-brand-100 hover:bg-brand-200 rounded-lg flex items-center justify-center transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.95,4.57a10,10,0,0,1-2.82.77,4.96,4.96,0,0,0,2.16-2.72,9.9,9.9,0,0,1-3.12,1.19A4.92,4.92,0,0,0,11.8,8.28,14,14,0,0,1,1.64,3.15,4.82,4.82,0,0,0,1,5.64a4.9,4.9,0,0,0,2.19,4.1A4.86,4.86,0,0,1,.96,9.11v.06a4.93,4.93,0,0,0,3.95,4.83,4.86,4.86,0,0,1-2.22.08,4.93,4.93,0,0,0,4.6,3.42A9.87,9.87,0,0,1,0,19.54a13.94,13.94,0,0,0,7.55,2.21A13.9,13.9,0,0,0,21.56,7.68c0-.21,0-.42,0-.63A10,10,0,0,0,24,4.59Z"/>
                </svg>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
