<script lang="ts">
  import MemberCrad from "$lib/components/MemberCrad.svelte";
  import BgMember from "$lib/components/utilities/BgMember.svelte";

  const members = [
    {
      name: "nome",
      role: "TEAM MEMBER",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhBqT0EwH7C-0kL83F0SMlNofAOETPt0qfIA&s",
    },
  ];
</script>

<BgMember></BgMember>
<div class="mx-auto p-6 py-20">
  <div
    id="member"
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center"
  >
    {#each members as member}
      <MemberCrad {member}></MemberCrad>
    {/each}
  </div>
</div>
