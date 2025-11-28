<script>
  import Icon from "@iconify/svelte";

  const projects = [
    {
      title: "Ternal",
      description:
        "A personal journaling app that runs entirely in your terminal! Supports offline and online modes, AES-encrypted entries, and cloud sync with Supabase.",
      live: "https://www.npmjs.com/package/ternal-cli",
      github: "https://github.com/LakshmiChaitanya2008/Ternal/",
    },
    {
      title: "HTMLArena",
      description:
        "An online HTML, CSS and JavaScript editor that supports CSS preprocessors (SCSS, SASS, Less) and TypeScript with CDN support and a console to display JavaScript logs.",
      live: "https://html-arena.vercel.app/",
      github: "https://github.com/LakshmiChaitanya2008/HTMLArena",
    },
    {
      title: "Ecommerce App (Final Year Project)",
      description:
        "A simple e-commerce application for an imaginary online store, built with React, Express, MongoDB and Tailwind CSS as a full stack practice project.",
      github: "https://github.com/LakshmiChaitanya2008/imaginary-ecommerce",
      live: "https://ecommerceapp53.vercel.app/",
    },
    {
      title: "Impact",
      description:
        "A notes app which can be installed as a PWA. Supports Markdown and rich text editing with authentication and sync between devices.",
      live: "https://impactnotes.vercel.app/",
      github: "https://github.com/LakshmiChaitanya2008/impact",
    },
    {
      title: "This site :)",
      description:
        "Made with Svelte and Tailwind CSS. My favorite technologies!",
      live: "#",
      github: "https://github.com/LakshmiChaitanya2008/personal-portfolio",
    },
  ];
</script>

<div class="min-h-screen px-4 sm:px-6 lg:px-8">
  <div class="max-w-4xl mx-auto mt-12 mb-16">
    <header class="mb-8">
      <p class="text-xs uppercase tracking-[0.18em] text-neutral-500 mb-2">
        My Projects
      </p>
      <h1 class="text-4xl font-semibold mb-2">Projects & Experiments</h1>
      <p class="text-neutral-500 text-sm">Apps I made along the way.</p>
    </header>

    <section class="flex flex-col gap-5">
      {#each projects as p}
        <article
          class="group rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 hover:border-neutral-600 hover:bg-neutral-900/70 transition-colors duration-200"
        >
          <h2 class="text-lg font-semibold mb-2">
            {p.title}
          </h2>

          <p class="text-neutral-400 text-sm leading-relaxed mb-4">
            {p.description}
          </p>

          <div class="flex gap-4 text-sm items-center">
            <a
              href={p.live}
              target="_blank"
              class="flex items-center gap-1 text-indigo-400 hover:underline"
            >
              Live
              <Icon icon="mdi:arrow-top-right" class="w-4 h-4" />
            </a>

            <a
              href={p.github}
              target="_blank"
              class="flex items-center gap-1 text-neutral-400 hover:underline"
            >
              GitHub
              <Icon icon="mdi:github" class="w-4 h-4" />
            </a>
          </div>
        </article>
      {/each}
    </section>
  </div>
</div>
