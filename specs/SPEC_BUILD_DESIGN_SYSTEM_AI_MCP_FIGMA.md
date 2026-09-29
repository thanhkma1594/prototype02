Sử dụng Figma MCP để phân tích Design System và các screen UI/UX hiện có trong file Figma của project.

Mục tiêu cuối cùng:

Tạo file:

`design/design-system.md`

## 1. Nguyên tắc Source of Truth

Figma hiện tại là Source of Truth cho visual design.

Không được áp đặt một Design System tiêu chuẩn lên file Figma.

Không được giả định rằng Design System phải có các category như:

- Radius
- Shadow
- Border
- Grid
- Motion
- Breakpoint
- Semantic Color
- Component State

nếu chúng không thực sự tồn tại hoặc không được sử dụng trong Figma.

Chỉ document những gì có bằng chứng trực tiếp từ Figma.

Không tự tạo:

- token;
- variable;
- component;
- variant;
- state;
- naming convention;
- usage rule;
- design principle;

nếu Figma không cung cấp đủ bằng chứng.

Nếu một category hoàn toàn không tồn tại và cũng không được sử dụng trong các screen/component, hãy bỏ qua category đó thay vì tự tạo section rỗng.

Ví dụ:

Nếu Figma không có Radius Variable và UI cũng không sử dụng corner radius, không tạo mục Radius.

---

## 2. Phạm vi cần inspect

Không chỉ inspect Variable Collections.

Hãy phân tích:

### Design System

- Variable Collections
- Variables
- Modes
- Styles
- Components
- Component Sets
- Variants
- Component Properties
- Component descriptions
- Component naming
- Text Styles
- Effect Styles
- Local styles
- Library assets đang được sử dụng

### Screen UI/UX

Inspect các screen thực tế để xác định:

- token nào thực sự đang được sử dụng;
- component nào thực sự đang được sử dụng;
- visual value nào đang hard-code;
- pattern nào xuất hiện nhiều lần;
- có sự khác biệt giữa Design System và implementation trên screen hay không.

Không suy diễn business requirement từ screen.

---

## 3. Phân loại bằng chứng

Mọi thông tin thu thập được phải thuộc một trong ba loại:

### CONFIRMED

Thông tin được định nghĩa trực tiếp trong Design System/Figma.

Ví dụ:

`color/text/primary = #101828`

hoặc:

`Button / Size=Medium / State=Disabled`

### OBSERVED

Thông tin được quan sát thấy trong component hoặc screen nhưng chưa được định nghĩa chính thức thành Design System token/rule.

Ví dụ:

`FileCard` sử dụng `cornerRadius = 12px`, nhưng không tồn tại Radius Variable tương ứng.

Không tự chuyển OBSERVED thành token.

### UNRESOLVED

Thông tin không thể xác định intent từ Figma.

Ví dụ:

Không thể xác định Button Secondary được dùng trong trường hợp UX nào.

Không tự suy diễn câu trả lời.

---

## 4. Không tự chuẩn hoá Design System

Không được tự động biến các giá trị Figma thành một hệ thống mới.

Ví dụ nếu Figma có:

```text
4px
10px
18px
```

không tự đổi thành:

```text
spacing-xs
spacing-sm
spacing-md
```

trừ khi naming hoặc token mapping đó đã tồn tại trong Figma.

Nếu cần mapping cho code, mapping phải giữ nguyên semantics của Figma.

Ví dụ:

```text
Figma:
spacing/content = 16

Code:
--spacing-content: 16px
```

Không tự đổi thành:

```text
--spacing-md
```

nếu Figma không định nghĩa semantic đó.

---

## 5. Design System Gap Detection

Nếu screen/component đang sử dụng một visual value nhưng Design System chưa quản lý nó bằng token/style/component, đưa vào:

`Design System Gaps`

Ví dụ:

```text
Observed:
Button corner radius = 8px
Card corner radius = 12px

Không tìm thấy Radius Variables tương ứng.
```

Không tự tạo token để sửa gap.

Chỉ báo cáo.

---

## 6. Conflict Detection

Nếu Design System và screen implementation khác nhau, không tự chọn bên thắng.

Ví dụ:

```text
Design System:
color/text/secondary = #667085

Screen:
File Detail / Metadata = #6B7280
```

Đưa vào:

`Design System Conflicts`

và ghi rõ:

- giá trị từ Design System;
- giá trị đang dùng trên screen;
- node/component liên quan.

Không tự sửa Figma.

---

## 7. Những thông tin cần hỏi người dùng

