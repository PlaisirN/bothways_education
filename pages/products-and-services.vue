<script setup lang="ts">
definePageMeta({
  path: "/producten-en-diensten"
});
</script>

<template>
  <div class="min-h-screen relative z-2">
    <section id="pas-header" class="min-h-screen bg-[url('/img/content/white_2_bg.jpg')] bg-cover bg-center bg-no-repeat p-8 mx-auto flex flex-col justify-center items-center">
      <div class="md:flex justify-center align-center items-center gap-8">
        <div class="md:w-2/6 md:h-[600px] relative">
          <img class="w-full hidden md:block absolute md:-left-[250px] md:-top-[50px]" src="/img/content/women_book.jpg" alt="Image from Freepik.com">
        </div>
        <div class="md:w-2/5 flex flex-col justify-center gap-8">
          <h1 class="text-4xl md:text-7xl text-center text-vibrantOrange">
            Onze diensten
          </h1>
          <p class="md:text-xl text-center leading-8 tracking-wide">
            Wij bieden een uitgebreid scala aan producten en diensten die zijn ontworpen om
            studenten te helpen hun academische en persoonlijke doelen te bereiken. Onze benadering is holistisch en op
            maat gemaakt, waardoor elke student de specifieke ondersteuning krijgt die hij of zij nodig heeft.
          </p>
          <div class="text-center mx-auto mt-8">
            <NuxtLink to="#pas-summary" class="flex justify-center align-center items-center gap-2 px-6 py-3 text-blue-600 font-semibold rounded-lg shadow bg-gray-200 cursor-pointer">
              <span>
                Bekijk onze producten!
              </span>
              <span class="self-end">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 animate-bounce">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
              </svg>
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section id="pas-summary" class="bg-white p-8">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center my-32">
        <div>
          <div>
            <Pill text="Bijlessen op maat" bg="bg-warmGrey" textColor="text-white"/>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Bijlessen afgestemd op individuele behoeften
          </h2>
          <p class="text-gray-600 mb-8">
            Onze bijlessen zijn afgestemd op de individuele behoeften van elke student. Of het nu gaat om hulp bij een
            specifiek vak, voorbereiding op toetsen, of het ontwikkelen van studievaardigheden, onze ervaren docenten
            bieden persoonlijke en gerichte ondersteuning. Wij bieden bijlessen in een breed scala aan vakken, waaronder
            wiskunde, natuurwetenschappen, talen en sociale wetenschappen.
            Benieuwd voor wie?
          </p>
          <NuxtLink to="/marktpositie-en-doelgroep" class="bg-softGold text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-vibrantOrange transition">
            Bekijk onze doelgroepen
          </NuxtLink>
        </div>
        <div class="bg-softGold opacity-90 rounded-xl shadow-xl p-4">
          <img class="rounded-xl" src="/img/content/education_img.jpg" alt="Picture from Pexels.com">
        </div>
      </div>
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center my-32">
        <div class="order-1 md:order-2">
          <div>
            <Pill text="Huiswerkbegeleiding" bg="bg-warmGrey" textColor="text-white"/>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Gestructureerde omgeving voor studenten
          </h2>
          <p class="text-gray-600 mb-8">
            Wij begrijpen dat huiswerk een uitdaging kan zijn voor veel studenten...
          </p>
          <NuxtLink to="/marktpositie-en-doelgroep" class="bg-softGold text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-vibrantOrange transition">
            Bekijk onze doelgroepen
          </NuxtLink>
        </div>
        <div class="order-2 md:order-1 bg-warmGrey opacity-90 rounded-xl shadow-xl p-4">
          <img class="rounded-xl" src="/img/content/education_img_2.jpg" alt="Picture from Pexels.com">
        </div>
      </div>
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center my-32">
        <div>
          <div>
            <Pill text="Examentraining" bg="bg-warmGrey" textColor="text-white"/>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Intensieve examentrainingen
          </h2>
          <p class="text-gray-600 mb-8">
            Voor studenten die zich voorbereiden op belangrijke examens, bieden wij intensieve examentraining. Onze
            trainingen zijn ontworpen om studenten te helpen hun kennis en vaardigheden te consolideren, zelfvertrouwen
            op te bouwen en strategieën te leren voor het succesvol afleggen van examens. We bieden zowel individuele
            als groepssessies, afhankelijk van de voorkeur van de student.
          </p>
          <NuxtLink to="/marktpositie-en-doelgroep" class="bg-softGold text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-vibrantOrange transition">
            Bekijk onze doelgroepen
          </NuxtLink>
        </div>
        <div class="bg-softGold opacity-90 rounded-xl shadow-xl p-4">
          <img class="rounded-xl" src="/img/content/education_img_3.jpg" alt="Picture from Pexels.com">
        </div>
      </div>
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center my-32">
        <div class="order-1 md:order-2">
          <div>
            <Pill text="Persoonlijke ontwikkeling" bg="bg-warmGrey" textColor="text-white"/>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Ontwikkeling van zelfvertrouwen en persoonlijke vaardigheden
          </h2>
          <p class="text-gray-600 mb-8">
            Bij BothWays Education geloven we dat zelfvertrouwen en persoonlijke vaardigheden cruciaal zijn voor
            academisch succes. Daarom integreren we oefeningen en activiteiten gericht op persoonlijke ontwikkeling in
            onze bijlessen en begeleiding. Studenten leren vaardigheden zoals time management, stressmanagement, en
            effectieve communicatie, die hen helpen zowel in hun studie als in het dagelijks leven.
          </p>
          <NuxtLink to="/marktpositie-en-doelgroep" class="bg-softGold text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-vibrantOrange transition">
            Bekijk onze doelgroepen
          </NuxtLink>
        </div>
        <div class="order-2 md:order-1 bg-warmGrey opacity-90 rounded-xl shadow-xl p-4">
          <img class="rounded-xl" src="/img/content/education_img_4.jpg" alt="Picture from Pexels.com">
        </div>
      </div>
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center my-32">
        <div>
          <div>
            <Pill text="Studievaardigheden Workshops" bg="bg-warmGrey" textColor="text-white"/>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Gerichte workshops met verschillende onderwerpen
          </h2>
          <p class="text-gray-600 mb-8">
            Onze workshops zijn ontworpen om studenten te voorzien van de essentiële studievaardigheden die nodig zijn
            voor succes op school en daarbuiten. Onderwerpen omvatten onder andere: notitietechnieken, leermethodes,
            plannen en organiseren, en motivatiebehoud. Deze workshops zijn interactief en praktisch, met veel ruimte voor
            oefening en feedback.
          </p>
          <NuxtLink to="/marktpositie-en-doelgroep" class="bg-softGold text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-vibrantOrange transition">
            Bekijk onze doelgroepen
          </NuxtLink>
        </div>
        <div class="bg-softGold opacity-90 rounded-xl shadow-xl p-4">
          <img class="rounded-xl" src="/img/content/education_img_5.jpg" alt="Picture from Pexels.com">
        </div>
      </div>
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center my-32">
        <div class="order-1 md:order-2">
          <div>
            <Pill text="Oudergesprekken en Voortgangsrapporten" bg="bg-warmGrey" textColor="text-white"/>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Betrokkenheid van de ouders is belangrijk
          </h2>
          <p class="text-gray-600 mb-8">
            Wij hechten veel waarde aan de betrokkenheid van ouders bij het leerproces van hun kinderen. Daarom bieden
            we regelmatig oudergesprekken en voortgangsrapporten aan. Deze sessies geven ouders inzicht in de
            vooruitgang van hun kind, de doelen die zijn gesteld en de stappen die worden ondernomen om deze doelen te
            bereiken.
          </p>
          <NuxtLink to="/marktpositie-en-doelgroep" class="bg-softGold text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-vibrantOrange transition">
            Bekijk onze doelgroepen
          </NuxtLink>
        </div>
        <div class="order-2 md:order-1 bg-warmGrey opacity-90 rounded-xl shadow-xl p-4">
          <img class="rounded-xl" src="/img/content/education_img_6.jpg" alt="Picture from Pexels.com">
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