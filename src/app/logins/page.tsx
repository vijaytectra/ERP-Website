"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Shield,
  UserCog,
  GraduationCap,
  User,
  Users,
  School,
  BookOpen,
  Building2,
  Baby,
  ArrowRight,
} from "lucide-react";

interface LoginLink {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

const loginLinks: {
  category: string;
  description: string;
  links: LoginLink[];
}[] = [
  {
    category: "Super Admin",
    description: "Access the main administrative dashboard",
    links: [
      {
        title: "Super Admin",
        url: "https://theedusuite.com/superAdmin",
        icon: Shield,
        accentColor: "from-purple-500 to-indigo-600",
      },
    ],
  },
  {
    category: "Admin Login",
    description: "Administrative access for different institutions",
    links: [
      {
        title: "Pre School Admin",
        url: "https://theedusuite.com/preSchoolAdmin/",
        icon: Baby,
        accentColor: "from-pink-500 to-rose-500",
      },
      {
        title: "School Admin",
        url: "https://theedusuite.com/SchoolAdmin/",
        icon: School,
        accentColor: "from-blue-500 to-cyan-500",
      },
      {
        title: "College Admin",
        url: "https://theedusuite.com/CollegeAdmin/",
        icon: Building2,
        accentColor: "from-indigo-500 to-purple-500",
      },
    ],
  },
  {
    category: "Teacher Login",
    description: "Access for teaching staff across institutions",
    links: [
      {
        title: "Pre School Teacher",
        url: "https://theedusuite.com/preSchoolTeacher/",
        icon: Baby,
        accentColor: "from-amber-500 to-orange-500",
      },
      {
        title: "School Teacher",
        url: "https://theedusuite.com/SchoolTeacher/",
        icon: BookOpen,
        accentColor: "from-emerald-500 to-teal-500",
      },
      {
        title: "College Teacher",
        url: "https://theedusuite.com/CollegeAdmin/",
        icon: GraduationCap,
        accentColor: "from-violet-500 to-purple-500",
      },
    ],
  },
  {
    category: "Student Login",
    description: "Student portal access for educational institutions",
    links: [
      {
        title: "School Student",
        url: "https://theedusuite.com/SchoolStudent/",
        icon: School,
        accentColor: "from-blue-500 to-indigo-500",
      },
      {
        title: "College Student",
        url: "https://theedusuite.com/collegeStudent/",
        icon: GraduationCap,
        accentColor: "from-cyan-500 to-blue-500",
      },
    ],
  },
  {
    category: "Parent Login",
    description: "Parent portal for monitoring student progress",
    links: [
      {
        title: "Pre School Parent",
        url: "https://theedusuite.com/PreSchoolParent/",
        icon: Users,
        accentColor: "from-rose-500 to-pink-500",
      },
      {
        title: "School Parent",
        url: "https://theedusuite.com/schoolParent/",
        icon: User,
        accentColor: "from-green-500 to-emerald-500",
      },
      {
        title: "College Parent",
        url: "https://theedusuite.com/collegeParent/",
        icon: UserCog,
        accentColor: "from-slate-500 to-gray-600",
      },
    ],
  },
];

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Login Portal
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Choose your role to access the appropriate login portal
          </p>
        </motion.div>

        {/* Login Categories */}
        <div className="space-y-16">
          {loginLinks.map((category, categoryIndex) => (
            <motion.section
              key={category.category}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="border-b border-gray-200 pb-4">
                <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                  {category.category}
                </h2>
                <p className="text-sm text-gray-500">{category.description}</p>
              </div>

              {/* Login Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.links.map((link, linkIndex) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.a
                      key={link.title}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative bg-white border border-gray-200  p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-200"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + linkIndex * 0.05,
                      }}
                      whileHover={{ y: -2 }}
                    >
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div
                          className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${link.accentColor} flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                            {link.title}
                          </h3>
                          <div className="flex items-center gap-1.5 text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                            <span>Access portal</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      </div>

                      {/* Hover accent line */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${link.accentColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-b-xl`}
                      />
                    </motion.a>
                  );
                })}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-sm text-gray-400">
            All login portals open in a new tab
          </p>
        </motion.div>
      </div>
    </div>
  );
}
