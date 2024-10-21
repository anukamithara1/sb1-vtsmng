"use client"

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const skills = [
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'Node.js', level: 70 },
  { name: 'TypeScript', level: 65 },
  { name: 'HTML/CSS', level: 85 },
  { name: 'Python', level: 60 },
  { name: 'SQL', level: 70 },
  { name: 'Git', level: 75 },
  { name: 'RESTful APIs', level: 80 },
  { name: 'Docker', level: 55 },
];

const Skills = () => {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <TooltipProvider key={skill.name}>
              <Tooltip>
                <TooltipTrigger>
                  <Badge
                    variant="secondary"
                    className="text-lg py-2 px-4 cursor-pointer transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                    onClick={() => setExpandedSkill(skill.name === expandedSkill ? null : skill.name)}
                  >
                    {skill.name}
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Proficiency: {skill.level}%</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
        {expandedSkill && (
          <div className="mt-8 p-4 bg-secondary/20 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{expandedSkill}</h3>
            <div className="w-full bg-secondary/30 rounded-full h-2.5">
              <div
                className="bg-primary h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${skills.find(s => s.name === expandedSkill)?.level}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;