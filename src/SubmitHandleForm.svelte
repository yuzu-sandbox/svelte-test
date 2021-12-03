<script lang="ts">
let v = 0

async function f() {
  return v + 1
}

async function submitHandle() {
  const result = await f()
  console.log('result', result)
  v = result
}

let inputValue = ''
</script>

<form on:submit|preventDefault="{submitHandle}">
  <p>{v} - {inputValue}</p>

  <input type="text" bind:value="{inputValue}" />
  <button type="submit">update</button>
</form>
