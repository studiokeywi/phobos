/** Generic use `InputEvent` (used in `DOMTools.input`) */
const inputEvent = new InputEvent('input');

/**Creates a utlity object that assists in common DOM interactions
 * @param {HTMLElement} target */
export const DOMTools = target => ({
  /**Shorthand for `HTMLElement.querySelector(qs)`
   * @param {String} qs */
  $(qs) {
    return qs ? target.querySelector(qs) : target;
  },
  /**Shorthand for `HTMLElement.querySelectorAll(qs)`
   * @param {String} qs */
  $$(qs) {
    return [...target.querySelectorAll(qs)];
  },
  /**Shorthand for `HTMLElement.click()`. Runs on the DOMTools target if no value found
   * @param {String?} qs */
  click(qs) {
    const ele = this.$(qs);
    if (ele && ele.click) ele.click();
  },
  /**Simulates changing the `bind:value` of an Svelte reactive input field. Runs on the DOMTools target if no value found
   * @param {String?} qs */
  input(qs, value) {
    const ele = this.$(qs);
    if (ele) {
      ele.value = value;
      return ele.dispatchEvent(inputEvent);
    }
  },
  /**Returns the `.innerHTML` of an element. Returns the DOMTools target if no value found
   * @param {String?} qs */
  html(qs) {
    const ele = this.$(qs);
    if (ele) return ele.innerHTML;
  },
  /**Returns the `.textContent` of an element. Returns the DOMTools target if no value found
   * @param {String?} qs */
  text(qs) {
    const ele = this.$(qs);
    if (ele) return ele.textContent;
  },
});
