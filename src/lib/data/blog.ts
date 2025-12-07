export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "importance-of-regular-health-checkups",
    title: "The Importance of Regular Health Checkups",
    excerpt: "Discover why annual health screenings can detect problems early and save lives. Learn what tests you should be getting at different ages.",
    content: `Regular health checkups are one of the most important investments you can make in your wellbeing. Many serious conditions, including heart disease, diabetes, and cancer, can develop silently without noticeable symptoms.

## Why Annual Checkups Matter

Preventive care through regular screenings can detect health issues before they become serious problems. Early detection often means simpler, less expensive treatment and better outcomes.

## Recommended Screenings by Age

**In Your 30s:**
- Blood pressure check annually
- Cholesterol screening every 5 years
- Diabetes screening if at risk

**In Your 40s:**
- All of the above, plus
- Eye examination every 2-4 years
- Cardiac risk assessment

**50 and Above:**
- Annual comprehensive health checkup
- Cancer screenings as recommended
- Bone density tests for women

## What to Expect

A typical health checkup includes physical examination, blood tests, and lifestyle counseling. Don't hesitate to discuss any concerns with your doctor.

At Asil Hospital, we offer comprehensive health packages tailored to your age and risk factors. Schedule your checkup today!`,
    image: "/images/blog/checkup.png",
    author: "Dr. Kavitha Kumar",
    date: "2024-11-15",
    category: "Preventive Care",
    readTime: "5 min read"
  },
  {
    id: "2",
    slug: "heart-health-tips",
    title: "10 Simple Tips for a Healthy Heart",
    excerpt: "Heart disease is preventable for most people. Learn practical lifestyle changes that can significantly reduce your cardiovascular risk.",
    content: `Your heart works tirelessly, beating about 100,000 times a day. Taking care of it should be a priority. Here are evidence-based tips for maintaining a healthy heart.

## 1. Stay Active
Aim for at least 150 minutes of moderate exercise weekly. Walking, swimming, or cycling are excellent choices.

## 2. Eat Heart-Healthy Foods
Focus on fruits, vegetables, whole grains, lean proteins, and healthy fats. Reduce saturated fats, trans fats, and sodium.

## 3. Maintain a Healthy Weight
Excess weight puts strain on your heart. Even losing 5-10% of body weight can improve heart health.

## 4. Don't Smoke
Smoking damages blood vessels and increases heart disease risk. Quitting at any age provides benefits.

## 5. Limit Alcohol
If you drink, do so in moderation. Excessive alcohol can raise blood pressure and add calories.

## 6. Manage Stress
Chronic stress affects heart health. Practice relaxation techniques like meditation or deep breathing.

## 7. Get Quality Sleep
Poor sleep is linked to heart disease. Aim for 7-9 hours nightly.

## 8. Know Your Numbers
Monitor blood pressure, cholesterol, and blood sugar regularly.

## 9. Take Medications as Prescribed
If you have conditions like hypertension or diabetes, follow your treatment plan carefully.

## 10. Stay Connected
Social connections and positive relationships contribute to heart health.

Visit Asil Hospital for comprehensive cardiac care and heart health evaluations.`,
    image: "/images/blog/heart.png",
    author: "Dr. Ahmed Khan",
    date: "2024-11-10",
    category: "Cardiology",
    readTime: "6 min read"
  },
  {
    id: "3",
    slug: "managing-diabetes-lifestyle",
    title: "Managing Diabetes Through Lifestyle Changes",
    excerpt: "Type 2 diabetes can often be managed effectively with the right lifestyle modifications. Learn how diet, exercise, and monitoring work together.",
    content: `Diabetes management goes beyond medication. Lifestyle changes play a crucial role in controlling blood sugar and preventing complications.

## Understanding Your Condition

Type 2 diabetes occurs when your body becomes resistant to insulin or doesn't produce enough. The good news is that lifestyle modifications can significantly improve your condition.

## Dietary Strategies

**Focus on:**
- Complex carbohydrates over simple sugars
- High-fiber foods
- Lean proteins
- Healthy fats from nuts and olive oil

**Limit:**
- Sugary beverages and sweets
- Refined carbohydrates
- Processed foods

## Exercise Benefits

Physical activity helps:
- Lower blood sugar levels
- Improve insulin sensitivity
- Maintain healthy weight
- Reduce cardiovascular risk

Aim for 30 minutes of moderate activity most days of the week.

## Monitoring and Tracking

Regular blood sugar monitoring helps you understand how food, activity, and medication affect your levels. Keep a log and share it with your doctor.

## Mental Health Matters

Living with diabetes can be challenging. Don't hesitate to seek support from healthcare providers, family, or support groups.

Asil Hospital's diabetes care program offers comprehensive management including education, nutrition counseling, and regular monitoring.`,
    image: "/images/blog/diabetes.png",
    author: "Dr. Kavitha Kumar",
    date: "2024-11-05",
    category: "General Health",
    readTime: "5 min read"
  }
];
