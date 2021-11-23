<script lang="ts">
import CounterForm from './Counter.svelte'
import SubmitHandleForm from './SubmitHandleForm.svelte'

let name: string = 'world'
</script>

<h1 class="red">Hello {name}!</h1>
<CounterForm />
<SubmitHandleForm />

<style>
.red {
  color: red;
}
</style>
