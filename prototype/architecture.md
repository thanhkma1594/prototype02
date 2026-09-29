# architecture.md

## 1. Mục đích

File này định nghĩa kiến trúc kỹ thuật cho web HTML prototype của project.

Mục tiêu của prototype:

- mô phỏng UI/UX đã được thiết kế;
- mô phỏng navigation giữa các màn hình;
- mô phỏng interaction chính của người dùng;
- phục vụ review, demo và kiểm thử workflow;
- triển khai nhanh trên Vercel;
- dễ chỉnh sửa khi requirement hoặc design thay đổi.

File này **không phải nơi mô tả business flow chi tiết, screen specification hoặc business rule**.

Các nội dung nghiệp vụ phải nằm trong:

```text
requirements/
```

Các nội dung visual phải nằm trong:

```text
design/
```

và Figma đã được duyệt.

---

## 2. Phạm vi kiến trúc

Prototype hiện tại là:

```text
Mobile Web Prototype
```

Prototype chạy hoàn toàn phía client.

Không có:

```text
Backend thật
Database
Authentication server
API server
Mock server riêng
Persistent server state
```

Prototype sử dụng:

```text
React State + Mock Data
```

để mô phỏng dữ liệu và hành vi.

---

## 3. Tech Stack

Sử dụng stack sau:

```text
React
Vite
TypeScript
React Router
CSS Modules
CSS
React local state
Mock Data
Vercel
```

### 3.1 Framework

```text
React
```

React được sử dụng để xây dựng:

- page;
- reusable component;
- interaction;
- UI state;
- client-side navigation.

---

### 3.2 Build Tool

```text
Vite
```

Vite được sử dụng để:

- khởi tạo project;
- chạy development server;
- build production bundle;
- deploy lên Vercel.

---

### 3.3 Language

```text
TypeScript
```

TypeScript được sử dụng cho toàn bộ source code chính.

Ưu tiên định nghĩa type rõ ràng cho:

- component props;
- mock data;
- domain model;
- route params;
- local state.

Hạn chế sử dụng:

```ts
any
```

---

### 3.4 Routing

```text
React Router
```

React Router được sử dụng để quản lý navigation phía client.

Các màn hình chính nên có route riêng khi phù hợp.

Ví dụ:

```text
/
/search
/search/results
/file/:id
/upload
/success
```

Route thực tế phải được xác định từ requirement.

Không tạo route chỉ để phản ánh một visual state nếu state đó không cần URL riêng.

---

### 3.5 Styling

Mặc định sử dụng:

```text
CSS Modules
```

cho style của component hoặc feature.

Ví dụ:

```text
Button/
├── Button.tsx
└── Button.module.css
```

Global CSS được sử dụng cho:

- reset;
- base typography;
- design tokens;
- global layout rule cần thiết.

Cấu trúc đề xuất:

```text
src/styles/
├── global.css
└── tokens.css
```

Không đưa toàn bộ style của app vào một file CSS global duy nhất.

Hạn chế inline style, trừ các giá trị thực sự dynamic.

---

## 4. Design Tokens

Design System từ Figma phải được ánh xạ sang CSS variables khi phù hợp.

Ví dụ:

```css
:root {
  --color-primary: #000000;
  --color-background: #ffffff;
  --color-text-primary: #111111;

  --space-4: 4px;
  --space-8: 8px;
  --space-12: 12px;
  --space-16: 16px;
  --space-24: 24px;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
}
```

Các nhóm token có thể bao gồm:

```text
Color
Typography
Spacing
Radius
Border
Shadow
Z-index
Component size
```

Không hard-code nhiều giá trị giống nhau nếu chúng thuộc cùng một design token.

---

## 5. Kiến trúc tổng thể

Luồng trách nhiệm:

```text
requirements/
      ↓
Business behavior

design/
+ Approved Figma
      ↓
Visual specification

prototype/architecture.md
      ↓
Technical implementation rules

src/
      ↓
Interactive prototype
```

Nguyên tắc:

- Requirement định nghĩa sản phẩm phải làm gì.
- Design/Figma định nghĩa sản phẩm trông như thế nào.
- Architecture định nghĩa prototype được tổ chức và triển khai kỹ thuật như thế nào.
- Code hiện thực hóa các nguồn trên.

Không sử dụng architecture để định nghĩa business flow.

Không sử dụng code để tự thay đổi requirement.

Không redesign Figma trong lúc implementation.

---

## 6. Project Structure

Cấu trúc đề xuất:

```text
project/
├── AGENTS.md
│
├── requirements/
│
├── design/
│   ├── AGENTS.md
│   └── design-system.md
│
├── prototype/
│   ├── AGENTS.md
│   └── architecture.md
│
├── src/
│   ├── app/
│   │   └── router.tsx
│   │
│   ├── components/
│   │
│   ├── features/
│   │
│   ├── layouts/
│   │
│   ├── mocks/
│   │
│   ├── styles/
│   │   ├── global.css
│   │   └── tokens.css
│   │
│   ├── types/
│   │
│   ├── utils/
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── index.html
```

