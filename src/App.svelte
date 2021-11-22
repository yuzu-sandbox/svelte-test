<script lang="ts">
  import CounterForm from './Counter.svelte'

  let name: string = 'world'
</script>

<h1 class="red">Hello {name}!</h1>
<CounterForm />

<style>
  .red {
    color: red;
  }
</style>