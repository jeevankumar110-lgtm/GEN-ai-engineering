import { TIMELINE, LEARNING_NOW } from '../data/portfolioData';
import { Compass, BookOpen, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

export function LearningJourney() {
  return (
    <section id="journey" className="py-20 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2">
            Learning Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
            My Journey as a Student & Path to AI Engineering
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            A transparent timeline of how I transitioned from writing basic Python scripts in high school to tackling collegiate hackathons, web development, and exploring generative AI.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-12">
          {TIMELINE.map((item, index) => {
            const isCurrent = item.status === 'Current Focus';
            const isCompleted = item.status === 'Completed';

            return (
              <div key={item.phase} className="relative group">
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full border-4 ${
                    isCurrent
                      ? 'bg-blue-600 border-white ring-4 ring-blue-100'
                      : isCompleted
                      ? 'bg-slate-800 border-white ring-2 ring-slate-200'
                      : 'bg-white border-slate-300'
                  }`}
                />

                <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm transition-all hover:border-slate-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                      {item.phase}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-1.5 border-t border-slate-200/80 pt-3">
                    {item.focusPoints.map((pt) => (
                      <div key={pt} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Study Board: What I'm Learning Today */}
        <div className="mt-16 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
                <Clock className="w-4 h-4" />
                <span>Active Semester Focus</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                What I Am Currently Studying & Experimenting With
              </h3>
            </div>
            <div className="text-xs text-slate-400 font-mono">
              Updated: Spring 2026 Semester
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LEARNING_NOW.map((item) => (
              <div
                key={item.topic}
                className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-semibold text-blue-300 mb-1.5">
                    {item.topic}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-700 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Status</span>
                  <span className="text-emerald-400 font-medium">{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
