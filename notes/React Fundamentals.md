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
3. React sets a default **children** prop - which refers to the content between our component tags (component composition). This is accessible via React's default prop or through object destructuring of the default prop.
4. There are built-in **event listeners** (e.g. onClick for button elements) that we can use to react to events; we provide a function that should be executed when the event occurs.
5. Component functions only execute once. To update the UI, we must use React **hooks** (e.g. useState) to tell React that some data has changed and to re-execute the component function.

---

### 3. React Essentials

General guidelines when building React projects:

* We can generally split components by **features** or **states**. Separation of components by states prevents unnecessary re-rendering of other components that are not tied to the respective states.
* The **rest operator (...)** can be used to forward props that are received when using a component. These forwarded props can then be used in our components. This is useful when building wrapper components.


``` javascript
<Section title="Examples" id="section-styling">
  // child components
</Section>

function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}
```

* We can **pass JSX codes as props to wrapper components** - instead of including them inside components - to maintain our states outside of these components and increase their reusability. This includes setting component types dynamically.

``` javascript
<Tabs
  buttonsContainer={myComponent} // use string for built-in html elements (e.g. "menu")
  buttons={
    <>
      <TabButton
        isSelected={selectedTopic}
        isSelected={selectedTopic}
        onClick={() => handleSelect('components')}>Components</TabButton>
      <TabButton
        isSelected={selectedTopic}
        onClick={() => handleSelect('states')}>States</TabButton>
    </>
  }
>
  {tabContent}
</Tabs>

function Tabs({ children, buttons, buttonsContainer }) {
  const ButtonsContainer = buttonContainer; // dynamically passed component
  return (
    <>
      <ButtonsContainer>
        {buttons}
      </ButtonsContainer>
      {children}
    </>
  )
}
```

