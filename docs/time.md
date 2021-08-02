<small>[< Back](../README.md)</small>

# Time API

## Constants

<dl>
<dt><a href="#delay">delay</a></dt>
<dd><p>Resolves a Promise in a set amount of time according to the processing rules of <code>setTimeout</code></p>
</dd>
<dt><a href="#tick">tick</a></dt>
<dd><p>Resolves a Promise as soon as possible according to the processing rules of <code>requestAnimationFrame</code></p>
</dd>
</dl>

<a name="delay"></a>

## delay

Resolves a Promise in a set amount of time according to the processing rules of `setTimeout`

**Kind**: global constant

| Param | Type                |
| ----- | ------------------- |
| ms    | <code>Number</code> |

<a name="tick"></a>

## tick

Resolves a Promise as soon as possible according to the processing rules of `requestAnimationFrame`

**Kind**: global constant
