<template>
  <div class="min-h-screen relative z-2">
    <section class="min-h-screen bg-[url('/img/content/main_blue_2_bg_rotated_comp.jpg')] bg-cover bg-center bg-no-repeat p-8 mx-auto">
      <!-- Hero Section -->
      <div class="h-screen md:flex justify-around items-center">
        <div class="md:w-2/5">
          <h1 class="text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Welkom bij <br />
            <span class="text-blue-600">BothWays Education!</span>
          </h1>
          <p class="text-lg text-gray-700 max-w-2xl mb-6">
            Bij BothWays Education geloven wij dat de sleutel tot een succesvolle schoolcarrière ligt in een combinatie van
            academische prestaties en persoonlijke groei.
          </p>
          <NuxtLink to="#" class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700">
            Ontdek Hoe
          </NuxtLink>
        </div>
        <div>
          <img src="/img/content/stack_of_books.jpg" alt="Education" class="w-full max-w-lg rounded-br-lg rounded-bl-lg rounded-t-full shadow-lg" />
        </div>
      </div>
      <div>
        <h1 class="text-center text-6xl">Twee Wegen naar Succes: <span class="text-blue-500">Academisch en Persoonlijk</span></h1>
      </div>
      <!-- About Section -->
      <div class="md:flex justify-center items-center my-50 p-8">
        <div class="md:w-1/2">
          <img src="/img/content/writing-hand.jpg" alt="Individuele begeleiding" class="w-[85%] rounded-tl-[50%] rounded-tr-[10%] rounded-br-[50%] rounded-bl-[10%] shadow-lg" />
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
      <div class="my-15">
        <h1 class="text-center text-6xl">Bekijk de impact!</h1>
      </div>
      <div class="p-8 w-9/10 mx-auto my-50">
        <Carousel :items="slides" />
      </div>
      <!-- Call to Action -->
      <div class="flex flex-col items-center text-center p-8">
        <h2 class="text-2xl font-semibold mb-4">Klaar om te beginnen?</h2>
        <p class="max-w-2xl mb-4">
          Neem contact met ons op en ontdek hoe wij kunnen helpen bij het succes en de persoonlijke groei van uw kind.
        </p>
        <NuxtLink to="/contact" class="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-200">
          Neem contact op
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Carousel from '@/components/Carousel.vue'

const slides = [
  {
    title: 'Ouders van Joris',
    description: 'BothWays Education heeft Joris geholpen zijn zelfvertrouwen terug te vinden. Hij heeft nu een positieve\n' +
        'houding ten opzichte van school en is veel gemotiveerder. We zijn zeer tevreden met de resultaten en de\n' +
        'persoonlijke aandacht die hij heeft gekregen.',
    image: 'notebook-pencil.jpg'
  },
  {
    title: 'Jesaja',
    description: '"De bijlessen bij BothWays Education hebben mij niet alleen geholpen om mijn cijfers te verbeteren, maar ook\n' +
        'om zelfverzekerder te worden. Ik voelde me altijd gesteund en begrepen. Dank jullie wel!',
    image: 'think-cloud.jpg'
  },
  {
    title: 'Ouders van Sophie',
    description: 'We waren op zoek naar een begeleidingsprogramma dat verder ging dan alleen huiswerkbegeleiding, en we\n' +
        'hebben dat gevonden bij BothWays Education. Sophie heeft niet alleen haar cijfers verbeterd, maar ook\n' +
        'belangrijke levensvaardigheden geleerd die haar op de lange termijn zullen helpen. We raden BothWays\n' +
        'Education ten zeerste aan',
    image: 'writing-hand.jpg'
  },
  {
    title: 'Danny\'s moeder',
    description: 'Dankzij BothWays Education heeft Lisa niet alleen haar cijfers verbeterd, maar ook haar zelfvertrouwen herwonnen. Ze is een ander kind geworden!',
    image: 'main_bg.jpg'
  },
  {
    title: 'Mark\'s vader',
    description: 'Mark kijkt nu uit naar zijn schooldagen en voelt zich trots op wat hij kan bereiken. We zijn ontzettend dankbaar ' +
        'voor de hulp van BothWays Education',
    image: 'book_vector.png'
  },
  {
    title: 'Ivy',
    description: 'De bijlessen bij BothWays Education hebben mij niet alleen geholpen om mijn cijfers te verbeteren, maar ook ' +
        'om zelfverzekerder te worden. Ik voelde me altijd gesteund en begrepen. Dank jullie wel!',
    image: 'writing-hand.jpg'
  },
]
</script>