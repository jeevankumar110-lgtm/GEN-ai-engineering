import { CheckCircle2, BookOpen } from 'lucide-react';
import { CURRENT_FOCUS_ITEMS } from '../data/portfolioData';

export function CurrentFocus() {
  return (
    <section className="py-16 bg-slate-50 text-slate-800 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          {/* Section Header with subtle "Currently Learning" indicator */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-1">
                Current Focus
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                What I&apos;m Currently Learning
              </h2>
            </div>

            {/* Subtle "Currently Learning" indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-800 self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Currently Learning</span>
            </div>
          </div>

          {/* Grid of items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-6">
            {CURRENT_FOCUS_ITEMS.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
