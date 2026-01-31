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

  const pis = [
    {
      name: "Massimo Bellato",
      role: "BOH",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWrtWmYztI6UnvDSE_-jXJ72wdSJUSIeeQ0A&s",
    },
    {
      name: "Livio Trainotti",
      role: "BOH",
      src: "https://www.unipd.it/data/foto/9A996A757D4534856AB543458564FB83.jpg",
    },
  ];
</script>

<BgMember></BgMember>
<div class="mx-auto p-6 py-20">
  <div
    id="member"
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center place-item-center"
  >
    {#each members as member}
      <MemberCrad {member}></MemberCrad>
    {/each}
  </div>
  <div class="w-full text-center text-4xl">
    <p class="p-6 text-sky-700">PIs and Advisor</p>
  </div>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center"
  >
    {#each pis as pi}
      <MemberCrad member={pi}></MemberCrad>
    {/each}
  </div>
</div>
