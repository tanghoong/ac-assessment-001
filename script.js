/* ==========================================================
   Mock data (TCM clinic)
   ========================================================== */
const DOCTORS = {
  lim: 'Dr. Lim',
  chan: 'Dr. Chan',
  ong: 'Dr. Ong',
};

const TREATMENTS = {
  acu: 'Acupuncture',
  tuina: 'Tuina Massage',
  cup: 'Cupping',
  herb: 'Herbal Consultation',
  moxa: 'Moxibustion',
  guasha: 'Gua Sha',
};

const COUNTRIES = {
  MY: 'Malaysia',
  SG: 'Singapore',
  CN: 'China',
  ID: 'Indonesia',
  TW: 'Taiwan',
  TH: 'Thailand',
  HK: 'Hong Kong',
  JP: 'Japan',
  GB: 'United Kingdom',
};

// All personal details below are dummy data: placeholder names, zero-filled
// phone / ID numbers and example.com email addresses.
const PATIENT_RECORDS = [
  { id: 'P-000001', name: 'Tan Ah Kow', vip: true, phone: '+60 12-000 0001', email: 'ahkow.tan@example.com', country: 'MY',
    datetime: '2026-09-21T09:15', birthday: '1988-01-01', idDoc: 'NRIC 880101-00-0001', occupation: 'Office Manager',
    lastVisit: '2026-09-07', remarks: 'Allergic to penicillin. Chronic insomnia; responds well to acupuncture.',
    appointments: [
      { at: '2026-09-24T10:30', treatment: 'acu', doctor: 'lim', status: 'Confirmed', note: 'Follow-up for insomnia, sleeping ~5 hrs/night.' },
      { at: '2026-10-08T15:00', treatment: 'herb', doctor: 'ong', status: 'Pending', note: 'Review herbal formula after 4 weeks.' },
    ] },
  { id: 'P-000002', name: 'Ali bin Abu', phone: '+60 12-000 0002', email: 'ali.abu@example.com', country: 'MY',
    datetime: '2026-09-21T08:42', birthday: '1995-02-01', idDoc: 'NRIC 950201-00-0002', occupation: 'Software Engineer',
    lastVisit: '2026-08-30', remarks: 'Neck and shoulder stiffness from prolonged desk work.',
    appointments: [
      { at: '2026-09-23T19:00', treatment: 'tuina', doctor: 'chan', status: 'Confirmed', note: 'Stiff neck, limited rotation to the left.' },
    ] },
  { id: 'P-000003', name: 'Muhammad Ali bin Abu Bakar Abdullah', phone: '+60 12-000 0003', email: 'muhammad.ali@example.com', country: 'MY',
    datetime: '2026-09-20T16:05', birthday: '1979-03-01', idDoc: 'NRIC 790301-00-0003', occupation: 'Logistics Supervisor',
    lastVisit: '2026-09-20', remarks: 'Lower back pain after lifting injury. Hypertension (on medication).',
    appointments: [
      { at: '2026-09-22T11:00', treatment: 'cup', doctor: 'lim', status: 'Confirmed', note: 'Lumbar pain 6/10, worse in the morning.' },
      { at: '2026-09-29T11:00', treatment: 'acu', doctor: 'lim', status: 'Pending', note: 'Second session, reassess mobility.' },
    ] },
  { id: 'P-000004', name: 'Tan Xiao Ming', phone: '+65 9000 0004', email: 'xiaoming.tan@example.com', country: 'SG',
    datetime: '2026-09-20T14:30', birthday: '1990-04-01', idDoc: 'NRIC S0000004A', occupation: 'Financial Analyst',
    lastVisit: '2026-07-15', remarks: '',
    appointments: [] },
  { id: 'P-000005', name: 'Zhang San', vip: true, phone: '+86 138 0000 0005', email: 'zhang.san@example.com', country: 'CN',
    datetime: '2026-09-20T11:20', birthday: '1972-05-01', idDoc: 'Passport E00000005', occupation: 'Business Owner',
    lastVisit: '2026-09-13', remarks: 'Type 2 diabetes. Avoid herbs high in sugar (e.g. licorice in large doses).',
    appointments: [
      { at: '2026-09-25T09:00', treatment: 'herb', doctor: 'ong', status: 'Confirmed', note: 'Fatigue, dry mouth, frequent thirst.' },
    ] },
  { id: 'P-000006', name: 'Siti Aminah binti Abdullah', phone: '+60 12-000 0006', email: 'siti.aminah@example.com', country: 'MY',
    datetime: '2026-09-19T17:45', birthday: '2000-06-01', idDoc: 'NRIC 000601-00-0006', occupation: 'University Student',
    lastVisit: '2026-09-19', remarks: 'Menstrual cramps; prefers female practitioner.',
    appointments: [
      { at: '2026-10-02T14:00', treatment: 'moxa', doctor: 'ong', status: 'Pending', note: 'Cycle-related abdominal pain, cold hands and feet.' },
    ] },
  { id: 'P-000007', name: 'Budi Contoh', phone: '+62 812-0000-0007', email: 'budi.contoh@example.com', country: 'ID',
    datetime: '2026-09-19T10:10', birthday: '1985-07-01', idDoc: 'Passport X0000007', occupation: 'Chef',
    lastVisit: '2026-06-02', remarks: 'Allergic to shellfish.',
    appointments: [] },
  { id: 'P-000008', name: 'Wang Xiao Ming', phone: '+886 912 000 008', email: 'xiaoming.wang@example.com', country: 'TW',
    datetime: '2026-09-18T15:25', birthday: '1993-08-01', idDoc: 'Passport 300000008', occupation: 'Graphic Designer',
    lastVisit: '2026-09-04', remarks: 'Migraines 2–3×/month. Sensitive to strong herbal odours.',
    appointments: [
      { at: '2026-09-26T16:30', treatment: 'acu', doctor: 'chan', status: 'Confirmed', note: 'Headache on the right temple, triggered by screen time.' },
    ] },
  { id: 'P-000009', name: 'Somchai Jaidee', phone: '+66 81 000 0009', email: 'somchai.jaidee@example.com', country: 'TH',
    datetime: '2026-09-18T09:05', birthday: '1968-09-01', idDoc: 'Passport AA0000009', occupation: 'Retired Teacher',
    lastVisit: '2026-08-21', remarks: 'Knee osteoarthritis (both knees).',
    appointments: [
      { at: '2026-09-30T10:00', treatment: 'guasha', doctor: 'lim', status: 'Pending', note: 'Knee swelling after long walks.' },
    ] },
  { id: 'P-000010', name: 'Chan Tai Man', phone: '+852 9000 0010', email: 'taiman.chan@example.com', country: 'HK',
    datetime: '2026-09-17T13:50', birthday: '1998-10-01', idDoc: 'Passport K00000010', occupation: 'Nurse',
    lastVisit: '2026-09-17', remarks: '',
    appointments: [] },
  { id: 'P-000011', name: 'Yamada Taro', vip: true, phone: '+81 90-0000-0011', email: 'taro.yamada@example.com', country: 'JP',
    datetime: '2026-09-17T10:30', birthday: '1982-11-01', idDoc: 'Passport TZ0000011', occupation: 'Marketing Director',
    lastVisit: '2026-09-10', remarks: 'Recovering from shoulder surgery – avoid strong manipulation on the right shoulder.',
    appointments: [
      { at: '2026-09-24T14:00', treatment: 'acu', doctor: 'chan', status: 'Confirmed', note: 'Right shoulder stiffness, limited overhead reach.' },
    ] },
  { id: 'P-000012', name: 'Li Si', phone: '+86 138 0000 0012', email: 'li.si@example.com', country: 'CN',
    datetime: '2026-09-16T08:30', birthday: '1951-12-01', idDoc: 'Passport E00000012', occupation: 'Retired',
    lastVisit: '2026-09-16', remarks: 'Post-stroke rehabilitation. On blood thinners – avoid cupping.',
    appointments: [
      { at: '2026-09-23T09:30', treatment: 'acu', doctor: 'chan', status: 'Confirmed', note: 'Left-side weakness, improving grip strength.' },
      { at: '2026-09-30T09:30', treatment: 'tuina', doctor: 'chan', status: 'Pending', note: 'Upper limb mobility exercises.' },
    ] },
  { id: 'P-000013', name: 'Jane Doe', phone: '+44 7700 900013', email: 'jane.doe@example.com', country: 'GB',
    datetime: '2026-09-15T17:10', birthday: '1991-01-01', idDoc: 'Passport 000000013', occupation: 'English Teacher',
    lastVisit: '2026-09-15', remarks: 'First TCM experience; needle-anxious.',
    appointments: [
      { at: '2026-09-28T17:30', treatment: 'cup', doctor: 'lim', status: 'Pending', note: 'Upper back tension, trial session.' },
    ] },
  { id: 'P-000014', name: 'Wong Ah Moi', vip: true, phone: '+60 12-000 0014', email: 'ahmoi.wong@example.com', country: 'MY',
    datetime: '2026-09-15T11:40', birthday: '1964-02-01', idDoc: 'NRIC 640201-00-0014', occupation: 'Accountant',
    lastVisit: '2026-09-01', remarks: 'Menopausal hot flushes; mild anaemia.',
    appointments: [
      { at: '2026-09-27T10:00', treatment: 'herb', doctor: 'ong', status: 'Confirmed', note: 'Night sweats, irritability, poor sleep.' },
    ] },
  { id: 'P-000015', name: 'Muthu a/l Samy', phone: '+60 12-000 0015', email: 'muthu.samy@example.com', country: 'MY',
    datetime: '2026-09-14T15:15', birthday: '1987-03-01', idDoc: 'NRIC 870301-00-0015', occupation: 'Taxi Driver',
    lastVisit: '2026-08-10', remarks: 'Sciatica, right leg.',
    appointments: [] },
];

