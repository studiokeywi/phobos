/** Resolves a Promise in a set amount of time according to the processing rules of `setTimeout`
 * @param {Number} ms */
export const delay = ms => new Promise(r => setTimeout(r, ms));
/** Resolves a Promise as soon as possible according to the processing rules of `requestAnimationFrame` */
export const tick = () => new Promise(r => requestAnimationFrame(r));
