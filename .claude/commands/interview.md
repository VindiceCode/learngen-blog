---
description: Extract blog content through conversational interview
model: opus
---

# Interview

Extract content for blog posts through an interactive interview session. Works with source material (transcripts, notes, ideas) or starts from scratch on a topic.

## Purpose

This interview captures the **humanity** behind the content - not just facts and steps, but what the experience meant, what surprised the author, what they'd tell someone else. The goal is material that sounds like the author, not a generic summary.

**Important:** These notes are working material. The author reviews and shapes what becomes the final post.

## Input Handling

1. **Check for context:**
   - If a file path is provided, read it fully
   - If text is pasted inline, use that as source material
   - If neither, ask what topic or idea to explore

2. **Treat AI summaries as substrate:**
   - Any AI-generated content is low-weight starting material
   - Real material comes from direct conversation

3. **Identify the goal:**
   - What kind of post? (tutorial, opinion, story, technical deep-dive)
   - What's the core message or takeaway?
   - Who's the audience?

## Interview Process

Conduct the interview as a conversation. Ask questions **one at a time** and wait for responses.

Listen for:
- Stories that reveal something real
- Phrases that sound distinctly "them"
- Moments of energy or enthusiasm (flag these)
- Tensions or contradictions worth exploring
- The stuff that wouldn't make it into a formal writeup

### Phase 1: Context & Angle

- What happened? / What's the situation?
- Why does this matter to the reader?
- What's the non-obvious insight here?

### Phase 2: Story & Details

- Walk through the sequence of events
- What specific moments stand out?
- What did someone say that stuck with you? (capture exact quotes)
- What surprised you?
- What would you tell someone who's about to do this?

### Phase 3: Voice & Tone

- How do you want to come across? (authoritative, casual, vulnerable, etc.)
- Any phrases or expressions that feel like "you"?
- What should this NOT sound like?

### Phase 4: Structure

- What's the hook? (first sentence that grabs attention)
- What are the key beats? (3-5 main points)
- How does it end? (call to action, reflection, cliffhanger)

## Note-Taking Guidelines

**CRITICAL: Write observationally, not declaratively.**

Bad (declarative):
```
This is a story about resilience.
The key insight is X.
```

Good (observational):
```
When he described the debugging session, there was energy -
"six hours before I realized the server wasn't running."
He laughed telling it. Could be the hook.

He kept coming back to the idea of "shipping ugly things that work."
This seems central to how he thinks about MVPs.
```

**What to capture:**
- Direct quotes (exact words)
- Where energy/enthusiasm spiked
- What felt unresolved or surprising
- Connections the author made unprompted
- Phrases that sound like "them"

## File Structure

Create and maintain a notes file at:
`src/data/interview-notes/YYYY-MM-DD-{slug}.md`

**Append to this file each turn.** Structure:

```markdown
---
date: {ISO timestamp}
topic: {brief topic description}
post_type: {tutorial|opinion|story|technical}
status: raw
---

# Interview Notes: {Topic}

## Session Info
- **Date:** {date}
- **Purpose:** {what we're extracting and why}

---

## Substrate (if any)

{AI-generated summaries or inferences provided as starting material.
Low weight - real material comes from conversation.}

---

## Key Material (from author directly)

### {Section topic}
- {What they shared}
- "{Direct quote}"

### {Section topic}
...

---

## Interviewer Observations

### On {topic}
{Observational notes - "there was energy when...",
"he kept coming back to...", "this felt unresolved..."}

---

## Story Beats (emerging)

1. {Beat 1}
2. {Beat 2}
3. {Beat 3}

---

## Voice Notes (captured phrases)

- "{exact phrase}"
- "{exact phrase}"

---

## Structure Ideas

**Possible hooks:**
- {Hook idea}

**Key points:**
1. {Point}
2. {Point}

**Possible endings:**
- {Ending idea}

---

## Working Titles

- {Title idea}
- {Title idea}

---

## Open Questions

- {What to explore further}

---

## Raw Notes

(Appended each turn as interview continues)
```

## Output

After the interview, the notes file becomes source material for drafting the post. The author reviews before anything is finalized.

## Usage

```
/interview                           # Start fresh interview
/interview path/to/transcript.md     # Interview based on source material
/interview "I want to write about X" # Start with a topic
```

## Tips

- Don't rush. Good content comes from follow-up questions.
- If an answer is vague, ask for a specific example.
- Capture exact words, not paraphrased versions.
- Notice when energy/enthusiasm spikes - that's usually the real story.
- Note what the author keeps coming back to unprompted.
- Flag tensions or contradictions - they're often interesting.
