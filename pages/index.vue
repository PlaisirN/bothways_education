<template>
  <div class="min-h-screen relative z-2 bg-white">
    <section class="min-h-screen bg-lightBlue p-8 mx-auto">
      <!-- Hero Section -->
      <div class="pt-44 pb-14 md:pt-10 md:pb-10 md:flex justify-center items-center">
        <div class="md:w-4/5 md:flex justify-between items-center gap-10 md:my-32">
          <div class="md:w-1/2 mb-14 md:mb-0">
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight text-center md:text-start">
              Welkom bij <br />
              <span class="text-blue-600">BothWays Education!</span>
            </h1>
            <p class="text-lg text-gray-700 max-w-2xl mb-6 text-center md:text-start">
              Bij BothWays Education geloven wij dat de sleutel tot een succesvolle schoolcarrière ligt in een combinatie van
              academische prestaties en persoonlijke groei.
            </p>
            <div class="">
              <NuxtLink to="#two-roads-section" class="w-3/4 mx-auto md:mx-0 md:w-1/2 flex justify-center align-center items-center gap-2 px-6 py-3 text-blue-600 font-semibold rounded-lg shadow bg-gray-200 cursor-pointer">
                <span>
                  Ontdek hoe
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
            <img class="md:w-5/6 rounded-full mx-auto" src="/img/content/together.jpg" alt="Image from Freepik.com">
          </div>
        </div>
      </div>
      <div id="two-roads-section" class="mt-20 mb-36">
        <h1 class="text-center text-3xl md:text-6xl">
          Twee Wegen naar Succes:
          <br>
          <span class="text-blue-500">Academisch en Persoonlijk</span>
        </h1>
      </div>
      <!-- About Section -->
      <div class="md:flex justify-center items-center my-50 md:p-8">
        <div class="md:w-1/2 mb-10 md:mb-0">
          <img
              src="/img/content/writing-hand.jpg"
              alt="Individuele begeleiding"
              class="w-full md:w-[85%] rounded-tl-[50%] rounded-tr-[10%] rounded-br-[50%] rounded-bl-[10%] shadow-lg"
          />
        </div>
        <div class="md:w-2/5 bg-white rounded-xl p-8 shadow-lg">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">Individuele Begeleiding</h2>
          <p class="text-gray-700">
            Wij begrijpen dat elke student uniek is en daarom passen wij onze bijlessen en begeleiding aan op de
            individuele behoeften van elke leerling. Door middel van positieve versterking en doelgerichte oefeningen
            helpen wij studenten om zelfvertrouwen op te bouwen en hun volledige potentieel te bereiken.
            <br>
            <br>
            Onze ervaring
            leert dat dit niet alleen leidt tot betere schoolresultaten, maar ook tot een sterkere, meer gemotiveerde
            persoonlijkheid.
          </p>
        </div>
      </div>
      <div class="my-40">
        <h1 class="text-center text-5xl md:text-6xl">Bekijk de impact!</h1>
      </div>
      <div class="md:p-8 w-full md:w-9/10 mx-auto my-32">
        <Carousel :items="slides" />
      </div>
      <!-- Call to Action -->
      <CallToAction />
    </section>
  </div>
</template>

<script setup lang="ts">
import Carousel from '@/components/Carousel.vue'
import CallToAction from "~/components/CallToAction.vue";

const slides = [
  {
    title: 'Ouders van Joris',
    description: 'BothWays Education heeft Joris geholpen zijn zelfvertrouwen terug te vinden. Hij heeft nu een positieve\n' +
        'houding ten opzichte van school en is veel gemotiveerder. We zijn zeer tevreden met de resultaten en de\n' +
        'persoonlijke aandacht die hij heeft gekregen.',
    image: 'avatar_man.jpg'
  },
  {
    title: 'Jesaja',
    description: '"De bijlessen bij BothWays Education hebben mij niet alleen geholpen om mijn cijfers te verbeteren, maar ook\n' +
        'om zelfverzekerder te worden. Ik voelde me altijd gesteund en begrepen. Dank jullie wel!',
    image: 'avatar_man_4.jpg'
  },
  {
    title: 'Ouders van Sophie',
    description: 'We waren op zoek naar een begeleidingsprogramma dat verder ging dan alleen huiswerkbegeleiding, en we\n' +
        'hebben dat gevonden bij BothWays Education. Sophie heeft niet alleen haar cijfers verbeterd, maar ook\n' +
        'belangrijke levensvaardigheden geleerd die haar op de lange termijn zullen helpen. We raden BothWays\n' +
        'Education ten zeerste aan',
    image: 'avatar_woman.jpg'
  },
  {
    title: 'Danny\'s moeder',
    description: 'Dankzij BothWays Education heeft Lisa niet alleen haar cijfers verbeterd, maar ook haar zelfvertrouwen herwonnen. Ze is een ander kind geworden!',
    image: 'avatar_woman_2.jpg'
  },
  {
    title: 'Mark\'s vader',
    description: 'Mark kijkt nu uit naar zijn schooldagen en voelt zich trots op wat hij kan bereiken. We zijn ontzettend dankbaar ' +
        'voor de hulp van BothWays Education',
    image: 'avatar_man_3.jpg'
  },
  {
    title: 'Ivy',
    description: 'De bijlessen bij BothWays Education hebben mij niet alleen geholpen om mijn cijfers te verbeteren, maar ook ' +
        'om zelfverzekerder te worden. Ik voelde me altijd gesteund en begrepen. Dank jullie wel!',
    image: 'avatar_woman_3.jpg'
  },
]
</script>