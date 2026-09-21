# 患者管理 · Patient Management UI

A prototype of a patient management screen for a Traditional Chinese Medicine (TCM) clinic, built as a single static web page for the Alphacloud Frontend/UI Assessment.

It uses plain **HTML, CSS and vanilla JavaScript**, with no build step and no dependencies.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

| File | Purpose |
| --- | --- |
| `index.html` | Page structure: sidebar, header, patient table, detail panel |
| `styles.css` | Design tokens (colours, typography), components, responsive rules |
| `script.js` | Mock server (data + live updates), table rendering, search, sorting, bulk actions, export, detail panel, menus, tooltips |

---

## How the data works

There is no real backend. `script.js` contains a small **mock server** that the UI talks to the same way it would talk to a real one:

| Mock server call | Stands in for | What it does here |
| --- | --- | --- |
| `MockServer.fetchPatients()` | `GET /api/patients` (REST) | Returns a Promise that resolves after ~0.6 s with a JSON copy of the patient list. With `?simulate=error` in the URL, the first call fails. |
| `MockServer.subscribe(fn)` | WebSocket or Server-Sent Events | Calls `fn({ id, status })` whenever a patient's queue status changes |

**The simulated clinic day.** Every 6 seconds a timer moves patients through **Scheduled → Waiting → In consultation → Completed**, with up to two consultations at a time. When everyone is done, the day starts again.

**How the UI reacts.** The UI only listens for `{ id, status }` events:

- It updates just the changed Status cell, so focus, checkboxes and scroll position are never lost.
- It briefly highlights the changed row.
- It updates the detail panel if that patient is open.
- It recomputes the sidebar's Queue badge from the number of waiting patients.
- The **Live / Paused** toggle stops the updates, so users can pause auto-updating content (WCAG 2.2.2).

**Moving to a real backend** only means replacing those two calls with `fetch('/api/patients')` and `new WebSocket(...)`. The rendering code doesn't change.

---

## Requirement checklist

Items follow the order of the original brief.

**Legend:** ✅ Done · ❌ Not done · ➕ Not in the original brief (added or adjusted)

### Key details and objective

| | Item | Notes |
| :-: | --- | --- |
| ✅ | Translate the UI/UX spec into a functional, responsive, accessible static webpage | Single page, plain HTML/CSS/JS |
| ✅ | Public GitHub repository link | |
| ✅ | Live preview URL | GitHub Pages |
| ✅ | README with setup instructions | This file |
| ✅ | Component-based structure | BEM-style CSS components (`.nav`, `.table`, `.panel`, `.appt`…), one render function per component in JS |
| ✅ | Clean commit history | One commit per feature area |

### 1. Navigation sidebar

| | Item | Notes |
| :-: | --- | --- |
| ✅ | Fixed left sidebar, ~240px, `#0052CC` | |
| ✅ | Dashboard | |
| ✅ | Patient, with the active state highlighted | |
| ✅ | Queue, with counter badge "2" | |
| ✅ | Consultation | |
| ✅ | Warehouse | |
| ✅ | Reports | |
| ✅ | Appointment, with counter badge "5" | |
| ✅ | Settings | |
| ✅ | "Update to Pro" card: white background, blue CTA button | |
| ➕ | Brand name "TCM Care" at the top of the sidebar | Added: TCM clinic theme |

### 2. Top header

| | Item | Notes |
| :-: | --- | --- |
| ✅ | White background | |
| ✅ | Title `患者管理` with subtitle | |
| ✅ | Search bar with magnifying-glass icon | |
| ✅ | `+` button to add a new patient | Button only; no form behind it |
| ✅ | User profile section with avatar | |

### Patient list: table layout

| | Item | Notes |
| :-: | --- | --- |
| ✅ | Header: Patient Name (with avatar) | |
| ✅ | Header: Contact | |
| ✅ | Header: Nationality (with flag) | |
| ✅ | Header: Datetime | |
| ✅ | Header: Action (three-dots menu) | |
| ✅ | Avatar + full name, with ID number below in muted text | |
| ✅ | Phone number with country code | |
| ✅ | Country + flag | |
| ✅ | Timestamp in `DD MMM YYYY HH:MM AM/PM` format | |
| ✅ | VIP badge for designated patients | |
| ✅ | Alternating row background colours | |
| ✅ | Bottom pagination | |
| ➕ | Avatars are initials on a rounded square | Adjusted: matches the rounded-corner shapes used across the UI; no photos needed |
| ➕ | Status column | Added: today's queue status, driven by the real-time indicator (see Bonus features) |
| ➕ | Checkbox column | Added: for bulk actions (see Bonus features) |
| ➕ | The row whose details are open stays highlighted | Added |
| ➕ | Dummy data: 15 patients | Added: placeholder names (e.g. Zhang San, Jane Doe), zero-filled phone and ID numbers, `example.com` emails |

### Slide-in detail panel (right side)

| | Item | Notes |
| :-: | --- | --- |
| ✅ | Contact | |
| ✅ | Email | |
| ✅ | Nationality (with flag) | |
| ✅ | Birthday + age | Age is calculated from today's date |
| ✅ | NRIC / Passport | |
| ✅ | Occupation | |
| ✅ | Last visit date + duration | e.g. "07 Sep 2026 · 2 weeks ago" |
| ✅ | Medical remarks (e.g. allergies) | |
| ➕ | Today's status | Added: updates live while the panel is open |
| ➕ | Medical remarks shown in a square amber-bordered box | Adjusted: allergies and contraindications stand out |
| ➕ | Full-screen panel on mobile | Added |

### Upcoming appointments

