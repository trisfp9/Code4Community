'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Sponsors from '@/components/Sponsors';
import ScrollAnimations from '@/components/ScrollAnimations';

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);

const features = ['Hands-on Project', 'Mentorship Support', 'Certificate of Completion'];

function Module({ num, title, img, alt, icon, description, reverse = false }: {
  num: number; title: string; img: string; alt: string; icon: React.ReactNode;
  description: string; reverse?: boolean;
}) {
  return (
    <div className={`module-card fade-in${reverse ? ' reverse' : ''}`}>
      <div className="module-image">
        <img src={img} alt={alt} />
        <div className="module-icon">{icon}</div>
      </div>
      <div className="module-content">
        <div className="module-number">
          <span>{num}</span>
          <h3>{title}</h3>
        </div>
        <p>{description}</p>
        <ul className="module-features">
          {features.map(f => (
            <li key={f}><ChevronRight /> {f}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ProgramPage() {
  const [activeTab, setActiveTab] = useState<'c1' | 'c2'>('c1');

  return (
    <>
      <Navbar solid />
      <ScrollAnimations />
      <main style={{ paddingBottom: '6rem' }}>
        <section className="program-header">
          <div className="program-header-overlay"></div>
          <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <h1 className="fade-in" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Programs</h1>
            <p className="fade-in stagger-1" style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '42rem', margin: '0 auto' }}>
              Structured learning paths designed to take students from curious beginners to confident creators.
            </p>
          </div>
        </section>

        <section className="container" style={{ padding: '4rem 1rem' }}>
          <div className="tabs-container">
            <div className="tabs">
              <button className={`tab-btn${activeTab === 'c1' ? ' active' : ''}`} onClick={() => setActiveTab('c1')}>
                Curriculum 1 (Gr 6-)
              </button>
              <button className={`tab-btn${activeTab === 'c2' ? ' active' : ''}`} onClick={() => setActiveTab('c2')}>
                Curriculum 2 (Gr 7+)
              </button>
            </div>
          </div>

          <div className={`tab-content${activeTab === 'c1' ? ' active' : ''}`}>
            <div className="tab-header fade-in">
              <h2>Curriculum 1</h2>
              <p>Foundation program for Grade 6 and below</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              <Module num={1} title="Basic Computer Skills"
                img="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80" alt="Basic Computer Skills"
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>}
                description="Learn fundamental computer operations, file management, typing skills, and digital safety. Build confidence with technology and establish a strong foundation for all future learning."
              />
              <Module num={2} title="Scratch Programming Fundamentals" reverse
                img="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80" alt="Scratch Programming"
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>}
                description="Introduction to programming concepts using Scratch's visual block-based interface. Learn about loops, conditionals, variables, and basic programming logic through fun, interactive projects."
              />
              <Module num={3} title="Introduction to Game Design"
                img="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80" alt="Game Design"
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><rect width="20" height="12" x="2" y="6" rx="2"/></svg>}
                description="Create your first interactive games and animations. Learn about sprites, backgrounds, sound effects, and user interaction while developing creative problem-solving skills."
              />
            </div>
          </div>

          <div className={`tab-content${activeTab === 'c2' ? ' active' : ''}`}>
            <div className="tab-header fade-in">
              <h2>Curriculum 2</h2>
              <p>Advanced program for Grade 7 and above</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              <Module num={1} title="Scratch Programming"
                img="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" alt="Scratch Programming"
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>}
                description="Advanced Scratch programming with complex algorithms, data structures, and sophisticated project development. Master advanced programming concepts through hands-on coding."
              />
              <Module num={2} title="Introduction to Game Design" reverse
                img="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80" alt="Game Design"
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><rect width="20" height="12" x="2" y="6" rx="2"/></svg>}
                description="Design and develop more complex games with advanced mechanics, scoring systems, and multiple levels. Learn game design principles and user experience concepts."
              />
              <Module num={3} title="AI Literacy"
                img="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80" alt="AI Literacy"
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/></svg>}
                description="Explore artificial intelligence concepts, machine learning basics, and AI tools. Learn how to effectively use AI in creative projects and understand its impact on society."
              />
              <Module num={4} title="Web Development" reverse
                img="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80" alt="Web Development"
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>}
                description="Build your first websites using HTML, CSS, and modern web development tools. Create personal portfolios and interactive web applications to showcase your skills."
              />
            </div>
          </div>
        </section>
      </main>
      <Sponsors />
      <Footer />
    </>
  );
}
