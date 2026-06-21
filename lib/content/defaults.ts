import type {
  TeamMember, CurriculumModule, ImpactStat, ImpactSession,
  Award, Sponsor, Workshop, SiteContent,
} from '@/lib/types';

type Seed<T> = Omit<T, 'id'>;

export const defaultTeam: Seed<TeamMember>[] = [
  'Ryan Wong|President',
  'Trevyn Theodore Tjandra|Vice-President',
  'Ken Adhisya Winarta|Media Manager',
  'Kent Djajaria|Mentor',
  'Audric Tsai|Mentor',
  'Michelle Wang|Mentor',
  'Janice Vivien Lau|Mentor',
  'Tristan Park|Mentor',
  'Kate Wong|Mentor',
  'Chloe Gwenneth Hia|Mentor',
  'Richarg Chang|Mentor',
  'Juwon Shin|Mentor',
].map((s, i) => {
  const [name, role] = s.split('|');
  return { name, role, photo_url: '/images/blank-pfp.jpg', instagram_url: '#', linkedin_url: '#', sort_order: i };
});

export const defaultCurriculum: Seed<CurriculumModule>[] = [
  { curriculum: 'c1', title: 'Basic Computer Skills', icon: 'cpu', sort_order: 0,
    image_url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80',
    description: 'Learn fundamental computer operations, file management, typing skills, and digital safety. Build confidence with technology and establish a strong foundation for all future learning.',
    features: ['Hands-on Project', 'Mentorship Support', 'Certificate of Completion'] },
  { curriculum: 'c1', title: 'Scratch Programming Fundamentals', icon: 'code', sort_order: 1,
    image_url: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80',
    description: "Introduction to programming concepts using Scratch's visual block-based interface. Learn about loops, conditionals, variables, and basic programming logic through fun, interactive projects.",
    features: ['Hands-on Project', 'Mentorship Support', 'Certificate of Completion'] },
  { curriculum: 'c1', title: 'Introduction to Game Design', icon: 'gamepad', sort_order: 2,
    image_url: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80',
    description: 'Create your first interactive games and animations. Learn about sprites, backgrounds, sound effects, and user interaction while developing creative problem-solving skills.',
    features: ['Hands-on Project', 'Mentorship Support', 'Certificate of Completion'] },
  { curriculum: 'c2', title: 'Scratch Programming', icon: 'code', sort_order: 0,
    image_url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    description: 'Advanced Scratch programming with complex algorithms, data structures, and sophisticated project development. Master advanced programming concepts through hands-on coding.',
    features: ['Hands-on Project', 'Mentorship Support', 'Certificate of Completion'] },
  { curriculum: 'c2', title: 'Introduction to Game Design', icon: 'gamepad', sort_order: 1,
    image_url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80',
    description: 'Design and develop more complex games with advanced mechanics, scoring systems, and multiple levels. Learn game design principles and user experience concepts.',
    features: ['Hands-on Project', 'Mentorship Support', 'Certificate of Completion'] },
  { curriculum: 'c2', title: 'AI Literacy', icon: 'brain', sort_order: 2,
    image_url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    description: 'Explore artificial intelligence concepts, machine learning basics, and AI tools. Learn how to effectively use AI in creative projects and understand its impact on society.',
    features: ['Hands-on Project', 'Mentorship Support', 'Certificate of Completion'] },
  { curriculum: 'c2', title: 'Web Development', icon: 'globe', sort_order: 3,
    image_url: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80',
    description: 'Build your first websites using HTML, CSS, and modern web development tools. Create personal portfolios and interactive web applications to showcase your skills.',
    features: ['Hands-on Project', 'Mentorship Support', 'Certificate of Completion'] },
];

export const defaultStats: Seed<ImpactStat>[] = [
  { icon: 'users', value: '200+', label: 'Students Reached', sort_order: 0 },
  { icon: 'calendar', value: '10+', label: 'Workshops Conducted', sort_order: 1 },
  { icon: 'award', value: '10+', label: 'Volunteer Mentors', sort_order: 2 },
  { icon: 'globe', value: '5+', label: 'Communities Served', sort_order: 3 },
  { icon: 'globe', value: 'Rp 16Jt', label: 'Worth Of Devices Donated', sort_order: 4 },
  { icon: 'globe', value: '100%', label: 'Project Completion Rate', sort_order: 5 },
  { icon: 'globe', value: '300+', label: 'Projects completed', sort_order: 6 },
];