const PAGE_SIZE = 8;

/* Today's queue status. Driven by the mock server below. */
const STATUS = {
  scheduled:  { label: 'Scheduled',       order: 0 },
  waiting:    { label: 'Waiting',         order: 1 },
  consulting: { label: 'In consultation', order: 2 },
  completed:  { label: 'Completed',       order: 3 },
};

const INITIAL_STATUS = {
  'P-000001': 'consulting', 'P-000002': 'waiting',   'P-000003': 'waiting',   'P-000004': 'scheduled',
  'P-000005': 'completed',  'P-000006': 'scheduled', 'P-000007': 'completed', 'P-000008': 'scheduled',
  'P-000009': 'completed',  'P-000010': 'scheduled', 'P-000011': 'completed', 'P-000012': 'completed',
  'P-000013': 'scheduled',  'P-000014': 'completed', 'P-000015': 'completed',
};

/* ==========================================================
   Mock server
   Stands in for a backend, so the UI is written the same way it would be against a real one:
     fetchPatients()  ≈ GET /api/patients   (REST call, returns a Promise)
     subscribe(fn)    ≈ WebSocket / Server-Sent Events pushing { id, status } changes
   Replace these two with fetch() and new WebSocket() and the UI code stays the same.
   Add ?simulate=error to the URL to make the first load fail (shows the error state).
   ========================================================== */
