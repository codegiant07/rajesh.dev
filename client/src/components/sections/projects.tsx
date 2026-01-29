import { motion } from 'framer-motion';
import { Github, ExternalLink, Briefcase, GraduationCap } from 'lucide-react';

export function Projects() {
  const professionalProjects = [
    {
      title: "MyJio: For Everything Jio",
      description: "End-to-end development of Entertainment Dashboard, Recharge feature, dynamic Home Dashboard carousel, and PieNews Dashboard with optimized rendering and state handling.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React Native", "TypeScript", "Redux", "iOS", "Android"],
      github: "#",
      demo: "https://play.google.com/store/apps/details?id=com.jio.myjio",
      category: "Professional"
    },
    {
      title: "JioMart",
      description: "Implemented Address Management feature with add, edit, and selection flows. Worked on carousel animations and cart state management for seamless shopping experience.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React Native", "JavaScript", "State Management"],
      github: "#",
      demo: "https://play.google.com/store/apps/details?id=com.jiomart.app",
      category: "Professional"
    },
    {
      title: "Sephora",
      description: "Developed Cart feature end-to-end using SwiftUI with configuration-driven components. Handled production-level crash fixes improving app stability.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["SwiftUI", "iOS", "State Management"],
      github: "#",
      demo: "https://apps.apple.com/in/app/sephora/id419883600",
      category: "Professional"
    }
  ];

  const collegeProjects = [
    {
      title: "Nearby EV Charging Suggestion",
      description: "A web application to promote Electric Vehicles by helping users find nearby charging stations. Users can see the names and locations of charging booths with an intuitive interface.",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      github: "#",
      demo: "#",
      category: "College"
    },
    {
      title: "Smart Word Converter",
      description: "Component-based single page application that performs multiple operations on words as per user requirements. Features an interactive UI with visualized front-end in ReactJS.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["ReactJS", "JavaScript"],
      github: "#",
      demo: "#",
      category: "College"
    },
    {
      title: "Roll Dice App",
      description: "Cross-platform mobile app with user-friendly interface. Allows users to choose variety of dice types (8-sided, 6-sided, 4-sided). Features realistic rolling animations and sound effects.",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Flutter", "Dart"],
      github: "#",
      demo: null,
      status: "",
      category: "College"
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
    "College": "bg-purple-500/20 text-purple-300",
    "Ongoing": "bg-orange-500/20 text-orange-300"
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
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
          <p className="text-xl text-muted-foreground">Professional work & college achievements</p>
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

        {/* College Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-primary" size={28} />
            <h3 className="text-3xl font-bold text-primary">College Projects</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collegeProjects.map((project, index) => (
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
        
        <div className="flex justify-between items-center">
          <motion.a 
            href={project.github}
            className="text-primary hover:underline flex items-center"
            whileHover={{ scale: 1.05 }}
            data-testid={`project-github-${index}`}
          >
            <Github className="mr-2" size={16} />
            View Code
          </motion.a>
          
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
          ) : (
            <span className="text-muted-foreground text-sm">In Development</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
