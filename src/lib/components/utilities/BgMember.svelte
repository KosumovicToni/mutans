<div
  class="relative h-[70vh] lg:h-screen w-full bg-space bg-cover bg-center flex items-end justify-between p-8 md:p-16 overflow-hidden"
>
  <!-- Atmospheric gradients -->
  <div
    class="absolute inset-0 bg-gradient-to-t from-space-bg via-transparent to-transparent"
  ></div>
  <div class="absolute inset-0 bg-purple-900/10 mix-blend-overlay"></div>

  <div class="relative z-10 text-left">
    <h1
      class="text-6xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-none"
    >
      Cosmic <br />
      <span
        class="text-transparent bg-clip-text bg-gradient-to-r from-space-accent to-space-nebula"
      >
        Team
      </span>
    </h1>
    <p class="text-slate-400 mt-4 max-w-lg text-lg hidden md:block">
      Exploring the genetic frontier of our project through collaboration and
      innovation.
    </p>
  </div>

  <div class="relative z-10 text-right">
    <button
      aria-label="scroll-down"
      class="hidden lg:flex text-slate-50 bg-white/5 border border-white/10 backdrop-blur-md rounded-full p-4 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] items-center justify-center group"
    >
      <a aria-label="scroll-down" href="#member">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="size-6 text-space-accent group-hover:animate-bounce"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
          />
        </svg>
      </a>
    </button>
  </div>
</div>

<style>
  .bg-space {
    background-image: url("https://images.unsplash.com/photo-1464802686167-b939a67e06a1?q=80&w=2069&auto=format&fit=crop");
  }
</style>
