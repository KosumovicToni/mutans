<script lang="ts">
  import { slide } from "svelte/transition";
  let { sub, display = $bindable() } = $props();
</script>

<div
  transition:slide={{ duration: 200 }}
  class="absolute left-0 mt-2 min-w-[12rem] rounded-xl bg-space-bg/95 backdrop-blur-xl py-2 shadow-2xl border border-white/10 z-50 overflow-hidden"
>
  {#each sub as subItem}
    <a
      href={subItem.href}
      class="block px-5 py-3 text-sm text-slate-300 hover:text-space-accent hover:bg-white/5 transition-all"
      onclick={() => (display = false)}
    >
      {subItem.name}
    </a>
  {/each}
</div>
