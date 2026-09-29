# Search — Flow

## 1. Mục đích

File này mô tả flow nghiệp vụ của feature:

```text
Search
```

Search được thực hiện trực tiếp trên màn hình File List và không có route riêng.

Route sử dụng:

```text
/files
```

Search và Search Results là các state của File List.

---

## 2. Entry Point

Người dùng bắt đầu Search từ Search Bar trên File List.

```text
/files
    ↓
File List
    ↓
Focus Search Bar
    ↓
Search State
```

Không navigation sang `/search`.

---

## 3. Search Realtime Flow

Khi người dùng nhập keyword, kết quả được cập nhật realtime.

```text
Focus Search Bar
    ↓
Nhập keyword
    ↓
Search theo File Name
    ↓
Cập nhật kết quả realtime
```

Không cần chờ explicit submit để bắt đầu lọc kết quả.

---

## 4. Explicit Search Action

Figma có suggestion/action:

```text
Search for <keyword>
```

Trong prototype hiện tại, đây là explicit search action được hỗ trợ.

```text
Nhập keyword
    ↓
Tap "Search for <keyword>"
    ↓
Hiển thị kết quả tương ứng
```

Nút Search trên keyboard không tạo một explicit search flow riêng.

Vì search đã cập nhật realtime, việc tap `Search for <keyword>` có thể xác nhận/giữ kết quả hiện tại nhưng không thay đổi rule matching.

---

## 5. Empty Keyword Flow

Nếu keyword rỗng và không có filter đang active:

```text
Search keyword = empty
    ↓
File List mặc định
```

Không:

- chạy search rỗng;
- hiển thị validation;
- hiển thị error.

Nếu keyword được clear trong khi filter vẫn active, giữ filter và tiếp tục hiển thị kết quả filter-only.

---

## 6. Search Matching Flow

Search keyword áp dụng trên:

```text
File Name
```

Rule matching:

```text
case-insensitive
contains
```

Ví dụ:

```text
File:
Portfolio_Nguyen_Minh.pdf

Keyword:
folio

→ Match
```

---

## 7. Search Result Type

Keyword search chỉ tìm:

```text
File
```

Không trả Folder chỉ từ keyword search.

Folder chỉ có thể xuất hiện khi người dùng chọn:

```text
Type = Folder
```

---

## 8. Files Found Flow

Khi có kết quả:

```text
Keyword / Filter
    ↓
Matching data exists
    ↓
Search Results State
```

Search Results hiển thị ngay trên `/files`.

Không tạo route:

```text
/search/results
```

---

## 9. No Files Found Flow

Khi không có kết quả:

```text
Keyword / Filter
    ↓
No matching data
    ↓
No Files Found
```

No-result state hiển thị theo visual Figma:

```text
Illustration / Empty visual
"No Files Found"
```

Không có action bổ sung như:

- Clear Search button;
- Reset Filter button.

---

## 10. Type Filter Flow

User có thể mở filter:

```text
Type
```

Type Filter là single-select.

Các option được xác nhận từ Figma:

```text
XLSX
Word
PowerPoint
Text
PDF
Folder
```

Flow:

```text
Tap Type
    ↓
Open Type Bottom Sheet
    ↓
Select one Type
    ↓
Close Bottom Sheet
    ↓
Apply Filter immediately
```

Không có Apply button riêng.

---

## 11. Category Filter

Control `Category` được hiển thị theo Figma.

Trong scope hiện tại:

```text
Visible
No action
```

Không implement Category selection.

---

## 12. Date Modified Filter

Control `Date modified` được hiển thị theo Figma.

Trong scope hiện tại:

```text
Visible
No action
```

Không implement Date Modified selection.

---

## 13. Search + Filter

Search và Type Filter có thể hoạt động độc lập hoặc kết hợp.

Các mode hợp lệ:

```text
Search only
Type Filter only
Search + Type Filter
```

Khi Search và Type Filter cùng active:

```text
keyword condition
AND
type condition
```

Ví dụ:

```text
keyword = Portfolio
Type = XLSX

→ chỉ hiển thị file có tên chứa "Portfolio"
  VÀ có Type = XLSX
```

---

## 14. Clear All Filters

Khi có filter active, UI có control clear filter.

Action:

```text
Clear all filters
```

Behavior:

```text
Clear Type Filter
Giữ nguyên keyword
Recalculate results từ keyword hiện tại
```

Không clear keyword.

---

## 15. Clear Keyword

Khi người dùng clear text trong Search Bar:

```text
keyword → empty
```

Nếu Type Filter vẫn active:

```text
giữ Type Filter
hiển thị kết quả filter-only
```

Không reset toàn bộ Search state.

---

## 16. Tap Search Result

Toàn bộ result row có thể tap.

```text
Search Results
    ↓
Tap File Row
    ↓
/files/:id
    ↓
File Detail
```

---

## 17. Back từ File Detail

Khi Back:

```text
/files/:id
    ↓
/files
```

phải restore:

```text
keyword
active Type Filter
search results
scroll position
current search state
```

State chỉ cần giữ trong phiên hiện tại.

Browser refresh có thể reset state.

---

## 18. More Options

More Options icon trên Search Result được hiển thị nhưng không có action.

Không mở:

```text
Edit
Delete
Action Menu
Bottom Sheet
```

---

## 19. Result Ordering

Search Results hiện chưa có business rule về sort order.

```text
Result order: Chưa quy định
```

Prototype có thể giữ thứ tự mock data.

---

## 20. Pagination

Không có:

```text
Pagination
Load More
Infinite Scroll
```

Prototype hiển thị toàn bộ mock result phù hợp trong danh sách.

---

## 21. Flow Summary

```text
/files
  │
  ├── Focus Search
  │      ↓
  │   nhập keyword
  │      ↓
  │   realtime matching
  │      │
  │      ├── found
  │      │    ↓
  │      │ Search Results
  │      │
  │      └── not found
  │           ↓
  │       No Files Found
  │
  ├── Type Filter
  │      ↓
  │   Bottom Sheet
  │      ↓
  │   Select one type
  │      ↓
  │   Apply immediately
  │
  ├── Search + Type
  │      ↓
  │      AND
  │
  ├── Clear keyword
  │      ↓
  │   keep filter
  │
  ├── Clear filters
  │      ↓
  │   keep keyword
  │
  └── Tap result
         ↓
      /files/:id
         ↓ Back
      /files
      restore search state
```
