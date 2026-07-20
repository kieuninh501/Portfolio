# Portfolio Project Rules

File này là bản đồ sửa project. Khi cần chỉnh UI, ưu tiên sửa đúng lớp bên dưới để không làm lệch design system.

## Nguyên tắc chung

- Không sửa file trong `dist/`. Đây là output build, sẽ bị ghi đè.
- Không hardcode màu, font-size, spacing, radius mới nếu Figma đã có token. Thêm token vào `styles/tokens/*` trước, rồi component dùng token đó.
- Thiết kế phải bám đúng token: typography, color, spacing, radius, icon size, size và component state đều lấy từ design system/Figma tokens. Trước khi chỉnh UI, kiểm tra token hiện tại có đúng mode Website/Mobile không; không dùng giá trị cũ hoặc tự suy ra bằng mắt.
- Primitive token chỉ lưu giá trị gốc. Semantic token dùng cho ý nghĩa UI. Component token dùng cho trạng thái/variant của component.
- CSS section chỉ được override cục bộ khi Figma thật sự khác token global, nhưng phải đặt tên rõ, scope trong section đó, và note lý do trong file này.
- Khi sửa visual theo Figma, kiểm tra desktop trước. Mobile responsive có thể làm sau nếu section đó chưa có mobile design.
- Sau thay đổi UI/code, chạy `npm run lint` và `npm run build`.

## Sửa Nội Dung

- Copy song ngữ, project, capability, section text: `data/content.ts`.
- Data case study reusable: `data/case-studies.ts`. Mỗi project là một object riêng gồm `showcase`, `details`, `sections`; khi thêm Sona Tarot thì thêm data mới cùng schema, không copy layout component.
- Thông tin cá nhân/profile/nav/contact: `data/profile.ts`.
- Route tiếng Anh/Việt: `app/[locale]/page.tsx`, `lib/i18n.ts`. Default locale là `en`, nên route gốc `/` phải redirect về `/en`.

## Sửa Layout Chính

