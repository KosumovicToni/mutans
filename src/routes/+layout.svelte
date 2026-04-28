<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import "../app.css";
  import { onMount } from "svelte";
  import { settings } from "$lib/settings.svelte";

  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import MobileNavbar from "$lib/components/MobileNavbar.svelte";

  let { children } = $props();

  let isMobile = $state(false);

  onMount(() => {
    settings.init();
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Set the start value
    isMobile = mediaQuery.matches;

    // Listen the dimesion changhes
    const handler = (e: MediaQueryListEvent) => (isMobile = e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  });

  const items = [
    {
      name: "Team",
      sub: [
        { name: "Members", href: "/team" },
        { name: "Attributions", href: "#" },
      ],
    },
    {
      name: "Project",
      sub: [
        { name: "Description", href: "#" },
        { name: "Engineering", href: "#" },
        { name: "Results", href: "#" },
        { name: "Contribution", href: "#" },
      ],
    },
    {
      name: "Dry Lab",
      sub: [
        { name: "Protocols", href: "#" },
        { name: "Measurement", href: "#" },
        { name: "Safety and Security", href: "#" },
      ],
    },
    {
      name: "Wet Lab",
      sub: [
        { name: "Model", href: "#" },
        { name: "Software", href: "#" },
      ],
    },
    { name: "Engagement", href: "#", sub: [] },
  ];

  const title = { name: "COSMIC", href: "/" };
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="flex flex-col relative min-h-screen">
  <div class="w-screen fixed z-20">
    {#if isMobile}
      <MobileNavbar {items} {title}></MobileNavbar>
    {:else}
      <Navbar {items} {title}></Navbar>
    {/if}
  </div>
  {@render children()}
  <Footer></Footer>
</div>
