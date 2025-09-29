# Week - 2

## Day 8 & 9 – 09/15/2025 & 16

1. useState, useEffect and useContext lifecycles, child scope, parent scope and state management.

## What `useState` is (conceptually)

* `useState` gives a component **local, persistent piece of state** across renders.  
* It returns a tuple: `[stateValue, setState]`.  
* The state value is preserved between renders for that *component instance* (each instance gets its own state).  
* Calling the setter schedules React to re-render that component with the new state.

## The API (basic)

 `const [count, setCount] = useState(0);            // initial 0`  
 `const [user, setUser] = useState(null);          // initial null`  
 `const [items, setItems] = useState(() => heavyInit()); // lazy initializer`

Setter forms:

* `setState(newValue)` — replace with `newValue`.  
* `setState(prev => next)` — functional update; receives latest previous value and returns new value.

**Important:** `useState` replaces the value (it does **not** shallow-merge like class `setState`).

## How it works (mechanics & lifecycle)

On **first render**: React calls the initializer (if provided) and stores that state for the component instance.

On **re-renders**: the same state value is returned; React preserves it.

When you call `setState`, React:

1. Schedules a state update.  
2. On the next render pass, the component sees the updated value.  
3. React may **batch** multiple updates into a single render (automatic batching in React 18+).  
   State is **not** persisted across unmounts. To persist across sessions, use `localStorage` or backend.  
    
   Context (global-ish state within a subtree)

React’s `useContext` allows you to create a **shared state** available to multiple components, without manually passing props at every level.

### Example:

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

* A **side effect** = anything outside React’s pure rendering:

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

1. Instead of duplicating `useState` + `useEffect` code across components, put it in one place.

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

* Without debouncing → every keystroke = new API request (huge performance issue 🚨).

* With debouncing → API request only fires **after you stop typing for, say, 500ms**.

So **debounce = wait until the user pauses**.

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