- Cấu trúc trang theo section: `app/[locale]/page.tsx`.
- Metadata/font provider/root layout: `app/layout.tsx`.
- Global stylesheet và layout section hiện tại: `app/globals.css`.
- Desktop main content bắt đầu tại `padding-top: 114px` để khớp content container Figma `y=114`.
- Background liền mạch phía sau toàn trang: `components/layout/PageBackground.tsx` và CSS `.page-background__*` trong `app/globals.css`. `.page-background` là wrapper full ngang màn hình; `.page-background__artboard` là lớp định vị tối thiểu `1280px` để giữ tọa độ Figma trong khi nền vẫn phủ viewport rộng.
- Lower page wash trước footer: `public/assets/backgrounds/bg-lower-page.png`, class `.page-background__image--lower-page`, Figma `BG` node layer `717:24584` / `image 125`, desktop `top=6748`, `left=-446`, size `2172x724`, không flip. Đây là nền tổng phía sau đoạn cuối trang/section 8 CTA, không dùng chung với footer.
- Vòng tròn lớn phía sau section cuối/CTA là background tổng `public/assets/backgrounds/ellipse-17.png`, class `.page-background__ellipse-17` / `.page-background__image--ellipse-17`. Layer này phải full-bleed theo viewport và căn giữa trong `PageBackground`; không tạo pseudo background trong `.call-to-action-section` hoặc footer.
- Section 3 page wash: `public/assets/backgrounds/bg-image-81.png`, class `.page-background__image--bg-81`, Figma BG layer `406:9652`, vị trí desktop `left=50%`, `y=1768`, size `1280x960`; mobile theo BG node `714:24662` dùng `top: 1511px`, scale lên thành `260vw x 195vw` để phủ đủ card trong layout responsive, căn giữa viewport. Đây là nền tổng phía sau section 3, không đặt vào `FeaturedProjects.tsx`.
- Header: `components/layout/SiteHeader.tsx` và CSS `.site-header*` / `.site-mobile-drawer*`. Ở top hiện transparent; khi scroll xuống qua `16px` thì header ẩn để không che content; khi scroll ngược lên trong vùng đã scroll thì header hiện lại với glass background/blur nhẹ. Riêng desktop case-study: khi `.case-study-page__content-grid` đã sticky/pinned thì ép header hiện lại dạng glass để menu luôn có trên màn hình. Dưới `900px`, desktop nav/CTA ẩn, hiện hamburger `32x32`; drawer responsive dùng native `<dialog>.showModal()` theo MDN/WAI modal pattern, panel phải `220px`. Overlay dim phủ full màn hình bằng `dialog::backdrop` dùng `#09090A` 40%, không tạo node/pseudo overlay tự chế trong DOM. Dialog full-screen transparent bắt outside click, panel `stopPropagation`. Drawer panel phải có surface riêng, không dùng `backdrop-filter` vì sẽ lấy mẫu overlay phía sau và tạo mảng tối ở header drawer. Close bằng nút X/outside click/Esc/nav click, CTA `Work With Me` nằm trong drawer. Khi drawer mở, header gốc phải `visibility: hidden`/`aria-hidden` để không còn lộ logo/hamburger bên dưới overlay.
- Shell theo route: `components/layout/PortfolioShell.tsx`. Home route có `IntroLoader`, `PageBackground`, `SiteFooter`; case-study route không dùng home background/intro/footer để tránh kéo nền landing vào trang chi tiết.
- Case-study background: `components/layout/CaseStudyBackground.tsx`, CSS `.case-study-background__*` trong `app/globals.css`, Figma node tổng `484:14424` / BG instance `492:14645`. Decorative background của case-study chỉ phủ vùng top hero/banner; từ content grid trở xuống dùng nền phẳng `--primitive-purple-pastel-50`, không kéo ellipse/lower-page xuống toàn trang.
- Scroll entry: `app/layout.tsx` có inline `homeScrollResetScript` chạy trước hydration, và `components/layout/ScrollToHero.tsx` là backup trong home shell. Khi mở `/en` hoặc `/vi` không có hash thì ép scroll về top/hero, giữ `history.scrollRestoration = "manual"`, tạm tắt smooth scroll, và force top qua nhiều frame/timer + `pageshow/load` để chặn browser restore muộn sau reload. Nếu reload đang có hash cũ như `#contact`, script sớm vẫn ép về hero; còn mở URL có hash mới như `#projects` bằng navigation thường vẫn được phép nhảy đúng anchor.
- Intro loader: `components/layout/IntroLoader.tsx`, CSS `.intro-loader*`. Loader chỉ là brand intro nhẹ trước hero, không chứa logic fetch thật; timing sửa trong `IntroLoader.tsx`, visual/mở màn sửa trong `app/globals.css`.
- Footer: `components/layout/SiteFooter.tsx`; data lấy từ `data/profile.ts` và `copy[locale].sections.footer`.

## Sửa Section

