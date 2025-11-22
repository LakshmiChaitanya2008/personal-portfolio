<script>
  import Icon from "@iconify/svelte";

  const skills = [
    {
      title: "Frontend",
      items: [
        { name: "React", icon: "logos:react" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "Next.js", icon: "logos:nextjs-icon" },
        { name: "Svelte", icon: "logos:svelte-icon" },
        { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
        { name: "JavaScript", icon: "logos:javascript" },
      ],
    },

    {
      title: "Languages (Basics)",
      items: [
        { name: "Python", icon: "logos:python" },
        { name: "Java", icon: "logos:java" },
        { name: "C", icon: "logos:c" },
      ],
    },

    {
      title: "Backend & APIs",
      items: [
        { name: "Node.js", icon: "logos:nodejs-icon" },
        { name: "Express", icon: "simple-icons:express" },
        { name: "Nest.js", icon: "logos:nestjs" },
        { name: "REST APIs", icon: "carbon:api" },
      ],
    },

    {
      title: "Databases & Auth",
      items: [
        { name: "MongoDB", icon: "logos:mongodb-icon" },
        { name: "PostgreSQL", icon: "logos:postgresql" },
        { name: "Supabase", icon: "logos:supabase-icon" },
        { name: "Firebase", icon: "logos:firebase" },
      ],
    },

    {
      title: "Tools",
      items: [
        { name: "Git", icon: "logos:git-icon" },
        { name: "Postman", icon: "logos:postman-icon" },
        { name: "VS Code", icon: "logos:visual-studio-code" },
        { name: "Linux Basics", icon: "logos:linux-tux" },
      ],
    },
  ];
</script>

<div class="min-h-screen">
  <main class="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 pt-14 pb-20">
    <header class="mb-10">
      <p class="text-xs uppercase tracking-[0.20em] text-neutral-500 mb-2">
        Skills
      </p>
      <h1 class="text-4xl font-semibold tracking-tight mb-2">
        Technologies I Work With
      </h1>
      <p class="text-neutral-500 text-sm">
        Tools, languages & tech I use to build things.
      </p>
    </header>

    <section class="space-y-12">
      {#each skills as g}
        <div>
          <h2 class="text-sm font-semibold text-neutral-300 mb-4 tracking-wide">
            {g.title}
          </h2>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {#each g.items as s}
              <div
                class="flex flex-col items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 hover:bg-neutral-900/70 transition-colors"
              >
                <Icon icon={s.icon} class="w-10 h-10" />
                <span class="text-sm text-neutral-200">{s.name}</span>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </section>
  </main>
</div>
