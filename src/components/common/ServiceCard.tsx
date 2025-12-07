"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Service } from "@/lib/data/services";
import {
  Ambulance,
  Heart,
  Bone,
  Baby,
  User,
  Brain,
  Stethoscope,
  Microscope,
  CheckCircle,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ambulance: Ambulance,
  heart: Heart,
  bone: Bone,
  baby: Baby,
  female: User,
  brain: Brain,
  stethoscope: Stethoscope,
  microscope: Microscope,
};

interface ServiceCardProps {
  service: Service;
  variant?: "default" | "compact";
  showModal?: boolean;
}

export function ServiceCard({ service, variant = "default", showModal = false }: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const IconComponent = iconMap[service.icon] || Stethoscope;

  if (variant === "compact") {
    return (
      <Card className="group hover:border-brand-200 overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center group-hover:bg-brand-100 transition-colors duration-200 shrink-0">
              <IconComponent className="w-6 h-6 text-brand-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-neutral-900 group-hover:text-brand-600 transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-sm text-neutral-500 mt-1 line-clamp-2">
                {service.description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card className="group hover:border-brand-200 overflow-hidden h-full">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="w-14 h-14 bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-brand-100 group-hover:to-brand-200 transition-all duration-300">
            <IconComponent className="w-7 h-7 text-brand-600" />
          </div>
          <h3 className="font-semibold text-lg text-neutral-900 mb-2 group-hover:text-brand-600 transition-colors duration-200">
            {service.title}
          </h3>
          <p className="text-neutral-500 text-sm flex-1 mb-4">
            {service.description}
          </p>
          <ul className="space-y-2 mb-4">
            {service.features.slice(0, 3).map((feature, index) => (
              <li
                key={index}
                className="flex items-center text-sm text-neutral-600"
              >
                <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2" />
                {feature}
              </li>
            ))}
          </ul>
          {showModal ? (
            <Button
              variant="secondary"
              className="w-full mt-auto"
              onClick={() => setIsOpen(true)}
            >
              Learn More
            </Button>
          ) : (
            <Button
              variant="secondary"
              className="w-full mt-auto"
              asChild
            >
              <Link href={`/services#${service.id}`}>Learn More</Link>
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Service Details Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl flex items-center justify-center">
                <IconComponent className="w-6 h-6 text-brand-600" />
              </div>
              <DialogTitle className="text-2xl">{service.title}</DialogTitle>
            </div>
            <DialogDescription className="text-base">
              {service.description}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6">
            <h4 className="font-semibold text-lg text-neutral-900 mb-4">
              What We Offer
            </h4>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                  <span className="text-neutral-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 p-4 bg-brand-50 rounded-lg">
            <p className="text-neutral-600 text-sm mb-4">
              Ready to schedule an appointment or learn more about this service?
            </p>
            <div className="flex gap-3">
              <Button className="flex-1" asChild>
                <Link href="/contact">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Link>
              </Button>
              <Button variant="outline" className="flex-1" asChild>
                <a href={`tel:+919603013571`}>
                  Call Us
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
