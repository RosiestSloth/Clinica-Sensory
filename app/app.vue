<template>
  <div class="w-screen h-screen">
    <header />
    <main>
      <section class="bg-yellow-500 bg-[url('/img/background-1.png')] bg-cover bg-center h-120 px-10 py-20 relative">

        <div class="absolute w-full h-full bg-black/30 z-10 inset-0"></div>

        <div class="relative z-20">
          <h1 class="text-xl text-white">CENTRO DE TERAPIAS INFANTIL MULTIDISCIPLINAR</h1>
          <p class="exception text-4xl md:text-5xl text-white z-20 font-[var(--titulos)] font-black">Acolhimento, respeito e resultados reais para o desenvolvimento do seu filho</p>
          <NuxtLink
          class="bg-[#47C557] text-white p-4  font-bold"
          to="https://wa.me/62992846807"
          >
            WhatsApp
          </NuxtLink> 
          
          />
        </div>
        <div class="flex flex-col gap-2 relative top-20 z-20 text-white">
          <div id="Primeiro" class=" bg-[var(--clear-pink)] p-4 ">
            <h3 class="text-2xl font-bold ">Atendimento Personalizado</h3>
              <ul class="list-disc list-inside ">
                <li>Abordagem individualizada para cada criança.</li>
                <li>Planos terapêuticos adaptados às necessidades específicas.</li>
              </ul>
          </div>

          <div id="Segundo" class="bg-[var(--blue)] p-4">
            <h3 class="text-2xl font-bold ">Apoio à Família</h3>
            <ul class="list-disc list-inside">
              <li>Treinamentos e orientações semanais para pais e responsáveis.</li>
              <li>Construção conjunta da autonomia da criança.</li>
            </ul>
          </div>

          <div id="Terceiro" class="bg-[var(--pink)] p-4">
            <h3 class="text-2xl font-bold ">Desenvolvimento Integral</h3>
            <ul class="list-disc list-inside">
              <li>Trabalho em múltiplas áreas: comunicação, cognição, socialização e habilidades motoras.</li>
              <li>Resultados comprovados com equipe transdisciplinar.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
