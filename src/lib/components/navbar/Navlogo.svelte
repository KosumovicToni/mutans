<script lang="ts">
  let propos = $props();
  let title = propos.title;
</script>

<div class="flex-shrink-0">
  <a href={title.href} class="text-2xl font-bold text-sky-700">
    {title.name}
  </a>
</div>