const MockServer = (() => {
  const LATENCY = 600;                 // ms, fake network delay
  const TICK = 6000;                   // ms between queue updates
  const MAX_IN_CONSULTATION = 2;       // doctors seeing patients at the same time

  const status = {};
  const listeners = new Set();
  let queue = [];                      // waiting patient ids, in arrival order
  let tick = 0;
  let timer = null;
  let failNextFetch = new URLSearchParams(location.search).get('simulate') === 'error';

  function set(id, next) {
    if (status[id] === next) return;
    status[id] = next;
    listeners.forEach((fn) => fn({ id, status: next }));
  }

  function reset() {
    PATIENT_RECORDS.forEach((p) => set(p.id, INITIAL_STATUS[p.id]));
    queue = PATIENT_RECORDS.filter((p) => status[p.id] === 'waiting').map((p) => p.id);
  }

  // One step of a clinic day: Scheduled → Waiting → In consultation → Completed
  function step() {
    tick++;
    const withStatus = (s) => PATIENT_RECORDS.filter((p) => status[p.id] === s).map((p) => p.id);
    let changed = false;

    // A consultation finishes
    const consulting = withStatus('consulting');
    if (consulting.length >= MAX_IN_CONSULTATION || (consulting.length && tick % 2 === 0)) {
      set(consulting[0], 'completed');
      changed = true;
    }
    // Next patient in the queue goes in
    if (queue.length && withStatus('consulting').length < MAX_IN_CONSULTATION) {
      set(queue.shift(), 'consulting');
      changed = true;
    }
    // Someone arrives (two ticks out of three, so the queue length moves up and down)
    const scheduled = withStatus('scheduled');
    if (scheduled.length && tick % 3 !== 0) {
      set(scheduled[0], 'waiting');
      queue.push(scheduled[0]);
      changed = true;
    }
    // Day is over: start again
    if (!changed) reset();
  }

  reset();

  return {
    fetchPatients() {
      return new Promise((resolve, reject) => setTimeout(() => {
        if (failNextFetch) {
          failNextFetch = false;       // fail once, so Retry succeeds
          reject(new Error('Could not reach the server. Check your connection and try again.'));
          return;
        }
        // Serialise and parse, as if the data came back as a JSON response
        resolve(JSON.parse(JSON.stringify(PATIENT_RECORDS.map((p) => ({ ...p, status: status[p.id] })))));
      }, LATENCY));
    },
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
    // Only the mock can pause the source; a real client would stop applying updates and re-sync on resume
    setRunning(on) {
      clearInterval(timer);
      timer = on ? setInterval(step, TICK) : null;
    },
    get running() { return timer !== null; },
    step,
  };
})();

/* ==========================================================
   Helpers
   ========================================================== */
const $ = (sel, root = document) => root.querySelector(sel);
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const pad = (n) => String(n).padStart(2, '0');

