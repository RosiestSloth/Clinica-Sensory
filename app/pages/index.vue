<template>
  <div class="max-w-screen max-h-screen">
    <AppHeader />
    <main class="">

      <!-- First Section -->

      <section class="bg-yellow-500 bg-[url('/img/background-1.webp')] bg-cover bg-center h-120 px-5 py-10 md:px-10 md:pt-14 xl:px-20 xl:pt-20 relative mb-30 xl:mb-20">

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
      <section class="px-5 py-10 md:px-10 md:pt-14 xl:px-20 xl:pt-20 relative">
          <div class="flex-2">
            <h2>
              Clínica Sensory Multidisciplinar
            </h2>
            <h3 class="text-xl md:text-2xl xl:text-3xl font-semibold">
              Atendimentos Terapêuticos Multidisciplinares e Humanizados
            </h3>
          </div>
          
          <div class="flex flex-col lg:flex-row gap-4 h-full lg:mt-2">

            <!-- Separador -->

            <div id="images"
              class="flex h-50 lg:flex-col items-center relative before:h-0.5 before:w-60 before:content-[''] before:absolute before:left-0 lg:before:mt-5 before:top-0 lg:before:top-[-20px] before:[background:linear-gradient(to_right,_#206FBD_0%_16.666%,_#05528D_16.666%_33.333%,_#597E22_33.333%_50%,_#87BF34_50%_66.666%,_#FF89DD_66.666%_83.333%,_#F266C1_83.333%_100%)] pt-5 mt-1 gap-6 flex-1">
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
        <div class="flex flex-col lg:flex-row lg:mt-10">
          <div id="images" class="flex flex-row flex-1 h-full items-center relative justify-between">
            <NuxtImg src="/img/Paciente_em_Atendimento.png" class="rounded-[20px_0px_20px_0px] w-1/2 h-full object-cover" alt="Paciente em Atendimento" />
            <NuxtImg src="/img/laco-TEA.png" class="w-1/3 h-full object-cover" alt="Laço TEA"/>
          </div>
          <div class="flex flex-2 gap-5 md:gap-0 relative before:h-0.5 before:w-60 before:right-0 before:content-[''] before:absolute before:[background:linear-gradient(to_right,_#206FBD_0%_16.666%,_#05528D_16.666%_33.333%,_#597E22_33.333%_50%,_#87BF34_50%_66.666%,_#FF89DD_66.666%_83.333%,_#F266C1_83.333%_100%)] pt-5 mt-1 font-semibold text-sm sm:text-md md:text-lg xl:text-xl justify-between lg:top-[-20px]">
            <ul class="text-black/90 list-inside flex-1 lg:mt-5" id="lista-servicos">
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
            <ul class="text-black/90 list-inside flex-1 lg:mt-5" id="lista-servicos">
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
        <div id="pictures" class="absolute w-full h-full z-10 inset-0"></div>
        <div class=" relative z-20">
          <h2 class="text-xl md:text-2xl xl:text-3xl font-semibold">
            Avaliações de alguns de nossos clientes
          </h2>
          <div id="separador" class="h-0.5 w-50 left-0 content-[''] relative [background:linear-gradient(to_right,_#206FBD_0%_16.666%,_#05528D_16.666%_33.333%,_#597E22_33.333%_50%,_#87BF34_50%_66.666%,_#FF89DD_66.666%_83.333%,_#F266C1_83.333%_100%)] mt-2"></div>
          <p class="mt-4 text-justify text-sm sm:text-md md:text-lg xl:text-xl">
            Acreditamos que cada conquista deve ser celebrada
          </p>
          <p class="text-justify text-sm sm:text-md md:text-lg xl:text-xl">
            Veja alguns depoimentos de pais e responsáveis que acompanham de perto o desenvolvimento de suas crianças conosco.
          </p>
          <Comments />
          <div id="separador" class="h-0.5 w-50 right-10 content-[''] absolute [background:linear-gradient(to_right,_#206FBD_0%_16.666%,_#05528D_16.666%_33.333%,_#597E22_33.333%_50%,_#87BF34_50%_66.666%,_#FF89DD_66.666%_83.333%,_#F266C1_83.333%_100%)] mt-8"></div>
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

      <!-- MÉTODO INTERAÇÃO -->

      <section class="flex relative ">
        <div id="bg-triangulo" class="lg:top-10 bg-[var(--green)] content-[' '] h-40 w-40 absolute z-10 top-30 rotate-45"></div>
        <div id="bg-triangulo_1" class="lg:top-50 bg-[var(--clear-pink)] content-[' '] h-40 w-40 absolute z-10 top-70 rotate-45"></div>
        <div id="bg-triangulo_2" class="lg:top-100 bg-[var(--red)] content-[' '] h-40 w-40 absolute z-10 top-120 rotate-45"></div>
        <div id="bg-triangulo_3" class="lg:top-130 bg-[var(--pink)] content-[' '] h-40 w-40 absolute z-10 top-150 right-[-150px] rotate-45"></div>
        <div id="bg-triangulo_4" class="lg:top-180 bg-[var(--baby-blue)] content-[' '] h-40 w-40 absolute z-10 top-200 rotate-45"></div>
        <div id="bg-triangulo_5" class="lg:top-280 bg-[var(--clear-pink)] content-[' '] h-40 w-40 absolute z-10 top-300 rotate-45"></div>
        <div id="bg-triangulo_6" class="lg:top-320 bg-[var(--green)] content-[' '] h-40 w-40 absolute z-10 top-350 left-[-120px] rotate-45"></div>
        <div id="bg-triangulo_7" class="lg:top-380 bg-[var(--red)] content-[' '] h-40 w-40 absolute z-10 top-400 right-[-100px] rotate-45"></div>

        <div class="flex flex-col p-5 md:p-10 z-20">
          <h2 class="text-[var(--green)] text-sm md:text-md xl:text-lg">
            MÉTODO INTERAÇÃO
          </h2>
          <p class="text-xl md:text-2xl xl:text-3xl font-semibold">
            Valorizamos o jeito único de cada criança se expressar e se desenvolver
          </p>
          
          <div class="container w-full grid grid-cols-1 lg:grid-cols-2 absolute left-1/2 right-1/2 translate-x-[-50%] mt-20">
            <cards
            v-for="service in services"
            :key="service.title"
            :title="service.title"
            :description="service.description"
            :imageSrc="service.image"
            :ContainerColor="service.ContainerColor"
            :BorderColor="service.BorderColor"
              />
          </div>
        </div>

      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import WhatsappIcon from '../assets/svg/WhatsApp.svg';
  import GoogleMapsIcon from '../assets/svg/GoogleMaps.svg';

  const services = ref([
    {
      title: 'ABA (Análise do Comportamento Aplicada)',
      description: 'Abordagem baseada em evidências que utiliza princípios do comportamento para ensinar habilidades e reduzir comportamentos desafiadores. Muito usada no acompanhamento de pessoas com TEA, a ABA promove autonomia por meio do reforço positivo e da repetição estruturada.',
      image: '/img/servicos/ABA.png',
      ContainerColor: 'bg-[var(--blue)]',
      BorderColor: 'border-[var(--blue)]',
    },
    {
      title: 'PECS (Picture Exchange Communication System)',
      description: 'Sistema de comunicação por troca de figuras que permite que pessoas com dificuldades verbais possam expressar seus desejos e necessidades. O PECS incentiva a comunicação funcional desde as fases iniciais do desenvolvimento.',
      image: '/img/servicos/PECS.png',
      ContainerColor: 'bg-[var(--green)]',
      BorderColor: 'border-[var(--green)]',
    },
    {
      title: 'TPAC (Teoria Pedagógica do Conhecimento Tecnológico)',
      description: 'Modelo que integra o conhecimento pedagógico, tecnológico e do conteúdo, auxiliando professores a planejar e aplicar estratégias de ensino mais eficazes com o uso da tecnologia. É um recurso essencial na educação inclusiva e personalizada.',
      image: '/img/servicos/TPAC.png',
      ContainerColor: 'bg-[var(--red)]',
      BorderColor: 'border-[var(--red)]',
    },
    {
      title: 'Integração Sensorial',
      description: 'Método que visa melhorar a percepção e o processamento de informações sensoriais. Ao organizar os estímulos que o cérebro recebe, contribui para o equilíbrio emocional, motor e social, especialmente em crianças com dificuldades de regulação sensorial.',
      image: '/img/servicos/Integracao_Sensorial.png',
      ContainerColor: 'bg-[var(--pink)]',
      BorderColor: 'border-[var(--pink)]',
    }
  ]);
</script>
