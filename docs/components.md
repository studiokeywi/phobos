<small>[< Back](../README.md)</small>

# Components API

## Constants

<a name="SvelteComponent"></a>

<dl>
<dt><a href="#mount">mount</a></dt>
<dd><p>Mount a given Svelte Component to a target, append the target to <code>document.body</code>, and return references to both</p>
</dd>
<dt><a href="#unmount">unmount</a></dt>
<dd><p>Unmount a given instance of a Svelte Component and remove it&#39;s container from the <code>document</code></p>
</dd>
<dt><a href="#runComponentTest">runComponentTest</a></dt>
<dd><p>Test wrapper to handle mounting and unmounting a Svelte Component before and after test execution</p>
</dd>
<dt><a href="#newComponentTest">newComponentTest</a></dt>
<dd><p>Simple component instantiation test (compares a given Component&#39;s <code>name</code> to the <code>name</code> of the component created)</p>
</dd>
</dl>

## mount

Mount a given Svelte Component to a target, append the target to `document.body`, and return references to both

**Kind**: global constant

| Param     | Type                                             |
| --------- | ------------------------------------------------ |
| Component | [<code>SvelteComponent</code>](#SvelteComponent) |
| props     | <code>Object</code>                              |
| target    | <code>HTMLElement</code>                         |

<a name="unmount"></a>

## unmount

Unmount a given instance of a Svelte Component and remove it's container from the `document`

**Kind**: global constant

| Param            | Type                     |
| ---------------- | ------------------------ |
| config           | <code>Object</code>      |
| config.component | <code>Object</code>      |
| config.target    | <code>HTMLElement</code> |

<a name="runComponentTest"></a>

## runComponentTest

Test wrapper to handle mounting and unmounting a Svelte Component before and after test execution

**Kind**: global constant

| Param            | Type                                             |
| ---------------- | ------------------------------------------------ |
| config           | <code>Object</code>                              |
| config.Component | [<code>SvelteComponent</code>](#SvelteComponent) |
| config.props     | <code>Object</code>                              |
| test             | <code>function</code>                            |

<a name="newComponentTest"></a>

## newComponentTest

Simple component instantiation test (compares a given Component's `name` to the `name` of the component created)

**Kind**: global constant

| Param     | Type                                             | Description     |
| --------- | ------------------------------------------------ | --------------- |
| Component | [<code>SvelteComponent</code>](#SvelteComponent) |                 |
| t         | <code>Object</code>                              | Luna `t` object |
