import {
  Baby,
  BookOpenCheck,
  CalendarCheck2,
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  ChartSpline,
  CircleCheckBig,
  FileChartColumnIncreasing,
  GraduationCap,
  IdCard,
  Lock,
  MessageSquare,
  PhoneOutgoing,
  School,
  ShieldCheck,
  University,
  Users,
  Wallet,
  Workflow,
} from "lucide-react";
import ben1 from "../../public/ben1.svg";
import ben2 from "../../public/ben2.svg";
import ben3 from "../../public/ben3.svg";
import ben4 from "../../public/ben4.svg";
import ben5 from "../../public/ben5.svg";
import ben6 from "../../public/ben6.svg";
import f1 from "../../public/f1.svg";
import f2 from "../../public/f2.svg";
import f3 from "../../public/f3.svg";
import f4 from "../../public/f4.svg";
import f5 from "../../public/f5.svg";
import f6 from "../../public/f6.svg";
import f7 from "../../public/f7.svg";
import f8 from "../../public/f8.svg";

export const navLinks = [
  {
    id: 1,
    label: "Home",
    href: "#home",
  },
  {
    id: 2,
    label: "Why Choose",
    href: "#why-choose",
  },
  {
    id: 3,
    label: "Benefits",
    href: "#benefits",
  },
  {
    id: 4,
    label: "Features",
    href: "#features",
  },

  {
    id: 5,
    label: "Use Cases",
    href: "#use-cases",
  },
  //   {
  //     id: 6,
  //     label: "Integrations",
  //     href: "#integrations",
  //   },
  {
    id: 7,
    label: "Pricing",
    href: "#pricing",
  },
];

export const whyUsValues = [
  {
    id: 1,
    title: "Operational excellence",
    description:
      "Replace fragmented tools with one platform that standardizes processes, reduces workload, and improves turnaround across departments.",
    icon: ShieldCheck,
    iconbg: "#968BFF",
    iconColor: "#ffffff",
  },
  {
    id: 2,
    title: "Faster academic outcomes",
    description:
      "Analytics, heatmaps, and AI recommendations surface weak areas early and drive measurable student performance improvement.",
    icon: ChartSpline,
    iconbg: "#FFB896",
    iconColor: "#000000",
  },
  {
    id: 3,
    title: "Audit‑ready compliance",
    description:
      "Dynamic criteria, version control, OCR evidence, immutable logs, and one‑click SSR/SAR/AQAR exports slash accreditation effort.",
    icon: FileChartColumnIncreasing,
    iconbg: "#968BFF",
    iconColor: "#ffffff",
  },
  {
    id: 4,
    title: "Parent‑first engagement",
    description:
      "Real‑time alerts, meeting scheduler, calendar sync, and a rechargeable wallet make every interaction simple and delightful.",
    icon: Users,
    iconbg: "#FFB896",
    iconColor: "#000000",
  },
  {
    id: 5,
    title: "Security at the core",
    description:
      "Role‑based access, field‑level encryption, 2FA, rate‑limited logins, inactivity logout, daily geo‑redundant backups.",
    icon: Lock,
    iconbg: "#968BFF",
    iconColor: "#ffffff",
  },
];

export const benefitsValues = [
  {
    id: 1,
    title: "End-to-End Automation",
    description:
      "Digitize admissions, fees, attendance, exams, timetables, communication, and compliance to reduce manual work and errors.",
    icon: Workflow,
    imageUrl: ben1,
  },
  {
    id: 2,
    title: "Faster Decisions with Analytics",
    description:
      "Performance dashboards, predictive insights, and heatmaps highlight trends and risks across departments and criteria.",
    icon: ChartNoAxesColumnIncreasing,
    imageUrl: ben2,
  },
  {
    id: 3,
    title: "Real-Time Parent Engagement",
    description:
      "Instant alerts for attendance, results, fees, events, and meetings via SMS, email, app, and WhatsApp.",
    icon: MessageSquare,
    imageUrl: ben3,
  },
  {
    id: 4,
    title: "Compliance Made Easy",
    description:
      "Auto-generate SSR/SAR/AQAR, version control, immutable audit trails, and board-specific exports cut report time from months to days.",
    icon: FileChartColumnIncreasing,
    imageUrl: ben4,
  },
  {
    id: 5,
    title: "Bank-Grade Security",
    description:
      "RBAC, field-level encryption (Aadhaar, bank info), 2FA, backups with geo-redundancy, and lock mode before audits.",
    icon: ShieldCheck,
    imageUrl: ben5,
  },
  {
    id: 6,
    title: "Flexible Payments",
    description:
      "Online gateways, offline modes, auto-receipts, late-fee rules, and student wallet for canteen, events, and fines.",
    icon: IdCard,
    imageUrl: ben6,
  },
];

