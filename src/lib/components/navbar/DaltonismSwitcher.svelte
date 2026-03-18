<script lang="ts">
  import { settings, type DaltonismMode } from "$lib/settings.svelte";
  import { fade } from "svelte/transition";

  let showOptions = $state(false);

  const modes: { label: string; value: DaltonismMode }[] = [
    { label: "Default", value: "default" },
    { label: "Protanopia", value: "protanopia" },
    { label: "Deuteranopia", value: "deuteranopia" },
    { label: "Tritanopia", value: "tritanopia" },
  ];

  function selectMode(mode: DaltonismMode) {
    settings.setDaltonism(mode);
    showOptions = false;
  }
</script>

<div class="relative">
  <button
    class="flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 hover:bg-white/5 transition-all text-[10px] uppercase tracking-widest font-black text-slate-400 hover:text-space-accent hover:border-space-accent/30"
    onclick={() => (showOptions = !showOptions)}
    aria-label="Color blind accessibility"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
    <span class="hidden sm:inline">Accessibility</span>
  </button>

  {#if showOptions}
    <button
      class="fixed inset-0 z-40 w-full h-full cursor-default bg-transparent"
      onclick={() => (showOptions = false)}
      aria-label="Close accessibility menu"
    ></button>
    <div
      transition:fade={{ duration: 150 }}
      class="absolute top-full left-0 mt-2 w-48 glass rounded-2xl p-2 z-50 shadow-2xl border-white/20"
    >
      <div
        class="px-3 py-2 text-[10px] font-black uppercase tracking-widest text-slate-500 border-b border-white/5 mb-1"
      >
        Vision Mode
      </div>
      {#each modes as mode}
        <button
          class="w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all hover:bg-white/10 {settings.daltonism ===
          mode.value
            ? 'text-space-accent bg-white/5'
            : 'text-slate-300'}"
          onclick={() => selectMode(mode.value)}
        >
          {mode.label}
        </button>
      {/each}
    </div>
  {/if}
</div>
