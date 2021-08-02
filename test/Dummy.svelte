<script>
  const click = () => (count += 1);
  let count = 0;
  let value = '';
</script>

<button on:click={click}>BTN{value}</button>
<span><input bind:value />{count}</span>
