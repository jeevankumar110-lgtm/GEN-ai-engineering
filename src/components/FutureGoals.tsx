import { Target, Compass, Sparkles, ArrowUpRight } from 'lucide-react';
import { FUTURE_LEARNING_AREAS } from '../data/portfolioData';

export function FutureGoals() {
  return (
    <section className="py-20 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2">
            Long-Term Vision
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
            Where I&apos;m Heading
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed p-4 bg-slate-50 border-l-4 border-blue-600 rounded-r-lg font-medium">
            &ldquo;My goal is to build a strong foundation in software development and artificial intelligence and gradually grow into an AI engineer capable of developing useful, practical, and responsible AI-powered applications.&rdquo;
          </p>
        </div>

        {/* Future Learning Areas Cards - clearly labeled as future learning goals */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Future Learning Roadmap
                </h3>
                <p className="text-xs text-slate-400">
                  Planned study milestones (Not claimed as current expertise)
                </p>
              </div>
            </div>

            <span className="text-xs px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono self-start sm:self-auto">
              Future Learning Goals
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            {FUTURE_LEARNING_AREAS.map((area, idx) => (
              <div
                key={area}
                className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4 flex flex-col justify-between hover:border-slate-600 transition-colors"
              >
                <div>
                  <div className="text-xs font-mono text-blue-400 mb-1">
                    0{idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    {area}
                  </h4>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-700/70 text-[11px] text-slate-400">
                  Target Roadmap
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