- Hero: `components/sections/Hero.tsx`, CSS `.hero-section*`.
- Section 2 capabilities: `components/sections/Capabilities.tsx`, CSS `.capabilities-section*` và `.capability-card*`.
- Section 2 motion: header copy reveal bằng `.capabilities-section--motion .capabilities-section__eyebrow/title/description`; circle reveal bằng `.capabilities-section__visual--motion`. Card reveal tách theo từng row bằng `RevealOnView` ở `.capabilities-section__row--motion` với `rootMargin="0px 0px -8% 0px"` và `threshold={0.01}`; mỗi row stagger 2 card để 2 card dưới chỉ chạy lên khi scroll tới row dưới. Section này replay khi scroll ra/vào viewport.
- Section 3 featured work: `components/sections/FeaturedProjects.tsx`, CSS `.featured-projects-section*` và `.featured-project-card*`.
- Section 3 motion: `FeaturedProjects.tsx` dùng `RevealItem` riêng cho header `.featured-projects-section__header--motion` và từng project card `.featured-project-card--motion`; không trigger bằng toàn section để tránh animation chạy sớm. Header dùng transition thuần, card vertical reveal + zoom nhẹ và replay khi scroll ra/vào viewport.
- Section 4 learning playground: `components/sections/LearningPlayground.tsx`, CSS `.learning-playground-section*` và `.study-card*`.
- Section 4 motion: header dùng `.learning-playground-section__header--motion`, panel dùng `.learning-playground-section__panel--motion`, từng study card dùng `.study-card--motion`, footer dùng `.learning-playground-section__footer--motion`. Giữ card là thẻ `<a>` qua `RevealItem as="a"` để không làm lệch flex/grid.
- Section 5 craft process: `components/sections/CraftProcess.tsx`, CSS `.craft-process-section*` và `.craft-note*`.
- Section 5 motion: header dùng `.craft-process-section__header--motion`; từng sticky note dùng `RevealItem as="article"` + `.craft-note--motion`. Note reveal theo stagger `0/80/160ms` từng hàng, có image scale-down nhẹ và content trễ hơn một nhịp.
- Section 6 journey/experience: `components/sections/Experience.tsx`, CSS `.journey-section*` và `.journey-card*`.
- Section 6 motion: background dùng wrapper absolute `.journey-section__background-wrap--motion` để giữ `translate(-50%, -50%)`; header `.journey-section__header--motion`, CTA `.journey-section__cv-motion`, từng card `.journey-card--motion`. Card reveal theo timeline stagger `0/120/240ms`, content trong card hiện sau card một nhịp.
- Section 7 working together: `components/sections/WorkingTogether.tsx`, CSS `.working-together-section*` và `.working-together-card*`.
- Section 7 motion: header dùng `.working-together-section__header--motion`; từng orb/card dùng `RevealItem as="article"` + `.working-together-card--motion`. Không animate bằng container cha để tránh cả cụm xuất hiện một lúc; orb scale rất nhẹ và content trễ sau orb.
- Section 8 contact CTA: `components/sections/CallToAction.tsx`, CSS `.call-to-action-section*`.
- Section 8 motion: CTA dùng wrapper `.call-to-action-section__content--motion`; chỉ animate headline vì Figma hiện không còn button trong section này.
- Các section placeholder/sau này: `Contact.tsx`.

## Section Map

