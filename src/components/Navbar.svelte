<script>
  import { page } from "$app/stores";

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];
</script>

<div
  class="
    flex flex-wrap justify-center gap-6 sm:gap-10
    text-base sm:text-lg md:text-xl
    px-5 py-4 mt-4
  "
>
  {#each navItems as item}
    <a
      href={item.href}
      class="
        transition-all cursor-pointer
        hover:opacity-100
      "
      style="
        opacity: {$page.url.pathname === item.href ? 1 : 0.45};
      "
    >
      {item.name}
    </a>
  {/each}
</div>