export const features1 = [
  {
    id: 1,
    title: "Admissions & Scholarships",
    description:
      "Digital applications with dynamic fields, document upload, alumni/legacy detection, draft mode, and automated notifications.",
    icon: GraduationCap,
    imageUrl: f1,
    iconbg: "#FFB896",
    iconColor: "#000000",
  },
  {
    id: 2,
    title: "Student & Staff 360",
    description:
      "Centralized profiles, lifecycle tracking, secure documents, leave management, and audit trails across HR and academics.",
    icon: Users,
    imageUrl: f2,
    iconbg: "#968BFF",
    iconColor: "#ffffff",
  },

  {
    id: 3,
    title: "Attendance & Leave",
    description:
      "App-based attendance, biometric/RFID-ready, CSV/Excel imports, pre-approved leave handling, and real-time absentee alerts.",
    icon: CalendarCheck2,
    imageUrl: f3,
    iconbg: "#FFB896",
    iconColor: "#000000",
  },
  {
    id: 4,
    title: "Fees & Wallet",
    description:
      "Automated invoices, online/offline payments, late-fee logic, Tally sync, tax-compliant receipts, and a rechargeable student wallet for on-campus spends.",
    icon: Wallet,
    imageUrl: f4,
    iconbg: "#968BFF",
    iconColor: "#ffffff",
  },
  {
    id: 5,
    title: "Academics & Exams",
    description:
      "Marks entry, class and subject analytics, teacher-wise trends, class-average comparisons, approvals before publish, and AI-aided answer-sheet evaluation with feedback.",
    icon: BookOpenCheck,
    imageUrl: f5,
    iconbg: "#FFB896",
    iconColor: "#000000",
  },
  {
    id: 6,
    title: "Timetable & Substitution",
    description:
      "AI-assisted generation, drag-and-drop edits, conflict detection, teacher availability, period duration rules, and instant substitution alerts to teachers and students.",
    icon: CalendarDays,
    imageUrl: f6,
    iconbg: "#968BFF",
    iconColor: "#ffffff",
  },
  {
    id: 7,
    title: "Communication Hub",
    description:
      "Personalized notification preferences for parents, calendar sync for exams and PTMs, automated reminders, multi-channel messaging (SMS, email, push, WhatsApp).",
    icon: PhoneOutgoing,
    imageUrl: f7,
    iconbg: "#FFB896",
    iconColor: "#000000",
  },
  {
    id: 8,
    title: "Accreditation & Compliance",
    description:
      "Multi-board (NAAC/NBA/BCI/etc.) criteria management, AI score projections, milestone tracker with calendar sync, OCR search, versioning, approvals, and lock mode.",
    icon: CircleCheckBig,
    imageUrl: f8,
    iconbg: "#968BFF",
    iconColor: "#ffffff",
  },
  // {
  //   id: 9,
  //   title: "Security & Backups",
  //   description:
  //     "RBAC, field encryption, 2FA for admins, session timeouts, failed-attempt lockouts, daily backups, geo-redundant storage, and restore verification.",
  //   icon: ShieldCheck,
  //   imageUrl: f8,
  //   iconbg: "#FFB896",
  //   iconColor: "#000000",
  // },
];

export const features2 = [];

export const useCasesValues = [
  {
    id: 1,
    title: "Preschool",
    description:
      "Paperless admissions, medical and guardian info, attendance alerts, fee reminders, and simplified class capacity checks.",
    icon: Baby,
    bgColor: "#E6E8FF",
  },
  {
    id: 2,
    title: "K–12 Schools",
    description:
      "Homework and exam notifications, parent calendar sync, leave approvals, student wallet for canteen/library, and class-split when capacity maxes out.",
    icon: School,
    bgColor: "#FFD8C6",
  },
  {
    id: 3,
    title: "Colleges & Universities",
    description:
      "Program-wise analytics, research evidence repository, accreditation workflows, peer-review simulations, and placements/alumni tracking.",
    icon: University,
    bgColor: "#C2F6FF",
  },
];
