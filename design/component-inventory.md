# Component Inventory

## Metadata

Source:

- Figma file: [temply-draft](https://www.figma.com/design/tgIi3EOslIJv5ZxavmhXMO/temply-draft?node-id=3-10)
- Page: `UI Desgin` (`3:10`)
- Design System section: `Brand - System` (`14084:11662`)
- Product screens section: `3. MY FILE` (`14084:11660`)
- Generated from the current Figma state; no Figma nodes, components, variables or styles were changed.

Scope inspected:

- `Brand - System`
- `Search: No Files Found`
- `Search: Files Found`
- `My File / Internal storage`
- `My File / Internal storage / Download`
- Existing React/prototype source, if present

Last inspected: `2026-09-29` (`Asia/Ho_Chi_Minh`)

Evidence labels used in this document:

- `CONFIRMED_COMPONENT`: a Figma component/component set exists and can be identified from the current file or an instance source.
- `OBSERVED_PATTERN`: a repeated screen structure exists, but no reusable component source was detected for the whole structure.
- `DETACHED_INSTANCE`: Figma exposes `detachedInfo` on the frame.
- `UNUSED_COMPONENT`: the component exists but no instance was found in the inspected product screens.
- `UNRESOLVED`: Figma does not expose enough intent, or the source currently reports an error.

## Summary

- Canonical Design System component sets: **3** (`Tab`, `Search bar`, `File`).
- Canonical components in use: **2** (`Tab`, `Search bar`).
- Canonical components unused on current screens: **1** (`File`).
- Observed, uncomponentized pattern groups documented: **7**.
- Detached instances: **14** across 3 source groups.
- Instances with direct local overrides: **124**; this count includes nested instances.
- React code mapping: **Not Implemented**. No `src/` or `prototype/src/` implementation exists in the project at inspection time.
- Excluded from runtime by user decision: `Brand - System > Android-status-bar` and every screen status-bar implementation.
- Need User Decision: **None**. Remaining ambiguity is retained as `Unresolved`.

## Main Inventory

| Component / Pattern | Source | Type | Variants | Properties | Used In | Token Binding | Code Mapping | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `Tab` | `Brand - System` · [`14063:10808`](https://www.figma.com/design/tgIi3EOslIJv5ZxavmhXMO/temply-draft?node-id=14063-10808) | Component Set | `Property 1=3` | VARIANT only | 6 Search screens | Partial | Not Implemented | In Use |
| `Search bar` | `Brand - System` · [`442:4819`](https://www.figma.com/design/tgIi3EOslIJv5ZxavmhXMO/temply-draft?node-id=442-4819) | Component Set | `Normal`, `Typing`, `Done`, `finish` | VARIANT only | 10 Search screens | Partial | Not Implemented | In Use |
| `File` — canonical | `Brand - System` · [`14193:14497`](https://www.figma.com/design/tgIi3EOslIJv5ZxavmhXMO/temply-draft?node-id=14193-14497) | Component Set | `XLS`, `PDF`, `DOCX`, `TXT`, `PPT` | VARIANT only | No screen instance observed | None observed | Not Implemented | Unused |
| `File` — current screen source | Local source outside `Brand - System` · `12010:9721` | Component Set | `XLS`, `PDF`, `DOCX`, `TXT`, `PPT` | VARIANT only | 60 instances across Search, overlays and Download | None observed | Not Implemented | In Use |
| `Search bar` — alternate source | Remote source · `14148:13350` | Component Set | `Normal`, `Typing`, `Done` | VARIANT only | No screen instance observed | Partial | Not Implemented | Unused |
| `Android keyboard` | Local source outside `Brand - System` · `647:3013` | Component Set | Source names expose `InputMethod`, `Theme`, `Action button`; full schema cannot be read | Unresolved because the set reports an existing error | 4 Search screens | Partial: one fill binding observed | Not Implemented | Unresolved |
| Search app header | Search screen-local frames | Observed Pattern | — | — | 10 Search screens | Partial | Not Implemented | Observed Pattern |
| Search/filter block | Search screen-local frames | Observed Pattern | Screen state differs by Search bar instance and selected filter | — | 10 Search screens | Partial | Not Implemented | Observed Pattern |
| Filter chip | Search screen-local frames | Observed Pattern | `Type`, selected `XLSX`, `Category`, `Date modified` | — | 30 occurrences across 10 Search screens | Partial | Not Implemented | Observed Pattern |
| File row | Search and Download screen-local frames | Observed Pattern | Content varies by file type/name/details | — | 50 occurrences across 7 screens | Partial | Not Implemented | Observed Pattern |
| Folder card | Search 1 screen-local frames | Observed Pattern | Content varies by folder name/count/storage | — | 12 occurrences across 2 screens | Partial | Not Implemented | Observed Pattern |
| Folder navigation row | `My File / Internal storage` screen-local frames | Observed Pattern | Content varies by folder name/count | — | 3 occurrences | Partial | Not Implemented | Observed Pattern |
| Type bottom sheet | Two `Overlay` frames | Observed Pattern | Same repeated structure | — | 2 overlays | Partial | Not Implemented | Observed Pattern |
| `battery indicator` | Detached from library key `88f54c716bad53b749e130759e392cf17141818f` | Detached Instance | — | — | 10 Search screens | Hard-coded values observed | No mapping by requirement | Excluded from Runtime |
| `List` | Detached from local component `900:12527` | Detached Instance | — | — | No Files/Search 1; Files/Search 1 | Partial | Not Implemented | Detached Instance |
| `Nav bar` | Detached from library key `76ea4210f4964dfb01a78fa7f539842c2f666385` | Detached Instance | — | — | Internal storage; Download | Partial | Not Implemented | Detached Instance |

## Canonical Component Details

### Tab

Classification: `CONFIRMED_COMPONENT`

Source: [`Brand - System > Tab` (`14063:10808`)](https://www.figma.com/design/tgIi3EOslIJv5ZxavmhXMO/temply-draft?node-id=14063-10808)

Schema:

- Component set contains one `360 × 80` variant: `Property 1=3` (`14063:10804`).
- Component property definitions contain one VARIANT property named `Property 1`.
- No TEXT, BOOLEAN or INSTANCE_SWAP property is exposed.
- Component description is empty.

Usage:

- 6 instances: No Files/Search 1, No Files/Search 2, No Files/Search/Filter, Files/Search 2, Files/Search 1 and Files/Search 4.
- All 6 instances have a direct `strokes` override on the root instance.

Bindings:

- 12 descendant nodes have variable bindings (`fills`: 5; `strokes`: 7).
- A fill style and `Subtitle/S5` text style are also referenced.
- Binding classification: **Partial**. The component is not fully described by exposed properties or bindings.

Status: `In Use`.

Unresolved: the semantic meaning of variant value `3`, and why only 6 of 10 Search screens contain `Tab`, are not documented in Figma.

### Search bar

Classification: `CONFIRMED_COMPONENT`

Source: [`Brand - System > Search bar` (`442:4819`)](https://www.figma.com/design/tgIi3EOslIJv5ZxavmhXMO/temply-draft?node-id=442-4819)

Schema:

- All variants are `328 × 48`.
- VARIANT property: `Property 1`.
- Options: `Normal`, `Typing`, `Done`, `finish`.
- No TEXT, BOOLEAN or INSTANCE_SWAP property is exposed.
- Component description is empty.

Usage:

| Variant | Source node | Instances | Screens |
| --- | --- | ---: | --- |
| `Normal` | `442:4818` | 3 | No Files/Search 1; Files/Search 1; Files/Search 3 |
| `Typing` | `442:4817` | 2 | No Files/Search 2; Files/Search 2 |
| `Done` | `618:5082` | 1 | Files/Search 4 |
| `finish` | `17034:2078` | 4 | No Files/Search 3; No Files/Search/Filter; No Files/Search 4; Files/Search 5 |

`Done` and `finish` are intentional, distinct states according to the user. The trigger or interaction rule separating them is not defined in Figma and remains `Unresolved`.

Bindings:

- 21 descendant nodes have variable bindings. Bound fields include corner radii, fills and strokes.
- 6 text-style references are present.
- Confirmed examples include `Spacing/XXL`, neutral colors, `Color/Primary/2` and `Medium/B3`.
- Binding classification: **Partial**.

Overrides:

- 3 `finish` instances override `characters` and `styledTextSegments`: `17042:2252`, `17042:2378`, `17042:2416`.
- Text content is therefore currently a local override, not a TEXT component property.

Status: `In Use`.

### File — canonical

Classification: `UNUSED_COMPONENT`

Source: [`Brand - System > File` (`14193:14497`)](https://www.figma.com/design/tgIi3EOslIJv5ZxavmhXMO/temply-draft?node-id=14193-14497)

The user explicitly confirmed this component set as the canonical source.

Schema:

- Five `32 × 32` variants: `XLS`, `PDF`, `DOCX`, `TXT`, `PPT`.
- VARIANT property: `Property 1`.
- No TEXT, BOOLEAN or INSTANCE_SWAP property is exposed.
- Component description is empty.
- No local variable or style binding was observed anywhere in the set.

Usage:

- No instance of this canonical source exists in the inspected product screens.
- Current screens instead contain 60 instances from `File` source `12010:9721`.

Status: `Unused`.

### File — current screen source

Classification: `CONFIRMED_COMPONENT`

Source: local component set `12010:9721`, outside the documented `Brand - System` section.

Schema:

- Same VARIANT axis and options as the canonical set: `XLS`, `PDF`, `DOCX`, `TXT`, `PPT`.
- No variable or style binding was observed.

Usage:

| Variant | Instances |
| --- | ---: |
| `XLS` | 14 |
| `PDF` | 8 |
| `DOCX` | 15 |
| `TXT` | 13 |
| `PPT` | 10 |
| **Total** | **60** |

Screen distribution:

- No Files/Search 1: 6
- No Files/Overlay: 5
- Files/Search 2: 3
- Files/Search 1: 6
- Files/Search 3: 8
- Files/Search 4: 8
- Files/Overlay: 5
- Files/Search 5: 4
- Folder/Download: 15

Status: `In Use`.

This status describes current usage only. It does not make this source canonical or assign any lifecycle decision.

### Android keyboard

Classification: `UNRESOLVED`

Source: local component set `647:3013`, outside `Brand - System`.

Observed:

- 4 screen instances, all using `InputMethod=Text, Theme=Light, Action button=Search`.
- One fill variable binding exists in the component set.
- Each screen instance has a direct nested fill override on its `Action button`.
- Two source variants have the same combination: `InputMethod=NumberDecimal, Theme=Light, Action button=Done` (`647:3504` and `647:6801`).
- Figma reports `Component set has existing errors`; the component property definition getter cannot return a reliable schema.

Status: `Unresolved`.

## Supporting Component Sources Used on Screens

Counts below are actual instance counts inside `3. MY FILE`, including nested instances when stated.

| Source component | Local / Remote | Instances | Usage note | Status |
| --- | --- | ---: | --- | --- |
| `ic_expand` (`10005:180`) | Remote | 50 | Nested in observed File rows | In Use |
| `arrow-down` (`1184:24406`) | Local | 30 | Nested in filter chips | In Use |
| `Plus` (`10012:17061`) | Remote | 10 | Header action | In Use |
| `home` | Remote | 6 | Nested in `Tab` instances | In Use |
| `add-square` | Local | 6 | Nested in `Tab` instances | In Use |
| `folder-2` | Local | 6 | Nested in `Tab` instances | In Use |
| `setting` | Local | 6 | Nested in `Tab` instances | In Use |
| `arrow-left` (`47:8800`) | Local | 5 | Nested in Search bar instances | In Use |
| `search-normal` (`47:18852`) | Local | 5 | Nested in Search bar instances | In Use |
| `Folder` (`14110:10869`) | Remote | 5 | Folder rows and overlays | In Use |
| `Action button` (`49:45452`) | Remote | 4 | Nested in Android keyboard | In Use |
| `arrow-right` (`14193:18009`) | Remote | 3 | Folder navigation rows | In Use |
| `close-circle` (`47:26645`) | Local | 2 | Nested in Search bar states | In Use |
| `search-normal` (`14001:10140`) | Remote | 2 | Search-result query rows | In Use |
| `ic_close` (`10005:46`) | Remote | 2 | Selected filter control | In Use |
| nested `ic_close` (`10005:43`) | Remote | 2 | Nested in `ic_close` | In Use |
| `ic_delete_text` (`10005:39`) | Remote | 2 | Nested in `ic_close` | In Use |
| `Status bar - Android` (`10010:18153`) | Remote | 2 | Folder screens | Excluded from Runtime |
| `Icon/Back` (`10027:7905`) | Remote | 2 | Folder app bars | In Use |
| `Note` (`10005:19`) | Remote | 2 | Direct children of `Search: Files Found`, outside detected screen frames | Unresolved |

## Observed Patterns

Pattern names in this section are documentation labels, not official Figma component names.

### Search app header

Evidence:

- 10 repeated `360 × 64` frames named `Frame 2147224889`.
- Each contains `My File` and two nested `Premium` frames; one wraps the image action and one wraps the `Plus` instance.
- Representative layers: `14171:25606`, `14171:29039`, `14171:29424`, `14171:30030`, `14171:29842`, `14171:26222`.
- No reusable component source was detected for the whole header.

Status: `Observed Pattern`.

### Search/filter block

Evidence:

- 10 repeated `360 × 92` frames named `Frame 2147224890`.
- Each contains a canonical `Search bar` instance and a local `filters` frame.
- Representative layers: `14171:25613`, `14171:29046`, `14171:29431`, `14171:30037`, `14171:29849`, `14171:26229`.
- No reusable component source was detected for the combined block.

Status: `Observed Pattern`.

### Filter chip

Evidence:

- 30 screen-local chips across 10 Search screens.
- `Category`: 10 occurrences, `132 × 34`.
- `Date modified`: 10 occurrences, `102 × 34`.
- `Type`: 8 occurrences, `75 × 34`.
- Selected `XLSX`: 2 occurrences, `74 × 34`.
- Every chip uses an `arrow-down` component instance, but the chip container itself is not a component instance.
- Representative layers: `14171:25618`, `14171:25621`, `14171:25624`, `14171:29983`, `14171:31281`.

Status: `Observed Pattern`.

### File row

Evidence:

- 50 repeated `360 × 48` row frames.
- Common structure: a `File` instance, a `group-66379` text block (`File Name` and `File Details`) and a `More Options Icon Container` with `ic_expand`.
- The row container is not a component instance.
- Representative layers: `14171:25643`, `14171:25650`, `14171:30251`, `14171:31018`, `14171:31553`, `14193:18210`.

Status: `Observed Pattern`.

### Folder card

Evidence:

- 12 repeated `150 × 56` text/content frames across No Files/Search 1 and Files/Search 1.
- The surrounding folder artwork is also screen-local and contains repeated hard-coded geometry, fills and shadows.
- Representative content layers: `14171:25726`, `14171:25762`, `14171:25798`, `14171:25803`, `14171:25808`, `14171:25813`.
- No reusable component source was detected for the whole card.

Status: `Observed Pattern`.

### Folder navigation row

Evidence:

- 3 repeated `360 × 74` row frames on `My File / Internal storage`.
- Structure: remote `Folder` instance, local `group-66332` text block and `arrow-right` instance.
- Layers: `14193:18043`, `14193:18051`, `14193:18059`.

Status: `Observed Pattern`.

### Type bottom sheet

Evidence:

- Two repeated `360 × 376` sheet frames inside the two `Overlay` screens.
- Root sheet layers: `14171:30140`, `14171:31716`.
- Both contain a title/handle area and a `360 × 288` type-option list.
- No reusable component source was detected for the whole sheet.

Status: `Observed Pattern`.

## Detached Instances

### Detached battery indicator — 10

Source evidence: library component key `88f54c716bad53b749e130759e392cf17141818f`.

Layers:

- `14171:25594`, `14171:29027`, `14171:29412`, `14171:30018`, `14171:29830`
- `14171:26210`, `14171:30200`, `14171:30881`, `14171:31518`, `14171:31107`

All are `360 × 34` frames named `battery indicator`. They remain recorded as detached Figma evidence, but are excluded from runtime by project requirement and must not be mapped into any screen/page.

### Detached List icon — 2

Source evidence: local component ID `900:12527`.

- `14171:25633` — No Files/Search 1
- `14171:30241` — Files/Search 1

Both are `20 × 20` frames named `List`.

Status: `Detached Instance`.

### Detached Nav bar — 2

Source evidence: library component key `76ea4210f4964dfb01a78fa7f539842c2f666385`.

- `14193:17838` — My File/Internal storage
- `14193:18103` — My File/Internal storage/Download

Both are `360 × 56` frames named `Nav bar`.

Status: `Detached Instance`.

## Local Overrides

Figma reports **124 instances with direct overrides**. This is not the same as 124 visually incorrect instances; it is an inventory of instance fields that differ from their source.

| Source | Instances with overrides | Main overridden fields | Evidence |
| --- | ---: | --- | --- |
| `ic_expand` | 50 | `width`, `height`, `fills`, `name` | All 50 observed File rows |
| `arrow-down` | 30 | `strokeWeight` | All 30 filter chips |
| `Plus` | 10 | `name`, `strokeWeight`, `strokes` | One per Search screen |
| `Tab` | 6 | `strokes` | Every Tab instance |
| `Android keyboard` | 4 | nested `fills` | Every keyboard instance |
| nested `Action button` | 4 | `fills` | Inside the 4 keyboard instances |
| `Search bar` | 3 | `characters`, `styledTextSegments` | `17042:2252`, `17042:2378`, `17042:2416` |
| `arrow-right` | 3 | `width`, `height`, `fills`, `strokes` | Folder navigation rows |
| `search-normal` remote source | 2 | `strokes` | No Files/Search 2; Files/Search 2 |
| `ic_close` source tree | 6 nested/top-level instances | fills, radii, strokes, style IDs, names | Two selected-filter controls and nested sources |
| `Note` | 2 | sizing and text fields | Outside detected screen frames |
| `Status bar - Android` | 2 | sizing, alignment, fills/style IDs | Folder screens; Excluded from Runtime |
| `Icon/Back` | 2 | sizing and fills | Folder screens |

## Potential Duplicates

### Canonical File vs current screen File source

| Evidence | Canonical source | Current screen source |
| --- | --- | --- |
| Node | `14193:14497` | `12010:9721` |
| Component name | `File` | `File` |
| Variants | XLS, PDF, DOCX, TXT, PPT | XLS, PDF, DOCX, TXT, PPT |
| Screen instances | 0 | 60 |
| Binding | None observed | None observed |

Decision already supplied by the user: `Brand - System > File` is canonical.

The current Figma screen usage remains a conflict. This inventory does not change, detach, delete or relink either source.

### Canonical Search bar vs alternate Search bar source

| Evidence | Canonical source | Alternate source |
| --- | --- | --- |
| Node | `442:4819` | `14148:13350` |
| Source | Local, `Brand - System` | Remote source |
| Variants | Normal, Typing, Done, finish | Normal, Typing, Done |
| Screen instances | 10 | 0 |
| Binding | Partial | Partial |

The two sets have the same name and overlapping states, but different structures and variant coverage. Their intended lifecycle relationship is not explicit in Figma.

Status: `Unresolved`.

### Local vs remote search-normal

- Local source `47:18852`: 5 nested instances in canonical Search bars.
- Remote source `14001:10140`: 2 instances in search-result query rows.
- The names overlap, but Figma does not confirm that the sources are interchangeable.

Status: `Unresolved`.

## Component Conflicts

### Canonical File is not used by current screens

The canonical `Brand - System > File` has no product-screen instances, while a second local `File` set supplies all 60 current instances. The two sets are not visually identical; the clearest observed difference is the `PPT` geometry/shadow.

No Figma change was made.

### Status-bar implementations remain mixed in Figma, excluded from runtime

- 10 Search screens contain detached `battery indicator` frames.
- 2 Folder screens contain remote `Status bar - Android` instances.
- `Brand - System > Android-status-bar` is excluded by user decision.
- Neither implementation may be rendered or mapped to code on any prototype screen/page.

Status: `Excluded from Runtime` for this component inventory.

## Design System Gaps

The following are audit findings, not decisions to create new components:

- A reusable File row component **may be missing**: 50 visually consistent screen-local rows were observed.
- A reusable Filter chip component **may be missing**: 30 screen-local chips share a common structure.
- Reusable Search app header and Search/filter block components **may be missing**: each structure occurs on all 10 Search screens.
- A reusable Folder card component **may be missing**: 12 repeated cards were observed across two screens.
- A reusable Folder navigation row component **may be missing**: 3 consistent rows were observed.
- A reusable Type bottom sheet component **may be missing**: the same sheet structure occurs in two overlays.
- `Search bar` does not expose search text as a TEXT property; at least 3 screen instances use direct text overrides.
- `Tab`, `Search bar` and canonical `File` have empty component descriptions and generic property name `Property 1`.
- Canonical `File` has no variable/style binding.

## Figma → Code Mapping

No React source exists under `src/` or `prototype/src/` at inspection time. Therefore:

| Figma source / pattern | Code mapping | Mapping status |
| --- | --- | --- |
| `Tab` | — | Not Implemented |
| `Search bar` | — | Not Implemented |
| Canonical `File` | — | Not Implemented |
| Android keyboard | — | Not Implemented |
| Observed File row | — | Not Implemented |
| Observed Filter chip | — | Not Implemented |
| Observed headers, folder patterns and bottom sheet | — | Not Implemented |

The inventory does not create placeholder code paths.

## Unresolved

### Tab semantics

The only variant value is `3`, without a description. Its intended semantic name and the rule for screens that omit the component cannot be determined from Figma.

### Search bar state transition rules

`Done` and `finish` are confirmed as intentional distinct states, but Figma does not describe their trigger or transition rules. The inventory keeps both without interpreting them.

### Android keyboard schema

The duplicate source variant combination at `647:3504` and `647:6801` causes Figma to reject component property schema reads. The set is used but its complete variant/property inventory remains unresolved.

### Alternate Search bar relationship

The unused remote `Search bar` source `14148:13350` overlaps the canonical set but lacks `finish`. Figma does not state whether it should remain available, so this inventory does not assign a lifecycle label beyond `Unused` for current screen usage.

### search-normal sources

The local and remote `search-normal` sources have separate usage. Their intended relationship is not documented.

### Note instances outside screen frames

Two `Note` instances (`14171:31773`, `14171:31780`) are direct children of the `Search: Files Found` section rather than descendants of a detected `360 × 800` screen. They are recorded as `Unresolved` and excluded from screen-specific component mapping.

## Handoff Constraints

1. Use `Brand - System > File` as the canonical File source in future code mapping, while preserving the documented fact that current Figma screens still use `12010:9721`.
2. Keep `Search bar / Done` and `Search bar / finish` as separate states.
3. Do not restore or map `Brand - System > Android-status-bar`, `battery indicator`, or another simulated system status bar without a new user decision.
4. Do not infer a lifecycle decision from `Unused`.
5. Do not treat an `Observed Pattern` as an official Design System component.
6. Do not treat local overrides as defects without reviewing the intended screen state.
7. Resolve the Android keyboard component-set error before relying on its full property schema.
8. Treat `360 × 800` screen frames as audit references only; runtime page is full width on mobile, capped at `480px` on larger viewports, and uses dynamic viewport min-height.
