# AGENTS.md

## Project Context

This repository is a React Todo app that will be improved into a portfolio-ready productivity app called:

> FocusFlow Todo — 質感高效待辦清單

The goal is to keep changes small, scoped, reviewable, and safe.

## General Rules

- Always work from a GitHub Issue, PR comment, or explicit user request.
- Read this file before making changes.
- Keep every task small and focused.
- Do not modify unrelated files.
- Do not perform broad refactors unless the Issue explicitly asks for it.
- Do not create extra markdown files unless explicitly requested.
- Do not rename files unless the Issue explicitly asks for it.
- Do not change routing, deployment, or build configuration unless explicitly requested.

## Package and Dependency Rules

- Use npm as the package manager.
- Do not install new packages unless the Issue explicitly requests dependency work.
- Do not modify `package.json` or lockfiles unless dependency work is explicitly requested.
- Do not run `eject`.

## Security Rules

- Do not commit secrets, API keys, tokens, credentials, `.env`, or `.env.local`.
- Do not expose private configuration in documentation or code.

## Branch Rules

Use the existing default branch as the base branch unless the user says otherwise.

Use focused branch names:

- `feature/*`
- `fix/*`
- `docs/*`

## Post-Merge Cleanup Rules

After a PR is successfully merged, clean up the PR head branch when it is safe to do so.

Delete both:

- the remote PR branch
- the local PR branch

Only clean up branches that clearly belong to the merged PR and match these work branch patterns:

- `feature/*`
- `fix/*`
- `docs/*`

Do not delete:

- `master`
- `main`
- `develop`
- `release/*`
- `production/*`
- protected branches
- branches that are not clearly the merged PR head branch
- branches with unmerged or uncertain work

Recommended cleanup commands when safe:

```bash
git checkout master
git pull origin master
git branch -d <branch-name>
git push origin --delete <branch-name>
```

Do not use `git branch -D` unless the user explicitly approves a force delete.

If the environment or tool cannot delete the branch, report the exact branch name and the manual cleanup commands needed.
## Frontend Rules

- Preserve existing behavior unless the Issue asks for a behavior change.
- For UI work, read `DESIGN.md` before editing components or styles.
- Keep responsive behavior in mind.
- Keep accessibility in mind.
- Do not introduce UI libraries unless explicitly requested.
- Do not migrate frameworks or rewrite the app architecture unless explicitly requested.

## Existing App Notes

The current app already includes:

- Add todo
- Complete / uncomplete todo
- Delete todo
- Edit todo text
- Edit due time
- Filter by all / active / completed
- Clear completed todos
- localStorage persistence

Future work should preserve these behaviors unless the Issue explicitly says otherwise.

## PR Requirements

Every PR should include:

- Summary
- Related Issue
- Why
- How to Test
- Screenshots or before / after notes if UI changed
- Risk
- Follow-up
- Changed files
