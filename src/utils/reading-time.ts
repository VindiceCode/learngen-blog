/**
 * Calculate reading time for a given text content.
 * Assumes an average reading speed of 200 words per minute.
 */

const WORDS_PER_MINUTE = 200;

export function calculateReadingTime(content: string): number {
  // Remove MDX/JSX components and frontmatter
  const cleanContent = content
    .replace(/---[\s\S]*?---/, '') // Remove frontmatter
    .replace(/<[^>]+>/g, '') // Remove HTML/JSX tags
    .replace(/\{[^}]+\}/g, '') // Remove JSX expressions
    .replace(/import\s+.*?from\s+['"].*?['"]/g, '') // Remove imports
    .replace(/export\s+.*?;/g, ''); // Remove exports

  // Count words (split on whitespace and filter empty strings)
  const words = cleanContent.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  // Calculate reading time in minutes, minimum 1 minute
  const minutes = Math.ceil(wordCount / WORDS_PER_MINUTE);
  return Math.max(1, minutes);
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}
