'use client';

import {
  Apple,
  ArrowLeft,
  ArrowRight,
  Bot,
  Briefcase,
  Check,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Lightbulb,
  Megaphone,
  Network,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TestTube2,
  Users,
  Workflow,
  type LucideIcon,
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

type IconLabelProps = {
  icon: LucideIcon;
  children: React.ReactNode;
};

function IconLabel({ icon: Icon, children }: IconLabelProps) {
  return (
    <div className="icon-label">
      <span><Icon aria-hidden="true" /></span>
      <strong>{children}</strong>
    </div>
  );
}

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
      <h1>Preparing students for the<br /><em>future of product development</em></h1>
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
  const programs = [
    'iOS App Development',
    'Networking & Cybersecurity',
    'Data Technology',
    'Software Quality Assurance',
    'Civil Construction',
  ];

  return (
    <article className="slide split-slide">
      <div className="split-copy">
        <Eyebrow number="02">About me</Eyebrow>
        <h2>A little about<br /><em>my work.</em></h2>
        <p className="lead">
          I build programs around the way work is changing. Here is the short version.
        </p>
        <div className="credential-row">
          <IconLabel icon={Briefcase}>Senior Program Director at MTECH</IconLabel>
          <IconLabel icon={Apple}>Worked on Apple’s education team</IconLabel>
          <IconLabel icon={Smartphone}>Published an app to the App Store</IconLabel>
          <IconLabel icon={GraduationCap}>Master’s in Instructional Design &amp; Educational Technology</IconLabel>
          <IconLabel icon={Sparkles}>Always learning and building with AI</IconLabel>
        </div>
      </div>
      <aside className="program-stack" aria-label="Programs launched">
        <p className="aside-label">Programs I’ve worked on</p>
        {programs.map((program, index) => (
          <div className="program-stack-item" key={program} style={{ '--delay': `${index * 70}ms` } as React.CSSProperties}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{program}</strong>
            <Check aria-hidden="true" />
          </div>
        ))}
      </aside>
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
  { label: 'Marketing', description: 'Position and promote', icon: Megaphone },
  { label: 'Graphic Design', description: 'Shape the visual identity', icon: Palette },
  { label: 'IT', description: 'Keep systems secure', icon: Network },
  { label: 'Data', description: 'Measure outcomes', icon: Database },
];

const productSteps = ['Define', 'Shape', 'Build', 'Verify', 'Launch'];

function HandoffSlide() {
  return (
    <article className="slide">
      <Eyebrow number="03">Before AI</Eyebrow>
      <div className="heading-row">
        <div>
          <h2>Product teams<br /><em>before AI</em></h2>
          <p className="lead">Product work moved from definition to go-live in a mostly linear handoff. Partner teams supported the work from outside the core.</p>
        </div>
        <span className="era-pill">The handoff era</span>
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
              <small className="rail-step">{String(index + 1).padStart(2, '0')} · {productSteps[index]}</small>
            </div>
          ))}
        </div>
        <div className="org-chart-divider"><span>Partner teams</span><small>Connected to the product team, but outside the core</small></div>
        <div className="partner-role-grid">
          {partnerRoles.map(({ label, description, icon: Icon }, index) => (
            <div className="partner-role-card" key={label} style={{ '--delay': `${(index + teamRoles.length) * 110}ms` } as React.CSSProperties}>
              <span className="role-icon"><Icon aria-hidden="true" /></span>
              <div><b>{label}</b><small>{description}</small></div>
            </div>
          ))}
        </div>
        <p className="org-chart-note"><GraduationCap aria-hidden="true" /> We teach across this whole org chart: deep practice in product roles, plus the fluency to work well with partner teams.</p>
      </div>
    </article>
  );
}

const mapLenses = [
  { label: 'Design', detail: 'flows', position: 'lens-product' },
  { label: 'Engineering', detail: 'architecture', position: 'lens-engineering' },
  { label: 'Testing', detail: 'risks', position: 'lens-testing' },
  { label: 'Product', detail: 'outcomes', position: 'lens-product-outcomes' },
];

