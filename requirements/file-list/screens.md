# File List — Screens

## 1. Mục đích

File này mô tả cấu trúc UI và các state của feature `File List`.

Visual source of truth:

```text
Figma
File: temply-draft
Node: 14171:23140
Section: Search & Filter
```

Chỉ document những gì có bằng chứng từ Figma hoặc đã được xác nhận.

---

## 2. Screen chính

### File List

Route:

```text
/files
```

Target:

```text
Mobile Web
Full width trong mobile viewport
Mobile canvas tối đa 480px trên viewport lớn
```

Frame `360 × 800` trong Figma chỉ là visual reference. Runtime không khóa width ở `360px` hoặc height ở `800px`.

File List dùng `min-height` bằng dynamic viewport. Khi nội dung dài hơn viewport, toàn page cuộn tự nhiên.

File List là entry screen của prototype.

---

## 3. Cấu trúc tổng thể

Screen bao gồm:

```text
File List
├── Header
│   ├── Title: "My File"
│   └── Add Button
│
├── Search / Filter Area
│   ├── Search Bar
│   ├── Type
│   ├── Category
│   └── Date modified
│
├── Recent Files
│   ├── Section Title
│   ├── Layout Icon
│   ├── File Rows
│   └── See all recents
│
└── Folders
    ├── Section Title
    └── Folder Cards
```

Bottom Tab xuất hiện trong một số Figma frames nhưng không thuộc prototype hiện tại theo `navigation.md`.

Không implement Bottom Tab trong File List.

Không implement system status bar giả lập. Giờ, ngày, cột sóng, Wi-Fi, phần trăm pin và biểu tượng pin trong frame Figma không thuộc UI của File List.

---

## 4. Header

Figma thể hiện:

```text
Title: My File
Add Button: icon "+"
```

### Behavior

Add Button:

```text
Visible
No action
```

Không dùng Add Button để mở flow ngoài scope.

---

## 5. Search / Filter Area

Figma thể hiện:

### Search Bar

Placeholder ở trạng thái mặc định:

```text
Enter file name
```

Search Bar nằm trực tiếp trong File List.

### Filter controls

```text
Type
Category
Date modified
```

Các control này được hiển thị như entry point cho feature Search/Filter.

Chi tiết state và behavior của Search/Filter không thuộc file này.

---

## 6. Recent Files

Section title:

```text
Recent Files
```

Figma thể hiện một icon ở phía phải section title.

### Layout Icon

Trong prototype hiện tại:

```text
Visible
No action
```

Không implement List/Grid switching.

---

## 7. File Row

Mỗi file row trong Figma có cấu trúc:

```text
File Row
├── File Type Icon
├── File Name
├── File Details / Metadata Line
└── More Options Icon
```

### File Type Icon

Figma sử dụng component/instance `File`.

Icon thay đổi theo loại file trong visual design.

### File Name

Tên file hiển thị trên một dòng.

Rule overflow:

```text
1 line
→ ellipsis nếu vượt chiều rộng khả dụng
```

### File Details / Metadata Line

Figma có một dòng thông tin phụ dưới File Name.

Ví dụ visual trong Figma:

```text
10KB | 25.07.2023
```

Tuy nhiên semantic/business meaning chính xác của chuỗi này chưa được xác nhận.

```text
Semantic: Chưa xác định
Visual pattern: Confirmed
```

Không được mặc định coi đây là `<size> | <date modified>` cho đến khi có requirement xác nhận.

### More Options

More Options icon được hiển thị ở cuối row.

```text
Visible
No action
```

---

## 8. File Row Interaction

Toàn bộ File Row là vùng có thể tap.

```text
Tap File Row
→ /files/:id
→ File Detail
```

Không yêu cầu tap chính xác vào File Name hoặc icon.

---

## 9. See All Recents

Figma có control:

```text
See all recents
```

Behavior hiện tại:

```text
Visible
No action
```

Không:

- expand list;
- navigation;
- thay đổi state.

---

## 10. Folders

Section title:

```text
Folders
```

Figma thể hiện nhiều folder/storage card, ví dụ:

```text
Internal Storage
Dương Chinh
New Folder (1)
New Folder (2)
Travel
```

Các card có thể hiển thị thông tin phụ, ví dụ:

```text
3.2 GB available
12 files
154 files
no files
```

### Behavior

Trong scope hiện tại:

```text
Folder Card
→ Visible
→ No action
```

Không mở folder hoặc đổi route.

---

## 11. File List Empty State

File List cần có Empty State theo requirement đã xác nhận.

Tuy nhiên node Figma hiện tại chỉ có:

```text
Search No Files Found
```

không có visual được xác nhận cho:

```text
File List Empty State
```

Do đó:

```text
State: Required
Visual Specification: Chưa xác định
```

AI không được tự dùng Search No Files Found làm File List Empty State nếu chưa được thiết kế/xác nhận.

---

## 12. State Inventory

### Confirmed từ Figma

```text
File List Default
Search Entry Controls
Recent Files
Folders
```

### Required nhưng chưa có visual specification

```text
File List Empty
```

### Không yêu cầu trong phase hiện tại

```text
File List Loading
File List Error
```

---

## 13. Elements chỉ visual, không interaction

Các element sau xuất hiện trên UI nhưng không có action trong prototype hiện tại:

```text
Add Button
More Options
See all recents
Recent Files Layout Icon
Folder Cards
```

Không tạo interaction ngầm cho các element này.

---

## 14. Không implement từ Figma

Mặc dù Figma node cha chứa nhiều Search/Filter state, File List screen documentation không duplicate:

```text
Search Results
No Files Found from Search
Type Filter Bottom Sheet
Filter-selected state
Search + Filter combined state
Keyboard search state
```

Các state đó thuộc feature `search`.

---

## 15. Source of Truth Notes

Nếu có khác biệt giữa file này và Figma về visual:

```text
Approved Figma
→ visual source of truth
```

Nếu có khác biệt về business behavior:

```text
requirements/
→ business source of truth
```

Không suy diễn behavior chỉ từ affordance trên Figma.
