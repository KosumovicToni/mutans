<script lang="ts">
  import { slide } from "svelte/transition";

  let { items = [] } = $props();

  let display = $state(false);
  let openSubMenu = $state<string | null>(null);

  const toggleMenu = () => {
    display = !display;
    if (display) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      openSubMenu = null;
    }
  };

  const toggleSubMenu = (name: string) => {
    openSubMenu = openSubMenu === name ? null : name;
  };
</script>

<button
  class="inline-flex items-center justify-center p-2 w-10 h-10 rounded-md transition-all text-slate-50 hover:bg-white/10 focus:outline-none border border-white/10"
  onclick={toggleMenu}
  aria-label="Toggle menu"
  aria-expanded={display}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="size-6 transition-transform duration-300 {display
      ? 'rotate-180 text-space-accent'
      : ''}"
  >
    {#if !display}
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    {:else}
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    {/if}
  </svg>
</button>

{#if display}
  <div
    transition:slide={{ duration: 300 }}
    class="fixed top-16 left-0 w-full h-[calc(100vh-64px)] bg-space-bg/95 backdrop-blur-xl z-50 flex flex-col shadow-2xl overflow-y-auto border-t border-white/10"
  >
    <nav class="flex flex-col p-6">
      {#each items as item}
        {@const hasSub = item.sub && item.sub.length > 0}
        {@const isOpen = openSubMenu === item.name}

        <div class="flex flex-col border-b border-white/5 last:border-0">
          {#if hasSub}
            <button
              onclick={() => toggleSubMenu(item.name)}
              class="flex w-full items-center justify-between py-6 text-left text-xl font-black uppercase tracking-tighter text-slate-50 active:bg-white/5 transition-all px-2 rounded-lg"
            >
              <span class={isOpen ? "text-space-accent" : ""}>{item.name}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5 text-slate-500 transition-transform duration-300 {isOpen
                  ? 'rotate-180 text-space-accent'
                  : ''}"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          {:else}
            <a
              href={item.href}
              onclick={toggleMenu}
              class="py-6 text-xl font-black uppercase tracking-tighter text-slate-50 active:text-space-accent px-2 transition-colors"
            >
              {item.name}
            </a>
          {/if}

          {#if hasSub && isOpen}
            <div
              transition:slide={{ duration: 300 }}
              class="flex flex-col bg-white/5 rounded-2xl mb-6 overflow-hidden border border-white/10"
            >
              {#each item.sub as subItem}
                <a
                  href={subItem.href}
                  onclick={toggleMenu}
                  class="px-8 py-5 text-lg text-slate-400 border-b border-white/5 last:border-0 active:bg-space-accent/10 active:text-space-accent transition-all"
                >
                  {subItem.name}
                </a>
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </nav>
  </div>
{/if}
