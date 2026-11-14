import { motion } from 'framer-motion';
import { Layers, Gauge, Cpu, ShieldCheck } from 'lucide-react';

type CaseStudy = {
  icon: typeof Layers;
  title: string;
  problem: string;
  approach: string[];
  impact: string;
  tags: string[];
  color: string;
};

const caseStudies: CaseStudy[] = [
  {
    icon: Layers,
    title: 'Server-Driven UI Rendering Engine',
    problem:
      'Every UI change on MyJio needed a new app-store release, which slowed down feature launches for a 500M+ download app.',
    approach: [
      'Designed a renderer that maps backend-configured JSON layouts to React Native components.',
      'Built a datasource enrichment pipeline that injects real-time data — JWT tokens, user profiles, coins and recommendations — before render.',
      'Made CTAs and deep-link navigation config-driven, so new journeys need no client code.',
    ],
    impact: 'UI changes ship without app-store releases; feature rollout time reduced by 30%.',
    tags: ['React Native', 'TypeScript', 'SDUI', 'Redux Toolkit'],
    color: 'text-pink-400',
  },
  {
    icon: Gauge,
    title: 'Rendering Performance at Scale',
    problem:
      'Home and entertainment dashboards are made of many dynamic widgets, and unnecessary re-renders made them feel heavy.',
    approach: [
      'Profiled and optimized 20+ dynamic widget sections.',
      'Applied React.memo and useCallback to stop re-render cascades between widgets.',
      'Used FlatList virtualization so only on-screen content is rendered.',
    ],
    impact: 'Fewer unnecessary re-renders and smoother dashboards across the MyJio super-app.',
    tags: ['React Hooks', 'React.memo', 'FlatList', 'Profiling'],
    color: 'text-cyan-400',
  },
  {
    icon: Cpu,
    title: 'React Native New Architecture Migration',
    problem:
      'The MyJio native bridge layer was built on the legacy async bridge shared by Android and iOS.',
    approach: [
      'Contributed to moving bridge modules to JSI and TurboModules.',
      'Worked on Fabric compatibility for native UI.',
      'Implemented and debugged native integrations on Android (Kotlin) and iOS (Swift).',
    ],
    impact: 'A modern, typed native layer ready for the New Architecture on both platforms.',
    tags: ['JSI', 'TurboModules', 'Fabric', 'Kotlin', 'Swift'],
    color: 'text-teal-400',
  },
  {
    icon: ShieldCheck,
    title: 'Security, Stability & Release Quality',
    problem:
      'A super-app at this scale needs secure auth, safe storage and fast, reliable fixes when production breaks.',
    approach: [
      'Addressed VAPT findings in token-based authentication, encrypted storage and API communication.',
      'Resolved production crashes, WebView lifecycle bugs and Xcode build/release issues through log-driven root-cause analysis.',
      'Contributed to Azure Pipelines CI/CD, Jest unit tests and CodePush (OTA) releases.',
    ],
    impact: 'Safer user data and faster, more reliable releases with backend, design and QA teams.',
    tags: ['VAPT', 'JWT', 'Encrypted Storage', 'CodePush', 'Jest'],
    color: 'text-emerald-400',
  },
];

export function Highlights() {
  return (
    <section id="highlights" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text" data-testid="highlights-title">
            Engineering Highlights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The problems I owned at Jio Platforms — what was wrong, how I approached it, and what changed.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <motion.article
                key={study.title}
                className="glass rounded-2xl p-6 flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`highlight-${index}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center">
                    <Icon className={study.color} size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{study.title}</h3>
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">Problem</p>
                <p className="text-muted-foreground mt-1 mb-4">{study.problem}</p>

                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">Approach</p>
                <ul className="mt-2 mb-4 space-y-2">
                  {study.approach.map((step) => (
                    <li key={step} className="flex items-start text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="rounded-xl bg-green-500/10 border border-green-500/20 px-4 py-3 mb-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-green-400">Impact</p>
                    <p className="text-sm text-foreground mt-1">{study.impact}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs bg-white/5 text-muted-foreground border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
