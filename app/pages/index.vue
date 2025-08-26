<template>
  <div class="max-w-screen max-h-screen">
    <AppHeader />
    <main class="">

      <!-- First Section -->

      <section class="bg-yellow-500 bg-[url('/img/background-1.webp')] bg-cover bg-center h-120 px-5 py-10 md:px-10 md:pt-14 xl:px-20 xl:pt-20 relative mb-30 md:mb-40">

        <div class="absolute w-full h-full bg-black/30 z-10 inset-0"></div>

        <div class="relative z-20">
          <h1 class="md:text-xl text-sm text-white">CENTRO DE TERAPIAS INFANTIL MULTIDISCIPLINAR</h1>
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
            <NuxtImg src="/img/coracao-TEA.png" class="h-20 mx-3 xl:m-0" alt="Foto coração com o símbolo TEA" />
            <div>
              <h3 class="text-[1.1em] md:text-xl font-bold">Atendimento Personalizado</h3>
              <ul class="list-disc list-inside text-[0.7em] sm:text-sm xl:text-xl">
                <li>Abordagem individualizada para cada criança.</li>
                <li>Planos terapêuticos adaptados às necessidades específicas.</li>
              </ul>
            </div>
            
          </div>

          <div id="Segundo" class="bg-[var(--blue)] flex-1 flex md:p-4 p-2 gap-4">
            <NuxtImg src="/img/quebracabecas-TEA.png" alt="Foto quebra cabeça TEA" class="h-20" />
            <div>
              <h3 class="text-[1.1em] md:text-2xl font-bold">Apoio à Família</h3>
              <ul class="list-disc list-inside text-[0.7em] sm:text-[0.9em] xl:text-xl">
                <li>Treinamentos e orientações semanais para pais e responsáveis.</li>
                <li>Construção conjunta da autonomia da criança.</li>
              </ul>
            </div>
          </div>
          <div id="Terceiro" class="bg-[var(--pink)] md:p-4 p-2 gap-4 flex flex-1">
            <NuxtImg src="/img/laco-TEA.png" class="h-20 mx-3 xl:m-0" alt="" />
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

      <!-- Sobre a Clínica -->

      <section class="pt-14 sm:pt-10 p-5 md:p-10">
        <div class="flex flex-col lg:flex-row-reverse lg:gap-10">
          <div class="flex-2">
            <h2>
              Clínica Sensory Multidisciplinar
            </h2>
            <h3 class="text-xl md:text-2xl xl:text-3xl font-semibold">
              Atendimentos Terapêuticos Multidisciplinares e Humanizados
            </h3>
          </div>
          <!-- Separador -->
          <div id="images"
            class="w-full flex items-center relative before:h-0.5 before:md:h-1 before:w-50 before:md:w-100 before:content-[''] before:absolute before:left-0 lg:before:top-full lg:before:mt-5 before:top-0 before:[background:linear-gradient(to_right,_#206FBD_0%_16.666%,_#05528D_16.666%_33.333%,_#597E22_33.333%_50%,_#87BF34_50%_66.666%,_#FF89DD_66.666%_83.333%,_#F266C1_83.333%_100%)] pt-5 mt-1 gap-2 flex-1">
            <NuxtImg src="/img/img_criancas.png" class="w-1/2 h-full object-cover" alt="Crianças sorrindo e brincando juntas em um ambiente colorido e acolhedor, transmitindo alegria e inclusão. O fundo mostra brinquedos e decoração lúdica, reforçando o clima de diversão e segurança." />
            <NuxtImg src="/img/criancas_brincando.png" class="rounded-[20px_0px_20px_0px] w-1/2 h-full object-cover" alt="Crianças brincando na Clinica Sensory" />
          </div>
        </div>

        <div class="flex flex-col lg:flex-row-reverse lg:gap-10">
          <div class="flex flex-col gap-3 text-black/90 mt-5 text-justify text-sm sm:text-md md:text-lg xl:text-xl">
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
          <div id="images" class="flex flex-1 items-center relative justify-between">
            <NuxtImg src="/img/Paciente_em_Atendimento.png" class="rounded-[20px_0px_20px_0px] w-1/2 h-full object-cover" alt="Paciente em Atendimento" />
            <NuxtImg src="/img/laco-TEA.png" class="w-1/4 h-full object-cover" alt="Laço TEA"/>
          </div>
        </div>

        <div class="flex relative before:h-0.5 before:md:h-1 before:w-50 before:md:w-100 before:right-0 before:content-[''] before:absolute before:[background:linear-gradient(to_right,_#206FBD_0%_16.666%,_#05528D_16.666%_33.333%,_#597E22_33.333%_50%,_#87BF34_50%_66.666%,_#FF89DD_66.666%_83.333%,_#F266C1_83.333%_100%)] pt-5 mt-1 font-semibold text-sm sm:text-md md:text-lg xl:text-xl justify-between">
          <ul class="mt-5 text-black/90 list-inside flex-1 " id="lista-servicos">
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
          <ul class="mt-5 text-black/90 list-inside flex-1" id="lista-servicos">
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

      <!-- Avaliações -->
      <section id="avaliacoes" class="bg-linear-to-b from-[#36A8FF] via-[#206599] to-[#36A8FE] text-white pt-10 sm:pt-16 p-5 md:p-10 relative">
        <div id="pictures" class="absolute w-full h-full z-10 inset-0"></div>
        <div class=" relative z-20">
          <h2 class="text-xl md:text-2xl xl:text-3xl font-semibold">
            Avaliações de alguns de nossos clientes
          </h2>
          <div id="separador" class="h-0.5
          md:h-1
          w-50 md:w-100 left-0 content-[''] relative [background:linear-gradient(to_right,_#206FBD_0%_16.666%,_#05528D_16.666%_33.333%,_#597E22_33.333%_50%,_#87BF34_50%_66.666%,_#FF89DD_66.666%_83.333%,_#F266C1_83.333%_100%)] mt-2"></div>
          <p class="mt-4 text-justify text-sm sm:text-md md:text-lg xl:text-xl">
            Acreditamos que cada conquista deve ser celebrada
          </p>
          <p class="text-justify text-sm sm:text-md md:text-lg xl:text-xl">
            Veja alguns depoimentos de pais e responsáveis que acompanham de perto o desenvolvimento de suas crianças conosco.
          </p>
          <Comments />
          <div id="separador" class="h-0.5 md:h-1 w-50 md:w-100 right-10 content-[''] absolute [background:linear-gradient(to_right,_#206FBD_0%_16.666%,_#05528D_16.666%_33.333%,_#597E22_33.333%_50%,_#87BF34_50%_66.666%,_#FF89DD_66.666%_83.333%,_#F266C1_83.333%_100%)] mt-8"></div>
          <div class="relative mt-14">
            <h2 class="text-xl md:text-2xl xl:text-3xl font-semibold">Onde você pode nos encontrar?</h2>
            <!-- Google Maps -->
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.298770883089!2d-48.04702199999999!3d-15.8408869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3370522b5b61%3A0x39273d2aa8214a95!2sCl%C3%ADnica%20Sensory%20multidisciplinar!5e0!3m2!1spt-BR!2sbr!4v1755881223412!5m2!1spt-BR!2sbr" title="Localização Clinica Sensory" class="w-full h-100 mt-6 rounded-md bg-gray-100" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <p class="mt-5 text-justify text-sm sm:text-md md:text-lg xl:text-xl">
              Endereço: St. D Sul QSD 05 CL ed.Spazio Duo Sala 501 - Taguatinga, Brasília - DF, 72020-111
            </p>
            <div class="flex justify-between">
              <NuxtLink
              class="bg-[#47C557] text-white flex w-36 md:w-42 text-sm md:text-md justify-center items-center flex-row gap-4 md:px-6 md:py-2 px-4 py-2 mt-4 font-bold rounded-md border-white border-1 hover:bg-[#2A7633] transition"
              target="_blank"
              to="https://wa.me/6185401978"
              >
                <WhatsappIcon class="size-6" :fontControlled="false" />
                WhatsApp
              </NuxtLink>
              <NuxtLink to="https://www.google.com/maps?ll=-15.840887,-48.047022&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=4118327637672282773" target="_blank" class="bg-[#4285F4] text-white flex w-36 md:w-42 text-sm md:text-md justify-center items-center flex-row gap-4 md:px-4 md:py-2 px-1 py-1 mt-4 font-bold rounded-md border-white border-1 hover:bg-[#16548F] transition">
                <GoogleMapsIcon class="size-8" :fontControlled="false" />
                Google Maps
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- Convênios -->

      <section class="pt-10 sm:pt-16 p-5 md:p-10">
        <h2 class="text-xl md:text-2xl xl:text-3xl font-semibold">
          Também aceitamos convênios
        </h2>
      </section>

      <Convenios  />

      <section class="pt-10 sm:pt-16 p-5 md:p-10">
        <h2 class="md:text-lg text-md text-[#47C557]">
          MÉTODO INTERAÇÃO
        </h2>
        <p class="text-xl md:text-2xl xl:text-3xl font-semibold">
          Valorizamos o jeito único de cada criança se expressar e se desenvolver
        </p>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
  import WhatsappIcon from '../assets/svg/WhatsApp.svg';
  import GoogleMapsIcon from '../assets/svg/GoogleMaps.svg';
</script>
