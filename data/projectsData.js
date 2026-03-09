export const categoryLabels = {
  swe: 'SWE Project',
  uiux: 'UI/UX Design',
  consulting: 'Consulting',
};

export const techStackOptions = [
  'Python',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'TensorFlow',
  'Figma',
  'HTML/CSS',
  'AI',
  'Full-Stack',
];

export const projectsData = [
  {
    id: 1, 
    title: "Globify - Beautyin Product", 
    overview: "Designed and built the web interface for an AI voice review platform enabling beauty brands to gather customer insights through voice-based surveys.",
    description: `Led product design and frontend development for Voix (Beautyin), focusing on business-facing workflows for collecting and managing customer feedback. Designed survey interaction flows, product management pages, and an admin dashboard that allows brands to review voice-generated insights and manage survey campaigns. Built responsive interfaces and structured the frontend architecture to support scalable expansion to consumer-facing features currently in development. The platform was presented as part of the company’s product showcase at CES 2026.`,
    category: "swe",
    tags: ["Figma", "Next.js", "Typescript"],
    demoLink: "https://beautyin.site",
    image: "/assets/images/voix-landing.png",
    images: ["/assets/images/voix-landing.png", "/assets/images/voix-surveys.png"],    
  },
  // {
  //   id: 1,
  //   title: "Evernix MVP Prototype",
  //   overview: "Built an AI-driven investment platform for B2C users, simulating multi-agent behaviors and generating personalized investment rationales.", 
  //   description: `
  //   Led the development of the MVP for Evernix, designing AI investment agents that simulate multiple investor strategies. Generated beginner-friendly explanations to help new investors understand decisions, while producing full reports for advanced users. Conducted customer discovery surveys and usability tests to iterate on product features and business model, improving engagement and retention. Built the frontend using Next.js and backend logic in Python, integrating AI prompting for automated reasoning. Focused on scalable, maintainable code and incorporating feedback loops from early adopters to refine the platform.
  //   `,
  //   category: "swe",
  //   tags: ["Next.js", "Python"],
  //   demoLink: "#",
  //   githubLink: "#",
  // },
  {
    id: 4,
    title: "AI Course Recommendation Platform",
    overview: "Full-stack React + TensorFlow web app providing personalized course recommendations based on student profiles.",
    description: `
    Built a full-stack web app using React for frontend and TensorFlow/Keras for backend predictive modeling. Trained models on manually generated datasets and AI-augmented data to predict course recommendations based on GPA, target school, and major. Implemented interactive data-driven UI to help students explore suggested courses and understand rationale behind recommendations. Used useState, useEffect, and context hooks to manage state and ensure responsive, intuitive user experience.
    `,
    category: "swe",
    tags: ["TensorFlow", "React", "Python"],
    demoLink: "https://ai-classrec.onrender.com/",
    githubLink: "https://github.com/02clarakim/ai_classrec",
    image: "/assets/images/airec-landing.png",
    images: ["/assets/images/airec-landing.png", "/assets/images/airec-result.png"]
  },
  {
    id: 3,
    title: "Fasoo Design System (FDS) UI Library",
    overview: "Created a reusable Flutter component library to improve cross-platform design consistency and developer efficiency.",
    description: `
    Developed a Flutter UI library from scratch (buttons, dialogs, inputs, etc.) without relying on Material components. Analyzed company Figma files and existing apps to design reusable, maintainable components that integrated seamlessly. Collaborated with designers to capture design intent, negotiated folder structure and MVVM architecture for long-term scalability. Converted an internal company app fully to use the library, enhancing cross-platform UX consistency and developer efficiency.
    `,
    category: "uiux",
    tags: ["Flutter", "Figma"],
    demoLink: "https://fds-mobile-demo.web.app/",
    image: "/assets/images/fds-light-buttons.png",
    images: ["/assets/images/fds-light-buttons.png", "/assets/images/fds-dark-list.png"],
  },
  {
    id: 9,
    title: "Builder - Gamified Productivity App",
    overview: "Builder is a gamified productivity app designed to help college students maintain focus and reduce digital distractions. The concept transforms focused work sessions into a progression system where users build and customize a virtual island as they complete tasks.",
    problem: `College students often struggle to maintain focus due to constant digital distractions, cognitive overload, and lack of motivation. Existing productivity apps focus heavily on task lists but fail to sustain long-term engagement.`,
    process: `Conducted 9 user interviews and usability testing sessions with undergraduate students to identify pain points in task management and motivation. Key insights revealed that users felt overwhelmed by complex task interfaces and preferred a single, central focus timer.

Based on these insights, I designed interaction flows and prototypes in Figma, introducing:

    • Task-linked Pomodoro timers
    • Difficulty-based reward multipliers
    • Visual progression through customizable island environments
    • Lightweight social accountability through friend leaderboards

Iterated on navigation and screen hierarchy to simplify the main workflow: select task → start focus session → earn rewards.`,
    outcome: "The final prototype integrates behavioral design principles such as habit formation, variable rewards, and cognitive offloading to encourage sustained focus while keeping the experience engaging and intuitive.",
    category: "uiux",
    tags: ["Figma"],
    image: "/assets/images/builder1.png",
    images: ["/assets/images/builder1.png", "/assets/images/builder2.png", "/assets/images/builder3.png"]
  },
  {
    id: 2,
    title: "ZEP Video Creation & Automation",
    overview: "Built an automated pipeline to AI-generate quizzes and learning videos, enabling global reach and scaling content creation for educators.",
    description: `
Developed Python scripts to generate quizzes and convert them into short educational videos for YouTube and social media, helping educators scale content production beyond Korea/Asia. Used n8n for workflow automation and Coolify for hosting, enabling seamless deployment of content pipelines. Designed AI prompts to produce quiz questions and explanations automatically, while validating results for accuracy and engagement. Enhanced the platform's reach and efficiency, reducing hours of manual work while maintaining user-focused learning quality.
    `,
    category: "swe",
    tags: ["Python", "Figma"],
    githubLink: "https://github.com/98sean/likelion-zep-video-generation",
    image: "/assets/images/zep-youtube-img.png"
  },
  {
    id: 8,
    title: "Bondit - Onboarding UX Redesign",
    overview: "Bondit is a scheduling and social networking platform for college students. This project focused on improving the onboarding and login experience to reduce early user drop-off. [IDEA Factory Consulting Project]",
    problem: `
    User analytics from the client indicated that many new users abandoned the app during the onboarding and login process.`,
    process: `Conducted 2 rounds of 15+ usability interviews where participants navigated the onboarding flow while verbalizing their thoughts and reactions. Organized insights using affinity diagrams and identified several key friction points:

    • Login process was overly long -> Reduced process by 50%
    • The app’s value proposition was unclear during onboarding
    • Privacy concerns around the map feature

Performed competitive analysis of similar student platforms and mapped the existing information architecture to identify structural issues.

Using Figma, designed wireframes and interaction improvements that streamlined the login process and clarified the product’s purpose earlier in the onboarding flow.`,
    outcome: "The redesigned onboarding flow reduced cognitive friction by 42% and emphasized Bondit’s core value as a social-academic platform for students.",
    category: "consulting",
    tags: ["Figma"],
    image: ["/assets/images/bondit/bondit-figma1.png"],
    images: ["/assets/images/bondit/bondit-figma1.png", "/assets/images/bondit/bondit-journey.png", "/assets/images/bondit/bondit-postits.png", "/assets/images/bondit/Persona-01.png"],
  },
  {
    id: 5,
    title: "CAHL Lab – Adaptive Learning Platform",
    overview: "Enhanced an educational platform that personalizes lessons using Bayesian Knowledge Tracing.",
    description: `
    Worked with React functional components and hooks (useState, useEffect, useContext) to process student data and generate JSON lesson plans. Implemented Bayesian Knowledge Tracing to suggest personalized tasks based on student mastery and engagement. Refactored UI from Material UI components to custom functional components for maintainability and improved user experience. Collaborated with educators to refine lesson sequencing and adapt platform behavior based on feedback.
    `,
    category: "swe",
    tags: ["React", "JavaScript"],
    githubLink: "https://github.com/CAHLR/OATutor?tab=readme-ov-file",
    image: "/assets/images/oatutor-img1.png"
  },
  // {
  //   id: 6,
  //   title: "AIED Lab – Attention Detection",
  //   overview: "Developed a computer vision system to measure attention and focus via webcam.",
  //   description: `
  //   Used OpenCV and Dlib to detect faces and track eye openness, implementing thresholds for attention and handling false positives. Built experiments with Pygame to visualize attention and tested usability under constrained resources. Implemented logic for blink detection, attention alerts, and error handling for varying user behaviors. Refined algorithms and conducted A/B testing with quizzes and surveys to optimize alert accuracy and user comfort.
  //   `,
  //   category: "swe",
  //   tags: ["Python"],
  //   demoLink: "#",
  //   githubLink: "https://github.com/joseph-kimm/AI_CU",
  // },
  {
    id: 7,
    title: "WeatherWear – Hackathon MVP",
    overview: "Created an interactive, animated weather app with ratings and visuals.",
    description: `
    Designed an animated UI with sunrise/sunset visuals and interactive rating bars. Built the MVP in TypeScript during a hackathon, focusing on frontend animations and user engagement. Learned TypeScript and experimented with integrating dynamic components for interactive user experience.
    `,
    category: "swe",
    tags: ["TypeScript"],
    demoLink: "https://weather-wear-fe.vercel.app/",
    githubLink: "https://github.com/hyeyoungcha/WeatherWearFE",
    image: "/assets/images/wwear-landing.png"
  },
  
  {
    id: 10,
    title: "MirrorClear - Design Research + 3D Modeling",
    overview: "MirrorClear is a concept design exploring how technology could help users understand the effectiveness of their skincare routines.",
    problem: "Many skincare users rely on subjective visual cues to determine whether their cleansing routines effectively remove makeup and residue.", 
    process: `Conducted mixed-method research including:

    • 68 survey responses
    • 13 user interviews
    • 1 expert interview with an esthetician

Synthesized insights using affinity diagrams and personas to understand common cleansing habits and frustrations.

Based on these findings, our team explored several potential product directions before selecting a smart mirror concept that visually highlights residue left on the skin after cleansing.

Developed both a physical prototype by 3D Printing and digital simulation demonstrating how users would interact with the mirror interface.`,
    outcome: "The final concept provides real-time visual feedback that helps users identify areas where residue remains, transforming an invisible skincare outcome into actionable information.", 
    category: "uiux",
    tags: ["SolidWorks", "Figma"],
    image: "/assets/images/mirrorclear-process.png",
    images: ["/assets/images/mirrorclear-research.png", "/assets/images/mirrorclear-process.png", "/assets/images/mirrorclear-outcome.png", "/assets/images/mirrorclear-physical.png"],
  },
  
];
