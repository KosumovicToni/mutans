<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import "../app.css";
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div  class="flex flex-col min-h-screen">
	<Navbar></Navbar>
	{@render children()}
	<Footer></Footer>
</div>
