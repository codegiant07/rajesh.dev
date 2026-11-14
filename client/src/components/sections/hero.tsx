import { motion } from 'framer-motion';
import { Github, Linkedin, Code, Download, UserPlus } from 'lucide-react';
import { Typewriter } from '@/components/ui/typewriter';

export function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/codegiant07", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/rajesh-info/", label: "LinkedIn" },
    { icon: Code, href: "https://leetcode.com/u/rajeshchouhancs25/", label: "LeetCode" },
  ];

  const impact = [
    { value: '3+', label: 'Years at Jio Platforms' },
    { value: '500M+', label: 'MyJio downloads' },
    { value: '30%', label: 'Faster feature rollout' },
    { value: '20+', label: 'Widget sections optimized' },
  ];

  const typewriterTexts = [
    'Software Development Engineer | React Native & TypeScript',
    '3+ Years at Jio Platforms | Core Contributor to MyJio (500M+ Downloads)',
    'SDUI Architecture | Native Bridges | New Architecture (JSI, TurboModules, Fabric)'
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      {/* Background Animation */}
      <motion.div 
        className="fixed inset-0 parallax-bg"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      {/* Professional developer workspace background */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Professional developer workspace" 
          className="w-full h-full object-cover rounded-2xl" 
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-black mb-6 animate-float"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          data-testid="hero-title"
        >
          <span className="gradient-text">Rajesh Chouhan</span>
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-2xl font-semibold text-foreground mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          data-testid="hero-role"
        >
          Software Engineer · React Native, TypeScript &amp; Mobile Architecture
        </motion.p>

        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          data-testid="hero-availability"
        >
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          Open to new opportunities
        </motion.div>

        <motion.div 
          className="text-lg md:text-xl text-muted-foreground mb-8 h-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typewriter texts={typewriterTexts} />
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="button-hire-me"
          >
            <UserPlus className="inline mr-2" size={20} />
            Hire Me
          </motion.button>
          
          <motion.a 
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download="Rajesh_Chouhan_Resume.pdf"
            className="px-8 py-4 glass border border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="button-download-resume"
          >
            <Download className="inline mr-2" size={20} />
            Download Resume
          </motion.a>
        </motion.div>
        
        {/* Impact strip */}
        <motion.dl
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          data-testid="hero-impact"
        >
          {impact.map((item) => (
            <div key={item.label} className="glass rounded-xl px-3 py-3">
              <dd className="text-2xl md:text-3xl font-black gradient-text">{item.value}</dd>
              <dt className="text-xs text-muted-foreground mt-1">{item.label}</dt>
            </div>
          ))}
        </motion.dl>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                data-testid={`social-link-${link.label.toLowerCase()}`}
                aria-label={link.label}
              >
                <Icon size={28} />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
