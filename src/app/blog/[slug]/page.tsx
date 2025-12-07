import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui";
import { AnimatedSection } from "@/components/common";
import { blogPosts, siteConfig } from "@/lib/data";
import { Calendar, Clock, User, ArrowLeft, Share2, FileText } from "lucide-react";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-50 to-white py-12 md:py-16">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <Link
              href="/blog"
              className="inline-flex items-center text-brand-600 hover:text-brand-700 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <span className="inline-block bg-brand-100 text-brand-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>

            <h1 className="heading-1 text-neutral-900 mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-neutral-500">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {formattedDate}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Image Placeholder */}
      <section className="py-8 bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <div className="aspect-video bg-gradient-to-br from-brand-100 to-brand-200 rounded-2xl flex items-center justify-center">
              <FileText className="w-16 h-16 text-brand-400" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <article className="prose prose-lg max-w-none prose-headings:text-neutral-900 prose-p:text-neutral-600 prose-a:text-brand-600 prose-strong:text-neutral-900">
              <div
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .split("\n")
                    .map((line) => {
                      if (line.startsWith("## ")) {
                        return `<h2 class="text-2xl font-bold mt-8 mb-4">${line.slice(3)}</h2>`;
                      }
                      if (line.startsWith("**") && line.endsWith("**")) {
                        return `<p class="font-semibold text-neutral-900 mt-4 mb-2">${line.slice(2, -2)}</p>`;
                      }
                      if (line.startsWith("- ")) {
                        return `<li class="ml-4">${line.slice(2)}</li>`;
                      }
                      if (line.trim() === "") {
                        return "";
                      }
                      return `<p class="mb-4">${line}</p>`;
                    })
                    .join(""),
                }}
              />
            </article>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-4">
                  <span className="text-neutral-600">Share this article:</span>
                  <div className="flex space-x-2">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${siteConfig.url}/blog/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-brand-50 hover:bg-brand-100 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <span className="sr-only">Share on Facebook</span>
                      <Share2 className="w-4 h-4 text-brand-600" />
                    </a>
                  </div>
                </div>
                <Button variant="outline" asChild>
                  <Link href="/blog">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    More Articles
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-50">
        <div className="container-custom max-w-2xl text-center">
          <AnimatedSection>
            <h2 className="heading-2 text-neutral-900 mb-4">
              Need Medical Advice?
            </h2>
            <p className="text-neutral-600 mb-6">
              Our doctors are available to discuss your health concerns. Book an
              appointment today.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Book Appointment</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
