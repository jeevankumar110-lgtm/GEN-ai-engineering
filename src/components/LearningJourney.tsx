import { JOURNEY_STAGES } from '../data/portfolioData';
import { ArrowRight, BookOpen, Clock, Target } from 'lucide-react';

export function LearningJourney() {
  return (
    <section id="journey" className="py-20 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2">
            Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
            Learning Journey
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            A step-by-step view of my progression from foundational programming to web technologies and exploring generative AI.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
          {JOURNEY_STAGES.map((stage, idx) => {
            const isFuture = stage.status === 'Future Goal';

            return (
              <div key={stage.stageNumber} className="relative group">
                {/* Timeline node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full border-4 ${
                    isFuture
                      ? 'bg-slate-300 border-white ring-2 ring-slate-100'
                      : 'bg-blue-600 border-white ring-4 ring-blue-100'
                  }`}
                />

                <div
                  className={`rounded-2xl p-6 border transition-all ${
                    isFuture
                      ? 'bg-slate-50/80 border-slate-200 text-slate-700'
                      : 'bg-white border-slate-200 shadow-sm hover:border-slate-300'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                      {stage.stageNumber}
                    </span>
                    <span
                      className={`text-[11px] px-2 py-0.5 rounded font-medium border ${
                        isFuture
                          ? 'bg-slate-100 text-slate-600 border-slate-200'
                          : 'bg-blue-50 text-blue-700 border-blue-200'
                      }`}
                    >
                      {stage.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                    {stage.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
