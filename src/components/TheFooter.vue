<template>
  <div class="bg-zinc-900 text-yellow-50">
    <!-- contact details -->
    <div class="flex flex-col text-5xl px-16 gap-5 items-center">
      <h1>CONTACT ME</h1>
      <ul class="flex w-2/4 justify-center gap-10 text-4xl">
        <li>
          <a href="mailto:haji@hajimutonye.com"
             class="hover:text-red-600"
             target="_blank"><i class="fas fa-envelope"></i></a>
        </li>
        <li>
          <a href="https://www.instagram.com/hajimutonye/"
             class="hover:text-pink-700"
             target="_blank"><i class="fab fa-instagram"></i></a>
        </li>
        <li>
          <!-- twitter -->
          <a href="https://twitter.com/hajjimutonye"
             class="hover:text-cyan-500"
             target="_blank"><i class="fab fa-twitter"></i></a>
        </li>
      </ul>
      <!-- copyright -->
      <p class="text-sm">© 2022 Haji Mutonye</p>
    </div>
    <router-link to="/">
      <img src="../assets/images/footers.svg"
           alt=""
           class="bg-zinc-900 w-screen" />
    </router-link>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@media screen and (max-width: 40em) {
  div {
    flex-direction: column;
    align-items: center;
    gap: 5px;

    h1 {
      font-size: 1.6rem;
    }

    ul {
      list-style: none;

      li {
        a {
          text-decoration: none;
          font-size: 15px;
        }
      }
    }
  }
}
</style>
