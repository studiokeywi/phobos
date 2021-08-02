<!-- links -->

[svelte]: https://svelte.dev
[luna]: https://github.com/ccampbell/luna-testing
[blog post]: https://itnext.io/introducing-luna-javascript-testing-done-right-437a738cc1ed
[esm]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[puppeteer]: https://github.com/puppeteer/puppeteer/
[components api]: ./docs/components.md
[dom api]: ./docs/dom.md
[time api]: ./docs/time.md

<!--  -->

# phobos

phobos is a set of helper functions meant to be used in conjunction with [Svelte] and [Luna].

## I've heard of Svelte, but Luna..?

Me either -- until I stumbled across their GitHub repo and their [blog post]. For my purposes, this is ticking all the boxes for a front-end/component testing framework -- it should support modern JS (in the form of [ESM]), it shouldn't have to shim/polyfill browser behavior on node (Luna utilizes [Puppeteer] for proper in-browser execution), and it should be low hassle to start using (in Luna's own words, it _"has no configuration options or plugins. ... it will not work for every use case, but it is designed to work very well in many cases"_)

I created phobos as a way to wrap up what I felt were commonly used behaviors when testing my own projects (and in the spirit of Luna, phobos is tested with Luna itself)

## Getting Started

Find your Svelte project of choice, and make sure you have Luna installed. Then you can add phobos to your dev dependencies:  
`npm i -D @studiokeywi/phobos`

Inside your test files, you can then import any phobos helper function as required. Then, you can use your components and helper function(s) inside your Luna tests:

**/lib/components/Dummy.svelte**

```svelte
<p>dummy</p>
```

**/test/test.js**

```js
import { runComponentTest, DOMTools } from '@studiokeywi/phobos';
import Dummy from '../lib/components/Dummy.svelte';

const component = { Component: Dummy };

export function testDummy(t) {
  const test = ({ target }) => {
    const DOM = DOMTools(target);
    t.assert(target.html() === '<p>dummy</p>');
  };
  runComponentTest(component, test);
}
```

## API

[Components API]

[DOM API]

[Time API]
