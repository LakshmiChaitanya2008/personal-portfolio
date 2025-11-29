<script>
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";
  import Navbar from "../components/Navbar.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <link
    rel="icon"
    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦇</text></svg>"
  />
  <title>LC!</title>
  <meta
    name="description"
    content="Portfolio Website of Lakshmi Chaitanya Chalamalasetti."
  /><link rel="preconnect" href="https://ajax.googleapis.com" />
  <link rel="preconnect" href="https://www.gstatic.com" />
  <link
    rel="preload"
    href="/fonts/source-code-pro-v31-latin-regular.woff2"
    as="font"
    type="font/woff2"
    crossorigin
  />
</svelte:head>

<Navbar />
<main>
  {@render children()}
</main>

<style>
</style>
