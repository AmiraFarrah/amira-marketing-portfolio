/* ============================================================
   CAMPAIGNS.TS
   Each block is one campaign: why it existed, what it had to move,
   when it ran, and the videos that carried it.

   Search for "TODO" — those are the fields only you can fill.
   ============================================================ */

export type Kpi = { n: string; l: string };

export type TimelineStep = { when: string; what: string };

export type Asset = {
  id: string;
  title: string;
  src: string;
  poster: string;
  badge?: string;
  duration?: string;
  why: string; // why this piece was made the way it was
};

export type Campaign = {
  id: string;
  title: string;
  org: string;
  period: string;
  objective: string;
  audience: string;
  approach: string;
  kpis: Kpi[];
  timeline: TimelineStep[];
  assets: Asset[];
  photos?: { src: string; alt: string }[];
  materials?: { src: string; caption: string }[];
  note?: string;
};

export const campaigns: Campaign[] = [
  /* ----------------------------------------------------------
     1 — MEMBER RECRUITMENT, BELGIUM
     ---------------------------------------------------------- */
  {
    id: 'recruitment-be',
    title: 'National recruitment campaign',
    org: 'AIESEC in Belgium',
    period: 'Aug 2024 – Nov 2024',
    objective:
    'Fill local committee roles across Belgian universities within a single autumn recruitment cycle, and do it with candidates who would still be active six months later rather than just signed up.',
  audience:
    'Bachelor students in Brussels, Leuven and Gent, most of them in their first or second year. Very few knew what AIESEC was, and the ones who did associated it with going abroad rather than with joining a team here.',
  approach:
    'Recruitment posts get scrolled past, so none of these pieces open like recruitment. Each one arrives as something else first — a newspaper on a train, a takeover across the city, someone talking about her own move — and the ask only lands at the end. The formats were deliberately different from each other so the same audience could see all four in a fortnight without feeling repeated at.',
  kpis: [
    { n: '210', l: 'applications received' },
    { n: '80', l: 'members recruited' },
    { n: '62%', l: 'Member retention after 6 months' },
  ],
  timeline: [
    { when: 'Late Aug', what: 'Concept, messaging and format split agreed with local committees' },
    { when: 'Early Sept', what: 'Filming across Brussels, Leuven and Gent' },
    { when: 'Late Sept', what: 'Rollout, one format per week, each linking to the same application form' },
    { when: 'Early Oct', what: 'Info sessions and campus presence, supported by the same visuals' },
    { when: 'Late Oct', what: 'Interviews and selection, then results reviewed with the teams for the spring cycle' },
    { when: 'Early Nov', what: 'Onboarding spaces and capaciy building preparation' },
  ],
  assets: [
    {
      id: 'r-explainer',
      title: 'What joining actually means',
      src: '/media/video/recruitment-explainer-fr.mp4',
      poster: '/media/posters/recruitment-explainer-fr.jpg',
      badge: 'Explainer',
      duration: '2:04',
      why: 'The longest piece in the campaign, and the only one that answers questions directly. Filmed in French because that is the language the audience decides in, and kept unedited and to camera because the point was to sound like a person rather than a campaign.',
    },
    {
      id: 'r-street',
      title: 'Recruitment takeover across Brussels',
      src: '/media/video/street-activation-brussels.mp4',
      poster: '/media/posters/street-activation-brussels.jpg',
      badge: 'Activation',
      duration: '0:26',
      why: 'Filmed in daylight in places students actually walk through, so the campaign felt like it was already happening around them rather than being announced at them.',
    },
    {
      id: 'r-newspaper',
      title: 'Young Leaders Wanted',
      src: '/media/video/young-leaders-newspaper.mp4',
      poster: '/media/posters/young-leaders-newspaper.jpg',
      badge: 'Concept',
      duration: '0:14',
      why: 'A printed newspaper is an unusual object on a feed. It buys two seconds of attention before the viewer knows what they are looking at.',
    },
    {
      id: 'r-story',
      title: 'A member on why she moved to Brussels',
      src: '/media/video/brussels-member-story.mp4',
      poster: '/media/posters/brussels-member-story.jpg',
      badge: 'Story',
      duration: '0:56',
      why: 'One person, subtitled, no script. The organisation is never the subject — the person is, which is what makes it credible to someone deciding whether they would fit.',
    },
    {
      id: 'r-office',
      title: 'Be the change',
      src: '/media/video/join-aiesec-office.mp4',
      poster: '/media/posters/join-aiesec-office.jpg',
      badge: 'Recruitment',
      duration: '0:15',
      why: 'Shot inside the office to answer the question a candidate has but does not ask: what does the room look like, and who is in it.',
    },
  ],
  },

  /* ----------------------------------------------------------
     2 — CORPORATE PARTNER: HENKEL
     ---------------------------------------------------------- */
     {
      id: 'henkel',
      title: 'Company Days with Henkel',
      org: 'AIESEC in Belgium × Henkel',
      period: 'February – April 2024',
      objective:
        'Fill an afternoon at Henkel Belgium headquarters with students who had no prior relationship to the brand, and give the partner something measurable back at the end of it.',
      audience:
        'Students across Belgian university campuses. Most knew Henkel as a consumer brand and had no idea it ran graduate and traineeship programmes in Brussels.',
      approach:
        'The campaign ran on four editorial lines rather than a single message: selling for the logistics, educational for what a company day even is, entertaining for the testimonials, and engaging for polls, Q&As and countdowns. Each post had a date, a format, an owner and a deadline, and anything that needed Henkel to film was briefed to them weeks ahead with the questions written out. On the day itself I delivered the CV workshop, including the STAR interview method.',
      kpis: [
        { n: '4.57', l: 'overall event rating, out of 5' },
        { n: '6,780', l: 'total outreach' },
        { n: '25%', l: 'engagement rate' },
      ],
      timeline: [
        { when: 'February', what: 'Engagement scoped with Henkel, formats and ownership agreed' },
        { when: '15 March', what: 'Content calendar goes live, one piece every one to two days' },
        { when: 'Late March', what: 'Partner-filmed testimonials and manager interview, briefed with written questions' },
        { when: 'Early April', what: 'Agenda reveal, speaker teasers, countdown and live Q&A' },
        { when: '11 April', what: 'Company Day at Henkel headquarters, CV workshop delivered on site' },
        { when: '13 April', what: 'Recap published, engagement report compiled and shared with Henkel' },
      ],
      note: 'Partner contact details redacted.',
      assets: [
        {
          id: 'h-day',
          title: 'Henkel vacancies at Company Day',
          src: '/media/video/henkel-company-day.mp4',
          poster: '/media/posters/henkel-company-day.jpg',
          badge: 'Motion',
          duration: '0:15',
          why: 'Built to Henkel brand colours so it read as coming from them, not about them. Requirements are on screen as a checklist so a student can self-qualify in six seconds.',
        },
        {
          id: 'h-mgr',
          title: 'Henkel Sales Manager on what the job is really like',
          src: '/media/video/henkel-manager-testimonial.mp4',
          poster: '/media/posters/henkel-manager-testimonial.jpg',
          badge: 'Testimonial',
          duration: '1:34',
          why: 'Filmed in her own workspace rather than a meeting room, and subtitled because most of the audience watches on mute. She is not media-trained, so the job was to make her comfortable enough to talk normally.',
        },
      ],
      photos: [
        { src: '/media/henkel/henkel-office-portrait.jpg', alt: 'On site at Henkel headquarters in Brussels' },
        { src: '/media/henkel/henkel-office-group.jpg', alt: 'The attending group at Henkel headquarters' },
      ],
      materials: [
        { src: '/media/henkel/henkel-social-plan-1.jpg', caption: 'The content calendar. Every post has an editorial line, a format, a deadline and an owner.' },
        { src: '/media/henkel/henkel-social-plan-2.jpg', caption: 'Second half of the calendar, running to the event and the recap.' },
        { src: '/media/henkel/henkel-report-outreach.jpg', caption: 'Digital results reported back to Henkel: 6,780 outreach, 25% engagement rate.' },
        { src: '/media/henkel/henkel-report-ratings.jpg', caption: 'Attendee ratings. The CV workshop I delivered scored 4.63 out of 5.' },
        { src: '/media/henkel/henkel-report-feedback.jpg', caption: 'Verbatim feedback on whether the event met expectations.' },
        { src: '/media/henkel/henkel-report-wayforward.jpg', caption: 'What went well and even better if, reviewed together with the partner.' },
      ],
    },

  /* ----------------------------------------------------------
     3 — EY CLIMATE IDEATION CLINICS
     ---------------------------------------------------------- */
     {
      id: 'wwf',
      title: 'Project management workshop for WWF Youth',
      org: 'AIESEC in Belgium × WWF Belgium',
      period: '12 October 2024',
      objective:
        'Give WWF Youth volunteers a project management method they could use on their own conservation projects the following week, not a theory session they would forget by Monday.',
      audience:
        'WWF Youth Belgium volunteers. Motivated, already running environmental projects, and mostly self-taught. The gap was not commitment, it was structure: goals that could not be measured and tasks with no order.',
      approach:
        'Two facilitators, 135 minutes, and almost no lecturing. Every concept was introduced as a question before it was explained, so participants arrived at the answer first. SMART was taught by handing out goals and asking which letter was missing. Prioritisation was taught by making them place their own tasks on an impact and effort grid. The scenarios were written from real WWF work, then broken mid-exercise by wildcards: a policy change, a funding cut, a wildfire destroying the reforestation site. The point was that a plan that cannot survive a wildcard is not a plan. It closed with Jenga, one block pulled per commitment, because a tower that falls and gets rebuilt makes the argument better than a summary slide.',
      kpis: [
        { n: '135', l: 'minutes, fully facilitated' },
        { n: '5', l: 'project teams running live scenarios' },
        { n: '65', l: 'participants' },
      ],
      timeline: [
        { when: 'Scoping', what: 'Session goals agreed with WWF Belgium, framed around their own project types' },
        { when: 'Design', what: 'Block-by-block outline built with timings, owners and a running time check' },
        { when: 'Build', what: 'Fifty slides and the scenario, wildcard and prioritisation card sets produced' },
        { when: '12 October', what: 'Delivered on site at the WWF Belgium office in Brussels' },
        { when: 'Close', what: 'Two feedback rounds collected, one mid-session and one at the end' },
      ],
      assets: [],
      photos: [
        { src: '/media/wwf/wwf-presenting-smart.jpg', alt: 'Presenting the SMART framework at WWF Belgium' },
        { src: '/media/wwf/wwf-room.jpg', alt: 'The room during the project management block' },
      ],
      materials: [
        { src: '/media/wwf/wwf-slide-pm-framework.jpg', caption: 'The spine of the session: six stages, hand-lettered rather than corporate, so it read as a working tool instead of a textbook.' },
        { src: '/media/wwf/wwf-slide-smart.jpg', caption: 'SMART shown as consequences, not definitions. Each letter sits opposite what goes wrong without it.' },
        { src: '/media/wwf/wwf-slide-scenario.jpg', caption: 'A real WWF-shaped scenario broken down letter by letter, used as the worked example before teams built their own.' },
        { src: '/media/wwf/wwf-slide-wildcard.jpg', caption: 'The wildcard: a wildfire destroys the reforestation site mid-project. Teams had to adjust the goal without abandoning the target.' },
        { src: '/media/wwf/wwf-slide-prioritisation.jpg', caption: 'Impact against effort. Participants placed their own tasks on it, then rebuilt their week around the result.' },
        { src: '/media/wwf/wwf-slide-jenga.jpg', caption: 'The closing exercise. One block pulled per commitment, and if the tower falls you rebuild it.' },
        { src: '/media/wwf/wwf-cofacilitating.jpg', caption: 'Co-facilitated across two people, with each block owned by name in the run sheet.' },
        { src: '/media/wwf/wwf-team-panda.jpg', caption: 'At the WWF Belgium office after the session.' },
      ],
    },
  