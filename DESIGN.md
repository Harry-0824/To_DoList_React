# DESIGN.md

## Overview

This project should feel like a polished productivity Todo app rather than a basic practice Todo list.

The product direction is:

> FocusFlow Todo — 質感高效待辦清單

The app should help users quickly understand:

- What needs to be done
- What is already completed
- What should be focused on next
- How much progress has been made

## Product Positioning

This is a portfolio-ready productivity mini app.

It should communicate:

- Focus
- Efficiency
- Calmness
- Clarity
- Completion
- High-quality frontend craft

## Visual Direction

Use a premium productivity dashboard style.

Preferred qualities:

- Clean centered layout
- Strong task input area
- Clear active and completed task states
- Useful stats and progress summary
- Intentional spacing
- Calm but refined visual mood
- Mobile-first usability

Avoid:

- Plain classroom Todo styling
- Cluttered cards
- Low-contrast text
- Random decorative elements
- Excessive animation
- Broad redesigns unrelated to the current Issue

## Colors

Recommended color roles:

- Background: soft neutral, dark productivity surface, or calm gradient
- Primary text: high contrast
- Secondary text: muted gray
- Accent: restrained blue, green, violet, or warm highlight
- Completed state: muted but still readable
- Danger action: controlled red for delete actions only

Rules:

- Use a small, consistent palette.
- Do not introduce many arbitrary colors.
- Keep text readable on all screen sizes.
- Use color to clarify task status, not decoration alone.

## Typography

Rules:

- Prioritize readability.
- Task text should be easy to scan.
- Section headings should be clear but not oversized.
- Use consistent font sizes and weights.
- Avoid decorative fonts.

## Layout and Spacing

Rules:

- Keep the app centered and focused.
- Prioritize the task input and active task list.
- Use clear spacing between input, stats, filters, and list.
- Avoid cramped mobile layouts.
- Preserve responsive behavior.
- Make the UI feel complete on both desktop and mobile.

## Components

### App Header

The header should clearly communicate that this is a productivity Todo app.

It may include:

- App name
- Short subtitle
- Current focus or progress message

### Task Input

The task input should feel like a core product interaction.

Rules:

- Input and submit button should be easy to use.
- Empty submission should be handled safely.
- Due time input should remain understandable.
- The form should work well on mobile.

### Task Item

Task items should be easy to scan and operate.

Rules:

- Show clear active and completed states.
- Completed tasks should remain readable.
- Edit and delete actions should be available but not visually dominant.
- Due time should be readable and secondary.
- Preserve keyboard accessibility where practical.

### Filters

Filters should help users switch between:

- All
- Active
- Completed

Rules:

- Active filter state must be visually clear.
- Filters should not dominate the screen.

### Stats

Stats should show useful task progress.

Recommended stats:

- Total tasks
- Completed tasks
- Remaining tasks

Rules:

- Keep stats compact and scannable.
- Do not make stats look like unrelated dashboard widgets.

### Empty State

The empty state should feel intentional.

Rules:

- Do not leave the list area visually broken or blank.
- Provide a short, useful message.
- Encourage the user to add a task.

## Responsive Behavior

The app should work well on:

- Mobile
- Tablet
- Desktop

Rules:

- Avoid horizontal overflow.
- Stack controls on small screens if needed.
- Keep touch targets large enough.
- Keep task actions usable on narrow screens.

## Accessibility

Rules:

- Maintain sufficient contrast.
- Preserve focus states.
- Use semantic HTML where possible.
- Do not rely on color alone to show task status.
- Buttons and inputs should remain keyboard accessible.

## Do's

- Keep UI polished and portfolio-ready.
- Keep changes scoped to the Issue.
- Preserve existing behavior unless the Issue asks for a change.
- Prioritize mobile usability.
- Explain UI changes in the PR summary.

## Don'ts

- Do not add UI libraries unless explicitly requested.
- Do not redesign unrelated parts.
- Do not add unnecessary markdown files.
- Do not copy references pixel-by-pixel.
- Do not make broad refactors inside a UI issue.
- Do not remove existing Todo behavior unless explicitly requested.

## AI Implementation Rules

1. Read this file before modifying UI.
2. Follow `AGENTS.md` for engineering rules.
3. Keep changes limited to the Issue scope.
4. Do not introduce unrelated redesigns.
5. Do not modify unrelated files.
6. Preserve current Todo behavior unless the Issue explicitly asks for behavior changes.
7. Explain how the implementation follows this design direction in the PR summary.
