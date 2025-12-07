export interface Doctor {
  id: string;
  name: string;
  designation: string;
  specialization: string;
  experience: string;
  education: string;
  image: string;
  availableDays: string;
}

export const doctors: Doctor[] = [
  {
    id: "dr-ahmed-khan",
    name: "Dr. Ahmed Khan",
    designation: "Senior Cardiologist",
    specialization: "Interventional Cardiology",
    experience: "18+ years",
    education: "MBBS, MD (Cardiology), DM",
    image: "/images/doctors/doctor-1.png",
    availableDays: "Mon - Sat"
  },
  {
    id: "dr-priya-sharma",
    name: "Dr. Priya Sharma",
    designation: "Chief Gynecologist",
    specialization: "Obstetrics & Gynecology",
    experience: "15+ years",
    education: "MBBS, MS (OBG), FRCOG",
    image: "/images/doctors/doctor-2.png",
    availableDays: "Mon - Fri"
  },
  {
    id: "dr-rajesh-reddy",
    name: "Dr. Rajesh Reddy",
    designation: "Orthopedic Surgeon",
    specialization: "Joint Replacement & Sports Medicine",
    experience: "12+ years",
    education: "MBBS, MS (Ortho), Fellowship",
    image: "/images/doctors/doctor-3.png",
    availableDays: "Mon - Sat"
  },
  {
    id: "dr-sneha-patel",
    name: "Dr. Sneha Patel",
    designation: "Consultant Pediatrician",
    specialization: "Pediatric Care & Neonatology",
    experience: "10+ years",
    education: "MBBS, MD (Pediatrics)",
    image: "/images/doctors/doctor-4.png",
    availableDays: "Mon - Sat"
  },
  {
    id: "dr-mohammed-ali",
    name: "Dr. Mohammed Ali",
    designation: "Neurologist",
    specialization: "Neurology & Stroke Medicine",
    experience: "14+ years",
    education: "MBBS, MD (Medicine), DM (Neuro)",
    image: "/images/doctors/doctor-5.png",
    availableDays: "Tue - Sat"
  },
  {
    id: "dr-kavitha-kumar",
    name: "Dr. Kavitha Kumar",
    designation: "General Physician",
    specialization: "Internal Medicine",
    experience: "20+ years",
    education: "MBBS, MD (Medicine)",
    image: "/images/doctors/doctor-6.png",
    availableDays: "Mon - Sat"
  }
];
