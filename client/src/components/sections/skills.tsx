import { motion } from 'framer-motion';
import { SiReact, SiJavascript, SiTypescript, SiSwift, SiAndroid, SiRedux, SiReactquery, SiGit, SiJest, SiPostman, SiXcode, SiJitsi } from 'react-icons/si';
import { Layers, Cpu, ShieldCheck, GitBranch } from 'lucide-react';

export function Skills() {
  const skills = [
    { icon: SiReact, name: "React Native", color: "text-cyan-500" },
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-500" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
    { icon: SiRedux, name: "Redux Toolkit", color: "text-purple-500" },
    { icon: SiReactquery, name: "React Query", color: "text-red-500" },
    { icon: SiSwift, name: "Swift / SwiftUI", color: "text-orange-500" },
    { icon: SiAndroid, name: "Android Bridge", color: "text-green-500" },
    { icon: Layers, name: "SDUI", color: "text-pink-500" },
    { icon: Cpu, name: "JSI / TurboModules", color: "text-teal-400" },
    { icon: ShieldCheck, name: "VAPT / JWT", color: "text-emerald-500" },
    { icon: SiJest, name: "Jest", color: "text-red-600" },
    { icon: SiGit, name: "Git", color: "text-red-600" },
    { icon: SiPostman, name: "Postman", color: "text-orange-600" },
    { icon: SiXcode, name: "Xcode", color: "text-blue-400" },
    { icon: GitBranch, name: "Azure Pipelines / CodePush", color: "text-sky-500" },
    { icon: SiJitsi, name: "Jitsi SDK", color: "text-blue-600" },
  ];

  const skillGroups = [
    { title: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "Swift"] },
    { title: "Frontend", items: ["React", "React Native", "Hooks", "Reusable Components", "React Navigation"] },
    { title: "State & APIs", items: ["Redux Toolkit", "Zustand", "React Query", "Context API", "REST APIs", "JSON", "MMKV"] },
    { title: "Architecture & Security", items: ["SDUI", "MVVM", "Performance Optimization", "JWT Authentication", "VAPT Remediation"] },
    { title: "Native & Tools", items: ["Swift", "SwiftUI", "Android Bridge Integration", "JSI", "TurboModules", "Fabric", "Git", "Jest", "Postman", "Azure Pipelines", "CodePush", "Cursor", "Claude Code"] },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text" data-testid="skills-title">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground">Technologies I use to build and ship production apps</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="glass rounded-2xl p-6 text-center group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                data-testid={`skill-${skill.name.toLowerCase()}`}
              >
                <motion.div
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Icon className={`text-4xl ${skill.color} mb-4 mx-auto`} />
                  <h3 className="font-semibold text-sm">{skill.name}</h3>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              className={`glass rounded-2xl p-6 ${index === skillGroups.length - 1 ? 'md:col-span-2' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`skill-group-${index}`}
            >
              <h3 className="text-lg font-bold mb-4 text-primary">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="px-3 py-1 rounded-full text-sm bg-white/5 text-muted-foreground border border-white/10">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
