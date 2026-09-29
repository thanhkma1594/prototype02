# AGENTS.md

## 1. Vai trò

File này là bộ rule chung ở cấp project.

Nó điều phối cách AI làm việc giữa:

```text
Requirement
Design
Prototype
```

Rule chi tiết cho từng lĩnh vực nằm tại:

```text
/design/AGENTS.md
/prototype/AGENTS.md
```

AI phải đọc file này trước, sau đó đọc `AGENTS.md` gần nhất với khu vực đang làm việc.

---

## 2. Workflow

```text
Requirement
    ↓
UX Flow / Screen Specification
    ↓
Design System
    ↓
Figma
    ↓
Web Prototype
    ↓
Deploy
```

---

## 3. Source of Truth

### Nghiệp vụ

```text
requirements/
```

quy định:

- business rule;
- user flow;
- validation;
- state;
- action;
- navigation;
- dữ liệu cần hiển thị.

### Visual

```text
design/
```

và Figma đã duyệt quy định:

- layout;
- component;
- typography;
- color;
- spacing;
- icon;
- visual state.

### Kỹ thuật

```text
prototype/architecture.md
```

quy định:

- tech stack;
- project structure;
- routing;
- state management;
- mock data;
- deployment.

---

## 4. Thứ tự ưu tiên khi có xung đột

Với business behavior:

```text
Requirement > Figma > Code
```

Với visual:

```text
Design System / Figma > Code
```

Với technical architecture:

```text
Architecture > Implementation
```

Không dùng một loại tài liệu để tự ý ghi đè trách nhiệm của loại tài liệu khác.

---

## 5. Quy tắc chung

AI phải:

1. Đọc tài liệu liên quan trước khi chỉnh sửa.
2. Không tự phát minh requirement.
3. Không tự thay đổi business flow.
4. Không redesign Figma trong lúc code.
5. Không thay đổi architecture chỉ vì cách khác dễ code hơn.
6. Ưu tiên reuse.
7. Giữ naming nhất quán.
8. Không over-engineer.
9. Không thêm dependency không cần thiết.
10. Luôn giữ requirement, design và prototype đồng bộ.

---

## 6. Cấu trúc requirement

Không bắt buộc tất cả màn hình phải nằm trong một file `screens.md`.

Không bắt buộc tất cả flow phải nằm trong một file `flows.md`.

Khuyến khích chia requirement theo feature khi project lớn.

Ví dụ:

```text
requirements/
├── global/
│   ├── product.md
│   └── navigation.md
│
├── search/
│   ├── flow.md
│   ├── screens.md
│   └── rules.md
│
├── upload/
│   ├── flow.md
│   └── screens.md
│
└── profile/
    ├── flow.md
    └── screens.md
```

---

## 7. Rule theo khu vực

Khi làm việc với:

```text
/design/
```

phải đọc:

```text
/design/AGENTS.md
```

Khi làm việc với:

```text
/prototype/
src/
```

phải đọc:

```text
/prototype/AGENTS.md
```

Nếu rule local và root khác nhau:

- rule local có thể bổ sung chi tiết;
- không được phủ định các nguyên tắc cốt lõi của root;
- requirement vẫn luôn là nguồn sự thật nghiệp vụ.

---

## 8. Tiêu chí hoàn thành chung

Một feature chỉ được xem là hoàn thành khi:

- flow đúng requirement;
- design đủ state cần thiết;
- code bám design;
- interaction chính hoạt động;
- navigation đúng;
- không có thay đổi nghiệp vụ ngoài requirement;
- không có dependency không cần thiết.