function MapGraphic({ modern }: { modern?: boolean }) {
  if (!modern) {
    return (
      <div className="fragment-map" aria-label="Four partially disconnected map fragments with a translation table">
        {['Product outcomes', 'Design flows', 'Engineering architecture', 'Testing risks'].map((label, index) => (
          <div className={`map-fragment fragment-${index + 1}`} key={label}>
            <span>MAP {String(index + 1).padStart(2, '0')}</span>
            <strong>{label}</strong>
            <i /><i /><i />
          </div>
        ))}
        <div className="translation-table"><span>TRANSLATION</span><strong>Compare<br />→ translate</strong></div>
      </div>
    );
  }

  return (
    <div className="shared-map" aria-label="One shared product map with four specialty lenses">
      <div className="map-grid-lines" />
      <div className="map-core-label"><span>ONE SHARED MAP</span><strong>Users · AI · Systems · Ethics</strong></div>
      <div className="map-route map-route-one" /><div className="map-route map-route-two" /><div className="map-route map-route-three" />
      <div className="map-pin map-pin-one" /><div className="map-pin map-pin-two" /><div className="map-pin map-pin-three" />
      {mapLenses.map(({ label, detail, position }) => (
        <div className={`lens ${position}`} key={label}>
          <div className="lens-glass"><strong>{label}</strong><small>{detail}</small></div>
          <span className="lens-handle" />
        </div>
      ))}
    </div>
  );
}

function SunflowerSlide() {
  return (
    <article className="slide">
      <Eyebrow number="05">The AI-enabled team</Eyebrow>
      <div className="heading-row compact-heading">
        <div>
          <h2>One shared map.<br /><em>Specialists add the resolution.</em></h2>
          <p className="lead">AI gives the whole team one common picture of the product. Expertise is how each role sees what others cannot.</p>
        </div>
      </div>
      <div className="map-comparison">
        <div className="bloom-panel">
          <div className="bloom-label"><span>Then</span><strong>Each discipline kept its own map</strong></div>
          <MapGraphic />
        </div>
        <div className="shift-arrow"><ArrowRight aria-hidden="true" /></div>
        <div className="bloom-panel bloom-panel-modern">
          <div className="bloom-label"><span>Now</span><strong>One map, four higher-resolution lenses</strong></div>
          <MapGraphic modern />
        </div>
      </div>
      <p className="metaphor-note"><Lightbulb aria-hidden="true" /> Everyone works from one shared map of the product, including users, AI, systems, and ethics, but each specialist sees it through a higher-resolution lens: design, engineering, testing, or product.</p>
    </article>
  );
}

const currentPrograms = [
  { name: 'Data Technology', lane: 'Data', icon: Database },
  { name: 'Digital Design', lane: 'Design', icon: Palette },
  { name: 'Digital Marketing', lane: 'Growth', icon: Megaphone },
  { name: 'iOS App Development', lane: 'Mobile', icon: Smartphone },
  { name: 'Networking & Cybersecurity', lane: 'Infrastructure', icon: Network },
  { name: 'Software Quality Assurance', lane: 'Testing', icon: TestTube2 },
  { name: 'Web Development', lane: 'Web', icon: Code2 },
];

function CurrentPortfolioSlide() {
  return (
    <article className="slide">
      <Eyebrow number="04">Our portfolio today</Eyebrow>
      <div className="heading-row compact-heading">
        <div>
          <h2>Our programs reflect<br /><em>the old team model.</em></h2>
          <p className="lead">Strong vertical lanes. Limited shared foundation. Students learn their part of the work, not yet the full path from product decision to go-live.</p>
        </div>
        <div className="mini-principle"><Layers3 aria-hidden="true" /><span><b>Our opportunity</b> = teach the whole path</span></div>
      </div>
      <div className="catalog-grid">
        {currentPrograms.map(({ name, lane, icon: Icon }, index) => (
          <div className="catalog-card" key={name} style={{ '--delay': `${index * 55}ms` } as React.CSSProperties}>
            <Icon aria-hidden="true" />
            <strong>{name}</strong>
            <span>{lane}</span>
          </div>
        ))}
        <div className="catalog-card catalog-summary">
          <Network aria-hidden="true" />
          <strong>The connective tissue is thin.</strong>
          <span>That is the opportunity.</span>
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
    <article className="slide">
      <Eyebrow number="06">The proposed model</Eyebrow>
      <div className="heading-row compact-heading">
        <div>
          <h2>One shared foundation.<br /><em>Three clear specialties.</em></h2>
          <p className="lead">Students first learn to think, plan, build, and verify together, then develop a distinctive craft.</p>
        </div>
        <span className="proposal-badge"><Sparkles aria-hidden="true" /> AI Product Development</span>
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
      <div className="program-facts" aria-label="Program facts">
        <div><strong>720</strong><span>Total hours</span></div>
        <div><strong>24</strong><span>Credits</span></div>
        <div><strong>2</strong><span>Stackable stages</span></div>
        <div><strong>1</strong><span>Portfolio product</span></div>
        <div><strong>∞</strong><span>Ethics woven through</span></div>
      </div>
      <p className="footnote">A focused redesign where AI has compressed team boundaries fastest, not a claim that every existing program disappears.</p>
    </article>
  );
}

