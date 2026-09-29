import { Users, Lightbulb, Compass, ArrowRight, Calendar } from 'lucide-react';
import { HACKATHON_ENTRIES } from '../data/portfolioData';

export function Hackathons() {
  return (
    <section id="hackathons" className="py-20 bg-slate-50 text-slate-800 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2">
            Hackathons &amp; Ideathons
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
            Collaborative Problem Solving &amp; Ideation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal p-4 bg-white rounded-xl border border-slate-200">
            &ldquo;I enjoy participating in hackathons and ideathons because they give me an opportunity to explore real-world problems, develop ideas, collaborate with others, and learn how technology can create practical solutions.&rdquo;
          </p>
        </div>

        {/* Hackathon Cards Grid with Placeholders */}
        <div className="space-y-6">
          {HACKATHON_ENTRIES.map((entry) => (
            <div
              key={entry.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-slate-300 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {entry.eventName}
                  </h3>
                  <div className="text-xs text-blue-600 font-semibold mt-0.5">
                    Role: <span className="text-slate-700 font-normal">{entry.role}</span>
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1 rounded-md self-start sm:self-auto">
                  Student Participant
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5 text-xs sm:text-sm">
                <div className="space-y-1.5 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
                    <Lightbulb className="w-3.5 h-3.5 text-blue-600" />
                    What I explored:
                  </div>
                  <p className="text-slate-600 leading-relaxed font-mono text-xs">
                    {entry.whatIExplored}
                  </p>
                </div>

                <div className="space-y-1.5 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
                    <Compass className="w-3.5 h-3.5 text-blue-600" />
                    What I learned:
                  </div>
                  <p className="text-slate-600 leading-relaxed font-mono text-xs">
                    {entry.whatILearned}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
