export type Field =
  | { key: string; label: string; type: 'text' | 'textarea' | 'number' | 'checkbox' | 'image' | 'list' | 'linklist' }
  | { key: string; label: string; type: 'select'; options: { value: string; label: string }[] };

export type ResourceConfig = {
  table: string;
  title: string;
  singular: string;
  fields: Field[];
  newRow: Record<string, unknown>;
};

const ICON_OPTIONS = [
  'code', 'laptop', 'graduation', 'heart', 'users', 'clock', 'target',
  'cpu', 'gamepad', 'brain', 'globe', 'calendar', 'award', 'rocket', 'gift', 'coffee',
].map((v) => ({ value: v, label: v }));

export const RESOURCES: Record<string, ResourceConfig> = {
  team: {
    table: 'team_members',
    title: 'Team Members',
    singular: 'Member',
    fields: [
      { key: 'name', label: 'Name', type: 'text' },
      { key: 'role', label: 'Role', type: 'text' },
      { key: 'photo_url', label: 'Photo', type: 'image' },
      { key: 'instagram_url', label: 'Instagram URL', type: 'text' },
      { key: 'linkedin_url', label: 'LinkedIn URL', type: 'text' },
      { key: 'sort_order', label: 'Order', type: 'number' },
    ],
    newRow: { name: '', role: '', photo_url: '/images/blank-pfp.jpg', instagram_url: '#', linkedin_url: '#', sort_order: 0 },
  },
  curriculum: {
    table: 'curriculum_modules',
    title: 'Curriculum Modules',
    singular: 'Module',
    fields: [
      { key: 'curriculum', label: 'Curriculum', type: 'select', options: [{ value: 'c1', label: 'Curriculum 1 (Gr 6-)' }, { value: 'c2', label: 'Curriculum 2 (Gr 7+)' }] },
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'description', label: 'Description', type: 'textarea' },
      { key: 'icon', label: 'Icon', type: 'select', options: ICON_OPTIONS },
      { key: 'image_url', label: 'Image', type: 'image' },
      { key: 'features', label: 'Features', type: 'list' },
      { key: 'sort_order', label: 'Order', type: 'number' },
    ],
    newRow: { curriculum: 'c1', title: '', description: '', icon: 'code', image_url: '', features: ['Hands-on Project', 'Mentorship Support', 'Certificate of Completion'], sort_order: 0 },
  },
  'impact-stats': {
    table: 'impact_stats',
    title: 'Impact Stats',
    singular: 'Stat',
    fields: [
      { key: 'value', label: 'Value (e.g. 200+)', type: 'text' },
      { key: 'label', label: 'Label', type: 'text' },
      { key: 'icon', label: 'Icon', type: 'select', options: ICON_OPTIONS },
      { key: 'sort_order', label: 'Order', type: 'number' },
    ],
    newRow: { value: '', label: '', icon: 'globe', sort_order: 0 },
  },
  sessions: {
    table: 'impact_sessions',
    title: 'Past Sessions',
    singular: 'Session',
    fields: [
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'attendees', label: 'School / Attendees', type: 'text' },
      { key: 'year', label: 'Year', type: 'text' },
      { key: 'description', label: 'Description', type: 'textarea' },
      { key: 'image_url', label: 'Image', type: 'image' },
      { key: 'highlights', label: 'Highlights', type: 'list' },
      { key: 'featured', label: 'Featured (shown in first row)', type: 'checkbox' },
      { key: 'sort_order', label: 'Order', type: 'number' },
    ],
    newRow: { title: '', attendees: '', year: '2025', description: '', image_url: '', highlights: [], featured: true, sort_order: 0 },
  },
  awards: {
    table: 'awards',
    title: 'Awards & Recognition',
    singular: 'Award',
    fields: [
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'org', label: 'Organization(s)', type: 'text' },
      { key: 'description', label: 'Description', type: 'textarea' },
      { key: 'links', label: 'Links', type: 'linklist' },
      { key: 'sort_order', label: 'Order', type: 'number' },
    ],
    newRow: { title: '', org: '', description: '', links: [], sort_order: 0 },
  },
  sponsors: {
    table: 'sponsors',
    title: 'Sponsors',
    singular: 'Sponsor',
    fields: [
      { key: 'name', label: 'Name', type: 'text' },
      { key: 'logo_url', label: 'Logo', type: 'image' },
      { key: 'sort_order', label: 'Order', type: 'number' },
    ],
    newRow: { name: '', logo_url: null, sort_order: 0 },
  },
  workshops: {
    table: 'workshops',
    title: 'Workshops',
    singular: 'Workshop',
    fields: [
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'badge', label: 'Badge (e.g. Beginner)', type: 'text' },
      { key: 'tags', label: 'Tags', type: 'list' },
      { key: 'description', label: 'Description', type: 'textarea' },
      { key: 'date', label: 'Date', type: 'text' },
      { key: 'time', label: 'Time', type: 'text' },
      { key: 'location', label: 'Location', type: 'text' },
      { key: 'attendee_count', label: 'Attendee count (e.g. +20)', type: 'text' },
      { key: 'image_url', label: 'Image', type: 'image' },
      { key: 'register_url', label: 'Register URL', type: 'text' },
      { key: 'published', label: 'Published', type: 'checkbox' },
      { key: 'sort_order', label: 'Order', type: 'number' },
    ],
    newRow: { title: '', badge: 'Beginner', tags: [], description: '', date: '', time: '', location: 'Online (Zoom)', attendee_count: '', image_url: '', register_url: '#', published: true, sort_order: 0 },
  },
};
