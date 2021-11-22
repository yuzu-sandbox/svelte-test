<script lang="ts">
  $: count = 0

  function increment(event: MouseEvent) {
    event.preventDefault()
    count++
  }
</script>

<div>
  <p>{count}</p>
  <button on:click={increment}>+1</button>
</div>