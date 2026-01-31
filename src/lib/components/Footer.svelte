<script lang="ts">
  const repo: string = "https://github.com/KosumovicToni/mutans";
</script>

<div class="flex flex-col w-full justify-center bg-sky-900 text-white">
  <div class="grid grid-cols-2 border-t-2 p-2 pt-8 border-gray-300">
    <div class="align-center text-center">SOCIAL</div>
    <div class="align-center text-center">DIPARTIMENTI</div>
  </div>
  <hr
    class="w-48 h-[0.1rem] mx-auto my-4 bg-neutral-300 border-0 rounded-sm md:my-6"
  />
  <div class="text-center p-4 text-xs mb-6 sm:text-sm md:text-base">
    <p>
      © 2026 - Content on this site is licensed under a Creative Commons
      Attribution 4.0 International license.
    </p>
    <p>
      The repository used to create this website is available at <a
        href={repo}
        class="font-bold">{repo}</a
      >.
    </p>
  </div>
</div>
