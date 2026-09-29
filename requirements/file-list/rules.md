# File List — Rules

## 1. Mục đích

File này định nghĩa business rule và behavior rule của feature `File List`.

Không chứa chi tiết styling hoặc implementation kỹ thuật.

---

## 2. Route Rule

### FL-RULE-001

File List sử dụng route:

```text
/files
```

Đây là entry route của prototype.

---

## 3. File Open Rule

### FL-RULE-002

Toàn bộ File Row có thể được tap.

Khi tap:

```text
/files
→ /files/:id
```

Không có action trung gian.

---

## 4. Back State Rule

### FL-RULE-003

Khi Back từ File Detail về File List:

```text
/files/:id
→ /files
```

phải khôi phục state trước đó trong phiên hiện tại.

Với File List mặc định, tối thiểu giữ:

```text
scroll position
```

Nếu File Detail được mở từ Search state trên `/files`, việc phục hồi Search state tuân theo `navigation.md` và requirement của feature Search.

---

## 5. Persistence Rule

### FL-RULE-004

State chỉ cần được giữ trong phiên chạy hiện tại.

Browser refresh:

```text
reset state
```

Không sử dụng persistence theo mặc định.

---

## 6. Search / Filter Boundary Rule

### FL-RULE-005

File List chỉ chứa entry point cho:

```text
Search
Type Filter
Category Filter
Date modified Filter
```

Business rule chi tiết của Search/Filter không thuộc feature File List.

Không duplicate Search rules vào file này.

---

## 7. Folder Rule

### FL-RULE-006

Folder Card được hiển thị nhưng không có interaction trong scope hiện tại.

Tap folder:

```text
no action
```

Không:

- mở folder;
- thay đổi route;
- lọc File List;
- mở overlay.

---

## 8. Add Button Rule

### FL-RULE-007

Add Button được hiển thị theo Figma nhưng không có action.

Không implement:

```text
Upload
Create File
Create Folder
```

từ button này trong phase hiện tại.

---

## 9. More Options Rule

### FL-RULE-008

More Options icon trên từng file row được hiển thị nhưng không có action.

Không mở:

```text
Edit
Delete
Action Menu
Bottom Sheet
```

---

## 10. See All Recents Rule

### FL-RULE-009

`See all recents` được hiển thị nhưng không có action.

Không:

- expand;
- navigation;
- đổi route;
- thay đổi data set.

---

## 11. Layout Icon Rule

### FL-RULE-010

Icon ở header của section Recent Files chỉ có vai trò visual.

Không implement:

```text
List/Grid Toggle
```

---

## 12. File Name Overflow Rule

### FL-RULE-011

File Name hiển thị tối đa:

```text
1 dòng
```

Nếu vượt chiều rộng:

```text
ellipsis
```

Không wrap sang dòng thứ hai trong File Row.

---

## 13. Sort Rule

### FL-RULE-012

Hiện chưa có business rule về thứ tự sắp xếp File List / Recent Files.

```text
Sort order: Chưa quy định
```

Prototype có thể giữ thứ tự của mock data.

Không được coi thứ tự mock data là business rule chính thức.

---

## 14. File Metadata Rule

### FL-RULE-013

Figma thể hiện một dòng metadata phụ dưới tên file.

Ví dụ:

```text
10KB | 25.07.2023
```

Nhưng ý nghĩa business của chuỗi này chưa được xác nhận.

```text
Metadata semantic: Chưa xác định
```

Không tự quy ước `<size> | <date modified>` hoặc bất kỳ schema dữ liệu nào khác.

Khi tạo mock data, nếu cần hiển thị đúng visual, có thể dùng một field presentation-level tạm thời như:

```text
detailsText
```

Ví dụ:

```ts
detailsText: "10KB | 25.07.2023"
```

Điều này không được coi là domain model cuối cùng.

---

## 15. Empty State Rule

### FL-RULE-014

File List phải hỗ trợ Empty State.

Điều kiện business tối thiểu:

```text
File List không có dữ liệu để hiển thị
→ File List Empty State
```

Visual của Empty State hiện chưa được xác định trong Figma.

Không tự reuse Search `No Files Found`.

---

## 16. Loading / Error Rule

### FL-RULE-015

Phase hiện tại không yêu cầu:

```text
File List Loading State
File List Error State
```

Không tự thêm hai state này vào prototype nếu requirement chưa thay đổi.

---

## 17. Bottom Navigation Rule

### FL-RULE-016

Mặc dù một số Figma frame có `Tab` ở cuối màn hình, navigation requirement hiện tại xác nhận:

```text
Không có primary navigation cố định
```

Do đó:

```text
Bottom Tab không được implement trong prototype hiện tại.
```

Đây là intentional divergence giữa frame Figma cũ và navigation requirement hiện tại.

---

## 18. Out-of-scope Rule

### FL-RULE-017

Các capability sau không thuộc File List phase hiện tại:

```text
Edit
Delete
Upload
Create Folder
Open Folder
Sort interaction
Pagination
Infinite Scroll
List/Grid switching
Bottom Navigation
```

Không implement chỉ vì có affordance hoặc visual hint trong Figma.

---

## 19. Rule Priority

Khi có xung đột:

### Business behavior

```text
requirements/
→ ưu tiên
```

### Visual

```text
Approved Figma
→ ưu tiên
```

Ví dụ:

Figma có Bottom Tab nhưng `navigation.md` xác nhận không có primary navigation:

```text
Không implement Bottom Tab
```

Figma có More Options nhưng Delete/Edit ngoài scope:

```text
Hiển thị icon
Không implement action
```

---

## 20. Unresolved

### UNRESOLVED-001

Semantic của dòng `File Details`, ví dụ:

```text
10KB | 25.07.2023
```

chưa được xác nhận.

Không tự suy diễn domain meaning cho đến khi có requirement mới.
