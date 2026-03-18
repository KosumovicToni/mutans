<script lang="ts">
  const currentYear = new Date().getFullYear();
  const repo: string = "https://github.com/KosumovicToni/mutans";
</script>

<footer
  class="bg-space-bg border-t border-white/10 text-white py-16 px-6 relative overflow-hidden"
>
  <!-- Decorative nebula in footer -->
  <div
    class="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-600/5 blur-[100px] rounded-full"
  ></div>

  <div class="max-w-7xl mx-auto relative z-10">
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-white/5 pb-12"
    >
      <div class="space-y-6">
        <h3
          class="text-2xl font-black tracking-tighter glow-text-cyan uppercase"
        >
          Mutans Project
        </h3>
        <p class="text-slate-400 max-w-sm text-sm leading-relaxed">
          Advancing synthetic biology through innovation and cosmic-scale
          collaboration. Join us in our journey through the genetic frontier.
        </p>
        <div class="flex space-x-4">
          <!-- Social Placeholders -->
          <div
            class="w-10 h-10 glass rounded-lg flex items-center justify-center hover:text-space-accent transition-colors cursor-pointer"
          >
            <span class="text-xs font-bold">IG</span>
          </div>
          <div
            class="w-10 h-10 glass rounded-lg flex items-center justify-center hover:text-space-accent transition-colors cursor-pointer"
          >
            <span class="text-xs font-bold">FB</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-8">
        <div>
          <h4
            class="text-xs font-black uppercase tracking-[0.2em] text-space-accent mb-6"
          >
            Navigation
          </h4>
          <ul class="space-y-4 text-sm text-slate-400">
            <li>
              <a href="/" class="hover:text-white transition-colors">Home</a>
            </li>
            <li>
              <a href="/team" class="hover:text-white transition-colors">Team</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-white transition-colors">Project</a>
            </li>
          </ul>
        </div>
        <div>
          <h4
            class="text-xs font-black uppercase tracking-[0.2em] text-space-accent mb-6"
          >
            Resources
          </h4>
          <ul class="space-y-4 text-sm text-slate-400">
            <li>
              <a href="#" class="hover:text-white transition-colors"
                >Documentation</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-white transition-colors">Safety</a>
            </li>
            <li>
              <a href={repo} class="hover:text-white transition-colors"
                >GitHub</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="pt-10 flex flex-col items-center gap-4 text-xs text-slate-500 text-center"
    >
      <div class="max-w-3xl">
        <p>
          © 2026 - Content on this site is licensed under a <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            class="underline hover:text-white transition-colors"
            >Creative Commons Attribution 4.0 International license</a
          >.
        </p>
      </div>
      <div>
        <p>
          The repository used to create this website is available at <br />
          <a
            href={repo}
            target="_blank"
            class="font-bold text-slate-400 hover:text-space-accent transition-colors"
            >{repo}</a
          >.
        </p>
      </div>
    </div>
  </div>
</footer>