const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function formatDate(d) {
  return `${pad(d.getDate())} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}
function formatTime(d) {
  const h = d.getHours() % 12 || 12;
  return `${pad(h)}:${pad(d.getMinutes())} ${d.getHours() < 12 ? 'AM' : 'PM'}`;
}
/** DD MMM YYYY HH:MM AM/PM */
const formatDateTime = (iso) => { const d = new Date(iso); return `${formatDate(d)} ${formatTime(d)}`; };

function ageFrom(iso) {
  const b = new Date(iso), now = new Date();
  let age = now.getFullYear() - b.getFullYear();
  if (now < new Date(now.getFullYear(), b.getMonth(), b.getDate())) age--;
  return age;
}

function timeAgo(iso) {
  const days = Math.floor((new Date() - new Date(iso)) / 86400000);
  if (days <= 0) return 'Today';
  if (days === 1) return 'Yesterday';
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} week${days < 14 ? '' : 's'} ago`;
  const months = Math.floor(days / 30);
  return `${months} month${months === 1 ? '' : 's'} ago`;
}

const initials = (name) => name.split(/\s+/).filter((w) => /^[A-Z]/.test(w)).slice(0, 2).map((w) => w[0]).join('');
const hueOf = (str) => [...str].reduce((h, c) => (h * 31 + c.charCodeAt(0)) % 360, 7);

const flag = (code) =>
  `<img class="flag" src="https://flagcdn.com/w40/${code.toLowerCase()}.png" alt="${COUNTRIES[code]} flag" width="22" height="16" loading="lazy">`;

const avatar = (p, size = '') =>
  `<span class="avatar ${size}" style="--hue:${hueOf(p.name)}" aria-hidden="true">${initials(p.name)}</span>`;

const vipBadge = (p) => (p.vip ? '<span class="badge-vip" title="VIP patient">VIP</span>' : '');

const statusPill = (key) => `<span class="status status--${key}">${STATUS[key].label}</span>`;

/* ==========================================================
   State & elements
   ========================================================== */
let PATIENTS = [];                          // client copy, filled by MockServer.fetchPatients()

const state = {
  query: '',
  page: 1,
  selectedId: null,                         // patient shown in the detail panel
  sort: { key: 'datetime', dir: 'desc' },
  checked: new Set(),                       // bulk-selected patient ids
};

const el = {
  rows: $('#patientRows'),
  table: $('.table'),
  empty: $('#stateEmpty'),
  loading: $('#stateLoading'),
  info: $('#resultInfo'),
  total: $('#totalCount'),
  page: $('#pageIndicator'),
  prev: $('#prevPage'),
  next: $('#nextPage'),
  search: $('#search'),
  panel: $('#detailPanel'),
  panelBody: $('#panelBody'),
  panelBackdrop: $('#panelBackdrop'),
  sidebar: $('#sidebar'),
  sidebarToggle: $('#sidebarToggle'),
  sidebarBackdrop: $('#sidebarBackdrop'),
  selectAll: $('#selectAll'),
  bulkBar: $('#bulkBar'),
  bulkCount: $('#bulkCount'),
  exportBtn: $('#exportBtn'),
  liveToggle: $('#liveToggle'),
  queueBadge: $('#queueBadge'),
  sortSelect: $('#sortSelect'),
  error: $('#stateError'),
  errorMsg: $('#errorMsg'),
  retryBtn: $('#retryBtn'),
};

/* ==========================================================
   Patient table
   ========================================================== */
const SORTERS = {
  name: (p) => p.name.toLowerCase(),
  country: (p) => COUNTRIES[p.country],
  status: (p) => STATUS[p.status].order,
  datetime: (p) => p.datetime,
};

/** Search-filtered and sorted list: what the table and "Export CSV" show */
function visiblePatients() {
  const q = state.query.trim().toLowerCase();
  const list = q
    ? PATIENTS.filter((p) => [p.name, p.id, p.phone, p.email, COUNTRIES[p.country]].some((v) => v.toLowerCase().includes(q)))
    : [...PATIENTS];
  const { key, dir } = state.sort;
  const get = SORTERS[key];
  return list.sort((a, b) => {
    const x = get(a), y = get(b);
    return (x < y ? -1 : x > y ? 1 : 0) * (dir === 'asc' ? 1 : -1);
  });
}

function renderSortHeaders() {
  document.querySelectorAll('th[data-sort]').forEach((th) => {
    const active = th.dataset.sort === state.sort.key;
    th.setAttribute('aria-sort', active ? (state.sort.dir === 'asc' ? 'ascending' : 'descending') : 'none');
    th.classList.toggle('is-sorted', active);
  });
  el.sortSelect.value = `${state.sort.key}:${state.sort.dir}`;
}

