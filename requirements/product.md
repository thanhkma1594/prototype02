# Product — File Manager

## 1. Tổng quan sản phẩm

**Tên sản phẩm:** File Manager

File Manager là một sản phẩm mobile web giúp người dùng quản lý file trên điện thoại di động theo cách đơn giản, nhanh và dễ hiểu.

Sản phẩm tập trung vào các tác vụ quản lý file cơ bản, với trải nghiệm được tối ưu cho thiết bị di động.

---

## 2. Vấn đề cần giải quyết

Người dùng cần một cách thuận tiện để quản lý file trực tiếp trên điện thoại di động.

Sản phẩm hướng tới việc giúp người dùng:

- xem danh sách file;
- tìm kiếm file;
- xem thông tin chi tiết của file;
- chỉnh sửa thông tin hoặc nội dung liên quan đến file;
- xoá file.

Mục tiêu là giảm số bước thao tác và giúp các tác vụ quản lý file trở nên trực quan hơn trên màn hình mobile.

---

## 3. Mục tiêu của prototype

Prototype được xây dựng để phục vụ các mục tiêu sau:

- demo UI/UX;
- kiểm thử workflow;
- trình bày với stakeholder;
- validate ý tưởng sản phẩm;
- làm tài liệu tham chiếu khi handoff cho developer.

Prototype không nhằm thay thế production application hoàn chỉnh.

---

## 4. Đối tượng người dùng

Đối tượng sử dụng chính:

```text
Khách hàng
```

Người dùng tương tác với sản phẩm chủ yếu trên điện thoại di động.

---

## 5. Các hành động chính của người dùng

Trong phạm vi sản phẩm tổng thể, người dùng có thể thực hiện các hành động:

- xem danh sách file;
- tìm kiếm file;
- xem chi tiết file;
- chỉnh sửa;
- xoá.

---

## 6. Các feature của sản phẩm

Các feature chính được xác định ở cấp sản phẩm:

```text
File List
Search
File Detail
Edit
Delete
```

### 6.1 File List

Cho phép người dùng xem danh sách các file hiện có.

### 6.2 Search

Cho phép người dùng tìm kiếm file.

### 6.3 File Detail

Cho phép người dùng xem thông tin chi tiết của một file.

### 6.4 Edit

Cho phép người dùng chỉnh sửa file hoặc thông tin liên quan đến file.

### 6.5 Delete

Cho phép người dùng xoá file.

Chi tiết về flow, màn hình, state và business rule của từng feature không được định nghĩa trong file này.

Các nội dung đó phải được mô tả tại:

```text
requirements/<feature>/
```

---

## 7. Phạm vi prototype hiện tại

### 7.1 Trong phạm vi

Prototype hiện tại chỉ bao gồm:

```text
File List
Search
File Detail
```

Tương ứng với các chức năng:

- xem danh sách file;
- tìm kiếm file;
- xem chi tiết file.

### 7.2 Ngoài phạm vi hiện tại

Các feature sau thuộc sản phẩm nhưng **chưa nằm trong phạm vi prototype hiện tại**:

```text
Edit
Delete
```

AI hoặc developer không được tự động implement các feature này trong phase hiện tại nếu chưa có thay đổi requirement chính thức.

---

## 8. Platform

Target platform:

```text
Mobile Web
```

Prototype được thiết kế cho trải nghiệm trên điện thoại di động.

---

## 9. Responsive Scope

Phạm vi responsive hiện tại:

```text
Chỉ Mobile
```

Không yêu cầu:

- tablet layout;
- desktop layout;
- responsive layout đầy đủ cho nhiều breakpoint.

Nếu prototype được mở trên desktop browser, việc hiển thị desktop không phải là target design chính.

---

## 10. Dữ liệu

Prototype không sử dụng dữ liệu production hoặc dữ liệu thật.

Dữ liệu được mô phỏng bằng:

```text
Mock Data
```

Mock data chỉ phục vụ:

- hiển thị UI;
- demo workflow;
- mô phỏng các trạng thái của sản phẩm;
- kiểm thử interaction.

---

## 11. Backend và Database

Prototype hiện tại không sử dụng:

```text
Backend
Database
API thật
```

Các hành vi của prototype được mô phỏng hoàn toàn phía client.

---

## 12. Authentication

Prototype hiện tại không có authentication thật.

Không yêu cầu:

```text
Login thật
Session thật
User account backend
Authorization server
```

Nếu sau này cần mô phỏng authentication, requirement phải được cập nhật trước.

---

## 13. Persistence

Prototype không lưu state sau khi refresh.

Hành vi mặc định:

```text
Refresh browser
→ reset state
```

Không sử dụng persistence theo mặc định.

---

## 14. Nguyên tắc UX

Thiết kế sản phẩm phải ưu tiên các nguyên tắc:

### Đơn giản

Giao diện và flow phải tránh complexity không cần thiết.

### Ít bước

Người dùng nên hoàn thành tác vụ với số bước hợp lý và tối thiểu.

### Mobile-first

Mọi quyết định UI/UX phải ưu tiên trải nghiệm trên điện thoại di động.

### Dễ hiểu

Action, label, navigation và trạng thái phải rõ ràng.

### Ưu tiên tốc độ thao tác

Các tác vụ thường xuyên phải có thể thực hiện nhanh và trực tiếp.

---

## 15. Giới hạn của prototype

Prototype hiện tại không bao gồm:

- backend;
- database;
- payment thật;
- notification thật;
- dữ liệu production.

Prototype không được tự mở rộng sang các capability trên nếu chưa có requirement mới.

---

## 16. Đối tượng sử dụng prototype để review

Prototype có thể được sử dụng bởi:

- Stakeholder;
- Product Team;
- Developer;
- Client;
- Internal Team.

Mục tiêu là cung cấp một phiên bản có thể tương tác để các bên liên quan hiểu rõ trải nghiệm và workflow trước khi phát triển sản phẩm thật.

---

## 17. Tiêu chí hoàn thành prototype

Prototype được xem là đạt yêu cầu khi:

- flow chính có thể chạy end-to-end;
- navigation hoạt động;
- UI bám theo Figma đã được duyệt;
- các state chính cần thiết có thể được demo;
- prototype deploy được lên Vercel.

---

## 18. Source of Truth

File này chỉ định nghĩa context và scope ở cấp sản phẩm.

Quan hệ giữa các tài liệu:

```text
product.md
    ↓
Product context + scope

requirements/<feature>/
    ↓
Flow + Screen + Business Rule

design/
+ Approved Figma
    ↓
Visual Specification

prototype/architecture.md
    ↓
Technical Architecture

src/
    ↓
Interactive Prototype
```

Không sử dụng `product.md` để định nghĩa chi tiết:

- layout màn hình;
- component;
- route;
- React implementation;
- CSS;
- interaction chi tiết;
- business rule chi tiết.

Các nội dung đó phải nằm trong tài liệu chuyên trách tương ứng.
