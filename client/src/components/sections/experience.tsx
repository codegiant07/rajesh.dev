import { motion } from 'framer-motion';
import { GraduationCap, Award, Network } from 'lucide-react';

export function Experience() {
  const experience = {
    title: "Software Development Engineer I",
    company: "Jio Platforms Limited",
    date: "Dec 2023 – Present",
    responsibilities: [
      { lead: "MyJio features:", text: "Developed and maintained features with JavaScript, TypeScript, reusable UI components and a scalable frontend architecture." },
      { lead: "SDUI engine (30% faster rollouts):", text: "Architected a Server-Driven UI renderer mapping backend JSON layouts to React Native components, so UI ships without app-store releases. Built a datasource enrichment pipeline injecting JWT tokens, user profiles, coins and recommendations." },
      { lead: "Performance (20+ widget sections):", text: "Cut unnecessary re-renders using React Hooks, React.memo, useCallback and FlatList virtualization." },
      { lead: "State & APIs:", text: "Integrated REST APIs and managed application state with Redux Toolkit and a reusable component architecture." },
      { lead: "New Architecture:", text: "Contributed to migrating the native bridge layer to JSI, TurboModules and Fabric across Android (Kotlin) and iOS (Swift)." },
      { lead: "Production stability:", text: "Resolved crashes, API issues, WebView lifecycle bugs and Xcode build/release problems through log-driven root-cause analysis with backend, design and QA teams." },
      { lead: "Security & delivery:", text: "Addressed VAPT findings (token auth, encrypted storage, API communication); contributed to Azure Pipelines CI/CD, Jest unit testing and CodePush (OTA) releases." }
    ]
  };

  const certifications = [
    {
      icon: Award,
      title: "A* Performance Rating",
      subtitle: "Outstanding contribution to the MyJio super-app",
      category: "RECOGNITION",
      color: "text-yellow-500"
    },
    {
      icon: GraduationCap,
      title: "B.Tech CSE - CGPA 8.78",
      subtitle: "Gyan Ganga College of Technology, Jabalpur (2019-2023)",
      category: "EDUCATION",
      color: "text-purple-500"
    },
    {
      icon: Network,
      title: "New Architecture Migration",
      subtitle: "JSI, TurboModules and Fabric across Android & iOS",
      category: "PROFESSIONAL",
      color: "text-green-500"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text" data-testid="experience-title">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground">Where I have built and shipped at scale</p>
        </motion.div>
        
        <div className="space-y-12">
          {/* Experience Timeline */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            <div className="relative pl-12" data-testid="experience-timeline">
              <motion.div 
                className="absolute left-2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full -translate-x-1/2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              />
              
              <motion.div 
                className="glass rounded-2xl p-6 ml-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                data-testid="experience-card"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{experience.title}</h3>
                    <p className="text-muted-foreground">{experience.company}</p>
                  </div>
                  <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full mt-2 md:mt-0">
                    {experience.date}
                  </span>
                </div>
                <ul className="space-y-2">
                  {experience.responsibilities.map((responsibility, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start text-muted-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      viewport={{ once: true }}
                      data-testid={`responsibility-${index}`}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                      <span>
                        <span className="font-semibold text-foreground">{responsibility.lead}</span>{' '}
                        {responsibility.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Certifications */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.title}
                  className="glass rounded-2xl p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                  data-testid={`certification-${index}`}
                >
                  <div className="flex items-center mb-4">
                    <Icon className={`text-2xl ${cert.color} mr-3`} />
                    <div>
                      <h3 className="font-bold text-primary">{cert.title}</h3>
                      <p className="text-xs text-muted-foreground opacity-75">{cert.category}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{cert.subtitle}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