function rowHtml(p) {
  const checked = state.checked.has(p.id);
  return `
    <tr data-id="${p.id}" tabindex="0"
        class="${p.id === state.selectedId ? 'is-selected' : ''} ${checked ? 'is-checked' : ''}">
      <td class="col-check">
        <input type="checkbox" class="check" data-check="${p.id}" ${checked ? 'checked' : ''}
               aria-label="Select ${escapeHtml(p.name)}">
      </td>
      <td class="cell-patient">
        <div class="patient">
          ${avatar(p)}
          <div class="patient__text">
            <div class="patient__name"><span class="truncate">${escapeHtml(p.name)}</span>${vipBadge(p)}</div>
            <span class="patient__id">ID: ${p.id}</span>
          </div>
        </div>
      </td>
      <td data-label="Contact"><span class="nowrap">${p.phone}</span></td>
      <td data-label="Nationality"><span class="country">${flag(p.country)}${COUNTRIES[p.country]}</span></td>
      <td data-label="Status" data-status-for="${p.id}">${statusPill(p.status)}</td>
      <td data-label="Datetime"><span class="nowrap">${formatDateTime(p.datetime)}</span></td>
      <td class="col-action">
        <div class="menu-wrap">
          <button type="button" class="icon-btn" data-menu-toggle aria-haspopup="menu" aria-expanded="false"
                  aria-label="More actions for ${escapeHtml(p.name)}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="12" cy="19" r="1.4"/></svg>
          </button>
        </div>
      </td>
    </tr>`;
}

function renderTable() {
  const list = visiblePatients();
  const pages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  state.page = Math.min(state.page, pages);
  const start = (state.page - 1) * PAGE_SIZE;
  const pageItems = list.slice(start, start + PAGE_SIZE);

  el.rows.innerHTML = pageItems.map(rowHtml).join('');
  el.table.hidden = pageItems.length === 0;
  el.empty.hidden = pageItems.length !== 0;

  el.total.textContent = `${PATIENTS.length} patients`;
  el.info.textContent = `Showing ${pageItems.length} of ${list.length} results`;
  el.page.textContent = `Page ${state.page} of ${pages}`;
  el.prev.disabled = state.page <= 1;
  el.next.disabled = state.page >= pages;
  el.exportBtn.disabled = list.length === 0;

  renderSortHeaders();
  renderSelection();
}

/* ==========================================================
   Bulk selection & actions
   ========================================================== */
function renderSelection() {
  const pageIds = [...el.rows.querySelectorAll('tr[data-id]')].map((tr) => tr.dataset.id);
  const onPage = pageIds.filter((id) => state.checked.has(id)).length;
  el.selectAll.checked = pageIds.length > 0 && onPage === pageIds.length;
  el.selectAll.indeterminate = onPage > 0 && onPage < pageIds.length;
  el.selectAll.disabled = pageIds.length === 0;

  const n = state.checked.size;
  el.bulkBar.hidden = n === 0;
  el.bulkCount.textContent = `${n} patient${n === 1 ? '' : 's'} selected`;
}

function setChecked(id, on) {
  on ? state.checked.add(id) : state.checked.delete(id);
  const row = el.rows.querySelector(`tr[data-id="${id}"]`);
  if (row) {
    row.classList.toggle('is-checked', on);
    row.querySelector('[data-check]').checked = on;
  }
}

function runBulkAction(action) {
  const selected = PATIENTS.filter((p) => state.checked.has(p.id));
  if (action === 'export') return exportCsv(selected, 'patients-selected');
  if (action === 'vip' || action === 'unvip') selected.forEach((p) => { p.vip = action === 'vip'; });
  if (action === 'clear') { state.checked.clear(); el.selectAll.focus(); }
  renderTable();
  if (state.selectedId && el.panel.classList.contains('is-open')) renderPanel(PATIENTS.find((p) => p.id === state.selectedId));
}

/* ==========================================================
   Export (CSV, opens in Excel / Google Sheets)
   ========================================================== */
function csvCell(value) {
  let s = String(value ?? '');
  if (/^[=+\-@]/.test(s)) s = `'${s}`;          // stop spreadsheets reading a cell as a formula
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function exportCsv(list, name) {
  const header = ['Patient ID', 'Name', 'VIP', 'Contact', 'Email', 'Nationality', 'NRIC / Passport',
    'Birthday', 'Occupation', 'Last visit', 'Status', 'Datetime', 'Medical remarks'];
  const rows = list.map((p) => [p.id, p.name, p.vip ? 'Yes' : 'No', p.phone, p.email, COUNTRIES[p.country], p.idDoc,
    formatDate(new Date(p.birthday)), p.occupation, formatDate(new Date(p.lastVisit)), STATUS[p.status].label,
    formatDateTime(p.datetime), p.remarks]);
  const csv = [header, ...rows].map((r) => r.map(csvCell).join(',')).join('\r\n');

  const d = new Date();
  const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });   // BOM so Excel reads UTF-8
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `${name}-${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}.csv`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

/* ==========================================================
   Live status: applies updates pushed by the (mock) server
   Only the changed cell is re-rendered, so focus, selection and scroll position are kept.
   ========================================================== */
function applyStatusUpdate({ id, status }) {
  const p = PATIENTS.find((x) => x.id === id);
  if (!p) return;
  p.status = status;
  const cell = el.rows.querySelector(`[data-status-for="${p.id}"]`);
  if (cell) {
    cell.innerHTML = statusPill(status);
    const row = cell.closest('tr');
    row.classList.remove('is-updated');
    void row.offsetWidth;                              // restart the highlight animation
    row.classList.add('is-updated');
  }
  const panelStatus = document.getElementById('panelStatus');
  if (panelStatus && state.selectedId === p.id) panelStatus.innerHTML = statusPill(status);
  renderQueueBadge();
}

