import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import type { BlogPost } from "@/lib/data/blog";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="group hover:border-brand-200 overflow-hidden h-full">
      <CardContent className="p-0">
        {/* Blog Image */}
        <div className="aspect-[16/9] relative overflow-hidden bg-brand-50">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-brand-600 text-white text-xs font-medium px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center space-x-4 text-xs text-neutral-500 mb-3">
            <div className="flex items-center">
              <Calendar className="w-3.5 h-3.5 mr-1" />
              {formattedDate}
            </div>
            <div className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1" />
              {post.readTime}
            </div>
          </div>

          <Link href={`/blog/${post.slug}`}>
            <h3 className="font-semibold text-lg text-neutral-900 group-hover:text-brand-600 transition-colors duration-200 line-clamp-2 mb-2">
              {post.title}
            </h3>
          </Link>

          <p className="text-neutral-500 text-sm line-clamp-2 mb-4">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
            <div className="flex items-center text-sm text-neutral-600">
              <User className="w-4 h-4 mr-2 text-neutral-400" />
              {post.author}
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="text-brand-600 text-sm font-medium flex items-center hover:text-brand-700 transition-colors"
            >
              Read More
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
