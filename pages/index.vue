<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Hero Section -->
    <section class="flex flex-col items-center justify-center text-center p-8 bg-white shadow-md h-screen">
      <h1 class="text-5xl font-bold text-gray-900 mb-4 leading-tight">
        Welkom bij <br />
        <span class="text-blue-600">BothWays Education!</span>
      </h1>
      <p class="text-lg text-gray-700 max-w-2xl mb-6">
        Bij BothWays Education geloven wij dat de sleutel tot een succesvolle schoolcarrière ligt in een combinatie van
        academische prestaties en persoonlijke groei.
      </p>
      <NuxtLink to="/over-ons" class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700">
        Onze Missie
      </NuxtLink>
      <img src="/img/content/notebook-pencil.jpg" alt="Education" class="mt-6 w-full max-w-lg rounded-lg shadow-lg" />
    </section>

    <!-- About Section -->
    <section class="container mx-auto flex flex-col lg:flex-row items-center gap-8 p-8 mt-20">
      <div class="lg:w-1/2">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Individuele Begeleiding</h2>
        <p class="text-gray-700">
          Wij begrijpen dat elke student uniek is en daarom passen wij onze bijlessen en begeleiding aan op de
          individuele behoeften van elke leerling. Door middel van positieve versterking en doelgerichte oefeningen
          helpen wij studenten om zelfvertrouwen op te bouwen en hun volledige potentieel te bereiken.
        </p>
      </div>
      <img src="/img/content/think-cloud.jpg" alt="Individuele begeleiding" class="w-full max-w-md rounded-lg shadow-lg" />
    </section>

    <!-- Methods Section -->
    <section class="bg-white p-8 mt-20">
      <div class="container mx-auto text-center">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Onze Methode</h2>
        <p class="text-gray-700 max-w-3xl mx-auto">
          Door middel van positieve versterking en doelgerichte oefeningen helpen wij studenten om zelfvertrouwen op te
          bouwen en hun volledige potentieel te bereiken.
        </p>
        <img src="/img/content/writing-hand.jpg" alt="Onze methode" class="mt-6 w-full max-w-lg mx-auto rounded-lg shadow-lg" />
      </div>
    </section>

    <!-- Call to Action -->
    <section class="flex flex-col items-center text-center p-8 bg-blue-600 text-white mt-20">
      <h2 class="text-2xl font-semibold mb-4">Klaar om te beginnen?</h2>
      <p class="max-w-2xl mb-4">
        Neem contact met ons op en ontdek hoe wij kunnen helpen bij het succes en de persoonlijke groei van uw kind.
      </p>
      <NuxtLink to="/contact" class="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-200">
        Neem contact op
      </NuxtLink>
    </section>
  </div>
</template>