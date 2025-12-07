export interface GalleryImage {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    title: "Reception Area",
    category: "Facilities",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
    description: "Modern and welcoming reception area with comfortable seating"
  },
  {
    id: "2",
    title: "Operation Theatre",
    category: "Medical Facilities",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=600&fit=crop",
    description: "State-of-the-art operation theatre with advanced surgical equipment"
  },
  {
    id: "3",
    title: "Patient Room",
    category: "Patient Care",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop",
    description: "Comfortable and well-equipped patient rooms"
  },
  {
    id: "4",
    title: "Diagnostic Lab",
    category: "Medical Facilities",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=600&fit=crop",
    description: "Modern laboratory with latest diagnostic equipment"
  },
  {
    id: "5",
    title: "General Ward",
    category: "Patient Care",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&h=600&fit=crop",
    description: "Spacious and clean general ward with modern amenities"
  },
  {
    id: "6",
    title: "Pharmacy",
    category: "Facilities",
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800&h=600&fit=crop",
    description: "In-house pharmacy with comprehensive medication stock"
  }
];

export const galleryCategories = [
  "All",
  "Facilities",
  "Medical Facilities",
  "Patient Care"
];
