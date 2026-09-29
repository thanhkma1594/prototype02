# Prototype Implementation Spec — File Manager

## 1. Purpose

Build a mobile web prototype for **File Manager** using the approved requirements, Figma design, design system, component inventory, and technical architecture.

This document is an **execution spec for Codex**.

It does not replace the source-of-truth documents.

---

## 2. Product Goal

Build an interactive mobile web prototype that allows a user to:

- view the File List;
- search files;
- filter by file type;
- open a temporary File Detail placeholder;
- navigate back while restoring the previous File List / Search state.

The prototype is intended for:

- UI/UX demonstration;
- workflow testing;
- stakeholder review;
- idea validation;
- developer handoff.

---

## 3. Current Scope

### In Scope

```text
File List
Search
Search Results
Search No Result
Type Filter
File Detail Placeholder
Navigation
State restoration
```

### Out of Scope

```text
Edit
Delete
Upload
Create File
Create Folder
Open Folder
Real backend
Database
Authentication
Persistence
Production data
Real notifications
Pagination
Load More
Infinite Scroll
List/Grid switching
Category filter behavior
Date modified filter behavior
```

---

## 4. Mandatory Source of Truth

Before writing code, read these documents:

```text
/AGENTS.md

/requirements/product.md
/requirements/navigation.md

/requirements/file-list/flow.md
/requirements/file-list/screens.md
/requirements/file-list/rules.md

/requirements/search/flow.md
/requirements/search/screens.md
/requirements/search/rules.md

/design/AGENTS.md
/design/design-system.md
/design/component-inventory.md

/prototype/AGENTS.md
/prototype/architecture.md
```

If `requirements/file-detail/` exists, read it too.

### Source Priority

For business behavior:

```text
requirements/
→ Figma
→ implementation
```

For visual design:

```text
Approved Figma
→ design/design-system.md
→ implementation
```

For technical structure:

```text
prototype/architecture.md
→ implementation
```

Do not use code as the source of truth.

---

## 5. Figma Source

Use Figma MCP to inspect the approved visual source.

File:

```text
temply-draft
```

Figma file key:

```text
tgIi3EOslIJv5ZxavmhXMO
```

Primary node:

```text
14171:23140
```

Node name:

```text
Search & Filter
```

Direct reference:

```text
https://www.figma.com/design/tgIi3EOslIJv5ZxavmhXMO/temply-draft?node-id=14171-23140
```

This node contains the File List and Search/Filter states.

Before implementing the UI:

1. inspect the node with Figma MCP;
2. inspect relevant child frames/states;
3. reuse the design system/components defined by the project;
4. do not redesign approved UI;
5. do not implement Figma artifacts that conflict with requirements.

---

## 6. Important Figma vs Requirement Overrides

Some Figma frames contain a bottom `Tab` navigation.

Current requirement says:

```text
No fixed primary navigation.
```

Therefore:

```text
DO NOT IMPLEMENT BOTTOM TAB NAVIGATION.
```

Figma also contains affordances whose behaviors are outside current scope.

Keep these visible where they belong visually, but do not add interaction:

```text
Header Add Button
File More Options
See all recents
Recent Files layout icon
Folder cards
Category filter
Date modified filter
```

Do not infer behavior from visual affordances.

Figma frames also contain simulated system status bars (`battery indicator` / `Status bar - Android`). Current project requirement overrides those artifacts:

```text
DO NOT IMPLEMENT OR RENDER A SYSTEM STATUS BAR.
```

This includes time, date, cellular signal, Wi-Fi, battery percentage, and battery icons.

---

## 7. Technical Architecture

Follow `prototype/architecture.md`.

Required stack:

```text
React
Vite
TypeScript
React Router
CSS Modules
React local state
Mock Data
Vercel
```

Global styling:

```text
src/styles/global.css
src/styles/tokens.css
```

Do not add:

```text
Redux
Zustand
MobX
Tailwind
MUI
Ant Design
Firebase
Supabase
Backend API
Mock server
```

unless the architecture document is explicitly changed.

---

## 8. Target

```text
Mobile Web
```

Primary reference viewport from Figma:

```text
360 × 800
```

This size is a visual reference only. It must not become a fixed width or max-width in runtime code.

All screen/page shells must:

```text
use width: 100% inside mobile viewports
use max-width: 480px and center on larger viewports
avoid a fixed 360px width
use min-height: 100dvh
avoid a fixed 800px height
```

Full-screen overlay backdrops cover the viewport. Overlay content such as the Type bottom sheet follows the same mobile canvas width as the page: full width on mobile, maximum `480px` and centered on larger viewports.

Pages with content taller than the viewport use normal page scrolling. Do not force all content into one viewport or clip it.

This prototype is mobile-first. It does not require a separate tablet or desktop design.

