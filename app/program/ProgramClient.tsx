'use client';

import { useState } from 'react';
import Icon from '@/components/Icon';
import type { CurriculumModule } from '@/lib/types';

function Module({ num, mod, reverse }: { num: number; mod: CurriculumModule; reverse: boolean }) {
  return (
    <div className={`module-card fade-in${reverse ? ' reverse' : ''}`}>
      <div className="module-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={mod.image_url || ''} alt={mod.title} />
        <div className="module-icon"><Icon name={mod.icon} /></div>
      </div>
      <div className="module-content">
        <div className="module-number">
          <span>{num}</span>
          <h3>{mod.title}</h3>
        </div>
        <p>{mod.description}</p>
        <ul className="module-features">
          {mod.features.map((f) => (
            <li key={f}><Icon name="chevronRight" size={16} /> {f}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ProgramClient({ modules }: { modules: CurriculumModule[] }) {
  const [activeTab, setActiveTab] = useState<'c1' | 'c2'>('c1');
  const c1 = modules.filter((m) => m.curriculum === 'c1');
  const c2 = modules.filter((m) => m.curriculum === 'c2');

  return (
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
          {c1.map((mod, i) => <Module key={mod.id} num={i + 1} mod={mod} reverse={i % 2 === 1} />)}
        </div>
      </div>

      <div className={`tab-content${activeTab === 'c2' ? ' active' : ''}`}>
        <div className="tab-header fade-in">
          <h2>Curriculum 2</h2>
          <p>Advanced program for Grade 7 and above</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {c2.map((mod, i) => <Module key={mod.id} num={i + 1} mod={mod} reverse={i % 2 === 1} />)}
        </div>
      </div>
    </section>
  );
}
