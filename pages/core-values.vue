<script setup lang="ts">
import { ref } from 'vue';

definePageMeta({
  path: "/kernwaarden"
});

const content = ref([
  { title: "Individuele Aandacht", text: "Bij BothWays Education geloven we dat elke student uniek is. Daarom passen wij onze bijlessen en begeleiding aan op de specifieke behoeften en leerstijlen van elke leerling.", image: "/img/content/notebook-pencil.jpg" },
  { title: "Positieve Versterking", text: "Wij zijn ervan overtuigd dat positieve bekrachtiging een cruciale rol speelt in het opbouwen van zelfvertrouwen en motivatie.", image: "/img/content/notebook-pencil.jpg" },
  { title: "Doelgericht Leren", text: "Bij BothWays Education helpen we studenten bij het stellen en bereiken van zowel academische als persoonlijke doelen.", image: "/img/content/notebook-pencil.jpg" },
  { title: "Holistische Ontwikkeling", text: "Wij richten ons op de algehele ontwikkeling van onze studenten, zowel academisch als persoonlijk.", image: "/img/content/notebook-pencil.jpg" },
  { title: "Betrokkenheid en Toewijding", text: "Ons team van ervaren docenten en mentoren is volledig toegewijd aan de groei en het succes van elke student.", image: "/img/content/notebook-pencil.jpg" },
  { title: "Innovatieve Aanpak", text: "Wij blijven ons continu ontwikkelen en innoveren om de beste leermethoden en technologieën te integreren in onze begeleiding.", image: "/img/content/notebook-pencil.jpg" },
  { title: "Transparantie en Communicatie", text: "Open en eerlijke communicatie met studenten en ouders is essentieel voor ons.", image: "/img/content/notebook-pencil.jpg" }
]);
</script>

<template>
  <main class="mt-24 p-8 space-y-16">
    <section class="bg-white border-b py-8">
      <div class="container max-w-5xl mx-auto m-8">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Onze Kernwaarden
        </h2>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-5/6 sm:w-1/2 p-6">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
              Lorem ipsum dolor sit amet
            </h3>
            <p class="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.

              Images from:

              <a class="text-pink-500 underline" href="https://undraw.co/">undraw.co</a>
            </p>
          </div>
          <div class="w-full sm:w-1/2 p-6">
            <img src="/img/content/notebook-pencil.jpg" alt="Over Ons" class="w-full max-w-lg rounded-lg shadow-lg">
          </div>
        </div>
        <div class="flex flex-wrap flex-col-reverse sm:flex-row">
          <div class="w-full sm:w-1/2 p-6 mt-6">
            <img src="/img/content/notebook-pencil.jpg" alt="Over Ons" class="w-full max-w-lg rounded-lg shadow-lg">
          </div>
          <div class="w-full sm:w-1/2 p-6 mt-6">
            <div class="align-middle">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                Lorem ipsum dolor sit amet
              </h3>
              <p class="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                <br />
                <br />
                Images from:

                <a class="text-pink-500 underline" href="https://undraw.co/">undraw.co</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>

</style>