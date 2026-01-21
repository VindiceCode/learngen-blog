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

## Writing Guidelines

### BANNED writing patterns (AI slop)
- **"That's not X - it's Y"** - NEVER use this construction. Rewrite to state the point directly.

### For public-facing content
- Lead with perspective and value to the reader, not personal inventory
- Direct statements without emotional padding
- Confident, not grandiose
