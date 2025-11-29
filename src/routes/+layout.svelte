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
  />
  <link rel="canonical" href="https://lakshmichaitanya.vercel.app/" />
  <link
    rel="preload"
    href="/fonts/source-code-pro-v31-latin-regular.woff2"
    as="font"
    type="font/woff2"
    crossorigin
  />
  <link rel="preconnect" href="https://ajax.googleapis.com" />
  <script>
    window.addEventListener("load", () => {
      import(
        "https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"
      );
    });
  </script>
</svelte:head>

<Navbar />
<main>
  {@render children()}
</main>

<style>
</style>
