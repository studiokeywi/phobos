import { mount, newComponentTest, runComponentTest, unmount } from '../util/components.js';
import Dummy from './Dummy.svelte';

// Test helpers
const dummy = { Component: Dummy };

// UTILITY: Mount/Unmount
export function testMountingWorks(t) {
  const mounted = mount(Dummy);
  t.assert(mounted);
  const { target, component } = mounted;
  t.assert([...document.body.children].includes(target));
  t.assert(target instanceof HTMLDivElement);
  t.assert(component instanceof Dummy);
  t.assert(component.$$.ctx.length);
}
export function testUnmountingWorks(t) {
  const { component, target } = mount(Dummy);
  unmount({ component, target });
  t.assert(component.$$.ctx.length === 0);
  t.assert(![...document.body.children].includes(target));
}

// HELPER: New Component Test
export async function testNewComponentTestFnAsync(t) {
  await newComponentTest(Dummy, t);
}
export function testNewComponentTestFnSync(t) {
  newComponentTest(Dummy, t).then(ran => {
    t.assert(ran === true);
  });
}

// HELPER: Run Component Test
export async function testRunComponentTestFnAsync(t) {
  const test = async ({ target }) => {
    t.assert(target.innerHTML === '<button>BTN</button> <span><input>0</span>');
  };
  const ran = await runComponentTest(dummy, test);
  t.assert(ran === true);
}
export function testRunComponentTestFnSync(t) {
  const test = ({ target }) => {
    t.assert(target.innerHTML === '<button>BTN</button> <span><input>0</span>');
  };
  runComponentTest(dummy, test).then(ran => {
    t.assert(ran === true);
  });
}
