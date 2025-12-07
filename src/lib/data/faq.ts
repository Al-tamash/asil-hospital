export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What are the hospital visiting hours?",
    answer: "Visiting hours are from 10:00 AM to 12:00 PM and 4:00 PM to 7:00 PM daily. ICU visitation has restricted hours - please check with the nursing station for specific timings."
  },
  {
    id: "2",
    question: "How can I book an appointment?",
    answer: "You can book an appointment through our website's contact form, by calling us at +91 96030 13571, or by visiting the hospital reception. We recommend calling ahead for specialist consultations."
  },
  {
    id: "3",
    question: "Do you accept health insurance?",
    answer: "Yes, we accept all major health insurance providers including government schemes like Ayushman Bharat and Aarogyasri. Please bring your insurance card and a valid ID when visiting. Our insurance desk will assist with cashless claims."
  },
  {
    id: "4",
    question: "Is emergency care available 24/7?",
    answer: "Yes, our Emergency Department operates 24 hours a day, 7 days a week, including holidays. We have trained emergency physicians and nurses on duty at all times, along with ambulance services."
  },
  {
    id: "5",
    question: "What documents should I bring for admission?",
    answer: "Please bring a valid photo ID (Aadhaar/PAN), any previous medical records, current medications list, insurance documents, and a recent photograph. For planned surgeries, pre-operative test reports are required."
  },
  {
    id: "6",
    question: "Do you have pharmacy services?",
    answer: "Yes, we have an in-house pharmacy that operates 24/7. It stocks all essential medications, and our pharmacists can help with prescription queries."
  },
  {
    id: "7",
    question: "Are there accommodation facilities for patient attendants?",
    answer: "Yes, we provide comfortable attendant accommodation. Each room has provisions for one attendant. Additional attendant rooms are available at nominal charges for families of patients in ICU or critical care."
  },
  {
    id: "8",
    question: "What payment methods are accepted?",
    answer: "We accept cash, credit/debit cards, UPI payments, and NEFT/RTGS transfers. For cashless insurance claims, please coordinate with our insurance desk before admission."
  }
];
