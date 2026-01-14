# LearnGen Blog

Personal blog at [learngen.io](https://learngen.io) - building and learning in public.

## Stack

- **Framework:** [Astro](https://astro.build) 5 with MDX
- **Styling:** Tailwind CSS v4
- **Deployment:** Vercel

## Development

```bash
npm install
npm run dev
```

## Features

- [x] Dark mode with system preference detection
- [x] MDX content collection
- [x] SEO basics (OpenGraph, sitemap)
- [ ] Pagefind search
- [ ] Tags filtering
- [ ] Reading time
- [ ] Related posts
- [ ] RSS feed
- [ ] Table of contents

## Content

Blog posts live in `src/data/blog/` as MDX files with frontmatter:

```yaml
---
title: "Post Title"
description: "Short description"
pubDate: 2025-01-13
tags: ["tag1", "tag2"]
draft: false
---
```

## License

MIT
