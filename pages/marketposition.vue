<script setup lang="ts">
definePageMeta({
  path: "/marktpositie-en-doelgroep"
});
</script>

<template>
  <div class="min-h-screen z-2">
    <section class="min-h-5/6 px-10 pt-44 pb-14 md:pt-10 md:pb-10 bg-warmGrey md:flex justify-center items-center">
      <div class="md:w-4/5 md:flex justify-between items-center gap-10 md:my-32">
        <div class="md:w-1/2 mb-14 md:mb-0">
          <h1 class="text-4xl text-white mb-5">Marktpositie en Doelgroep</h1>
          <h4 class="text-white mb-5">
            BothWays Education heeft zich gevestigd als een toonaangevende aanbieder van bijles en huiswerkbegeleiding
            met een unieke focus op zowel academische prestaties als persoonlijke ontwikkeling.
          </h4>
          <div>
            <NuxtLink to="#people-summary" class="w-3/4 md:w-1/2 flex justify-center align-center items-center gap-2 px-6 py-3 text-blue-600 font-semibold rounded-lg shadow bg-gray-200 cursor-pointer">
              <span>
                Bekijk onze doelgroepen
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
          <img class="w-4/6 md:w-5/6 rounded-full mx-auto" src="/img/content/doelgroep_5.jpg" alt="Image from Freepik.com">
        </div>
      </div>
    </section>
    <section class=" h-[50%] bg-white py-20">
      <div class="mx-auto flex flex-col lg:w-3/5 justify-center items-center gap-8 p-8 bg-white">
        <h1 class="text-4xl text-center font-semibold text-softGold mb-6">Hoe wij ons positioneren</h1>
        <div class="text-gray-700">
          <p class="text-lg md:text-xl text-gray-700 mb-10">
            BothWays Education heeft zich gevestigd als een toonaangevende aanbieder van bijles en huiswerkbegeleiding
            met een unieke focus op zowel academische prestaties als persoonlijke ontwikkeling. Onze holistische
            benadering onderscheidt ons van andere educatieve diensten, omdat wij begrijpen dat zelfvertrouwen en
            persoonlijke groei net zo belangrijk zijn als goede cijfers.
          </p>
          <p class="text-lg md:text-xl text-gray-700 mb-10">
            Door onze persoonlijke en positieve benadering hebben we een sterke reputatie opgebouwd in de regio. Ouders
            en studenten waarderen onze toewijding aan het leveren van hoogwaardige, op maat gemaakte ondersteuning
            die verder gaat dan de traditionele bijlesmethoden. Onze bewezen resultaten en tevreden klanten getuigen van
            de effectiviteit van onze methoden en de impact die wij hebben op het leven van onze studenten.
          </p>
        </div>
      </div>
    </section>
    <section id="people-summary" class="bg-softGold p-8">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center my-32">
        <div>
          <div>
            <Pill text="Basisschoolleerlingen" bg="bg-warmGrey" textColor="text-white"/>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Ondersteuning voor de kleintjes...
          </h2>
          <p class="text-white mb-8">
            We bieden ondersteuning aan jongere studenten die hulp nodig hebben bij de
            basisvakken zoals rekenen, taal en begrijpend lezen. Onze doelgerichte aanpak helpt hen een sterke basis te
            leggen voor hun verdere schoolcarrière.
          </p>
          <NuxtLink to="/producten-en-diensten" class="bg-royalBlue text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-vibrantOrange transition">
            Producten en diensten
          </NuxtLink>
        </div>
        <div class="bg-white opacity-90 rounded-full shadow-xl p-4">
          <img class="rounded-full" src="/img/content/doelgroep_2.jpg" alt="Picture from Freepik.com">
        </div>
      </div>
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center my-32">
        <div class="order-1 md:order-2">
          <div>
            <Pill text="Middelbare scholieren" bg="bg-warmGrey" textColor="text-white"/>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            ...en voor het voortgezet onderwijs
          </h2>
          <p class="text-white mb-8">
            We begeleiden studenten in het voortgezet onderwijs bij een breed scala aan vakken,
            van exacte wetenschappen tot talen en mens- en maatschappijvakken. Onze examentrainingen zijn speciaal
            ontworpen om hen voor te bereiden op belangrijke toetsen en examens.
          </p>
          <NuxtLink to="/producten-en-diensten" class="bg-royalBlue text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-vibrantOrange transition">
            Producten en diensten
          </NuxtLink>
        </div>
        <div class="order-2 md:order-1 bg-white opacity-90 rounded-full shadow-xl p-4">
          <img class="rounded-full" src="/img/content/doelgroep_3.jpg" alt="Picture from Freepik.com">
        </div>
      </div>
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center my-32">
        <div>
          <div>
            <Pill text="Ouders" bg="bg-warmGrey" textColor="text-white"/>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Extra gemoedsrust voor mama en papa
          </h2>
          <p class="text-white mb-8">
            Ouders die op zoek zijn naar kwalitatieve en betrouwbare ondersteuning voor hun kinderen vinden in
            BothWays Education een partner die niet alleen de academische prestaties van hun kinderen verbetert, maar
            ook hun zelfvertrouwen en persoonlijke vaardigheden versterkt.
          </p>
          <NuxtLink to="/producten-en-diensten" class="bg-royalBlue text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-vibrantOrange transition">
            Producten en diensten
          </NuxtLink>
        </div>
        <div class="bg-white opacity-90 rounded-full shadow-xl p-4">
          <img class="rounded-full" src="/img/content/doelgroep_1.jpg" alt="Picture from Freepik.com">
        </div>
      </div>
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center my-32">
        <div class="order-1 md:order-2">
          <div>
            <Pill text="Studenten met leeruitdagingen" bg="bg-warmGrey" textColor="text-white"/>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Hulp bij dyslexie & ADHD
          </h2>
          <p class="text-white mb-8">
            We bieden gespecialiseerde ondersteuning aan studenten met
            leeruitdagingen zoals dyslexie, ADHD en andere leerstoornissen. Onze ervaren docenten passen hun
            benaderingen aan om tegemoet te komen aan de unieke behoeften van deze studenten.
          </p>
          <NuxtLink to="/producten-en-diensten" class="bg-royalBlue text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-vibrantOrange transition">
            Producten en diensten
          </NuxtLink>
        </div>
        <div class="order-2 md:order-1 bg-white opacity-90 rounded-full shadow-xl p-4">
          <img class="rounded-full" src="/img/content/doelgroep_5.jpg" alt="Picture from Freepik.com">
        </div>
      </div>
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center my-32">
        <div>
          <div>
            <Pill text="Ambitieuze studenten" bg="bg-warmGrey" textColor="text-white"/>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Wij houden het oog op de toekomst
          </h2>
          <p class="text-white mb-8">
            Studenten die streven naar uitmuntendheid en zich willen voorbereiden op toelating
            tot prestigieuze scholen en universiteiten kunnen profiteren van onze intensieve begeleidingsprogramma's en
            studievaardigheden workshops.
          </p>
          <NuxtLink to="/producten-en-diensten" class="bg-royalBlue text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-vibrantOrange transition">
            Producten en diensten
          </NuxtLink>
        </div>
        <div class="bg-white opacity-90 rounded-full shadow-xl p-4">
          <img class="rounded-full" src="/img/content/doelgroep_4.jpg" alt="Picture from Freepik.com">
        </div>
      </div>
    </section>
    <section class="bg-white p-8">
      <CallToAction
          buttonColor="bg-blue-600"
          textColor="text-white"
          description="Bij BothWays Education zijn we toegewijd aan het ondersteunen van elke student op hun unieke leerreis. Door
onze marktpositie te combineren met een diep begrip van de behoeften van onze doelgroep, kunnen we een
blijvende impact maken op zowel de academische als persoonlijke ontwikkeling van onze studenten."
      />
    </section>
  </div>
</template>

<style scoped>

</style>