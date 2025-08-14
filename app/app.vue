<template>
  <div class="w-screen h-screen">
    <header />
    <main>
      <section class="bg-yellow-500 bg-[url('/img/background-1.png')] bg-cover bg-center h-150 px-10 py-14 relative">

        <div class="absolute w-full h-full bg-black/30 z-10 inset-0"></div>

        <div class="relative z-20">
          <h1 class="text-xl text-white">CENTRO DE TERAPIAS INFANTIL MULTIDISCIPLINAR</h1>
          <p class="exception text-4xl md:text-5xl text-white z-20 font-[var(--titulos)] font-black">Acolhimento, respeito e resultados reais para o desenvolvimento do seu filho</p>
          <NuxtLink
          class="bg-[#47C557] text-white inline-block px-6 py-2 font-bold rounded-md border-white border-1 hover:bg-[#47C557]/60 transition "
          to="https://wa.me/62992846807"
          >
            <WhatsappIcon class="size-5" />
            WhatsApp
          </NuxtLink> 
        </div>
        <div class="flex flex-col gap-2 relative top-20 z-20 text-white">
          <div id="Primeiro" class=" bg-[var(--clear-pink)] flex-1 p-4 flex gap-4">
            <img src="/img/tl (1) 1.png" class="h-26" alt="Foto coração com o símbolo TEA">
            <div>
              <h3 class="text-2xl font-bold ">Atendimento Personalizado</h3>
              <ul class="list-disc list-inside ">
                <li>Abordagem individualizada para cada criança.</li>
                <li>Planos terapêuticos adaptados às necessidades específicas.</li>
              </ul>
            </div>
            
          </div>

          <div id="Segundo" class="bg-[var(--blue)] flex p-4 gap-4">
            <img src="/img/tl (2) 1.png" alt="" class="h-20">
            <div>
              <h3 class="text-2xl font-bold ">Apoio à Família</h3>
              <ul class="list-disc list-inside">
                <li>Treinamentos e orientações semanais para pais e responsáveis.</li>
                <li>Construção conjunta da autonomia da criança.</li>
              </ul>
            </div>
          </div>
          <div id="Terceiro" class="bg-[var(--pink)] p-4 gap-4 flex">
            <img src="/img/tl (3) 1.png" class="h-26" alt="">
            <div>
              <h3 class="text-2xl font-bold ">Desenvolvimento Integral</h3>
              <ul class="list-disc list-inside">
                <li>Trabalho em múltiplas áreas: comunicação, cognição, socialização e habilidades motoras.</li>
                <li>Resultados comprovados com equipe transdisciplinar.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
  import WhatsappIcon from '/svg/Whatsapp.svg';
</script>
