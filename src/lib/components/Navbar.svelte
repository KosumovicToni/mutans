<script lang="ts">
  import Navlink from "./navbar/Navlink.svelte";
  import Navlogo from "./navbar/Navlogo.svelte";

  type Item = {
    name: string;
    sub: SubItem[];
  };
  type SubItem = {
    name: string;
    href: string;
  };

  let display: boolean = $state(false);
  let index = $state(0);
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
</script>

<svelte:window
  on:click={(e) => {
    if (!(e.target as Element).closest(".menu-container")) {
      display = false;
    }
  }}
/>

<nav class="bg-white shadow-md">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16 items-center">
      <Navlogo {title}></Navlogo>

      <div class="flex space-x-4 menu-container">
        {#each items as item, i}
          <Navlink bind:display bind:index {item} {i}></Navlink>
        {/each}
      </div>
    </div>
  </div>
</nav>
