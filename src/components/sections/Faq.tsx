"use client";

import { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
    {
      "question": "What services do you actually offer?",
      "answer": "We design, build, and scale digital products—from high-performance websites to full web applications. Strategy, UI/UX, development, and optimization all live under one roof."
    },
    {
      "question": "How is your agency different from others?",
      "answer": "We don’t just deliver projects—we solve business problems. Every decision we make is tied to performance, scalability, and user experience, not just aesthetics."
    },
    {
      "question": "How long does a project take?",
      "answer": "Most projects take between 2–8 weeks depending on complexity. Simple websites move fast, while custom platforms take more time with full transparency from day one."
    },
    {
      "question": "Do you work with startups or established businesses?",
      "answer": "Both. Whether you’re launching your first product or scaling an existing one, we adapt our process to where you are."
    },
    {
      "question": "What does your process look like?",
      "answer": "Discover to understand your goals, design to craft the experience, build with precision, launch smoothly, and optimize continuously."
    },
    {
      "question": "Will my website be optimized for performance?",
      "answer": "Yes. Speed, responsiveness, and SEO fundamentals are built in from the start. A beautiful site that loads slowly is not a good product."
    },
    {
      "question": "Can you redesign my existing website?",
      "answer": "Absolutely. We audit what’s working, fix what’s not, and rebuild it into something faster, cleaner, and more effective."
    },
    {
      "question": "Do you provide ongoing support?",
      "answer": "Yes. We offer maintenance, updates, and optimization so your product keeps performing long after launch."
    },
    {
      "question": "How much does a project cost?",
      "answer": "Pricing depends on scope and complexity. We don’t do one-size-fits-all, but we make sure every dollar translates into real value."
    },
    {
      "question": "Do you help with branding as well?",
      "answer": "Yes. From visual identity to UI systems, we help shape how your brand looks and feels across digital platforms."
    },
    {
      "question": "Will I be involved in the process?",
      "answer": "Definitely. We keep things collaborative with regular updates and feedback loops, without overwhelming you."
    },
    {
      "question": "What if I don’t know exactly what I need?",
      "answer": "That’s completely normal. We’ll help you refine your ideas and turn them into a clear, actionable plan."
    },
    {
      "question": "Do you use templates or custom builds?",
      "answer": "Everything is tailored. We build for your goals, not from generic templates."
    },
    {
      "question": "What happens after launch?",
      "answer": "Launch is just the beginning. We track performance, gather insights, and continuously improve your product."
    },
    {
      "question": "How do we get started?",
      "answer": "Simple. Reach out, tell us what you’re building, and we’ll take it from there."
    }
  ];

export default function FAQ(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-28 px-6 bg-neutral-50 text-neutral-900">
      
      <div className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Still thinking?
          </h2>
          <p className="text-neutral-500 mt-4 text-lg">
            We’ve answered the most common questions below.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq: FAQItem, index: number) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Question */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-lg font-medium text-neutral-900">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-2xl text-orange-500"
                  >
                    +
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}