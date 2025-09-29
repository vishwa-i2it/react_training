## React Training — Week 1

### Day 1 — Foundations

#### How the web works (request → response → render)
- DNS lookup → resolve domain to IP.
- HTTP request → browser sends `GET` to server.
- Server response → headers + body (HTML/JSON/etc.).
- Browser processing → parses HTML, fetches CSS/JS/images, builds DOM, applies CSS, runs JS.

#### WWW vs Internet
- Internet: Physical/network infrastructure.
- WWW: Hyperlinked document system over HTTP/HTTPS using URLs and HTML.

#### DNS (Domain Name System)
- Role: Translates domain names to IP addresses.
- Flow (simplified): Browser/OS cache → Resolver → Root → TLD → Authoritative → IP.

#### Project tooling: CRA vs Vite
- CRA (Create React App)
  - Uses Webpack + Babel + WDS.
  - Pros: mature, many tutorials. Cons: slower dev builds, customization requires eject.
  - Command:
```bash
npx create-react-app my-app
```
- Vite
  - Uses native ES Modules for dev, Rollup for prod, esbuild for transforms.
  - Pros: instant dev server, modern, flexible. Cons: newer ecosystem.
  - Commands:
```bash
npm create vite@latest my-app
cd my-app
npm install
npm run dev
```

#### ES Modules (ESM)
- Each file is a module; use `import`/`export`.
```javascript
// math.js
export function add(a, b) { return a + b; }

// app.js
import { add } from './math.js';
console.log(add(2, 3));
```
- Benefits: Static analysis, scoping, tree-shaking-friendly.

#### Rollup (production bundling)
- Purpose: Bundle many ESM files into optimized chunks, remove unused code.
- Tree-shaking: Eliminates dead exports.

#### Transpilation
- Convert modern JS/TS/JSX → widely supported JS.
- Tools: Babel (flexible, slower), esbuild (very fast), Rollup in production.

---

### Day 2 — React Basics

#### Components
- Function components (recommended): Props in, JSX out.
```jsx
function Hello({ name }) {
  return <h1>Hello, {name}</h1>;
}
```
- Class components: Legacy; avoid for new code.

#### JSX
- Looks like HTML but is JavaScript; compiled to `React.createElement`.

#### Props
- Read-only inputs from parent to child.
```jsx
function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}
// Usage: <Welcome name="Alice" />
```

#### State
- Local, mutable data inside a component; changes trigger re-render.
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

---

### Day 3 — TypeScript Essentials

#### Interfaces vs Types
- interface: Describe object shapes; extendable.
```ts
interface User {
  id: number;
  name: string;
  email?: string;
}
```
- type: Aliases for primitives, unions, tuples, and object shapes.
```ts
type ID = string | number;
type Point = [number, number];

type User = { id: ID; name: string };
```

---

### Day 4 — Atomic Design & Controlled Inputs

#### Atomic Design (component architecture)
- Atoms → Molecules → Organisms → Templates → Pages.

Suggested folders:
```
src/
├─ components/
│  ├─ atoms/
│  ├─ molecules/
│  ├─ organisms/
│  ├─ templates/
│  └─ pages/
├─ services/
├─ hooks/
├─ utils/
├─ assets/
└─ App.tsx
```

#### Controlled vs Uncontrolled Components
- Controlled: React state is the source of truth.
```jsx
import { useState } from 'react';

function ControlledInput() {
  const [value, setValue] = useState('');
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <p>Current value: {value}</p>
    </div>
  );
}
```
- Uncontrolled: DOM holds the value; access via `ref`.
```jsx
import { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef(null);
  const submit = () => alert(`You typed: ${inputRef.current?.value}`);
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={submit}>Submit</button>
    </div>
  );
}
```
- Prefer controlled for validation, formatting, predictable state.

---

### Day 5 — Data Fetching

#### fetch (built-in)
```jsx
import React from 'react';

function App() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then(setUsers)
      .catch(console.error);
  }, []);

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
```
- Notes: Manual `.json()`, no built-in timeout/cancellation/interceptors.

#### Axios (3rd-party)
```bash
npm install axios
```
```jsx
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data))
      .catch(console.error);
  }, []);

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
```
- Pros: Automatic JSON, interceptors, cancellation, browser + Node.

