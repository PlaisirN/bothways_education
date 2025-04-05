<script setup lang="ts">
definePageMeta({
  title: 'Toekomstige plannen en doelen',
  path: "/toekomstige-doelen-en-plannen"
});

useHead({
  title: 'Welkom bij BothWays Education',
  meta: [
    {
      name: 'BothWays Education - Twee Wegen naar Succes: Academisch en Persoonlijk',
      content: 'Twee Wegen naar Succes: Academisch en Persoonlijk',
    },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'BothWays Education' },
    { property: 'og:description', content: 'BothWays Education - Twee Wegen naar Succes: Academisch en Persoonlijk' },
  ],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - BothWays Education` : 'BothWays Education';
  }
})

useSeoMeta({
  title: 'Toekomstige plannen en doelen - BothWays Education',
  ogTitle: 'Toekomstige plannen en doelen - BothWays Education',
  description: 'Bij BothWays Education streven we ernaar om onze diensten voortdurend te verbeteren en uit te breiden, zodat' +
  'we nog meer studenten kunnen helpen bij hun academische en persoonlijke groei.',
  ogDescription: 'Bij BothWays Education streven we ernaar om onze diensten voortdurend te verbeteren en uit te breiden, zodat' +
      'we nog meer studenten kunnen helpen bij hun academische en persoonlijke groei.',
})
</script>

<template>
  <div class="min-h-screen z-2">
    <section class="min-h-5/6 px-10 pt-44 pb-14 md:pt-10 md:pb-10 bg-warmGrey md:flex justify-center items-center">
      <div class="md:w-4/5 md:flex justify-between items-center gap-10 md:my-32">
        <div class="md:w-1/2 mb-14 md:mb-0">
          <h1 class="text-4xl text-white mb-5">Benieuwd naar hoe wij over de toekomst denken?</h1>
          <h4 class=" text-lg text-white mb-5">
            Bij BothWays Education streven we ernaar om onze diensten voortdurend te verbeteren en uit te breiden, zodat
            we nog meer studenten kunnen helpen bij hun academische en persoonlijke groei. Onze toekomstplannen zijn
            gericht op innovatie, uitbreiding en het versterken van onze impact.
          </h4>
          <div>
            <NuxtLink to="#goals-section" class="md:w-1/2 flex justify-center align-center items-center gap-2 px-6 py-3 text-blue-600 font-semibold rounded-lg shadow bg-gray-200 cursor-pointer">
              <span>
                Onze plannen
              </span>
              <span class="self-end">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 animate-bounce">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
              </svg>
              </span>
            </NuxtLink>
          </div>
        </div>
        <div class="md:w-1/2">
          <img class="md:w-5/6 rounded-full mx-auto" src="/img/content/doelgroep_4.jpg" alt="Image from Freepik.com">
        </div>
      </div>
    </section>
    <section id="goals-section" class="h-[50%] bg-white py-20">
      <div class="mx-auto flex flex-col lg:w-3/5 justify-center items-center gap-8 p-8 bg-white">
        <h1 class="text-4xl text-center font-semibold text-softGold mb-6">Hoe wij onze diensten willen uitbreiden</h1>
        <div class="text-gray-700">
          <p class="text-xl text-gray-700 text-center">
            Wij plannen om onze diensten uit te breiden met nieuwe programma's en workshops die inspelen op de
            specifieke behoeften van onze studenten. Dit omvat:
          </p>
          <div class="text-center flex justify-center my-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-12 text-softGold text-center">
              <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
            </svg>
          </div>
          <p class="text-xl text-gray-700 text-center">
            <strong>Bijles en Begeleiding</strong>: We willen onze online aanwezigheid versterken door het aanbieden van
            interactieve en flexibele online bijlessen en huiswerkbegeleiding. Dit biedt studenten de mogelijkheid
            om op elk moment en vanaf elke locatie toegang te krijgen tot onze diensten.
          </p>
          <div class="text-center flex justify-center my-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-12 text-softGold text-center">
              <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
            </svg>
          </div>
          <p class="text-xl text-gray-700 text-center">
            <strong>Speciale Programma's voor Leeruitdagingen</strong>: We zijn van plan om onze ondersteuning voor studenten
            met leeruitdagingen zoals dyslexie, ADHD en andere leerstoornissen uit te breiden. Dit omvat
            gespecialiseerde programma's en individuele begeleiding die zijn ontworpen om deze studenten te
            helpen hun unieke uitdagingen te overwinnen.
          </p>
          <div class="text-center flex justify-center my-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-12 text-softGold text-center">
              <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
            </svg>
          </div>
          <p class="text-xl text-gray-700 text-center">
            <strong>Leiderschap en Mentorschap</strong>: We willen programma's ontwikkelen die gericht zijn op leiderschap en
            mentorschap, waardoor studenten de kans krijgen om belangrijke leiderschapsvaardigheden te
            ontwikkelen en anderen te inspireren
          </p>
        </div>
      </div>
    </section>
    <section class="h-[50%] bg-softGold py-20">
      <div class="mx-auto flex flex-col lg:w-3/5 justify-center items-center gap-8 p-8">
        <h1 class="text-4xl text-center font-semibold text-white mb-6">Hoe wij onze kwaliteit verbeteren</h1>
        <div class="text-white">
          <p class="text-xl text-white text-center">
            Kwaliteit is een van onze kernwaarden, en we blijven ons inzetten voor het leveren van de best mogelijke
            begeleiding. Onze plannen omvatten:
          </p>
          <div class="text-center flex justify-center my-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-12 text-white text-center">
              <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
            </svg>
          </div>
          <p class="text-xl text-white text-center">
            <strong>Professionele Ontwikkeling voor Docenten</strong>: Door voortdurende training en professionele ontwikkeling
            te bieden aan onze docenten en mentoren, zorgen we ervoor dat zij op de hoogte blijven van de
            nieuwste onderwijsstrategieën en -methoden.
          </p>
          <div class="text-center flex justify-center my-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-12 text-white text-center">
              <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
            </svg>
          </div>
          <p class="text-xl text-white text-center">
            <strong>Feedbacksystemen</strong>: We zullen onze feedbacksystemen verder verbeteren om de voortgang van
            studenten nauwkeurig te monitoren en aan te passen aan hun behoeften. Dit helpt ons om onze
            begeleiding voortdurend te optimaliseren.
          </p>
        </div>
      </div>
    </section>
    <section class="bg-white p-8">
      <CallToAction
          buttonColor="bg-blue-600"
          textColor="text-white"
          title="Genoeg gezien?"
          description="Bij BothWays Education zijn we toegewijd aan het ondersteunen van elke student op hun unieke leerreis. Door
onze marktpositie te combineren met een diep begrip van de behoeften van onze doelgroep, kunnen we een
blijvende impact maken op zowel de academische als persoonlijke ontwikkeling van onze studenten."
      />
    </section>
    <section class="h-[50%] bg-warmGrey py-20">
      <div class="mx-auto flex flex-col lg:w-3/5 justify-center items-center gap-8 p-8">
        <h1 class="text-4xl text-center font-semibold text-white mb-6">Hoe wij betrokken blijven</h1>
        <div class="text-white">
          <p class="text-xl text-white text-center">
            We geloven dat samenwerking met de bredere gemeenschap essentieel is voor het succes van onze studenten.
            Daarom plannen we:
          </p>
          <div class="text-center flex justify-center my-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-12 text-white text-center">
              <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
            </svg>
          </div>
          <p class="text-xl text-white text-center">
            <strong>Samenwerkingen met Scholen</strong>: Door nauwere banden met lokale scholen te smeden, kunnen we
            effectiever samenwerken om de behoeften van studenten te begrijpen en te ondersteunen.
          </p>
          <div class="text-center flex justify-center my-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-12 text-white text-center">
              <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
            </svg>
          </div>
          <p class="text-xl text-white text-center">
            <strong>Ouderbetrokkenheid</strong>: We willen onze ouderbetrokkenheidsprogramma's versterken, zodat ouders
            actief kunnen bijdragen aan het leerproces van hun kinderen en op de hoogte blijven van hun
            voortgang en successen.
          </p>
        </div>
      </div>
    </section>
    <section class="h-[50%] bg-white md:flex justify-center items-center">
      <div class="md:w-4/5 md:flex justify-between items-center gap-10 md:mt-5">
        <div class="md:w-1/5 p-8 md:p-0">
          <h1 class="text-3xl text-warmGrey mb-5">
            Twee Wegen naar Succes: <span class="text-softGold">Academisch en Persoonlijk</span>
          </h1>
          <div>
            <NuxtLink to="/producten-en-diensten" class="flex justify-center align-center items-center gap-2 px-6 py-3 text-vibrantOrange font-semibold rounded-lg shadow bg-gray-200 cursor-pointer">
                Bekijk hoe
            </NuxtLink>
          </div>
        </div>
        <div class="md:w-4/5">
          <img class="w-full mx-auto" src="/img/content/goals_people_vector_comp.jpg" alt="Image from Freepik.com">
        </div>
      </div>
    </section>
    <section class="h-[50%] bg-softGold py-20">
      <div class="mx-auto flex flex-col lg:w-3/5 justify-center items-center gap-8 p-8">
        <h1 class="text-4xl text-center font-semibold text-white mb-6">Innovatie in educatieve technologie</h1>
        <div class="text-white">
          <p class="text-xl text-white text-center">
            Technologie speelt een cruciale rol in modern onderwijs. Onze plannen omvatten:
          </p>
          <div class="text-center flex justify-center my-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-12 text-white text-center">
              <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
            </svg>
          </div>
          <p class="text-xl text-white text-center">
            <strong>Integratie van Educatieve Technologie</strong>: We blijven investeren in de nieuwste educatieve technologieën
            om onze lesmethoden te verbeteren en studenten een meer interactieve en boeiende leerervaring te
            bieden.
          </p>
          <div class="text-center flex justify-center my-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-12 text-white text-center">
              <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
            </svg>
          </div>
          <p class="text-xl text-white text-center">
            <strong>E-learning Platforms</strong>: We ontwikkelen onze eigen e-learning platforms om studenten toegang te
            geven tot aanvullende leermiddelen, oefeningen en interactieve lessen die hen helpen hun leerdoelen
            te bereiken.
          </p>
        </div>
      </div>
    </section>
    <section class="bg-white p-8">
      <CallToAction buttonColor="bg-blue-600" textColor="text-white"/>
    </section>
  </div>
</template>

<style scoped>

</style>