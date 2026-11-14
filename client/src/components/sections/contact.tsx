import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Code, Send, CheckCircle, XCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

/** Prevents hung network calls from leaving the submit button stuck on "Sending..." */
function rejectAfter(ms: number, message: string): Promise<never> {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error(message)), ms);
  });
}

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function Contact() {
  const { toast } = useToast();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '';
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '';
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '';

  useEffect(() => {
    if (publicKey) {
      // SDK uses `||` when merging options; set headless policy here so `false` is not dropped.
      emailjs.init({ publicKey, blockHeadless: false });
    }
  }, [publicKey]);
  
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    const name = data.name?.trim();
    const email = data.email?.trim();
    const message = data.message?.trim();
    const subject = data.subject?.trim() || '(No subject)';

    if (!name || !email || !message) {
      toast({
        title: "Missing required fields",
        description: "Please fill in name, email, and message.",
        variant: "destructive",
      });
      return;
    }

    const payload = { name, email, subject, message };

    setIsSubmitting(true);

    const emailJsErrorText = (err: unknown): string => {
      if (err && typeof err === "object" && "text" in err) {
        const t = String((err as { text: string }).text);
        try {
          const parsed = JSON.parse(t) as { message?: string; error?: string };
          return parsed.message || parsed.error || t;
        } catch {
          return t || "Unknown EmailJS error";
        }
      }
      if (err instanceof Error) return err.message;
      return "Unknown error";
    };

    try {
      let emailJsOk = false;
      let lastEmailJsError = "";

      if (serviceId && templateId && publicKey) {
        try {
          await Promise.race([
            emailjs.send(
              serviceId,
              templateId,
              {
                from_name: name,
                from_email: email,
                reply_to: email,
                subject,
                message,
                name,
                email,
              },
              publicKey,
            ),
            rejectAfter(
              25_000,
              "EmailJS timed out (no response). Check network or try again.",
            ),
          ]);
          emailJsOk = true;
        } catch (emailJsErr) {
          lastEmailJsError = emailJsErrorText(emailJsErr);
          console.warn("EmailJS send failed, trying server API:", emailJsErr);
        }
      }

      if (!emailJsOk) {
        const ac = new AbortController();
        const fetchTimer = setTimeout(() => ac.abort(), 25_000);
        let res: Response;
        try {
          res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            signal: ac.signal,
          });
        } catch (fetchErr) {
          if (fetchErr instanceof Error && fetchErr.name === "AbortError") {
            throw new Error(
              lastEmailJsError ||
                "Request timed out. Is the dev server running on this origin?",
            );
          }
          throw fetchErr;
        } finally {
          clearTimeout(fetchTimer);
        }
        const json = (await res.json().catch(() => ({}))) as {
          success?: boolean;
          message?: string;
        };
        if (!res.ok || json.success === false) {
          throw new Error(
            lastEmailJsError ||
              json.message ||
              `Server error (${res.status})`,
          );
        }
        setSubmitStatus("success");
        toast({
          title: lastEmailJsError
            ? "Saved locally — EmailJS failed"
            : "Message sent successfully!",
          description: lastEmailJsError
            ? `${lastEmailJsError} Fix EmailJS (template To field, service test, allowed domains), then try again.`
            : "Thank you for your message. I'll get back to you soon.",
          variant: lastEmailJsError ? "destructive" : "default",
        });
        form.reset();
        setTimeout(() => setSubmitStatus("idle"), 8000);
        return;
      }

      setSubmitStatus("success");
      toast({
        title: "Message sent successfully!",
        description:
          "Thank you for your message. If no email arrives in a few minutes, check Spam and EmailJS → History.",
      });
      form.reset();
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (err: unknown) {
      const text =
        err instanceof Error ? err.message : "Something went wrong.";
      setSubmitStatus("error");
      toast({
        title: "Failed to send message",
        description: text,
        variant: "destructive",
      });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/codegiant07", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/rajesh-info/", label: "LinkedIn" },
    { icon: Code, href: "https://leetcode.com/u/rajeshchouhancs25/", label: "LeetCode" },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text" data-testid="contact-title">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground">Open to new opportunities and collaborations. I usually reply within a day.</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-6" data-testid="contact-info">
              <h3 className="text-2xl font-bold mb-6 text-primary">Contact Information</h3>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Mail className="text-xl text-blue-500 mr-4" />
                  <a href="mailto:rajeshchouhancs25@gmail.com" className="text-muted-foreground hover:text-primary">rajeshchouhancs25@gmail.com</a>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Phone className="text-xl text-green-500 mr-4" />
                  <a href="tel:+919399690498" className="text-muted-foreground hover:text-primary">+91-9399690498</a>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <MapPin className="text-xl text-red-500 mr-4" />
                  <span className="text-muted-foreground">Jabalpur, Madhya Pradesh, India</span>
                </motion.div>
              </div>
            </div>
            
            <div className="glass rounded-2xl p-6" data-testid="social-links">
              <h3 className="text-2xl font-bold mb-6 text-primary">Find Me Online</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      data-testid={`social-${link.label.toLowerCase()}`}
                      aria-label={link.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="glass rounded-2xl p-6"
              data-testid="contact-form"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">Send Message</h3>
              
              {/* Success/Error Alert */}
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-4 bg-green-500/20 border border-green-500 rounded-lg flex items-center gap-2"
                >
                  <CheckCircle className="text-green-500" size={20} />
                  <div>
                    <p className="font-semibold text-green-500">Message sent successfully!</p>
                    <p className="text-sm text-green-400">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-4 bg-red-500/20 border border-red-500 rounded-lg flex items-center gap-2"
                >
                  <XCircle className="text-red-500" size={20} />
                  <div>
                    <p className="font-semibold text-red-500">Failed to send message</p>
                    <p className="text-sm text-red-400">Please try again or contact me directly via email.</p>
                  </div>
                </motion.div>
              )}
              
              <div className="space-y-4">
                <input
                  {...form.register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="Your Name *"
                  autoComplete="name"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  data-testid="input-name"
                />
                {form.formState.errors.name && (
                  <p className="text-destructive text-sm">
                    {form.formState.errors.name.message}
                  </p>
                )}

                <input
                  {...form.register("email", {
                    required: "Email is required",
                  })}
                  type="email"
                  placeholder="Your Email *"
                  autoComplete="email"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  data-testid="input-email"
                />
                {form.formState.errors.email && (
                  <p className="text-destructive text-sm">
                    {form.formState.errors.email.message}
                  </p>
                )}

                <input
                  {...form.register("subject")}
                  type="text"
                  placeholder="Subject (Optional)"
                  autoComplete="off"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  data-testid="input-subject"
                />
                {form.formState.errors.subject && (
                  <p className="text-destructive text-sm">
                    {form.formState.errors.subject.message}
                  </p>
                )}

                <textarea
                  {...form.register("message", {
                    required: "Message is required",
                  })}
                  placeholder="Your Message *"
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                  data-testid="textarea-message"
                />
                {form.formState.errors.message && (
                  <p className="text-destructive text-sm">
                    {form.formState.errors.message.message}
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid="button-send-message"
                >
                  <Send className="inline mr-2" size={16} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
