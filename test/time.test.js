import { delay, tick } from '../util/time.js';

// Test helpers
const approximately =
  (target, epsilon = target / 10) =>
  value => {
    const [lo, hi] = [-epsilon, epsilon].map(mod => value + mod);
    return lo <= target && target <= hi;
  };

// HELPER: Delay
export async function testDelay(t) {
  const epsilon = 15;
  const time = 150;
  const inRange = approximately(time, epsilon);
  const start = Date.now();
  await delay(time);
  t.assert(inRange(Date.now() - start));
}
export async function testTick(t) {
  const start = Date.now();
  await tick();
  t.assert(approximately(1, 1)(Date.now() - start));
}
