/// node_modules/svelte/internal/index.d.ts
/** @typedef {SvelteComponent} SvelteComponent */

// SECTION: hooks/lifecycle
/**Mount a given Svelte Component to a target, append the target to `document.body`, and return references to both
 * @param {SvelteComponent} Component
 * @param {Object} props
 * @param {HTMLElement} target */
export const mount = (Component, props = {}, target = document.createElement('div')) => {
  document.body.appendChild(target);
  return { component: new Component({ target, props }), target };
};
/**Unmount a given instance of a Svelte Component and remove it's container from the `document`
 * @param {Object} config
 * @param {Object} config.component
 * @param {HTMLElement} config.target */
export const unmount = ({ component, target }) => {
  component.$destroy();
  target.remove();
};

// SECTION: exports
// SUBSECTION: test runners
/**Test wrapper to handle mounting and unmounting a Svelte Component before and after test execution
 * @param {Object} config
 * @param {SvelteComponent} config.Component
 * @param {Object} config.props
 * @param {Function} test */
export const runComponentTest = async ({ Component, props }, test) => {
  const mountedComponent = mount(Component, props);
  await test(mountedComponent);
  unmount(mountedComponent);
  return true;
};
/**Simple component instantiation test (compares a given Component's `name` to the `name` of the component created)
 * @param {SvelteComponent} Component
 * @param {Object} t Luna `t` object*/
export const newComponentTest = (Component, t) => {
  const create = ({ component }) => {
    t.assert(component.constructor.name === Component.name, `${Component.name} was instantiated`);
  };
  return runComponentTest({ Component }, create).then(() => {
    return true;
  });
};
