import React from "react";
import { siteConfig } from "@/lib/data";

interface GoogleMapProps {
  className?: string;
  height?: string;
}

export function GoogleMap({ className, height = "400px" }: GoogleMapProps) {
  // Regular Google Map embed showing hospital location
  // Coordinates: 17.58972429990513, 78.08418247867104 (Asil Hospital, Sangareddy)
  return (
    <div className={className}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.0!2d78.08418247867104!3d17.58972429990513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDM1JzIzLjAiTiA3OMKwMDUnMDMuMSJF!5e0!3m2!1sen!2sin!4v1702000000000!5m2!1sen!2sin"
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`${siteConfig.name} Location`}
        className="rounded-xl"
      />
    </div>
  );
}