function renderQueueBadge() {
  const waiting = PATIENTS.filter((p) => p.status === 'waiting').length;
  el.queueBadge.innerHTML = `${waiting}<span class="visually-hidden"> patient${waiting === 1 ? '' : 's'} waiting</span>`;
  el.queueBadge.hidden = waiting === 0;
}

function setLive(on) {
  MockServer.setRunning(on);
  el.liveToggle.setAttribute('aria-pressed', String(on));
  el.liveToggle.dataset.tooltip = on
    ? 'Queue status updates automatically. Click to pause.'
    : 'Live updates paused. Click to resume.';
  el.liveToggle.querySelector('.live__text').textContent = on ? 'Live' : 'Paused';
}

/* ==========================================================
   Row action menu (quick actions)
   ========================================================== */
let openMenu = null;

function closeMenu({ focusToggle = false } = {}) {
  if (!openMenu) return;
  const { menu, toggle } = openMenu;
  menu.remove();
  toggle.setAttribute('aria-expanded', 'false');
  if (focusToggle) toggle.focus();
  openMenu = null;
}

function showMenu(toggle) {
  const row = toggle.closest('tr');
  const patient = PATIENTS.find((p) => p.id === row.dataset.id);
  closeMenu();

  const menu = document.createElement('ul');
  menu.className = 'menu';
  menu.setAttribute('role', 'menu');
  menu.innerHTML = `
    <li role="none"><button type="button" role="menuitem" data-action="view">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>View details</button></li>
    <li role="none"><button type="button" role="menuitem" data-action="copy">
      <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/></svg>Copy phone number</button></li>`;
  toggle.parentElement.appendChild(menu);
  // Fixed positioning so the menu is never clipped by the scrolling table container
  const r = toggle.getBoundingClientRect();
  const m = menu.getBoundingClientRect();
  const below = r.bottom + 4 + m.height <= window.innerHeight;
  menu.style.top = `${below ? r.bottom + 4 : r.top - m.height - 4}px`;
  menu.style.left = `${Math.max(8, r.right - m.width)}px`;
  toggle.setAttribute('aria-expanded', 'true');
  openMenu = { menu, toggle, patient };
  menu.querySelector('button').focus();
}

async function runMenuAction(action) {
  const { patient, toggle } = openMenu;
  if (action === 'view') {
    closeMenu();
    openPanel(patient.id, toggle.closest('tr'));
  } else if (action === 'copy') {
    try { await navigator.clipboard.writeText(patient.phone); } catch { /* clipboard unavailable */ }
    closeMenu({ focusToggle: true });
    showTooltip(toggle, 'Phone number copied');
    setTimeout(hideTooltip, 1400);
  }
}

/* ==========================================================
   Detail panel
   ========================================================== */
let panelReturnFocus = null;

// While the dialog is open, the page behind it can't be clicked, focused or read by screen readers
function setBackgroundInert(on) {
  [el.sidebar, $('.main')].forEach((node) => { node.inert = on; });
}

function appointmentHtml(a) {
  const d = new Date(a.at);
  const statusClass = a.status === 'Confirmed' ? 'status--confirmed' : 'status--pending';
  return `
    <article class="appt">
      <div class="appt__top">
        <div>
          <div class="appt__date">${DAYS[d.getDay()]}, ${formatDate(d)}</div>
          <div class="appt__time">${formatTime(d)}</div>
        </div>
        <span class="status ${statusClass}">${a.status}</span>
      </div>
      <div class="appt__row">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
        <strong>${TREATMENTS[a.treatment]}</strong>
      </div>
      <div class="appt__row">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/></svg>
        ${DOCTORS[a.doctor]}
      </div>
      <p class="appt__note">${escapeHtml(a.note)}</p>
    </article>`;
}

