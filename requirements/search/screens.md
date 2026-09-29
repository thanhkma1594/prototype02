# Search — Screens

## 1. Mục đích

File này mô tả UI/state của feature:

```text
Search
```

Visual source of truth:

```text
Figma
File: temply-draft
Node: 14171:23140
Section: Search & Filter
```

Search không phải screen có route riêng.

Nó là tập hợp UI states trên:

```text
/files
```

---

## 2. State Inventory

Figma đã thể hiện các state chính:

```text
File List / Default
Search / Typing
Search / Files Found
Search / No Files Found
Search / Type Filter Open
Search / Type Filter Applied
Search + Type Filter
```

---

## 3. Search Bar

Search Bar nằm trên File List.

### Default

Placeholder:

```text
Enter file name
```

### Active / Typing

Khi user nhập keyword, Figma có state thể hiện:

```text
Search for <keyword>
```

và có clear/delete-text control.

Runtime behavior trên mobile browser:

- input phải có computed font-size tối thiểu `16px` trên thiết bị touch để Chrome/Safari trên iOS không tự zoom viewport khi focus;
- platform override này chỉ áp dụng cho HTML input, không thay đổi typography token `Medium/B3` của các text khác;
- chỉ hiển thị một caret tại vị trí nhập liệu;
- không hiển thị focus outline bị cắt ở hai cạnh của input;
- trạng thái focus/typing dùng `arrow-left` và clear control dùng asset `close-circle` theo canonical Search bar;
- trạng thái không focus dùng search icon theo state tương ứng.

---

## 4. Search Behavior Representation

UI phải hỗ trợ:

```text
realtime result update
```

trong khi người dùng nhập keyword.

Ngoài ra, Figma có explicit suggestion/action:

```text
Search for <keyword>
```

Đây là explicit search action duy nhất cần hỗ trợ.

Không cần tạo behavior riêng cho keyboard Search.

---

## 5. Filter Bar

Figma thể hiện ba filter control:

```text
Type
Category
Date modified
```

### Type

Có interaction trong prototype.

### Category

```text
Visible
No action
```

### Date modified

```text
Visible
No action
```

---

## 6. Type Filter Bottom Sheet

Khi tap `Type`, hiển thị bottom sheet.

Figma thể hiện:

```text
Type
├── XLSX
├── Word
├── PowerPoint
├── Text
├── PDF
└── Folder
```

Type là single-select.

Sau khi chọn:

```text
bottom sheet đóng
filter apply ngay
```

Không có Apply button.

---

## 7. Type Selected State

Sau khi chọn Type, filter bar hiển thị selected value, ví dụ:

```text
XLSX
Category
Date modified
```

Figma cũng thể hiện control clear filter ở đầu filter row.

Behavior:

```text
Clear filters
→ remove active Type
→ keep keyword
```

---

## 8. Search Results — Files Found

Khi có kết quả, list hiển thị ngay trong `/files`.

Mỗi row theo visual Figma:

```text
Result Row
├── File Type Icon
├── File Name
├── File Details / Metadata Line
└── More Options
```

### File Name

Hiển thị một dòng.

Overflow:

```text
ellipsis
```

### Metadata Line

Figma có visual dạng:

```text
10KB | 25.07.2023
```

Nhưng semantic chưa xác định.

```text
Visual pattern: Confirmed
Semantic: Chưa xác định
```

Không mặc định coi đây là `<size> | <date modified>`.

### More Options

```text
Visible
No action
```

---

## 9. Search Result Interaction

Toàn bộ Result Row có thể tap.

```text
Tap row
→ /files/:id
→ File Detail
```

---

## 10. No Files Found

Figma có state:

```text
No Files Found
```

State gồm visual/illustration và text:

```text
No Files Found
```

Không thêm:

```text
Clear Search button
Reset Filter button
CTA khác
```

nếu Figma/requirement chưa thay đổi.

---

## 11. Search Scope

Keyword Search chỉ tìm theo:

```text
File Name
```

Không search folder name.

Folder chỉ xuất hiện nếu:

```text
Type = Folder
```

---

## 12. Search + Filter State

Figma xác nhận có thể:

```text
Search only
Filter only
Search + Filter
```

Khi kết hợp:

```text
keyword AND selected Type
```

UI giữ đồng thời:

```text
keyword trong Search Bar
selected Type trong filter chip/control
matching result list
```

---

## 13. Clear Keyword State

Khi clear keyword nhưng Type vẫn active:

```text
Search Bar → empty
Type → vẫn selected
Results → filter-only
```

Không quay về File List mặc định nếu filter vẫn còn.

---

## 14. Clear Filter State

Khi clear filter:

```text
Type → reset
Keyword → giữ nguyên
Results → search-only
```

---

## 15. Keyboard

Figma có Android keyboard trong một số state để mô tả việc nhập text.

Keyboard là visual/context artifact của interaction.

Prototype web không cần dựng keyboard UI.

Browser/device keyboard xử lý input tự nhiên.

---

## 16. Elements không có action

Các element sau hiển thị nhưng không có action trong Search prototype hiện tại:

```text
Category Filter
Date modified Filter
More Options
```

Không tự implement behavior.

---

## 17. Navigation

Search không có route riêng.

```text
Search             → /files
Search Results     → /files
No Files Found     → /files
Filter Open        → /files
```

Chỉ khi tap result:

```text
/files
→ /files/:id
```

---

## 18. State Preservation

Khi mở File Detail rồi quay lại, UI phải khôi phục:

```text
keyword
selected Type
result list
scroll position
current Search state
```

---

## 19. Source of Truth

Visual:

```text
Approved Figma
```

Behavior:

```text
requirements/search/
```

Không suy diễn thêm interaction từ visual affordance nếu chưa được xác nhận.
