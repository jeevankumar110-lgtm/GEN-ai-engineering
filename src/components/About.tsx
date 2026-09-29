import { GraduationCap, Compass, Layers, CheckCircle2, Lightbulb, Users, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function About() {
  const learningPillars = [
    {
      icon: Code,
      title: 'Foundation in Python & Logic',
      description:
        'Building strong problem-solving fundamentals through core data structures, algorithms, and modular object-oriented programming.',
    },
    {
      icon: Layers,
      title: 'Hands-On Project Philosophy',
      description:
        'Learning by writing code and testing ideas instead of passively watching tutorials. Every concept learned gets applied in a mini-build.',
    },
    {
      icon: Lightbulb,
      title: 'Generative AI Curiosity',
      description:
        'Experimenting with LLMs, prompt structuring, and the Google Gemini API to understand how AI can augment real-world student workflows.',
    },
    {
      icon: Users,
      title: 'Hackathons & Team Sprints',
      description:
        'Participating in campus hackathons and ideathons to test ideas under pressure, collaborate across disciplines, and pitch functional MVPs.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
            Building My Technical Foundations as a 1st-Year Engineering Student
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            I believe that the best way to master software engineering and artificial intelligence is through curiosity, honest reflection, and continuous building.
          </p>
        </div>

        {/* Narrative & Academic Facts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed text-base">
            <p className="p-4 bg-slate-50 border-l-4 border-blue-600 rounded-r-lg text-slate-800 font-medium">
              &ldquo;I’m currently pursuing my B.Tech and building my foundation in software development and artificial intelligence. My current learning journey focuses on Python, web development, and Generative AI.&rdquo;
            </p>

            <p>
              &ldquo;I enjoy learning by building projects rather than only studying theory. My projects have helped me practice programming logic, application development, and problem solving.&rdquo;
            </p>

            <p>
              &ldquo;I also participate in hackathons and ideathons, where I get opportunities to explore ideas, collaborate in fast-paced teams, and develop practical problem-solving skills under real-world constraints.&rdquo;
            </p>

            <p className="text-slate-600 text-sm">
              As a college fresher, I recognize how vast the computing landscape is. Rather than pretending to be an expert, I approach every new technology with humility and enthusiasm—whether it is debugging a Python algorithm, building a responsive interface with React, or learning how to format prompts for the Google Gemini API.
            </p>

            <div className="pt-4 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-500 border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Honest Beginner Mindset</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Active Daily Practice</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Open to Mentorship & Collaboration</span>
              </div>
            </div>
          </div>

          {/* Academic Snapshot & Methodology Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-blue-100 text-blue-700">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Academic Background</h3>
                  <p className="text-xs text-slate-500">Undergraduate Engineering</p>
                </div>
              </div>

              <div className="divide-y divide-slate-200 text-xs">
                <div className="py-2.5 flex justify-between gap-4">
                  <span className="text-slate-500">Degree</span>
                  <span className="font-semibold text-slate-800 text-right">{PERSONAL_INFO.education.degree}</span>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <span className="text-slate-500">Current Standing</span>
                  <span className="font-semibold text-slate-800 text-right">{PERSONAL_INFO.education.year}</span>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <span className="text-slate-500">Department</span>
                  <span className="font-semibold text-slate-800 text-right">{PERSONAL_INFO.education.major}</span>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <span className="text-slate-500">Primary Languages</span>
                  <span className="font-semibold text-slate-800 text-right">Python, JavaScript / TypeScript</span>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <span className="text-slate-500">Long-term Goal</span>
                  <span className="font-semibold text-blue-600 text-right">Full-Stack AI Engineering</span>
                </div>
              </div>

              <div className="pt-2">
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  My Approach to Learning
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 text-xs text-slate-600 leading-relaxed">
                  <span className="font-semibold text-slate-800">80% Building & Experimenting</span> — writing code, breaking things, reading errors, building mini-apps.
                  <br />
                  <span className="font-semibold text-slate-800">20% Conceptual Study</span> — understanding time complexities, math behind algorithms, and best practices.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16 pt-12 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-5 rounded-xl bg-slate-50/70 border border-slate-200 hover:border-slate-300 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">{pillar.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
