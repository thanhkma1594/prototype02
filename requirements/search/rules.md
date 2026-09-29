# Search — Rules

## 1. Mục đích

File này định nghĩa business rule và behavior rule của feature:

```text
Search
```

Search hoạt động trên route:

```text
/files
```

---

## 2. Route Rule

### SEARCH-RULE-001

Search không có route riêng.

Các state sau đều dùng:

```text
/files
```

- Search
- Search Results
- No Files Found
- Filter Open
- Filter Applied

---

## 3. Realtime Search Rule

### SEARCH-RULE-002

Kết quả được cập nhật realtime khi user nhập keyword.

Không cần chờ explicit submit để bắt đầu matching.

---

## 4. Explicit Search Rule

### SEARCH-RULE-003

Explicit search action được hỗ trợ:

```text
Search for <keyword>
```

Keyboard Search không tạo một action/flow riêng.

Do realtime search đã hoạt động, explicit action này không thay đổi matching semantics.

---

## 5. Empty Keyword Rule

### SEARCH-RULE-004

Nếu:

```text
keyword = empty
AND
không có filter active
```

thì hiển thị File List mặc định.

Không hiển thị validation cho keyword rỗng.

---

## 6. Search Field Rule

### SEARCH-RULE-005

Keyword chỉ match:

```text
File Name
```

Không match:

- folder name;
- metadata;
- file details text.

---

## 7. Case Sensitivity Rule

### SEARCH-RULE-006

Search không phân biệt chữ hoa/chữ thường.

Ví dụ:

```text
portfolio
Portfolio
PORTFOLIO
```

được xử lý tương đương.

---

## 8. Match Rule

### SEARCH-RULE-007

Search dùng:

```text
contains
```

Ví dụ:

```text
File Name:
Portfolio_Nguyen_Minh.pdf

Keyword:
folio

→ match
```

Không yêu cầu starts-with hoặc exact match.

---

## 9. Search Result Entity Rule

### SEARCH-RULE-008

Keyword search chỉ trả:

```text
File
```

Folder không được trả chỉ vì Folder Name match keyword.

Folder chỉ có thể xuất hiện khi:

```text
Type = Folder
```

---

## 10. Type Filter Rule

### SEARCH-RULE-009

Type Filter là:

```text
single-select
```

Các option:

```text
XLSX
Word
PowerPoint
Text
PDF
Folder
```

Chỉ một Type được active tại một thời điểm.

---

## 11. Type Apply Rule

### SEARCH-RULE-010

Khi user chọn một Type:

```text
select Type
→ close bottom sheet
→ apply immediately
```

Không có Apply/Confirm button.

---

## 12. Category Rule

### SEARCH-RULE-011

Category control:

```text
Visible
No action
```

Không implement Category filtering trong phase hiện tại.

---

## 13. Date Modified Rule

### SEARCH-RULE-012

Date modified control:

```text
Visible
No action
```

Không implement Date Modified filtering trong phase hiện tại.

---

## 14. Search + Filter Combination Rule

### SEARCH-RULE-013

Khi keyword và Type cùng active:

```text
keyword condition
AND
type condition
```

Không sử dụng OR.

---

## 15. Clear Filters Rule

### SEARCH-RULE-014

Clear Filter control:

```text
clear tất cả active filter
giữ nguyên keyword
```

Sau đó recalculate results theo keyword.

---

## 16. Clear Keyword Rule

### SEARCH-RULE-015

Khi clear keyword:

```text
keyword → empty
```

Filter đang active phải được giữ.

Nếu Type vẫn active:

```text
hiển thị filter-only results
```

Không reset toàn bộ Search state.

---

## 17. No Result Rule

### SEARCH-RULE-016

Nếu không có data match:

```text
No Files Found
```

Không thêm CTA/action khác.

---

## 18. Result Open Rule

### SEARCH-RULE-017

Toàn bộ Search Result Row có thể tap.

```text
Tap result
→ /files/:id
```

---

## 19. Back Restore Rule

### SEARCH-RULE-018

Back từ File Detail phải restore:

```text
keyword
active Type
result list
scroll position
current search state
```

State chỉ cần giữ trong current session.

Browser refresh có thể reset.

---

## 20. More Options Rule

### SEARCH-RULE-019

More Options trên Search Result:

```text
Visible
No action
```

Không implement Edit/Delete menu.

---

## 21. Sort Rule

### SEARCH-RULE-020

Search Results chưa có business rule về sort order.

```text
Sort order: Chưa quy định
```

Prototype có thể giữ thứ tự mock data.

Không coi mock data order là product rule chính thức.

---

## 22. Pagination Rule

### SEARCH-RULE-021

Không implement:

```text
Pagination
Load More
Infinite Scroll
```

---

## 23. File Metadata Rule

### SEARCH-RULE-022

Search Result có metadata line theo Figma.

Ví dụ:

```text
10KB | 25.07.2023
```

Ý nghĩa business chưa xác định.

```text
Metadata semantic: Chưa xác định
```

Không tự quy ước `<size> | <date modified>`.

Nếu cần mock để match visual, có thể dùng presentation field:

```text
detailsText
```

cho đến khi domain semantic được xác nhận.

---

## 24. UI State Rule

### SEARCH-RULE-023

Search phải hỗ trợ các state:

```text
Typing
Files Found
No Files Found
Type Filter Open
Type Filter Applied
Search + Type Filter
```

Không tạo route riêng cho từng state.

---

## 25. Out of Scope

### SEARCH-RULE-024

Không thuộc phase hiện tại:

```text
Category filtering
Date Modified filtering
Multi-select Type
Advanced search
Search history
Pagination
Infinite scroll
Result sort controls
More Options actions
Keyboard-specific submit flow
```

---

## 26. Rule Priority

Business behavior:

```text
requirements/search/
→ ưu tiên
```

Visual:

```text
Approved Figma
→ ưu tiên
```

Ví dụ:

Figma có Android keyboard:

```text
Không dựng keyboard trong web prototype.
```

Figma có Category và Date Modified:

```text
Giữ visual
Không implement action
```
