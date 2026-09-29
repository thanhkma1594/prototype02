# Component Inventory Specification

## 1. Mục đích

File này định nghĩa quy tắc để AI sử dụng Figma MCP tạo:

```text
design/component-inventory.md
```

`component-inventory.md` là bản kiểm kê các component và UI pattern thực sự tồn tại trong Design System và các screen Figma hiện tại.

Mục tiêu của inventory:

- xác định component nào đang tồn tại;
- xác định component nào đang được sử dụng;
- xác định component nào không còn được sử dụng;
- xác định pattern UI đang xuất hiện trên screen nhưng chưa được component hóa;
- xác định detached instance hoặc local override đáng chú ý;
- xác định variant và property đang tồn tại;
- tạo mapping giữa Figma component và React component khi code prototype đã tồn tại;
- giúp AI tránh tạo component trùng lặp khi build Figma hoặc code prototype.

`component-inventory.md` không phải là tài liệu mô tả đầy đủ cách sử dụng UX của từng component.

---

# 2. Source of Truth

## 2.1 Nguồn chính

Figma hiện tại là Source of Truth cho component inventory.

Phải ưu tiên đọc trực tiếp từ:

```text
Figma Component Library
Figma Local Components
Figma Component Sets
Figma Variables / Styles liên quan
Figma Screens
```

Không được bắt đầu từ một danh sách component tiêu chuẩn rồi cố tìm cho đủ.

Ví dụ:

Nếu Figma không có:

```text
Card
Badge
Tooltip
Avatar
```

và screen cũng không sử dụng các pattern tương ứng, không được tự thêm chúng vào inventory.

---

## 2.2 Nguồn bổ sung

Có thể sử dụng:

```text
design/design-system.md
```

để đối chiếu:

- naming convention;
- token;
- component naming;
- status đã được xác nhận;
- Design System gaps;
- Design System conflicts.

Nếu prototype đã có code, có thể đọc:

```text
src/
```

để tạo mapping:

```text
Figma Component
→ React Component
```

Code không được dùng để chứng minh một component tồn tại trong Figma.

---

# 3. Nguyên tắc Trust

Mọi kết luận phải dựa trên bằng chứng.

Không suy diễn intent từ visual nếu Figma không thể hiện rõ.

Không tự:

- tạo component mới;
- đổi tên component;
- tạo variant;
- chuẩn hóa property;
- gộp component;
- tách component;
- đánh dấu deprecated;
- xóa component;
- tạo token;
- sửa Figma.

Task này chỉ có quyền:

```text
READ
→ ANALYZE
→ CLASSIFY
→ DOCUMENT
```

---

# 4. Phân loại bằng chứng

Mỗi component hoặc pattern phải được phân loại theo một trong các nhóm sau.

## 4.1 CONFIRMED_COMPONENT

Component hoặc Component Set tồn tại trực tiếp trong Figma.

Ví dụ:

```text
Button
Search Bar
File Item
Empty State
```

Có thể lấy được:

- component name;
- component set;
- variants;
- properties;
- descriptions;
- variable bindings;
- source page/library.

---

## 4.2 OBSERVED_PATTERN

Pattern UI xuất hiện trên một hoặc nhiều screen nhưng không tồn tại dưới dạng reusable component trong Design System.

Ví dụ:

```text
File row xuất hiện 12 lần trên File List
nhưng tất cả đều là Frame thường.
```

Phải ghi:

```text
Status: Observed Pattern
```

Không được tự biến pattern đó thành:

```text
FileItem Component
```

---

## 4.3 DETACHED_INSTANCE

Một UI element có hình thức giống component hoặc có dấu hiệu từng là instance nhưng hiện tại đã detached khỏi source component.

Phải ghi:

- screen;
- node;
- component source nếu xác định được;
- trạng thái detached.

Không tự reconnect instance.

---

## 4.4 UNUSED_COMPONENT

Component tồn tại trong Design System nhưng không tìm thấy usage trong các screen thuộc phạm vi inspect.

Điều này chỉ có nghĩa:

```text
không quan sát thấy usage trong phạm vi hiện tại
```

Không được tự kết luận:

```text
deprecated
```

---

## 4.5 UNRESOLVED

Dùng khi không thể xác định chắc chắn:

- component có còn được sử dụng không;
- pattern có phải component hay không;
- hai component gần giống nhau có cùng vai trò hay không;
- một variant có còn hợp lệ hay không;
- một local override là intentional hay inconsistency.

Không tự suy diễn.

---

# 5. Trạng thái inventory

Các status hợp lệ:

```text
In Use
Unused
Observed Pattern
Detached Instance
Unresolved
Out of Scope
```