Do not add complex breakpoints or redesign the approved mobile layout.

---

## 9. Recommended Source Structure

Follow the architecture document. The expected structure is approximately:

```text
src/
├── app/
│   └── router.tsx
│
├── components/
│   └── shared reusable components
│
├── features/
│   ├── file-list/
│   │   ├── components/
│   │   └── FileListPage.tsx
│   │
│   ├── search/
│   │   └── search-specific logic/components
│   │
│   └── file-detail/
│       └── FileDetailPage.tsx
│
├── layouts/
├── mocks/
│   └── files.ts
├── styles/
│   ├── global.css
│   └── tokens.css
├── types/
├── utils/
├── App.tsx
└── main.tsx
```

Do not mechanically create empty folders that are not needed.

---

# 10. Routes

Implement only these routes for current scope:

```text
/files
/files/:id
```

Unknown routes:

```text
→ Not Found
```

Do not create:

```text
/search
/search/results
```

Search and Search Results are UI states on `/files`.

---

# 11. Feature 1 — File List

## 11.1 Route

```text
/files
```

## 11.2 Main UI Structure

Implement the File List according to Figma:

```text
File List
├── Status/Header area
├── Header
│   ├── My File
│   └── Add Button
│
├── Search / Filter area
│   ├── Search Bar
│   ├── Type
│   ├── Category
│   └── Date modified
│
├── Recent Files
│   ├── section title
│   ├── layout icon
│   ├── file rows
│   └── See all recents
│
└── Folders
    ├── section title
    └── folder cards
```

Do not add Bottom Tab navigation.

---

## 11.3 File Row

Each File Row should visually contain:

```text
File type icon
File name
Metadata/details line
More Options icon
```

Entire File Row is clickable.

On click:

```text
/files
→ /files/:id
```

### File Name Overflow

```text
single line
ellipsis
```

### Metadata

Figma visually shows values such as:

```text
10KB | 25.07.2023
```

However, the semantic meaning is intentionally unresolved.

Do not model this as confirmed:

```text
<size> | <date modified>
```

For prototype mock data, use a presentation-level field such as:

```ts
detailsText: string
```

Example:

```ts
detailsText: "10KB | 25.07.2023"
```

This is not the final domain model.

---

## 11.4 Visual-only Controls

These must not have functional actions:

```text
Add Button
More Options
See all recents
Recent Files layout icon
Folder cards
```

They may have standard hover/pressed cursor feedback only if it does not imply unsupported functionality.

Apply hover styling only when the device reports hover capability. Touch interaction must not leave a sticky hover background on File rows.

Do not open menus, modals, routes, or overlays for them.

---

## 11.5 File List Empty State

A File List Empty state is a required product state, but its visual has not been approved in Figma.

Do not invent a designed empty state.

Implementation rule:

```text
support the state in code
but do not create a new styled empty-state design
```

If an empty mock-data state must render during development, keep it deliberately minimal and clearly implementation-only.

Do not reuse Search `No Files Found` as File List Empty unless the requirement is changed.

---

# 12. Feature 2 — Search

Search is part of `/files`.

Do not navigate to another route.

---

## 12.1 Search Field

Default placeholder:

```text
Enter file name
```

Search matching:

```text
field: File Name only
case sensitivity: insensitive
matching: contains
```

Example:

```text
File Name:
Portfolio_Nguyen_Minh.pdf

Keyword:
folio

→ match
```

---

## 12.2 Realtime Search

Search results update in realtime while the user types.

```text
type keyword
→ recompute matching files
→ render matching state immediately
```

No debounce is required for mock local data unless useful for implementation cleanliness.

Do not add artificial loading.

---

## 12.3 Empty Keyword

If:

```text
keyword = empty
AND
no active Type filter
```

show the default File List state.

Do not show validation.

---

## 12.4 Explicit Search Action

Figma includes:

```text
Search for <keyword>
```

This is the explicit Search action supported by the prototype.

The keyboard Search button does not require a separate flow.

Because results already update realtime, selecting:

```text
Search for <keyword>
```

may simply confirm/retain the current result state.

---

## 12.5 Search Result Entity Scope

Keyword Search returns:

```text
File only
```

Keyword Search must not return Folder based on folder name.

Folder may appear only when:

```text
Type = Folder
```

---

# 13. Type Filter

`Type` is functional.

It is:

```text
single-select
```

Options from Figma:

```text
XLSX
Word
PowerPoint
Text
PDF
Folder
```

Interaction:

```text
Tap Type
→ open bottom sheet
→ select one Type
→ close bottom sheet
→ apply immediately
```

No Apply button.

---

## 13.1 Search + Type Logic

If both keyword and Type are active:

```text
keyword condition
AND
type condition
```

