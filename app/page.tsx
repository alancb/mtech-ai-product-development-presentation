'use client';

import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Check,
  Code2,
  Database,
  GraduationCap,
  Layers3,
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
  return (
    <article className="slide about-slide">
      <Eyebrow number="02">About me</Eyebrow>
      <div className="about-layout">
        <div className="about-copy">
          <h2>Nine years at MTECH.<br /><em>Always building.</em></h2>
          <p className="about-story">
            I started by building the iOS program, then moved into the Office of Teaching and Learning. Today I serve as Senior Program Director.
          </p>
        </div>
        <aside className="about-ai-card">
          <Sparkles aria-hidden="true" />
          <span>What keeps me curious</span>
          <h3>I love all things AI.</h3>
          <p>I use it every day to build useful things, experiment, teach, and make everyday life easier.</p>
        </aside>
      </div>
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
    <article className="slide">
      <Eyebrow number="03">Before AI</Eyebrow>
      <div className="heading-row">
        <div>
          <h2>Product teams<br /><em>before AI</em></h2>
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
          <p className="lead">AI gives everyone the same product context. Specialists reveal the detail others cannot see.</p>
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
    <article className="slide">
      <Eyebrow number="04">Our portfolio today</Eyebrow>
      <div className="heading-row compact-heading">
        <div>
          <h2>Our programs reflect<br /><em>the old team model.</em></h2>
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
    <article className="slide">
      <Eyebrow number="06">The proposed model</Eyebrow>
      <div className="heading-row compact-heading">
        <div>
          <h2>One shared foundation.<br /><em>Three clear specialties.</em></h2>
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
