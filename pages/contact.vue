<template>
  <div class="min-h-screen bg-lightBlue z-2">
    <section class="h-5/6 p-10 flex justify-center items-center">
      <div class="md:w-4/5 flex justify-between items-center gap-10 md:my-32">
        <div class="md:w-1/2 flex flex-col">
          <h1 class="text-5xl text-white font-bold mb-5">Hoe u ons kunt bereiken</h1>
          <h4 class="text-xl text-white mb-5">
            Wij staan altijd klaar om uw vragen te beantwoorden en u te helpen met meer informatie over onze diensten.
            Daarom horen wij graag van u!
          </h4>
          <div class="flex align-center items-center mb-5 gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-white size-6">
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            <a class="text-2xl text-vibrantOrange hover:text-white" href="mailto:info@bothwayseducation.com">info@bothwayseducation.com</a>
          </div>
          <div class="flex align-center items-center mb-5 gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-white size-6">
              <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
            </svg>
            <a class="text-2xl text-vibrantOrange hover:text-white" href="tel:+31612345678">06 12345678</a>
          </div>
          <div class="flex align-center items-center mb-5 gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-white size-6">
              <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
            </svg>
            <p class="text-white text-xl">
              Van Oestendestraat 30
              <br>
              3083 ME Rotterdam
            </p>
          </div>
          <div class="flex align-center items-center mb-5 gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-white size-6">
              <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
            </svg>
            <p class="text-white text-xl">
              Maandag tot en met Vrijdag: 17:00 - 21:00 uur
              <br>
              Zaterdag: Gesloten
              <br>
              Zondag: 10:00 - 14:00 uur
            </p>
          </div>
          <div>
          </div>
        </div>
        <div class="md:w-1/2">
          <img class="md:w-5/6 rounded-full mx-auto" src="/img/content/contact_us_comp.jpg" alt="Image from Freepik.com">
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Contacteer ons',
  meta: [
    {
      name: 'Contacteer ons - BothWays Education',
      content: 'Twee Wegen naar Succes: Academisch en Persoonlijk',
    },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'BothWays Education' },
    { property: 'og:description', content: 'Contacteer ons - BothWays Education' },
  ],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - BothWays Education` : 'BothWays Education';
  }
})

useSeoMeta({
  title: 'Contact - BothWays Education',
  ogTitle: 'Contact - BothWays Education',
  description: 'Wij staan altijd klaar om uw vragen te beantwoorden en u te helpen met meer informatie over onze diensten.\n' +
      'Daarom horen wij graag van u!',
  ogDescription: 'Wij staan altijd klaar om uw vragen te beantwoorden en u te helpen met meer informatie over onze diensten.\n' +
      'Daarom horen wij graag van u!',
})
</script>

<style scoped>
section {
  min-height: 100vh;
}
</style>
