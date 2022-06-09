# React: The Big Picture
https://app.pluralsight.com/library/courses/react-big-picture/table-of-contents

## Why use it
* Flexibilty
   * Cross platform; browser support
   * Less opinionated that Angular, Ember, etc.; library not a framework (strangler pattern)
   * Web apps, static sites (Gatsby), mobile apps, desktop (Electron)
   * Server side rendings (Next.js)
   * VR capabilities
   * Renderer changes based on environment

* DevEx
   * API is simple, easy to learn
   * JSX merges HTML in JS and generates JS to create elements
   * Doesn't have HTML extensions (`*ngFor`, `v-for`, etc.), uses JS to render
   * `create-react-app` tooling; makes kicking debugger easy

* Performance
   * Virutal DOM reduces layout thrash and resource consequences
   * Small library size

* Testing
   * Less configuration required
   * No browser required -> faster
   * Jest is great (I do like Jest)

* Other
   * Many large (and not so large) organizations use React; paid dev staff at FB
   * Breaking changes usually include automatic fixes (codemods) to reduce update complexity
   * Popularity means lots of contributors and people supporting, writing about, tutorialing, etc.
   * Many free component libraries so you don't need to build your own

## Tradeoffs
* Framework vs. library
   * Opinionated frameworks reduce decisions and promote consistency
   * Library is lighter weight
   * Harder to integrate framework bit by bit (all or nothing)
   * Framework includes more pieces by default; library requires you to pick from other options

* Concise vs. explicit
   * Many frameworks do two way binding keeps data in sync with less code
   * React does one way binding, requires more code to handle changes; more explicit and allows more control (transformation, validation)
   * Two way is doable with React, many frameworks also support one way binding

* Template centric vs. JS centric
   * Template centric frameworks use custom HTML syntax to mix in their features
   * JS centric React puts HTML in JS instead
   * `<p *ngIf="isOk">OK</p>` in a template vs `{isOk && <p>OK</h1>}` in React
   * `<p *ngFor="let i of list">{{i}}</p>` vs `list.map(i => <p>{i}</p>)`
   * `<button (click)="ok()">OK</button>` vs `<button onClick={ok}>OK</button>`
   * So, question is if you prefer template language vs. HTML in JS and JS features (or amount of new syntax to learn)

* Separate vs. single file
   * Some frameworks separate HTML template from JS code (Vue doesn't)
   * React puts everything in one file
   * Different philosophy of separation of concerns -- vertical slice vs. horizontal slice

* Standard vs. nonstandard
   * HTML 5 web components have weak support in browsers
   * Polyfills required; not as well supported as a framework/library like React
   * FW/lib offer more flexibility and capability than standards
   * FW/lib aren't bound to a web browser, can build native applications for mobile/desktop

* Community vs. corporate
   * React has corporate backing, which may not meet everyone's needs (FB's needs come first) but guarantees support
   * Large community means some non-FB features may be developed by the community

## Concerns, issues, objections
* JSX is similar to HTML, but isn't exactly HTML
   * Compiles down to JS
   * Changes usually aren't huge; tools available if you can't do find/replace

* Build step required to compile JSX
   * Build steps are common

* Version conflicts
   * Can't mix React versions on a single page
   * Codemods mean upgrading isn't hard

* Old resources online
   * Because React has been around for a while, some results (often popular) may refer to outdated practices
   * I find this is common for others too
   * Ensure you're looking at recent examples

* Decision fatigue
   * React doesn't make many decisions for you so you need to make more on your own

* Key choices
   * Use a boilerplate or `create-react-app` -- most people use the latter
   * Functions vs. classes -- most people use functions
   * Types -- PropTypes if you don't know TS, TS if you do (TS is very popular in React)
      * PropTypes checks at runtime
      * TypeScript checks at compile time 
      * Flow checks when you run Flow
   * State management
      * Plain React -- component state -- adequate for many cases
      * Flux -- early centralized state
      * Redux -- more popular centralized state, immutable store
      * MobX -- observable state
   * Styling -- use what you know