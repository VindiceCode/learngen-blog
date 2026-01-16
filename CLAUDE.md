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

- Capture humanity, not just achievements
- Observational notes, not declarative claims
- Exact quotes when possible
- Note where energy/enthusiasm spikes
- The author reviews and approves what becomes canonical
