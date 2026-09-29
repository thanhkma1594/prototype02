# Navigation — File Manager

## 1. Mục đích

File này mô tả cấu trúc điều hướng ở cấp toàn ứng dụng cho prototype File Manager.

`navigation.md` chỉ định nghĩa:

- entry point của app;
- các screen có route riêng;
- quan hệ điều hướng giữa các screen;
- hành vi Back;
- route mapping;
- xử lý route không tồn tại;
- state cần được giữ khi quay lại màn hình trước.

File này không mô tả chi tiết business flow, UI layout hoặc implementation bằng React Router.

---

## 2. Entry Point

Màn hình mở đầu của ứng dụng:

```text
File List
```

Route:

```text
/files
```

---

## 3. Primary Navigation

Prototype hiện tại không có navigation chính cố định.

Không sử dụng:

```text
Bottom Navigation
Tabs
Side Menu
```

Navigation được thực hiện trực tiếp từ các interaction trên screen.

---

## 4. Navigation Model

Search không phải là một screen độc lập.

Search được thực hiện trực tiếp trong:

```text
File List
```

Search Results cũng không phải là một screen độc lập.

Kết quả tìm kiếm được hiển thị ngay trên chính màn hình:

```text
File List
```

Do đó:

```text
File List
Search
Search Results
```

đều sử dụng cùng route:

```text
/files
```

Search và Search Results được xem là các UI state của `File List`, không phải các navigation destination riêng.

---

## 5. Navigation Map

Cấu trúc điều hướng hiện tại:

```text
File List
│
├── Default State
│
├── Search State
│
├── Search Results State
│
└── File Detail
```

Trong đó:

```text
File List
Search
Search Results
```

đều nằm trên cùng một screen và cùng route.

`File Detail` là screen riêng.

---

## 6. Route Mapping

| Destination / State | Route | Navigation Type |
|---|---|---|
| File List | `/files` | Screen |
| Search | `/files` | State của File List |
| Search Results | `/files` | State của File List |
| File Detail | `/files/:id` | Screen |

Không tạo route riêng cho:

```text
/search
/search/results
```

trong scope hiện tại.

---

## 7. File List → File Detail

Khi người dùng chọn một file từ File List:

```text
/files
    ↓
/files/:id
```

Người dùng được đưa tới một màn hình chi tiết đơn giản.

Trong prototype hiện tại, File Detail có thể chỉ là:

```text
màn hình trắng
+
text xác định đây là màn hình chi tiết
+
action Back
```

Chi tiết UI cụ thể của File Detail phải được định nghĩa trong requirement hoặc Figma tương ứng, không phải trong file navigation này.

---

## 8. Search Results → File Detail

Khi người dùng chọn một file từ kết quả tìm kiếm:

```text
/files
(Search Results State)
        ↓
/files/:id
```

File Detail sử dụng cùng route:

```text
/files/:id
```

không phụ thuộc file được mở từ danh sách mặc định hay từ kết quả tìm kiếm.

---

## 9. Back Behavior — File Detail

File Detail có action Back.

Khi Back:

```text
File Detail
    ↓
File List
```

Route:

```text
/files/:id
    ↓
/files
```

Vì File List, Search và Search Results đều dùng chung `/files`, khi quay lại phải khôi phục state trước khi mở File Detail.

Ví dụ:

```text
Search Results
    ↓
File Detail
    ↓ Back
Search Results
```

hoặc:

```text
File List
    ↓
File Detail
    ↓ Back
File List
```

---

## 10. Back Behavior — Search

Search không phải screen độc lập.

Do đó không có action Back riêng cho Search.

Khi đang ở Search State:

```text
giữ nguyên tại /files
```

Không thực hiện navigation.

---

## 11. Back Behavior — Search Results

Search Results không phải screen độc lập.

Do đó không có action Back riêng cho Search Results.

Khi đang ở Search Results State:

```text
giữ nguyên tại /files
```

Không thực hiện navigation.

Việc thay đổi từ Search Results về trạng thái khác của File List phải được xử lý như UI state transition, không phải route navigation.

