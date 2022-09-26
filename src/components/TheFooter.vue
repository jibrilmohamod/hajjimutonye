<template>
  <div class="bg-zinc-900 w-full text-yellow-50">
    <!-- contact details -->
    <div class="flex text-xl px-16 gap-10">
      <h1>CONTACT ME</h1>
      <ul>
        <li>
          <a href=""> <i class="pr-5 fas fa-envelope"></i>Info@hajimutonye.com </a>
        </li>
        <li>
          <a href=""><i class="pr-5 fab fa-youtube"></i>HAJIMUTONYE</a>
        </li>
        <li>
          <a href=""><i class="pr-5 fab fa-instagram"></i>HAJIMUTONYE</a>
        </li>
        <li>
          <a href=""><i class="pr-5 fab fa-twitter"></i>HAJIMUTONYE</a>
        </li>
      </ul>
    </div>
    <router-link to="/">
      <img src="../assets/images/footers.svg" alt="" class="bg-zinc-900 w-screen" />
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
