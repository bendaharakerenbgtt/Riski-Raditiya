---
name: web-typography
description: 'Select, pair, and implement typefaces for web projects. Use when the user mentions "font pairing", "which typeface", "line height", "responsive typography", "web font loading", "type hierarchy", "variable fonts", "FOUT/FOIT", "typographic scale", or "the text is hard to read". Also trigger when choosing between system fonts and web fonts, optimizing font-loading performance, or designing readable long-form content. Covers readability evaluation, CSS implementation, and performance optimization. For overall UI design systems, see refactoring-ui. For dramatic typographic experiences, see top-design.'
license: MIT
metadata:
  author: wondelai
  version: "1.5.0"
---

# Web Typography

A practical guide to choosing, pairing, and implementing typefaces for the web. The best typography is invisible — it immerses readers in content rather than calling attention to itself.

## Core Principle

**Typography is the voice of your content.** The typeface you choose sets tone before a single word is read. Follow the "clear goblet" principle: typography should be like a crystal-clear wine glass, keeping focus on the wine (content), not the glass (type).

## Two Contexts for Type

All typography falls into two categories:

| Context | Purpose | Priorities |
|---------|---------|------------|
| **Type for a moment** | Headlines, buttons, navigation, marks | Personality, impact, distinctiveness |
| **Type to live with** | Body text, articles, case studies | Readability, comfort, endurance |

## Typography Framework

### 1. Readability Mechanics

- **Saccades & Line Length**: Keep body text line length capped at `65ch` (~45–75 characters per line). Beyond 75 characters, the reader's eye loses its position on the return sweep.
- **Line Height**: Maintain `1.5` to `1.7` for body text to allow comfortable vertical breathing. For large display headings, tighten line height to `1.15` to `1.25` so lines do not drift apart.
- **Size Scale**: Body text must be at least `16px` (preferably `17–18px` for reading-heavy editorial pages).
- **Text Wrap**: Use `text-wrap: balance` on headlines to prevent awkward orphan words.

### 2. Typographic Hierarchy

- Maintain a strong mathematical or visual ratio between heading levels (e.g. 1.25 Major Third or 1.333 Perfect Fourth).
- Use distinct weight and size contrast between `H1`, `H2`, `H3`, and body text so scanners immediately grasp hierarchy.

### 3. Responsive Typography

- Use fluid typography with `clamp(min, preferred, max)` to ensure text scales smoothly across all viewports without jarring media query jumps.

## Quick Diagnostic Checklist

| Check | Target |
|---|---|
| Body text size | `>= 16px` (prefer `17-18px`) |
| Line length | `<= 65-75ch` on prose and lead paragraphs |
| Line height | `1.5-1.7` on body; `1.15-1.25` on large titles |
| Headline balance | `text-wrap: balance` on titles |
| Zoom resilience | Survives `200%` zoom without truncation |
| Typographic contrast | Distinct contrast between headings, metadata, and body |
