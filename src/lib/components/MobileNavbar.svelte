<script lang="ts">
  import HamburgerMenu from "./navbar/HamburgerMenu.svelte";
  import Navlogo from "./navbar/Navlogo.svelte";
  import DaltonismSwitcher from "./navbar/DaltonismSwitcher.svelte";

  let { title, items } = $props();
</script>

<div class="bg-space-bg/80 backdrop-blur-lg border-b border-white/10 shadow-lg">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16 items-center">
      <div class="flex items-center space-x-4">
        <Navlogo {title}></Navlogo>
        <DaltonismSwitcher />
      </div>
      <div class="flex space-x-4">
        <HamburgerMenu {items}></HamburgerMenu>
      </div>
    </div>
  </div>
</div>
