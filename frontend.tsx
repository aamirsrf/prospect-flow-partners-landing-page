import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Mail,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Star,
  Menu,
  X as XIcon,
  CheckCircle2,
} from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-2">
          <img src="./assets/logo.png" alt="Prospect Flow" className="h-10 w-10" />
          <span className="text-xl font-bold text-black">Prospect Flow</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-gray-600 hover:text-dark transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:info@prospectflow.com"
            className="gold-gradient text-white font-semibold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            Get Started
          </a>
        </div>
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <XIcon className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border px-6 pb-4 animate-fade-in">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block text-sm font-medium text-gray-600 hover:text-dark py-3"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:info@prospectflow.com"
            className="block mt-2 gold-gradient text-white font-semibold px-6 py-2.5 rounded-lg text-sm text-center"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
      <div className="h-[3px] gold-gradient" />
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-dark">
              Premium Lead Generation for{" "}
              <span className="text-gold">Insurance Companies</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Get qualified, verified leads delivered straight to your CRM.
              Every lead is filtered through a custom qualification form and
              confirmed with OTP verification, so your team gets real prospects
              with accurate contact information.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 gold-gradient text-white font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                Get Your First Leads
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 border-2 border-gold text-gold font-semibold px-8 py-4 rounded-lg hover:bg-gold hover:text-white transition-all"
              >
                See How It Works
              </a>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Trusted by leading insurance agencies nationwide
            </p>
          </div>
          <div className="animate-fade-up-delay-1 flex justify-center">
            <div className="bg-gold-light rounded-3xl p-8 max-w-sm w-full">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gold-light flex items-center justify-center">
                    <Users className="h-8 w-8 text-gold" />
                  </div>
                </div>
                <p className="text-center text-muted-foreground text-sm">
                  Qualified Leads Per Month
                </p>
                <p className="text-center text-5xl font-bold text-dark mt-2">
                  1,500+
                </p>
                <div className="border-t border-border mt-6 pt-4">
                  <p className="text-center text-sm text-muted-foreground">
                    100% Verified with OTP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Advantage() {
  const features = [
    {
      icon: <Mail className="h-6 w-6 text-gold" />,
      title: "Custom Qualification Form",
      description:
        "You set the criteria, and we build the form to filter leads based on what your team is looking for and send it to your CRM.",
    },
    {
      icon: <Shield className="h-6 w-6 text-gold" />,
      title: "OTP Verification",
      description:
        "Every lead is verified through one-time password confirmation. Guarantee authenticity and reduce fraud by 100%.",
    },
    {
      icon: <Zap className="h-6 w-6 text-gold" />,
      title: "Dedicated Pipeline",
      description:
        "Qualified leads delivered straight to your CRM. Real-time integration, zero manual work, maximum efficiency.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark">
          The Prospect Flow Advantage
        </h2>
        <p className="mt-4 text-muted-foreground">
          Why top insurance agencies choose us
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow text-left"
            >
              <div className="w-14 h-14 rounded-xl bg-gold-light flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-dark mb-3">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: "Activate",
      description: "Launch your insurance lead campaign in minutes",
    },
    {
      num: 2,
      title: "Qualify",
      description: "Prospects complete our qualification form",
    },
    {
      num: 3,
      title: "Verify",
      description: "OTP confirmation ensures real contacts",
    },
    {
      num: 4,
      title: "Deliver",
      description: "Leads sent directly to your CRM instantly",
    },
  ];

  return (
    <section className="py-24 bg-cream-dark" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark">
          How It Works
        </h2>
        <p className="mt-4 text-muted-foreground">
          Four simple steps to qualified leads
        </p>
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {steps.map((s, i) => (
            <div key={s.num} className="relative">
              <div className="bg-white border border-border rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                  {s.num}
                </div>
                <h3 className="font-serif text-lg font-bold text-dark mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-3 w-6 h-0.5 bg-gold" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const benefits = [
    "Verified leads only – no spam, no tire-kickers",
    "100% TCPA compliance and data privacy",
    "Faster sales cycle with qualified prospects",
    "Transparent pricing with no hidden fees",
    "Real-time lead delivery and CRM integration",
    "Dedicated account management and support",
  ];

  const stats = [
    {
      icon: <TrendingUp className="h-5 w-5 text-gold" />,
      label: "CONVERSION RATE",
      value: "3.2x",
      sub: "Higher than industry average",
    },
    {
      icon: <Users className="h-5 w-5 text-gold" />,
      label: "VERIFIED CONTACTS",
      value: "100%",
      sub: "OTP verified for authenticity",
    },
    {
      icon: <Shield className="h-5 w-5 text-gold" />,
      label: "COMPLIANCE",
      value: "100%",
      sub: "TCPA and privacy compliant",
    },
  ];

  return (
    <section className="py-24 bg-white" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark leading-tight">
              Why Insurance Agencies Choose Prospect Flow
            </h2>
            <div className="mt-10 space-y-5">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">{b}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-gold-light rounded-2xl p-6 border-l-4 border-gold"
              >
                <div className="flex items-center gap-2 mb-2">
                  {s.icon}
                  <span className="text-xs font-semibold text-gold tracking-wider">
                    {s.label}
                  </span>
                </div>
                <p className="text-4xl font-bold text-dark">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      text: "Prospect Flow transformed our lead generation process. We've seen a 250% increase in qualified leads and our sales team couldn't be happier.",
      name: "James Mitchell",
      role: "CEO, Summit Insurance Partners",
    },
    {
      text: "The OTP verification is a game-changer. We know every lead is real and ready to engage. Our conversion rates have skyrocketed.",
      name: "Sarah Chen",
      role: "VP of Sales, Premier Agency Group",
    },
    {
      text: "Best investment we've made. The automation alone saves us 20 hours per week, and the lead quality is exceptional.",
      name: "Michael Rodriguez",
      role: "Founder, Midwest Insurance Solutions",
    },
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark">
          Trusted by Leading Insurance Agencies
        </h2>
        <p className="mt-4 text-muted-foreground">
          See what our clients have to say
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white border border-border rounded-2xl p-8 text-left"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic leading-relaxed mb-6">
                "{r.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-dark">{r.name}</p>
                <p className="text-sm text-gold">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <div className="bg-white border border-border rounded-2xl p-6 px-10 inline-flex items-center gap-6">
            <img src="./assets/compare-club.jpg" alt="Compare Club" className="w-14 h-14 rounded-full shrink-0" />
            <div className="text-left">
              <p className="font-bold text-dark text-lg">Compare Club</p>
              <p className="text-sm text-muted-foreground">2 weeks ago</p>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How do you qualify leads?",
      a: "We use a quiz to weed out bad leads. We also check the phone number with a code so you know it is real.",
    },
    {
      q: "How do I receive the leads?",
      a: "Leads go to your CRM or email right away. We work with most CRMs.",
    },
    {
      q: "Are the leads just for me?",
      a: "Yes. Every lead is yours only. We do not sell it to anyone else.",
    },
    {
      q: "Can I choose my lead criteria?",
      a: "Yes. You set the criteria, and we build the form to filter leads based on what your team is looking for and send it to your CRM.",
    },
    {
      q: "What if the lead is fake?",
      a: "Fake or duplicate leads are swapped for free. We do OTP and check data to stop this.",
    },
    {
      q: "Is the lead form TCPA-compliant?",
      a: "Yes. Every form includes TCPA consent language that prospects must agree to before submitting. This confirms they understand who may contact them and how they may be contacted for follow-up.",
    },
  ];

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Everything you need to know about our lead generation service
        </p>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between py-4 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-dark">{faq.q}</span>
                <svg
                  className="h-5 w-5 shrink-0 text-muted-foreground"
                  style={{
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="pb-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              )}
              <div className="border-b border-border" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="py-24 bg-cream-dark" id="contact">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="w-20 h-20 rounded-2xl bg-gold-light flex items-center justify-center mx-auto mb-8">
          <Mail className="h-10 w-10 text-gold" />
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark">
          Ready to Get Started?
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Let's discuss how Prospect Flow can transform your insurance lead
          pipeline.
        </p>
        <p className="mt-2 text-muted-foreground">
          Reach out to our team and we'll get back to you within 24 hours.
        </p>
        <a
          href="mailto:info@prospectflow.com"
          className="inline-flex items-center gap-3 gold-gradient text-white font-semibold px-10 py-4 rounded-xl hover:opacity-90 transition-opacity text-lg mt-8"
        >
          <Mail className="h-5 w-5" />
          Email Us
        </a>
        <p className="mt-4 text-sm text-muted-foreground">
          info@prospectflow.com
        </p>
      </div>
    </section>
  );
}


function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Advantage />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
