<script lang="ts">
$: v = 0

async function f(): Promise<number> {
  return v + 1
}

async function submitHandle(
  evt: Event & {
    currentTarget: EventTarget & HTMLFormElement
  }
) {
  evt.preventDefault()
  const result = await f()
  console.log('result', result)
}

let inputValue = ''
</script>

<form on:submit="{submitHandle}">
  <p>{v} - {inputValue}</p>

  <input type="text" bind:value="{inputValue}" />
  <button type="submit">update</button>
</form>
