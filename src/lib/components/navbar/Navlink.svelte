<script lang="ts">
  import Dropdown from "./Dropdown.svelte";

  let { item, i, display = $bindable(), index = $bindable() } = $props();

  const toggleMenu = () => {
    if (!(display && index != i)) display = !display;
    index = i;
  };
</script>

<div class="relative">
  <button
    class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
    onclick={() => toggleMenu()}
  >
    <a href={item.href}>
      {item.name}
    </a>
    {#if item.sub.length > 0}
      <span class="ml-1 text-xs opacity-50">▼</span>
    {/if}
  </button>
  {#if display && index == i && item.sub.length > 0}
    <Dropdown sub={item.sub}></Dropdown>
  {/if}
</div>
