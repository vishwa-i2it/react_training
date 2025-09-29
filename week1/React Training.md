# Week \- 1

## Day 1 \- 09/04/2025

1. React Base setup

2. ### How the web works

   First: What happens when you type a URL in your browser (say, `https://example.com`) and hit Enter?

Let’s sketch the journey:

**DNS lookup**  
 Your browser asks: “Where is `example.com` located?” It queries DNS servers and gets back an IP address (like `93.184.216.34`).

**Request sent**  
 Your browser sends an HTTP(S) request to that IP. It’s like:

 `GET / HTTP/1.1`  
`Host: example.com`

**Server responds**  
The server (maybe Nginx, Apache, or your backend app) replies with an HTTP response:

1. Headers (metadata)  
   2. A body (often HTML)

   **Browser parses HTML**  
      The browser reads the HTML from top to bottom. When it sees:  
      `<link>` → fetch CSS files  
      `<script>` → fetch JS files  
      `<img>` → fetch images  
       Each fetch is another HTTP request.

   **Rendering**  
      The browser builds a **DOM** (Document Object Model) tree from the HTML.  
      It applies styles from CSS, runs JavaScript, and updates the DOM.  
      That’s how you actually see a styled, interactive page.

   🌍 What is WWW?

* **WWW** \= **World Wide Web**  
* It’s basically an *information system* that uses:  
  * **HTTP/HTTPS** protocol → for communication  
  * **URLs** (Uniform Resource Locators) → for addressing  
  * **HTML** → for documents

So when we say *“the web”*, we mean this system of linked documents delivered over the internet.

👉 The important distinction:

* **Internet** \= the physical network (cables, satellites, routers, etc.)  
* **World Wide Web** \= one *service* that runs on top of the internet.  
    
  💡 Why is it used?  
* Before WWW, the internet already existed, but it was mostly email, FTP (file transfer), and telnet (remote login).  
* The WWW (invented by Tim Berners-Lee in 1989\) made it possible to share information using **hyperlinks**, where one page could connect to another.  
* This gave us:  
  * Easy navigation (click → new page)  
  * Multimedia (text, images, video, etc.)  
  * A global system anyone could access with just a browser

Without the WWW, the internet would still exist — but it would feel like using command-line tools instead of having websites.

🌐 What is DNS?

DNS \= **Domain Name System**  
 It’s like the **phonebook of the internet**.

* Humans like names: `example.com`  
* Computers like IP addresses: `93.184.216.34`  
* DNS translates a **domain name** → into its **IP address**

So when you type a URL in the browser, the very first thing that happens is a DNS lookup.

⚙️ How it works (simplified):

1. You enter `example.com`  
2. Browser checks its cache (maybe it already knows the IP).  
3. If not, it asks the **DNS resolver** (usually from your ISP or Google DNS like `8.8.8.8`).  
4. Resolver asks the **root DNS servers**:  
   * “Where are the `.com` servers?”  
5. Then asks the **TLD servers** (`.com` in this case):  
   * “Who knows `example.com`?”  
6. Then the **authoritative DNS server** for `example.com` replies with the IP.  
7. Finally, the browser can connect to that IP and request the page.  
     
   

3. ### Vite vs React 

   ⚛️ What are CRA and Vite?

Both are **tools to set up a modern JavaScript project** quickly.

* They give you a working React app in seconds.  
* They handle bundling, dev server, and build optimizations.  
* Without them, you’d manually configure Webpack, Babel, etc. (painful).  
  🛠️ CRA (Create React App)  
* **Older standard** way of starting React projects.  
* Uses **Webpack** under the hood.  
* Features:  
  * Dev server (hot reloading)  
  * Transpilation (via Babel)  
  * Bundling all JS/CSS into production files

  Command:  
     `npx create-react-app my-app`

