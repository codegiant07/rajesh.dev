import { motion } from 'framer-motion';
import { Trophy, Medal, Star, Award, Crown } from 'lucide-react';

export function About() {
  const achievements = [
    { icon: Crown, text: "A* performance rating at Jio Platforms for the MyJio super-app", color: "text-red-500" },
    { icon: Star, text: "Core contributor to MyJio - 500M+ downloads", color: "text-blue-500" },
    { icon: Medal, text: "Built an SDUI engine that cut feature rollout time by 30%", color: "text-green-500" },
    { icon: Award, text: "Central Sector Scholarship - Top 10% CSE Batch", color: "text-purple-500" },
    { icon: Trophy, text: "Solved 250+ DSA Problems on LeetCode & GeeksforGeeks", color: "text-yellow-500" },
  ];

  const strengths = [
    { title: "Architecture ownership", text: "Designed MyJio's Server-Driven UI engine and its datasource enrichment pipeline." },
    { title: "Performance", text: "Memoization, stable callbacks and list virtualization across 20+ widget sections." },
    { title: "Cross-platform depth", text: "React Native plus native iOS (Swift/SwiftUI) and Android (Kotlin) bridges, including the New Architecture." },
    { title: "Production quality", text: "VAPT fixes, log-driven crash RCA, Jest tests, CI/CD and CodePush releases." },
  ];

  const education = [
    {
      degree: "Bachelor of Technology - Computer Science & Engineering",
      institution: "Gyan Ganga College of Technology",
      details: "CGPA: 8.78 | July 2019 - May 2023",
      location: "Jabalpur, MP"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text" data-testid="about-title">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Software Development Engineer with 3+ years at Jio Platforms, specializing in JavaScript, TypeScript and React Native. Core contributor to MyJio (500M+ downloads), building reusable UI components, Server-Driven UI, state management and secure, scalable apps - with hands-on native iOS (Swift/SwiftUI) and Android bridge experience.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Education */}
            <div className="glass rounded-2xl p-8" data-testid="education-section">
              <h3 className="text-2xl font-bold mb-4 text-primary">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    data-testid={`education-item-${index}`}
                  >
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{edu.details}</span>
                      <span>{edu.location}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Achievements */}
            <div className="glass rounded-2xl p-8" data-testid="achievements-section">
              <h3 className="text-2xl font-bold mb-4 text-primary">Achievements</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      data-testid={`achievement-item-${index}`}
                    >
                      <Icon className={`mr-3 ${achievement.color}`} size={20} />
                      <span className="text-muted-foreground">{achievement.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Modern tech background */}
            <motion.div 
              className="glass rounded-2xl p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              data-testid="workspace-showcase"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">What I bring</h3>
              <ul className="space-y-5">
                {strengths.map((item) => (
                  <li key={item.title}>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="text-muted-foreground text-sm mt-1">{item.text}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
