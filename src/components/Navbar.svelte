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
     flex flex-nowrap justify-center
    gap-4 sm:gap-6 md:gap-10
    text-sm xs:text-base sm:text-lg md:text-xl
    px-3 py-4 mt-4
    overflow-x-auto
  "
>
  {#each navItems as item}
    <a
      href={item.href}
      class="whitespace-nowrap
        transition-all cursor-pointer
        hover:opacity-100"
      style="opacity: {$page.url.pathname === item.href ? 1 : 0.45}"
    >
      {item.name}
    </a>
  {/each}
</div>
