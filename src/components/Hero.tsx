import { ArrowRight, Mail, Terminal, Sparkles, Code2, BookOpen } from 'lucide-react';
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
            {/* Honest student status - unboxed clean metadata */}
            <div className="flex items-center gap-2 text-xs font-medium text-blue-400">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>1st-Year B.Tech Student</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Class of 2029</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Active Learner</span>
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
              {PERSONAL_INFO.summary}
            </p>

            {/* Quick Core Focus Highlights */}
            <div className="pt-2 pb-1">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Code2 className="w-3.5 h-3.5 text-blue-400" />
                  Python & Web
                </span>
                <span aria-hidden="true" className="text-slate-700">·</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  Generative AI Exploration
                </span>
                <span aria-hidden="true" className="text-slate-700">·</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                  Hackathons & Ideathons
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

          {/* Right Column: Student Portrait & Interactive Terminal Card */}
          <div className="lg:col-span-5 space-y-4">
            {/* Visual Card Container */}
            <div className="relative rounded-2xl bg-slate-800/60 border border-slate-700/80 p-5 shadow-xl backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
                {/* Profile Portrait */}
                <div className="relative shrink-0">
                  <img
                    src={PERSONAL_INFO.portraitImage}
                    alt="Jeevan Kumar - 1st Year B.Tech Student & Aspiring AI Engineer"
                    className="w-28 h-28 sm:w-32 sm:sm-32 rounded-xl object-cover border border-slate-700 shadow-md"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                  <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" title="Actively Learning" />
                  </div>
                </div>

                {/* Identity & Academic Meta */}
                <div className="space-y-1.5 text-center sm:text-left">
                  <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold">
                    Student Profile
                  </div>
                  <h2 className="text-lg font-bold text-white">
                    {PERSONAL_INFO.name}
                  </h2>
                  <div className="text-xs text-slate-300">
                    {PERSONAL_INFO.education.degree} · Year 1
                  </div>
                  <div className="text-xs text-slate-400">
                    {PERSONAL_INFO.education.major}
                  </div>
                  <div className="pt-2 flex items-center justify-center sm:justify-start gap-3 text-xs text-slate-400">
                    <span>5+ Mini Projects</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span>3 Hackathons</span>
                  </div>
                </div>
              </div>

              {/* Code Snippet: Genuine Learner Philosophy */}
              <div className="mt-5 pt-4 border-t border-slate-700/70">
                <div className="flex items-center justify-between pb-2 text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    <span>student_journey.py</span>
                  </div>
                  <span className="text-slate-500">Python 3.12</span>
                </div>
                <div className="p-3 bg-slate-950/80 rounded-lg font-mono text-xs text-slate-300 leading-relaxed border border-slate-800">
                  <p>
                    <span className="text-purple-400">class</span>{' '}
                    <span className="text-yellow-300">FresherEngineer</span>:
                  </p>
                  <p className="pl-4 text-slate-400">
                    role = <span className="text-emerald-300">&quot;Aspiring AI Engineer&quot;</span>
                  </p>
                  <p className="pl-4 text-slate-400">
                    status = <span className="text-emerald-300">&quot;1st Year B.Tech&quot;</span>
                  </p>
                  <p className="pl-4 text-slate-400">
                    interests = [<span className="text-emerald-300">&quot;Python&quot;</span>, <span className="text-emerald-300">&quot;Web&quot;</span>, <span className="text-emerald-300">&quot;GenAI&quot;</span>]
                  </p>
                  <p className="pl-4 pt-1">
                    <span className="text-purple-400">def</span>{' '}
                    <span className="text-blue-300">daily_routine</span>(self):
                  </p>
                  <p className="pl-8 text-blue-300">
                    return <span className="text-slate-200">build_projects() + participate_in_hackathons()</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
