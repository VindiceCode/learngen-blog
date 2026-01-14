# LearnGen Blog

Personal blog at [learngen.io](https://learngen.io)

## Stack

- Astro 5 + MDX
- Tailwind CSS v4
- Pagefind (static search)
- Vercel

## Development

```bash
npm install
npm run dev        # dev server (search unavailable)
npm run build      # build + pagefind index
npm run preview    # serve built site (search works)
```

## Features

- Dark mode (system preference + toggle)
- Pagefind search (`Cmd+K`)
- Tags filtering (`/tags`, `/tags/[tag]`)
- Reading time on posts
- Related posts (tag-based matching)
- RSS feed (`/rss.xml`)
- Table of contents (auto-generated from headings)
- SEO (OpenGraph, sitemap)

## Content

Posts in `src/data/blog/` as MDX:

```yaml
---
title: "Post Title"
description: "Short description"
pubDate: 2025-01-13
tags: ["tag1", "tag2"]
draft: false
---
```

## Structure

```
src/
├── components/     # Header, Footer, Search, TOC, RelatedPosts
├── data/blog/      # MDX posts
├── layouts/        # BaseLayout, PostLayout
├── pages/          # Routes (index, about, tags, posts)
├── styles/         # Global CSS + dark mode vars
└── utils/          # Reading time calculation
```

## License

MIT
