import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@/lib/data/testimonials";
import { Star, User, Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full bg-white hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6 flex flex-col h-full">
        {/* Quote Icon */}
        <div className="mb-4">
          <Quote className="w-8 h-8 text-brand-200" />
        </div>

        {/* Rating */}
        <div className="flex space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < testimonial.rating
                  ? "fill-accent text-accent"
                  : "text-neutral-300"
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <p className="text-neutral-600 text-sm leading-relaxed flex-1 mb-6">
          &ldquo;{testimonial.content}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center space-x-3 pt-4 border-t border-neutral-100">
          <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-brand-600" />
          </div>
          <div>
            <p className="font-medium text-neutral-900 text-sm">
              {testimonial.name}
            </p>
            <p className="text-neutral-500 text-xs">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
