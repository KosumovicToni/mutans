<script lang="ts">
  const { member } = $props();
</script>

<div
  class="group w-full bg-white bg-opacity-5 backdrop-blur-lg border border-white/10 p-4 rounded-3xl text-center transition-all duration-500 hover:bg-opacity-10 hover:-translate-y-3 shadow-2xl"
>
  <div class="relative mb-6 overflow-hidden rounded-2xl">
    <img
      src={member.src}
      alt="Photo of {member.name}"
      class="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
    />
  </div>

  <div class="pb-4">
    <h4 class="text-xl font-bold text-gray-800 tracking-tight">
      {member.name}
    </h4>
    <p class="text-xs text-blue-600 font-black uppercase tracking-widest mt-1">
      {member.role}
    </p>
  </div>
</div>
