import { ChartSpline, FileChartColumnIncreasing, Lock, ShieldCheck, Users } from "lucide-react";

export const navLinks = [
  {
    id: 1,
    label: "Home",
    href: "#",
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
  {
    id: 6,
    label: "Integrations",
    href: "#integrations",
  },
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
  },
  {
    id: 2,
    title: "Faster academic outcomes",
    description:
      "Analytics, heatmaps, and AI recommendations surface weak areas early and drive measurable student performance improvement.",
    icon: ChartSpline ,
  },
  {
    id: 3,
    title: "Audit‑ready compliance",
    description:
      "Dynamic criteria, version control, OCR evidence, immutable logs, and one‑click SSR/SAR/AQAR exports slash accreditation effort.",
    icon: FileChartColumnIncreasing ,
  },
  {
    id: 4,
    title: "Parent‑first engagement",
    description:
      "Real‑time alerts, meeting scheduler, calendar sync, and a rechargeable wallet make every interaction simple and delightful.",
    icon: Users ,
  },
  {
    id: 5,
    title: "Security at the core",
    description:
      "Role‑based access, field‑level encryption, 2FA, rate‑limited logins, inactivity logout, daily geo‑redundant backups.",
    icon: Lock ,
  },
];
