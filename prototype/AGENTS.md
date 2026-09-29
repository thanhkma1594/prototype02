# /prototype/AGENTS.md

## 1. Phạm vi

File này áp dụng cho:

```text
/prototype/
src/
```

và mọi công việc liên quan đến web prototype.

AI phải đọc `../AGENTS.md` trước khi áp dụng file này.

---

## 2. Mục tiêu

Prototype dùng để:

- trình diễn UI;
- mô phỏng workflow;
- kiểm thử interaction;
- mô phỏng navigation;
- demo sản phẩm.

Prototype không phải production application.

Ưu tiên:

```text
đơn giản
dễ hiểu
dễ sửa
dễ demo
bám Figma
```

---

## 3. Tech Stack

Mặc định:

```text
React
Vite
TypeScript
React Router
CSS Modules hoặc CSS
React local state
Mock data
Vercel
```

Không tự thêm:

```text
Next.js
Redux
Zustand
MobX
Tailwind
Material UI
Ant Design
backend
database
authentication server
```

nếu requirement hoặc architecture chưa yêu cầu.

---

## 4. Source of Truth

### Business behavior

```text
requirements/
```

### Visual

```text
Figma đã duyệt
design/
```

### Technical architecture

```text
prototype/architecture.md
```

Không dùng code để tự thay đổi nghiệp vụ.

---

## 5. Architecture

Tuân thủ:

```text
prototype/architecture.md
```

Architecture chỉ nên mô tả technical architecture.

Không duplicate toàn bộ:

- screen specification;
- business flow;
- business rule;

vào `architecture.md`.

Có thể tham chiếu tới requirement tương ứng.

---

## 6. Folder Structure

Ưu tiên cấu trúc đơn giản.

Ví dụ:

```text
src/
├── components/
├── features/
├── layouts/
├── pages/
├── mocks/
├── routes/
├── styles/
├── types/
├── utils/
├── App.tsx
└── main.tsx
```

Không tạo folder rỗng chỉ để chuẩn bị cho tương lai.

---

## 7. Feature-based organization

Nếu một chức năng có nhiều file riêng, có thể tổ chức theo feature.

Ví dụ:

```text
src/features/search/
├── components/
├── pages/
├── types.ts
└── utils.ts
```

Không bắt buộc toàn bộ màn hình phải nằm chung trong `screens/`.

Ưu tiên cấu trúc giúp tìm đúng file nhanh.

---

## 8. Routing

Dùng React Router.

Route phải phản ánh flow nghiệp vụ khi phù hợp.

Ví dụ:

```text
/
/search
/search/results
/file/:id
/upload
/success
```

Không tạo route mới cho một state nghiệp vụ chưa tồn tại trong requirement.

---

## 9. Component hóa

Tách component khi:

- dùng lại;
- có trách nhiệm rõ ràng;
- đại diện cho Design System component;
- giúp page dễ đọc hơn.

Ví dụ:

```text
Button
SearchInput
FileCard
BottomNavigation
EmptyState
```

Không tạo component nhỏ vô nghĩa chỉ để giảm số dòng code.

---

## 10. Figma → React

Code phải bám Figma đã duyệt về:

- layout;
- typography;
- spacing;
- color;
- radius;
- icon;
- component;
- state;
- hierarchy.

Không redesign trong lúc code.

Nếu Figma có reusable component, ưu tiên tạo reusable React component tương ứng.

---

## 11. CSS

Sử dụng:

```text
CSS
hoặc
CSS Modules
```

theo architecture.

Ưu tiên CSS Modules cho style gắn với component.

Ví dụ:

```text
Button.tsx
Button.module.css
```

Hạn chế inline styles trừ giá trị dynamic.

Không đưa toàn bộ style của app vào một file global duy nhất.

---

## 12. Design Token

Nếu Design System có token, ánh xạ sang CSS variables khi phù hợp.

Ví dụ:

```css
:root {
  --color-primary: #000000;
  --color-background: #ffffff;

  --space-4: 4px;
  --space-8: 8px;
  --space-12: 12px;
  --space-16: 16px;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
}
```

Không hard-code cùng một giá trị ở nhiều nơi nếu đó là token dùng chung.

---

## 13. Mock Data

Không phụ thuộc backend nếu mục tiêu chỉ là prototype.

Mock data đặt tại:

```text
src/mocks/
```

Nếu architecture hiện tại quy định:

```text
src/mocks/files.ts
```

thì dữ liệu file phải được quản lý ở đó.

Không duplicate cùng một dataset trong nhiều component.

---

## 14. State Management

Mặc định dùng React local state:

```text
useState
useReducer
Context
```

khi cần.

Không thêm state management library nếu local state đủ đáp ứng prototype.

---

## 15. TypeScript

Tránh `any`.

Định nghĩa type rõ ràng cho:

- props;
- mock data;
- route params;
- domain objects;
- state.

Ví dụ:

```ts
export interface FileItem {
  id: string;
  name: string;
  type: string;
  size: number;
}
```

---

## 16. Interaction

Các interaction cần thiết trong flow phải hoạt động khi có thể mô phỏng frontend.

Ví dụ:

- click;
- navigation;
- search;
- select;
- tabs;
- modal;
- bottom sheet;
- upload simulation;
- loading;
- success;
- error.

Không cần backend thật nếu interaction có thể mô phỏng bằng mock state.

---

## 17. Semantic HTML

Ưu tiên:

```text
button
input
label
nav
main
section
```

Không dùng `div` cho mọi interactive element.

Interactive control phải có hành vi rõ ràng.

---

## 18. Không over-engineer

Không tự thêm:

- repository layer;
- complex service layer;
- dependency injection;
- API abstraction;
- global state library;
- backend;
- database;
- complex state machine;

nếu prototype không cần.

---

## 19. Quy tắc thay đổi architecture

Nếu implementation hiện tại không đáp ứng requirement:

1. xác định requirement nào gây thay đổi;
2. cập nhật `architecture.md` nếu thay đổi thực sự thuộc architecture;
3. sau đó cập nhật code.

Không âm thầm phá vỡ architecture.

---

## 20. Build và kiểm tra

Trước khi hoàn thành một thay đổi:

- chạy build;
- kiểm tra TypeScript;
- kiểm tra route;
- kiểm tra interaction;
- kiểm tra console error;
- kiểm tra UI chính;
- kiểm tra mock data;
- kiểm tra các state liên quan.

Không coi feature hoàn thành nếu app không build được.

---

## 21. Vercel

Prototype được thiết kế để deploy trên Vercel.

Không thêm server dependency làm prototype không thể deploy dưới cấu hình hiện tại nếu architecture chưa thay đổi.

Nếu dùng client-side routing, cấu hình deploy phải đảm bảo refresh route không làm hỏng navigation.

---

## 22. Checklist trước khi hoàn thành

Kiểm tra:

- đúng requirement;
- đúng navigation;
- bám Figma;
- đúng architecture;
- build thành công;
- không TypeScript error;
- route hoạt động;
- interaction chính hoạt động;
- mock data đúng nguồn;
- không dependency thừa;
- không logic backend không cần thiết;
- code đủ đơn giản để tiếp tục chỉnh sửa nhanh.
