<script lang="ts">
  const { member } = $props();
</script>

<div
  class="group w-full glass p-5 rounded-3xl text-center transition-all duration-500 hover:bg-white/10 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(34,211,238,0.2)] border-white/5 hover:border-space-accent/30"
>
  <div class="relative mb-6 overflow-hidden rounded-2xl aspect-square">
    <img
      src={member.src}
      alt="Photo of {member.name}"
      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div
      class="absolute inset-0 bg-gradient-to-t from-space-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    ></div>
  </div>

  <div class="pb-2">
    <h4
      class="text-xl font-bold text-slate-50 tracking-tight group-hover:text-space-accent transition-colors"
    >
      {member.name}
    </h4>
    <div
      class="h-1 w-12 bg-gradient-to-r from-space-accent to-space-nebula mx-auto mt-2 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
    ></div>
    <p
      class="text-xs text-space-accent font-black uppercase tracking-[0.2em] mt-3 opacity-80 group-hover:opacity-100"
    >
      {member.role}
    </p>
  </div>
</div>
