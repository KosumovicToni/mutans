<script lang="ts">
  import { page } from "$app/state";
  import { slide } from "svelte/transition";

  type Item = {
    name: string;
    sub: SubItem[];
  };
  type SubItem = {
    name: string;
    href: string;
  };

  const items: Item[] = [
    {
      name: "Team",
      sub: [
        { name: "Members", href: "" },
        { name: "Attributions", href: "" },
      ],
    },
    {
      name: "Project",
      sub: [
        { name: "Description", href: "" },
        { name: "Engineering", href: "" },
        { name: "Results", href: "" },
        { name: "Contribution", href: "" },
      ],
    },
    {
      name: "Dry Lab",
      sub: [
        { name: "Protocols", href: "" },
        { name: "Measurement", href: "" },
        { name: "Safety and Security", href: "" },
      ],
    },
    {
      name: "Wet Lab",
      sub: [
        { name: "Model", href: "" },
        { name: "Software", href: "" },
      ],
    },
    { name: "Engagement", sub: [] },
  ];

  const title = { name: "Mutans", href: "/" };

  // Track the index of the open menu. null means all are closed.
  let openIndex: number | null = null;

  const toggleMenu = (index: number) => {
    if (openIndex === index) {
      openIndex = null; // Close if clicking the same button
    } else {
      openIndex = index; // Open the clicked one
    }
  };

  const closeMenus = () => {
    openIndex = null;
  };
</script>

<svelte:window
  on:click={(e) => {
    if (!(e.target as Element).closest(".menu-container")) {
      closeMenus();
    }
  }}
/>

<nav class="bg-white shadow-md">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16 items-center">
      <div class="flex-shrink-0">
        <a href={title.href} class="text-2xl font-bold text-blue-600">
          {title.name}
        </a>
      </div>

      <div class="flex space-x-4">
        {#each items as item, i}
          <div class="relative menu-container">
            <button
              class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              on:click={() => toggleMenu(i)}
              aria-expanded={openIndex === i}
            >
              {item.name}
              {#if item.sub.length > 0}
                <span class="ml-1 text-xs opacity-50">▼</span>
              {/if}
            </button>
            {#if openIndex === i && item.sub.length > 0}
              <div
                transition:slide={{ duration: 200 }}
                class="absolute left-0 mt-2 w-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 z-50"
              >
                {#each item.sub as subItem}
                  <a
                    href={subItem.href}
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {subItem.name}
                  </a>
                {/each}
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
</nav>
