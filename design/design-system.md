# Design System — File Manager

## 1. Phạm vi và nguồn sự thật

Tài liệu này được trích xuất từ file Figma hiện tại của project:

- Figma: [temply-draft](https://www.figma.com/design/tgIi3EOslIJv5ZxavmhXMO/temply-draft?node-id=3-10)
- Page: `UI Desgin` (`3:10`)
- Design System section: `Brand - System` (`14084:11662`)
- Product screens section: `3. MY FILE` (`14084:11660`)
- Ngày audit: `2026-09-29`
- Target platform theo requirement: Mobile Web
- Viewport đang dùng trên Figma: `360 × 800`

Figma là nguồn sự thật cho visual. Requirement vẫn là nguồn sự thật cho business behavior.

### Phân loại bằng chứng

- **CONFIRMED**: được định nghĩa trực tiếp bằng Figma Variable, Style, Component hoặc được người dùng xác nhận.
- **OBSERVED**: xuất hiện trên component/screen nhưng chưa được định nghĩa thành token hoặc rule chính thức.
- **UNRESOLVED**: Figma chưa thể hiện đủ intent để xác định rule sử dụng.

### Quyết định đã xác nhận

1. `Brand - System > File` (`14193:14497`) là component chuẩn.
2. `Brand - System > Android-status-bar` không thuộc Design System cần document. Tài liệu này không dùng component đó làm nguồn chuẩn và không yêu cầu xoá layer khỏi Figma.
3. `Search bar / Done` và `Search bar / finish` là hai state riêng biệt có chủ đích.

## 2. Inventory

### Design System

| Hạng mục | Số lượng | Ghi chú |
| --- | ---: | --- |
| Variable collection | 1 | `Collection 1` |
| Mode | 1 | `Mode 1` |
| Variables | 33 | 10 spacing, 23 color |
| Paint styles | 2 | `Primary`, `Secondary` |
| Text styles | 19 | Heading, Subtitle, Medium, Body |
| Effect styles | 1 | `box` |
| Grid styles | 2 | `5c`, `4c` |
| Canonical component sets | 3 | `Tab`, `Search bar`, `File` |

### Screen UI

| Hạng mục | Số lượng |
| --- | ---: |
| Màn hình chính | 12 |
| Overlay 360 × 800 | 2 |
| Component instances trong `3. MY FILE` | 232 |

Các nhóm màn hình đang tồn tại:

- `Search: No Files Found`
- `Search: Files Found`
- `My File / Internal storage`
- `My File / Internal storage / Download`

## 3. Variables

### Collection

**CONFIRMED**

- Collection: `Collection 1`
- Mode: `Mode 1`
- Không có alias giữa các variables.
- Tất cả variables đang có scope `ALL_SCOPES`.
- Tất cả variables chưa có description và chưa có code syntax trong Figma.

Tên CSS trong tài liệu được chuyển cơ học từ hierarchy Figma: thay `/` và khoảng trắng bằng `-`, sau đó chuyển thành chữ thường. Các lỗi chính tả trong tên Figma được giữ nguyên để mapping không làm thay đổi Source of Truth.

### Spacing

**CONFIRMED**

| Figma variable | Giá trị | CSS variable | Số node dùng trên screen |
| --- | ---: | --- | ---: |
| `Spacing/XS` | 4 px | `--spacing-xs` | 86 |
| `Spacing/S` | 8 px | `--spacing-s` | 92 |
| `Spacing/M` | 12 px | `--spacing-m` | 57 |
| `Spacing/L` | 16 px | `--spacing-l` | 136 |
| `Spacing/XL` | 20 px | `--spacing-xl` | 14 |
| `Spacing/XXL` | 24 px | `--spacing-xxl` | 12 |
| `Spacing/3XL` | 32 px | `--spacing-3xl` | 0 |
| `Spacing/4XL` | 40 px | `--spacing-4xl` | 0 |
| `Spacing/5XL` | 60 px | `--spacing-5xl` | 0 |
| `Spacing/6XL` | 80 px | `--spacing-6xl` | 0 |

### Color

**CONFIRMED**

| Figma variable | Giá trị | CSS variable | Số node dùng trên screen |
| --- | --- | --- | ---: |
| `Color/Primary/1` | `#2A41E8` | `--color-primary-1` | 0 |
| `Color/Primary/2` | `#3854EB` | `--color-primary-2` | 5 |
| `Color/Primary/3` | `#4063F5` | `--color-primary-3` | 0 |
| `Color/Primary/4` | `#4583FF` | `--color-primary-4` | 18 |
| `Color/Primary/5` | `#5C8AFA` | `--color-primary-5` | 0 |
| `Color/Primary/6` | `#F0F8FF` | `--color-primary-6` | 2 |
| `Color/Secondary/1` | `#FE770E` | `--color-secondary-1` | 0 |
| `Color/Secondary/2` | `#FE8A1B` | `--color-secondary-2` | 0 |
| `Color/Secondary/3` | `#FF9C23` | `--color-secondary-3` | 0 |
| `Color/Secondary/4` | `#FEAC29` | `--color-secondary-4` | 0 |
| `Color/Secondary/5` | `#FEC333` | `--color-secondary-5` | 0 |
| `Color/Neutral/Black` | `#22242A` | `--color-neutral-black` | 155 |
| `Color/Neutral/Dark grey` | `#555B6D` | `--color-neutral-dark-grey` | 23 |
| `Color/Neutral/Grey` | `#909BA7` | `--color-neutral-grey` | 164 |
| `Color/Neutral/Light grey` | `#E6E7E8` | `--color-neutral-light-grey` | 15 |
| `Color/Neutral/While grey` | `#F1F2F3` | `--color-neutral-while-grey` | 38 |
| `Color/Neutral/While bas` | `#F7F8F7` | `--color-neutral-while-bas` | 32 |
| `Color/Neutral/While` | `#FFFFFF` | `--color-neutral-while` | 127 |
| `Color/Background/Backdrop` | `#00000099` | `--color-background-backdrop` | 4 |
| `Color/Sematic/Infor` | `#2B78F6` | `--color-sematic-infor` | 0 |
| `Color/Sematic/Success` | `#38B234` | `--color-sematic-success` | 0 |
| `Color/Sematic/Warning` | `#FF9C23` | `--color-sematic-warning` | 0 |
| `Color/Sematic/Error` | `#F53232` | `--color-sematic-error` | 0 |

### CSS mapping

```css
:root {
  --spacing-xs: 4px;
  --spacing-s: 8px;
  --spacing-m: 12px;
  --spacing-l: 16px;
  --spacing-xl: 20px;
  --spacing-xxl: 24px;
  --spacing-3xl: 32px;
  --spacing-4xl: 40px;
  --spacing-5xl: 60px;
  --spacing-6xl: 80px;

  --color-primary-1: #2a41e8;
  --color-primary-2: #3854eb;
  --color-primary-3: #4063f5;
  --color-primary-4: #4583ff;
  --color-primary-5: #5c8afa;
  --color-primary-6: #f0f8ff;

  --color-secondary-1: #fe770e;
  --color-secondary-2: #fe8a1b;
  --color-secondary-3: #ff9c23;
  --color-secondary-4: #feac29;
  --color-secondary-5: #fec333;

  --color-neutral-black: #22242a;
  --color-neutral-dark-grey: #555b6d;
  --color-neutral-grey: #909ba7;
  --color-neutral-light-grey: #e6e7e8;
  --color-neutral-while-grey: #f1f2f3;
  --color-neutral-while-bas: #f7f8f7;
  --color-neutral-while: #ffffff;

  --color-background-backdrop: rgb(0 0 0 / 60%);

  --color-sematic-infor: #2b78f6;
  --color-sematic-success: #38b234;
  --color-sematic-warning: #ff9c23;
  --color-sematic-error: #f53232;
}
```

## 4. Paint styles

**CONFIRMED**

| Style | Giá trị | Sử dụng trên product screen |
| --- | --- | ---: |
| `Primary` | Linear gradient `#283EE7 → #6694F8` | 0 |
| `Secondary` | Linear gradient `#FE6F10 → #FEC534` | 0 |

Figma chưa cung cấp angle dưới dạng rule có thể mapping chắc chắn sang CSS trong dữ liệu audit. Vì vậy không tạo CSS gradient hoàn chỉnh.

## 5. Typography

### Font family

**CONFIRMED**

- Design System typography dùng `SVN-Poppins`.
- Các style names đang dùng: `Regular`, `Medium`, `SemiBold`.
- Figma không định nghĩa numeric CSS `font-weight` trên Text Style; mapping số weight là `Chưa xác định`.
- Letter spacing của tất cả local Text Styles là `0%`.

### Text styles

| Text style | Font style | Size / Line height | Text case | Số node dùng trên screen |
| --- | --- | --- | --- | ---: |
| `Heading/H1` | SemiBold | 40 / 60 px | Original | 0 |
| `Heading/H2` | SemiBold | 36 / 56 px | Original | 0 |
| `Heading/H3` | SemiBold | 28 / 44 px | Original | 0 |
| `Heading/H4` | SemiBold | 24 / 28 px | Original | 0 |
| `Subtitle/S1` | SemiBold | 20 / 30 px | Title | 15 |
| `Subtitle/S2` | SemiBold | 18 / 28 px | Title | 0 |
| `Subtitle/S3` | SemiBold | 16 / 24 px | Title | 4 |
| `Subtitle/S4` | SemiBold | 14 / 20 px | Original | 0 |
| `Subtitle/S5` | SemiBold | 12 / 16 px | Original | 6 |
| `Medium/B1` | Medium | 18 / 28 px | Original | 2 |
| `Medium/B2` | Medium | 16 / 24 px | Original | 5 |
| `Medium/B3` | Medium | 14 / 20 px | Original | 24 |
| `Medium/B4` | Medium | 12 / 18 px | Original | 1 |
| `Medium/Caption` | Medium | 10 / 12 px | Title | 0 |
| `Body/B1` | Regular | 18 / 28 px | Original | 0 |
| `Body/B2` | Regular | 16 / 24 px | Original | 3 |
| `Body/B3` | Regular | 14 / 20 px | Original | 13 |
| `Body/B4` | Regular | 12 / 18 px | Original | 83 |
| `Body/Caption` | Regular | 10 / 12 px | Title | 62 |

### Mapping sang code

Text Styles là composite styles, không phải Figma Variables. Code nên giữ nguyên tên hierarchy khi tạo typography utilities, ví dụ:

```text
Heading/H1  → .type-heading-h1
Subtitle/S3 → .type-subtitle-s3
Medium/B3   → .type-medium-b3
Body/B4     → .type-body-b4
```

Không tự suy ra numeric `font-weight` cho `Regular`, `Medium` hoặc `SemiBold` cho tới khi cấu hình `@font-face` của prototype xác nhận mapping.

## 6. Effects

### Effect style `box`

**CONFIRMED**

```text
type: DROP_SHADOW
color: #14273826
offset: 1px 1px
blur: 4px
spread: 0
```

CSS mapping:

```css
:root {
  --effect-box: 1px 1px 4px 0 rgb(20 39 56 / 15%);
}
```

Effect style này hiện không được sử dụng trên product screens.

## 7. Grid

**CONFIRMED**

| Grid style | Cấu hình | Sử dụng trên product screen |
| --- | --- | ---: |
| `4c` | 4 stretch columns, gutter 8 px, offset 16 px | 0 |
| `5c` | 5 stretch columns, gutter 8 px, offset 16 px | 0 |

Grid preview color trong Figma là `#FF00001A`. Đây là màu hiển thị grid trong editor, không phải product color token.

## 8. Components

### 8.1 Tab

**CONFIRMED**

- Figma node: [`Tab`](https://www.figma.com/design/tgIi3EOslIJv5ZxavmhXMO/temply-draft?node-id=14063-10808)
- Type: Component Set
- Size của variant: `360 × 80`
- Property: `Property 1`
- Variant: `3`
- Product screen instances: 6
- Component description: chưa có.

Token/style bindings quan sát được:

- `Color/Neutral/Grey`: icon strokes.
- `Color/Neutral/While`: component và active icon fills.
- `Subtitle/S5`: label `Library`.

Các màn hình đang sử dụng:

- `Search: No Files Found / Search 1`
- `Search: No Files Found / Search 2`
- `Search: No Files Found / Search/Filter`
- `Search: Files Found / Search 2`
- `Search: Files Found / Search 1`
- `Search: Files Found / Search 4`

**UNRESOLVED:** Figma chỉ có một variant tên `3` và không có description, nên không xác định được rule dùng Tab trên những màn hình khác.

### 8.2 Search bar

**CONFIRMED**

- Figma node: [`Search bar`](https://www.figma.com/design/tgIi3EOslIJv5ZxavmhXMO/temply-draft?node-id=442-4819)
- Type: Component Set
- Size: `328 × 48`
- Property: `Property 1`
- Product screen instances: 10
- Component description: chưa có.

| Variant | Node | Số instance | Màn hình |
| --- | --- | ---: | --- |
| `Normal` | `442:4818` | 3 | No Files/Search 1; Files/Search 1; Files/Search 3 |
| `Typing` | `442:4817` | 2 | No Files/Search 2; Files/Search 2 |
| `Done` | `618:5082` | 1 | Files/Search 4 |
| `finish` | `17034:2078` | 4 | No Files/Search 3; No Files/Search/Filter; No Files/Search 4; Files/Search 5 |

`Done` và `finish` được xác nhận là hai state riêng biệt có chủ đích.

Token/style bindings:

- Container fill: `Color/Neutral/While bas`.
- Container stroke: `Color/Neutral/Light grey`.
- Container corner radius: `Spacing/XXL` = 24 px.
- Input text style: `Medium/B3`.
- Primary input text: `Color/Neutral/Black`.
- Placeholder/Done text: `Color/Neutral/Grey` hoặc `Color/Neutral/Light grey`, tùy variant.
- Navigation/search icon strokes: `Color/Neutral/Dark grey`.
- Cursor: `Color/Primary/2`.
- Typing clear icon: `Color/Neutral/Grey`.

**UNRESOLVED:** Figma và component description chưa nêu trigger/interaction rule phân biệt `Done` với `finish`. Prototype phải bám state được chỉ định trên từng screen; không tự hoán đổi hai state.

### 8.3 File

**CONFIRMED — canonical theo quyết định người dùng**

- Figma node: [`File`](https://www.figma.com/design/tgIi3EOslIJv5ZxavmhXMO/temply-draft?node-id=14193-14497)
- Type: Component Set
- Size mỗi variant: `32 × 32`
- Property: `Property 1`
- Variants: `XLS`, `PDF`, `DOCX`, `TXT`, `PPT`
- Component description: chưa có.
- Không có local Variable hoặc Style binding trong component.

Mapping code giữ nguyên variant names:

```ts
type FileIconType = "XLS" | "PDF" | "DOCX" | "TXT" | "PPT";
```

**CONFLICT:** product screens hiện chưa dùng canonical component này. Có 60 instances đang trỏ tới component set cũ `File` (`12010:9721`). Các instance xuất hiện tại:

- `Search: No Files Found / Search 1`: 6
- `Search: No Files Found / Overlay`: 5
- `Search: Files Found / Search 2`: 3
- `Search: Files Found / Search 1`: 6
- `Search: Files Found / Search 3`: 8
- `Search: Files Found / Search 4`: 8
- `Search: Files Found / Overlay`: 5
- `Search: Files Found / Search 5`: 4
- `My File / Internal storage / Download`: 15

Prototype phải sử dụng visual của canonical `Brand - System > File`, không lấy hình học variant `PPT` từ component cũ.

## 9. Library assets đang được sử dụng

**OBSERVED**

| Asset source | Local/Remote | Số instance | Ghi chú |
| --- | --- | ---: | --- |
| Legacy `File` (`12010:9721`) | Local, ngoài canvas | 60 | Cần migrate sang canonical `File` |
| `ic_expand` | Remote | 50 | Dùng trong file rows |
| `arrow-down` | Local, ngoài canvas | 30 | Dùng trong filter controls |
| `Plus` | Remote | 10 | Header action |
| `home` | Remote | 6 | Nested trong `Tab` |
| `add-square` | Local, ngoài canvas | 6 | Nested trong `Tab` |
| `folder-2` | Local, ngoài canvas | 6 | Nested trong `Tab` |
| `setting` | Local, ngoài canvas | 6 | Nested trong `Tab` |
| `Folder` | Remote | 5 | Folder list/overlay |
| `Android keyboard` | Local, ngoài canvas | 4 | Mock keyboard trên Search screens |
| `Action button` | Remote | 4 | Nested trong Android keyboard |
| `arrow-right` | Remote | 3 | Folder navigation |
| `Status bar - Android` | Remote | 2 | Chỉ dùng trên hai Folder screens |
| `Icon/Back` | Remote | 2 | Folder app bar |

## 10. Patterns bị loại khỏi Design System

### Android status bar

Theo quyết định người dùng, `Brand - System > Android-status-bar` không phải component chuẩn và không được đưa vào component catalog.

Screen hiện vẫn có hai implementation quan sát được:

- 10 Search screens dùng frame trực tiếp `battery indicator`, kích thước `360 × 34`.
- 2 Folder screens dùng remote component `Status bar - Android` (`10010:18153`).

Hai implementation này được coi là screen/platform presentation, không có mapping sang reusable project component trong tài liệu hiện tại.

## 11. Design System Gaps

### Variable metadata

**OBSERVED**

- Tất cả 33 variables dùng scope `ALL_SCOPES`.
- Variables chưa có description.
- Variables chưa có Figma code syntax cho Web.
- Collection và mode vẫn dùng tên mặc định `Collection 1` và `Mode 1`.
- Các tên `While`, `While bas`, `Sematic`, `Infor` được giữ nguyên theo Figma nhưng có khả năng là lỗi chính tả.

### Component metadata

**OBSERVED**

- `Tab`, `Search bar`, `File` chưa có component description.
- Variant property đều có tên `Property 1`.
- `Search bar` chưa expose text content thành TEXT component property.
- `File` không có token/style binding.

### Radius

**OBSERVED**

Không có Radius Variables. Các giá trị hard-code lặp lại trên screen gồm:

- `3.1688 px`: 126 nodes trong folder/empty-state illustration.
- `100 px`: 32 nodes.
- `24 px`: 20 nodes.
- `8.4501 px`: 18 nodes.
- `12 px`: 12 nodes.
- `16 px`: 12 nodes.

Không tự chuyển các giá trị này thành token.

### Spacing hard-code

**OBSERVED**

Mặc dù spacing variables đã được dùng rộng rãi, screen vẫn còn các giá trị trực tiếp:

- `itemSpacing = 10`: 106 nodes.
- `paddingTop/Bottom = 6`: 62 nodes mỗi property.
- `itemSpacing = 2`: 62 nodes.
- `paddingRight = 14`: 30 nodes.
- `paddingTop/Bottom = 10`: 24 nodes mỗi property.
- `paddingLeft/Right = 10`: 20 nodes mỗi property.
- `itemSpacing = 4.7532`: 18 nodes trong illustration.

Không tự ánh xạ các giá trị này sang spacing token hiện có nếu Figma chưa bind.

### Hard-coded colors và typography

**OBSERVED**

- `#D9D9D9`: 126 rectangle layers trong folder/empty-state illustration.
- `#DADADA`: 30 Wi-Fi vector layers trong direct status bars.
- `#F6F6F6`: 10 `Premium` layers.
- 10 `Time` layers trong direct status bars dùng `Poppins SemiBold`, 13/22 px, không dùng local Text Style.

Layer `Search for 7234592` không phải gap: text này chủ đích kết hợp `Body/B3` cho `Search for ` và `Subtitle/S4` cho query `7234592`.

### Hard-coded effects

**OBSERVED**

Folder/empty-state illustration dùng các direct shadows khác với effect style `box`, gồm:

- `#00000040`, offset `0 0.9586`, blur `3.8345`: 10 nodes.
- `#4C59B34D`, offset `0 -1`, blur `4`: 10 nodes.
- `#00000040`, offset `0 0`, blur `3.8345`: 6 nodes.
- `#2E356B4D`, offset `0 -1`, blur `2`: 2 nodes.

Các shadow này chưa được định nghĩa thành Effect Styles. Không tự chuyển thành effect token.

### Android keyboard component error

**OBSERVED**

Component set `Android keyboard` (`647:3013`) đang có hai variants trùng cùng một tổ hợp:

```text
InputMethod=NumberDecimal, Theme=Light, Action button=Done
```

Các node bị trùng:

- `647:3504`
- `647:6801`

Figma báo `Component set has existing errors`, nên Plugin API không đọc được property definitions/variant properties của component set này. Android keyboard không được đưa vào canonical component catalog.

## 12. Design System Conflicts

### Canonical File vs screen File

| Nguồn | Node | Trạng thái |
| --- | --- | --- |
| `Brand - System > File` | `14193:14497` | Canonical, người dùng xác nhận |
| Legacy `File` | `12010:9721` | Đang được 60 screen instances sử dụng |

Hai component sets không hoàn toàn giống nhau; khác biệt rõ nhất nằm trong hình học và shadow của variant `PPT`.

### Screen status bars

Sau khi loại `Brand - System > Android-status-bar`, Search và Folder vẫn đang dùng hai implementation status bar khác nhau. Tài liệu không chọn một implementation làm reusable project component vì người dùng đã loại pattern này khỏi Design System.

## 13. Handoff rules

1. Dùng đúng Variable/Text Style/Component đã được Figma xác nhận; không tự tạo semantic mới.
2. Giữ nguyên hierarchy khi mapping variable sang CSS.
3. Dùng canonical `Brand - System > File` cho prototype, không dùng legacy `File` dù screen Figma chưa migrate.
4. Giữ `Search bar / Done` và `Search bar / finish` là hai state khác nhau.
5. Chọn Search bar state theo đúng screen đang implement; không tự suy diễn trigger giữa `Done` và `finish`.
6. Không tạo reusable Android status bar từ component đã bị loại.
7. Hard-coded illustration values vẫn là local visual values cho tới khi Figma định nghĩa token/style tương ứng.
8. Các Text Styles chưa dùng trên screen vẫn là styles hợp lệ vì tồn tại trực tiếp trong Design System.
9. Không dùng paint/effect/grid style chỉ vì chúng tồn tại; chỉ áp dụng khi screen hoặc Figma xác nhận.
