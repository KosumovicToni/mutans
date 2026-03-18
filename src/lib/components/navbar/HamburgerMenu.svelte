<script lang="ts">
  import { slide } from "svelte/transition";

  let { items = [] } = $props();

  let display = $state(false);
  // Usiamo una stringa per gestire l'apertura singola (più semplice e reattiva)
  let openSubMenu = $state<string | null>(null);

  const toggleMenu = () => {
    display = !display;
    if (display) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      openSubMenu = null; // Reset sottomenu quando chiudi tutto
    }
  };

  const toggleSubMenu = (name: string) => {
    openSubMenu = openSubMenu === name ? null : name;
  };
</script>

<button
  class="inline-flex items-center justify-center p-2 w-10 h-10 rounded-md transition-colors hover:bg-gray-100 focus:outline-none"
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
      ? 'rotate-180'
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
    class="fixed top-16 left-0 w-full h-[calc(100vh-64px)] bg-white z-50 flex flex-col shadow-xl overflow-y-auto"
  >
    <nav class="flex flex-col p-4">
      {#each items as item}
        {@const hasSub = item.sub && item.sub.length > 0}
        {@const isOpen = openSubMenu === item.name}

        <div class="flex flex-col border-b border-gray-50 last:border-0">
          {#if hasSub}
            <button
              onclick={() => toggleSubMenu(item.name)}
              class="flex w-full items-center justify-between py-5 text-left text-xl font-medium text-gray-800 active:bg-gray-50 transition-colors px-2 rounded-lg"
            >
              <span>{item.name}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5 text-gray-400 transition-transform duration-300 {isOpen
                  ? 'rotate-180'
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
              class="py-5 text-xl font-medium text-gray-800 active:text-blue-600 px-2"
            >
              {item.name}
            </a>
          {/if}

          {#if hasSub && isOpen}
            <div
              transition:slide={{ duration: 300 }}
              class="flex flex-col bg-gray-50 rounded-xl mb-4 overflow-hidden"
            >
              {#each item.sub as subItem}
                <a
                  href={subItem.href}
                  onclick={toggleMenu}
                  class="px-6 py-4 text-lg text-gray-600 border-b border-white last:border-0 active:bg-blue-50 active:text-blue-600"
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
