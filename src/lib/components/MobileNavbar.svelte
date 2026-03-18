<script lang="ts">
  import HamburgerMenu from "./navbar/HamburgerMenu.svelte";
  import Navlogo from "./navbar/Navlogo.svelte";

  let { title, items } = $props();
</script>

<div class="bg-white shadow-md">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16 items-center">
      <Navlogo {title}></Navlogo>
      <div class="flex space-x-4">
        <HamburgerMenu {items}></HamburgerMenu>
      </div>
    </div>
  </div>
</div>
