<template>
    <footer class="relative overflow-hidden bg-white text-[var(--dark-blue)]">
        <!-- CTA bar -->
        <div class="relative bg-gradient-to-r from-[#206FBD] via-[#36A8FF] to-[#FF89DD] text-white px-6 py-10 md:px-10">
            <div class="absolute inset-0 opacity-20">
                <div class="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/30 blur-2xl"></div>
                <div class="absolute right-4 bottom-0 h-28 w-28 rotate-12 bg-white/20 blur-xl"></div>
            </div>
            <div class="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div class="max-w-xl space-y-2">
                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">Clínica Sensory</p>
                    <h3 class="text-2xl font-bold md:text-3xl">Pronto para agendar a próxima conquista do seu filho?</h3>
                    <p class="text-sm md:text-base text-white/90">Equipe multidisciplinar, atendimento acolhedor e resultados acompanhados de perto.</p>
                </div>
                <div class="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
                    <NuxtLink
                        to="https://wa.me/6185401978"
                        target="_blank"
                        class="bg-[#47C557] text-white px-5 py-3 rounded-full font-semibold shadow-[0_0_15px_rgba(71,197,87,0.4)] hover:bg-[#2A7633] transition"
                    >
                        Falar no WhatsApp
                    </NuxtLink>
                    <NuxtLink
                        to="https://www.google.com/maps?ll=-15.840887,-48.047022&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=4118327637672282773"
                        target="_blank"
                        class="border border-white/70 px-5 py-3 rounded-full font-semibold hover:bg-white hover:text-[var(--dark-blue)] transition"
                    >
                        Ver localização
                    </NuxtLink>
                </div>
            </div>
        </div>

        <!-- Main footer content -->
        <div class="relative px-6 py-12 md:px-10 lg:px-16">
            <div class="absolute inset-0 bg-[var(--baby-blue)]/8"></div>
            <div class="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-4">
                <div class="space-y-4">
                    <h4 class="text-xl font-bold">Clínica Sensory</h4>
                    <div class="h-0.5 w-30 bg-[linear-gradient(to_right,_#206FBD_0%_16.666%,_#05528D_16.666%_33.333%,_#597E22_33.333%_50%,_#87BF34_50%_66.666%,_#FF89DD_66.666%_83.333%,_#F266C1_83.333%_100%)]"></div>
                    <p class="text-sm text-black/80">Acolhimento real, equipe multidisciplinar e planos terapêuticos personalizados para cada criança e família.</p>
                </div>

                <div class="space-y-4">
                    <h5 class="text-lg font-semibold">Navegação</h5>
                    <ul class="space-y-2 text-sm text-black/80">
                        <li><a href="#clinica_sensory" class="hover:text-[var(--blue)] transition">Sobre a clínica</a></li>
                        <li><a href="#lista-servicos" class="hover:text-[var(--blue)] transition">Especialidades</a></li>
                        <li><a href="#avaliacoes" class="hover:text-[var(--blue)] transition">Avaliações</a></li>
                        <li><NuxtLink to="/Contact-us" class="hover:text-[var(--blue)] transition">Fale conosco</NuxtLink></li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h5 class="text-lg font-semibold">Contato</h5>
                    <ul class="space-y-2 text-sm text-black/80">
                        <li>Tel: (61) 98123-7849</li>
                        <li>Email: clinicasensorytea@gmail.com</li>
                        <li>St. D Sul QSD 05 CL Spazio Duo Sala 501 - Taguatinga, Brasília - DF</li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h5 class="text-lg font-semibold">Redes e suporte</h5>
                    <div class="flex flex-col gap-2 text-sm text-black/80">
                        <a href="https://wa.me/61981237849" target="_blank" class="hover:text-[var(--blue)] transition">WhatsApp</a>
                        <a href="https://www.instagram.com/clinicasensorytea" target="_blank" class="hover:text-[var(--blue)] transition">Instagram</a>
                        <a href="https://www.google.com/maps?ll=-15.840887,-48.047022&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=4118327637672282773" target="_blank" class="hover:text-[var(--blue)] transition">Google Maps</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Barra 3 -->
        <div class="border-t border-[var(--clear-blue)] bg-[var(--dark-blue)] text-white">
            <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-4 text-sm md:flex-row">
                <p>&copy; 2024 Clínica Sensory. Todos os direitos reservados.</p>
                <p class="text-white/80">Cuidado integral, acolhimento real.</p>
            </div>
        </div>

        <!-- Meus Creditos -->
        <div class="bg-[#608BDA] p-4 ">
            <p class="text-white font-semibold text-center"> Desenvolvido por <a class="font-black hover:underline" href="https://portifolio-taupe-beta.vercel.app/" target="_blank" rel="noopener noreferrer">Vinicius</a></p>
        </div>
    </footer>
</template>