export const defaultSessions: Seed<ImpactSession>[] = [
  { title: 'Donation Event', year: '2025', attendees: 'SDN Cilenggang 03', image_url: '', featured: true, sort_order: 0,
    description: 'We donated 8 tablets worth Rp 16jt, ~$1000, to SDN Cilengang 03 on November with the help of APP, Indah Kiat, and our partners',
    highlights: ['Donation', 'Presentation', 'Socializing', 'Photos', 'Small Games'] },
  { title: 'Game Dev Workshop', year: '2025', attendees: 'SDN Lengkok Wetan 01', image_url: '', featured: true, sort_order: 1,
    description: 'A workshop held on September 11, where students from SDN Lengkok Wetan 01 learned to code a simple game through the use of Scratch.',
    highlights: ['Introduction to Scratch', 'Presentation', 'Team-based projects', 'Mentorship by volunteers'] },
  { title: 'Game Dev Workshop', year: '2025', attendees: 'SD Cilenggang 03', image_url: '', featured: true, sort_order: 2,
    description: 'A game development workshop held on August 19, where students from SDN Cilenggang 03 successfully designed their own obstacle course maze game using Scratch.',
    highlights: ['Introduction to Scratch', 'Presentation', 'Team-based projects', 'Mentorship by volunteers'] },
  { title: 'Game Dev Workshop', year: '2025', attendees: 'SDN Cilenggang 02', image_url: '/images/past_events/IMG_0229.JPG', featured: false, sort_order: 3,
    description: 'A game development workshop for SDN Cilenggang 02 held on August 12. Students from SDN Cilenggang 02 were taught to create a simple game using Scratch.',
    highlights: ['Introduction to Scratch', 'Presentation', 'Team-based projects', 'Mentorship by volunteers'] },
  { title: 'Curriculum 1', year: '2025', attendees: 'Batch 3', image_url: '/images/past_events/PHOTO-2025-06-17-11-27-33.jpg', featured: false, sort_order: 4,
    description: 'A series of classes were held to teach our 3rd batch of students our very own curriculum 1 for students grade 6 and below.',
    highlights: ['Computer skills', 'Introduction to Scratch', 'Game design', 'Mentorship by volunteers'] },
  { title: 'Curriculum 1', year: '2025', attendees: 'Batch 2', image_url: '/images/past_events/PHOTO-2025-06-12-11-26-55.jpg', featured: false, sort_order: 5,
    description: 'Multiple classes were held to teach our 2nd batch of students the curriculum we have created catered to younger students.',
    highlights: ['Computer skills', 'Introduction to Scratch', 'Game design', 'Mentorship by volunteers'] },
  { title: 'Curriculum 2', year: '2025', attendees: 'Batch 1', image_url: '/images/past_events/PHOTO-2025-02-28-21-15-22 9.jpg', featured: false, sort_order: 6,
    description: 'We held a series of classes and meetings to teach our first batch of students our second curriculum made for students grade 7 and above.',
    highlights: ['Scratch programming', 'Game dev', 'AI literacy', 'Basic web development'] },
];

export const defaultAwards: Seed<Award>[] = [
  { title: 'Feature in Multiple Articles', org: 'Urban Vibes, tvonenews.com, suara.com', sort_order: 0,
    description: 'Check out the articles here:',
    links: [
      { label: 'Urban Vibes', url: 'https://urbanvibes.id/index.php/2025/10/10/9092-20-oktober-2025-tekno-bridging-indonesias-digital-divide-saatnya-anak-muda-jadi-jembatan-masa-depan-digital/' },
      { label: 'tvonenews', url: 'https://www.tvonenews.com/berita/380275-mimpi-anak-indonesia-terganjal-kesenjangan-digital' },
      { label: 'suara.com', url: 'https://www.suara.com/lifestyle/2025/10/14/172742/generasi-muda-bergerak-saatnya-tutup-kesenjangan-digital-di-indonesia' },
    ] },
];

export const defaultSponsors: Seed<Sponsor>[] = [0, 1, 2, 3].map((i) => ({ name: '', logo_url: null, sort_order: i }));

export const defaultWorkshops: Seed<Workshop>[] = [
  { title: 'Intro to Python Programming', badge: 'Beginner', tags: ['Python', 'Coding', 'Game Dev'],
    description: 'A perfect starting point for coding. Learn variables, loops, and basic logic by building a text-based adventure game.',
    date: 'October 15, 2025', time: '10:00 AM - 2:00 PM PST', location: 'Online (Zoom)', attendee_count: '+20',
    image_url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80',
    register_url: '#', published: true, sort_order: 0 },
];

export const defaultSiteContent: SiteContent = {
  hero_title_lead: 'Code4Community,',
  hero_title_rest: 'A Sinarmas World Academy Based Non-Profit',
  hero_description: 'We empower students with essential technology skills through comprehensive mentorship programs, fostering creativity and digital literacy.',
  hero_stats: [
    { value: '200+', label: 'Students Mentored' },
    { value: '10+', label: 'Workshops Held' },
    { value: '100%', label: 'Volunteer Driven' },
  ],
  initiatives_heading: 'Our Initiatives',
  initiatives_subheading: 'We bridge the digital divide through targeted programs designed to inspire and educate.',
  initiatives: [
    { icon: 'laptop', color: 'blue', title: 'Workshops/teaching', description: 'We teach fundamental computer skills to ensure no student is left behind in the digital age.' },
    { icon: 'graduation', color: 'purple', title: 'School Partnerships', description: 'We partner with schools to integrate digital literacy into their existing learning environments.' },
    { icon: 'heart', color: 'orange', title: 'Donations', description: 'We bridge the digital divide by providing students with the tools they need to learn, grow, and explore technology.' },
  ],
  about: 'We are a student-led non-profit organization based at Sinarmas World Academy in Indonesia, dedicated to expanding access to digital literacy and coding education for young learners. Through workshops, community initiatives, and educational programs, we strive to empower students with the skills needed for the future.',
  history: 'Code 4 Community began as a small school club with a big vision: to make technology education more accessible to everyone. What started as a group of passionate students has grown into a growing non-profit initiative that continues to expand its impact across local communities.',
  mission: 'To democratize access to technology education by providing high-quality, free mentorship and resources to underrepresented communities, fostering a future where every child has the opportunity to become a creator of technology.',
  vision: 'A world where technology serves as a bridge rather than a barrier, creating inclusive communities where innovation thrives through diversity, collaboration, and shared knowledge.',
  cta_heading: 'Ready to Make an Impact?',
  cta_text: "Whether you're a student eager to learn or a professional ready to mentor, there's a place for you in our community.",
};