Không bắt buộc phải tạo tất cả folder ngay từ đầu.

Chỉ tạo folder khi có trách nhiệm thực tế tương ứng.

---

## 7. Feature-Based Hybrid Architecture

Project sử dụng cấu trúc:

```text
Feature-based Hybrid
```

### 7.1 Shared Components

Các component dùng chung toàn app đặt tại:

```text
src/components/
```

Ví dụ:

```text
src/components/
├── Button/
├── Input/
├── Modal/
├── EmptyState/
└── BottomNavigation/
```

---

### 7.2 Feature Components

UI và logic chỉ thuộc một feature đặt tại:

```text
src/features/<feature-name>/
```

Ví dụ:

```text
src/features/search/
├── components/
├── pages/
├── types.ts
└── utils.ts
```

hoặc:

```text
src/features/upload/
├── components/
├── pages/
└── types.ts
```

Không bắt buộc gom toàn bộ màn hình của project vào một folder:

```text
screens/
```

Ưu tiên tổ chức theo feature để:

- dễ tìm file;
- dễ giao việc cho AI;
- giảm coupling;
- dễ thay đổi từng chức năng độc lập.

---

## 8. Pages

Page đại diện cho một màn hình hoặc route chính.

Page nên tập trung vào:

- composition;
- lấy dữ liệu mock cần thiết;
- quản lý state của màn hình;
- điều phối child component;
- navigation.

Không nên nhét quá nhiều UI chi tiết vào một page nếu có thể tách thành component rõ ràng.

Ví dụ:

```text
src/features/search/pages/
├── SearchPage.tsx
└── SearchResultsPage.tsx
```

---

## 9. Components

Tách component khi:

- được sử dụng lại;
- có trách nhiệm rõ ràng;
- đại diện cho Design System component;
- giúp page dễ đọc hơn;
- có state hoặc interaction riêng.

Ví dụ phù hợp:

```text
Button
SearchInput
FileCard
BottomNavigation
EmptyState
LoadingState
```

Không tách component chỉ để giảm số dòng code.

Tránh các component quá nhỏ và không có ý nghĩa semantic hoặc khả năng reuse.

---

## 10. Figma → Code Mapping

Approved Figma là visual source of truth.

Code phải bám theo:

- layout;
- typography;
- spacing;
- color;
- radius;
- icon;
- hierarchy;
- component;
- component state;
- navigation visual.

Nếu Figma có reusable component thì ưu tiên tạo reusable React component tương ứng.

Ví dụ:

```text
Figma:
Components/Button

React:
src/components/Button/
```

Variant trong Figma nên được ánh xạ sang props khi hợp lý.

Ví dụ:

```tsx
<Button
  variant="primary"
  size="medium"
  disabled={false}
/>
```

Không tự chỉnh layout hoặc visual chỉ vì một implementation khác dễ code hơn.

---

## 11. Routing Architecture

Route configuration đặt tại:

```text
src/app/router.tsx
```

Route phải phản ánh requirement đã được định nghĩa.

Ví dụ cấu trúc:

```text
/
├── search
│   └── results
├── file/:id
├── upload
└── success
```

Không duplicate navigation logic ở nhiều nơi.

Navigation phải dùng React Router thay vì:

```text
window.location.href
```

trừ trường hợp điều hướng ra ngoài ứng dụng.

---

## 12. State Management

Mặc định sử dụng React local state.

Ưu tiên:

```text
useState
useReducer
Context
```

khi cần.

Không sử dụng:

```text
Redux
Zustand
MobX
```

trừ khi architecture được thay đổi chính thức.

State nên nằm gần nơi sử dụng nhất.

Không đưa state lên global nếu không có lý do rõ ràng.

---

## 13. Persistence

Prototype hiện tại:

```text
không persistence
```

Khi refresh browser:

```text
state được reset
```

Không sử dụng `localStorage`, `sessionStorage` hoặc IndexedDB theo mặc định.

Chỉ thêm persistence khi một requirement cụ thể cần mô phỏng hành vi đó.

---

## 14. Mock Data

Prototype sử dụng mock data hoàn toàn phía client.

Mock data đặt tại:

```text
src/mocks/
```

Ví dụ:

```text
src/mocks/files.ts
```

Mock data phải được import từ nguồn chung.

Không duplicate cùng một dataset trong nhiều component.

---

## 15. Mock Behavior

Các interaction có thể được mô phỏng bằng:

```text
React State + Mock Data
```

Ví dụ:

