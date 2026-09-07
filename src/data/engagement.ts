/* ============================================================
   ENGAGEMENT.TS
   The two-part member engagement block.
   Left  — consultancy space for potential applicants
   Right — monthly newsletters
   ============================================================ */

export type EngagementSide = {
  id: string;
  index: string;
  label: string;
  title: string;
  body: string[];
  kpis?: { n: string; l: string }[];
  video?: { src: string; poster: string; duration: string; badge: string };
  gallery?: { src: string; alt: string }[];
  note?: string;
  tools?: string;
};

export const engagement = {
  id: 'engagement',
  title: 'Member engagement',
  lead:
    'Two formats running in parallel across three years: one that helps people decide whether to apply, and one that keeps the people already inside informed enough to stay.',
  sides: [
    {
      id: 'consultancy',
      index: '01',
      label: 'Before people apply',
      title: 'Consultancy space for potential applicants',
      body: [
        'Most people do not withdraw from a leadership application because the role is too hard. They withdraw because they cannot picture it, and nobody wants to commit a year to something they only half understand.',
        'So instead of publishing a longer role description, I ran an open session: what the position actually involves, how the team is structured, what the first months look like, and what the role demands that the description does not say. The last part was an open Q&A with no prepared answers.',
        'It doubled as capacity building. People who did not end up applying still left knowing how the department worked.',
      ],
      kpis: [
        { n: '1 h', l: 'full session' },
        { n: '10', l: 'attendees' },
        { n: '5', l: 'applications after' },
      ],
      video: {
        src: '/media/video/consultancy-space-igt.mp4',
        poster: '/media/posters/consultancy-space-igt.jpg',
        duration: '18:23',
        badge: 'Session recording',
      },
      note: 'Shortened to 18 minutes. Internal figures and confidential material removed.',
      tools: 'Windows Snipping Tool, Google Meet, Google Slides',
    },

    {
      id: 'newsletters',
      index: '02',
      label: 'Once people are inside',
      title: 'Monthly newsletters, three years running',
      body: [
        'Members disengage when they stop knowing what is going on. Every month for three years, across two entities and three different roles, I wrote and designed a newsletter that closed that gap.',
        'The content changed with what the team needed at that point in the cycle. Some months it was updates and numbers, so people could see the whole organisation and not just their own department. Others it was education, like a full step-by-step guide to budgeting and cashflow written for people with no finance background. Around transitions it became a handover guideline for outgoing leaders and their successors.',
        'The through-line was transparency. Publishing the real numbers and the real problems, in a format people would actually read.',
      ],
      kpis: [
        { n: '3 yrs', l: 'monthly, without a gap' },
        { n: '15-110', l: 'recipients per send' },
        { n: '82%', l: 'average open rate' },
      ],
      gallery: [
        { src: '/media/newsletters/newsletter-tm-cover.jpg', alt: 'Monthly newsletter cover, AIESEC Hadrumet' },
        { src: '/media/newsletters/newsletter-tm-updates.jpg', alt: 'Department updates spread' },
        { src: '/media/newsletters/newsletter-fnl-guidelines.jpg', alt: 'Budgeting and cashflow guidance' },
        { src: '/media/newsletters/newsletter-fnl-budget.jpg', alt: 'Step by step budget tool walkthrough' },
      ],
      tools: 'Brevo, Canva',
    },
  ] as EngagementSide[],
};
