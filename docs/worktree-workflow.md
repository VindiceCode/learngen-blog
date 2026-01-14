---
description: Explains the git worktree + issues + parallel agents workflow
allowed-tools: Read, Bash(git:*, gh:*, ls:*)
---

# Git Worktree Workflow

This skill explains the parallel development workflow using git worktrees, GitHub issues, and Claude Code agents.

## Overview

Instead of working on features sequentially in one branch, this workflow:
1. Creates GitHub issues for each feature
2. Creates a git worktree for each issue (separate working directory, same repo)
3. Spawns a Claude Code agent for each worktree
4. Agents work in parallel, each in isolated context
5. Each feature becomes a PR when ready

## Why This Works

- **Context isolation**: Each agent has fresh context, not polluted by other features
- **Parallel progress**: Multiple features advance simultaneously
- **Clean PRs**: Each worktree = one branch = one PR = one issue
- **Easy review**: Test each feature independently before merging

## Setup Steps

### 1. Create GitHub Issues

```bash
gh issue create --title "Feature name" --body "Description and requirements"
```

### 2. Create Worktrees

Create a directory for worktrees (sibling to main repo):
```bash
mkdir -p ../project-worktrees
```

Create a worktree for each issue:
```bash
git worktree add ../project-worktrees/feature-name -b feature/feature-name
```

This creates:
- A new directory with the full repo checkout
- A new branch `feature/feature-name` based on current HEAD

### 3. Spawn Agents

Use the Task tool to spawn agents for each worktree:

```
Task(
  description: "Implement feature X",
  prompt: "Working directory: /path/to/worktree. Task: ... Requirements: ...",
  subagent_type: "general-purpose",
  run_in_background: true
)
```

Key prompt elements:
- Specify the worktree path as working directory
- Reference the GitHub issue number
- List clear requirements
- Tell agent to commit but NOT push

### 4. Review & Push

When agents complete:
1. `cd` into each worktree
2. Run `npm run dev` to test locally
3. Review the commits with `git log` and `git diff`
4. Push the branch: `git push -u origin feature/feature-name`
5. Create PR: `gh pr create`

### 5. Cleanup

After merging PRs:
```bash
# Remove worktree
git worktree remove ../project-worktrees/feature-name

# Delete local branch (if needed)
git branch -d feature/feature-name
```

List all worktrees:
```bash
git worktree list
```

## Example: LearnGen Blog

Issues created:
- #1 Add Pagefind search
- #2 Implement tags filtering
- #3 Add reading time
- #4 Build related posts
- #5 Add RSS feed
- #6 Add table of contents
- #7 Create /interview skill

Worktrees created:
```
learngenblog/                    # main worktree (main branch)
learngenblog-worktrees/
  ├── reading-time/              # feature/reading-time
  ├── rss-feed/                  # feature/rss-feed
  └── table-of-contents/         # feature/table-of-contents
```

## Commands Reference

| Action | Command |
|--------|---------|
| List worktrees | `git worktree list` |
| Add worktree | `git worktree add <path> -b <branch>` |
| Remove worktree | `git worktree remove <path>` |
| List issues | `gh issue list` |
| Create issue | `gh issue create --title "..." --body "..."` |
| Create PR | `gh pr create --title "..." --body "..."` |
| Link PR to issue | Include "closes #N" in PR body |