- Page tổng desktop Figma: `388:8173`, width `1280`, height `7687`; content container starts at `x=80`, `y=114`, width `1120`, height `7255`; BG instance `388:8174` height `7417`; footer starts at `y=7417`.
- Hero: Figma `388:8322`, width `1120`, height `634`, padding bottom `40`, outer gap content/action `120`, content gap `48`, main-copy gap `12`, action gap `24`, eyebrow `16/24`, lead width `544` và typography `18/28`, CTA size `md`, component `Hero.tsx`, copy trong `data/content.ts`, background tổng qua `PageBackground.tsx`. Mobile Figma node `714:24679`: root gap `60`, content gap `24`, main-copy gap `12`, intro group gap `16`, action gap `24`, padding top `20`, padding x `16`, bottom `40`; eyebrow mobile `14/22`, intro mobile H1 `48/64`, headline/accent mobile H2 `40/56`, lead mobile description-lg `16/24`, status mobile body-lg `16/24`; button group vẫn 2 cột ngang, không quay lại dạng button dọc.
- Section 2: Figma section `401:9274`, card component `401:9129`, page instance `401:9275`, component `Capabilities.tsx`, data `copy.sections.capabilities` + `capabilities`, asset `public/assets/sections/section-2-bg.svg`; desktop section height `995`, BG section `928x995` không dùng outer shadow/glow, circle `543x543` at `left: 80.5px`, visual/grid width `673`, card grid starts at `margin-top: 31px` over the circle, grid gap `30px`. Mobile Figma node `714:24961`: section/background full viewport width (`100vw`), padding inline content `16px`, không chừa margin ngoài; title giữ đúng 2 dòng từ data line-break; card track scroll ngang nhưng vẫn giữ 2 hàng card như Figma/DOM row hiện tại, card width `270px`, gap `16px`, track có padding đầu `24px`; circle mobile khoảng `380x380`, `top: -4px`, card track đẩy xuống `20px`; giữ row wrapper để `RevealOnView` vẫn có box quan sát, không đổi lại thành một hàng card đơn.
- Section 2 text rules: title và description đều khóa line-break trong `data/content.ts` bằng string array; section title dùng `Heading/H3-Medium`, description dùng `Description/lg-medium` + `Text/Brand/Primary-Strong`; card desktop đồng đều `320x182`; card title dùng `H6/Medium`, card description dùng `Body/sm/Regular`, card chips dùng `Caption/sm/Medium`. Card stroke trong Figma là inside stroke nên CSS dùng inset `box-shadow` thay vì `border` để content vẫn đủ `280px`; chip list desktop `nowrap`. Không quay lại thông số cũ `340px`, `body-md` hoặc `H6/SemiBold` nếu Figma chưa đổi lại.
- Section 3: Figma page instance `425:10764`, section component `425:10686`, card component `425:10437`, height `761`, padding top `60`, padding bottom `120`, header/cards gap `80`, component `FeaturedProjects.tsx`, data `projects`, assets `project-small-jobs.png`, `project-sona-tarot.png`; cards là 2-column flex, gap `30`, mỗi card flex `1`, height `309`, padding `20`, content gap `24`, image `269x269`, card title dùng `Heading/H5-Medium`, meta dùng `Caption/sm-Medium`, description dùng `Body/sm-Regular`. Mobile Figma node `714:25712`: section full width, padding `20px 16px 40px`, header gap `20`, content gap `40`, card stack gap `16`, card ngang padding `12`, gap `12`, image `120x120`, heading gap `4`, text gap `16`, header description giữ 2 dòng bằng line-break data, ẩn meta/tag và CTA link trong card. Toàn bộ card là link tới case study; không đặt nested `<a>` bên trong card.
- Section 4: Figma section instance `435:33392`, showcase/card node `432:22351`, height `1166`, component `LearningPlayground.tsx`, data `playgroundStudies`, assets `section-4-bg.png` và `section-4-showcase-*.png`. Desktop panel `1120x760`, content padding `30`, projects row height `526`, big card `515x526`, small card `249.5x255`, panel BG dùng `object-fit: fill` để giữ đúng mép bo góc PNG, card footer chỉ có title và không có mũi tên, description khóa line-break trong `data/content.ts`; mobile padding top/bottom `40px`, title dùng mobile H4 và `nowrap` để giữ 1 dòng; mỗi study card mở đúng Behance URL từ `playgroundStudies.url`. Footer CTA là text button `Show All on Behance` trỏ `https://www.behance.net/kieuninh501`, giữ icon arrow-right-up, hover đổi `Text/Brand/Primary`.
- Section 5: Figma `446:37386`, height `1209`, component `CraftProcess.tsx`, data `craftSteps`, assets `section-5-note-1.png` đến `section-5-note-6.png`; desktop padding top `40`, bottom `120`.
- Section 6: Figma `463:37849`, story component `446:37585`, height `960`, component `Experience.tsx`, data `journeyStories`, asset `section-6-bg.png`; background wrapper phủ ngang viewport `100vw`, content/cards vẫn theo container `1120px`. Container gap `80`, header width `736`, header title dùng `H3/Medium`, description dùng `Description/lg/Medium` + `Text/Brand/Primary-Strong`; card row gap `30`, card width `353`, min-height `216`, padding `20`, gap `20`, title dùng `H5/Medium` + `Text/Brand/Primary`, tags dùng `Caption/sm/Medium`, description dùng `Body/md/Regular`. CV CTA lấy link từ `profile.links.resume`, mở tab mới, hover nền primary và chữ trắng. Ưu tiên token Website, không dùng fallback nhỏ hơn do plugin sinh ra nếu lệch bảng token.
- Section 7: Figma `472:38290`, height `690`, padding top/bottom `80`, header-card gap `80`, component `WorkingTogether.tsx`, data `workingTogetherCards`, assets `section-7-orb-clear-communication.png`, `section-7-orb-ownership.png`, `section-7-orb-continuous-learning.png`, `section-7-orb-developer-mindset.png`. Header description hiện là 2 dòng theo Figma, dùng nowrap trong header `736px` thay vì width chung `621px`. Card tròn `258x258`, content width `228`, title dùng `H6/Medium` + `Text/Brand/Primary`, body dùng `Body/sm/Medium`. Không tái dùng/flip orb vì màu gradient phụ thuộc đúng từng vị trí export.
- Section 8 CTA: Figma label `Section 9`, node `487:14429`, frame height `208`, section content gốc `487:14428` height `200`; nội dung là headline centered-only trong khung `758x150`, text width `698`, dùng `Heading/H2-ExtraLight` với giá trị Figma hiện tại `40/56` và `Text/Brand/Primary-Strong`. Component `CallToAction.tsx`, copy `sections.callToAction`. Không render button/icon trong section này.
- Footer: Figma `604:15252` / component `604:15186`, height `270`, component `SiteFooter.tsx`, background `public/assets/backgrounds/bg-footer.png`, icons `behance.svg`, `linkedin.svg`, `github.svg`, `email.svg`, `map-point.svg`. Footer background phủ full viewport width; inner content vẫn khóa trong container `1120px`. Desktop footer starts at page `y=7417`, nên gap sau CTA là `48px` theo frame tổng; đây là frame spacing cục bộ, không phải token spacing mới.
- Khoảng cách giữa các section frame desktop theo Figma hiện là `80px`; dùng `margin-top: var(--space-80)` ở root section, không nhét gap giả vào nội dung bên trong.