* **Pros**: stable, widely used, lots of tutorials.  
* **Cons**: slower startup/build, harder to customize without “ejecting.”  
  ⚡ Vite  
  A **newer, faster alternative**.  
  Created by Evan You (Vue.js creator), but supports React too.

  Features:  
  1. Uses **native ES modules** in dev → no bundling needed while coding  
  2. Super fast startup (milliseconds vs 30–60s for CRA)  
  3. Production build uses **Rollup** for optimized bundles

  Command:  
      `npm create vite@latest my-app`


  **Pros**: blazing fast dev server, flexible config, modern.

  **Cons**: newer → fewer old tutorials (but ecosystem is growing fast).


  🔹 1\. What CRA (Create React App) Does

* **Build tool**: Webpack  
* **Transpiler**: Babel (turns modern JS/JSX → older JS browsers can run)  
* **Dev server**: Webpack Dev Server (bundles everything in memory, serves it)  
* **Build process**:  
  * Reads your React \+ JS/JSX files  
  * Transpiles with Babel  
  * Bundles everything into a few big JS files  
  * Injects into `index.html`

👉 That’s why when you run `npm start` with CRA, you wait a bit before your app even appears. Webpack is bundling everything up **before** the browser sees it.

🔹 2\. What Vite Does

* **Build tool**: Rollup (for production)  
* **Dev server**: Vite’s own dev server (based on native **ES modules**)  
* **Dev process**:  
  * No bundling at startup  
  * Browser directly requests each module (like `App.jsx`, `Button.jsx`)  
  * Vite transforms them on-the-fly only when needed  
* **Production build**:  
  * Uses Rollup to bundle/optimize just like CRA, but faster and smarter

👉 That’s why when you run `npm run dev` in Vite, your app appears almost instantly — no huge upfront bundling.

 Example: Same Project Setup

With **CRA**:

`npx create-react-app my-app`

`cd my-app`

`npm start`

You wait… webpack bundles… then browser opens.

With **Vite**:

`npm create vite@latest my-app`

`cd my-app`

`npm install`

`npm run dev`

Instant dev server, changes appear immediately.

✅ Advantages of CRA

Beginner-friendly (tons of guides & tutorials)

Stable, mature ecosystem

Batteries-included setup (no config needed)

❌ Disadvantages of CRA

Slow startup & reload times for big apps

Hard to customize without “ejecting”

Feels outdated compared to newer tools

✅ Advantages of Vite

Extremely fast dev server & hot reload

Simple config & flexible

Modern ecosystem (works great with React, Vue, Svelte, etc.)

Smaller, optimized production builds

❌ Disadvantages of Vite

Newer (fewer legacy tutorials)

Some enterprise teams still prefer CRA for stability/history

Slightly more concepts to learn (ES modules, Rollup, etc.)

What are ES Modules?

**ES Modules (ECMAScript Modules)** are the modern way of organizing JavaScript into reusable files.

* Introduced officially in **ES6 (2015)**.  
* Before that, JS had no built-in module system (people used hacks like CommonJS in Node.js).

👉 Key idea:

* Each file is a **module**.  
* You can `export` stuff from one file and `import` it into another.  
  Example:  
  `// math.js`  
  `export function add(a, b) {`  
    `return a + b;`  
  `}`  
  `// app.js`  
  `import { add } from './math.js';`  
  `console.log(add(2, 3)); // 5`

🔑 Features:

**Static imports** → the browser knows dependencies at parse-time (before running).

**Scoped** → variables inside a module don’t leak globally.

**Tree-shaking friendly** → unused exports can be removed.

What is Rollup?

**Rollup** is a **bundler** — a tool that takes many modules (like your 100 `.js` files) and bundles them into a smaller number of files (often just one).

Why?

* Browsers work fine with ES Modules, but loading **hundreds of small files** one-by-one is slow.  
* Rollup combines them into optimized bundles for production.

👉 Rollup specializes in **ES Modules**:

* Reads your imports/exports  
* Removes unused code (**tree-shaking**)  
* Outputs a single optimized JS file (or a few chunks)

Example:

Input files:

`// utils.js`

`export function add(a, b) { return a + b; }`

`export function subtract(a, b) { return a - b; }`

`// main.js`

`import { add } from './utils.js';`

`console.log(add(5, 2));`

