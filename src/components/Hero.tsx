import { ArrowRight, Mail, Terminal, Sparkles, Code2, User, Image as ImageIcon } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-slate-900 text-white">
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning & Bio */}
          <div className="lg:col-span-7 space-y-6">
            {/* Honest student status */}
            <div className="flex items-center gap-2 text-xs font-medium text-blue-400">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>1st-Year B.Tech Student</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>College Fresher</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Learning &amp; Building</span>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-semibold tracking-wider text-slate-400 uppercase">
                {PERSONAL_INFO.name}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-tight">
                {PERSONAL_INFO.headline}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-blue-300/90 pt-1">
                {PERSONAL_INFO.tagline}
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.intro}
            </p>

            {/* Quick Core Focus Highlights */}
            <div className="pt-2 pb-1">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Code2 className="w-3.5 h-3.5 text-blue-400" />
                  Python &amp; Web Development
                </span>
                <span aria-hidden="true" className="text-slate-700">·</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  Generative AI Exploration
                </span>
                <span aria-hidden="true" className="text-slate-700">·</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  Problem Solving Fundamentals
                </span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all shadow-sm active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                View My Projects
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-800 hover:text-white border border-slate-700 rounded-lg transition-all active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                Connect With Me
              </button>
            </div>
          </div>

          {/* Right Column: Clearly Marked Profile Photo Placeholder & Learner Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl bg-slate-800/60 border border-slate-700/80 p-5 shadow-xl backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
                {/* Profile Photo Placeholder - explicitly labeled as requested */}
                <div className="relative shrink-0 text-center">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-slate-900 border-2 border-dashed border-slate-600 flex flex-col items-center justify-center p-2 text-slate-400 hover:border-blue-400 transition-colors">
                    <User className="w-8 h-8 text-slate-500 mb-1" />
                    <span className="text-[10px] font-mono text-slate-400 text-center leading-tight">
                      profile-photo.jpg
                    </span>
                    <span className="text-[9px] text-blue-400 mt-0.5 font-medium">
                      [Placeholder]
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1 font-mono">
                    Personal Photo Slot
                  </div>
                </div>

                {/* Identity & Academic Meta */}
                <div className="space-y-1.5 text-center sm:text-left flex-1">
                  <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold">
                    Student Profile
                  </div>
                  <h2 className="text-xl font-bold text-white">
                    {PERSONAL_INFO.name}
                  </h2>
                  <div className="text-xs text-slate-300 font-medium">
                    1st-Year B.Tech Student
                  </div>
                  <div className="text-xs text-slate-400">
                    Aspiring AI Engineer
                  </div>
                  <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-700/60 leading-relaxed">
                    Learning through hands-on code, hackathons, and steady daily practice.
                  </p>
                </div>
              </div>

              {/* Code Snippet: Authentic Learner Philosophy */}
              <div className="mt-5 pt-4 border-t border-slate-700/70">
                <div className="flex items-center justify-between pb-2 text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    <span>student_journey.py</span>
                  </div>
                  <span className="text-slate-500">Python 3</span>
                </div>
                <div className="p-3 bg-slate-950/80 rounded-lg font-mono text-xs text-slate-300 leading-relaxed border border-slate-800">
                  <p>
                    <span className="text-purple-400">student</span> = &#123;
                  </p>
                  <p className="pl-4 text-slate-400">
                    <span className="text-blue-300">&quot;name&quot;</span>: <span className="text-emerald-300">&quot;Jeevan Kumar&quot;</span>,
                  </p>
                  <p className="pl-4 text-slate-400">
                    <span className="text-blue-300">&quot;status&quot;</span>: <span className="text-emerald-300">&quot;1st-Year B.Tech Student&quot;</span>,
                  </p>
                  <p className="pl-4 text-slate-400">
                    <span className="text-blue-300">&quot;interests&quot;</span>: [<span className="text-emerald-300">&quot;Python&quot;</span>, <span className="text-emerald-300">&quot;Web&quot;</span>, <span className="text-emerald-300">&quot;Generative AI&quot;</span>],
                  </p>
                  <p className="pl-4 text-slate-400">
                    <span className="text-blue-300">&quot;goal&quot;</span>: <span className="text-emerald-300">&quot;Career in AI Engineering&quot;</span>
                  </p>
                  <p>&#125;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
