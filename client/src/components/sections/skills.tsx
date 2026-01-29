import { motion } from 'framer-motion';
import { SiReact, SiJavascript, SiTypescript, SiSwift, SiAndroid, SiRedux, SiCplusplus, SiMysql, SiGit, SiHtml5, SiCss3, SiXcode } from 'react-icons/si';
import { Code2 } from 'lucide-react';

export function Skills() {
  const skills = [
    { icon: SiReact, name: "React Native", color: "text-cyan-500" },
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-500" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
    { icon: SiSwift, name: "SwiftUI", color: "text-orange-500" },
    { icon: SiAndroid, name: "Android", color: "text-green-500" },
    { icon: SiRedux, name: "Redux", color: "text-purple-500" },
    { icon: SiCplusplus, name: "C++", color: "text-blue-600" },
    { icon: SiMysql, name: "SQL", color: "text-blue-600" },
    { icon: SiGit, name: "Git", color: "text-red-600" },
    { icon: SiHtml5, name: "HTML5", color: "text-orange-600" },
    { icon: SiCss3, name: "CSS3", color: "text-blue-600" },
    { icon: SiXcode, name: "Xcode", color: "text-blue-400" },
    { icon: Code2, name: "VS Code", color: "text-cyan-400" },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
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
          <p className="text-xl text-muted-foreground">Technologies I work with</p>
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
      </div>
    </section>
  );
}
