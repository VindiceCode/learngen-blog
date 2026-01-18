# LearnGen Blog - Claude Code Context

## Project Overview

Personal blog at learngen.io. Built with Astro 5, Tailwind v4, deployed to Vercel.

## Content Workflow

### Interview → Draft → Publish Pipeline

1. **Interview** (private): Use `/interview` or `bloginterviewer` skill
   - Notes saved to `src/data/interview-notes/` (gitignored)
   - Contains raw material, voice notes, story seeds

2. **Review & Approve**: Author reviews interview notes
   - Promotes approved content to draft posts
   - Refines voice, structure, themes

3. **Draft** (in repo, not deployed): `src/data/blog/*.mdx` with `draft: true`
   - Visible in public repo but not on live site

4. **Publish**: Change `draft: false`
   - Deployed to learngen.io

### Key Directories

| Path | Visibility | Purpose |
|------|------------|---------|
| `src/data/interview-notes/` | Private (gitignored) | Raw interview material |
| `src/data/author/` | Private (gitignored) | Author profile drafts |
| `src/data/blog/` | Public repo | Blog posts (draft and published) |

## Custom Skills

### `/interview` Command
- Location: `.claude/commands/interview.md`
- Purpose: Extract blog content through conversational interview
- Output: Appends to `src/data/interview-notes/YYYY-MM-DD-{slug}.md`
- Key principle: Write observationally, not declaratively

### `bloginterviewer` Skill
- Location: `.claude/skills/bloginterviewer/SKILL.md`
- Purpose: Build author profile (identity, voice, brand language)
- Triggers: "interview me", "my background", "author profile", "writing style"
- Output: `src/data/interview-notes/` → eventually `src/data/author/profile.md`

## Blog Themes

The blog anchors on these themes (from author profile interview):

1. **The Orchestrator's Playbook** - How generalists win in the AI age
2. **Overflow** - When output capacity exceeds role, building in the margins
3. **Pattern Recognition** - Seeing the future by seeing the past deeply
4. **The Golden Path** - Philosophical undercurrent (Dune-inspired, People over Process and Tech)

## Writing Guidelines

### For interview notes (raw material)
- Capture humanity, not just achievements
- Observational notes, not declarative claims
- Exact quotes when possible
- Note where energy/enthusiasm spikes
- The author reviews and approves what becomes canonical

### For public-facing content (bio, about pages)
- Lead with perspective and value to the reader, not personal inventory
- Keep personal/family details in one contained section ("Outside of work"), not sprinkled throughout
- Avoid proclamation-style phrasing ("X is the manifesto", "The thesis:") - use "bet" over "thesis"
- No cheesy embellishments on family mentions - brief and direct
- Direct statements without emotional padding
- "Playing nice in meetings" tone - confident, not grandiose
- Save deeper philosophy (Dune, Zen, golden path) for blog posts, not bios

### BANNED writing patterns (AI slop)
- **"That's not X - it's Y"** - NEVER use this construction. Rewrite to state the point directly.

## Author Context (Ian Melchor)

### Core Operating System
- **Eastern (Zen)** for self-regulation, identity - formlessness, non-attachment to labels, "life finds a way"
- **Western (philosophy)** for intellectual work - ontology, structure, domain modeling
- Keeps The Gateless Gate in his office

### Key Mental Models
- **Thought → Value Time Optimization** - the metric that matters
- **Code has zero value** - only outcomes matter
- **The only moat is infrastructure** - systems that let you go from thought to value faster
- **Variance is a symptom** - not inevitable, result of bad upstream work
- **Nash equilibrium** - good enough well-executed beats optimal poorly-resourced
- **Pattern recognition as memory** - "it is just the PAST you see" (Dune reference)
- **Thought as the most real thing** - Life is a picture show running through your brain. But thought creates something more substantial than the brain or life itself. Whatever creative force powers the human soul is the most real thing - more real than its substrate. This is what AI cannot touch: it can recreate human *effort* but not human *ingenuity*. The spark that generates novelty, not just pattern-matches from the past.

### Influences
- David Epstein's *Range* (generalist thesis)
- Clayton Christensen / Jobs to Be Done
- Noam Brown's AI poker / Nash equilibrium video
- Dune - Leto II, the Golden Path, prescience as pattern recognition
- Hegel (Geist)
- John Frusciante (favorite musician) - foundational influence. Full passage from "One More of Me" and "After the Ending":

  > *What's gone will never come back / But it exists when you think of it / And what is anything anyway / But a series of things running through your brain*
  >
  > *All of the fucked things you do / Are the product of what's happened to you / Whatever you create from love / Is a gift from the place which some call up above / There's only the forces of hate and love / One breaks things down and one builds*
  >
  > *Everything is eternal / Nothingness does not exist / No thing has ever become nothing / And nothing has never become something / What is has always been and will always be*

  Key threads: presence ("every moment is first"), pattern recognition ("product of what's happened to you"), creation from love (building for people you love), the metaphysical being real (nothingness does not exist), building vs breaking down.

### Voice
- Direct, provocative, but empathetic
- Comfortable with the unresolved
- Resists fixed labels (Zen influence)
- "The Roman stance" - achievement over comfort, but the blog is the bridge
- Personal stakes visible (family, building for people he loves)

### Background
- 10 years as loan officer → Technical PM (domain expertise is embodied, not just knowledge)
- 1.6 years in tech/product professionally, contributing at senior level
- Brothers: Sr. Director BI (healthcare SaaS), Mid-market Sales AE (Monday.com)
- Using AI orchestration since OpenAI API launch (2022)
- Based in Denver

### Personal
- Plays acoustic guitar, does open mics occasionally in Denver
- May share John Frusciante cover videos on the blog
- Budding coffee enthusiast - makes coffee at home with Haley
- Partner: Haley (building CasePlanner for her)
- Son: Liam

## Related Resources

- **Author profile notes**: `src/data/interview-notes/2026-01-16-author-profile.md`
- **Deep interview guide**: `src/data/interview-notes/deepinterview.md`
- **Content calendar**: In author profile notes, "Blog Content Calendar" section
- **mmi-pm-brain tasks**: Synced blog post ideas marked done, mapped to themes
