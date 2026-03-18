<script lang="ts">
  import Navlink from "./navbar/Navlink.svelte";
  import Navlogo from "./navbar/Navlogo.svelte";
  import DaltonismSwitcher from "./navbar/DaltonismSwitcher.svelte";

  let display: boolean = $state(false);
  let index = $state(0);
  let { title, items } = $props();
</script>

<svelte:window
  on:click={(e) => {
    if (!(e.target as Element).closest(".menu-container")) {
      display = false;
    }
  }}
/>

<nav class="bg-space-bg/80 backdrop-blur-lg border-b border-white/10 shadow-lg">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16 items-center">
      <div class="flex items-center space-x-6">
        <Navlogo {title}></Navlogo>
        <div class="hidden md:block">
          <DaltonismSwitcher />
        </div>
      </div>
      <div class="flex space-x-4 menu-container">
        {#each items as item, i}
          <Navlink bind:display bind:index {item} {i}></Navlink>
        {/each}
      </div>
    </div>
  </div>
</nav>
