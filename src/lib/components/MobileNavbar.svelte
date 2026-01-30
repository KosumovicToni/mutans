<script lang="ts">
  import HamburgerMenu from "./navbar/HamburgerMenu.svelte";
  import Navlogo from "./navbar/Navlogo.svelte";

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

<div class="bg-white shadow-md">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16 items-center">
      <Navlogo {title}></Navlogo>
      <div class="flex space-x-4 menu-container">
        <HamburgerMenu {items}></HamburgerMenu>
      </div>
    </div>
  </div>
</div>