Example:

```text
keyword = Portfolio
Type = XLSX
```

Only show results matching both conditions.

---

## 13.2 Clear Filters

The clear-filter control:

```text
clears active filter(s)
keeps keyword
recalculates results from keyword
```

---

## 13.3 Clear Keyword

Clearing keyword:

```text
clears keyword only
keeps active Type filter
```

If Type remains active:

```text
show filter-only results
```

---

# 14. Non-functional Filters

These controls remain visible according to Figma:

```text
Category
Date modified
```

Current behavior:

```text
No action
```

Do not open UI or implement filtering for them.

---

# 15. Search Results — Files Found

Search Results render on:

```text
/files
```

Use the File Row visual pattern.

Entire row is clickable.

```text
Tap result
→ /files/:id
```

More Options remains visual-only.

---

# 16. Search Results — No Files Found

Use the Figma state:

```text
No Files Found
```

Render the approved visual/illustration and text from Figma.

Do not add:

```text
Clear Search button
Reset Filter button
additional CTA
```

unless shown/required.

---

# 17. Search Result Ordering

No business sort order is currently defined.

Implementation may preserve:

```text
mock data order
```

Do not present that order as a product rule.

Do not add sort UI.

---

# 18. File Detail Placeholder

There is currently no approved Figma screen for File Detail.

Implement a temporary placeholder only.

Route:

```text
/files/:id
```

Required layout:

```text
white/default background
Back button near the top
centered text:
"Thông tin chi tiết"
```

Do not add:

```text
file name
metadata
preview
Edit
Delete
More Options
additional actions
```

The purpose of this screen is only to validate prototype navigation.

---

# 19. File Detail Back Behavior

The Back button must return the user to the previous `/files` state.

### Opened from default File List

```text
File List
→ File Detail
→ Back
→ File List
```

Restore:

```text
scroll position
```

### Opened from Search Results

```text
Search Results
→ File Detail
→ Back
→ Search Results
```

Restore:

```text
keyword
active Type filter
search results
scroll position
current Search state
```

Do not reset Search when returning from detail.

---

# 20. Direct File Detail Access

Current prototype does not require direct URL access to File Detail.

Do not spend extra effort supporting a fully independent `/files/:id` entry experience.

If the route is opened directly during development, a simple safe fallback is acceptable, but do not build extra product behavior around it.

---

# 21. State Management

Use React local state only.

Preferred options:

```text
useState
useReducer
Context only if truly useful
```

Do not add a global state library.

State that may need to survive route navigation within the current session:

```text
keyword
selected Type
search result state
scroll position
```

Browser refresh may reset everything.

Do not use persistence by default.

---

# 22. Mock Data

Create local mock data in:

```text
src/mocks/files.ts
```

The mock dataset must be rich enough to demonstrate:

```text
default File List
Recent Files
multiple file types
search found
search no-result
Type filtering
Search + Type filtering
Folder Type filtering
```

Recommended presentation-oriented fields:

```ts
type FileItem = {
  id: string;
  name: string;
  type: "XLSX" | "Word" | "PowerPoint" | "Text" | "PDF";
  detailsText: string;
};
```

For folder-type filter/demo, use an appropriate separate type or a discriminated union.

Do not invent unnecessary production-grade domain complexity.

---

# 23. Design Tokens

Read:

```text
design/design-system.md
```

Map approved design tokens to:

```text
src/styles/tokens.css
```

Use CSS variables where appropriate.

Do not hardcode design values if the design system already provides an equivalent token.

Do not create missing token categories solely because they are common in other design systems.

If Figma uses a value that is not formally tokenized, reproduce the approved visual without inventing a fake token name.

---

# 24. Components

Read:

```text
design/component-inventory.md
```

Reuse existing component patterns first.

Possible reusable implementation components may include:

```text
SearchBar
FilterChip / FilterControl
FileRow
FileTypeIcon
FolderCard
SectionHeader
TypeFilterSheet
```

Only create abstractions that are justified by actual reuse.

Do not over-componentize one-off wrappers.

---

# 25. Styling

Use:

```text
CSS Modules
```

Use:

```text
global.css
```

for:

```text
reset
body/root base styles
global typography setup
```

Use:

```text
tokens.css
```

for:

```text
CSS variables/design tokens
```

Avoid inline styles unless technically necessary.

---

# 26. Accessibility

Use semantic HTML where practical.

Minimum expectations:

```text
buttons use <button>
interactive rows are keyboard-accessible
input has accessible label/aria-label
bottom sheet controls are usable by keyboard
visible focus behavior is preserved
```

Search input exception:

```text
touch-device computed font-size >= 16px
no clipped inner input outline
one native caret at the insertion point
do not disable browser pinch zoom
```

