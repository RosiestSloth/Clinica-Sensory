<template>
  <div class="max-w-screen max-h-screen">
    <header />
    <main class="">
      <section class="bg-yellow-500 bg-[url('assets/public/img/background-1.png')] bg-cover bg-center h-120 px-5 py-10 md:px-10 md:pt-14 xl:px-20 xl:pt-20 relative mb-30 md:mb-40">

        <div class="absolute w-full h-full bg-black/30 z-10 inset-0"></div>

        <div class="relative z-20">
          <h1 class="md:text-xl text-[0.8rem] text-white">CENTRO DE TERAPIAS INFANTIL MULTIDISCIPLINAR</h1>
          <p class="exception text-3xl md:text-4xl xl:text-6xl text-white z-20 font-[var(--titulos)] font-bold">Acolhimento, respeito e resultados reais para o desenvolvimento do seu filho</p>
          <NuxtLink
          class="bg-[#47C557] text-white flex w-36 md:w-42 text-[0.8em] md:text-[1em] justify-center items-center flex-row gap-4 md:px-6 md:py-2 px-2 py-2 mt-4 font-bold rounded-md border-white border-1 hover:bg-[#2A7633] transition"
          target="_blank"
          to="https://wa.me/6185401978"
          >
            <WhatsappIcon class="size-6" :fontControlled="false" />
            WhatsApp
          </NuxtLink> 
        </div>
        <div class="flex flex-col xl:flex-row gap-2 relative mt-14 z-20 text-white">
          <div id="Primeiro" class="bg-[var(--clear-pink)] flex-1 md:p-4 p-2 flex gap-4">
            <img src="./assets/public/img/tl (1) 1.png" class="h-20" alt="Foto coração com o símbolo TEA">
            <div>
              <h3 class="text-[1.1em] md:text-2xl font-bold">Atendimento Personalizado</h3>
              <ul class="list-disc list-inside text-[0.7em] sm:text-[0.9em] xl:text-xl">
                <li>Abordagem individualizada para cada criança.</li>
                <li>Planos terapêuticos adaptados às necessidades específicas.</li>
              </ul>
            </div>
            
          </div>

          <div id="Segundo" class="bg-[var(--blue)] flex-1 flex md:p-4 p-2 gap-4">
            <img src="./assets/public/img/tl (2) 1.png" alt="Foto quebra cabeça TEA" class="h-20">
            <div>
              <h3 class="text-[1.1em] md:text-2xl font-bold">Apoio à Família</h3>
              <ul class="list-disc list-inside text-[0.7em] sm:text-[0.9em] xl:text-xl">
                <li>Treinamentos e orientações semanais para pais e responsáveis.</li>
                <li>Construção conjunta da autonomia da criança.</li>
              </ul>
            </div>
          </div>
          <div id="Terceiro" class="bg-[var(--pink)] md:p-4 p-2 gap-4 flex flex-1">
            <img src="./assets/public/img/tl (3) 1.png" class="h-20" alt="">
            <div>
              <h3 class="text-[1.1em] md:text-2xl font-bold">Desenvolvimento Integral</h3>
              <ul class="list-disc list-inside text-[0.7em] sm:text-[0.9em] xl:text-xl">
                <li>Trabalho em múltiplas áreas: comunicação, cognição, socialização e habilidades motoras.</li>
                <li>Resultados comprovados com equipe transdisciplinar.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="pt-14 sm:pt-10 p-5 md:p-10">
        <h2 class="">
          Clínica Sensory Multidisciplinar
        </h2>
        <h3 class="text-2xl font-semibold">
          Atendimentos Terapêuticos Multidisciplinares e Humanizados
        </h3>

        <!-- Separador -->

        <div id="images" 
          class="flex items-center relative before:h-0.5 before:w-70 before:content-[''] before:absolute before:inset-0 before:[background:linear-gradient(to_right,_#206FBD_0%_16.666%,_#05528D_16.666%_33.333%,_#597E22_33.333%_50%,_#87BF34_50%_66.666%,_#FF89DD_66.666%_83.333%,_#F266C1_83.333%_100%)] pt-5 mt-1">
          <img src="./assets/public/img/img_crianças.png" class="w-full h-full" alt="Ilustrativa de crianças felizes">
          <img src="./assets/public/img/crianças_brincando.png" class="rounded-[20px_0px_20px_0px] w-full h-full" alt="Crianças brincando na Clinica Sensory">
        </div>

        <div class="flex flex-col gap-3 text-black/90 mt-5 text-justify text-[0.8em]">
          <p>
            A Clínica Sensory nasceu do desejo de oferecer mais que terapia: um acolhimento verdadeiro. Percebemos que muitas famílias buscavam apoio, mas encontravam atendimentos impessoais e pouco sensíveis às suas realidades.
          </p>
          <p>
            Aqui, cada criança é enxergada em sua individualidade. Trabalhamos com uma equipe multidisciplinar, com supervisão constante, para oferecer um atendimento eficaz, ético e respeitoso. Nossas intervenções são personalizadas e focadas em resultados reais.
          </p>
          <p>
            Oferecemos atendimentos individuais e em grupo, sempre com foco no desenvolvimento integral, motor, emocional, cognitivo e social. Acreditamos que a família é parte essencial do processo terapêutico, por isso, escutamos, acolhemos e orientamos com empatia.
          </p>
          <p>
            Nosso espaço é seguro, lúdico e planejado com carinho: salas amplas com visores de vidro, ambiente receptivo e profissionais apaixonados pelo que fazem.
          </p>
        </div>

        <div id="images">
          
        </div>

        <div class="flex">
          <ul>
            <li>
              Terapia ABA
            </li>
            <li>
              Fonoaudiologia
            </li>
            <li>
              Psicologia
            </li>
            <li>
              Terapia Ocupacional
            </li>
          </ul>
          <ul>
            <li>
              Psicopedagogia
            </li>
            <li>
              Psicomotricidade
            </li>
            <li>
              Musicoterapia
            </li>
            <li>
              Integração Sensorial, PECS, TPAC, CCAA
            </li>
          </ul>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
  import WhatsappIcon from './assets/public/svg/WhatsApp.svg';

</script>
