export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ramesh Kumar",
    role: "Patient",
    content: "Exceptional care and attention from the entire team at Asil Hospital. The doctors took time to explain everything and made me feel comfortable throughout my treatment. Highly recommended!",
    rating: 5,
    image: "/images/testimonials/patient-1.jpg"
  },
  {
    id: "2",
    name: "Fatima Begum",
    role: "Patient",
    content: "The gynecology department provided outstanding care during my pregnancy. Dr. Priya and her team were incredibly supportive. My delivery experience was smooth and safe.",
    rating: 5,
    image: "/images/testimonials/patient-2.jpg"
  },
  {
    id: "3",
    name: "Venkat Rao",
    role: "Patient",
    content: "After my knee replacement surgery, I can walk without pain again. The orthopedic team's expertise and the hospital's modern facilities made my recovery quick and comfortable.",
    rating: 5,
    image: "/images/testimonials/patient-3.jpg"
  },
  {
    id: "4",
    name: "Lakshmi Devi",
    role: "Patient",
    content: "The 24/7 emergency care saved my father's life. The response was immediate and the doctors handled the cardiac emergency brilliantly. We are forever grateful to Asil Hospital.",
    rating: 5,
    image: "/images/testimonials/patient-4.jpg"
  },
  {
    id: "5",
    name: "Suresh Reddy",
    role: "Patient",
    content: "Clean facilities, courteous staff, and excellent diagnostic services. Got all my reports quickly and the doctors provided clear guidance on my health condition.",
    rating: 5,
    image: "/images/testimonials/patient-5.jpg"
  }
];