| | Item | Notes |
| :-: | --- | --- |
| ✅ | Date + time | |
| ✅ | Treatment type | TCM treatments: acupuncture, tuina, cupping, herbal consultation, moxibustion, gua sha |
| ✅ | Assigned doctor | |
| ✅ | Status / symptoms summary | Confirmed / Pending status, plus a symptoms note |
| ➕ | "No upcoming appointments" message | Added: shown when a patient has no bookings |

### Design system and typography

| | Item | Notes |
| :-: | --- | --- |
| ✅ | Font family: sans-serif (Inter) | System fonts as fallback |
| ✅ | Page title 24px bold | |
| ✅ | Subtitle 14px regular | |
| ✅ | Table headers 14px medium | |
| ✅ | Table content 14px regular | |
| ✅ | ID numbers 12px, muted colour | |
| ➕ | Text the brief doesn't size is 11–13px | Adjusted: sidebar, detail panel and appointment cards are more compact |
| ➕ | Compact padding and margins | Adjusted: suits information-dense clinic use; rows keep borders and zebra striping so records stay clearly separated |

### Colour palette

| | Item | Notes |
| :-: | --- | --- |
| ✅ | Primary Blue `#0052CC` | |
| ✅ | Secondary Blue `#E8F0FE` | |
| ✅ | Text (Primary) `#333333` | |
| ✅ | Text (Secondary) `#666666` | |
| ✅ | Borders `#E5E5E5` | |
| ✅ | Background (Main) `#FFFFFF` | |
| ✅ | Background (Alt Row) `#F8F9FA` | |
| ✅ | Success `#36B37E` | |
| ✅ | VIP Badge `#FFD700` | |

### Interactive elements and responsive behaviour

| | Item | Notes |
| :-: | --- | --- |
| ✅ | Primary button: blue background, white text | |
| ✅ | Secondary button: white background, blue border | |
| ✅ | Icon button: grey, with hover state | |
| ✅ | Search bar: light grey background | |
| ✅ | Search bar: prefixed search icon | |
| ✅ | Search bar: placeholder "Search" | |
| ✅ | Search bar: minimum width 240px | On mobile it fills the row instead |
| ✅ | Pagination: Prev/Next buttons | |
| ✅ | Pagination: page indicator | |
| ✅ | Pagination: "Showing X of Y results" | |
| ✅ | Desktop (1200px+): full multi-column layout | |
| ✅ | Tablet (768–1199px): collapsible sidebar | Icon rail by default; the ☰ button expands it to the full 240px |
| ✅ | Tablet (768–1199px): horizontal scroll for tables | |
| ✅ | Mobile (<768px): icons-only sidebar | |
| ✅ | Mobile (<768px): responsive collapsed table layout | Rows become cards |
| ✅ | Hover states | |
| ✅ | Active navigation states | |
| ✅ | Loading state | Shown while `fetchPatients()` is pending (~0.6 s) |
| ✅ | Empty state | Search with no results |
| ✅ | Error state | Open the page with `?simulate=error` in the URL. The first load fails and shows an error message with a **Retry** button; Retry succeeds. |
| ✅ | Tooltips for truncated text | e.g. long patient names |
| ➕ | Tooltips for icon-only sidebar items | Added |
| ➕ | Icons | Added: inline SVGs based on [Lucide](https://lucide.dev) (ISC licence) |

### Bonus features

| | Item | Notes |
| :-: | --- | --- |
| ✅ | Table column sorting | Patient Name, Nationality, Status and Datetime. Click once to sort, again to reverse. Headers expose `aria-sort`. |
| ➕ | "Sort by" dropdown on mobile | Added: the header row is hidden on mobile, so a dropdown offers the same sorting |
| ✅ | Patient filtering | Header search filters by name, ID, phone, email or country |
| ✅ | Export functionality | "Export CSV" downloads the current search results in the current sort order. The file opens in Excel or Google Sheets. |
| ✅ | Bulk actions menu | Tick rows (or use select-all for the page) to show the bulk bar: Export selected, Mark as VIP, Remove VIP, Clear selection |
| ✅ | Quick actions menu | Three-dots menu: View details, Copy phone number |
| ✅ | Real-time status indicators | Status column, row flash on change and the live Queue badge. Updates come from a simulated server (see [How the data works](#how-the-data-works)). |
| ➕ | "Live" / "Paused" toggle | Added: lets users pause the automatic updates (WCAG 2.2.2) |
| ➕ | Queue badge follows the live queue | Adjusted: the brief's "2" is the starting value; the badge then shows the current number of waiting patients |

**Note on CSV export.** A cell that starts with `=`, `+`, `-` or `@` is prefixed with `'`, so a spreadsheet cannot run it as a formula (CSV injection). Phone numbers such as `+60…` therefore appear as `'+60…`.

### Accessibility

| | Item | Notes |
| :-: | --- | --- |
| ✅ | Sufficient colour contrast | All text pairs checked against WCAG AA (≥ 4.5:1) |
| ✅ | Full keyboard navigation | Tab through everything. Enter/Space opens a row. Arrow keys move through the action menu. Esc closes the menu, panel and sidebar. |
| ✅ | ARIA labels | Icon buttons, dialog, menu, pagination, badges, live result count |
| ✅ | Interactive focus states | Visible focus ring on every control and table row |
| ✅ | Alt text for images/icons | Flags have alt text. Decorative icons are hidden from screen readers. |
| ➕ | "Skip to main content" link | Added |
| ➕ | Focus stays inside the open panel and returns to the row on close | Added |
| ➕ | Reduced motion when the user's system asks for it | Added |

---

External resources: flag images come from [flagcdn.com](https://flagcdn.com), and the Inter font from Google Fonts.
