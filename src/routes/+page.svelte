<script>
  import Navbar from "../components/Navbar.svelte";
</script>

<div class="text-center mt-8">
  <div class="flex justify-center">
    <div
      class="p-[3px] rounded-full bg-linear-to-br from-indigo-500/50 via-sky-500/40 to-purple-500/50"
    >
      <div class="rounded-full bg-neutral-950/90 p-2">
        <model-viewer
          src="/dog2.glb"
          alt="3D model"
          camera-controls
          auto-rotate
          interaction-prompt="auto"
          shadow-intensity="0.8"
          class="rounded-full"
          style="width: 240px; height: 240px; overflow: hidden;"
          title="3D Model Made By Takuya Matsuyama!"
        ></model-viewer>
      </div>
    </div>
  </div>

  <h1 class="text-4xl md:text-5xl font-semibold mt-10 mb-3">
    Lakshmi Chaitanya
  </h1>

  <p class="text-neutral-400 text-sm md:text-base px-4 leading-relaxed">
    Love to explore, break, rebuild, and create things!
  </p>
</div>