function renderPanel(p) {
  const bday = new Date(p.birthday);
  const appts = [...p.appointments].sort((a, b) => a.at.localeCompare(b.at));
  el.panelBody.innerHTML = `
    <div class="profile-head">
      ${avatar(p, 'avatar--lg')}
      <div style="min-width:0">
        <h3 id="panelName">${escapeHtml(p.name)} ${vipBadge(p)}</h3>
        <p class="patient__id">ID: ${p.id}</p>
      </div>
    </div>

    <dl class="info">
      <div><dt>Contact</dt><dd>${p.phone}</dd></div>
      <div><dt>Email</dt><dd>${escapeHtml(p.email)}</dd></div>
      <div><dt>Nationality</dt><dd><span class="country">${flag(p.country)}${COUNTRIES[p.country]}</span></dd></div>
      <div><dt>Birthday</dt><dd>${formatDate(bday)} <span class="muted">(${ageFrom(p.birthday)} y/o)</span></dd></div>
      <div><dt>NRIC / Passport</dt><dd>${p.idDoc}</dd></div>
      <div><dt>Occupation</dt><dd>${escapeHtml(p.occupation)}</dd></div>
      <div><dt>Today's status</dt><dd id="panelStatus">${statusPill(p.status)}</dd></div>
      <div class="span-2"><dt>Last visit</dt><dd>${formatDate(new Date(p.lastVisit))} <span class="muted">· ${timeAgo(p.lastVisit)}</span></dd></div>
      <div class="span-2"><dt>Medical remarks</dt>
        <dd class="remark ${p.remarks ? '' : 'is-none'}">${p.remarks ? escapeHtml(p.remarks) : 'No remarks recorded.'}</dd></div>
    </dl>

    <h3 class="section-title">Upcoming Appointments <span class="muted" style="font-weight:400;font-size:13px">${appts.length}</span></h3>
    ${appts.length
      ? `<div class="appt-list">${appts.map(appointmentHtml).join('')}</div>`
      : `<div class="state" style="padding:24px 0">
           <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
           <p class="muted">No upcoming appointments.</p>
         </div>`}`;
}

function openPanel(id, returnTo) {
  const p = PATIENTS.find((x) => x.id === id);
  if (!p) return;
  state.selectedId = id;
  panelReturnFocus = returnTo || document.activeElement;
  renderPanel(p);
  document.querySelectorAll('#patientRows tr').forEach((tr) => tr.classList.toggle('is-selected', tr.dataset.id === id));

  el.panel.classList.add('is-open');
  el.panel.setAttribute('aria-hidden', 'false');
  el.panelBackdrop.hidden = false;
  setBackgroundInert(true);
  el.panelBody.scrollTop = 0;
  $('#closePanel').focus();
}

function closePanel() {
  if (!el.panel.classList.contains('is-open')) return;
  el.panel.classList.remove('is-open');
  el.panel.setAttribute('aria-hidden', 'true');
  el.panelBackdrop.hidden = true;
  setBackgroundInert(false);
  if (panelReturnFocus && document.contains(panelReturnFocus)) panelReturnFocus.focus();
}