After Rollup build → output:

`function add(a, b) { return a + b; }`

`console.log(add(5, 2));`

👉 Notice: `subtract` was never used, so Rollup **removed it**.

🔑 ES Modules \+ Rollup in Vite

During **development**: Vite doesn’t bundle; it serves each module directly via ES Modules.

During **production build**: Vite uses **Rollup** to bundle everything into optimized files for deployment.

 What is Transpilation?

Transpilation \= **converting one version of code → into another version of the same language.**

* In frontend, it usually means:  
  * Converting **modern JavaScript (ES6+)** → older JavaScript (ES5) so older browsers can run it.  
  * Converting **JSX (React syntax)** → plain JS.  
  * Sometimes also TypeScript → JS.

  🔹 Why is it needed?

* Browsers don’t all support the newest JavaScript features.  
  For example:  
   `const sum = (a, b) => a + b;  // ES6 arrow function`  
   Old browsers don’t understand this, so Babel transpiles it into:  
   `var sum = function(a, b) { return a + b; };`  
* React’s JSX is also **not real JS**, so it must be transpiled:  
   `<h1>Hello</h1>`  
   Becomes:  
   `React.createElement("h1", null, "Hello");`  
    
  🔹 Tools for Transpilation  
* **Babel**  
  * Used by CRA (Create React App).  
  * Very flexible, lots of plugins.  
  * Slower (because it’s written in JS).  
* **ESBuild**  
  * Used by Vite (in dev mode).  
  * Written in Go → super fast.  
  * Handles TypeScript, JSX, modern JS.  
* In **production builds**, Vite still uses Rollup \+ Babel (sometimes) for final compatibility.

  🔑 CRA vs Vite Connection  
* CRA pipeline:  
   **Webpack → Babel → bundled JS**  
   (Slower, older system)  
* Vite pipeline:  
   **ESBuild (dev) → Rollup (prod) → transpiled/bundled JS**  
   (Faster, modern system)

## Day 2 \- 09/05/2025

4. ### Components

   What is a Component?  
   In React, a **component** is the base class for the React components defined as javascript  that produces **UI**.  
   Each component:  
   1. **Takes inputs** (called **props** in React).  
   2. **Returns UI** (JSX that renders to HTML).

   🔹 Types of Components

   **Function Components** (modern, recommended)  
       `function Hello(props) {`

     `return <h1>Hello, {props.name}</h1>;`

   `}`

   * Takes `props` (like method parameters).  
   * Returns JSX (UI).

   **Class Components** (older style, not recommended for new projects)  
      `class Hello extends React.Component {`

     `render() {`

       `return <h1>Hello, {this.props.name}</h1>;`

     `}`

   `}`

👉 Today, **function components \+ hooks** are the standard.

🔹 JSX (JavaScript XML)

Components return **JSX**, which looks like HTML inside JS:  
 `<h1>Hello World</h1>`

* Under the hood, JSX transpiles to plain JS:  
   `React.createElement("h1", null, "Hello World");`  
   Why Components?  
  `Reusable UI blocks.`  
  `Build complex UIs from smaller, reusable pieces.`


5. ### Props

   Props \= Inputs  
   Components get **props** from their parent.  
   Example:  
    `function Welcome(props) {`  
     `return <h1>Hello, {props.name}</h1>;`  
   `}`  
     
   `// usage`  
   `<Welcome name="Alice" />`  
   Here, `name="Alice"` is like **passing an argument**.

   

6. ### State

   What is State?  
* **State \= data managed inside a component.**  
* Unlike `props`, which are read-only, state is **mutable** (can change over time).  
* When state changes → React **re-renders** the component.  
  Example: Counter with State  
  `import { useState } from "react";`  
  `function Counter() {`  
    `// Declare a state variable: count (initial value = 0)`  
    `const [count, setCount] = useState(0);`  
    `return (`  
      `<div>`  
        `<p>You clicked {count} times</p>`  
        `<button onClick={() => setCount(count + 1)}>Click me</button>`  
      `</div>`  
    `);`  
  `}`  
  Breakdown:  
