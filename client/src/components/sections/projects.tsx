import { motion } from 'framer-motion';
import { ExternalLink, Briefcase, GraduationCap, Github } from 'lucide-react';

export function Projects() {
  const professionalProjects = [
    {
      title: "MyJio: For Everything Jio",
      description: "Architected a Server-Driven UI engine that maps backend JSON to React Native components (30% faster rollouts, no app-store release). Built Entertainment and Engage dashboards with reusable carousels and config-driven CTA/deep-link navigation; optimized 20+ widget sections.",
      image: "https://images.sftcdn.net/images/t_app-cover-s,f_auto/p/a348cb84-3e32-11e8-9b6c-02420a000b1f/1962637759/myjio-jio-cricket-play-along-unnamed.png",
      technologies: ["React Native", "TypeScript", "Redux", "SDUI", "iOS", "Android"],
      github: "#",
      demo: "https://play.google.com/store/apps/details?id=com.jio.myjio",
      category: "Professional"
    },
    {
      title: "JioMart",
      description: "Built Address Management flows with validation, Google Maps auto-fill, REST APIs and Redux state - add, edit and selection journeys for a seamless checkout.",
      image: "https://myjiostatic.cdn.jio.com/cms/assets/jioapps/jiomart/download_s_2x.webp",
      technologies: ["React Native", "JavaScript", "State Management"],
      github: "#",
      demo: "https://play.google.com/store/apps/details?id=com.jpl.jiomart&hl=en_IN",
      category: "Professional"
    },
    {
      title: "Sephora",
      description: "Developed the native iOS Cart feature end-to-end using SwiftUI and reusable, configuration-driven components, plus production crash fixes.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["SwiftUI", "iOS", "State Management"],
      github: "#",
      demo: "https://apps.apple.com/in/app/sephora-india/id6502686175",
      category: "Professional"
    }
  ];

  const personalProjects = [
    {
      title: "Maya: AI Voice Assistant with 3D Avatar",
      description: "Voice-first AI companion with a lip-synced 3D avatar. Streams Llama 3.3 replies over Server-Sent Events and speaks them sentence by sentence to cut perceived latency. Whisper speech-to-text, interrupt handling with AbortController, a memory system that learns user facts for personalized replies, and idle nudges.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Three.js", "Node.js", "Groq LLM", "Whisper"],
      github: "https://github.com/codegiant07/ai-personal-assistant",
      demo: null,
      category: "Personal"
    },
    {
      title: "LoopLens: JavaScript Execution Visualizer",
      description: "Interactive visualizer that demonstrates scope, closures and promise execution. Simulates the call stack, Web APIs, task and microtask queues using a generator-based interpreter and typed snapshot architecture.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "TypeScript", "Vite", "Acorn"],
      github: "https://github.com/codegiant07/LoopLens",
      demo: null,
      category: "Personal"
    },
    {
      title: "Learnova: Learning Management App",
      description: "Cross-platform LMS with live video classes using Jitsi SDK, Redux Toolkit, React Query, Zod and MMKV. Quality gates with Jest, ESLint, Prettier, TypeScript checks and Husky pre-commit hooks.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React Native", "TypeScript", "Redux", "React Query", "Jitsi"],
      github: "https://github.com/codegiant07/learnova-app",
      demo: null,
      category: "Personal"
    }
  ];

  const techColors: Record<string, string> = {
    "React Native": "bg-cyan-500/20 text-cyan-300",
    "TypeScript": "bg-blue-500/20 text-blue-300",
    "JavaScript": "bg-yellow-500/20 text-yellow-300",
    "Redux": "bg-purple-500/20 text-purple-300",
    "SwiftUI": "bg-orange-500/20 text-orange-300",
    "iOS": "bg-gray-500/20 text-gray-300",
    "Android": "bg-green-500/20 text-green-300",
    "State Management": "bg-pink-500/20 text-pink-300",
    "HTML5": "bg-orange-600/20 text-orange-400",
    "CSS3": "bg-blue-600/20 text-blue-400",
    "ReactJS": "bg-cyan-500/20 text-cyan-300",
    "Flutter": "bg-blue-500/20 text-blue-400",
    "Dart": "bg-teal-500/20 text-teal-300",
    "Professional": "bg-green-500/20 text-green-300",
    "Personal": "bg-purple-500/20 text-purple-300",
    "Three.js": "bg-white/10 text-gray-200",
    "Node.js": "bg-green-500/20 text-green-300",
    "Groq LLM": "bg-orange-500/20 text-orange-300",
    "Whisper": "bg-teal-500/20 text-teal-300",
    "React": "bg-cyan-500/20 text-cyan-300",
    "SDUI": "bg-pink-500/20 text-pink-300",
    "Vite": "bg-yellow-500/20 text-yellow-300",
    "Acorn": "bg-green-500/20 text-green-300",
    "React Query": "bg-red-500/20 text-red-300",
    "Jitsi": "bg-blue-500/20 text-blue-300",
    "Ongoing": "bg-orange-500/20 text-orange-300"
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text" data-testid="projects-title">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground">Professional work & things I build on the side</p>
        </motion.div>
        
        {/* Professional Projects */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-primary" size={28} />
            <h3 className="text-3xl font-bold text-primary">Professional Projects</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} techColors={techColors} />
            ))}
          </div>
        </motion.div>

        {/* Personal Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-primary" size={28} />
            <h3 className="text-3xl font-bold text-primary">Personal Projects</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} techColors={techColors} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, techColors }: { project: any; index: number; techColors: Record<string, string> }) {
  return (
    <motion.div
      className="glass rounded-2xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      viewport={{ once: true }}
      data-testid={`project-card-${index}`}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        {project.category && (
          <div className="absolute top-3 right-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${techColors[project.category]}`}>
              {project.category}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-primary" data-testid={`project-title-${index}`}>
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string) => (
            <span 
              key={tech}
              className={`px-3 py-1 rounded-full text-sm ${techColors[tech] || 'bg-gray-500/20 text-gray-300'}`}
              data-testid={`tech-tag-${tech.toLowerCase()}`}
            >
              {tech}
            </span>
          ))}
          {project.status && (
            <span className={`px-3 py-1 rounded-full text-sm ${techColors[project.status]}`}>
              {project.status}
            </span>
          )}
        </div>
        
        <div className="flex justify-end items-center gap-5">
          {project.github && project.github !== "#" ? (
            <motion.a
              href={project.github}
              className="text-primary hover:underline flex items-center"
              whileHover={{ scale: 1.05 }}
              data-testid={`project-github-${index}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2" size={16} />
              Source
            </motion.a>
          ) : null}
          {project.demo ? (
            <motion.a 
              href={project.demo}
              className="text-primary hover:underline flex items-center"
              whileHover={{ scale: 1.05 }}
              data-testid={`project-demo-${index}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2" size={16} />
              {project.category === "Professional" ? "View App" : "Live Demo"}
            </motion.a>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}
