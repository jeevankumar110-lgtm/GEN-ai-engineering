import { Terminal, Code, Sparkles, FolderGit2, Info } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export function Skills() {
  const categoryIcons: Record<string, typeof Terminal> = {
    programming: Terminal,
    webDevelopment: Code,
    ai: Sparkles,
    other: FolderGit2,
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Learning':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Exploring':
        return 'text-indigo-600 bg-indigo-50 border-indigo-200';
      case 'Beginner':
      default:
        return 'text-slate-600 bg-slate-100 border-slate-200';
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 text-slate-800 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2">
            Skills &amp; Technologies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
            Technical Areas &amp; Current Familiarity
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Organized honestly by current stage of learning. No fabricated percentages or seniority claims—just a transparent look at what I am building with and studying.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(SKILL_CATEGORIES).map(([key, category]) => {
            const Icon = categoryIcons[key] || Terminal;
            return (
              <div
                key={key}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {category.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-center justify-between text-xs py-1"
                      >
                        <span className="font-semibold text-slate-800">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[11px] px-2 py-0.5 rounded font-medium border ${getStatusColor(
                            skill.status
                          )}`}
                        >
                          {skill.status}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] text-slate-400">
                  {category.skills.length} item{category.skills.length > 1 ? 's' : ''} in practice
                </div>
              </div>
            );
          })}
        </div>

        {/* Honest Note */}
        <div className="mt-10 p-4 bg-white border border-slate-200 rounded-xl flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-600 leading-relaxed">
            <span className="font-semibold text-slate-900">Proficiency Note:</span> Rather than arbitrary percentage ratings, skills are labeled as <span className="font-medium text-slate-800">Beginner</span>, <span className="font-medium text-blue-600">Learning</span>, or <span className="font-medium text-indigo-600">Exploring</span> to reflect genuine academic progress during my first year.
          </p>
        </div>
      </div>
    </section>
  );
}