Không dùng các status như:

```text
Deprecated
Legacy
Invalid
Remove
Replace
```

trừ khi chính Figma documentation hoặc người dùng đã xác nhận rõ.

---

# 6. Phạm vi inspect

AI phải inspect hai lớp dữ liệu.

## 6.1 Design System Layer

Thu thập:

- Local Components;
- Component Sets;
- Variants;
- Variant properties;
- Text properties;
- Boolean properties;
- Instance Swap properties;
- Component descriptions;
- Component naming;
- Component pages;
- Variable bindings;
- Text style bindings;
- Effect style bindings;
- Library component source nếu có.

---

## 6.2 Screen Layer

Inspect các screen UI/UX thực tế để xác định:

- component nào được sử dụng;
- screen nào sử dụng component đó;
- số lượng usage nếu có thể xác định đáng tin cậy;
- variant nào được sử dụng;
- pattern nào lặp lại nhưng chưa component hóa;
- detached instance;
- local overrides đáng chú ý;
- component nào tồn tại trong library nhưng chưa thấy dùng.

Không suy diễn business requirement từ screen.

---

# 7. Usage Detection

Một component chỉ được ghi là:

```text
In Use
```

khi có bằng chứng component instance được sử dụng trên ít nhất một screen thuộc phạm vi inspect.

Ví dụ:

```text
Button
Used in:
- File Detail
- Search
```

Nếu component tồn tại nhưng không thấy usage:

```text
Status: Unused
```

và phải hiểu theo nghĩa:

```text
Not observed in current inspected screens
```

---

# 8. Variant Inventory

Với Component Set, inventory phải ghi các variant axis thực sự tồn tại.

Ví dụ:

```text
Button

Variant axes:
- Type: Primary | Secondary
- Size: Small | Medium
- State: Default | Disabled | Loading
```

Không tự tạo variant còn thiếu.

Ví dụ nếu không có:

```text
Pressed
```

thì không được tự thêm `Pressed` vì cho rằng button tiêu chuẩn phải có.

---

# 9. Component Properties

Ghi lại các property Figma thực sự định nghĩa.

Ví dụ:

```text
Properties:
- Label: TEXT
- Leading Icon: INSTANCE_SWAP
- Show Icon: BOOLEAN
```

Không tự suy ra React props nếu chưa tạo Code Mapping.

---

# 10. Token / Style Binding

Nếu có thể đọc được binding, ghi rõ.

Ví dụ:

```text
Bindings:
- Fill → color/background/primary
- Text → color/text/on-primary
- Radius → radius/md
```

Nếu visual value được hard-code:

```text
Fill: #2563EB
```

và không có variable binding, ghi:

```text
Hard-coded value observed
```

Không tự tạo token tương ứng.

---

# 11. Component Usage Mapping

Inventory nên ghi component được sử dụng ở screen nào.

Ví dụ:

```text
Search Bar

Used In:
- File List
- Search
```

Nếu cùng component xuất hiện ở nhiều screen, gom chúng vào một entry.

Không tạo nhiều entry cho cùng một source component.

---

# 12. Duplicate / Similar Component Detection

Nếu có hai hoặc nhiều component có visual hoặc naming gần giống nhau:

```text
Button
Button New
Button v2
```

không tự gộp hoặc đánh dấu component nào đúng.

Ghi vào:

```text
Potential Duplicates
```

và cung cấp:

- tên component;
- source;
- variant/property khác nhau;
- screen usage;
- bằng chứng quan sát được.

Status:

```text
Unresolved
```

nếu chưa có quyết định của người dùng.

---

# 13. Pattern chưa component hóa

Nếu một pattern:

- xuất hiện lặp lại;
- có cấu trúc gần giống nhau;
- nhưng không sử dụng Figma Component;

ghi vào:

```text
Observed Patterns
```

Ví dụ:

```text
File Row Pattern

Observed In:
- File List

Occurrences:
- 10

Component Source:
- None observed

Status:
- Observed Pattern
```

Không tự đề xuất thành component trong phần inventory chính.

Có thể đưa vào:

```text
Potential Design System Gaps
```

nếu pattern lặp lại đủ rõ.

---

# 14. Design System Gaps

Inventory có thể báo cáo gap nhưng không được tự sửa.

Ví dụ:

```text
Component:
File Item

Observed:
- 12 visually consistent instances

Design System:
- No reusable component found

Classification:
Observed Pattern

Potential Gap:
Reusable File Item component may be missing.
```

Câu "may be missing" phải được hiểu là phát hiện gap, không phải quyết định tạo component.

---

# 15. Conflict Detection

Nếu:

```text
Design System component
```