## Sửa Token

- Primitive colors: `styles/tokens/primitive.css`.
- Semantic colors: `styles/tokens/semantic.css`.
- Component color/state token: `styles/tokens/component.css`.
- Font family/weight: `styles/tokens/typography.css`.
- Type scale desktop/mobile: `styles/tokens/typescale.css`.
- Spacing: `styles/tokens/spacing.css`.
- Radius: `styles/tokens/radius.css`.
- Icon size: `styles/tokens/icon-size.css`.
- Size token: `styles/tokens/size.css`.
- Token import order: `styles/tokens/index.css`.
- Typescale mặc định trong `:root` là mode `Website`. Mode `Mobile` chỉ map vào biến chính trong media query `<768px`. Khi Figma plugin trả fallback khác token, ưu tiên bảng token Website/Mobile của design system trước.

## Asset Rules

- Icon SVG dùng chung: `public/assets/icons/`.
- Background tổng, ellipse, layer lớn: `public/assets/backgrounds/`.
- Asset riêng của section/card/project: `public/assets/sections/`.
- Nếu ảnh từ Figma bị mờ, export lớn hơn kích thước render ít nhất 2x rồi scale bằng CSS/HTML.
- Icon Solar nếu là asset riêng thì đặt ở `public/assets/icons/` và dùng qua `img`, CSS mask, hoặc component wrapper. Không vẽ lại bằng SVG tay nếu đã có file gốc.

## Typography Rules

- Font chính của Portfolio là `Nunito`.
- Brand/header logo có thể dùng token riêng `--font-family-brand` nếu design yêu cầu.
- Section header hiện dùng:
  - Eyebrow: `typescale/eyebrow-lg` (`16/24` website, `14/22` mobile), weight `Bold`, letter spacing `4px`.
  - Title: `typescale/h3` (`40/56`) trên website, weight `Medium` khi section dùng component Figma `401:9534`; responsive mobile có thể override riêng title xuống `mobile/h4` theo bản vẽ, không kéo eyebrow/description/card/footer đổi theo.
  - Description: `typescale/description-lg` (`18/28` website, `16/24` mobile theo token hiện tại), color `Text/Brand/Primary-Strong` khi dùng component Figma `401:9534`, weight `Medium`.
