/* ============================================================
   CONTENT.TS
   This is the ONLY file you need to edit to change the site.
   Every path below points to a file inside /public.
   Example: "/media/video/xxx.mp4"  ->  public/media/video/xxx.mp4
   ============================================================ */

export type VideoItem = {
  id: string;
  title: string;
  meta: string;          // one short line under the title
  src: string;           // /media/video/...
  poster: string;        // /media/posters/...
  badge?: string;        // small label on the frame, e.g. "Interview"
  duration?: string;     // e.g. "1:34"
};

export type Metric = { n: string; l: string };

export type CaseItem = {
  id: string;
  title: string;
  sub: string;           // org + year
  thumb: string;
  context: string;
  action: string;
  outcome: string;
  metrics?: Metric[];
  tools?: string;
  visuals?: { type: 'image' | 'video'; src: string; poster?: string }[];
  note?: string;         // e.g. confidentiality note
};

/* ------------------------------------------------------------
   PROFILE
   ------------------------------------------------------------ */
export const profile = {
  name: 'Amira Farrah',
  email: 'amirafarrah@outlook.fr',
  linkedin: 'https://be.linkedin.com/in/amirafarrah/',
  linkedinLabel: 'linkedin.com/in/amirafarrah',
  location: 'Sousse, Tunisia',
};

/* ------------------------------------------------------------
   HERO
   ------------------------------------------------------------ */
   export const hero = {
    video: '/media/video/dhl-upgrade-hero.mp4',
    poster: '/media/posters/dhl-upgrade-hero.jpg',
  headline: 'Work I created and contributed to my previous experiences.',
  line:
    'Interviews, testimonials, motion graphics, a Copilot adoption session, a Figma design system, and campaigns with EY, Henkel and DHL...',
  tags: ['Video production', 'AI enablement', 'Design systems', 'Engagement campaigns'],
};

/* ------------------------------------------------------------
   OPENING STATEMENT
   ------------------------------------------------------------ */
export const statement = {
  headline: 'Most of what I build exists so somebody else can use it without me.',
  body:
    'A video that explains a role so candidates stop asking the same question. A guide that lets a national team run a process on their own. A slide deck that gets colleagues to actually open the AI tool they already pay for. The work below is grouped by what it had to achieve, not by where I made it.',
};

/* ------------------------------------------------------------
   SECTION 1 — VIDEO
   ------------------------------------------------------------ */
export const videoSection = {
  id: 'video',
  title: 'Video production',
  lead:
    'Concept, filming, editing and subtitling. Interviews with people who are not used to being on camera, short-form campaign pieces, and explainers that replace a document nobody reads.',
  items: [
    {
      id: 'v-president',
      title: 'The first President of AIESEC International',
      meta: 'Long-form interview, filmed on location',
      src: '/media/video/aiesec-first-president-interview.mp4',
      poster: '/media/posters/aiesec-first-president-interview.jpg',
      badge: 'Interview',
      duration: '1:34',
    },
    {
      id: 'v-henkel-mgr',
      title: 'Henkel Sales Manager on what the job is really like',
      meta: 'Workplace testimonial, subtitled',
      src: '/media/video/henkel-manager-testimonial.mp4',
      poster: '/media/posters/henkel-manager-testimonial.jpg',
      badge: 'Testimonial',
      duration: '1:34',
    },
    {
      id: 'v-successor',
      title: 'Explaining my own role to the people who would replace me',
      meta: 'Recruitment explainer, presented to camera',
      src: '/media/video/successor-role-explainer.mp4',
      poster: '/media/posters/successor-role-explainer.jpg',
      badge: 'Explainer',
      duration: '2:04',
    },
    {
      id: 'v-brussels',
      title: 'A member on why she moved to Brussels',
      meta: 'Walk-and-talk, subtitled',
      src: '/media/video/brussels-member-story.mp4',
      poster: '/media/posters/brussels-member-story.jpg',
      badge: 'Story',
      duration: '0:57',
    },
    {
      id: 'v-newspaper',
      title: 'Young Leaders Wanted',
      meta: 'Print-object concept, filmed and edited',
      src: '/media/video/young-leaders-newspaper.mp4',
      poster: '/media/posters/young-leaders-newspaper.jpg',
      badge: 'Concept',
      duration: '0:15',
    },
    {
      id: 'v-street',
      title: 'Recruitment takeover across Brussels',
      meta: 'On-location activation',
      src: '/media/video/street-activation-brussels.mp4',
      poster: '/media/posters/street-activation-brussels.jpg',
      badge: 'Activation',
      duration: '0:26',
    },
    {
      id: 'v-henkel-day',
      title: 'Henkel vacancies at Company Day',
      meta: 'Motion graphic for partner recruitment',
      src: '/media/video/henkel-company-day.mp4',
      poster: '/media/posters/henkel-company-day.jpg',
      badge: 'Motion',
      duration: '0:16',
    },
    {
      id: 'v-blackfriday',
      title: 'Black Friday exchange',
      meta: 'Kinetic typography',
      src: '/media/video/black-friday-exchange.mp4',
      poster: '/media/posters/black-friday-exchange.jpg',
      badge: 'Motion',
      duration: '0:10',
    },
    {
      id: 'v-office',
      title: 'Be the change',
      meta: 'Office recruitment short',
      src: '/media/video/join-aiesec-office.mp4',
      poster: '/media/posters/join-aiesec-office.jpg',
      badge: 'Recruitment',
      duration: '0:16',
    },
  ] as VideoItem[],
};

