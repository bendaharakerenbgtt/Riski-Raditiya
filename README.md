# InLiveIq — Personal Portfolio Website

> **Tagline**: *"A Curious Mind. A Continuous Journey."*  
> **Supporting Statement**: *"Driven by curiosity, shaped by learning, and expressed through sharing."*

InLiveIq is a personal editorial portfolio and reflective notebook built for an independent thinker, researcher, and builder. It rejects the generic clichés of AI startup landing pages, SaaS dashboards, and flashy tech templates, prioritizing typography, generous whitespace, clear content hierarchy, and authentic intellectual exploration.

---

## ✦ Key Highlights & Architecture

- **Clean Editorial Design**: Minimalist layout focused on typography (`Plus Jakarta Sans` with selective `Newsreader` italic emphasis), structural whitespace, and authentic writing.
- **Dual Independent Theme System**:
  - **Dark Theme**: Deep charcoal `#222126`, surface `#2A2930`, soft off-white text `#F0EFEB`, dusty violet accent `#9D84B7`.
  - **Light Theme**: Warm paper `#F5F3EF`, surface `#ECE9E3`, charcoal text `#252329`, dusty violet accent `#78618F`.
- **Signature Interaction (Multi-Point Organic Spreading Transition)**:
  - When the theme toggle is clicked, 7 organic origin points generate expanding wave ripples across a lightweight canvas layer.
  - The shapes expand organically, smoothly coalescing to reveal the incoming theme with zero color flashes.
  - Full debouncing prevents double-trigger glitches.
  - Respects `prefers-reduced-motion` with instant graceful fallback.
- **Full Website Structure**:
  - `index.html`: Editorial homepage (Hero, Introduction, Selected Projects, Current Interests, Knowledge & Insights, Closing Section, Footer).
  - `about.html`: Personal introduction, background, 5 core values, learning philosophy (Feynman standard, build-to-understand, editorial restraint), and aspirations.
  - `projects.html`: Interactive projects archive with category filters (Learning Tools, Psychology & Digital Design, Education & Mental Models).
  - `project-detail.html`: Comprehensive 10-point transparent architectural case studies (Overview, Background, Problem, Goals, Planning, Implementation, Technologies, Challenges & Pivots, Results, Reflection).
  - `insights.html`: Knowledge & reflections archive with topic filters.
  - `insight-detail.html`: Long-form article reader with reading time, key takeaways box, and related reading.
  - `contact.html`: Thoughtful dialogue invitations, one-click email copy button, and validated message form.
- **Zero Build Dependencies**:
  - Pure standards-compliant HTML5, CSS3 Custom Properties, and ES6+ JavaScript.
  - Can be opened directly in any browser via `index.html` or hosted on GitHub Pages / Vercel / Netlify.

---

## ✦ File Structure

```
InLiveIq/
├── index.html                   # Homepage
├── about.html                   # About & Philosophy
├── projects.html                # Project Archive with filters
├── project-detail.html          # Dynamic 10-point Case Study reader
├── insights.html                # Knowledge & Insights Archive
├── insight-detail.html          # Essay reader layout
├── contact.html                 # Contact & Direct Correspondence
├── css/
│   └── style.css                # Design tokens, themes, typography & responsive styles
├── js/
│   ├── theme-transition.js      # Signature multi-point organic transition
│   ├── data.js                  # Projects and essays data store
│   ├── detail.js                # Detail page dynamic render engine
│   └── main.js                  # Navigation, drawer, filters, scroll spy, forms
└── assets/
    └── images/                  # Clean vector diagrams for projects & essays
        ├── project-recallflow.svg
        ├── project-percept.svg
        ├── project-curio.svg
        ├── insight-synthesis.svg
        ├── insight-friction.svg
        └── insight-learning.svg
```

---

## ✦ How to View & Run

Simply double-click [`index.html`](index.html) to open in your default browser, or serve locally with any static HTTP server.
