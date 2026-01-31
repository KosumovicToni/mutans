<script lang="ts">
  import { slide } from "svelte/transition";
  let { sub, display = $bindable() } = $props();
</script>

<div
  transition:slide={{ duration: 200 }}
  class="absolute left-0 mt-2 w-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 z-50"
>
  {#each sub as subItem}
    <a
      href={subItem.href}
      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      onclick={() => (display = false)}
    >
      {subItem.name}
    </a>
  {/each}
</div>
