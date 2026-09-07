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
    'Helping colleagues who are not technical use generative AI in their own work, and building the automations behind the scenes.',
  items: [
    {
      id: 'ai-copilot',
      title: 'Getting colleagues to actually use Copilot',
      sub: 'OliveSoft, 2026',
      thumb: '/media/ai/copilot-deck-cover.jpg',
      context:
        'The company had Copilot licences that were barely being used. People had access but no reason to open it and no idea what to ask it.',
      action:
        'I built the session that made the case: concrete use cases taken from the work colleagues were already doing, a simple way to write prompts, and live examples rather than a feature tour.',
      outcome:
        'Replace this with what happened after the session: how many people attended, what they started using, what they asked for next.',
      tools: 'Microsoft Copilot, PowerPoint',
      visuals: [
        { type: 'image', src: '/media/ai/copilot-slide-1.jpg' },
        { type: 'image', src: '/media/ai/copilot-slide-2.jpg' },
      ],
      note: 'Client-specific details removed.',
    },
    {
      id: 'ai-n8n',
      title: 'Automations that non-technical colleagues can run themselves',
      sub: 'OliveSoft, 2026',
      thumb: '/media/ai/n8n-workflow.jpg',
      context:
        'Manual steps were eating time on lead detection and internal follow-up, and the people affected could not read a workflow diagram.',
      action:
        'I built the workflows in n8n and wrote short guidance next to each one, so colleagues could run them and adjust the parts that change without coming back to me.',
      outcome: 'Replace this with the time saved or the number of people now running it.',
      tools: 'n8n, generative AI',
      visuals: [{ type: 'image', src: '/media/ai/n8n-workflow.jpg' }],
      note: 'Client-specific details removed.',
    },
    {
      id: 'ai-prompts',
      title: 'A prompt structure people remember',
      sub: 'OliveSoft, 2026',
      thumb: '/media/ai/prompt-framework.jpg',
      context:
        'Colleagues were getting poor answers and blaming the tool. The gap was in how they were asking.',
      action:
        'I gave them one structure to hold onto: goal, context, source, expectations. Short enough to use under pressure.',
      outcome: 'Replace this with what changed once people used it.',
      tools: 'Microsoft Copilot',
      visuals: [{ type: 'image', src: '/media/ai/prompt-framework.jpg' }],
    },
  ] as CaseItem[],
};

/* ------------------------------------------------------------
   SECTION 3 — DESIGN
   ------------------------------------------------------------ */
export const designSection = {
  id: 'design',
  title: 'Design and visual systems',
  lead:
    'Brand-consistent campaign material, and a full design system built so the same product could be extended by someone else.',
  lobTitle: 'Lob — a design system, not a set of screens',
  lobBody:
    'A mobile product for stray animal rescue in Tunisia. I built the logo rules, a named colour palette, a full type scale, an icon set and a button library first, then designed eight flows on top of it. The point was consistency: anyone picking it up gets the same result without asking me what the rules are.',
  lobShots: [
    { src: '/media/design/lob-system.jpg', alt: 'Logo rules, colour palette, typography and icon set' },
    { src: '/media/design/lob-buttons.jpg', alt: 'Button and component library' },
    { src: '/media/design/lob-onboarding.jpg', alt: 'Loading, sign-up and login flows' },
    { src: '/media/design/lob-maps.jpg', alt: 'Access and map search flows' },
    { src: '/media/design/lob-report.jpg', alt: 'Lost pet reporting and adoption flows' },
    { src: '/media/design/lob-profile.jpg', alt: 'Food donation and profile flows' },
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
