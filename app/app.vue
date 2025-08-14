<template>
  <div class="max-w-screen max-h-screen">
    <header />
    <main class="">
      <section class="bg-yellow-500 bg-[url('/img/background-1.png')] bg-cover bg-center h-150 px-5 py-10 md:px-10 md:py-14 relative mb-20 md:mb-30">

        <div class="absolute w-full h-full bg-black/30 z-10 inset-0"></div>

        <div class="relative z-20">
          <h1 class="md:text-xl text-[0.8rem] text-white">CENTRO DE TERAPIAS INFANTIL MULTIDISCIPLINAR</h1>
          <p class="exception text-3xl md:text-4xl xl:text-5xl text-white z-20 font-[var(--titulos)] font-bold">Acolhimento, respeito e resultados reais para o desenvolvimento do seu filho</p>
          <NuxtLink
          class="bg-[#47C557] text-white inline-block px-6 py-2 font-bold rounded-md border-white border-1 hover:bg-[#47C557]/60 transition"
          to="https://wa.me/62992846807"
          >
            <WhatsappIcon class="size-5" />
            WhatsApp
          </NuxtLink> 
        </div>
        <div class="flex flex-col gap-2 relative mt-14 md:mt-20 z-20 text-white">
          <div id="Primeiro" class=" bg-[var(--clear-pink)] flex-1 p-4 flex gap-4">
            <img src="/img/tl (1) 1.png" class="h-26" alt="Foto coração com o símbolo TEA">
            <div>
              <h3 class="text-[1.1em] md:text-2xl font-bold">Atendimento Personalizado</h3>
              <ul class="list-disc list-inside text-[0.8em] md:text-[1em] xl:text-xl">
                <li>Abordagem individualizada para cada criança.</li>
                <li>Planos terapêuticos adaptados às necessidades específicas.</li>
              </ul>
            </div>
            
          </div>

          <div id="Segundo" class="bg-[var(--blue)] flex p-4 gap-4">
            <img src="/img/tl (2) 1.png" alt="Foto quebra cabeça TEA" class="h-20">
            <div>
              <h3 class="text-[1.1em] md:text-2xl font-bold">Apoio à Família</h3>
              <ul class="list-disc list-inside text-[0.8em] md:text-[1em] xl:text-xl">
                <li>Treinamentos e orientações semanais para pais e responsáveis.</li>
                <li>Construção conjunta da autonomia da criança.</li>
              </ul>
            </div>
          </div>
          <div id="Terceiro" class="bg-[var(--pink)] p-4 gap-4 flex">
            <img src="/img/tl (3) 1.png" class="h-23" alt="">
            <div>
              <h3 class="text-[1.1em] md:text-2xl font-bold">Desenvolvimento Integral</h3>
              <ul class="list-disc list-inside text-[0.8em] md:text-[1em] xl:text-xl">
                <li>Trabalho em múltiplas áreas: comunicação, cognição, socialização e habilidades motoras.</li>
                <li>Resultados comprovados com equipe transdisciplinar.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt et voluptates culpa, eveniet temporibus totam nulla nostrum rerum. Doloremque sint odio, pariatur natus mollitia maxime amet corporis quos autem blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, amet exercitationem. Fugit eum pariatur modi voluptate! Hic expedita consectetur veniam, dolore tempore porro. Vero nam quidem dolore laboriosam velit. Amet! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit voluptates ab commodi voluptas beatae? Recusandae inventore facilis blanditiis nam odio nihil, voluptate consequuntur aut! Id veritatis adipisci neque quidem praesentium!</p>
      </section>
    </main>
  </div>
</template>

<script>
  import WhatsappIcon from '/svg/Whatsapp.svg';
</script>
