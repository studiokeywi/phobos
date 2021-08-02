<small>[< Back](../README.md)</small>

# DOM API

## Constants

<dl>
<dt><a href="#inputEvent">inputEvent</a></dt>
<dd><p>Generic use <code>InputEvent</code> (used in <code>DOMTools.input</code>)</p>
</dd>
<dt><a href="#DOMTools">DOMTools</a></dt>
<dd><p>Creates a utlity object that assists in common DOM interactions</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#$">$(qs)</a></dt>
<dd><p>Shorthand for <code>HTMLElement.querySelector(qs)</code></p>
</dd>
<dt><a href="#$$">$$(qs)</a></dt>
<dd><p>Shorthand for <code>HTMLElement.querySelectorAll(qs)</code></p>
</dd>
<dt><a href="#click">click(qs)</a></dt>
<dd><p>Shorthand for <code>HTMLElement.click()</code>. Runs on the DOMTools target if no value found</p>
</dd>
<dt><a href="#input">input(qs)</a></dt>
<dd><p>Simulates changing the <code>bind:value</code> of an Svelte reactive input field. Runs on the DOMTools target if no value found</p>
</dd>
<dt><a href="#html">html(qs)</a></dt>
<dd><p>Returns the <code>.innerHTML</code> of an element. Returns the DOMTools target if no value found</p>
</dd>
<dt><a href="#text">text(qs)</a></dt>
<dd><p>Returns the <code>.textContent</code> of an element. Returns the DOMTools target if no value found</p>
</dd>
</dl>

<a name="inputEvent"></a>

## inputEvent

Generic use `InputEvent` (used in `DOMTools.input`)

**Kind**: global constant
<a name="DOMTools"></a>

## DOMTools

Creates a utlity object that assists in common DOM interactions

**Kind**: global constant

| Param  | Type                     |
| ------ | ------------------------ |
| target | <code>HTMLElement</code> |

<a name="$"></a>

## $(qs)

Shorthand for `HTMLElement.querySelector(qs)`

**Kind**: global function

| Param | Type                |
| ----- | ------------------- |
| qs    | <code>String</code> |

<a name="$$"></a>

## $$(qs)

Shorthand for `HTMLElement.querySelectorAll(qs)`

**Kind**: global function

| Param | Type                |
| ----- | ------------------- |
| qs    | <code>String</code> |

<a name="click"></a>

## click(qs)

Shorthand for `HTMLElement.click()`. Runs on the DOMTools target if no value found

**Kind**: global function

| Param | Type                |
| ----- | ------------------- |
| qs    | <code>String</code> |

<a name="input"></a>

## input(qs)

Simulates changing the `bind:value` of an Svelte reactive input field. Runs on the DOMTools target if no value found

**Kind**: global function

| Param | Type                |
| ----- | ------------------- |
| qs    | <code>String</code> |

<a name="html"></a>

## html(qs)

Returns the `.innerHTML` of an element. Returns the DOMTools target if no value found

**Kind**: global function

| Param | Type                |
| ----- | ------------------- |
| qs    | <code>String</code> |

<a name="text"></a>

## text(qs)

Returns the `.textContent` of an element. Returns the DOMTools target if no value found

**Kind**: global function

| Param | Type                |
| ----- | ------------------- |
| qs    | <code>String</code> |
