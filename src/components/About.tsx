import { Sparkles, Code2, Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { CURRENTLY_EXPLORING } from '../data/portfolioData';

export function About() {
  return (
    <section id="about" className="py-20 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
            Building My Foundation as a 1st-Year B.Tech Student
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            I am a student who is learning, building, experimenting, and preparing for a career in AI engineering.
          </p>
        </div>

        {/* Narrative & "Currently Exploring" Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Text Content */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed text-base">
            <div className="p-4 bg-slate-50 border-l-4 border-blue-600 rounded-r-lg text-slate-800">
              <p className="font-medium">
                &ldquo;I’m currently pursuing my B.Tech and building my foundation in software development and artificial intelligence. My current learning journey focuses on Python, web development, and Generative AI.&rdquo;
              </p>
            </div>

            <p>
              &ldquo;I enjoy learning by building projects rather than only studying theory. My projects have helped me practice programming logic, application development, and problem solving.&rdquo;
            </p>

            <p>
              &ldquo;I also participate in hackathons and ideathons, where I get opportunities to explore ideas, collaborate, and understand how technology can be used to solve real-world problems.&rdquo;
            </p>

            <p className="text-slate-600 text-sm">
              My approach is centered on consistent hands-on execution. Whether exploring conditional structures in Python, styling clean web layouts, or testing prompt formats, I value genuine understanding and iterative growth.
            </p>

            <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Undergraduate Fresher
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Hands-on Project Learner
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Hackathon Enthusiast
              </span>
            </div>
          </div>

          {/* Small Visual Card: Currently Exploring */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
                <div className="p-2 rounded-lg bg-blue-100 text-blue-700">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Currently Exploring
                  </h3>
                  <p className="text-xs text-slate-500">
                    Primary focus areas in my 1st year
                  </p>
                </div>
              </div>

              <ul className="space-y-2.5 pt-2">
                {CURRENTLY_EXPLORING.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200/80 text-xs text-slate-800 font-medium hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      <span>{topic}</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">
                      Active
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 text-[11px] text-slate-500 bg-blue-50/50 p-3 rounded-lg border border-blue-100/60 leading-relaxed">
                Exploring foundational computer science alongside modern tools to bridge practical code with AI concepts.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
