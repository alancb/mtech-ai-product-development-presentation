'use client';

import {
  ArrowLeft,
  ArrowRight,
  Bot,
  CalendarDays,
  Check,
  Clock3,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Megaphone,
  Network,
  Palette,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TestTube2,
  Users,
} from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';

export const dynamic = 'force-static';

const SLIDE_COUNT = 11;

const sections = [
  'Opening',
  'Perspective',
  'The shift',
  'Today',
  'The shift',
  'Proposal',
  'Core',
  'Specialties',
  'Student project',
  'Takeaway',
  'The request',
];

function Eyebrow({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <span className="eyebrow-line" />
      <b>{number}</b>
      {children}
    </div>
  );
}

function TitleSlide() {
  return (
    <article className="slide title-slide">
      <Eyebrow number="01">A vision for what comes next</Eyebrow>
      <h1>Preparing students for the future of <em>AI Product Development</em></h1>
      <p className="title-deck">
        A shared AI foundation for product teams and the future of technical education in Utah.
      </p>
      <div className="presenter-line">
        <span><strong>Alan Barth</strong><small>Senior Program Director · MTECH</small></span>
      </div>
    </article>
  );
}

function AboutSlide() {
  const journey = [
    { moment: 'Started here', title: 'Built the iOS program', icon: Smartphone },
    { moment: 'Then', title: 'Office of Teaching and Learning', icon: GraduationCap },
    { moment: 'Today', title: 'Senior Program Director', icon: Users },
  ];
  const points = [
    'Started five new programs, beginning with iOS App Development.',
    'Guided faculty development in AI and its responsible, ethical use.',
    'Built a practical AI course for people who are just getting started.',
    'I love using AI to build useful things and make everyday life easier.',
  ];

  return (
    <article className="slide about-slide">
      <Eyebrow number="02">About me</Eyebrow>
      <h2 className="one-line-title">Nine years at MTECH. <em>Still building.</em></h2>
      <div className="about-journey" aria-label="My journey at MTECH">
        {journey.map(({ moment, title, icon: Icon }) => (
          <div className="about-journey-step" key={moment}>
            <div className="about-journey-marker"><Icon aria-hidden="true" /></div>
            <span>{moment}</span>
            <strong>{title}</strong>
          </div>
        ))}
      </div>
      <ul className="about-points">
        {points.map((point) => (
          <li key={point}><span aria-hidden="true" /><p>{point}</p></li>
        ))}
      </ul>
    </article>
  );
}

const teamRoles = [
  { label: 'Product', description: 'Decide what and why', icon: Target },
  { label: 'UX Design', description: 'Shape the experience', icon: Palette },
  { label: 'Development', description: 'Build the system', icon: Code2 },
  { label: 'Testing', description: 'Verify the result', icon: TestTube2 },
  { label: 'Go live', description: 'Release, support, and learn', icon: Rocket },
];

const partnerRoles = [
  { label: 'Marketing', icon: Megaphone },
  { label: 'Graphic Design', icon: Palette },
  { label: 'IT', icon: Network },
  { label: 'Data', icon: Database },
];

function HandoffSlide() {
  return (
    <article className="slide handoff-slide">
      <Eyebrow number="03">Before AI</Eyebrow>
      <div className="heading-row">
        <div>
          <h2 className="one-line-title">Product teams <em>before AI</em></h2>
          <p className="lead">A simplified view: work moves between specialties, supported by partner teams.</p>
        </div>
      </div>
      <div className="team-before-graphic">
        <div className="team-rail-label"><span>Inside the product team</span><small>Shared responsibility was narrow</small></div>
        <div className="team-rail">
          {teamRoles.map(({ label, description, icon: Icon }, index) => (
            <div className="rail-role" key={label} style={{ '--delay': `${index * 110}ms` } as React.CSSProperties}>
              <div className="rail-node">{String(index + 1).padStart(2, '0')}</div>
              <div className="rail-role-card">
                <span className="role-icon"><Icon aria-hidden="true" /></span>
                <b>{label}</b>
                <small>{description}</small>
              </div>
            </div>
          ))}
        </div>
        <div className="org-chart-divider"><span>Partner teams outside the core</span></div>
        <div className="partner-role-grid">
          {partnerRoles.map(({ label, icon: Icon }, index) => (
            <div className="partner-role-card" key={label} style={{ '--delay': `${(index + teamRoles.length) * 110}ms` } as React.CSSProperties}>
              <span className="role-icon"><Icon aria-hidden="true" /></span>
              <b>{label}</b>
            </div>
          ))}
        </div>
        <p className="org-chart-note"><GraduationCap aria-hidden="true" /><span><b>Teaching the team:</b> skills for product roles and the partner teams around them.</span></p>
      </div>
    </article>
  );
}

