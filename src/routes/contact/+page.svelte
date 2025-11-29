<script>
  import Icon from "@iconify/svelte";

  let name = "";
  let message = "";
  let result = "";
  let loading = false;

  const socials = [
    {
      name: "GitHub",
      icon: "mdi:github",
      link: "https://github.com/LakshmiChaitanya2008",
    },
    {
      name: "LinkedIn",
      icon: "mdi:linkedin",
      link: "https://www.linkedin.com/in/lakshmi-chaitanya-chalamalasetti-188823297/",
    },
    {
      name: "Email",
      icon: "mdi:email-outline",
      link: "mailto:lakshmichaitanyachalamalasetti@gmail.com",
    },
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    loading = true;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("message", message);
    formData.append("access_key", "23884288-01a8-4872-93ec-61e31c4a3bf6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    loading = false;

    if (data.success) {
      result = "Message sent successfully!";
      name = "";
      message = "";
    } else {
      result = "Something went wrong. Try again.";
    }
  }
</script>

<div class="min-h-screen">
  <main class="max-w-4xl mx-auto px-5 pt-12 pb-24">
    <header class="mb-5">
      <p class="text-xs uppercase tracking-[0.20em] text-neutral-500 mb-2">
        CONTACT
      </p>
      <h1 class="text-4xl font-semibold mb-3">Find me here!</h1>
      <p class="text-neutral-500 text-sm">
        Send me a message or reach out through my accounts.
      </p>
    </header>

    <div class="flex gap-4 mb-10">
      {#each socials as s}
        <a
          href={s.link}
          target="_blank"
          class="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800 transition text-neutral-200"
        >
          <Icon icon={s.icon} class="w-5 h-5" />
          <span class="text-sm">{s.name}</span>
        </a>
      {/each}
    </div>

    <section
      class="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 backdrop-blur-sm"
    >
      {#if result}
        <p
          class="{result.includes('success')
            ? 'text-green-400'
            : 'text-red-400'} text-sm mb-4"
        >
          {result}
        </p>
      {/if}

      <form on:submit={handleSubmit} class="space-y-6">
        <div>
          <label class="text-sm text-neutral-300">Name</label>
          <input
            type="text"
            bind:value={name}
            required
            class="mt-1 w-full rounded-xl bg-neutral-950/40 border border-neutral-800 p-3 text-sm text-neutral-200 focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label class="text-sm text-neutral-300">Message</label>
          <textarea
            bind:value={message}
            required
            rows="5"
            class="mt-1 w-full rounded-xl bg-neutral-950/40 border border-neutral-800 p-3 text-sm text-neutral-200 focus:border-indigo-500 focus:ring-indigo-500 resize-none"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl text-sm"
          disabled={loading}
        >
          {#if loading}
            Sending...
          {:else}
            Send Message
          {/if}
        </button>
      </form>
    </section>
  </main>
</div>
