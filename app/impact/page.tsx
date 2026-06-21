import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Sponsors from '@/components/Sponsors';
import ScrollAnimations from '@/components/ScrollAnimations';
import ImpactClient from './ImpactClient';
import { getStats, getSessions, getAwards } from '@/lib/content/queries';

export const metadata = { title: 'Our Impact - Code 4 Community' };
export const revalidate = 30;

export default async function ImpactPage() {
  const [stats, sessions, awards] = await Promise.all([getStats(), getSessions(), getAwards()]);
  return (
    <>
      <Navbar solid />
      <ScrollAnimations />
      <main style={{ paddingBottom: '6rem' }}>
        <ImpactClient stats={stats} sessions={sessions} awards={awards} />
      </main>
      <Sponsors />
      <Footer />
    </>
  );
}
