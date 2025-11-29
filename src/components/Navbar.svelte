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
      aria-current={$page.url.pathname === item.href ? "page" : undefined}
      class="
        transition-all cursor-pointer font-medium
        text-neutral-300 hover:text-white
        {$page.url.pathname === item.href ? 'text-white' : ''}
      "
      >{item.name}
    </a>
  {/each}
</div>
