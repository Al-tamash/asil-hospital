import React from "react";
import { siteConfig } from "@/lib/data";

interface StreetViewProps {
  className?: string;
  height?: string;
}

export function StreetView({ className, height = "400px" }: StreetViewProps) {
  // Hospital Street View embed from Google Maps
  return (
    <div className={className}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!4v1765095883792!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ2F5SXVUbUFF!2m2!1d17.58972429990513!2d78.08418247867104!3f356.44897863060436!4f2.4139367789234427!5f0.7820865974627469"
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`${siteConfig.name} Street View`}
        className="rounded-xl"
      />
    </div>
  );
}