- Section header chính từ Section 2 đến Section 7 phải đồng bộ cùng size/token ở trên. CTA/Footer không dùng rule này vì không phải section header cùng hệ.
- Section header component Figma `401:9534`: width `736`, gap outer `40`, title-group gap `16`, description width `621`. Mobile section header từ Section 2 đến Section 7 dùng eyebrow-to-title gap `20px`; giữ khoảng header-to-content riêng theo từng section. Từ breakpoint responsive `<900px`, chỉ section header title đồng nhất H4; không đổi eyebrow/description/card/footer/nội dung phụ hàng loạt. Riêng Section 4 thêm `nowrap` để giữ 1 dòng theo yêu cầu responsive.
- Description nào Figma xuống dòng thủ công thì lưu trong `data/content.ts` dưới dạng string array và render bằng `SectionDescription`; không ép line-break bằng `<br>` rải rác trong component.
- Card text có thể dùng override cục bộ nếu Figma card nhỏ hơn section heading. Ví dụ section 2 đang giữ riêng `--capability-title-*` và `--capability-body-*`.

## Button Rules

- Button/link dùng token component trước: `Action/Solid`, `Action/Outline`, `Action/Ghost`.
- Button component reusable hiện nằm ở `components/ui/ButtonLink.tsx`.
- Header CTA và hero CTA có thể có CSS riêng nếu Figma khác component chuẩn, nhưng màu/icon/hover vẫn phải đi qua semantic hoặc component token.
- Hero CTA desktop theo Figma hiện dùng button size `md` (`44px` height, `20px` padding-x), không dùng `lg`.
- Hover nên nhẹ: đổi màu semantic, dịch icon 1-2px, transition khoảng 180ms.

## Motion Rules

- Motion ưu tiên CSS scoped theo component/section trước; chỉ thêm library khi cần timeline/phức tạp.
- Scroll reveal dùng chung: `components/motion/RevealSection.tsx`. Component này thêm class `.is-visible` khi section vào viewport.
- Hero reveal: `components/sections/Hero.tsx`, CSS `.hero-motion*`, keyframes `hero-reveal` và `hero-status-reveal`.
- Section 2 reveal/hover: `components/sections/Capabilities.tsx`, CSS `.capabilities-section--motion*` cho header/background, `.capabilities-section__visual--motion*` cho circle, và `.capabilities-section__row--motion*` cho card stagger. Card trigger theo từng hàng, không theo visual container chung, để bottom row vẫn animate khi scroll tới.
- Section 3 motion không trigger bằng section cha. Header dùng `RevealItem` riêng với `.featured-projects-section__header--motion`; từng card dùng `RevealItem` riêng với `.featured-project-card--motion` để animation chạy đúng lúc vào viewport và replay khi scroll.
- Không trộn `animation` và `transition` trên cùng property cho scroll reveal text/card, đặc biệt `opacity` và `transform`; chọn một cơ chế để tránh giật.
- Section header motion phải tách nhịp title và description. Description không chạy cùng cụm với title; dùng delay khoảng `240-280ms`, transform nhẹ hơn title để copy có khoảng thở.
- Card reveal phải đủ thấy được: initial scale/translate nên rõ nhẹ, ví dụ section 3 đang dùng card `scale(0.94)` + `translateY(36px)` và image `scale(1.08)` về `1`.
- Intro loader: `.intro-loader*`, keyframes `intro-brand-in` và `intro-glow-pulse`.
- Section 5 motion: `.craft-process-section__header--motion` cho header; `.craft-note--motion` cho note. Không đổi margin zig-zag của note bằng motion; vị trí note vẫn do `[data-note-index]` layout rule quyết định.
- Section 7 motion: `.working-together-section__header--motion` cho header; `.working-together-card--motion` cho orb/card. Orb export đúng từng vị trí, motion chỉ scale/opacity, không reuse/flip asset.
- Section 8/footer motion: `.call-to-action-section__content--motion`, `.site-footer__background--motion`, `.site-footer__inner--motion`. Footer motion phải tối giản, chỉ fade/translate nhẹ.
- Luôn có `prefers-reduced-motion` fallback khi thêm animation mới.
- Motion không được thay thế layout/token. Spacing, typography, color vẫn chỉnh bằng token hoặc CSS section riêng.

