// ============================================================
//  SCHOOL WEBSITE — MASTER CONFIGURATION FILE
//  ✅ Change values HERE to update the entire website.
//  ✅ No need to touch any component or page code!
//  ✅ Every section of the website is driven by this file.
// ============================================================

export const siteConfig = {

  // ── 1. SCHOOL IDENTITY ─────────────────────────────────────
  school: {
    name: "Adarsh Public School",
    shortName: "APS",
    tagline: "Est. 1998 · CBSE Affiliated",
    slogan: "Nurturing Excellence Since 1998",
    affiliation: "CBSE Affiliated",
    affiliationNo: "CBSE-AFF-XXXX",        // ← replace with real affiliation number
    founded: "1998",
    location: "Sitamarhi, Bihar, India - 843302",
    admissionYear: "2025-26",
    aboutShort:
      "A pioneer in student-centric pedagogy in the heart of Bihar. We nurture the next generation of leaders through world-class education, holistic development, and strong values.",
    aboutLong:
      "Established in 1998, Adarsh Public School has been a pioneer in student-centric pedagogy. We believe in holistic development, ensuring our students are not just exam-ready, but life-ready.",
    missionStatement:
      "Our mission is to create lifelong learners who are prepared for the future without losing their roots and values.",
    visionStatement:
      "Education is the most powerful weapon which you can use to change the world. We aim to provide that weapon to our youth.",
  },


  // ── 2. CONTACT INFORMATION ─────────────────────────────────
  contact: {
    phone: ["+91 97982 63469", "+91 97982 63469"],  // ← replace
    email: ["info@adarshschool.edu.in", "admissions@adarshschool.edu.in"],
    address: "Sitamarhi, Bihar, India - 843302",
    officeHours: "Mon - Sat: 8:00 AM - 3:00 PM",
    whatsapp: "9798263469",   // ← replace (digits only, no +)
    // Paste a Google Maps embed <iframe src="..."> URL below:
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14309.843644485573!2d85.4851221!3d26.5921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edef3b3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sSitamarhi%2C%20Bihar!5e0!3m2!1sen!2sin!4v1710921000000!5m2!1sen!2sin",
  },


  // ── 3. SOCIAL MEDIA ────────────────────────────────────────
  social: {
    facebook: "https://www.facebook.com/people/Divyanshu-Kumar/pfbid0C76S6C1XBDos1khxMkp8E7pBikLu6ajkXbzpH3qcuA4C6Ana95rYvEp4yETPbZnFl/",   // ← replace with full URL
    twitter: "https://x.com/",
    instagram: "https://instagram.com/hii.divyanshu",
    youtube: "https://youtube.com/",
  },


  // ── 4. HERO SECTION ────────────────────────────────────────
  hero: {
    badge: "Admissions Open 2025–26",
    heading: "Adarsh Public School",
    subheading: "Shape Your Future with Excellence",
    description:
      "A pioneer in student-centric pedagogy in the heart of Bihar. We nurture the next generation of leaders through world-class education, holistic development, and strong values.",
    mediaSrc:
      "/Developer.png",
    cta: {
      primary: "Apply Now",
      secondary: "Explore Campus",
    },
  },


  // ── 5. HERO SLIDER (Home page carousel) ───────────────────
  slides: [
    {
      image: "/school_campus.jpg",
      title: "Nurturing Innovation",
      subtitle: "Preparing students for the challenges of tomorrow.",
    },
    {
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop",
      title: "Excellence in Education",
      subtitle: "Where curiosity meets world-class pedagogy.",
    },
    {
      image: "/school_campus.jpg",
      title: "Holistic Development",
      subtitle: "Building character and intellect side by side.",
    },
  ],


  // ── 6. STATISTICS ──────────────────────────────────────────
  stats: [
    { label: "Students Nurtured", value: "1000+" },
    { label: "Expert Faculty", value: "50+" },
    { label: "Board Results", value: "100%" },
    { label: "Years of Excellence", value: "25+" },
  ],


  // ── 7. FEATURES / FACILITIES ───────────────────────────────
  features: [
    {
      title: "Smart Classrooms",
      desc: "Interactive digital learning environments with modern multimedia tools.",
      color: "bg-blue-500",
    },
    {
      title: "Sports & Athletics",
      desc: "Wide range of indoor and outdoor sports facilities for physical growth.",
      color: "bg-orange-500",
    },
    {
      title: "Modern Science Labs",
      desc: "Fully equipped labs for Physics, Chemistry, and Biology experiments.",
      color: "bg-green-500",
    },
    {
      title: "School Transport",
      desc: "GPS-enabled bus fleet ensuring student safety and punctuality.",
      color: "bg-purple-500",
    },
  ],


  // ── 8. TESTIMONIALS ────────────────────────────────────────
  testimonials: [
    {
      quote: "The individual attention my child receives at Adarsh is remarkable. The teachers are truly dedicated.",
      author: "Mr. Rajesh Kumar",
      role: "Parent",
      img: "https://i.pravatar.cc/150?u=a",
    },
    {
      quote: "The school's focus on both academics and sports helped me get into a top university.",
      author: "Sneha Singh",
      role: "Alumni 2023",
      img: "https://i.pravatar.cc/150?u=b",
    },
    {
      quote: "I love the labs! We get to do so many experiments. Best place to learn science.",
      author: "Aditya Verma",
      role: "Class X Student",
      img: "https://i.pravatar.cc/150?u=c",
    },
  ],


  // ── 9. LEADERSHIP / MANAGEMENT ─────────────────────────────
  leadership: [
    {
      name: "Shri R.P. Singh",
      role: "Chairman",
      msg: "Education is the most powerful weapon which you can use to change the world. We aim to provide that weapon to our youth.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Dr. S. Kumari",
      role: "Principal",
      msg: "Our mission is to create lifelong learners who are prepared for the future without losing their roots and values.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2069&auto=format&fit=crop",
    },
    {
      name: "Divyanshu Kumar",
      role: "Developer",
      msg: "Our mission is to create lifelong learners who are prepared for the future without losing their roots and values.",
      img: "/Developer.png",
    },
  ],


  // ── 10. FACULTY MEMBERS ────────────────────────────────────
  faculty: [
    {
      name: "Dr. S. Kumari",
      role: "Principal",
      subject: "Administration & Leadership",
      edu: "Ph.D. in Education, M.A. English",
      exp: "20+ Years",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2069&auto=format&fit=crop",
    },
    {
      name: "Mr. R. Sharma",
      role: "HOD - Science",
      subject: "Physics",
      edu: "M.Sc. Physics, B.Ed.",
      exp: "15+ Years",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Ms. Anita Singh",
      role: "Senior Teacher",
      subject: "Mathematics",
      edu: "M.Sc. Maths, CTET Qualified",
      exp: "12+ Years",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2088&auto=format&fit=crop",
    },
    {
      name: "Mr. Vivek Verma",
      role: "HOD - IT & Tech",
      subject: "Computer Science",
      edu: "MCA, B.Tech CSE",
      exp: "10+ Years",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Ms. Preeti Jha",
      role: "Languages Head",
      subject: "Hindi / Sanskrit",
      edu: "M.A. Sanskrit, B.Ed.",
      exp: "14+ Years",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2061&auto=format&fit=crop",
    },
    {
      name: "Mr. S. Chatterjee",
      role: "Social Science",
      subject: "History & Geography",
      edu: "M.A. History, M.Phil",
      exp: "18+ Years",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Dr. Sanjay Gupta",
      role: "Chemistry Specialist",
      subject: "Chemistry",
      edu: "Ph.D. Organic Chemistry",
      exp: "11+ Years",
      img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Ms. Kavita Rai",
      role: "Sports Director",
      subject: "Physical Education",
      edu: "M.P.Ed., National Level Athlete",
      exp: "9+ Years",
      img: "https://images.unsplash.com/photo-1594744803329-e58b31de235f?q=80&w=2087&auto=format&fit=crop",
    },

  ],


  // ── 11. CURRICULUM ─────────────────────────────────────────
  curriculum: [
    {
      level: "Pre-Primary (Nursery – UKG)",
      focus: "Play-way method, sensory development, basic literacy & numeracy.",
      subjects: ["English", "Hindi", "Math", "EVS", "Art & Craft", "Music"],
    },
    {
      level: "Primary (Class I – V)",
      focus: "Foundation building, conceptual clarity, language proficiency.",
      subjects: ["English", "Hindi", "Math", "Science", "Social Studies", "Computer", "Sanskrit (from Class V)"],
    },
    {
      level: "Middle & Secondary (VI – X)",
      focus: "Analytical thinking, specialized subjects, skill development.",
      subjects: ["English", "Hindi", "Math", "Science", "Social Science", "Computer Application", "Sanskrit / French"],
    },
  ],
  learningPillars: ["Critical Thinking", "Creative Arts", "Digital Literacy", "Value Education"],


  // ── 12. ACADEMIC CALENDAR ──────────────────────────────────
  academicCalendar: [
    { month: "April", event: "New Academic Session Begins", date: "April 03, 2025" },
    { month: "May", event: "Summer Vacation Starts", date: "May 15, 2025" },
    { month: "June", event: "School Reopens after Summer Break", date: "June 20, 2025" },
    { month: "August", event: "Independence Day Celebration", date: "August 15, 2025" },
    { month: "September", event: "Half-Yearly Examinations", date: "Sept 15 – Sept 28, 2025" },
    { month: "October", event: "Durga Puja & Diwali Holidays", date: "Oct 10 – Oct 25, 2025" },
    { month: "December", event: "Annual Sports Meet", date: "Dec 10 – Dec 12, 2025" },
    { month: "January", event: "Winter Break", date: "Jan 01 – Jan 08, 2026" },
    { month: "March", event: "Annual Examinations", date: "March 05 – March 20, 2026" },
  ],


  // ── 13. RULES & REGULATIONS ────────────────────────────────
  rules: [
    {
      title: "General Conduct",
      rules: [
        "Students must arrive at school at least 10 minutes before the assembly.",
        "School uniform must be clean, tidy, and worn on all working days.",
        "Respect for teachers, staff, and fellow students is mandatory.",
        "Damage to school property will be dealt with strictly.",
      ],
    },
    {
      title: "Attendance Policy",
      rules: [
        "Minimum 75% attendance is required for promotion to the next class.",
        "Leave of absence must be applied for in advance via the school diary.",
        "Medical certificate is required for sick leave exceeding 3 days.",
        "Latecomers will be marked absent for the first period.",
      ],
    },
    {
      title: "Discipline & Safety",
      rules: [
        "Mobile phones and electronic gadgets are strictly prohibited.",
        "Bullying or any form of harassment is a zero-tolerance offense.",
        "Students must stay within the school premises during school hours.",
        "Proper decorum must be maintained in the library and labs.",
      ],
    },
  ],


  // ── 14. EXAMINATION / ASSESSMENT ───────────────────────────
  examination: {
    internalWeightage: "20%",
    annualWeightage: "80%",
    promotionMinMarks: "33% in each subject and in aggregate",
    internalBreakdown: [
      "Periodic Tests — 10 Marks",
      "Notebook Submission — 5 Marks",
      "Subject Enrichment Activities — 5 Marks",
    ],
    note: "Unfair means during examinations will result in immediate disqualification and strict disciplinary action.",
  },


  // ── 15. CLUBS & CO-CURRICULAR ACTIVITIES ───────────────────
  clubs: [
    { name: "Science & Tech Club", desc: "Fostering innovation through robotics, coding, and scientific experiments.", color: "bg-blue-500" },
    { name: "Cultural & Arts Club", desc: "Exploring creativity through music, dance, drama, and fine arts.", color: "bg-purple-500" },
    { name: "Eco Warriors Club", desc: "Promoting environmental awareness and sustainable living practices.", color: "bg-green-500" },
    { name: "Literary & Debating", desc: "Enhancing communication skills, public speaking, and creative writing.", color: "bg-orange-500" },
    { name: "Sports & Athletics", desc: "Developing physical fitness, teamwork, and sportsmanship.", color: "bg-red-500" },
    { name: "Math Wizards", desc: "Making mathematics fun through puzzles, logic, and mental math.", color: "bg-indigo-500" },
  ],


  // ── 16. ADMISSION ELIGIBILITY ──────────────────────────────
  admissionEligibility: [
    { class: "Nursery", age: "3+ Years" },
    { class: "LKG", age: "4+ Years" },
    { class: "UKG", age: "5+ Years" },
    { class: "Class I", age: "6+ Years" },
  ],
  admissionDocuments: [
    "Original Birth Certificate (for verification)",
    "Photocopy of Birth Certificate",
    "Transfer Certificate (TC) from previous school",
    "Previous Class Marksheet",
    "Aadhar Card of Student & Parents",
    "4 Passport size photographs of the student",
    "Blood Group Report",
  ],
  admissionSteps: [
    { step: "01", title: "Registration", desc: "Fill out the online or offline registration form." },
    { step: "02", title: "Interaction", desc: "A brief interaction/interview with the child and parents." },
    { step: "03", title: "Confirmation", desc: "Admission confirmation based on interaction and availability." },
    { step: "04", title: "Fee Payment", desc: "Submit documents and pay the admission fee." },
  ],
  admissionClasses: [
    "Nursery", "LKG", "UKG",
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"
  ],
  registrationFee: "₹800",


  // ── 17. FEE STRUCTURE ──────────────────────────────────────
  fees: [
    { group: "Nursery – UKG", admission: "₹2,000", tuition: "₹1,200", development: "₹1,500" },
    { group: "Class I – V", admission: "₹3,500", tuition: "₹1,500", development: "₹2,000" },
    { group: "Class VI – VIII", admission: "₹4,500", tuition: "₹1,800", development: "₹2,500" },
    { group: "Class IX – X", admission: "₹5,500", tuition: "₹2,200", development: "₹3,000" },
  ],
  feeNotes: [
    "Transport fee is optional and varies by distance.",
    "Fees must be paid by the 10th of every month.",
    "Late fee of ₹50 per week applies after the due date.",
    "10% sibling discount on tuition fees for the second child.",
  ],
  bankDetails: {
    bankName: "ICICI Bank, Sitamarhi Branch",   // ← replace
    accountName: "Adarsh Public School",
    accountNumber: "012345678901",                   // ← replace
    ifsc: "ICIC0001234",                    // ← replace
  },


  // ── 18. CAMPUS INFRASTRUCTURE ──────────────────────────────
  infrastructure: [
    { info: "Total Campus Area", detail: "8,500 Sq. Mtr." },
    { info: "Number of Classrooms", detail: "35 (Size: 500 Sq. Ft. each)" },
    { info: "Number of Laboratories", detail: "5 (Physics, Chemistry, Biology, Composite, Computer)" },
    { info: "Computer Lab Facility", detail: "Yes (2 Labs with 40+ Systems)" },
    { info: "Internet Facility", detail: "Yes (High-speed Broadband)" },
    { info: "Library Facility", detail: "Yes (1,500+ Books, 10+ Periodicals)" },
    { info: "Toilets (Separate for Boys/Girls)", detail: "Yes (10 for Boys, 10 for Girls)" },
    { info: "Drinking Water Facility", detail: "Yes (RO Water System)" },
    { info: "Fire Safety Certificate", detail: "Yes (Valid till 2026)" },
    { info: "Playground Area", detail: "4,000 Sq. Mtr." },
  ],
  campusHighlights: [
    { label: "Lush Green Campus" },
    { label: "High-speed Internet" },
    { label: "Safe & Secure" },
    { label: "Modern Amenities" },
  ],
  totalArea: "8,500+ Sq. Mtr.",


  // ── 19. CAMPUS GALLERY ─────────────────────────────────────
  gallery: [
    { url: "/school_campus.jpg", title: "Main School Building" },
    { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop", title: "Modern Computer Lab" },
    { url: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop", title: "Spacious Playground" },
    { url: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?q=80&w=2070&auto=format&fit=crop", title: "Science Laboratory" },
    { url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop", title: "Well-stocked Library" },
    { url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop", title: "Smart Classroom" },
    { url: "https://images.unsplash.com/photo-1510531704581-5b2870972060?q=80&w=2070&auto=format&fit=crop", title: "Activity Area" },
    { url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop", title: "Assembly Ground" },
  ],


  // ── 20. NAVIGATION LINKS ───────────────────────────────────
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Academics", href: "/academics" },
    { label: "Admissions", href: "/admissions" },
    { label: "Campus", href: "/campus" },
    { label: "Faculty", href: "/faculty" },
    { label: "Contact", href: "/contact" },
  ],


  // ── 21. WEBCAM HERO SETTINGS ───────────────────────────────
  webcamGrid: {
    gridCols: 60,
    gridRows: 40,
    maxElevation: 50,
    motionSensitivity: 0.25,
    elevationSmoothing: 0.2,
    colorMode: "webcam" as "webcam" | "monochrome",
    backgroundColor: "#030303",
    mirror: true,
    gapRatio: 0.05,
    invertColors: false,
    darken: 0.65,
    borderColor: "#ffffff",
    borderOpacity: 0.06,
  },

};
