import { Trophy, Calendar, Users, Target, CheckCircle2, Sparkles } from 'lucide-react';
import { HACKATHONS, PERSONAL_INFO } from '../data/portfolioData';

export function Hackathons() {
  return (
    <section id="hackathons" className="py-20 bg-slate-50 text-slate-800 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2">
            Hackathons & Ideathons
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
            Testing Ideas & Collaborating Under Time Pressure
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Hackathons and ideathons are where I push beyond textbook theory. They teach me how to scope a real problem, build rapid prototypes with teammates, and communicate technical concepts clearly.
          </p>
        </div>

        {/* Highlight Banner with Generated Asset */}
        <div className="relative rounded-2xl overflow-hidden mb-12 border border-slate-200 shadow-sm bg-slate-900 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400">
                  <Sparkles className="w-4 h-4" />
                  <span>Freshman Team Participation</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white text-balance">
                  From Problem Statement to Functional Prototype in 36 Hours
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Working with peers across computer science and electronics taught me that great engineering starts with deep empathy for the user before writing a single line of Python or React.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white font-mono">3</div>
                  <div className="text-slate-400 mt-0.5">Events Entered</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-blue-400 font-mono">Top 10</div>
                  <div className="text-slate-400 mt-0.5">Campus SIH Pitch</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white font-mono">100%</div>
                  <div className="text-slate-400 mt-0.5">Working Demos</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 h-64 lg:h-auto relative overflow-hidden bg-slate-800">
              <img
                src={PERSONAL_INFO.hackathonBanner}
                alt="Students collaborating at an engineering hackathon sprint"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>

        {/* Hackathon Cards Grid */}
        <div className="space-y-6">
          {HACKATHONS.map((hackathon) => (
            <div
              key={hackathon.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:border-slate-300 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  {/* Clean unboxed metadata */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-1">
                    <span className="font-semibold text-blue-600">{hackathon.event}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {hackathon.date}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>Role: {hackathon.role}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{hackathon.title}</h3>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-800 rounded-lg text-xs font-semibold self-start shrink-0">
                  <Trophy className="w-4 h-4 text-blue-600" />
                  <span>{hackathon.achievement}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-5">
                <div className="lg:col-span-7 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Project Pitched: <span className="text-slate-800 font-semibold">{hackathon.projectTitle}</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {hackathon.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs font-semibold text-slate-500 mr-2">Tools Used:</span>
                    <span className="text-xs text-slate-700 font-mono">
                      {hackathon.techUsed.join(' · ')}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-blue-600" />
                    Key Lessons Learned
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {hackathon.takeaways.map((takeaway) => (
                      <li key={takeaway} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