function SharedResponsibilitiesSlide() {
  return (
    <article className="slide responsibilities-slide">
      <Eyebrow number="05">The AI-enabled team</Eyebrow>
      <h2 className="one-line-title">Product Teams with AI</h2>
      <p className="lead">With AI, more of the work is shared. The specialties remain distinct.</p>
      <div className="responsibility-graphic-frame">
        <img
          className="responsibility-graphic"
          src="/shared-responsibilities.svg"
          alt="Product, Design, Develop, and Test each overlap shared responsibilities in Product thinking, Systems, AI development, AI agents, and Ethics."
        />
      </div>
    </article>
  );
}

const currentPrograms = [
  { name: 'Data Technology', icon: Database },
  { name: 'Digital Design', icon: Palette },
  { name: 'Digital Marketing', icon: Megaphone },
  { name: 'iOS App Development', icon: Smartphone },
  { name: 'Networking & Cybersecurity', icon: Network },
  { name: 'Software Quality Assurance', icon: TestTube2 },
  { name: 'Web Development', icon: Code2 },
];

function CurrentPortfolioSlide() {
  return (
    <article className="slide portfolio-slide">
      <Eyebrow number="04">Technology education today</Eyebrow>
      <div className="heading-row compact-heading">
        <div>
          <h2 className="one-line-title">Aligned Programs</h2>
          <p className="lead">These programs are taught today and align with how technology companies organize their work.</p>
        </div>
      </div>
      <div className="catalog-grid">
        {currentPrograms.map(({ name, icon: Icon }, index) => (
          <div className="catalog-card" key={name} style={{ '--delay': `${index * 55}ms` } as React.CSSProperties}>
            <Icon aria-hidden="true" />
            <strong>{name}</strong>
          </div>
        ))}
      </div>
    </article>
  );
}

const trackSummaries = [
  { name: 'Design', note: 'Shape what gets built', icon: Palette },
  { name: 'Web', note: 'Build for the browser', icon: Code2 },
  { name: 'iOS', note: 'Build for Apple platforms', icon: Smartphone },
];

function ProposedModelSlide() {
  return (
    <article className="slide proposal-slide">
      <Eyebrow number="06">The proposed model</Eyebrow>
      <div className="heading-row compact-heading">
        <div>
          <h2 className="one-line-title">One AI foundation. <em>Three specialties.</em></h2>
          <p className="lead">Learn to plan, build, and verify products with AI. Then go deeper in one specialty.</p>
        </div>
      </div>
      <div className="program-architecture">
        <div className="core-platform">
          <span className="platform-kicker">Every student starts here · 360 hours</span>
          <strong>Shared Foundation Core</strong>
          <div className="platform-capabilities">
            <span>Product thinking</span><span>Systems</span><span>AI development</span><span>AI agents</span><span>Ethics</span>
          </div>
        </div>
        <div className="track-connector"><span /><span /><span /></div>
        <div className="track-row">
          {trackSummaries.map(({ name, note, icon: Icon }) => (
            <div className="track-tile" key={name}>
              <span><Icon aria-hidden="true" /></span>
              <div><strong>{name}</strong><small>{note}</small></div>
              <b>360 hrs</b>
            </div>
          ))}
        </div>
      </div>
      <p className="architecture-equation"><strong>360 hours of core</strong><span>+</span><strong>360 in a specialty</strong><span>=</span><strong>720 hours · 24 credits</strong></p>
    </article>
  );
}