## Background Rules

- Nền tổng là layer riêng, không cắt lẻ vào từng section nếu Figma thiết kế liền mạch.
- Nền tổng được phép full ngang màn hình; content section vẫn giữ container design `1120px`.
- Các blob/vòng tròn kéo xuyên qua nhiều section phải sửa trong `components/layout/PageBackground.tsx` và block `.page-background__*`. Không gắn `::before/::after` vào section chỉ để bắt chước nền tổng, vì sẽ lệch khi section spacing thay đổi.
- Section chỉ có background riêng khi trong Figma nó là frame/asset riêng của section, ví dụ section 2 `section-2-bg.svg`.
- Khi background bị trượt, kiểm tra thứ tự:
  - `.page-background`
  - `.page-background__image--*`
  - top/left/right/width/height theo frame desktop
  - z-index giữa background, section content, header

## Responsive Rules

- Desktop là source hiện tại.
- Token mobile đã có trong `styles/tokens/typescale.css`, override dưới `768px`.
- Khi làm mobile, sửa trong media query cuối `app/globals.css` hoặc thêm block scoped theo section.
- Mobile header đã có drawer riêng, không chỉ ẩn nav. Nếu chỉnh header responsive phải giữ hamburger/drawer, scroll lock khi mở, và không hiện desktop CTA trên thanh header mobile.
- Drawer mobile nav item hover/focus/active dùng nền primary/100 (`--surface-default-brand-soft`) và text primary.
- Không scale font bằng viewport width. Dùng token mobile hoặc breakpoint rõ ràng.

## Khi Thêm Section Mới

1. Thêm copy song ngữ vào `data/content.ts`.
2. Tạo component trong `components/sections/SectionName.tsx`.
3. Import và đặt thứ tự trong `app/[locale]/page.tsx`.
4. Thêm CSS section vào `app/globals.css`, dùng token có sẵn trước.
5. Thêm asset vào `public/assets/sections/` hoặc `public/assets/backgrounds/`.
6. Chạy `npm run lint` và `npm run build`.

## Khi Thêm Case Study

