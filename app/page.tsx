/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div className="noise min-h-screen bg-[#0b1120] text-slate-300">
      {/* ───── Navigation ───── */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-sky-500/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold tracking-tight text-white">
            S<span className="text-sky-400">.</span>S
          </a>
          <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <a href="#about" className="transition hover:text-sky-400">About</a>
            <a href="#skills" className="transition hover:text-sky-400">Skills</a>
            <a href="#experience" className="transition hover:text-sky-400">Experience</a>
            <a href="#projects" className="transition hover:text-sky-400">Projects</a>
            <a href="#education" className="transition hover:text-sky-400">Education</a>
            <a
              href="/shiksha-cv.docx"
              download
              className="rounded-lg border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sky-300 transition hover:bg-sky-500/20"
            >
              Download CV
            </a>
            <a
              href="https://linkedin.com/in/shikshasinha"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-sky-500 px-4 py-1.5 text-white transition hover:bg-sky-400"
            >
              Connect
            </a>
          </div>
        </div>
      </nav>

      {/* ───── Hero ───── */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6">
        {/* Ambient orbs */}
        <div className="pointer-events-none absolute top-20 left-1/4 h-[600px] w-[600px] rounded-full bg-sky-600/10 blur-[150px]" />
        <div className="pointer-events-none absolute -bottom-20 right-1/4 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[130px]" />
        <div className="pointer-events-none absolute top-1/2 right-10 h-[300px] w-[300px] rounded-full bg-purple-600/8 blur-[100px]" />

        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-5 lg:items-center">
          {/* Text side */}
          <div className="lg:col-span-3 animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/5 px-4 py-1.5 text-sm text-sky-300">
              <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
              Open to opportunities
            </div>
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Shiksha<br />
              <span className="gradient-text">Sinha</span>
            </h1>
            <p className="mt-5 text-lg text-slate-400 sm:text-xl">
              Electrical &amp; Electronics Engineering Student
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              Passionate about embedded systems, robotics, industrial automation, and PCB design. Building hardware solutions that bridge the digital and physical world.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/shiksha-cv.docx"
                download
                className="group inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400 hover:shadow-sky-400/30"
              >
                <svg className="h-4 w-4 transition group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Download CV
              </a>
              <a
                href="https://linkedin.com/in/shikshasinha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/50 px-6 py-3 text-sm font-medium text-slate-300 transition hover:border-sky-500/40 hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/shikshasinhaa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/50 px-6 py-3 text-sm font-medium text-slate-300 transition hover:border-sky-500/40 hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
            </div>
          </div>

          {/* Photo side */}
          <div className="flex justify-center lg:col-span-2 animate-fade-in-up animation-delay-200">
            <div className="relative animate-float">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-sky-500/20 via-indigo-500/20 to-purple-500/20 blur-2xl" />
              {/* Inner gradient border */}
              <div className="relative rounded-full bg-gradient-to-br from-sky-400 via-indigo-500 to-purple-500 p-[3px]">
                <img
                  src="/profile.jpeg"
                  alt="Shiksha Sinha"
                  className="h-56 w-56 rounded-full object-cover sm:h-72 sm:w-72"
                />
              </div>
              {/* Floating decorative dots */}
              <div className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-sky-400/60 blur-[2px]" />
              <div className="absolute -bottom-1 -left-3 h-3 w-3 rounded-full bg-purple-400/60 blur-[2px]" />
            </div>
          </div>
        </div>
      </section>

      {/* ───── Skills (Bento Grid) ───── */}
      <section id="skills" className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeader label="Expertise" title="Skills & Technologies" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <SkillCard
              icon={
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/></svg>
              }
              title="Languages"
              items={["Embedded C", "C++", "Python", "Java", "Verilog"]}
            />
            <SkillCard
              icon={
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 21h18"/></svg>
              }
              title="Tools & Platforms"
              items={["AutoCAD", "Creo", "Proteus", "TinkerCAD", "MATLAB", "Cadence", "DSCH", "Arduino IDE", "Altium Designer"]}
            />
            <SkillCard
              icon={
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/></svg>
              }
              title="Soft Skills"
              items={["Problem-Solving", "Public Speaking", "Presentation Skills", "Decision-Making", "Team Management", "Team Leadership"]}
            />
          </div>
        </div>
      </section>

      {/* ───── Experience (Timeline) ───── */}
      <section id="experience" className="relative py-24 px-6">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-gradient-to-b from-sky-600/[0.03] to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <SectionHeader label="Career" title="Internship Experience" />
          <div className="mt-12 space-y-6">
            <ExperienceCard
              role="Student Intern"
              company="AutomateX"
              subtitle="PLC based training for Industrial Automation"
              period="Jun 2025 – Jul 2025"
              bullets={[
                "Learnt about development of ladder logic structure for the working of industrial automation setups.",
                "Used tech stacks: LogixPro, TwidoSuite, Ladder Logic",
              ]}
              tags={["LogixPro", "TwidoSuite", "Ladder Logic", "PLC"]}
            />
            <ExperienceCard
              role="Electronics Intern"
              company="V P Electronics"
              subtitle="Mangolpuri, Delhi"
              period="Jun 2025 – Jul 2025"
              bullets={[
                "Worked on various projects involving PCB and module design.",
                "Assisted in manufacturing and testing of SMD boards including master cards and display cards.",
              ]}
              tags={["PCB Design", "SMD", "Testing", "Module Design"]}
            />
            <ExperienceCard
              role="Student Trainee"
              company="Teachnook"
              subtitle="Teachscape Online Learning Services Pvt. Ltd."
              period="Jun 2024 – Aug 2025"
              bullets={[
                "Attended an online training program on embedded systems organized by TNK Cognizance IIT Roorkee in collaboration with Teachnook.",
                "Made several minor projects related to embedded systems.",
              ]}
              tags={["Embedded Systems", "IIT Roorkee", "IoT"]}
            />
          </div>
        </div>
      </section>

      {/* ───── Projects ───── */}
      <section id="projects" className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeader label="Work" title="Featured Projects" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Obstacle Avoidance Robot"
              date="Jan 2025"
              description="Created an obstacle avoidance robot car using an ultrasonic sensor embedded with Arduino IDE microcontroller."
              tags={["C++", "Arduino IDE", "Ultrasonic Sensor"]}
              accentFrom="from-sky-500"
              accentTo="to-cyan-400"
            />
            <ProjectCard
              title="Home Security System"
              date="Nov 2024"
              description="Developed a home security system using GSM, PIR and ultrasonic sensors embedded with Arduino IDE microcontroller."
              tags={["C++", "Arduino IDE", "GSM", "Soldering"]}
              accentFrom="from-indigo-500"
              accentTo="to-purple-400"
            />
            <ProjectCard
              title="Solar Tracking System"
              date="Sep 2025"
              description="Built a dual axis solar tracking system using solar panel, LDR modules and motor driver module."
              tags={["LDR Module", "Solar Panel", "Motor Driver"]}
              accentFrom="from-emerald-500"
              accentTo="to-teal-400"
            />
          </div>
        </div>
      </section>

      {/* ───── Certifications ───── */}
      <section id="certifications" className="relative py-24 px-6">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-full bg-gradient-to-b from-indigo-600/[0.03] to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <SectionHeader label="Credentials" title="Certifications" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <CertCard title="MATLAB Onramp" issuer="MathWorks" date="Mar 2025" />
            <CertCard title="PCB Design with Altium Designer" issuer="Altium" date="Feb 2025" />
            <CertCard title="Database Management System" issuer="NPTEL" date="Nov 2025" />
          </div>
        </div>
      </section>

      {/* ───── Achievements ───── */}
      <section id="achievements" className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeader label="Recognition" title="Achievements" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AchievementCard
              title="Techmarathon Runner Up"
              org="Lovely Professional University"
              date="Nov 2024"
              emoji="🏆"
            />
            <AchievementCard
              title="Spanish Topper"
              org="Presidium School Indirapuram"
              date="Apr 2021"
              emoji="🌟"
            />
            <AchievementCard
              title="IMO Bronze Medalist"
              org="Presidium School Indirapuram"
              date="Jan 2021"
              emoji="🥉"
            />
          </div>
        </div>
      </section>

      {/* ───── Education ───── */}
      <section id="education" className="relative py-24 px-6">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-gradient-to-b from-purple-600/[0.03] to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <SectionHeader label="Academics" title="Education" />
          <div className="mt-12 space-y-4">
            <EducationCard
              institution="Lovely Professional University"
              location="Phagwara, Punjab"
              degree="Bachelor of Technology – Electrical and Electronics Engineering"
              score="CGPA: 8.73"
              period="Aug 2023 – Present"
              highlight
            />
            <EducationCard
              institution="Presidium School"
              location="Ghaziabad, Uttar Pradesh"
              degree="Intermediate (Class XII)"
              score="Percentage: 86%"
              period="May 2021 – May 2022"
            />
            <EducationCard
              institution="Presidium School"
              location="Ghaziabad, Uttar Pradesh"
              degree="Matriculation (Class X)"
              score="Percentage: 95%"
              period="Mar 2020 – Apr 2021"
            />
          </div>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer className="relative border-t border-sky-500/10 py-16 px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
          <h2 className="text-2xl font-bold text-white">Let&apos;s Connect</h2>
          <p className="max-w-md text-slate-500">
            I&apos;m always open to discussing new projects, ideas, or opportunities in embedded systems and electronics engineering.
          </p>
          <div className="flex gap-3">
            <a
              href="/shiksha-cv.docx"
              download
              className="glass glass-hover rounded-xl p-3 text-sky-400 transition"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </a>
            <a
              href="https://linkedin.com/in/shikshasinha"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover rounded-xl p-3 text-slate-400 transition hover:text-sky-400"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a
              href="https://github.com/shikshasinhaa"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover rounded-xl p-3 text-slate-400 transition hover:text-sky-400"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
          <p className="mt-6 text-xs text-slate-600">
            © 2026 Shiksha Sinha. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ─────────────────────── Components ─────────────────────── */

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div>
      <span className="inline-block rounded-lg bg-sky-500/10 border border-sky-500/20 px-3 py-1 text-xs font-medium uppercase tracking-widest text-sky-400">
        {label}
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function SkillCard({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="glass glass-hover group rounded-2xl p-6 transition">
      <div className="mb-4 inline-flex rounded-xl bg-sky-500/10 p-3 text-sky-400">
        {icon}
      </div>
      <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-lg border border-slate-700/60 bg-slate-800/40 px-3 py-1 text-xs text-slate-300 transition group-hover:border-sky-500/20"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({
  role,
  company,
  subtitle,
  period,
  bullets,
  tags,
}: {
  role: string;
  company: string;
  subtitle: string;
  period: string;
  bullets: string[];
  tags: string[];
}) {
  return (
    <div className="timeline-line flex gap-5">
      {/* Timeline dot */}
      <div className="mt-1 flex shrink-0 flex-col items-center">
        <div className="h-10 w-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
          <div className="h-2.5 w-2.5 rounded-full bg-sky-400" />
        </div>
      </div>
      {/* Card */}
      <div className="glass glass-hover flex-1 rounded-2xl p-6 transition">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">{role}</h3>
            <p className="text-sm font-medium text-sky-400">{company}</p>
            <p className="text-sm text-slate-500">{subtitle}</p>
          </div>
          <span className="mt-1 shrink-0 rounded-lg bg-slate-800/60 border border-slate-700/40 px-3 py-1 text-xs text-slate-400 sm:mt-0">
            {period}
          </span>
        </div>
        <ul className="mt-4 space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-400">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500/60" />
              {b}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-sky-500/10 border border-sky-500/15 px-2.5 py-0.5 text-xs font-medium text-sky-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  date,
  description,
  tags,
  accentFrom,
  accentTo,
}: {
  title: string;
  date: string;
  description: string;
  tags: string[];
  accentFrom: string;
  accentTo: string;
}) {
  return (
    <div className="glass glass-hover group relative overflow-hidden rounded-2xl p-6 transition">
      {/* Top gradient accent line */}
      <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${accentFrom} ${accentTo} opacity-60 transition group-hover:opacity-100`} />
      <div className="mb-4 flex items-center justify-between">
        <div className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${accentFrom} ${accentTo}`} />
        <span className="text-xs text-slate-500">{date}</span>
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-400">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-lg border border-slate-700/60 bg-slate-800/40 px-2.5 py-0.5 text-xs text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function CertCard({
  title,
  issuer,
  date,
}: {
  title: string;
  issuer: string;
  date: string;
}) {
  return (
    <div className="glass glass-hover group flex items-start gap-4 rounded-2xl p-5 transition">
      <div className="mt-0.5 shrink-0 rounded-xl bg-indigo-500/10 p-2.5 text-indigo-400">
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"/></svg>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="text-xs text-slate-500">{issuer} · {date}</p>
      </div>
    </div>
  );
}

function AchievementCard({
  title,
  org,
  date,
  emoji,
}: {
  title: string;
  org: string;
  date: string;
  emoji: string;
}) {
  return (
    <div className="glass glass-hover group flex items-start gap-4 rounded-2xl p-5 transition">
      <span className="mt-0.5 text-2xl">{emoji}</span>
      <div>
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="text-xs text-slate-500">{org} · {date}</p>
      </div>
    </div>
  );
}

function EducationCard({
  institution,
  location,
  degree,
  score,
  period,
  highlight,
}: {
  institution: string;
  location: string;
  degree: string;
  score: string;
  period: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`glass glass-hover group relative rounded-2xl p-6 transition ${
        highlight
          ? "border-sky-500/20 bg-gradient-to-r from-sky-500/[0.06] to-transparent"
          : ""
      }`}
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">{institution}</h3>
          <p className="text-sm text-slate-500">{location}</p>
        </div>
        <span className="mt-1 shrink-0 rounded-lg bg-slate-800/60 border border-slate-700/40 px-3 py-1 text-xs text-slate-400 sm:mt-0">
          {period}
        </span>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <p className="text-sm text-slate-300">{degree}</p>
        <span className="rounded-lg bg-sky-500/10 border border-sky-500/20 px-2.5 py-0.5 text-xs font-semibold text-sky-300">
          {score}
        </span>
      </div>
    </div>
  );
}
