import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Sponsors from '@/components/Sponsors';
import ScrollAnimations from '@/components/ScrollAnimations';
import ProgramClient from './ProgramClient';
import { getCurriculum } from '@/lib/content/queries';

export const metadata = { title: 'Our Programs - Code 4 Community' };
export const revalidate = 30;

export default async function ProgramPage() {
  const modules = await getCurriculum();
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

        <ProgramClient modules={modules} />
      </main>
      <Sponsors />
      <Footer />
    </>
  );
}