/* ------------------------------------------------------------
   SECTION 2 — AI ENABLEMENT
   ------------------------------------------------------------ */
   export const aiSection = {
    id: 'ai',
    title: 'AI enablement',
    lead:
      'Helping colleagues who are not technical use generative AI in their own work — and building the case that gets them to try it in the first place.',
    items: [
      {
        id: 'ai-case',
        title: 'Making the case for AI inside the company',
        sub: 'OliveSoft, 2026',
        thumb: '/media/ai/ai-deck-cover.jpg',
        context:
          'The licences existed. The usage did not. People had access to AI tools and no reason to open them, because nobody had connected the tools to work they actually recognised.',
        action:
          'I built the session that made the case. Not a feature tour: a scenario taken from a real client project, showing where time disappears when data, dashboards and documents sit in four different tools. Then the same work with an AI layer on top, step by step.',
        outcome:
          'Replace this with what happened after the session: who attended, what they started using, what they asked for next.',
        tools: 'Microsoft Copilot, PowerPoint',
        visuals: [
          { type: 'image', src: '/media/ai/ai-deck-cover.jpg' },
          { type: 'image', src: '/media/ai/ai-deck-layer.jpg' },
          { type: 'image', src: '/media/ai/ai-deck-reactive-proactive.jpg' },
        ],
        note: 'Client-specific details removed.',
      },
      {
        id: 'ai-adoption',
        title: 'Designing for adoption, not for launch',
        sub: 'OliveSoft, 2026',
        thumb: '/media/ai/ai-deck-ambassadors.jpg',
        context:
          'Most internal AI rollouts are announced once and then forgotten. The people who resist are usually the most experienced, and they resist for a good reason: generic automation threatens work they are known for.',
        action:
          'I split the audience into four groups and wrote a different approach for each, rather than one message for everyone. Then I designed the rollout around peers instead of announcements: find one curious colleague, give them a real task, capture the before and after, let them tell the story. It runs inside the channels people already use, not as a separate programme.',
        outcome: 'Replace this with what changed once the first ambassador shared a result.',
        tools: 'Microsoft Copilot',
        visuals: [
          { type: 'image', src: '/media/ai/ai-deck-ambassadors.jpg' },
        ],
      },
      {
        id: 'ai-measure',
        title: 'Measuring adoption before measuring impact',
        sub: 'OliveSoft, 2026',
        thumb: '/media/ai/ai-deck-adoption-metrics.jpg',
        context:
          'AI initiatives get judged on business impact far too early. If people are not using the workflow weekly, there is no downstream value to measure and the initiative gets written off before it has run.',
        action:
          'I put adoption first as the leading indicator, with three supporting measures behind it: how many outputs are accepted without heavy editing, minutes saved per repeated task, and how many workflows spread across teams. Business value comes after, on time, quality and client impact.',
        outcome: 'Replace this with the first numbers you tracked.',
        tools: 'Power BI, Microsoft Copilot',
        visuals: [
          { type: 'image', src: '/media/ai/ai-deck-adoption-metrics.jpg' },
          { type: 'image', src: '/media/ai/ai-deck-roi.jpg' },
        ],
      },
    ] as CaseItem[],
  };

/* ------------------------------------------------------------
   SECTION 3 — DESIGN
   ------------------------------------------------------------ */
   export const designSection = {
    id: 'design',
    title: 'Design systems',
    lead:
      'A full mobile product designed rules-first: logo usage, a named colour palette, a type scale, an icon set and a component library, then eight flows built on top of them.',
    lobTitle: 'Lob نحنا — a system, not a set of screens',
    lobBody:
      'A stray animal rescue app for Tunisia. Before drawing a single screen I wrote the rules: where the full logo can be used and where only the icon, what every colour is called and what it means, and a type scale that covers everything from a screen title down to a timestamp. Naming a red "Rescue Red" instead of #E14B3F is what makes a palette usable by someone who is not me. Eight flows came after, and none of them needed a new decision.',
    figmaUrl:
      'https://www.figma.com/design/ijLP42NxayoFIgiaP4BwI8/Lob%D9%86%D8%AD%D9%86%D8%A7?m=auto&t=ETP3TPGKsyTGEf8M-6',
    lobShots: [
      { src: '/media/lob/lob-system.jpg', alt: 'Logo rules, named colour palette, type scale and icon set' },
      { src: '/media/lob/lob-buttons.jpg', alt: 'Button and component library across states' },
      { src: '/media/lob/lob-onboarding.jpg', alt: 'Application loading, sign up and login flows' },
      { src: '/media/lob/lob-maps.jpg', alt: 'Access and map search flows' },
      { src: '/media/lob/lob-report.jpg', alt: 'Lost pet reporting and adoption flows' },
      { src: '/media/lob/lob-profile.jpg', alt: 'Food donation and profile flows' },
    ],
  };