```text
Search
Loading
Success
Error
Empty State
Upload simulation
Modal
Bottom Sheet
Selection
Navigation
```

Không cần:

```text
API server
JSON Server
Firebase
Supabase
Backend service
```

nếu requirement chỉ cần prototype interaction.

---

## 16. Type Organization

Type dùng chung có thể đặt tại:

```text
src/types/
```

Type chỉ thuộc một feature nên đặt gần feature đó.

Ví dụ:

```text
src/features/search/types.ts
```

Ưu tiên colocate type với feature nếu không có nhu cầu dùng global.

---

## 17. Utility Functions

Utility dùng chung đặt tại:

```text
src/utils/
```

Không tạo utility abstraction cho logic chỉ dùng một lần.

Logic riêng feature có thể đặt tại:

```text
src/features/<feature>/utils.ts
```

---

## 18. Layout

Layout component dùng cho cấu trúc dùng chung giữa nhiều page.

Ví dụ:

```text
src/layouts/
├── AppLayout.tsx
└── MobileLayout.tsx
```

Layout có thể quản lý:

- page container;
- app header;
- bottom navigation;
- shared shell.

Page container phải dùng toàn bộ chiều rộng mobile viewport. Khi viewport lớn hơn `480px`, page dùng mobile canvas `max-width: 480px` và căn giữa. Không lấy `360px` của frame Figma làm fixed width.

Page dùng `min-height: 100dvh` với fallback phù hợp. Không lấy `800px` của frame Figma làm runtime height. Nội dung dài hơn viewport cuộn tự nhiên ở cấp page.

Layout không render system status bar giả lập. Các thông tin như giờ, ngày, cột sóng, Wi-Fi và pin thuộc browser/operating system chrome.

Không đưa business logic vào layout.

---

## 19. Mobile Web Target

Target chính:

```text
Mobile Web
```

UI phải ưu tiên trải nghiệm mobile.

Lưu ý:

- touch target hợp lý;
- không tạo horizontal overflow ngoài chủ đích;
- layout dùng `width: 100%` trong mobile viewport;
- viewport lớn hơn dùng mobile canvas tối đa `480px` và căn giữa;
- page dùng `min-height: 100dvh`, không dùng fixed height;
- không hard-code page shell ở `360 × 800` hoặc kích thước Figma reference khác;
- không render system status bar giả lập;
- không phụ thuộc hover để hoàn thành action;
- bottom navigation và fixed element phải xử lý safe spacing hợp lý.

Không tự tạo desktop version nếu requirement chưa yêu cầu.

---

## 20. Responsive Behavior

Responsive chỉ implement theo requirement hoặc Figma.

Không tự thêm nhiều breakpoint không cần thiết.

Nếu chưa có requirement rõ ràng:

- ưu tiên mobile;
- sử dụng fluid width trong mobile viewport;
- dùng `max-width: 480px` cho screen/page shell trên viewport lớn hơn và căn giữa;
- dùng dynamic viewport làm min-height;
- cho component và grid bên trong co giãn theo available width;
- không redesign layout.

---

## 21. Semantic HTML

Ưu tiên semantic element:

```text
main
section
nav
header
button
input
label
form
ul
li
```

Không dùng:

```text
div
```

cho mọi interactive control.

Button phải dùng:

```html
<button>
```

khi hành vi là action.

Link/navigation nên dùng component phù hợp của React Router.

---

## 22. Accessibility cơ bản

Prototype không cần đạt full production accessibility compliance, nhưng phải giữ các rule cơ bản:

- input có label hoặc accessible name;
- button có text hoặc aria-label rõ ràng;
- interactive element có keyboard behavior tự nhiên;
- không dùng màu sắc là tín hiệu duy nhất nếu Figma đã có state khác;
- image quan trọng có alt text phù hợp.

---

## 23. Assets

Asset có thể đặt tại:

```text
src/assets/
```

hoặc:

```text
public/
```

theo nhu cầu.

Ưu tiên:

```text
src/assets/
```

cho asset được import trực tiếp trong component.

Dùng:

```text
public/
```

cho static asset cần URL cố định.

Không copy cùng một asset nhiều lần dưới nhiều tên khác nhau.

---

## 24. Dependency Rule

Chỉ thêm dependency khi:

- thực sự cần;
- giải quyết một vấn đề cụ thể;
- phù hợp với prototype;
- không tạo complexity không cần thiết.

Không tự thêm:

```text
UI framework
State library
Form library
Data fetching library
Backend SDK
```

nếu React + TypeScript hiện tại đã đủ.

---

## 25. Không Over-Engineer

Prototype ưu tiên đơn giản.

Không tự tạo:

```text
Repository layer
Service abstraction phức tạp
Dependency Injection
Domain architecture phức tạp
API layer
Complex state machine
Backend architecture
Database abstraction
Micro-frontend
```

