<script lang="ts">
  import Dropdown from "./Dropdown.svelte";

  let { item, i, display = $bindable(), index = $bindable() } = $props();

  const toggleMenu = () => {
    if (!(display && index != i)) display = !display;
    index = i;
  };
</script>

<div class="relative inline-block h-full">
  {#if item.sub.length > 0}
    <button
      class="text-slate-50 hover:text-space-accent px-3 py-2 rounded-md text-sm font-medium transition-all inline-flex items-center h-full hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
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
      class="text-slate-50 hover:text-space-accent px-3 py-2 rounded-md text-sm font-medium transition-all inline-flex items-center h-full hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
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