// Keep Tab inside the open dialog
el.panel.addEventListener('keydown', (e) => {
  if (e.key !== 'Tab') return;
  const focusables = el.panel.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
  const first = focusables[0], last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

/* ==========================================================
   Sidebar (tablet toggle)
   ========================================================== */
function setSidebar(expanded) {
  el.sidebar.classList.toggle('is-expanded', expanded);
  el.sidebarToggle.setAttribute('aria-expanded', String(expanded));
  el.sidebarBackdrop.hidden = !expanded;
}
el.sidebarToggle.addEventListener('click', () => setSidebar(!el.sidebar.classList.contains('is-expanded')));
el.sidebarBackdrop.addEventListener('click', () => setSidebar(false));
window.matchMedia('(min-width: 1200px)').addEventListener('change', (e) => e.matches && setSidebar(false));

// Prototype: nav links are placeholders
el.sidebar.addEventListener('click', (e) => { if (e.target.closest('a[href="#"]')) e.preventDefault(); });

/* ==========================================================
   Tooltip (icon rail labels + truncated text)
   ========================================================== */
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
tooltip.setAttribute('role', 'tooltip');
document.body.appendChild(tooltip);

function showTooltip(target, text) {
  tooltip.textContent = text;
  const r = target.getBoundingClientRect();
  const inRail = target.closest('.sidebar');
  tooltip.classList.add('is-visible');
  const t = tooltip.getBoundingClientRect();
  let left = inRail ? r.right + 10 : r.left + r.width / 2 - t.width / 2;
  let top = inRail ? r.top + r.height / 2 - t.height / 2 : r.top - t.height - 8;
  if (top < 4) top = r.bottom + 8;
  left = Math.max(8, Math.min(left, window.innerWidth - t.width - 8));
  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
}
const hideTooltip = () => tooltip.classList.remove('is-visible');

function tooltipTextFor(node) {
  const target = node.closest('[data-tooltip], .truncate');
  if (!target) return null;
  if (target.classList.contains('truncate')) {
    return target.scrollWidth > target.clientWidth ? [target, target.textContent] : null;
  }
  // Rail labels only matter while the sidebar shows icons only
  if (target.closest('.sidebar') && el.sidebar.getBoundingClientRect().width > 120) return null;
  return [target, target.dataset.tooltip];
}

['mouseover', 'focusin'].forEach((type) =>
  document.addEventListener(type, (e) => {
    const hit = tooltipTextFor(e.target);
    hit ? showTooltip(...hit) : hideTooltip();
  })
);
document.addEventListener('mouseout', (e) => { if (!e.relatedTarget || !tooltipTextFor(e.relatedTarget)) hideTooltip(); });
document.addEventListener('focusout', hideTooltip);
window.addEventListener('scroll', () => { hideTooltip(); closeMenu(); }, true);
window.addEventListener('resize', () => closeMenu());

/* ==========================================================
   Events
   ========================================================== */
el.rows.addEventListener('click', (e) => {
  const toggle = e.target.closest('[data-menu-toggle]');
  const item = e.target.closest('[data-action]');
  if (item) return runMenuAction(item.dataset.action);
  if (e.target.closest('.col-check')) {
    // Clicking the padding around a checkbox toggles it instead of opening the panel
    const box = e.target.closest('.col-check').querySelector('[data-check]');
    if (e.target !== box) box.click();
    return;
  }
  if (toggle) {
    e.stopPropagation();
    return openMenu && openMenu.toggle === toggle ? closeMenu() : showMenu(toggle);
  }
  const row = e.target.closest('tr[data-id]');
  if (row) openPanel(row.dataset.id, row);
});

el.rows.addEventListener('keydown', (e) => {
  if (openMenu && openMenu.menu.contains(e.target)) {
    const items = [...openMenu.menu.querySelectorAll('button')];
    const i = items.indexOf(e.target);
    if (e.key === 'ArrowDown') { e.preventDefault(); items[(i + 1) % items.length].focus(); }
    if (e.key === 'ArrowUp') { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
    if (e.key === 'Tab') closeMenu();
    return;
  }
  const row = e.target.closest('tr[data-id]');
  if (row && e.target === row && (e.key === 'Enter' || e.key === ' ')) {
    e.preventDefault();
    openPanel(row.dataset.id, row);
  }
});

document.addEventListener('click', (e) => { if (openMenu && !openMenu.menu.contains(e.target)) closeMenu(); });

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (openMenu) return closeMenu({ focusToggle: true });
  if (el.panel.classList.contains('is-open')) return closePanel();
  if (el.sidebar.classList.contains('is-expanded')) { setSidebar(false); el.sidebarToggle.focus(); }
});

$('#closePanel').addEventListener('click', closePanel);
el.panelBackdrop.addEventListener('click', closePanel);

el.search.addEventListener('input', () => {
  state.query = el.search.value;
  state.page = 1;
  renderTable();
});

el.prev.addEventListener('click', () => { state.page--; renderTable(); });
el.next.addEventListener('click', () => { state.page++; renderTable(); });

// Column sorting: first click sorts A→Z (newest first for dates), second click reverses
$('.table thead').addEventListener('click', (e) => {
  const th = e.target.closest('th[data-sort]');
  if (!th) return;
  const key = th.dataset.sort;
  state.sort = state.sort.key === key
    ? { key, dir: state.sort.dir === 'asc' ? 'desc' : 'asc' }
    : { key, dir: key === 'datetime' ? 'desc' : 'asc' };
  state.page = 1;
  renderTable();
});

// Bulk selection
el.rows.addEventListener('change', (e) => {
  const box = e.target.closest('[data-check]');
  if (!box) return;
  setChecked(box.dataset.check, box.checked);
  renderSelection();
});
el.selectAll.addEventListener('change', () => {
  el.rows.querySelectorAll('[data-check]').forEach((box) => setChecked(box.dataset.check, el.selectAll.checked));
  renderSelection();
});
el.bulkBar.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-bulk]');
  if (btn) runBulkAction(btn.dataset.bulk);
});

el.exportBtn.addEventListener('click', () => exportCsv(visiblePatients(), 'patients'));
el.liveToggle.addEventListener('click', () => {
  setLive(!MockServer.running);
  showTooltip(el.liveToggle, el.liveToggle.dataset.tooltip);
});

// Sort dropdown (mobile, where the header row is hidden)
el.sortSelect.addEventListener('change', () => {
  const [key, dir] = el.sortSelect.value.split(':');
  state.sort = { key, dir };
  state.page = 1;
  renderTable();
});

el.retryBtn.addEventListener('click', loadPatients);

/* ==========================================================
   Init: load data (loading → table, or error + Retry), then go live
   ========================================================== */
async function loadPatients() {
  el.loading.hidden = false;
  el.error.hidden = true;
  el.empty.hidden = true;
  el.table.hidden = true;
  el.info.textContent = '';
  el.page.textContent = '';
  MockServer.setRunning(false);
  el.liveToggle.setAttribute('aria-pressed', 'false');
  [el.prev, el.next, el.exportBtn, el.liveToggle].forEach((b) => { b.disabled = true; });

  try {
    PATIENTS = await MockServer.fetchPatients();
    el.loading.hidden = true;
    el.liveToggle.disabled = false;
    renderTable();
    renderQueueBadge();
    setLive(true);
  } catch (err) {
    el.loading.hidden = true;
    el.errorMsg.textContent = err.message;
    el.error.hidden = false;
    el.retryBtn.focus();
  }
}

MockServer.subscribe(applyStatusUpdate);
loadPatients();
