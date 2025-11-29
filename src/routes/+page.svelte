<script>
  import Navbar from "../components/Navbar.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    requestIdleCallback(() => {
      const script = document.createElement("script");
      script.type = "module";
      script.src =
        "https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js";

      script.onload = () => {
        const container = document.getElementById("model-wrapper");
        container.innerHTML = `
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
          ></model-viewer>`;
      };

      document.body.appendChild(script);
    });
  });
</script>

<div class="text-center mt-8">
  <div class="flex justify-center">
    <div
      class="p-[3px] rounded-full bg-linear-to-br from-indigo-500/50 via-sky-500/40 to-purple-500/50"
    >
      <div class="rounded-full bg-neutral-950/90 p-2">
        <div
          id="model-wrapper"
          class="rounded-full flex items-center justify-center text-neutral-400 text-sm"
          style="width: 240px; height: 240px; overflow: hidden;"
        >
          Loading 3D model…
        </div>
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
