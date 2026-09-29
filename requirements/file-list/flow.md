# File List — Flow

## 1. Mục đích

File này mô tả flow nghiệp vụ của feature `File List`.

Feature này tập trung vào:

- hiển thị File List mặc định;
- hiển thị Recent Files;
- hiển thị Folders;
- mở File Detail;
- cung cấp entry point cho Search / Filter.

Chi tiết Search, Search Results và Filter không thuộc file này. Các flow đó được tách sang `requirements/search/`.

---

## 2. Entry Point

File List là entry screen của app.

Route:

```text
/files
```

Khi người dùng mở app:

```text
/files
    ↓
File List
```

---

## 3. Default Flow

Flow mặc định:

```text
Open /files
    ↓
Hiển thị File List
    ↓
Hiển thị:
- Header
- Search / Filter entry points
- Recent Files
- Folders
```

Không có bước navigation trung gian trước khi File List xuất hiện.

---

## 4. Open File Detail

Người dùng có thể tap toàn bộ file row.

```text
File List
    ↓
Tap File Row
    ↓
/files/:id
    ↓
File Detail
```

Không có confirmation hoặc action trung gian trước khi mở File Detail.

---

## 5. Back từ File Detail

Khi người dùng Back từ File Detail:

```text
File Detail
    ↓
/files
    ↓
File List
```

File List phải khôi phục state trước đó trong phiên hiện tại.

Với File List mặc định, tối thiểu phải giữ:

```text
scroll position
```

Nếu File Detail được mở từ một state Search trong cùng `/files`, state Search được xử lý theo navigation requirement chung.

Không yêu cầu persistence sau browser refresh.

---

## 6. Search / Filter Entry Point

Search và Filter xuất hiện trực tiếp trên File List.

File List chỉ định nghĩa rằng các control này tồn tại như entry point.

Chi tiết như:

- nhập keyword;
- trigger search;
- search result;
- no-result;
- chọn filter;
- kết hợp Search + Filter;

không được định nghĩa trong feature File List.

Các behavior đó thuộc `requirements/search/`.

---

## 7. Folder Flow

Trong scope hiện tại, Folder chỉ được hiển thị.

Tap folder:

```text
không có action
```

Không:

- mở folder;
- đổi route;
- lọc File List;
- thay đổi state.

---

## 8. See All Recents

Control `See all recents` được hiển thị theo Figma nhưng không có action trong scope hiện tại.

Tap:

```text
không thực hiện navigation
không thay đổi state
```

---

## 9. Recent Files Layout Icon

Icon ở phần tiêu đề Recent Files được hiển thị theo Figma.

Trong scope hiện tại:

```text
chỉ visual
không có action
```

Không implement chuyển List ↔ Grid.

---

## 10. Add Button

Add Button ở header được hiển thị theo Figma.

Trong scope hiện tại:

```text
chỉ visual
không có action
```

Không mở:

- upload;
- create file;
- create folder;
- menu.

---

## 11. More Options

Mỗi file row có More Options icon theo Figma.

Trong scope hiện tại:

```text
chỉ visual
không có action
```

Không mở menu Edit/Delete trong phase này.

---

## 12. Empty Flow

Feature File List cần có Empty State.

```text
Open /files
    ↓
Không có dữ liệu để hiển thị ở File List mặc định
    ↓
File List Empty State
```

Visual cụ thể của File List Empty State hiện chưa có trong Figma node đã inspect.

```text
Visual Specification: Chưa xác định
```

Không được tái sử dụng trực tiếp Search `No Files Found` như File List Empty State nếu chưa có xác nhận thiết kế.

---

## 13. Out of Scope

Không thuộc File List flow hiện tại:

```text
Edit
Delete
Upload
Create Folder
Open Folder
Sort
Pagination
Infinite Scroll
List/Grid switching
Bottom Navigation
```

Search/Filter behavior chi tiết cũng không thuộc file này.

---

## 14. Flow Summary

```text
/files
  │
  ├── File List Default
  │      │
  │      ├── tap file
  │      │      ↓
  │      │   /files/:id
  │      │      │
  │      │      └── Back → /files
  │      │                    restore scroll/state
  │      │
  │      ├── Search / Filter entry point
  │      │      ↓
  │      │   handled by search feature
  │      │
  │      ├── Folder → no action
  │      ├── See all recents → no action
  │      ├── Layout icon → no action
  │      ├── Add button → no action
  │      └── More Options → no action
  │
  └── File List Empty
         ↓
     visual chưa xác định
```
