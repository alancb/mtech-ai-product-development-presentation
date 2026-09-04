'use client';

import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Bot,
  Check,
  Code2,
  Compass,
  Database,
  GraduationCap,
  Layers3,
  Megaphone,
  Network,
  Palette,
  Pencil,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TestTube2,
  Users,
  Workflow,
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
  'Outcomes',
  'Pilot',
  'Takeaway',
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
      <h1>Preparing students for the <em>future of product development</em></h1>
      <p className="title-deck">
        A shared foundation for AI-powered product teams, and a new model for technical education.
      </p>
      <div className="presenter-line">
        <span><strong>Alan Barth</strong><small>Senior Program Director · MTECH</small></span>
      </div>
    </article>
  );
}

function AboutSlide() {
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
      <p className="about-intro">Today I serve as Senior Program Director after working across program development and the Office of Teaching and Learning.</p>
      <ul className="about-points">
        {points.map((point, index) => (
          <li key={point}><span>{String(index + 1).padStart(2, '0')}</span><p>{point}</p></li>
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
          <p className="lead">Work moved through a mostly linear handoff. Partner teams supported the product from outside the core.</p>
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
        <p className="org-chart-note"><GraduationCap aria-hidden="true" /><span><b>What we teach:</b> every core product role, plus how to work with the partner teams around it.</span></p>
      </div>
    </article>
  );
}

function DeskDiagram() {
  const desks = [
    { label: 'Product', artifact: 'roadmap', position: 'position-product' },
    { label: 'Design', artifact: 'wireframe', position: 'position-design' },
    { label: 'Develop', artifact: 'code', position: 'position-develop' },
    { label: 'Test', artifact: 'checklist', position: 'position-test' },
  ];

  return (
    <div className="desk-diagram" aria-label="Four separate desks connected to a small handoff tray">
      <svg className="desk-connections" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <marker id="handoff-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 8 4 L 0 8 z" />
          </marker>
        </defs>
        <line x1="25" y1="23" x2="47" y2="46" markerEnd="url(#handoff-arrow)" />
        <line x1="53" y1="46" x2="75" y2="23" markerEnd="url(#handoff-arrow)" />
        <line x1="25" y1="77" x2="47" y2="54" markerEnd="url(#handoff-arrow)" />
        <line x1="53" y1="54" x2="75" y2="77" markerEnd="url(#handoff-arrow)" />
      </svg>
      {desks.map(({ label, artifact, position }) => (
        <div className={`literal-desk ${position}`} key={label}>
          <span className="desk-role-label">{label}</span>
          <div className="desk-surface">
            <div className={`partial-artifact ${artifact}-artifact`} aria-label={`${label} partial work product`}>
              {artifact === 'roadmap' && <><i /><i /><i /></>}
              {artifact === 'wireframe' && <><b /><i /><i /></>}
              {artifact === 'code' && <><b /><i /><i /><i /></>}
              {artifact === 'checklist' && <><i /><i /><i /></>}
            </div>
          </div>
          <span className="desk-chair" aria-hidden="true" />
        </div>
      ))}
      <div className="handoff-tray"><span>Handoffs</span><i aria-hidden="true" /></div>
    </div>
  );
}

function SharedWorkbenchDiagram() {
  return (
    <div className="shared-workbench-diagram" aria-label="Four specialists working on one shared product workbench">
      <div className="literal-workbench">
        <div className="shared-fluency-area">
          <strong>Shared product fluency</strong>
          <span>AI · systems · ethics · user needs</span>
        </div>
        <div className="shared-prototype" aria-label="Shared product prototype">
          <div className="prototype-screen"><b /><i /><i /></div>
          <div className="prototype-system"><i /><i /><i /><span /><span /></div>
          <div className="prototype-flow"><i /><span /><i /><span /><i /></div>
        </div>

        <div className="specialist-station station-product">
          <span className="station-label">Product</span>
          <div className="roadmap-tool"><Compass aria-hidden="true" /><i /><i /><i /></div>
        </div>
        <div className="specialist-station station-design">
          <span className="station-label">Design</span>
          <div className="design-tool"><div><b /><i /><i /></div><Pencil aria-hidden="true" /></div>
        </div>
        <div className="specialist-station station-develop">
          <span className="station-label">Develop</span>
          <div className="code-tool"><Code2 aria-hidden="true" /><i /><i /><i /></div>
        </div>
        <div className="specialist-station station-test">
          <span className="station-label">Test</span>
          <div className="test-tool"><div><i /><i /><i /></div><Search aria-hidden="true" /></div>
        </div>
      </div>
    </div>
  );
}

function WorkbenchSlide() {
  return (
    <article className="slide workbench-slide">
      <Eyebrow number="05">The AI-enabled team</Eyebrow>
      <h2 className="one-line-title">Separate desks. <em>Shared workbench.</em></h2>
      <div className="workbench-comparison">
        <div className="workbench-panel workbench-then">
          <div className="workbench-panel-copy"><span>Then</span><strong>Separate work,<br />small handoff point</strong></div>
          <DeskDiagram />
        </div>
        <div className="workbench-shift" aria-hidden="true"><ArrowDown /></div>
        <div className="workbench-panel workbench-now">
          <div className="workbench-panel-copy"><span>Now</span><strong>One product,<br />shared workbench</strong></div>
          <SharedWorkbenchDiagram />
        </div>
      </div>
      <p className="workbench-caption">Instead of passing work between separate roles, the team shapes one product together—sharing context while bringing different specialist tools.</p>
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
      <Eyebrow number="04">Our portfolio today</Eyebrow>
      <div className="heading-row compact-heading">
        <div>
          <h2 className="one-line-title">Our programs reflect <em>the old team model.</em></h2>
          <p className="lead">Strong vertical lanes. Students learn one part of the work, not the full path from product decision to launch.</p>
        </div>
      </div>
      <div className="catalog-grid">
        {currentPrograms.map(({ name, icon: Icon }, index) => (
          <div className="catalog-card" key={name} style={{ '--delay': `${index * 55}ms` } as React.CSSProperties}>
            <Icon aria-hidden="true" />
            <strong>{name}</strong>
          </div>
        ))}
        <div className="catalog-card catalog-summary">
          <Network aria-hidden="true" />
          <strong>We teach the parts, not yet the shared path.</strong>
        </div>
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
          <h2 className="one-line-title">One shared foundation. <em>Three clear specialties.</em></h2>
          <p className="lead">Students first learn to think, plan, build, and verify together, then develop a distinctive craft.</p>
        </div>
      </div>
      <div className="program-architecture">
        <div className="core-platform">
          <span className="platform-kicker">Every student starts here · 360 hours</span>
          <strong>Shared Foundation Core</strong>
          <div className="platform-capabilities">
            <span>Product thinking</span><span>Systems</span><span>AI development</span><span>Agents</span><span>Ethics</span>
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
      <p className="architecture-equation"><strong>360 hours together</strong><span>+</span><strong>360 hours specialized</strong><span>=</span><strong>one complete graduate</strong></p>
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
          <h2 className="one-line-title">Five courses build <em>the new center.</em></h2>
          <p className="lead">The largest investment is the common capability every modern product teammate needs.</p>
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
        <div><strong>Ethics is practiced, not isolated.</strong><span>Privacy, verification, guardrails, and accountability live inside every course.</span></div>
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
          <h2 className="one-line-title">Same center. <em>Different edge.</em></h2>
          <p className="lead">Each 360-hour track turns shared fluency into a distinct, employable craft.</p>
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

function OutcomesSlide() {
  const shared = ['Frame a user problem', 'Plan the system', 'Build with AI', 'Test what AI produces', 'Design responsible automation'];
  const distinct = [
    { icon: Palette, label: 'Design', value: 'Human judgment + experience craft' },
    { icon: Code2, label: 'Web', value: 'Full-stack engineering craft' },
    { icon: Smartphone, label: 'iOS', value: 'Native mobile engineering craft' },
  ];
  return (
    <article className="slide outcomes-slide">
      <Eyebrow number="09">The graduate</Eyebrow>
      <h2 className="one-line-title">A specialist who sees the whole.</h2>
      <div className="graduate-layout">
        <div className="shared-capability">
          <span className="capability-label"><Users aria-hidden="true" /> Every graduate can</span>
          <div className="capability-list">{shared.map((item) => <span key={item}><Check aria-hidden="true" />{item}</span>)}</div>
        </div>
        <div className="plus-mark">+</div>
        <div className="distinct-capability">
          <span className="capability-label"><Sparkles aria-hidden="true" /> One distinctive edge</span>
          {distinct.map(({ icon: Icon, label, value }) => (
            <div className="distinct-row" key={label}><Icon aria-hidden="true" /><b>{label}</b><span>{value}</span></div>
          ))}
        </div>
      </div>
    </article>
  );
}

function PilotSlide() {
  const steps = [
    { number: '01', label: 'Build', text: 'Launch the pilot at MTECH.', icon: Rocket },
    { number: '02', label: 'Measure', text: 'Track learning, completion, and employer response.', icon: Search },
    { number: '03', label: 'Share', text: 'Report honestly on what worked, and what did not.', icon: Workflow },
  ];
  return (
    <article className="slide pilot-slide">
      <Eyebrow number="10">The invitation</Eyebrow>
      <h2 className="one-line-title">Let us take the <em>first measured step.</em></h2>
      <p className="pilot-statement">This is not a request for every college to adopt the model today. It is an offer for MTECH to test it, learn from it, and share the evidence.</p>
      <div className="pilot-steps">
        {steps.map(({ number, label, text, icon: Icon }, index) => (
          <div className="pilot-step" key={number} style={{ '--delay': `${index * 110}ms` } as React.CSSProperties}>
            <span className="pilot-number">{number}</span><Icon aria-hidden="true" /><b>{label}</b><p>{text}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

function TakeawaySlide() {
  return (
    <article className="slide takeaway-slide">
      <Eyebrow number="11">One idea to take home</Eyebrow>
      <h2 className="one-line-title">Work changed. <em>Our program model should, too.</em></h2>
      <div className="takeaway-flow">
        <div className="takeaway-card">
          <span><Sparkles aria-hidden="true" /> The shift</span>
          <strong>AI expands the work every role can do.</strong>
          <small>Team boundaries now overlap.</small>
        </div>
        <ArrowRight aria-hidden="true" />
        <div className="takeaway-card takeaway-primary">
          <span><Layers3 aria-hidden="true" /> Our response</span>
          <strong>Build a broad shared core.</strong>
          <small>Then go deep in Design, Web, or iOS.</small>
        </div>
        <ArrowRight aria-hidden="true" />
        <div className="takeaway-card">
          <span><GraduationCap aria-hidden="true" /> The result</span>
          <strong>Specialists who can build across boundaries.</strong>
          <small>Ready for the way product teams work now.</small>
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
  <WorkbenchSlide key="workbench" />,
  <ProposedModelSlide key="proposal" />,
  <CoreCoursesSlide key="core" />,
  <SpecialtiesSlide key="specialties" />,
  <OutcomesSlide key="outcomes" />,
  <PilotSlide key="pilot" />,
  <TakeawaySlide key="takeaway" />,
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStart = useRef<number | null>(null);

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

      <section className="slide-stage" aria-live="polite" aria-label={`Slide ${activeSlide + 1} of ${SLIDE_COUNT}`}>
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
