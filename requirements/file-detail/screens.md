# File Detail — Screens

## Status

TEMPORARY_PLACEHOLDER

Hiện chưa có Figma cho File Detail.

Không được tự thiết kế thêm UI ngoài specification bên dưới.

## File Detail

Route:

/files/:id

Layout:

- màn hình trắng / background mặc định;
- không hiển thị system status bar giả lập;
- mobile viewport dùng toàn bộ chiều rộng; viewport lớn hơn dùng mobile canvas tối đa `480px` và căn giữa;
- dùng `min-height: 100dvh` hoặc fallback tương đương, không hard-code chiều cao `800px`;
- có nút Back ở phía trên;
- giữa màn hình hiển thị text:

"Thông tin chi tiết"

## UI Structure

File Detail
├── Back Button
└── Center Content
└── "Thông tin chi tiết"

## Out of Scope

Không hiển thị:

- file name;
- file metadata;
- preview;
- Edit;
- Delete;
- More Options;
- action khác.

Screen này chỉ dùng để chứng minh navigation prototype hoạt động.