* `useState(0)` → creates a state variable `count` with initial value `0`.  
* `setCount` → function to update it.  
* Each update triggers a **re-render** → UI shows new value.


## Day 3 \- 09/08/2025

1. ### Interface & Types

   Why Interfaces & Types?

In **TypeScript**, you add types to JavaScript. This prevents runtime bugs by checking your code at compile-time.  
 They let you **describe the shape of data** 

🔹 `interface`

* Describes the structure of an object.  
* Extendable (like inheritance).  
  `interface User {`  
    `id: number;`  
    `name: string;`  
    `email?: string; // optional property`  
  `}`  
    
  `const u: User = { id: 1, name: "Alice" };`  
    
  🔹 `type`  
* More flexible: can alias primitives, unions, tuples, etc.  
* Example:  
  `type ID = string | number;  // union type`  
  `type Point = [number, number]; // tuple`  
    
  `type User = {`  
    `id: ID;`  
    `name: string;`  
  `};`  
  


## Day 4 \- 09/09/2025

2. ### Atomic folder structures

    What is Atomic Design in React?

It’s a **component-driven architecture** inspired by chemistry:

You build small, **reusable components** first (atoms),

Combine them into **larger, more complex components** (molecules, organisms),

And finally into **pages** and the full **application**.

#  **The Five Levels**

### **1\. Atoms (Smallest building blocks)**

* Smallest, **indivisible UI components**.

* Think: **button, input, label, icon**.

* Shouldn’t know about business logic.

👉 Example:

`// src/components/atoms/Button.tsx`  
`type ButtonProps = {`  
  `label: string;`  
  `onClick?: () => void;`  
`};`

`export function Button({ label, onClick }: ButtonProps) {`  
  `return <button onClick={onClick}>{label}</button>;`  
`}`

---

### **2\. Molecules (Combination of atoms)**

* Small groups of atoms working together.

* Still **relatively simple** and reusable.

* Example: **Input \+ Label**, **Card with Title \+ Image**.

👉 Example:

`// src/components/molecules/InputField.tsx`  
`import { Button } from "../atoms/Button";`

`type InputFieldProps = {`  
  `label: string;`  
`};`

`export function InputField({ label }: InputFieldProps) {`  
  `return (`  
    `<div>`  
      `<label>{label}</label>`  
      `<input />`  
      `<Button label="Clear" />`  
    `</div>`  
  `);`  
`}`

---

### **3\. Organisms (Complex components)**

* Groups of **molecules \+ atoms** working together.

* Bigger, more feature-rich sections of UI.

* Example: **Navbar**, **Form**, **Product List**.

👉 Example:

`// src/components/organisms/LoginForm.tsx`  
`import { InputField } from "../molecules/InputField";`  
`import { Button } from "../atoms/Button";`

`export function LoginForm() {`  
  `return (`  
    `<form>`  
      `<InputField label="Email" />`  
      `<InputField label="Password" />`  
      `<Button label="Login" />`  
    `</form>`  
  `);`  
`}`

---

### **4\. Templates (Page skeletons)**

* Layouts where organisms/molecules are placed.

* Defines **structure**, not real data.

* Example: A dashboard template with header, sidebar, and content area.

👉 Example:

`// src/components/templates/AuthTemplate.tsx`  
`import { LoginForm } from "../organisms/LoginForm";`

`export function AuthTemplate() {`  
  `return (`  
    `<div className="auth-page">`  
      `<h1>Welcome Back</h1>`  
      `<LoginForm />`  
    `</div>`  
  `);`  
`}`

---

### **5\. Pages (Final concrete UI)**

* Templates **with real data**.

* Represents an actual route/page in the app.

👉 Example:

`// src/pages/LoginPage.tsx`  
`import { AuthTemplate } from "../components/templates/AuthTemplate";`

`export function LoginPage() {`  
  `return <AuthTemplate />;`  
`}`

---

# **🔹 Folder Structure (Atomic)**