const coreCourses = [
  { number: '01', hours: '30h', title: 'Introduction to AI Product Development', outcome: 'Shared language + first published site', icon: Sparkles },
  { number: '02', hours: '60h', title: 'Product Thinking and Planning', outcome: 'A problem worth solving + product brief', icon: Target },
  { number: '03', hours: '60h', title: 'Software Systems and Architecture', outcome: 'A plan for how the system works', icon: Layers3 },
  { number: '04', hours: '90h', title: 'Software Development with AI', outcome: 'A tested, working product', icon: Code2 },
  { number: '05', hours: '120h', title: 'AI Agents and Automation', outcome: 'A guarded system that can take action', icon: Bot },
];

function CoreCoursesSlide() {
  return (
    <article className="slide">
      <Eyebrow number="07">The shared core</Eyebrow>
      <div className="heading-row compact-heading">
        <div>
          <h2>Five courses build<br /><em>the new center.</em></h2>
          <p className="lead">The largest investment is the common capability every modern product teammate needs.</p>
        </div>
        <div className="core-total"><strong>360</strong><span>hours<br />12 credits</span></div>
      </div>
      <div className="course-grid">
        {coreCourses.map(({ number, hours, title, outcome, icon: Icon }, index) => {
          const step = learningChain[index];
          const StepIcon = step.icon;
          return (
            <div className="course-card" key={number} style={{ '--delay': `${index * 80}ms` } as React.CSSProperties}>
              <div className="course-top"><span>{number}</span><b>{hours}</b></div>
              <Icon aria-hidden="true" />
              <strong>{title}</strong>
              <small className="course-outcome">{outcome}</small>
              <div className="course-deliverable">
                <span><StepIcon aria-hidden="true" /></span>
                <div><b>{step.label}</b><small>{step.artifact}</small></div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="responsibility-banner">
        <ShieldCheck aria-hidden="true" />
        <div><strong>Ethics is not a separate unit.</strong><span>Privacy, verification, guardrails, and accountability live inside the work where decisions are made.</span></div>
      </div>
    </article>
  );
}

const learningChain = [
  { label: 'Understand', artifact: 'Published site', icon: GraduationCap },
  { label: 'Frame', artifact: 'Product brief', icon: Target },
  { label: 'Design', artifact: 'System plan', icon: Layers3 },
  { label: 'Build', artifact: 'Working product', icon: Code2 },
  { label: 'Automate', artifact: 'Agent workflow', icon: Bot },
];

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
    <article className="slide">
      <Eyebrow number="08">The specialties</Eyebrow>
      <div className="heading-row compact-heading">
        <div>
          <h2>Same center.<br /><em>Different edge.</em></h2>
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
    <article className="slide">
      <Eyebrow number="09">The graduate</Eyebrow>
      <h2>Not a generalist.<br /><em>A specialist who sees the whole.</em></h2>
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
      <h2>Let us take the<br /><em>first measured step.</em></h2>
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
      <h2>Work changed.<br /><em>Our program model should, too.</em></h2>
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
      <div className="closing-line"><span>AI Product Development</span><b>Alan Barth · MTECH</b></div>
    </article>
  );
}

const slides = [
  <TitleSlide key="title" />,
  <AboutSlide key="about" />,
  <HandoffSlide key="handoff" />,
  <CurrentPortfolioSlide key="portfolio" />,
  <SunflowerSlide key="sunflower" />,
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
