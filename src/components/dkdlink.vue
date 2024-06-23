<template>
  <div class="min-h-screen bg-night flex flex-col items-center justify-center p-4">
    <div class="max-w-md w-full bg-white shadow-md rounded-lg p-6">
      <img
        src="@/assets/dkd.jpg"
        alt="Profile Picture"
        class="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h1 class="text-3xl font-bold mb-4 text-center text-orange-wheel">DKD Riau</h1>
      <ul class="space-y-4">
        <li v-for="link in links" :key="link.id">
          <a
            :href="link.url"
            target="_blank"
            class="block text-center py-3 px-4 rounded-lg text-white font-semibold"
            :class="link.color"
          >
            {{ link.title }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DkdLink',
  data() {
    return {
      links: [
        {
          id: 1,
          title: 'Web Raida Riau 2024',
          url: 'https://example1.com',
          color: 'bg-steel-pink',
        },
        {
          id: 2,
          title: 'Instagram DKD Riau',
          url: 'https://example2.com',
          color: 'bg-sea-green',
        },
        {
          id: 3,
          title: 'Youtube DKD Riau',
          url: 'https://example3.com',
          color: 'bg-engineering-orange',
        },
        {
          id: 4,
          title: 'Example 4',
          url: 'https://example4.com',
          color: 'bg-old-gold',
        },
        {
          id: 5,
          title: 'Example 5',
          url: 'https://example5.com',
          color: 'bg-celestial-blue',
        },
        {
          id: 6,
          title: 'Example 6',
          url: 'https://example6.com',
          color: 'bg-amber',
        },
        {
          id: 7,
          title: 'Example 7',
          url: 'https://example7.com',
          color: 'bg-amaranth',
        },
      ],
    };
  },
};
</script>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