`src/`  
 `├── components/`  
 `│    ├── atoms/`  
 `│    │    └── Button.tsx`  
 `│    ├── molecules/`  
 `│    │    └── InputField.tsx`  
 `│    ├── organisms/`  
 `│    │    └── LoginForm.tsx`  
 `│    ├── templates/`  
 `│    │    └── AuthTemplate.tsx`  
 `│    └── pages/`  
 `│         └── LoginPage.tsx`  
 `├── services/      # API calls, business logic`  
 `├── hooks/         # Custom hooks`  
 `├── utils/         # Helpers`  
 `├── assets/        # Images, CSS`  
 `└── App.tsx`

---

# **🔹 Benefits**

✅ **Reusability** → build small, combine into big.  
 ✅ **Scalability** → structure remains clean even for large apps.  
 ✅ **Separation of concerns** → UI layers are clearly defined.  
 ✅ **Team collaboration** → frontend devs can work at different layers without conflicts.

---

# **📝 Cheat Sheet Summary**

* **Atoms** → Basic UI elements (button, input, label).

* **Molecules** → Simple combos of atoms (input \+ button).

* **Organisms** → Complex components (forms, navbar).

* **Templates** → Layout structure (pages without data).

* **Pages** → Actual screens with data.

👉 Folder structure:  
 `atoms → molecules → organisms → templates → pages`

3. ### Controlled vs. Uncontrolled Components

   #  **Controlled vs. Uncontrolled Components**

* **Uncontrolled component** → The DOM (browser) keeps the state of the form/input. React doesn’t know until you “ask” for it (e.g., with refs).

* **Controlled component** → React keeps the state of the form/input, and the DOM just reflects it.

👉 In short:

* **Uncontrolled** \= HTML manages the value.

* **Controlled** \= React’s `state` manages the value.

  ---

  # **🔹 Controlled Component Example**

  `import { useState } from "react";`  
    
  `function ControlledInput() {`  
    `const [value, setValue] = useState("");`  
    
    `return (`  
      `<div>`  
        `<input`  
          `type="text"`  
          `value={value}                   // React controls the input`  
          `onChange={(e) => setValue(e.target.value)} // Update state on every keystroke`  
        `/>`  
        `<p>Current value: {value}</p>`  
      `</div>`  
    `);`  
  `}`  
    
* The `value` prop ties the input directly to React state.

* The `onChange` handler updates React state on each keystroke.

* The UI **re-renders** with the new value → React stays “source of truth.”

  ---

  # **🔹 Uncontrolled Component Example (for contrast)**

  `function UncontrolledInput() {`  
    `const inputRef = useRef<HTMLInputElement>(null);`  
    
    `function handleSubmit() {`  
      ``alert(`You typed: ${inputRef.current?.value}`);``  
    `}`  
    
    `return (`  
      `<div>`  
        `<input type="text" ref={inputRef} />  {/* Browser manages this */}`  
        `<button onClick={handleSubmit}>Submit</button>`  
      `</div>`  
    `);`  
  `}`  
    
* Here, the DOM keeps track of the input value.

* React only gets the value **when asked** (`ref`).

* Easier setup, but React doesn’t “know” what’s happening until submission.

  ---

  # **🔹 Why Use Controlled Components?**

✅ React always knows the latest input value (easier validation, formatting, conditional UI).  
 ✅ Easier to reset inputs (`setValue("")`).  
 ✅ Predictable → UI is a direct reflection of state.  
 ✅ Works great with hooks like `useEffect` (side effects on change).

---

# **🔹 Gotchas**

Controlled components re-render **on every keystroke** → might affect performance for huge forms (optimize later with `debounce` or libraries like `react-hook-form`).

If you forget the `onChange` handler, inputs become **read-only**.

4. ### Tree Structure POC

## Day 5 \- 09/10/2025

## **The Built-in `fetch`**

* **Native** in browsers (no installation needed).

* Returns a **Promise**.

* Example:

