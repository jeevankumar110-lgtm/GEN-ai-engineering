import { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Terminal, Code, Sparkles, Wrench, Brain, Info } from 'lucide-react';

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categoryIcons: Record<string, typeof Terminal> = {
    python: Terminal,
    web: Code,
    genai: Sparkles,
    tools: Wrench,
    'problem-solving': Brain,
  };

  const filteredCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-slate-50 text-slate-800 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2">
            Technical Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
            Beginner-Level Skills & Active Learning Repertoire
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Presented transparently as a first-year undergraduate. I focus on developing practical software skills through constant coding, small-scale builds, and trial and error.
          </p>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/70 rounded-xl mb-10 max-w-fit">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              selectedCategory === 'all'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Skills ({SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                selectedCategory === cat.id
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Terminal;
            return (
              <div
                key={category.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{category.title}</h3>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills List adhering to zero-pill discipline */}
                  <div className="space-y-4 border-t border-slate-100 pt-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-800">{skill.name}</span>
                          {/* Unboxed metadata separator style */}
                          <span className="text-[11px] text-blue-600 font-medium">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-normal">
                          {skill.context}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Honest student note */}
        <div className="mt-10 p-4 bg-blue-50/60 border border-blue-100 rounded-xl flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-700 leading-relaxed">
            <span className="font-semibold text-slate-900">A note on proficiency:</span> Rather than claiming artificial mastery percentages (e.g. 95% Python), I represent my skills based on real project applications, daily code writing, and university lab work. I am eager to expand into deeper mathematics, machine learning frameworks, and scalable architectures.
          </p>
        </div>
      </div>
    </section>
  );
}
