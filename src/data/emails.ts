
export interface Email {
  id: string;
  from: string;
  fromEmail: string;
  subject: string;
  snippet: string;
  isRead: boolean;
  isStarred: boolean;
  isImportant: boolean;
  date: string;
  folder: string;
  tags: string[];
  content: string;
}

export const emails: Email[] = [
  {
    id: "1",
    from: "Rishul Chanana",
    fromEmail: "rishul@maximally.in",
    subject: "🔥 I dropped out of LN and never looked back",
    snippet: "turns out building >>> MCQs. here's the real tea on why traditional education failed me...",
    isRead: false,
    isStarred: true,
    isImportant: true,
    date: "2h ago",
    folder: "inbox",
    tags: ["STORY", "EDUCATION"],
    content: `
      yo, so this happened.
      
      i was sitting in 11th grade, looking at another organic chemistry reaction, when it hit me:
      **what if i spent this time building something people actually used?**
      
      spoiler alert: best decision ever.
      
      ### the breaking point 📉
      
      - endless memorization of stuff i'd never use
      - teachers who couldn't answer "when will i use this?"  
      - watching startup founders my age build billion-dollar companies
      - realizing school was optimizing for tests, not life
      
      ### the leap 🚀
      
      dropped out. parents weren't thrilled.
      started maximally.in with zero experience.
      first event: 50 people showed up.
      latest event: 2000+ participants across India.
      
      **the lesson?** 
      sometimes the biggest risk is playing it safe.
      
      building > memorizing.
      shipping > studying.
      impact > grades.
      
      and honestly? i'm just getting started.
    `
  },
  {
    id: "2",
    from: "CodeQuest Team",
    fromEmail: "events@codequest.hack",
    subject: "💔 North India's biggest school hackathon (and a breakup)",
    snippet: "we shipped the event. the relationship? not so much. here's how 2000 students changed everything...",
    isRead: false,
    isStarred: true,
    isImportant: false,
    date: "1d ago",
    folder: "inbox",
    tags: ["EVENT", "FAILURE", "GROWTH"],
    content: `
      **CodeQuest 2024: the event that broke me and built me**
      
      2000+ students.
      50+ schools.
      72 hours of pure chaos.
      1 relationship that didn't survive the stress.
      
      ### what we built 🛠️
      
      - largest school hackathon in north india
      - participants from delhi, gurgaon, noida, faridabad
      - prizes worth ₹5L+
      - industry mentors from google, microsoft, flipkart
      - live coding challenges, workshops, networking
      
      ### what it cost 💸
      
      not just money (though that too).
      
      the stress of coordinating 50+ venues.
      nights without sleep for 3 months straight.
      managing a team of 30+ volunteers.
      and yeah... my relationship couldn't handle it.
      
      ### the lesson 📚
      
      building something massive requires sacrifice.
      not everything (or everyone) will survive the journey.
      but the impact? **totally worth it.**
      
      2000 students learned to code.
      hundreds built their first apps.
      dozens got internships from our sponsors.
      
      **would i do it again?** 
      absolutely. just with better work-life balance next time.
      
      (sorry, ex. you were right about the 3am planning calls.)
    `
  },
  {
    id: "3",
    from: "Pivot Master",
    fromEmail: "pivots@founder.life",
    subject: "🔄 from probiotics to AI to skincare to edtech (again)",
    snippet: "7 ideas. 0 regrets. 1 lesson: shipping wins. here's my graveyard of 'failed' startups...",
    isRead: true,
    isStarred: false,
    isImportant: false,
    date: "3d ago",
    folder: "inbox",
    tags: ["PIVOTS", "LESSONS"],
    content: `
      **my startup graveyard (and why i'm not ashamed)**
      
      they say entrepreneurs fail fast. i took that personally.
      
      ### the lineup 💀
      
      **2019: gut health app**
      - idea: track probiotic intake
      - reality: nobody cares about gut bacteria
      - lesson: solve real problems, not imaginary ones
      
      **2020: ai homework helper**  
      - idea: chatgpt before chatgpt
      - reality: couldn't build the tech
      - lesson: know your limits (or find co-founders who don't)
      
      **2021: skincare for teens**
      - idea: personalized acne solutions
      - reality: regulations are scary
      - lesson: some markets have barriers for a reason
      
      **2022: skill-sharing platform**
      - idea: teens teaching teens
      - reality: monetization was impossible
      - lesson: passion projects ≠ business models
      
      **2023: maximally.in**
      - idea: events that actually teach useful skills
      - reality: **holy shit this actually works**
      - lesson: sometimes you need to fail 6 times to succeed once
      
      ### the real talk 💯
      
      every "failed" idea taught me something:
      - user research saves time
      - technical feasibility matters
      - market timing is everything
      - execution > idea
      - community > product
      
      **maximally works because it combines everything i learned failing.**
      
      so yeah, i "failed" 6 times.
      but really? i was just learning how to win.
    `
  },
  {
    id: "4",
    from: "Legal Department",
    fromEmail: "legal@lockheedmartin.com",
    subject: "⚠️ cease and desist",
    snippet: "yeah, that happened. apparently 'lockheed martin coding challenge' was trademark infringement...",
    isRead: true,
    isStarred: true,
    isImportant: true,
    date: "1w ago",
    folder: "inbox",
    tags: ["LEGAL", "OOPS"],
    content: `
      **plot twist: when big corp lawyers slide into your DMs**
      
      so there i was, 17 years old, hosting coding challenges...
      
      ### the setup 🎯
      
      decided to name one of our events:
      **"lockheed martin coding challenge"**
      
      my logic: sounds official = more credibility
      their logic: trademark infringement = lawsuit time
      
      ### the email 📧
      
      subject: "URGENT: Trademark Infringement Notice"
      
      *formal legal language about intellectual property*
      *mentions of federal court*
      *very scary words i had to google*
      
      ### my reaction 😅
      
      1. panic
      2. call my dad
      3. google "how to respond to cease and desist"
      4. realize i'm not actually going to jail
      5. rebrand everything immediately
      
      ### the resolution ✅
      
      - changed the name to "aerospace coding challenge"
      - added disclaimer about no affiliation
      - learned about trademark law the hard way
      - got a cool story for founder dinners
      
      ### the lesson 📚
      
      **always check trademarks before naming anything.**
      
      also, big corp lawyers are surprisingly chill when you:
      - respond quickly
      - fix the issue immediately  
      - don't try to argue
      - show you're just a dumb teenager who didn't know better
      
      **pro tip:** ignorance isn't a defense, but being 17 helps.
      
      (lockheed martin, if you're reading this: sorry again. hire me?)
    `
  },
  {
    id: "5",
    from: "Family Business",
    fromEmail: "dad@familybiz.com", 
    subject: "👨‍👦 let's work together",
    snippet: "spoiler: it didn't work. mixing family and business when you're 17 and think you know everything...",
    isRead: true,
    isStarred: false,
    isImportant: false,
    date: "2w ago",
    folder: "inbox",
    tags: ["FAMILY", "BUSINESS"],
    content: `
      **when your dad wants to be your co-founder**
      
      this is awkward to write but here goes...
      
      ### the proposal 🤝
      
      dad: "beta, let's combine our businesses"
      me: "sure, sounds easy"
      narrator: "it was not easy"
      
      ### what seemed logical:
      - he has business experience
      - i have tech skills  
      - family = trust
      - instant partnership
      
      ### what actually happened:
      - different visions for the company
      - generational gap in understanding tech
      - mixing family dynamics with business decisions
      - arguments at dinner table about user acquisition
      
      ### the breaking point 💥
      
      him: "we should focus on b2b enterprise solutions"
      me: "dad, our users are literally teenagers"
      him: "experience matters more than age"
      me: "ok boomer" (didn't actually say this but wanted to)
      
      ### the resolution 🤝
      
      had the hardest conversation of my life.
      
      "dad, i love you, but we can't be business partners"
      
      explained that:
      - i need to fail on my own terms
      - mixing family and business is risky
      - different goals, different approaches
      - our relationship matters more than any company
      
      ### the outcome ❤️
      
      **he got it.**
      
      now he's my biggest supporter instead of my co-founder.
      gives advice when asked.
      celebrates wins.
      doesn't take it personally when i ignore his suggestions.
      
      **lesson learned:**
      love your family, work with your team.
      
      some relationships are too important to risk on a startup.
      
      (love you dad, thanks for understanding)
    `
  },
  {
    id: "6",
    from: "Early Startups",
    fromEmail: "intern@earlystartups.io",
    subject: "❌ application rejected",
    snippet: "no internship? built my own thing instead. sometimes rejection is redirection...",
    isRead: true,
    isStarred: false,
    isImportant: false,
    date: "1m ago",
    folder: "inbox",
    tags: ["REJECTION", "MOTIVATION"],
    content: `
      **plot twist: getting rejected from my dream internship**
      
      summer 2023. i was 16, ambitious, and completely delusional.
      
      ### the application 📝
      
      company: early-stage edtech startup
      position: "growth intern" 
      my qualifications: enthusiasm + zero experience
      their requirements: "must be in college"
      
      me: *applies anyway*
      
      ### the interview process 💼
      
      **round 1:** phone screening
      - talked about maximally for 30 minutes
      - they seemed impressed
      - "we'll be in touch"
      
      **round 2:** technical assignment
      - build a growth strategy for user acquisition
      - spent 3 days creating a 20-page deck
      - included mock campaigns, conversion funnels, metrics
      
      **round 3:** final interview
      - presented to 4 executives
      - nailed every question
      - left feeling confident
      
      ### the rejection email 📧
      
      "thank you for your interest... impressive for someone your age... unfortunately we've decided to go with someone who has more experience... we'd love to reconsider when you're in college..."
      
      ### my reaction cycle 😭➡️😤➡️💪
      
      **stage 1:** sadness
      - this was my dream role
      - felt like age discrimination  
      - questioned if dropping out was right
      
      **stage 2:** anger
      - "more experience" = boring college projects
      - i'm literally running events with 1000+ people
      - their loss
      
      **stage 3:** determination  
      - fine, i'll build my own opportunities
      - doubled down on maximally
      - turned rejection into rocket fuel
      
      ### the plot twist 🔄
      
      6 months later, that same startup:
      - reached out asking to partner
      - wanted me to run user acquisition for them
      - offered equity instead of internship salary
      
      **sometimes rejection is just bad timing.**
      
      ### the lesson 📚
      
      when someone says "you're not ready," prove them wrong.
      when someone says "come back later," build something so good they come to you.
      
      **best revenge? success.**
      
      (thanks for the motivation, unnamed startup. you know who you are.)
    `
  },
  {
    id: "7",
    from: "CBSE Board",
    fromEmail: "cbse@10thresults.in",
    subject: "🎉 congrats, 94% in boards",
    snippet: "good grades. bad timing. startup brain activated. when academic success feels hollow...",
    isRead: true,
    isStarred: false,
    isImportant: false,
    date: "6m ago",
    folder: "inbox",
    tags: ["EDUCATION", "GRADES"],
    content: `
      **when good grades feel like a consolation prize**
      
      may 2023. 10th board results day.
      
      ### the numbers 📊
      
      **94.2% overall**
      - mathematics: 98%
      - science: 96%  
      - english: 92%
      - social science: 94%
      - hindi: 89% (oops)
      
      ### everyone else's reaction 🎉
      
      parents: "we're so proud!"
      relatives: "excellent beta, now focus on 11th"
      friends: "bro you're set for IIT"
      teachers: "keep it up for boards"
      
      ### my reaction 😐
      
      "cool. anyway, back to planning codequest..."
      
      ### the weird part 🤔
      
      i studied maybe 2 months total.
      spent most of 10th building maximally.
      got good grades almost by accident.
      everyone assumed i was academically focused.
      
      **reality:** i was already mentally checked out of traditional education.
      
      ### the irony 😅
      
      while everyone celebrated my "academic success":
      - i was planning to drop out after 10th
      - maximally had 500+ community members
      - we'd hosted 3 successful events
      - i was learning more from youtube than textbooks
      
      ### the conversation 💬
      
      dad: "see? you can do both - studies and startups"
      me: "but i don't want to do both"
      dad: "these grades prove you're smart"
      me: "they prove i'm good at memorizing"
      
      ### the decision ⚡
      
      **94% convinced me to drop out.**
      
      if i could get these grades while barely trying...
      imagine what i could build with 100% focus on maximally.
      
      ### the lesson 📚
      
      success in the wrong game is still failure.
      
      good grades in a system you don't believe in ≠ success.
      **optimization for the wrong metrics = wasted potential.**
      
      so yeah, thanks for the 94%, cbse.
      it gave me the confidence to bet on myself.
      
      (still have the marksheet somewhere. might frame it ironically.)
    `
  }
];

export const folders = [
  { id: "inbox", name: "Inbox", count: 7 },
  { id: "makeathons", name: "Makeathons", count: 3 },
  { id: "studios", name: "Studios", count: 2 },
  { id: "business", name: "Mansplaining Business", count: 4 },
  { id: "thoughts", name: "Thoughts", count: 8 },
  { id: "braindump", name: "Brain Dump", count: 15 },
  { id: "received", name: "Received", count: 12 },
  { id: "drafts", name: "Drafts", count: 1 },
  { id: "spam", name: "Spam", count: 23 },
  { id: "archived", name: "Archived", count: 67 }
];
