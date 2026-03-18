<script lang="ts">
  import Dropdown from "./Dropdown.svelte";

  let { item, i, display = $bindable(), index = $bindable() } = $props();

  const toggleMenu = () => {
    if (!(display && index != i)) display = !display;
    index = i;
  };
</script>

<div class="relative inline-block">
  {#if item.sub.length > 0}
    <button
      class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center"
      onclick={() => toggleMenu()}
      aria-expanded={display && index == i}
      aria-haspopup="true"
    >
      {item.name}
      <span
        class="ml-1 text-xs opacity-50 transition-transform duration-200 {display &&
        index == i
          ? 'rotate-180'
          : ''}">▼</span
      >
    </button>
  {:else}
    <a
      href={item.href}
      class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center"
    >
      {item.name}
    </a>
  {/if}

  {#if display && index == i && item.sub.length > 0}
    <div class="absolute left-0 top-full z-50">
      <Dropdown bind:display sub={item.sub}></Dropdown>
    </div>
  {/if}
</div>
