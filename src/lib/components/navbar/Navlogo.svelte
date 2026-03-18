<script lang="ts">
  let { title } = $props();
</script>

<div class="flex-shrink-0">
  <a
    href={title.href}
    class="text-2xl font-black text-slate-50 hover:text-space-accent transition-all glow-text-cyan tracking-tighter uppercase"
  >
    {title.name}
  </a>
</div>
