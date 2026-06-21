import HomepageEditor from './HomepageEditor';
import { getSiteContent } from '@/lib/content/queries';

export const dynamic = 'force-dynamic';

export default async function HomepageAdminPage() {
  const content = await getSiteContent();
  return <HomepageEditor content={content} />;
}
