export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "emergency-care",
    title: "Emergency Care",
    description: "24/7 emergency medical services with advanced life support systems and experienced trauma specialists ready to handle critical situations.",
    icon: "ambulance",
    image: "/images/services/emergency.jpg",
    features: [
      "24/7 Emergency Response",
      "Advanced Trauma Care",
      "Critical Care Unit",
      "Rapid Diagnostics"
    ]
  },
  {
    id: "cardiology",
    title: "Cardiology",
    description: "Comprehensive heart care including diagnostics, interventional procedures, and cardiac rehabilitation with state-of-the-art equipment.",
    icon: "heart",
    image: "/images/services/cardiology.jpg",
    features: [
      "ECG & Echo Services",
      "Angiography",
      "Cardiac Surgery",
      "Heart Failure Management"
    ]
  },
  {
    id: "orthopedics",
    title: "Orthopedics",
    description: "Expert bone and joint care including joint replacements, sports medicine, and minimally invasive spine surgeries.",
    icon: "bone",
    image: "/images/services/orthopedics.jpg",
    features: [
      "Joint Replacement",
      "Sports Medicine",
      "Spine Surgery",
      "Fracture Care"
    ]
  },
  {
    id: "pediatrics",
    title: "Pediatrics",
    description: "Specialized healthcare for infants, children, and adolescents with a child-friendly environment and compassionate care.",
    icon: "baby",
    image: "/images/services/pediatrics.jpg",
    features: [
      "Newborn Care",
      "Vaccination Programs",
      "Child Development",
      "Pediatric Surgery"
    ]
  },
  {
    id: "gynecology",
    title: "Gynecology & Obstetrics",
    description: "Complete women's health services including prenatal care, safe deliveries, and gynecological treatments.",
    icon: "female",
    image: "/images/services/gynecology.jpg",
    features: [
      "Prenatal Care",
      "Normal & C-Section Delivery",
      "Infertility Treatment",
      "Laparoscopic Surgery"
    ]
  },
  {
    id: "neurology",
    title: "Neurology",
    description: "Advanced neurological care for disorders of the brain, spine, and nervous system with cutting-edge diagnostic tools.",
    icon: "brain",
    image: "/images/services/neurology.jpg",
    features: [
      "Stroke Care",
      "Epilepsy Treatment",
      "Movement Disorders",
      "Neurophysiology"
    ]
  },
  {
    id: "general-medicine",
    title: "General Medicine",
    description: "Comprehensive primary healthcare services for diagnosis and treatment of common medical conditions.",
    icon: "stethoscope",
    image: "/images/services/general.jpg",
    features: [
      "Health Checkups",
      "Chronic Disease Management",
      "Preventive Care",
      "Internal Medicine"
    ]
  },
  {
    id: "diagnostics",
    title: "Diagnostics & Lab",
    description: "State-of-the-art diagnostic facilities including advanced imaging, pathology, and laboratory services.",
    icon: "microscope",
    image: "/images/services/diagnostics.jpg",
    features: [
      "CT & MRI Scanning",
      "Digital X-Ray",
      "Ultrasound",
      "Complete Blood Tests"
    ]
  }
];
