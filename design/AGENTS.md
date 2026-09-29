# /design/AGENTS.md

## 1. Phạm vi

File này áp dụng cho mọi công việc liên quan đến:

- UI/UX;
- Figma;
- Design System;
- component;
- layout;
- visual state;
- prototype design.

AI phải đọc `../AGENTS.md` trước khi áp dụng file này.

---

## 2. Mục tiêu

Thiết kế phải:

```text
đúng requirement
nhất quán
tái sử dụng được
dễ chuyển sang code
dễ bảo trì
```

Figma không phải nơi tự phát minh thêm nghiệp vụ.

---

## 3. Tài liệu cần đọc

Trước khi thiết kế một feature, đọc các tài liệu liên quan:

```text
requirements/
design/design-system.md
design/components.md
design/figma-rules.md
```

Nếu requirement được chia theo feature, chỉ cần đọc feature liên quan cùng các rule global cần thiết.

---

## 4. Requirement là nguồn sự thật nghiệp vụ

Mỗi:

- màn hình;
- state;
- modal;
- action;
- navigation;
- validation;

phải xuất phát từ requirement hoặc flow đã được định nghĩa.

Không tự thêm bước nghiệp vụ mới chỉ vì UX có vẻ hợp lý hơn.

Có thể đề xuất UX improvement nhưng phải phân biệt rõ:

```text
Requirement hiện tại
vs
Đề xuất UX
```

---

## 5. Design System

Ưu tiên reuse token và component hiện có.

Token nên quản lý khi phù hợp:

- color;
- typography;
- spacing;
- radius;
- border;
- shadow;
- icon size;
- component size.

Không tạo token mới nếu token hiện tại có thể sử dụng hợp lý.

Không tạo nhiều giá trị gần giống nhau mà không có lý do rõ ràng.

---

## 6. Component

Ưu tiên component hóa UI lặp lại.

Ví dụ:

```text
Button
Input
Select
Checkbox
Radio
Switch
Tabs
Navbar
App Bar
Card
List Item
Modal
Bottom Sheet
Toast
Empty State
Loading State
```

Dùng variants khi khác nhau bởi:

- type;
- size;
- state;
- icon;
- emphasis.

Không tạo nhiều component độc lập chỉ khác nhau một thuộc tính nhỏ.

---

## 7. Auto Layout

Ưu tiên Auto Layout cho:

- container;
- form;
- card;
- list;
- navigation;
- toolbar;
- modal;
- bottom sheet;
- button;
- page section.

Hạn chế absolute positioning.

Layout phải thể hiện rõ:

- direction;
- gap;
- padding;
- alignment;
- sizing;
- wrapping.

Mục tiêu là developer hoặc AI khác có thể đọc Figma và chuyển thành CSS/React một cách rõ ràng.

---

## 8. Naming

Không dùng tên mặc định kiểu:

```text
Frame 123
Rectangle 7
Group 18
```

Ưu tiên naming theo semantic:

```text
Search/Header
Search/Input
Search/ResultList
Search/ResultItem

Upload/FileCard
Upload/Progress

Profile/Avatar
Profile/AccountInfo
```

Component name nên có khả năng ánh xạ tương đối rõ sang code.

---

## 9. State

Nếu requirement có state, Figma phải thể hiện chúng khi cần.

Ví dụ:

```text
Default
Loading
Empty
Success
Error
Disabled
Selected
Pressed
```

Không chỉ design happy path nếu prototype cần demo các state khác.

---

## 10. Responsive

Nếu requirement chỉ định mobile web prototype:

- ưu tiên layout cho viewport mobile;
- tránh thiết kế desktop-first rồi thu nhỏ cơ học;
- đảm bảo touch target hợp lý;
- tránh horizontal overflow ngoài chủ đích.

Chỉ thiết kế breakpoint khác khi requirement yêu cầu hoặc project đã có rule responsive rõ ràng.

---

## 11. Consistency

Các màn hình phải nhất quán về:

- page structure;
- header;
- navigation;
- spacing;
- typography;
- color;
- button;
- icon;
- input;
- card;
- feedback.

Không tạo pattern mới cho cùng một hành vi nếu component hiện tại đã giải quyết được.

---

## 12. Mapping sang code

Khi thiết kế component, ưu tiên cấu trúc có thể chuyển thành reusable React component.

Ví dụ:

```text
Figma:
Components/Button

Code:
src/components/Button/
```

Các variants trong Figma nên có logic đủ rõ để ánh xạ sang props khi phù hợp.

Ví dụ:

```text
variant="primary"
size="medium"
disabled
loading
```

---

## 13. Không đưa logic kỹ thuật vào Figma

Figma không cần mô tả:

- React hooks;
- folder structure;
- API service;
- state library;
- TypeScript interface;
- deployment.

Các nội dung đó thuộc `prototype/`.

---

## 14. Checklist trước khi hoàn thành

Kiểm tra:

- đúng requirement;
- đủ màn hình;
- đủ state cần thiết;
- đúng Design System;
- reuse component;
- variants hợp lý;
- Auto Layout đúng;
- naming rõ;
- không có layer thừa;
- navigation giữa màn hình đúng flow;
- handoff sang code dễ hiểu.
