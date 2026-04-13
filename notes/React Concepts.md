### 1. React Architecture

React works with **components** to create small, reusable building blocks and compose the UI from them. Different components handle different data and logic - allowing separation of concerns.

> [!IMPORTANT]
Structure of React applications: *index.html* &rarr; contains *main.tsx* script &rarr; renders *App.tsx*

React uses **.jsx** (or **.tsx**) files, which are JavaScript Syntax Extension files, to describe and create HTML elements in JS in a declarative way. Within .jsx files are React components, which are simply JS functions. Functional components are declared in App.tsx to render in the web page.

The App.tsx file (the root component) can contain nested components to form a **component tree** that is rendered by React. These nested components are converted to a DOM node tree to render as DOM nodes (HTML elements).

**Functional components** must follow two rules:
* The function must start with an uppercase character, and multi-word names should be written in PascalCase.
* The function must return a value that can be rendered by React (typically the to-be-rendered HTML markup).

> [!NOTE]
The .jsx file extention works only because we are working in a React project that supports this special extension. It "tells" the underlying build process that a file contains JSX code. It depends on the underlying build process which extension is expected when using JSX syntax in a file.

---

### 2. React Concepts

Fundamental React concepts:
1. We can output **dynamic content** in JSX by including curly braces **{ }** within JSX code.
2.  We can also build and reuse components by configuring them with **props** - that is, passing configuration data into components as parameters to define the internal logic and JSX code that should be rendered.

