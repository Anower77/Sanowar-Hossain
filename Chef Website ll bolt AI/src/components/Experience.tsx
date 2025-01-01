import React from 'react';
import { images } from '../config/images';

interface ExperienceItemProps {
  logo: string;
  companyUrl: string;
  title: string;
  company: string;
  type: string;
  duration: string;
  description: string;
  skills: string[];
}

function ExperienceItem({ logo, companyUrl, title, company, type, duration, description, skills }: ExperienceItemProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 hover:shadow-xl hover:shadow-amber-500/5 transition-all">
      <div className="flex gap-4 items-start mb-4">
        <a href={companyUrl} target="_blank" rel="noopener noreferrer">
          <img src={logo} alt={company} className="w-16 h-16 rounded-lg object-cover" />
        </a>
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-amber-500">{company} · {type}</p>
          <p className="text-gray-400">{duration}</p>
        </div>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="px-3 py-1 bg-gray-700 text-amber-500 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Experience() {
  const experiences = [
    {
      logo: images.rdgh,
      companyUrl: "https://www.linkedin.com/company/renaissance-dhaka-gulshan-hotel/",
      title: "Internship Trainee",
      company: "Renaissance Dhaka Gulshan Hotel",
      type: "Internship",
      duration: "Nov 2024 - Present · 2 mos",
      description: "Culinary Department - Trainee Chef",
      skills: ["Food Industry", "Cooking", "Kitchen Management", "Food Safety", "Team Collaboration"]
    },
    {
      logo: images.nhtt,
      companyUrl: "https://www.linkedin.com/company/nhtti/",
      title: "Professional Chef Course",
      company: "National Hotel & Tourism Training Institute (NHTTI)",
      type: "Apprenticeship",
      duration: "Jan 2024 - Dec 2024 · 1 yr",
      description: "I am a Student of National Hotel & Tourism Training Institute (Bangladesh Parjatan Corporation) in the department of Professional Chef Course (Culinary). We make many cuisines and maintain Personal hygiene.",
      skills: ["Culinary Arts", "Food Industry", "Food Preparation", "Menu Planning", "Kitchen Operations"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Professional <span className="text-amber-500">Experience</span>
        </h2>
        <div className="grid gap-8 max-w-3xl mx-auto">
          {experiences.map((exp) => (
            <ExperienceItem key={exp.title} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}