export const programs = [
  "Technical & Vocational Training",
  "Creative Arts & Design",
  "Digital Skills & IT",
  "Business & Entrepreneurship",
  "Personal & Soft Skills",
  "Agricultural & Environmental Trades",
  "Financial & Digital Commerce",
  "Certification & Examinations",
  "Tech Courses (Frontend, Backend, Fullstack, etc.)",
  "Forex & Synthetic Indices Trading",
  "Content Creation",
  "Traditional Internship Program",
];

export const skillCategories = {
  "Technical & Industrial Skills": [
    "Electrical Installation & Maintenance",
    "Electrical Installation", // added
    "Welding & Fabrication",
    "Welding", 
    "Plumbing Systems",
    "Automotive Repair",
    "Construction Techniques",
    "Carpentry", // added
    "CNC Machine Operation",
  ],

  "Creative & Design Skills": [
    "Fashion Design",
    "Interior Decoration",
    "Graphic Design",
    "Multimedia Production",
    "Jewelry Making",
    "UI/UX Design",
    "Content Creation",
  ],

  "Digital & Technology Skills": [
    "Frontend Development",
    "Backend Development",
    "Full-Stack Development",
    "Data Analysis",
    "Cybersecurity",
    "Blockchain Development",
    "Basic Programming",
    "Digital Marketing", // added
  ],

  "Business & Entrepreneurship": [
    "Accounting",
    "Bookkeeping",
    "Small Business Management",
    "Marketing Strategies",
    "Logistics & Supply Chain",
    "E-commerce",
    "Fintech Basics",
    "Traditional Internship Program",
  ],

  "Personal Development (Soft Skills)": [
    "Communication Skills",
    "Customer Service",
    "Leadership",
    "Financial Literacy",
    "Problem Solving",
    "Workplace Ethics",
  ],

  "Languages & Communication": [
    "Business Communication",
    "Professional Writing",
    "Presentation Skills",
    "Client Interaction",
    "German Language", // added
    "French Language", // added
    "Chinese Language", // added
  ],

  "Agricultural & Environmental Skills": [
    "Urban Farming",
    "Agro-processing",
    "Waste Management",
    "Renewable Energy Basics",
  ],

  "Financial & Digital Commerce": [
    "Forex Trading",
    "Currency Pair Analysis",
    "Synthetic Indices Trading",
    "Cryptocurrency Trading",
    "Technical Analysis",
    "Risk Management",
    "Algorithmic Trading",
    "Digital Payments",
  ],

  "Certification & Career Development": [
    "Trade Certification Preparation",
    "City & Guilds Exam Preps",
    "NABTEB Exam Prep",
    "WAEC VOTEC Preparation",
    "Competency Assessments",
  ],
};

export const allItems = Object.values(skillCategories).flat();