---

### Day 6–7 — Tree Structure POC
- Proof of concept on component hierarchy and rendering tree.

---

## Week 1 — Detailed Notes (Days 1–3)

### Day 1 - 09/04/2025

1. React Base setup

2. How the web works

First: What happens when you type a URL in your browser (say, `https://example.com`) and hit Enter?

Let’s sketch the journey:

DNS lookup  
Your browser asks: “Where is `example.com` located?” It queries DNS servers and gets back an IP address (like `93.184.216.34`).

Request sent  
Your browser sends an HTTP(S) request to that IP. It’s like:

`GET / HTTP/1.1`  
`Host: example.com`

Server responds  
The server (maybe Nginx, Apache, or your backend app) replies with an HTTP response:

1. Headers (metadata)  
2. A body (often HTML)

Browser parses HTML  
The browser reads the HTML from top to bottom. When it sees:  
`<link>` → fetch CSS files  
`<script>` → fetch JS files  
`<img>` → fetch images  
Each fetch is another HTTP request.

Rendering  
The browser builds a DOM tree from the HTML. It applies styles from CSS, runs JavaScript, and updates the DOM.

What is WWW?

- WWW = World Wide Web  
- Uses HTTP/HTTPS, URLs, HTML  
- Distinction: Internet (infrastructure) vs WWW (service over Internet)

Why is it used?

- Enables hyperlinked information sharing; easy navigation, multimedia, global access

What is DNS?

- Domain Name System, translates domain names to IP addresses
- Flow: Cache → Resolver → Root → TLD → Authoritative → IP

3. Vite vs React (CRA vs Vite)

- CRA (Create React App): Webpack + Babel + Dev Server; stable, slower, harder to customize
- Vite: ES modules dev server + Rollup prod; blazing fast, modern
- ES Modules: import/export per-file, static analysis, scoping, tree-shaking
- Rollup: Bundler optimized for ESM, tree-shakes unused exports
- Transpilation: Babel/esbuild; JSX/TS/modern JS → compatible JS

---

### Day 2 - 09/05/2025

4. Components

What is a Component?  
- Takes inputs (props) and returns UI (JSX)

Types of Components
- Function Components (recommended)
- Class Components (legacy)

JSX
- Looks like HTML but compiles to `React.createElement`

5. Props
- Inputs from parent; example `Welcome` component with `name`

6. State
- Data managed inside a component; `useState` example Counter

---

### Day 3 - 09/08/2025

1. Interface & Types (TypeScript)

- interface: object structure, extendable
- type: aliases, unions, tuples, flexible object types

### Day 4 - 09/09/2025

2. Atomic folder structures

What is Atomic Design in React?
- Component-driven architecture: atoms → molecules → organisms → templates → pages
- Build small reusable components first; compose into larger ones; assemble pages

Five Levels
1. Atoms: button, input, label, icon
2. Molecules: small groups of atoms (e.g., input + label)
3. Organisms: complex sections (forms, navbar)
4. Templates: page skeletons (structure, no real data)
5. Pages: concrete screens with data

Atomic Examples
- Button (atom)
- InputField (molecule)
- LoginForm (organism)
- AuthTemplate (template)
- LoginPage (page)

Folder Structure (Atomic)
- See sample tree in original notes (`src/components/{atoms,molecules,organisms,templates,pages}`)

Benefits
- Reusability, scalability, separation of concerns, team collaboration

3. Controlled vs. Uncontrolled Components
- Uncontrolled: DOM holds value; access via refs
- Controlled: React state is source of truth; value + onChange
- Why controlled: validation, formatting, reset, predictability
- Gotchas: re-render per keystroke, ensure onChange for inputs

4. Tree Structure POC

---

## Day 5 - 09/10/2025

The Built-in `fetch`
- Native, promise-based; requires `.json()`; no timeout/cancel/interceptors
- Example fetch users from JSONPlaceholder

Axios (3rd-party)
- `npm install axios`
- Cleaner API, automatic JSON, interceptors, cancellation, browser + Node
- Example fetching users

---

## Day 6 & 7 – 09/11/2025 & 12

Tree POC