const coreCourses = [
  { number: '01', hours: '30h', title: 'Introduction to AI Product Development', artifact: 'First published site', icon: Sparkles },
  { number: '02', hours: '60h', title: 'Product Thinking and Planning', artifact: 'Product brief', icon: Target },
  { number: '03', hours: '60h', title: 'Software Systems and Architecture', artifact: 'System plan', icon: Layers3 },
  { number: '04', hours: '90h', title: 'Software Development with AI', artifact: 'Working product', icon: Code2 },
  { number: '05', hours: '120h', title: 'AI Agents and Automation', artifact: 'Agent workflow', icon: Bot },
];

function CoreCoursesSlide() {
  return (
    <article className="slide core-slide">
      <Eyebrow number="07">The shared core</Eyebrow>
      <div className="heading-row compact-heading">
        <div>
          <h2 className="one-line-title">Five courses. <em>One AI foundation.</em></h2>
          <p className="lead">Students learn to plan, build, and verify products with AI.</p>
        </div>
        <div className="core-total"><strong>360</strong><span>hours<br />12 credits</span></div>
      </div>
      <div className="course-grid">
        {coreCourses.map(({ number, hours, title, artifact, icon: Icon }, index) => (
            <div className="course-card" key={number} style={{ '--delay': `${index * 80}ms` } as React.CSSProperties}>
              <div className="course-top"><span>{number}</span><b>{hours}</b></div>
              <Icon aria-hidden="true" />
              <strong>{title}</strong>
              <div className="course-deliverable">
                <div><b>Student creates</b><small>{artifact}</small></div>
              </div>
            </div>
        ))}
      </div>
      <div className="responsibility-banner">
        <ShieldCheck aria-hidden="true" />
        <div><strong>Responsible AI in every course.</strong><span>Protect privacy. Check AI output. Explain decisions.</span></div>
      </div>
    </article>
  );
}

const specialties = [
  {
    name: 'Design',
    icon: Palette,
    statement: 'Shape the right product.',
    topics: ['Human-centered design', 'Prototyping + design systems', 'Research + product strategy'],
    roles: 'Product Designer · UX Designer · Junior PM',
  },
  {
    name: 'Web',
    icon: Code2,
    statement: 'Build complete web products.',
    topics: ['Modern front-end', 'Back-end + APIs', 'Cloud, security + deployment'],
    roles: 'Web Developer · Full Stack Developer',
  },
  {
    name: 'iOS',
    icon: Smartphone,
    statement: 'Ship native mobile products.',
    topics: ['Swift + SwiftUI', 'Data + cloud backends', 'TestFlight + App Store'],
    roles: 'iOS Developer · Mobile App Developer',
  },
];

