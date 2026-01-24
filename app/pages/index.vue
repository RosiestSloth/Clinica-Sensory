<template>
  <div class="overflow-hidden bg-gray-50">
    <AppHeader />
    <main>

      <!-- Header Section -->

      <section class="relative h-full pb-20 overflow-hidden">
        <NuxtImg
          class="absolute top-0 left-0 w-full h-full object-cover z-0 blur-[4px]"
          src="/img/backgrounds/BG - Clinica Sensory.png"
        />

        <div class="h-full w-full bg-black/20 absolute"></div>
        
        <div class="relative z-20 flex flex-col lg:flex-row items-center w-full h-full pt-10">
          <div class="w-1/2 flex flex-col items-center justify-center p-4">
            <NuxtImg
              alt="Sensys"
              src="img/backgrounds/Sensys.png"
              class="w-100 lg:w-full max-w-150 h-auto object-contain mb-4"
            />
            <h1 id="clinica_sensory" class="bg-[var(--baby-green)] text-[var(--baby-blue)] py-2 px-8 inline-block text-center font-bold text-3xl rounded-3xl">
              <span class="text-black text-xl block leading-6">Clínica</span>
              Sensory
            </h1>
          </div>

          <div class="w-full lg:w-1/2 flex flex-col gap-4 p-4 lg:mt-10">
            <div id="Primeiro" class="bg-[var(--clear-pink)] text-white p-4 flex gap-4 rounded-lg">
              <NuxtImg src="/img/coracao-TEA.png" class="h-20" alt="Foto coração com o símbolo TEA" />
              <div>
                <h3 class="text-[1.1em] md:text-xl font-bold">Atendimento Personalizado</h3>
                <ul class="list-disc list-inside text-[0.7em] sm:text-sm xl:text-lg">
                  <li>Abordagem individualizada para cada criança.</li>
                  <li>Planos terapêuticos adaptados às necessidades específicas.</li>
                </ul>
              </div>
            </div>

            <div id="Segundo" class="bg-[var(--blue)] text-white p-4 flex gap-4 rounded-lg">
              <NuxtImg src="/img/quebracabecas-TEA.png" alt="Foto quebra cabeça TEA" class="h-20" />
              <div>
                <h3 class="text-[1.1em] md:text-xl font-bold">Apoio à Família</h3>
                <ul class="list-disc list-inside text-[0.7em] sm:text-sm xl:text-lg">
                  <li>Treinamentos e orientações semanais para pais e responsáveis.</li>
                  <li>Construção conjunta da autonomia da criança.</li>
                </ul>
              </div>
            </div>

            <div id="Terceiro" class="bg-[var(--pink)] text-white p-4 gap-4 flex rounded-lg">
              <NuxtImg src="/img/laco-TEA.png" class="h-20" alt="" />
              <div>
                <h3 class="text-[1.1em] md:text-xl font-bold">Desenvolvimento Integral</h3>
                <ul class="list-disc list-inside text-[0.7em] sm:text-sm xl:text-lg">
                  <li>Trabalho em múltiplas áreas: comunicação e socialização.</li>
                  <li>Resultados comprovados com equipe transdisciplinar.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Sobre a Clínica -->
      <section class="px-5 py-10 md:px-10 xl:px-20 relative max-w-400 mx-auto">
          <div class="flex-2">
            <h2 id="clinica_sensory" class="bg-[var(--baby-green)] font-bold text-xl text-[var(--baby-blue)] md:text-3xl xl:text-4xl p-4 w-full">
              Clínica Sensory Multidisciplinar
            </h2>
            <h3 class="text-xl md:text-2xl xl:text-3xl font-semibold">
              Atendimentos Terapêuticos Multidisciplinares e Humanizados
            </h3>
          </div>
          
          <div class="flex flex-col lg:flex-row gap-4 h-full lg:mt-2">

            <!-- Separador -->
            <Separador />
            <div id="images"
              class="flex h-50 lg:flex-col items-center pt-5 mt-5 gap-6 flex-1 ">
                <NuxtImg src="/img/img_criancas.png" class="w-1/2 md:w-full h-full object-contain" alt="Crianças sorrindo e brincando juntas em um ambiente colorido e0 acolhedor, transmitindo alegria e inclusão. O fundo mostra brinquedos e decoração lúdica, reforçando o clima de diversão e segurança." />
                <NuxtImg src="/img/criancas_brincando.png" class="rounded-[20px_0px_20px_0px] w-1/2 h-full object-cover md:w-full" alt="Crianças brincando na Clinica Sensory" />
            </div>
            <div class="flex flex-col gap-3 flex-2 text-black/90 mt-5 text-justify text-sm sm:text-md md:text-lg xl:text-xl">
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
        </div>
        <Separador class="relative my-10 ml-auto" />
        <div class="flex flex-col lg:flex-row">
          <div id="images" class="flex flex-row flex-1 h-full items-center relative justify-between lg:justify-start md:gap-10">
            <NuxtImg src="/img/Paciente_em_Atendimento.png" class="rounded-[20px_0px_20px_0px] w-1/2 h-full object-cover" alt="Paciente em Atendimento" />
            <NuxtImg src="/img/laco-TEA.png" class="h-full w-1/4 lg:w-1/5 object-cover" alt="Laço TEA"/>
          </div>
          <div class="flex flex-2 gap-5 md:gap-0 relative pt-5 mt-1 font-semibold text-sm sm:text-md md:text-lg xl:text-xl lg:ml-auto lg:max-w-1/2 items-center justify-center lg:justify-end lg:top-[-20px]">
          
            <ul class="text-black/90 list-inside flex-1 mt-5" id="lista-servicos"> 
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
            <ul class="text-black/90 list-inside flex-1 mt-5" id="lista-servicos">
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
        </div>
      </section>

      <!-- Avaliações -->
      <section id="avaliacoes" class="bg-linear-to-b from-[#36A8FF] via-[#206599] to-[#36A8FE] text-white p-5 md:p-10 relative">
        <div id="picturesy" class="absolute w-full h-full z-10 inset-0"></div>
        <div class=" relative z-20">
          <h2 class="text-xl md:text-2xl xl:text-3xl font-semibold">
            Avaliações de alguns de nossos clientes
          </h2>
          <Separador class="relative my-5" />
          <p class="mt-4 text-justify text-sm sm:text-md md:text-lg xl:text-xl">
            Acreditamos que cada conquista deve ser celebrada
          </p>
          <p class="text-justify text-sm sm:text-md md:text-lg xl:text-xl">
            Veja alguns depoimentos de pais e responsáveis que acompanham de perto o desenvolvimento de suas crianças conosco.
          </p>
          <Comments />
          <Separador class="mt-6 right-0" />
          <div class="relative mt-14">
            <h2 class="text-xl md:text-2xl xl:text-3xl font-semibold">Onde você pode nos encontrar?</h2>
            <!-- Google Maps -->
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.298770883089!2d-48.04702199999999!3d-15.8408869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3370522b5b61%3A0x39273d2aa8214a95!2sCl%C3%ADnica%20Sensory%20multidisciplinar!5e0!3m2!1spt-BR!2sbr!4v1755881223412!5m2!1spt-BR!2sbr" title="Localização Clinica Sensory" class="w-full h-100 mt-6 rounded-md bg-gray-100" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <p class="mt-5 text-justify text-sm sm:text-md md:text-lg xl:text-xl">
              Endereço: St. D Sul QSD 05 CL ed.Spazio Duo Sala 501 - Taguatinga, Brasília - DF, 72020-111
            </p>
            <div class="flex justify-between lg:justify-center lg:gap-10">
              <NuxtLink
              class="bg-[#47C557] text-white flex w-36 md:w-42 text-sm md:text-md justify-center items-center flex-row gap-4 md:px-6 md:py-2 px-4 py-2 mt-4 font-bold rounded-md border-white border-1 hover:bg-[#2A7633] transition"
              target="_blank"
              to="https://wa.me/6185401978"
              >
                <img :src="whatsappIcon" alt="WhatsApp" class="size-6" />
                WhatsApp
              </NuxtLink>
              <NuxtLink to="https://www.google.com/maps?ll=-15.840887,-48.047022&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=4118327637672282773" target="_blank" class="bg-[#4285F4] text-white flex w-38 md:w-50 text-sm md:text-md justify-center items-center flex-row gap-4 md:px-4 md:py-2 px-1 py-1 mt-4 font-bold rounded-md border-white border-1 hover:bg-[#16548F] transition">
                <img :src="googleMapsIcon" alt="Google Maps" class="size-8" />
                Google Maps
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- MÉTODO INTERAÇÃO -->

      <section class="flex relative">
        <div class="bg-[var(--green)] size-40 lg:size-50 absolute z-10 top-30 rotate-45 animate-[var(--animation-left-mobile)]"></div>
        <div class="bg-[var(--clear-pink)] size-40 lg:size-50 absolute z-10 top-70 rotate-45 animate-[var(--animation-right-mobile)] lg:animate-[var(--animation-right-desktop)]"></div>
        <div class="bg-[var(--red)] size-40 lg:size-50 absolute z-10 top-120 rotate-45 animate-[var(--animation-left-mobile)]"></div>
        <div class="bg-[var(--pink)] size-40 lg:size-50 absolute z-10 top-150                        rotate-45 animate-[var(--animation-right-mobile)] lg:animate-[var(--animation-right-desktop)]"></div>
        <div class="bg-[var(--baby-blue)] size-40 lg:size-50 absolute z-10 top-200 rotate-45 animate-[var(--animation-left-mobile)]"></div>
        <div class="bg-[var(--clear-pink)] size-40 lg:size-50 absolute z-10 top-300 rotate-45 animate-[var(--animation-right-mobile)] lg:animate-[var(--animation-right-desktop)] lg:hidden"></div>
        <div class="bg-[var(--green)] size-40 lg:size-50 absolute z-10 top-350 rotate-45 animate-[var(--animation-left-mobile)] lg:hidden"></div>
        <div class="bg-[var(--red)] size-40 lg:size-50 absolute z-10 top-400 rotate-45 animate-[var(--animation-right-mobile)] lg:hidden"></div>

        <div class="p-5 md:p-10 z-20">
          <h2 class="text-[var(--green)] text-sm md:text-md xl:text-lg">
            MÉTODO INTERAÇÃO
          </h2>
          <p class="text-xl md:text-2xl xl:text-3xl font-semibold">
            Valorizamos o jeito único de cada criança se expressar e se desenvolver
          </p>
          
          <div class="mx-auto grid grid-cols-1 lg:grid-cols-2">
            <cards />
          </div>
        </div>
      </section>

      <!-- Seção de Convênios -->
      <section class="px-5 md:px-10 relative">
        <h2 class="text-xl md:text-2xl xl:text-3xl font-semibold mb-6 text-center">
          Convênios Aceitos pela Clínica Sensory
        </h2>
        <div class="border-y-black w-full">
          <Convenios />
        </div>
      </section>
      <section class="relative">
        <div class="bg-[var(--clear-blue)] absolute rotate-5 md:rotate-5 h-40 md:h-30 top-0 md:top-0 w-[calc(100%+theme(spacing.5))] left-[-10px] z-[1]"></div>

        <div class="bg-[var(--baby-blue)] absolute rotate-175 h-90 md:h-70 top-50 md:top-20 w-[150%] left-[-20px] z-[2]"></div>

        <div class="bg-[var(--pink)] absolute top-150 md:top-90 rotate-5 md:rotate-2 h-40 md:h-30 mt-4 w-[calc(100%+theme(spacing.5))] left-[-10px] z-[3]"></div>

        <div class="px-5 md:px-10 relative my-20 z-[4] max-w-400 mx-auto">
          <p class="text-[var(--blue)]">
            Mais do que tratar, buscamos compreender e acompanhar cada etapa do desenvolvimento de seu filho.
          </p>

          <h2 class="text-xl md:text-2xl xl:text-3xl font-semibold">
            Benefícios da Terapia ABA
          </h2>

          <Separador class="relative my-5" />

          <AbaCards class="my-6" />
          <NuxtLink
          to="/treatments/ABAv"
          class="bg-[var(--blue)] text-white flex w-50 h-14 mx-auto md:w-60 text-md md:text-lg justify-center items-center flex-row gap-4 md:px-6 md:py-2 px-2 py-2 mt-4 font-bold rounded-md border-white border-1 hover:bg-[var(--dark-blue)] transition"
          >Saiba mais <img :src="rightArrowIcon" alt="Saiba mais" class="size-8" /></NuxtLink>
        </div>
      </section>
      <section class="relative">

        <ImageCarroussel class="mx-5 md:mx-10" />

        <div class="relative flex flex-row mt-10 overflow-hidden h-60">
          <NuxtImg
          class="absolute top-0 left-0 w-full lg:w-1/2 h-full object-cover z-0"
          src="/img/backgrounds/BG_TEA.png"/>
          <h2 class="z-10 h-40 md:h-24 content-center p-2 text-xl md:text-2xl w-1/2 bg-black/40 font-bold text-white ">
            Criando caminhos para um desenvolvimento excepcional.
          </h2>
          <div class="z-10 text-white w-1/2 bg-[var(--secondary-blue-dark)] p-4 md:p-8">
            <ul class="list-image-[url(/svg/Check.svg)] list-inside h-full text-sm md:text-xl">
              <li class="bg-[var(--dark-blue)] h-1/4 content-center font-bold"> Cuidado Integral e Humanizado</li>
              <li class="bg-[var(--blue)] h-1/4 content-center font-bold"> Desenvolvimento Contínuo</li>
              <li class="bg-[var(--dark-blue)] h-1/4 content-center font-bold">Foco na Felicidade e Autonomia</li>
              <li class="bg-[var(--blue)] h-1/4 content-center font-bold">Apoio que Abraça a Família</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="bg-yellow-500 bg-[url('/img/backgrounds/background-1.webp')] bg-cover bg-center h-120 md:h-130 lg:h-150 px-5 py-10 md:px-10 md:pt-14 xl:px-20 xl:pt-20 relative">

        <div class="absolute w-full h-full bg-black/50 z-10 inset-0"></div>

        <div class="relative z-20 flex flex-col justify-center h-full">
          <h1 class="md:text-xl text-sm text-[var(--baby-green)] font-bold tracking-widest uppercase mb-4">
            CLÍNICA SENSORY
          </h1>
          
          <p class="exception text-3xl md:text-5xl xl:text-6xl text-white z-20 font-['Montserrat'] font-bold leading-tight drop-shadow-lg">
            Transforme desafios em conquistas: o desenvolvimento do seu filho começa aqui.
          </p>
          <Separador class="relative mt-2" />
          <p class="text-gray-200 text-lg md:text-xl mt-4 max-w-2xl font-medium">
            Agende uma avaliação e descubra o poder de uma equipe multidisciplinar apaixonada pelo que faz.
          </p>

          <NuxtLink
            class="bg-[#47C557] text-white flex w-auto sm:w-fit text-sm md:text-lg justify-center items-center flex-row gap-3 px-8 py-3 mt-8 font-bold rounded-full border-white border-2 hover:bg-[#2A7633] hover:scale-105 shadow-[0_0_15px_rgba(71,197,87,0.5)] transition-all duration-300"
            target="_blank"
            to="https://wa.me/6185401978"
          >
            <img :src="whatsappIcon" alt="WhatsApp" class="size-6 md:size-7" />
            Quero Agendar Agora
          </NuxtLink> 
        </div>
        </section>
      </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">

  // Ícones movidos para /public/svg
  const whatsappIcon = '/svg/WhatsApp.svg';
  const googleMapsIcon = '/svg/GoogleMaps.svg';
  const rightArrowIcon = '/svg/Arrow-up-Right.svg';


</script>