Sau khi hoàn thành quá trình inspect, chỉ hỏi người dùng những câu mà:

1. Figma không thể hiện intent;
2. câu trả lời ảnh hưởng trực tiếp đến việc document hoặc code prototype;
3. có ít nhất hai cách hiểu hợp lý.

Ví dụ phù hợp:

- Component này chỉ dùng ở File List hay có thể dùng toàn app?
- Hai giá trị visual khác nhau là intentional hay inconsistency?
- Một hard-coded value có nên trở thành token hay giữ local?
- Một component variant tồn tại nhưng không xuất hiện trên screen có còn được sử dụng không?

Không hỏi lại những thông tin có thể đọc trực tiếp từ Figma.

Không hỏi các câu lý thuyết chung về Design System.

Nếu người dùng không muốn quyết định một vấn đề, ghi:

`Chưa xác định`

thay vì tự quyết định.

---

## 8. Quy trình thực hiện

Thực hiện theo thứ tự:

### Bước 1 — Inventory

Đọc toàn bộ cấu trúc Design System liên quan.

Tạo inventory nội bộ về:

- variables;
- styles;
- components;
- variants;
- properties.

### Bước 2 — Usage Analysis

Kiểm tra các screen hiện tại để xác định:

- cái gì thực sự được sử dụng;
- cái gì tồn tại trong library nhưng chưa được dùng;
- cái gì đang hard-code ngoài Design System.

### Bước 3 — Gap & Conflict Analysis

Phân loại:

- Confirmed;
- Observed;
- Unresolved;
- Gap;
- Conflict.

### Bước 4 — User Decisions

Nếu có `UNRESOLVED` ảnh hưởng đến tài liệu cuối cùng, dừng trước khi tự quyết định và hỏi người dùng.

Gộp các câu hỏi liên quan thành một nhóm ngắn.

Không hỏi từng token riêng lẻ nếu có thể nhóm chúng thành một quyết định.

### Bước 5 — Generate Documentation

Sau khi các điểm cần thiết đã được xác nhận, tạo:

`design/design-system.md`

---

## 9. Nội dung design-system.md

Không ép file phải có một schema cố định.

Chỉ tạo section tương ứng với những hệ thống thực sự tồn tại trong Figma.

Có thể bao gồm, tùy Figma thực tế:

- Overview
- Colors
- Typography
- Spacing
- Layout
- Icons
- Components
- Component Variants
- Component States
- Effects
- Radius
- Border
- hoặc các hệ thống khác thực sự tồn tại.

Nếu một category không tồn tại và không được sử dụng, bỏ qua.

---

## 10. Mapping Figma → Code

Với các token CONFIRMED, tạo mapping sang CSS Variable.

Ví dụ:

```text
Figma Variable:
color/text/primary

CSS:
--color-text-primary
```

Mapping phải giữ nguyên meaning và hierarchy từ Figma.

Không tạo semantic mới chỉ để CSS trông đẹp hơn.

Nếu không thể mapping một cách chắc chắn, ghi `Chưa xác định`.

---

## 11. Component Documentation

Đối với component, document những thông tin có thể xác định trực tiếp:

- tên;
- variants;
- properties;
- states;
- token bindings;
- component structure khi cần;
- component được sử dụng ở screen nào.

Usage rule chỉ được ghi khi:

- có description/documentation trong Figma;
- hoặc có bằng chứng đủ rõ.

Nếu không thể xác định usage intent, ghi `Chưa xác định`.

---

## 12. Không thay đổi Figma

Task này chỉ có quyền:

READ Figma
→ ANALYZE
→ GENERATE MARKDOWN

Không:

- tạo Variable;
- sửa Variable;
- đổi tên layer;
- sửa Component;
- tạo Component;
- sửa screen;
- normalize token;
- cleanup Design System.

Mọi thay đổi Figma phải là một task riêng và cần được người dùng yêu cầu.

---

## 13. Kết quả trước khi tạo file

Trước khi tạo `design-system.md`, báo cáo ngắn:

```text
Confirmed from Figma:
...

Observed outside Design System:
...

Design System Gaps:
...

Conflicts:
...

Need user decision:
...
```

Nếu `Need user decision` rỗng, có thể tạo file ngay.

Nếu có quyết định ảnh hưởng materially đến tài liệu, hỏi người dùng trước khi hoàn tất.

Mục tiêu là:

- khoảng 80–90% nội dung lấy trực tiếp từ Figma;
- chỉ 10–20% là quyết định cần người dùng cung cấp;
- tuyệt đối không dùng phần 10–20% để AI tự phát minh Design System.