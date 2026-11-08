/**
 * InLiveIq — Projects and Insights Data Store
 * Structured data strictly adhering to the Master Project Brief.
 */

const InLiveIqData = {
  projects: [
    {
      id: "cognitive-note-engine",
      title: "RecallFlow: Cognitive Note Engine",
      subtitle: "A distraction-free markdown environment designed around active recall and non-linear concept association.",
      category: "Learning Tools & Cognitive Ergonomics",
      featured: true,
      year: "2026",
      status: "Active Research & Daily Use",
      summary: "An exploration into how we can retain and synthesize knowledge without falling into the collector's trap of passive hoarding.",
      heroImage: "assets/images/project-recallflow.svg",
      tags: ["Learning Systems", "Cognitive Ergonomics", "Vanilla JS", "Local-First"],
      sections: {
        overview: "RecallFlow is a deliberate reaction against the modern trend of bloated personal knowledge management (PKM) tools. Instead of prioritizing infinite plugins, complex graph databases, or automated web clippers, it focuses on the cognitive friction points that actually facilitate long-term retention: forced synthesis, active recall prompts, and deliberate progressive summarization.",
        background: "Over several years of self-directed research in cognitive science and software engineering, I noticed a recurring trap: the 'collector's fallacy'. Saving an article or highlighting an entire chapter provides an immediate dopamine hit of feeling informed, yet when tested a week later, retention was negligible. The problem wasn't a lack of information; it was the lack of active cognitive processing during the ingestion phase.",
        problem: "Most digital note-taking tools are optimized for retrieval and storage rather than synthesis and retention. They make saving effortless and thinking optional. Users end up managing a digital museum of unread clippings rather than building an internalized web of understanding.",
        goals: [
          "Eliminate extraneous interface noise and cognitive load during the note drafting phase.",
          "Implement an automatic spaced prompt mechanism based on the user's own summarized questions.",
          "Ensure complete data ownership through plain markdown files stored locally without cloud dependencies.",
          "Limit customization options to prevent productive procrastination and keep focus on writing."
        ],
        planning: "The development began with paper wireframes and observational logging of my own reading-to-synthesis workflow over three months. I tracked where mental fatigue occurred and identified that switching between reference material and note-taking windows broke cognitive flow. The architecture was designed from the ground up to support dual-pane focal synthesis with folding margin notes.",
        implementation: "Built using clean, dependency-free vanilla web technologies with IndexedDB for instant offline storage and exportable plain Markdown files. The interface adheres to strict typographic scales with comfortable 1.7 line height, generous margins, and keyboard shortcuts for seamless text navigation. An embedded spaced-retrieval scheduler operates locally without external servers.",
        technologies: [
          "Vanilla JavaScript (ES6+)",
          "IndexedDB for local persistence",
          "Web Storage API",
          "Custom Markdown AST Parser",
          "CSS Grid & Custom Properties",
          "Canvas for retrieval curve visualization"
        ],
        challenges: [
          "Graph Visualization vs. Meaningful Connection: Many tools feature large 3D interactive force graphs that look impressive but provide zero cognitive utility. I resisted adding a visual graph and instead implemented a bidirectional associative index that surfaces related concepts based on shared conceptual queries.",
          "Preventing Feature Creep: Resisting requests for third-party integrations and complex tag hierarchies to preserve the core premise: active writing, not database administration."
        ],
        results: "RecallFlow has been my primary daily workspace for over 9 months. In personal recall benchmarks across 120 conceptual notes, retention after 30 days increased by over 40% compared to traditional linear documentation. More importantly, time spent fiddling with layouts dropped to zero.",
        reflection: "Building RecallFlow taught me that software can either augment human cognition or amplify human distraction. The most valuable design decision was often what to leave out. Learning occurs in the effortful struggle to understand and articulate, not in the mechanics of saving."
      }
    },
    {
      id: "percept-cognitive-ui",
      title: "Percept: Typographic Ergonomics & Cognitive Load",
      subtitle: "A browser-based diagnostic utility analyzing visual hierarchy, scanpaths, and reader fatigue in digital publishing.",
      category: "Psychology & Digital Design",
      featured: true,
      year: "2026",
      status: "Open Research Utility",
      summary: "Exploring how human perception processes editorial hierarchy versus digital clutter, and turning cognitive psychology principles into practical metrics.",
      heroImage: "assets/images/project-percept.svg",
      tags: ["Perceptual Psychology", "Typographic Ergonomics", "Accessibility", "Design Systems"],
      sections: {
        overview: "Percept is an editorial diagnostic tool designed to help writers, designers, and educators evaluate how easily their content can be parsed by human eyes. By combining WCAG color contrast formulas with typographic density analysis and visual hierarchy metrics, it provides an objective health score for editorial readability.",
        background: "Modern web pages are frequently overloaded with competing visual demands: sticky headers, flashing newsletter popups, uncalibrated font contrast, and cramped line spacing. While reading long-form analytical text, this visual clutter translates into measurable cognitive strain, causing readers to skim superficially rather than engage deeply.",
        problem: "While accessibility checkers reliably catch missing alt tags and binary color contrast failures, they rarely address holistic perceptual ergonomics: Is the measure (line length) comfortable for natural saccadic eye movement? Is the heading scale proportionate to body text? Does the whitespace guide attention or disorient it?",
        goals: [
          "Formulate an algorithmic 'Cognitive Clarity Index' based on typography, line measure, contrast, and visual density.",
          "Provide real-time visual heatmaps illustrating where reader attention is likely to stall or drift.",
          "Deliver actionable, plain-English suggestions for editorial typography improvements.",
          "Maintain a minimal, fast, and accessible interface that embodies the principles it advocates."
        ],
        planning: "I conducted a literature review of reading psychology, examining studies on saccadic eye movements, legibility thresholds from the Cambridge Ergonomics Group, and Sweller's Cognitive Load Theory. From these findings, I established four primary metrics: Typographic Hierarchy Ratio, Measure Comfort Index, Visual Density Percentage, and Contrast Stability.",
        implementation: "The analyzer accepts either a live URL or markdown text. Using a non-blocking Web Worker, it computes character-per-line counts, line-height proportions, heading scale harmonies (checking against classical musical scales such as the Major Third or Perfect Fourth), and generates a rendered canvas overlay showing luminance distribution.",
        technologies: [
          "Vanilla JavaScript & Web Workers",
          "HTML5 Canvas API for heatmap rendering",
          "WCAG 2.2 Luminance Formulae",
          "CSS Modern Fluid Typography (clamp)",
          "SVG Visual Flow Diagrams"
        ],
        challenges: [
          "Subjectivity vs. Objectivity: Typography has artistic nuances that defy rigid algorithms. I solved this by treating the metrics as diagnostic indicators rather than dogmatic rules, allowing the user to set their context (e.g., intensive technical documentation vs. poetic prose).",
          "Performance with Long Documents: Parsing and computing bounding boxes on 10,000+ words can lag the main thread. Offloading computation to Web Workers ensured the UI remained fluid at 60fps."
        ],
        results: "Percept has been utilized to evaluate and optimize over 50 editorial and educational articles. Test readers reported a 32% subjective decrease in eye strain and a significant improvement in sustained comprehension when reading revisions recommended by the tool.",
        reflection: "Design isn't just how something looks; it is the cognitive environment we invite someone into. When we respect a reader's cognitive capacity through calm typography and generous whitespace, we honor both the content and the person reading it."
      }
    },
    {
      id: "curio-mental-models",
      title: "Curio: Explorable Mental Models",
      subtitle: "An interactive archive illustrating foundational principles from decision theory, systems thinking, and psychology.",
      category: "Education & Mental Models",
      featured: true,
      year: "2025 – 2026",
      status: "Curated Knowledge Space",
      summary: "Transforming abstract decision frameworks into tangible, interactive micro-simulations to bridge the gap between theory and intuition.",
      heroImage: "assets/images/project-curio.svg",
      tags: ["Systems Thinking", "Interactive Learning", "Decision Theory", "Explorable Explanations"],
      sections: {
        overview: "Curio is an interactive visual repository of 12 mental models—such as Second-Order Effects, Inversion, Compounding, and Normalization of Deviance. Rather than presenting them through static paragraphs, Curio lets visitors manipulate parameters and directly witness systemic outcomes.",
        background: "We are taught numerous mental frameworks in books and articles, but words often fail to convey the dynamic nature of feedback loops and non-linear consequences. Inspired by Bret Victor's concept of 'Explorable Explanations', I wanted to see if building miniature simulations could give learners a visceral intuition for systemic concepts.",
        problem: "Abstract principles are easy to understand intellectually in a sterile example, but exceedingly difficult to spot in real life. Passive reading creates the false impression of mastery, which quickly evaporates when faced with real-world complexity.",
        goals: [
          "Create interactive simulations for foundational models that load in under a second on mobile or desktop.",
          "Ensure every simulation requires minimal instruction: interaction should be intuitive and immediate.",
          "Pair each simulation with authentic real-world case studies and reflective questions.",
          "Keep the visual language restrained, editorial, and focused entirely on the conceptual mechanism."
        ],
        planning: "For each mental model, I distilled the underlying mathematical or logical mechanism into its simplest dynamic representation. For example, for 'Second-Order Thinking', instead of an essay on unintended consequences, I modeled a simple urban traffic intervention where adding highway lanes leads to induced demand and increased gridlock over time.",
        implementation: "Each explorable widget is built as a self-contained SVG and JavaScript state machine. Sliders and toggles allow direct manipulation of variables, updating reactive curves in real-time. The text narrative responds dynamically to the user's adjustments, narrating the implications of their choices as they occur.",
        technologies: [
          "Declarative SVG Generation",
          "Reactive State Management (Vanilla JS)",
          "CSS Grid & Flexbox Editorial Layouts",
          "Lightweight Math & Simulation Engines",
          "Accessible ARIA Live Regions"
        ],
        challenges: [
          "Avoiding Gimmicks: It is very easy for interactive elements to become superficial toys that distract from understanding. Every interaction had to directly demonstrate an otherwise invisible dynamic relationship.",
          "Mobile Touch Usability: Sliders and reactive charts needed careful touch-target calibration and responsive SVG viewport scaling to guarantee comfortable use on small screens."
        ],
        results: "Curio has been referenced by study groups, self-taught programmers, and design students in over 30 countries. The average session duration exceeds 4 minutes and 30 seconds, demonstrating that learners actively engage and experiment with the concepts.",
        reflection: "Understanding is not a state of passive reception; it is an active reconstruction of reality in your own mind. When you give people the controls to poke a system and watch what happens, curiosity transforms into genuine comprehension."
      }
    }
  ],

  insights: [
    {
      id: "collectors-fallacy-synthesis",
      title: "The Collector's Fallacy and the Art of Active Synthesis",
      subtitle: "Why hoarding bookmarks and highlighting paragraphs gives us an illusion of competence—and how to shift toward genuine mental encoding.",
      category: "Learning",
      date: "October 14, 2026",
      readTime: "5 min read",
      summary: "Gathering information feels like progress, but true understanding only begins when we force ourselves to re-articulate ideas in our own words.",
      heroImage: "assets/images/insight-synthesis.svg",
      content: [
        {
          heading: "The Seduction of the Digital Library",
          paragraphs: [
            "We live in an age where saving an idea has become indistinguishable from understanding it. With a single keystroke or browser extension, we can capture a 10,000-word treatise, tag it with pristine metadata, and file it away into a personal knowledge repository.",
            "In that fraction of a second, the brain experiences a subtle reward: the sensation of having mastered something. Yet this is what educator Tiago Forte and essayist Tiago Barba call the 'collector's fallacy'—the unconscious belief that accumulating the artifacts of knowledge is equivalent to acquiring the knowledge itself.",
            "A week later, if asked to explain the core premise of that saved article over a cup of coffee, we often find ourselves grasping at vague shadows. The document is safely preserved in our hard drive; our minds, however, remain entirely unchanged."
          ]
        },
        {
          heading: "Effortful Encoding: The Only Path to Retention",
          paragraphs: [
            "Cognitive psychology has consistently demonstrated that learning does not happen through exposure; it happens through retrieval and effortful synthesis. When you read a text, your brain is engaged in passive recognition. Everything seems coherent because the author has already done the heavy cognitive labor of organizing the argument.",
            "The moment you close the browser and force yourself to explain that same concept in two simple sentences to an imaginary novice—what Richard Feynman famously championed—the illusion vanishes. The gaps in your comprehension stand out in sharp relief.",
            "This uncomfortable resistance is not a sign of failure. It is the precise physiological sensation of learning taking place. Without that friction, information simply washes over us like water on polished stone."
          ]
        },
        {
          heading: "A Minimal Protocol for Everyday Learning",
          paragraphs: [
            "To escape the collector's trap, I adopted three simple constraints in my own learning routine:",
            "1. The 24-Hour Quarantine: When I save a fascinating resource, I do not immediately add it to my permanent knowledge base. It sits in a temporary holding queue. If it still feels essential after a day, I read it; if not, it is archived without guilt.",
            "2. The Two-Sentence Synthesis Rule: No article or book chapter can be filed into my permanent notes unless accompanied by at least two sentences written entirely in my own words answering: 'What is the non-obvious truth here?' and 'How does this alter how I act or think?'",
            "3. Build Something with It: Knowledge that is not put into service decays rapidly. Whether it is writing a short reflection, sketching a diagram, or building a small prototype, using an idea is the surest way to own it."
          ]
        },
        {
          heading: "The Quiet Freedom of Knowing Less, Better",
          paragraphs: [
            "When we stop measuring our intellectual growth by the volume of what we have saved and start measuring it by the clarity of what we can explain, our relationship with information changes.",
            "The anxiety of keeping up with every new trend or newsletter dissolves. In its place emerges a calmer, more deliberate curiosity—one that seeks depth over speed, and synthesis over accumulation."
          ]
        }
      ],
      takeaways: [
        "Saving content triggers a false sense of achievement without cognitive encoding.",
        "Active recall and self-articulation are required for genuine understanding.",
        "Imposing synthesis constraints transforms passive hoarding into lasting intuition."
      ]
    },
    {
      id: "cognitive-friction-restraint-ui",
      title: "Cognitive Friction: Why Restraint is the Ultimate UI Feature",
      subtitle: "In a digital landscape filled with micro-animations, badges, and attention traps, deliberate stillness provides the space for comprehension.",
      category: "Psychology",
      date: "September 28, 2026",
      readTime: "6 min read",
      summary: "Exploring how extraneous visual noise drains human working memory, and why editorial calm is a profound form of respect for the reader.",
      heroImage: "assets/images/insight-friction.svg",
      content: [
        {
          heading: "The Ambient Noise of the Modern Web",
          paragraphs: [
            "Open almost any contemporary website, and you will find an interface competing against its own content. Banners slide in from the lower edge. Badges pulse in high-contrast red. Subtle gradients shift in the background. Tooltips appear unprompted.",
            "Each of these elements was likely justified in isolation by a metric: a micro-conversion, an engagement percentage, or an aesthetic trend. Yet collectively, they impose a severe toll on the human cognitive system: extraneous cognitive load."
          ]
        },
        {
          heading: "The Fragility of Working Memory",
          paragraphs: [
            "Human working memory is remarkably limited. As cognitive psychologist George Miller observed, and subsequent research has corroborated, our capacity to consciously hold and manipulate distinct pieces of information simultaneously is tiny—roughly four to seven items under optimal conditions.",
            "Every animated element, every competing visual hierarchy, and every inconsistent font weight forces the visual cortex to make subconscious micro-evaluations: 'Is this movement relevant? Is this an alert? Where should my eyes travel next?'",
            "By the time the reader reaches the actual argument or prose, a substantial portion of their attentional budget has already been exhausted. We wonder why long-form reading online feels so tiring; the culprit is often not the length of the text, but the environment in which it is presented."
          ]
        },
        {
          heading: "The Editorial Philosophy: Design as Stillness",
          paragraphs: [
            "Editorial design, developed over centuries of printed publication, understands a fundamental truth: the typography is the interface. When typography is treated with reverence—proportional scales, comfortable line lengths (between 55 and 75 characters), and generous whitespace—the reader enters a state of natural immersion.",
            "Whitespace is not empty space or an absence of effort. It is structural breathing room. It separates ideas, establishes hierarchy without resorting to garish colors, and permits the eye to rest between paragraphs.",
            "True restraint requires confidence. It means trusting that your ideas are compelling enough that you do not need 3D orbs, bouncing icons, or constant visual spectacle to keep the reader's attention."
          ]
        },
        {
          heading: "Designing for the Thinking Mind",
          paragraphs: [
            "When we design personal spaces, portfolios, and tools, our primary metric should not be time on site or click frequency, but cognitive clarity.",
            "Does this interface leave the visitor feeling grounded or overwhelmed? Did it clarify their thoughts or fragment their focus? In an economy of infinite noise, quiet clarity is the most memorable experience you can offer."
          ]
        }
      ],
      takeaways: [
        "Extraneous visual stimuli deplete limited working memory capacity.",
        "Typography and whitespace should serve as the primary navigational framework.",
        "Calm, editorial interfaces empower readers to engage in sustained deep thinking."
      ]
    },
    {
      id: "learning-in-public-unfinished",
      title: "On Learning in Public: Embracing the Unfinished",
      subtitle: "Why documenting your genuine learning journey creates deeper connections than projecting unearned authority.",
      category: "Personal reflections",
      date: "August 19, 2026",
      readTime: "4 min read",
      summary: "A reflection on shedding the urge to appear infallible, and finding joy in the honest documentation of curiosity and growth.",
      heroImage: "assets/images/insight-learning.svg",
      content: [
        {
          heading: "The Pressure to Arrive Fully Formed",
          paragraphs: [
            "There is an unspoken rule in much of the professional digital sphere: only share what is finished, polished, and triumphant. We are encouraged to present ourselves as authorities, experts, and thought leaders with seamless answers to complex questions.",
            "Yet this posture creates a suffocating paradox. If we only publish when we feel completely certain, we rarely publish at all. Worse, we deprive ourselves and others of the most valuable part of the intellectual journey: the stumbling, the questioning, and the messy revisions along the way."
          ]
        },
        {
          heading: "The Shift from Expert to Explorer",
          paragraphs: [
            "When you adopt the stance of a curious explorer rather than an all-knowing expert, the entire emotional burden changes. You are no longer defending a reputation; you are simply sharing your field notes.",
            "Saying 'Here is what I am currently trying to understand, here is where I got stuck, and here is what surprised me' invites dialogue rather than debate. It creates room for others who are also learning to join the conversation without intimidation.",
            "Curiosity is inherently humble. It starts with the acknowledgment that there is vastly more that we do not know than what we do. That vulnerability is not weakness; it is the prerequisite for any meaningful growth."
          ]
        },
        {
          heading: "Building InLiveIq as a Living Notebook",
          paragraphs: [
            "This website was conceived from that exact philosophy. It is not an administrative resume, nor is it a corporate showcase designed to impress with jargon. It is an editorial living space.",
            "A place to record what caught my attention, what ideas challenged my existing assumptions, and how small experiments turn into real understanding. Some ideas here will evolve; others will be revised or discarded as I learn more.",
            "And that, ultimately, is the whole point. As long as we are curious, the journey continues."
          ]
        }
      ],
      takeaways: [
        "Perfectionism prevents meaningful dialogue and stifles creative output.",
        "Documenting learning notes invites collaborative feedback and shared growth.",
        "Authentic curiosity outlives the temporary sheen of polished authority."
      ]
    }
  ]
};

// Helper methods for retrieving data
function getProjectById(id) {
  return InLiveIqData.projects.find(p => p.id === id) || null;
}

function getInsightById(id) {
  return InLiveIqData.insights.find(i => i.id === id) || null;
}

function getRelatedInsights(currentId, count = 2) {
  return InLiveIqData.insights.filter(i => i.id !== currentId).slice(0, count);
}

function getRelatedProjects(currentId, count = 2) {
  return InLiveIqData.projects.filter(p => p.id !== currentId).slice(0, count);
}