function SpecialtiesSlide() {
  return (
    <article className="slide specialties-slide">
      <Eyebrow number="08">The specialties</Eyebrow>
      <div className="heading-row compact-heading">
        <div>
          <h2 className="one-line-title">Shared AI skills. <em>Specialist depth.</em></h2>
          <p className="lead">Students choose one 360-hour specialty: Design, Web, or iOS.</p>
        </div>
      </div>
      <div className="specialty-grid">
        {specialties.map(({ name, icon: Icon, statement, topics, roles }, index) => (
          <div className={`specialty-card specialty-${index + 1}`} key={name}>
            <div className="specialty-head"><span><Icon aria-hidden="true" /></span><b>{name}</b><small>12 credits</small></div>
            <h3>{statement}</h3>
            <ul>{topics.map((topic) => <li key={topic}><Check aria-hidden="true" />{topic}</li>)}</ul>
            <p>{roles}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

function StudentProjectSlide() {
  const stages = [
    { title: 'Understand', text: 'Help catering staff find recipes quickly.', icon: Target },
    { title: 'Plan', text: 'Define recipe fields, categories, and search.', icon: Layers3 },
    { title: 'Build with AI', text: 'Create a searchable recipe directory.', icon: Code2 },
    { title: 'Verify', text: 'Test search and check recipe details.', icon: ShieldCheck },
    { title: 'Automate', text: 'Suggest recipe tags for staff to review.', icon: Bot },
  ];
  const contributions = [
    { icon: Palette, label: 'Design', text: 'Make recipes easy to find and follow.' },
    { icon: Code2, label: 'Web', text: 'Build a browser-based recipe directory.' },
    { icon: Smartphone, label: 'iOS', text: 'Create a native app for kitchen use.' },
  ];
  return (
    <article className="slide student-project-slide">
      <Eyebrow number="09">From a real project to student learning</Eyebrow>
      <h2 className="one-line-title">A recipe directory. <em>Shared AI skills.</em></h2>
      <p className="lead">I built a recipe directory app for the catering department.</p>
      <div className="project-example">
        <section aria-labelledby="project-core-heading">
          <h3 className="project-section-label" id="project-core-heading">How students could build it through the AI core</h3>
          <ol className="project-stages">
            {stages.map(({ title, text, icon: Icon }) => (
              <li key={title}>
                <Icon aria-hidden="true" />
                <strong>{title}</strong>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </section>
        <section aria-labelledby="project-specialty-heading">
          <h3 className="project-section-label" id="project-specialty-heading">Then choose one specialty to go deeper</h3>
          <div className="project-specialties">
            {contributions.map(({ icon: Icon, label, text }) => (
              <div className="project-contribution" key={label}>
                <Icon aria-hidden="true" />
                <div><strong>{label}</strong><p>{text}</p></div>
              </div>
            ))}
          </div>
        </section>
        <p className="project-proof">Every student explains decisions, checks AI output, and improves the product.</p>
      </div>
    </article>
  );
}

function PilotSlide() {
  const facts = [
    { label: 'First cohort', value: 'August 2027', detail: 'Proposed start', icon: CalendarDays },
    { label: 'Time to complete', value: '9 months', detail: 'From start to finish', icon: Clock3 },
    { label: 'Program length', value: '720 hours', detail: 'Shared core + one specialty', icon: GraduationCap },
  ];
  return (
    <article className="slide pilot-slide">
      <Eyebrow number="11">The request</Eyebrow>
      <h2 className="one-line-title">A next step for <em>AI education in Utah.</em></h2>
      <p className="pilot-statement">Support moving forward with the AI Product Development program.</p>
      <div className="cohort-facts">
        {facts.map(({ label, value, detail, icon: Icon }) => (
          <div className="cohort-fact" key={label}>
            <Icon aria-hidden="true" /><span>{label}</span><strong>{value}</strong><p>{detail}</p>
          </div>
        ))}
      </div>
      <p className="pilot-sharing">MTECH would host the first cohort and share results with technical colleges across Utah.</p>
    </article>
  );
}

function TakeawaySlide() {
  return (
    <article className="slide takeaway-slide">
      <Eyebrow number="10">One idea to take home</Eyebrow>
      <h2 className="one-line-title">AI changed the work. <em>Education can adapt.</em></h2>
      <div className="takeaway-flow">
        <div className="takeaway-card">
          <span><Sparkles aria-hidden="true" /> The shift</span>
          <strong>AI expands the work every role can do.</strong>
          <small>Team boundaries now overlap.</small>
        </div>
        <ArrowRight aria-hidden="true" />
        <div className="takeaway-card takeaway-primary">
          <span><Layers3 aria-hidden="true" /> The opportunity</span>
          <strong>Build a broad shared AI core.</strong>
          <small>Then go deep in Design, Web, or iOS.</small>
        </div>
        <ArrowRight aria-hidden="true" />
        <div className="takeaway-card">
          <span><GraduationCap aria-hidden="true" /> The result</span>
          <strong>Specialists who can build across boundaries.</strong>
          <small>Ready for AI-enabled product teams.</small>
        </div>
      </div>
    </article>
  );
}

const slides = [
  <TitleSlide key="title" />,
  <AboutSlide key="about" />,
  <HandoffSlide key="handoff" />,
  <CurrentPortfolioSlide key="portfolio" />,
  <SharedResponsibilitiesSlide key="shared-responsibilities" />,
  <ProposedModelSlide key="proposal" />,
  <CoreCoursesSlide key="core" />,
  <SpecialtiesSlide key="specialties" />,
  <StudentProjectSlide key="student-project" />,
  <TakeawaySlide key="takeaway" />,
  <PilotSlide key="pilot" />,
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStart = useRef<number | null>(null);
  const stageRef = useRef<HTMLElement | null>(null);
  const shellRef = useRef<HTMLElement | null>(null);

  const goTo = useCallback((next: number) => {
    setActiveSlide(Math.min(SLIDE_COUNT - 1, Math.max(0, next)));
  }, []);

  const move = useCallback((direction: number) => {
    setActiveSlide((current) => Math.min(SLIDE_COUNT - 1, Math.max(0, current + direction)));
  }, []);

  useEffect(() => {
    const fromHash = Number(window.location.hash.replace('#slide-', ''));
    if (Number.isFinite(fromHash) && fromHash >= 1 && fromHash <= SLIDE_COUNT) setActiveSlide(fromHash - 1);
  }, []);

  useEffect(() => {
    window.history.replaceState(null, '', `#slide-${activeSlide + 1}`);
    stageRef.current?.scrollTo(0, 0);
    shellRef.current?.scrollTo(0, 0);
  }, [activeSlide]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
      if (['ArrowRight', 'PageDown', ' '].includes(event.key)) {
        event.preventDefault();
        move(1);
      }
      if (['ArrowLeft', 'PageUp'].includes(event.key)) {
        event.preventDefault();
        move(-1);
      }
      if (event.key === 'Home') goTo(0);
      if (event.key === 'End') goTo(SLIDE_COUNT - 1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goTo, move]);

  return (
    <main
      ref={shellRef}
      className="presentation-shell"
      onTouchStart={(event) => { touchStart.current = event.changedTouches[0]?.screenX ?? null; }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return;
        const distance = (event.changedTouches[0]?.screenX ?? touchStart.current) - touchStart.current;
        if (Math.abs(distance) > 48) move(distance < 0 ? 1 : -1);
        touchStart.current = null;
      }}
    >
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="presentation-header">
        <img className="brand-logo" src="/mtech-logo.svg" alt="Mountainland Technical College" />
        <p className="section-name">{sections[activeSlide]}</p>
        <div className="slide-counter">{String(activeSlide + 1).padStart(2, '0')} / {String(SLIDE_COUNT).padStart(2, '0')}</div>
      </header>

      <section ref={stageRef} className="slide-stage" aria-live="polite" aria-label={`Slide ${activeSlide + 1} of ${SLIDE_COUNT}`}>
        <div className="slide-transition" key={activeSlide}>{slides[activeSlide]}</div>
      </section>

      <footer className="presentation-footer">
        <div className="progress-track"><span style={{ width: `${((activeSlide + 1) / SLIDE_COUNT) * 100}%` }} /></div>
        {activeSlide === SLIDE_COUNT - 1 && (
          <div className="footer-signoff"><span>AI Product Development</span><b>Alan Barth · MTECH</b></div>
        )}
        <div className="slide-dots" aria-label="Choose slide">
          {slides.map((_, index) => (
            <button key={index} className={activeSlide === index ? 'active' : ''} onClick={() => goTo(index)} aria-label={`Go to slide ${index + 1}`} aria-current={activeSlide === index ? 'step' : undefined} />
          ))}
        </div>
        <div className="nav-controls">
          <Button variant="outline" size="icon-lg" onClick={() => move(-1)} disabled={activeSlide === 0} aria-label="Previous slide"><ArrowLeft /></Button>
          <Button size="icon-lg" onClick={() => move(1)} disabled={activeSlide === SLIDE_COUNT - 1} aria-label="Next slide"><ArrowRight /></Button>
        </div>
      </footer>
    </main>
  );
}
