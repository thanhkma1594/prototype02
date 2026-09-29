# Propertype File Manager Prototype

Mobile web prototype mô phỏng luồng quản lý và tìm kiếm tệp theo requirement và thiết kế Figma đã được duyệt.

Prototype phục vụ review UI/UX, demo interaction và kiểm thử flow. Ứng dụng chạy hoàn toàn phía client, sử dụng mock data và không kết nối backend hay database.

## Tính năng hiện có

- Hiển thị Recent Files và Folders.
- Tìm kiếm realtime theo tên tệp, không phân biệt chữ hoa/chữ thường.
- Lọc một loại tệp tại một thời điểm: XLSX, Word, PowerPoint, Text, PDF hoặc Folder.
- Kết hợp keyword và loại tệp theo điều kiện AND.
- Hiển thị trạng thái không có kết quả.
- Mở màn hình chi tiết tệp.
- Giữ keyword, bộ lọc, kết quả và vị trí cuộn khi quay lại danh sách.
- Hiển thị trang 404 cho route không hợp lệ.
- Mọi page full width trên mobile và dùng mobile canvas căn giữa trên viewport lớn.

## Ngoài phạm vi

Các thành phần sau chỉ mang tính trình bày hoặc chưa được triển khai:

- Add/upload file;
- menu More Options;
- thay đổi kiểu hiển thị danh sách;
- See all recents;
- mở hoặc điều hướng folder;
- Category và Date modified filter;
- chỉnh sửa hoặc xóa tệp;
- Bottom Tab và bàn phím được minh họa trong Figma;
- system status bar giả lập như giờ, cột sóng, Wi-Fi và pin;
- backend, API, authentication và persistent storage.

## Công nghệ

- React
- TypeScript
- Vite
- React Router
- CSS Modules
- React local state và Context
- Mock data
- Vercel

## Yêu cầu môi trường

- Node.js 18 trở lên
- npm 9 trở lên

## Cài đặt và chạy local

```bash
npm install
npm run dev
```

Sau đó truy cập địa chỉ Vite hiển thị trong terminal, mặc định:

```text
http://127.0.0.1:5173/files
```

## Build production

```bash
npm run build
```

Kết quả build được tạo trong thư mục `dist/`.

Để kiểm tra production bundle tại local:

```bash
npm run preview
```

## Routes

| Route | Mô tả |
| --- | --- |
| `/files` | Danh sách, tìm kiếm và lọc tệp |
| `/files/:id` | Placeholder thông tin chi tiết tệp |
| Route khác | Trang 404 |

Prototype không có route `/search`; tìm kiếm là state của màn hình `/files`.

## Responsive và system UI

- Figma `360 × 800` chỉ là viewport tham chiếu.
- Screen/page không khóa width `360px` hoặc height `800px`.
- Mobile viewport sử dụng toàn bộ chiều rộng thiết bị.
- Viewport lớn hơn dùng mobile canvas tối đa `480px` và căn giữa.
- Page dùng dynamic viewport làm min-height; nội dung dài cuộn tự nhiên.
- Prototype không tự vẽ status bar; system UI do hệ điều hành hoặc trình duyệt quản lý.

## Cấu trúc chính

```text
src/
├── app/                 # Router configuration
├── components/          # Reusable UI components
├── features/
│   ├── file-list/       # Danh sách, kết quả và folder cards
│   ├── file-detail/     # Màn hình chi tiết
│   ├── search/          # Type filter bottom sheet
│   └── not-found/       # Trang 404
├── mocks/               # Mock file và folder data
├── state/               # In-memory view state
├── styles/              # Global styles và design tokens
└── types/               # Domain types

public/assets/           # SVG được lấy từ Figma
requirements/            # Nguồn sự thật nghiệp vụ
design/                  # Nguồn sự thật visual
prototype/               # Kiến trúc và implementation spec
```

## Quản lý state

Keyword, loại tệp được chọn và vị trí cuộn được giữ trong memory để khôi phục khi đi từ danh sách sang chi tiết rồi quay lại.

State sẽ được reset khi refresh trang. Prototype không sử dụng `localStorage`, `sessionStorage` hoặc server persistence.

## Mock data

Mock data nằm tại:

```text
src/mocks/files.ts
```

Mỗi file có `id`, `name`, `type` và chuỗi trình bày `detailsText`. Dữ liệu đủ để kiểm tra từng loại tệp, tìm kiếm, kết hợp filter và trạng thái Folder.

## Deploy Vercel

Project có `vercel.json` cấu hình SPA fallback về `index.html`, vì vậy có thể deploy trực tiếp bằng Vercel với:

- Build command: `npm run build`
- Output directory: `dist`

## Source of truth

Khi chỉnh sửa prototype, tuân thủ thứ tự:

- Business behavior: Requirement → Figma → Code
- Visual: Design System/Figma → Code
- Technical architecture: Architecture → Implementation

Đọc `AGENTS.md` ở root và `prototype/AGENTS.md` trước khi thay đổi source code.