/* ------------------------------------------------------------
   SECTION 4 — CAMPAIGNS
   ------------------------------------------------------------ */
export const campaignSection = {
  id: 'campaigns',
  title: 'Campaigns and partnerships',
  lead:
    'Work that had a target attached to it: an audience to reach, a number to move, and a way of knowing whether it worked.',
  items: [
    {
      id: 'c-dhl',
      title: 'Growing the DHL partnership by 70%',
      sub: 'AIESEC in Belgium, 2024–2025',
      thumb: '/media/campaigns/dhl-cover.jpg',
      context:
        'DHL was an existing national partner. The relationship was steady but the volume of talent moving through it had plateaued.',
      action:
        'Replace this with what you actually did: how you understood their hiring needs, what you changed in sourcing, screening or communication, and how you kept the relationship active.',
      outcome: 'Partnership volume grew by 70% over the mandate.',
      metrics: [
        { n: '70%', l: 'DHL partnership growth' },
        { n: '60%', l: 'UCB partnership growth' },
        { n: '3', l: 'new partners activated' },
      ],
      visuals: [{ type: 'image', src: '/media/campaigns/dhl-cover.jpg' }],
    },
    {
      id: 'c-ey',
      title: 'EY Climate Ideation Clinics',
      sub: 'AIESEC in Belgium, 2024',
      thumb: '/media/campaigns/ey-cover.jpg',
      context:
        'Two workshops in two cities on the same evening, aimed at students who had no prior relationship with either brand.',
      action:
        'I designed the campaign as a sequence rather than a set of posts: an awareness piece first, then a conversion piece carrying locations, times and a tracked registration link. Both co-branded to EY and AIESEC standards.',
      outcome: 'Replace this with registrations, attendance or click-through from the tracked link.',
      metrics: [
        { n: '2', l: 'cities, one evening' },
        { n: '—', l: 'registrations' },
        { n: '—', l: 'attendance' },
      ],
      visuals: [
        { type: 'image', src: '/media/campaigns/ey-awareness.jpg' },
        { type: 'image', src: '/media/campaigns/ey-conversion.jpg' },
      ],
    },
    {
      id: 'c-screening',
      title: 'Automated CV screening for a national team',
      sub: 'AIESEC in Belgium, 2024–2025',
      thumb: '/media/campaigns/screening-cover.jpg',
      context:
        'Shortlisting was slow and inconsistent because every local team did it differently, and most of it came back through me.',
      action:
        'I built an automated screening process on the internal platform and wrote the guides that went with it, so the same process could be followed without going through me every time.',
      outcome: 'Replace this with the time saved or the number of teams using it.',
      visuals: [{ type: 'image', src: '/media/campaigns/screening-cover.jpg' }],
    },
    {
      id: 'c-unga',
      title: 'International outreach and UN-level partnerships',
      sub: 'AIESEC International, Montreal, 2025',
      thumb: '/media/campaigns/unga-cover.jpg',
      context:
        'A fully remote, interdisciplinary team working across time zones on partnerships with organisations including UNIDO and the United Nations.',
      action:
        'I led outreach connecting businesses to AIESEC global talent programmes, tracked what was working, reported it back and changed the approach based on what the numbers showed.',
      outcome:
        'Invited to the United Nations General Assembly in September 2025. Initiated communication with Autodesk and organised a major SAP event at NYIT in New York.',
      visuals: [{ type: 'image', src: '/media/campaigns/unga-cover.jpg' }],
    },
  ] as CaseItem[],
};

/* ------------------------------------------------------------
   TOOLS
   ------------------------------------------------------------ */
export const tools = [
  'Microsoft Copilot',
  'n8n',
  'Figma',
  'Canva',
  'CapCut',
  'Adobe Premiere Pro',
  'PowerPoint',
  'Power BI',
  'Python',
  'SQL',
];

/* ------------------------------------------------------------
   FOOTER
   ------------------------------------------------------------ */
export const footer = {
  headline: 'Built for the Employee Experience Engagement team at DHL Group.',
  note:
    'Some material has been redacted where it relates to client work. Videos are shown as produced, including subtitles and captions.',
};