1. Thêm project data vào `data/case-studies.ts`.
2. Route dùng chung: `app/[locale]/case-studies/[slug]/page.tsx`.
3. Layout/sidebar/stickybar/content renderer: `components/case-study/CaseStudyLayout.tsx`.
4. CSS case-study: block `.case-study-*` trong `app/globals.css`.
5. Asset riêng đặt trong `public/assets/case-studies/{slug}/`; không dùng trực tiếp URL Figma tạm.
6. Sidebar chỉ đổi `activeSectionId` để render content tương ứng. Không hardcode theo SmallJobs trong component; khác biệt giữa SmallJobs/Sona nằm trong data.
7. Case-study content không dùng một formatter chung cho mọi block. Renderer phải tách rõ role: overview list, intro callout, product challenge, key experience, simple text list, image/design block. Typography phải đọc token name từ Figma rồi map sang `styles/tokens/typescale.css`; default mode của project là `Website`, không lấy fallback pixel ở cột Mobile để đóng thành component token riêng. Ví dụ: title dùng `typescale/h3`, section title dùng `typescale/h6`, body dùng `typescale/body-*`, description dùng `typescale/description-*`, eyebrow dùng `typescale/eyebrow-lg` tùy node Figma. Chỉ dùng mobile token trong media query `< 768px`. Numbered title render bằng code, data không hardcode số thứ tự. Bullet có keyword thì keyword bold, body regular; bullet thường thì không thêm label giả như `EXPERIENCE`.
8. Desktop case-study detail giữ fixed reading rule cũ: sau banner, `.case-study-page__content-grid` sticky ở `--case-study-pinned-top: 150px`, grid `162px 641px 257px` gap `30px`, full remaining viewport height. Sidebar trái, khung content giữa, stickybar phải đều đứng trong cùng viewport; không để phần trên/eyebrow hoặc khung content bị page-scroll trôi lên. Cột giữa: `.case-study-content-card` fill full height; `.case-study-content-card__header`/eyebrow cố định trong card; `.case-study-content-card__body` là shell trắng có padding Figma; chỉ `.case-study-content-card__body-inner` được `overflow-y: auto` khi nội dung cộng vùng đóng đáy/reveal dài hơn vùng hiển thị. Nếu text và phần đáy bo/reveal đều đã vừa trong màn thì không tạo scroll. Đáy cột giữa phải dùng vùng scroll thật: khi body-inner còn nội dung hoặc còn vùng reveal bên dưới thì toggle `.case-study-content-card__body--open-bottom` để bỏ bo đáy, tránh thấy mép đóng sớm; khi scroll tới cuối thật thì trả lại bo đáy theo design. Không dùng pseudo/background giả để kéo nền trắng. Card bỏ padding-bottom ngoài, body giữ padding trên/trái/phải và `padding-bottom: 0`, còn `.case-study-content-card__body-inner` dùng `--case-study-content-scroll-buffer` lớn hơn vùng reveal để nội dung cuối cuộn lên khỏi đáy viewport/dock và phần `clip-path` bo đáy chỉ cắt vào khoảng đệm, không cắt chữ. `--case-study-content-end-reveal` là khoảng nền lộ ra ở đáy khi đã scroll tới cuối thật; đang dùng token `space-80` để tránh cảm giác sát đáy/Dock. Overflow state dùng `scrollHeight - clientHeight > 1`, vì vùng reveal đáy là một phần của trạng thái kết thúc cần scroll tới; đừng trừ scroll buffer khỏi phép tính này. Stickybar title `PROJECT DETAILS` đứng yên, chỉ `.case-study-stickybar__items` scroll nếu detail dài; sidebar cũng scroll riêng nếu thấp viewport. Desktop dùng native non-passive wheel handler trong `CaseStudyLayout.tsx`: ưu tiên vùng đang hover nếu còn cuộn được, nhưng nếu vùng đó đã tới đầu/cuối thì fallback sang `.case-study-content-card__body-inner` để người dùng luôn cuộn được nội dung giữa tới đáy bo/reveal; nếu không vùng nào cuộn tiếp được thì vẫn phải `preventDefault()` để wheel không rò ra scrollbar chính làm cả cụm fixed layout giựt/trôi lên. Không thêm scroll-lock library và không đổi CSS/logic phần trên khi chỉ sửa đáy content. Tablet/mobile dưới `1180px` quay về page scroll thường.

## Checklist Trước Khi Chốt

- Text đúng cả `en` và `vi`.
- Font family, font-size, line-height, weight khớp token Figma.
- Background không trượt khi scroll.
- Header behavior đúng: top transparent, scroll xuống ẩn, scroll lên hiện lại dạng glass; case-study desktop khi content grid pinned thì header phải hiện dù trước đó đang scroll xuống.
- Footer background là layer riêng trong `SiteFooter`, không thay cho `bg-lower-page` vì Figma tách footer ngoài BG tổng.
- Asset không mờ ở kích thước render.
- Hover/focus không làm layout nhảy.
- `npm run lint` pass.
- `npm run build` pass.
