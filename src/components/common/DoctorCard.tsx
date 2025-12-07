import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Doctor } from "@/lib/data/doctors";
import { Calendar, GraduationCap, Briefcase } from "lucide-react";

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Card className="group hover:border-brand-200 overflow-hidden h-full">
      <CardContent className="p-0">
        {/* Doctor Image */}
        <div className="aspect-[4/3] relative overflow-hidden bg-brand-50">
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-semibold text-lg text-neutral-900 group-hover:text-brand-600 transition-colors duration-200">
            {doctor.name}
          </h3>
          <p className="text-brand-600 font-medium text-sm mt-1">
            {doctor.designation}
          </p>
          
          <div className="mt-4 space-y-2">
            <div className="flex items-center text-sm text-neutral-600">
              <Briefcase className="w-4 h-4 mr-2 text-neutral-400" />
              {doctor.specialization}
            </div>
            <div className="flex items-center text-sm text-neutral-600">
              <GraduationCap className="w-4 h-4 mr-2 text-neutral-400" />
              {doctor.experience} experience
            </div>
            <div className="flex items-center text-sm text-neutral-600">
              <Calendar className="w-4 h-4 mr-2 text-neutral-400" />
              {doctor.availableDays}
            </div>
          </div>

          <Button className="w-full mt-4" size="sm" asChild>
            <Link href="/contact">Book Appointment</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