`function App() {`  
  `const [users, setUsers] = React.useState([]);`

  `React.useEffect(() => {`  
    `fetch("https://jsonplaceholder.typicode.com/users")`  
      `.then((res) => res.json()) // parse JSON body`  
      `.then((data) => setUsers(data))`  
      `.catch((err) => console.error(err));`  
  `}, []); // [] = run only once (like componentDidMount)`

  `return (`  
    `<ul>`  
      `{users.map((u) => (`  
        `<li key={u.id}>{u.name}</li>`  
      `))}`  
    `</ul>`  
  `);`  
`}`

👉 Things to know:

* You must manually call `.json()` to parse the response.

* No built-in timeout, cancellation, or interceptors.

---

## **🔹 Axios (3rd-party library)**

Install with:

 `npm install axios`

*   
* Cleaner API, automatically parses JSON, has features like interceptors.

* Example:

`import axios from "axios";`  
`import { useState, useEffect } from "react";`

`function App() {`  
  `const [users, setUsers] = useState([]);`

  `useEffect(() => {`  
    `axios.get("https://jsonplaceholder.typicode.com/users")`  
      `.then((res) => setUsers(res.data))`  
      `.catch((err) => console.error(err));`  
  `}, []);`

  `return (`  
    `<ul>`  
      `{users.map((u) => (`  
        `<li key={u.id}>{u.name}</li>`  
      `))}`  
    `</ul>`  
  `);`  
`}`

👉 Extra goodies with Axios:

* Automatically transforms JSON.

* Supports **request/response interceptors** (good for auth).

* Supports **cancellation**.

* Works in both browser \+ Node.js.

## Day 6 & 7 – 09/11/2025 & 12

Tree POC

# Week \- 2

## Day 8 & 9 – 09/15/2025 & 16

1. useState, useEffect and useContext lifecycles, child scope, parent scope and state management.

   ## **What `useState` is (conceptually)**

* `useState` gives a component **local, persistent piece of state** across renders.  
* It returns a tuple: `[stateValue, setState]`.  
* The state value is preserved between renders for that *component instance* (each instance gets its own state).  
* Calling the setter schedules React to re-render that component with the new state.

  ## **The API (basic)**

  `const [count, setCount] = useState(0);            // initial 0`  
  `const [user, setUser] = useState(null);          // initial null`  
  `const [items, setItems] = useState(() => heavyInit()); // lazy initializer`


Setter forms:

* `setState(newValue)` — replace with `newValue`.  
* `setState(prev => next)` — functional update; receives latest previous value and returns new value.

**Important:** `useState` replaces the value (it does **not** shallow-merge like class `setState`).

## **How it works (mechanics & lifecycle)**

On **first render**: React calls the initializer (if provided) and stores that state for the component instance.

On **re-renders**: the same state value is returned; React preserves it.

When you call `setState`, React:

1. Schedules a state update.  
   2. On the next render pass, the component sees the updated value.  
   3. React may **batch** multiple updates into a single render (automatic batching in React 18+).  
      State is **not** persisted across unmounts. To persist across sessions, use `localStorage` or backend.  
        
      Context (global-ish state within a subtree)

React’s `useContext` allows you to create a **shared state** available to multiple components, without manually passing props at every level.

### **Example:**

`const ThemeContext = React.createContext("light");`

`function Child() {`

  `const theme = React.useContext(ThemeContext);`

  `return <p>Theme is {theme}</p>;`

`}`

`function Parent() {`

  `return (`

    `<ThemeContext.Provider value="dark">`

      `<Child />`

    `</ThemeContext.Provider>`

  `);`

`}`

* `ThemeContext.Provider` provides the value `"dark"`.

* Any nested component that calls `useContext(ThemeContext)` can access `"dark"`, even without props.

✅ **Advantages**:

* Avoids prop drilling.

* Perfect for data that’s **global in nature** (theme, auth user, language, settings).

❌ **Disadvantages**:

* Can hide where data comes from (less explicit than props).

* If the context value changes, **all consuming components re-render** (performance concern).

* Overuse leads to tangled state logic → harder to maintain.

  # **🔎 What is `useEffect`?**

* `useEffect` lets you **run side effects** in function components.