nếu requirement không cần.

Nguyên tắc:

```text
Simple > Abstract
Readable > Clever
Prototype-ready > Production-overengineered
```

---

## 26. Naming Convention

Ưu tiên naming rõ ràng.

### React Component

```text
PascalCase
```

Ví dụ:

```text
SearchPage.tsx
FileCard.tsx
BottomNavigation.tsx
```

### Function / Variable

```text
camelCase
```

Ví dụ:

```text
handleSearch
selectedFile
isLoading
```

### CSS Module

```text
ComponentName.module.css
```

Ví dụ:

```text
FileCard.module.css
```

---

## 27. Business Rule Placement

Business rule không được định nghĩa mới trong architecture.

Business rule phải đến từ:

```text
requirements/
```

Code chỉ implement các rule đó.

Nếu phát hiện requirement thiếu hoặc mâu thuẫn:

- không tự phát minh rule;
- đánh dấu vấn đề;
- cập nhật requirement trước khi coi logic mới là source of truth.

---

## 28. Screen Specification Placement

Thông tin như:

- màn hình có component gì;
- text cụ thể;
- hành động button;
- state của từng màn hình;
- điều kiện chuyển màn hình;

không thuộc `architecture.md`.

Các nội dung này nên nằm trong:

```text
requirements/<feature>/screens.md
requirements/<feature>/flow.md
requirements/<feature>/rules.md
```

---

## 29. Design Specification Placement

Thông tin như:

- màu;
- typography;
- spacing;
- component style;
- radius;
- icon;
- visual hierarchy;

không thuộc architecture.

Các nội dung này thuộc:

```text
design/
```

hoặc Approved Figma.

---

## 30. Architecture Change Rule

Chỉ cập nhật architecture khi có thay đổi về:

- framework;
- project structure;
- routing strategy;
- state management;
- styling strategy;
- data strategy;
- deployment;
- dependency architecture.

Không sửa architecture chỉ vì thêm một màn hình hoặc một flow mới.

---

## 31. Build

Lệnh development dự kiến:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Preview build:

```bash
npm run preview
```

Trước khi coi implementation hoàn thành, project phải:

```text
build thành công
không có TypeScript error
không có lỗi import
không có route bị vỡ
```

---

## 32. Deployment

Platform:

```text
Vercel
```

Prototype phải giữ cấu trúc phù hợp với Vite static deployment.

Nếu sử dụng React Router client-side routing, deployment cần hỗ trợ fallback về:

```text
index.html
```

để refresh trực tiếp route không trả về 404.

Không thêm server dependency nếu không có thay đổi architecture chính thức.

---

## 33. Source of Truth Priority

Khi có xung đột:

### Business behavior

```text
requirements/ > Figma > code
```

### Visual

```text
Approved Figma / design/ > code
```

### Technical architecture

```text
architecture.md > implementation
```

Nếu architecture không còn đáp ứng requirement mới, cập nhật architecture trước khi thay đổi implementation theo hướng mới.

---

## 34. Quy tắc đồng bộ

Khi requirement thay đổi:

```text
Requirement
    ↓
Flow / Screen Spec
    ↓
Figma
    ↓
Code
```

Khi visual thay đổi nhưng nghiệp vụ không đổi:

```text
Figma / Design System
    ↓
Code
```

Khi technical architecture thay đổi:

```text
architecture.md
    ↓
Code
```

Không dùng code làm source of truth ngược lại cho requirement hoặc design.

---

## 35. Checklist trước khi hoàn thành một feature

### Requirement

- flow đúng requirement;
- không thêm business rule ngoài requirement;
- navigation đúng.

### Design

- UI bám Approved Figma;
- spacing đúng;
- typography đúng;
- component đúng;
- state đúng;
- token được reuse khi phù hợp.

### Code

- structure đúng architecture;
- component được tách hợp lý;
- không duplicate mock data;
- không thêm dependency không cần thiết;
- local state đủ đơn giản;
- TypeScript rõ ràng.

### Runtime

- build thành công;
- route hoạt động;
- interaction chính hoạt động;
- loading / empty / error state hoạt động nếu requirement có;
- không có console error nghiêm trọng.

---

## 36. Nguyên tắc cuối cùng

Kiến trúc prototype phải tối ưu cho:

```text
dễ hiểu
dễ sửa
dễ giao cho AI
dễ map từ Figma sang code
dễ demo
dễ deploy
```

Ưu tiên thứ tự:

```text
Requirement đúng
    ↓
Design đúng
    ↓
Architecture đơn giản
    ↓
Code bám design
    ↓
Prototype chạy được
```

Không hy sinh tính đúng đắn của requirement hoặc design để đổi lấy abstraction kỹ thuật không cần thiết.
