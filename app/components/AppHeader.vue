<template>
  <div>
    <header class="flex flex-row justify-between items-center p-4 bg-white text-gray-800 shadow-md">
      <NuxtImg 
        src="/Logo.png"
        alt="Logo"
        class="size-15"
      />
      <nav>
        <ul class="list-none flex flex-row gap-4">
          <!-- Home -->
          <li>
            <NuxtLink 
              to="/" 
              class="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-md transition-all duration-300"
            >
              <span>🏠</span>
              Home
            </NuxtLink>
          </li>

          <!-- About -->
          <li>
            <NuxtLink 
              to="/about" 
              class="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-md transition-all duration-300"
            >
              <span>ℹ️</span>
              About
            </NuxtLink>
          </li>

          <!-- Contact -->
          <li>
            <NuxtLink 
              to="/contact" 
              class="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-pink-600 hover:bg-pink-700 shadow-lg hover:shadow-md transition-all duration-300"
            >
              <span>📞</span>
              Contact
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>