* A **side effect** \= anything outside React’s pure rendering:

  * Data fetching (API calls).

  * Subscribing/unsubscribing (WebSocket, event listeners).

  * Manually changing DOM (rare in React).

  * Syncing state with `localStorage`.

* Without `useEffect`, your React component would only be able to render UI from props/state — no outside interactions.

  ---

  # **🛠️ API**

  `useEffect(() => {`

    `// side effect code here`

    `return () => {`

      `// cleanup code (optional)`

    `};`

  `}, [dependencies]);`


* **Effect function**: runs after render.

* **Cleanup function**: runs before the component unmounts or before re-running the effect.

* **Dependencies array**: tells React *when* to run the effect.

  ---

  # **🕒 Lifecycle Mapping**

Think of `useEffect` as replacement for **class lifecycle methods**:

| Class Component | Function Component (useEffect) |
| ----- | ----- |
| `componentDidMount` | `useEffect(fn, [])` → runs **once after mount** |
| `componentDidUpdate` | `useEffect(fn, [dep])` → runs when `dep` changes |
| `componentWillUnmount` | `return () => {}` inside `useEffect` |

2. Likes App POC  
   

Day 4 – 09/17/2025

1. Debouncing and custom hooks

   # **🔎 What is a Custom Hook?**

* A **custom hook** is just a **JavaScript function** whose name starts with `use` (React enforces this).

* It **uses built-in hooks** (`useState`, `useEffect`, etc.) inside it.

* Goal: **extract reusable logic** from components into functions.

👉 They don’t render anything (unlike components). They just **return state or behavior**

# **🛠 Why Custom Hooks?**

**Code reuse**

1. Instead of duplicating `useState` \+ `useEffect` code across components, put it in one place.

   **Separation of concerns**

   2. UI code (JSX) stays clean, logic lives in hooks.

   **Testability**

   3. Easier to unit-test logic without rendering UI.

   **Composition**

   4. Hooks can call other hooks → small, composable building blocks.

   # **⚡ Key Rules of Custom Hooks**

   **Must start with `use`**

   5. Otherwise React won’t enforce hook rules properly.

   6. Example: ✅ `useAuth`, ❌ `getAuth`.

   **Follow Hook rules inside**

   7. Only call hooks at top-level (not in loops, conditions).

   8. Only call hooks inside React functions (components or custom hooks).

   **Return values**

   9. A custom hook can return any shape: primitive, array, object.

   10. Convention: return objects for multiple values.

   

2. Debouncing POC

# **🔎 What is Debouncing?**

**Debouncing** is a technique where you delay the execution of a function until a certain amount of time has passed **without new events happening**.

👉 Example in real life:

* Imagine you’re typing into Google search.

* Without debouncing → every keystroke \= new API request (huge performance issue 🚨).

* With debouncing → API request only fires **after you stop typing for, say, 500ms**.

So **debounce \= wait until the user pauses**.

---

# **🛠 Why Do We Need a Debounce Hook?**

* To **reduce unnecessary API calls**.

* To **improve performance** by ignoring intermediate, useless state changes.

* To **improve UX** → no flickering, smoother autocomplete/search.

---

# **📦 Debounce Hook in React**

The classic hook is called `useDebounce`.  
 It takes a **value** and a **delay**, and returns a debounced value that only updates after the delay.

`import { useState, useEffect } from "react";`

`function useDebounce(value, delay) {`  
  `const [debouncedValue, setDebouncedValue] = useState(value);`

  `useEffect(() => {`  
    `// Start a timer whenever value changes`  
    `const handler = setTimeout(() => {`  
      `setDebouncedValue(value);`  
    `}, delay);`

    `// Clear timer if value changes before delay ends`  
    `return () => {`  
      `clearTimeout(handler);`  
    `};`  
  `}, [value, delay]);`

  `return debouncedValue;`  
`}`

 09/19/2025

1. Routing and nested routing

### Routing

Routing is an essential concept in Single Page Applications (SPA). When your application is divided into separated logical sections, and all of them are under their own URL, your users can easily share links among each other.

2. AG Grid