---

## 12. State Preservation

Khi người dùng mở File Detail từ `/files` và quay Back, File List phải giữ lại state trước đó.

Các state cần giữ khi có thể gồm:

```text
search keyword
search results
scroll position
current File List state
```

Ví dụ:

```text
/files
Search keyword = "report"
Search Results visible
Scroll position = 420px

        ↓ open file

/files/123

        ↓ Back

/files
Search keyword = "report"
Search Results visible
Scroll position = 420px
```

State preservation chỉ cần tồn tại trong phiên chạy hiện tại.

Không yêu cầu persistence sau khi refresh browser.

---

## 13. Direct URL Access

Prototype hiện tại không yêu cầu hỗ trợ mở trực tiếp File Detail bằng URL như:

```text
/files/123
```

File Detail được xem là destination được truy cập từ:

```text
File List
```

hoặc:

```text
Search Results State
```

Nếu direct access được yêu cầu trong phase sau, requirement và navigation có thể được cập nhật.

---

## 14. Unknown Route

Nếu người dùng truy cập route không tồn tại:

```text
unknown route
```

hiển thị:

```text
Not Found
```

Không tự động redirect về:

```text
/files
```

---

## 15. Screens trong scope navigation hiện tại

Navigation hiện tại chỉ bao gồm:

```text
File List
File Detail
```

Trong đó `File List` có các state:

```text
Default
Search
Search Results
```

Không có thêm:

```text
Splash
Profile
Settings
Menu
Bottom Navigation
Tabs
```

trong scope hiện tại.

---

## 16. Navigation Rules

Các rule chính:

### NAV-001

Entry point của app là:

```text
/files
```

### NAV-002

Search không có route riêng.

Search sử dụng:

```text
/files
```

### NAV-003

Search Results không có route riêng.

Search Results sử dụng:

```text
/files
```

### NAV-004

Chọn một file từ File List hoặc Search Results sẽ mở:

```text
/files/:id
```

### NAV-005

Back từ File Detail quay về:

```text
/files
```

và khôi phục state trước đó của File List.

### NAV-006

Search và Search Results không có Back navigation riêng.

### NAV-007

Route không tồn tại hiển thị:

```text
Not Found
```

---

## 17. Quan hệ với Feature Flow

`navigation.md` chỉ mô tả topology của app.

Chi tiết nghiệp vụ phải nằm trong:

```text
requirements/file-list/flow.md
requirements/search/flow.md
requirements/file-detail/flow.md
```

Ví dụ:

```text
Người dùng nhập keyword
→ lọc dữ liệu
→ hiển thị kết quả
→ empty state
```

không thuộc `navigation.md`.

Navigation chỉ cần biết:

```text
Search
và
Search Results
đều nằm tại /files
```

---

## 18. Quan hệ với Architecture

File này định nghĩa navigation requirement.

Implementation kỹ thuật phải tuân theo:

```text
prototype/architecture.md
```

Ví dụ:

```text
navigation.md
        ↓
Navigation requirement

prototype/architecture.md
        ↓
React Router strategy

src/app/router.tsx
        ↓
Implementation
```

`navigation.md` không quy định API cụ thể như:

```text
useNavigate
createBrowserRouter
BrowserRouter
```

---

## 19. Navigation Summary

```text
ENTRY

/files
  │
  │
  ├── File List / Default
  │
  ├── File List / Search
  │
  ├── File List / Search Results
  │
  │
  └── select file
          ↓
      /files/:id
          │
          │ Back
          ↓
        /files
        restore previous state


UNKNOWN ROUTE
      ↓
   Not Found
```

---

## 20. Source of Truth

File này là Source of Truth cho navigation ở cấp app trong scope prototype hiện tại.

Nếu có thay đổi như:

- thêm screen;
- thêm route;
- thêm Bottom Navigation;
- tách Search thành screen riêng;
- thêm direct URL access;
- thay đổi Back behavior;

phải cập nhật file này trước hoặc đồng thời với implementation.
