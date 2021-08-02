import { runComponentTest } from '../util/components.js';
import { DOMTools } from '../util/dom.js';
import { tick } from '../util/time.js';
import Dummy from './Dummy.svelte';

// Test helpers
const dummy = { Component: Dummy };
const eventHandler = t =>
  function () {
    t.assert(true);
  };

// HELPER: DOM query select
export function testDOMTools$and$$(t) {
  const test = ({ target }) => {
    const DOM = DOMTools(target);
    const button = DOM.$('button');
    t.assert(button !== null && button !== target);
    const elements = DOM.$$('*');
    t.assert(elements.length === 3);
  };
  runComponentTest(dummy, test);
}

// HELPER: DOM click (targeted)
export async function testDOMToolsClickTargeted(t) {
  const test = async ({ target }) => {
    const DOM = DOMTools(target);
    const button = DOM.$('button');
    button.addEventListener('click', eventHandler);
    DOM.click('button');
    await tick();
    t.assert(DOM.html() === '<button>BTN</button> <span><input>1</span>');
  };
  await runComponentTest(dummy, test);
}
export async function testDOMToolsClickContainer(t) {
  const test = async ({ target }) => {
    const DOM = DOMTools(target);
    target.addEventListener('click', eventHandler);
    DOM.click();
    await tick();
  };
  await runComponentTest(dummy, test);
}

// HELPER: DOM input
export async function testDOMToolsInputTargeted(t) {
  const test = async ({ target }) => {
    const DOM = DOMTools(target);
    const input = DOM.$('input');
    input.addEventListener('change', eventHandler);
    DOM.input('input', 'Foo bar Baz');
    await tick();
    t.assert(input.value === 'Foo bar Baz');
  };
  await runComponentTest(dummy, test);
}
export async function testDOMToolsInputContainer(t) {
  const test = async ({ target }) => {
    const DOM = DOMTools(target);
    target.addEventListener('change', eventHandler);
    DOM.input('', 'Foo bar Baz');
    await tick();
    const value = target.value;
    t.assert(value === 'Foo bar Baz');
  };
  await runComponentTest(dummy, test);
}

// HELPER: DOM innerHTML
export function testDOMToolsHTMLTargeted(t) {
  const test = ({ target }) => {
    const DOM = DOMTools(target);
    t.assert(DOM.html('button') === 'BTN');
  };
  runComponentTest(dummy, test);
}
export function testDOMToolsHTMLContainer(t) {
  const test = ({ target }) => {
    t.assert(DOMTools(target).html() === '<button>BTN</button> <span><input>0</span>');
  };
  runComponentTest(dummy, test);
}

// HELPER: DOM textContent
export function testDOMToolsTextTargeted(t) {
  const test = ({ target }) => {
    const DOM = DOMTools(target);
    t.assert(DOM.text('button') === 'BTN');
  };
  runComponentTest(dummy, test);
}
export function testDOMToolsTextContainer(t) {
  const test = ({ target }) => {
    t.assert(DOMTools(target).text() === 'BTN 0');
  };
  runComponentTest(dummy, test);
}