và:

```text
screen instance
```

có sự khác biệt đáng kể ngoài variant/property đã định nghĩa, ghi vào:

```text
Component Conflicts
```

Ví dụ:

```text
Button / Primary

Design System:
Height = 48

Screen:
File Detail CTA = 44

No matching variant found.
```

Không tự sửa Design System hoặc screen.

---

# 16. Figma → Code Mapping

Chỉ tạo mapping khi prototype code đã tồn tại.

Ví dụ:

```text
Figma:
Button

Code:
src/components/Button/Button.tsx

Status:
Mapped
```

Các trạng thái mapping có thể dùng:

```text
Mapped
Not Implemented
Multiple Code Matches
Unresolved
```

Không tự tạo file code trong task inventory.

---

# 17. Cấu trúc file component-inventory.md

File đầu ra nên có cấu trúc sau.

## 17.1 Metadata

```md
# Component Inventory

Source:
- Figma file: ...
- Generated from current Figma state

Scope:
- Design System
- File List
- Search
- File Detail

Last inspected:
- ...
```

---

## 17.2 Summary

Ví dụ:

```md
## Summary

- Confirmed Components: 12
- In Use: 8
- Unused: 4
- Observed Patterns: 2
- Detached Instances: 1
- Unresolved: 3
```

Chỉ ghi count nếu có thể xác định đáng tin cậy.

---

## 17.3 Main Inventory Table

Format đề xuất:

```md
| Component | Source | Type | Variants | Properties | Used In | Token Binding | Code Mapping | Status |
|---|---|---|---|---|---|---|---|---|
```

Ý nghĩa:

### Component

Tên component hoặc pattern.

### Source

Ví dụ:

```text
Components/Button
Library: Core DS
File List / FileRow
```

### Type

Một trong:

```text
Component
Component Set
Observed Pattern
Detached Instance
```

### Variants

Variant axis nếu tồn tại.

### Properties

TEXT / BOOLEAN / INSTANCE_SWAP nếu tồn tại.

### Used In

Screen sử dụng.

### Token Binding

```text
Confirmed
Partial
Hard-coded
None observed
```

### Code Mapping

Nếu đã có code:

```text
src/components/Button/
```

Nếu chưa có:

```text
Not Implemented
```

### Status

Một trong status được định nghĩa ở Section 5.

---

# 18. Detail Section

Với component phức tạp, có thể thêm detail section.

Ví dụ:

```md
## Button

### Source

`Components/Button`

### Classification

CONFIRMED_COMPONENT

### Variants

- Type: Primary, Secondary
- Size: Medium
- State: Default, Disabled

### Properties

- Label: TEXT
- Leading Icon: INSTANCE_SWAP

### Used In

- File Detail
- Search

### Bindings

- Background → color/action/primary
- Label → color/text/on-primary

### Code Mapping

`src/components/Button/Button.tsx`

### Status

In Use
```

Không bắt buộc detail section cho component đơn giản nếu bảng đã đủ.

---

# 19. Observed Patterns Section

Tạo section:

```md
## Observed Patterns
```

cho những UI pattern chưa component hóa.

Ví dụ:

```md
### File Row Pattern

Observed In:
- File List

Evidence:
- Repeated visual structure
- No component instance detected

Status:
Observed Pattern
```

---

# 20. Potential Duplicates Section

Nếu phát hiện component gần giống nhau:

```md
## Potential Duplicates
```

Ví dụ:

```md
### Button vs Button v2

Evidence:
- Similar structure
- Similar variants
- Different component sources

Decision:
Chưa xác định
```

Không được tự merge.

---

# 21. Detached Instances Section

Nếu có:

```md
## Detached Instances
```

Ghi:

- screen;
- node;
- source component nếu xác định được;
- điểm khác biệt;
- status.

---

# 22. Design System Gaps Section

Ví dụ:

```md
## Design System Gaps

### File Row

Observed:
Repeated 10 times on File List.

Component:
No reusable component found.

Status:
Observed Pattern
```

---

# 23. Unresolved Section

Mọi điểm không thể xác định phải gom vào:

```md
## Unresolved
```

Ví dụ:

```md
### Search Input vs Input/Search

Không thể xác định hai component này có cùng semantic role hay không.

Cần người dùng xác nhận.
```

---

# 24. Khi nào cần hỏi người dùng

Chỉ hỏi khi:

1. có ít nhất hai cách hiểu hợp lý;
2. Figma không cung cấp đủ bằng chứng;
3. quyết định ảnh hưởng đến inventory hoặc code mapping;
4. không thể giữ trung lập bằng status `Unresolved`.

Ví dụ nên hỏi:

