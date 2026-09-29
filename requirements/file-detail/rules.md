# File Detail — Rules

## FD-RULE-001

File Detail sử dụng route:

/files/:id

## FD-RULE-002

Toàn bộ File Detail hiện là temporary placeholder.

Codex không được tự bổ sung UI hoặc nghiệp vụ chưa được định nghĩa.

## FD-RULE-003

Nút Back phải quay về màn hình/state đã mở File Detail.

File List
→ File Detail
→ Back
→ File List

Search Results
→ File Detail
→ Back
→ Search Results

## FD-RULE-004

Khi quay về Search Results phải restore state theo navigation.md:

- search keyword;
- active filter;
- search results;
- scroll position.

## FD-RULE-005

Prototype hiện tại không yêu cầu direct URL access vào File Detail.

## FD-RULE-006

File Detail hiện không có:

- Edit;
- Delete;
- file preview;
- metadata;
- additional actions.