Use the canonical Search bar assets/state mapping. Do not replace `close-circle` with a text multiplication character.

The Recent Files layout icon must use complete Figma node `14171:25633`: a `20 × 20` icon centered inside a `32 × 32` wrapper. Do not stretch a child SVG to fill the icon slot.

File Row geometry must preserve the approved Figma right rail:

```text
row spans the mobile canvas width
padding-left: 16px
padding-right: 4px
gap: 12px
More Options wrapper: 32 × 32
ic_expand: native 20 × 20, rotated 90deg
```

Do not render the unrotated horizontal `ic_expand` or resize it to `18 × 18`.

Do not add complex accessibility frameworks.

---

# 27. Implementation Order

Implement in this order.

## Phase 1 — Bootstrap

```text
1. Initialize React + Vite + TypeScript if project does not exist
2. Configure React Router
3. Add global.css
4. Add tokens.css
5. Set up mobile app shell
6. Add mock data
```

Do not build unrelated infrastructure.

---

## Phase 2 — Shared UI

Implement/reuse only the shared UI needed for current scope:

```text
FileRow
FileTypeIcon
SearchBar
Filter controls
Type Filter Bottom Sheet
FolderCard
Section Header
```

Use Figma as visual source of truth.

---

## Phase 3 — File List

Build:

```text
/files
```

Verify:

```text
header
search/filter area
Recent Files
file rows
folders
visual-only controls
```

Do not include Bottom Tab.

---

## Phase 4 — Search

Implement:

```text
realtime keyword search
Files Found
No Files Found
Type Filter
Search + Type
clear keyword
clear filters
```

Keep everything on `/files`.

---

## Phase 5 — File Detail Placeholder

Implement:

```text
/files/:id
```

with:

```text
Back button
"Thông tin chi tiết"
```

No extra design.

---

## Phase 6 — State Restoration

Verify:

```text
File List → Detail → Back
Search Results → Detail → Back
```

State must be restored correctly.

---

## Phase 7 — Not Found

Unknown route:

```text
Not Found
```

Do not auto-redirect unknown routes to `/files`.

---

## Phase 8 — QA

Verify against Figma and requirements.

Fix in-scope mismatches before finishing.

---

# 28. Acceptance Criteria

The prototype is complete when all criteria below pass.

## Routing

- `/files` loads File List.
- `/files/:id` loads File Detail placeholder.
- unknown route displays Not Found.
- Search does not create another route.

## File List

- UI visually matches approved Figma for current scope.
- Bottom Tab is not implemented.
- entire File Row opens File Detail.
- Add Button has no action.
- More Options has no action.
- Folder cards have no action.
- See all recents has no action.
- layout icon has no action.
- long filenames use one-line ellipsis.

## Search

- typing updates results realtime.
- search matches File Name only.
- search is case-insensitive.
- search uses contains matching.
- keyword search returns File only.
- Search Found state works.
- No Files Found state matches Figma.
- Type is single-select.
- selecting Type applies immediately.
- Search + Type uses AND.
- clearing Type keeps keyword.
- clearing keyword keeps Type.
- Category has no action.
- Date modified has no action.
- no pagination/load more/infinite scroll.

## File Detail

- shows Back button.
- shows centered text `Thông tin chi tiết`.
- no invented detail UI.
- Back returns to correct previous state.

## State Restoration

When returning from Detail opened from Search Results:

- keyword restored;
- selected Type restored;
- result list restored;
- scroll position restored.

## Architecture

- React + Vite + TypeScript.
- React Router.
- CSS Modules.
- local React state.
- mock data only.
- no backend.
- no persistence.
- no unnecessary dependency/state library.

---

# 29. Do Not Invent

If something is not defined in requirements or approved Figma:

```text
DO NOT invent product behavior.
DO NOT add screens.
DO NOT add routes.
DO NOT add menu actions.
DO NOT redesign approved screens.
DO NOT introduce “best practice” features that change the prototype scope.
```

If implementation requires a harmless technical fallback, keep it minimal and do not promote it into product behavior.

---

# 30. Codex Execution Contract

Before coding:

```text
1. Read all mandatory source-of-truth documents.
2. Inspect the Figma node with Figma MCP.
3. Inspect the current repository state.
4. Follow architecture.md.
5. Reuse design system/component inventory.
```

During coding:

```text
1. Work feature-by-feature.
2. Keep implementation simple.
3. Do not over-engineer.
4. Do not silently change requirements.
5. Do not build out-of-scope functionality.
```

Before completion:

```text
1. Run the project.
2. Check routes.
3. Test all documented interactions.
4. Verify visual match against Figma.
5. Verify Back/state restoration.
6. Fix in-scope issues.
```

The final implementation should be ready to deploy to Vercel according to `prototype/architecture.md`.