```text
Button và Button v2 có phải cùng một component generation không?
```

```text
File Row pattern có được coi là component chính thức hay vẫn là local pattern?
```

```text
Component tồn tại nhưng không dùng trong các screen hiện tại có còn thuộc scope không?
```

Không hỏi:

```text
Button có màu gì?
```

nếu có thể đọc trực tiếp từ Figma.

---

# 25. Khi nào không cần hỏi

Nếu thông tin không ảnh hưởng đến inventory chính, ghi:

```text
Unresolved
```

thay vì làm gián đoạn workflow.

Mục tiêu là:

```text
80–90% extract trực tiếp từ Figma
10–20% user decision khi thật sự cần
```

Không cố đạt tỷ lệ bằng số lượng câu hỏi.

Đây là nguyên tắc:

```text
Figma có bằng chứng
→ tự extract

Figma không có intent
→ Unresolved hoặc hỏi người dùng
```

---

# 26. Quy trình tạo component-inventory.md

Thực hiện theo thứ tự.

## Phase 1 — Inventory Design System

Đọc:

- components;
- component sets;
- variants;
- properties;
- descriptions;
- bindings;
- source pages/libraries.

Không mutate Figma.

---

## Phase 2 — Inspect Screens

Quét các screen thuộc scope.

Xác định:

- instance usage;
- screen usage;
- detached instances;
- repeated local patterns;
- local overrides.

---

## Phase 3 — Classification

Phân loại thành:

```text
CONFIRMED_COMPONENT
OBSERVED_PATTERN
DETACHED_INSTANCE
UNUSED_COMPONENT
UNRESOLVED
```

---

## Phase 4 — Gap / Conflict Detection

Phát hiện:

- missing component pattern;
- hard-coded visual values;
- screen vs component mismatch;
- possible duplicates.

---

## Phase 5 — Code Mapping

Nếu `src/` đã tồn tại:

- tìm React component tương ứng;
- ghi mapping;
- không tạo code mới.

Nếu chưa có code:

```text
Code Mapping: Not Implemented
```

---

## Phase 6 — User Decisions

Chỉ hỏi những quyết định thực sự cần thiết.

Nếu không có:

```text
Need User Decision: None
```

tiếp tục tạo file.

---

## Phase 7 — Generate File

Tạo:

```text
design/component-inventory.md
```

Không sửa Figma.

---

# 27. Báo cáo trước khi tạo file

Trước khi generate final inventory, AI nên báo cáo ngắn:

```text
Confirmed Components:
...

In Use:
...

Unused:
...

Observed Patterns:
...

Detached Instances:
...

Potential Duplicates:
...

Conflicts:
...

Unresolved:
...

Need User Decision:
...
```

Nếu `Need User Decision` không có vấn đề material, có thể generate ngay.

---

# 28. Acceptance Criteria

`component-inventory.md` chỉ được xem là đạt khi:

- mọi component trong inventory có bằng chứng từ Figma;
- không có component tự phát minh;
- variant/property phản ánh Figma thực tế;
- component usage được kiểm tra từ screen;
- pattern chưa component hóa không bị gọi nhầm là official component;
- unused không bị gọi nhầm là deprecated;
- detached instance được tách riêng;
- conflict/gap được ghi rõ;
- unresolved không bị AI tự quyết định;
- không có thay đổi nào được thực hiện trên Figma;
- code mapping chỉ xuất hiện khi có bằng chứng từ source code.

---

# 29. Quan hệ với các file khác

```text
design-system.md
        ↓
Foundations / Tokens / Design Rules

component-inventory.md
        ↓
Actual Component Catalog + Usage

requirements/
        ↓
Business Behavior

Approved Figma Screens
        ↓
Visual Implementation

prototype/architecture.md
        ↓
Technical Architecture

src/
        ↓
React Implementation
```

`component-inventory.md` không thay thế:

```text
design-system.md
requirements/
architecture.md
```

Nó đóng vai trò:

```text
Component Index + Usage Map + Audit
```

---

# 30. Nguyên tắc cuối cùng

Luôn ưu tiên:

```text
Evidence > Assumption
Existing Figma > Design System Best Practice
Observed Usage > Expected Usage
Unresolved > Invented Answer
```

Nếu Figma không có một component hoặc pattern và screen cũng không sử dụng nó:

```text
không đưa vào inventory
```

Nếu screen dùng một pattern nhưng Design System chưa có component:

```text
Observed Pattern
```

Nếu component tồn tại nhưng không thấy dùng:

```text
Unused
```

Nếu không xác định được intent:

```text
Unresolved
```

Không tự hoàn thiện Design System trong task này.
