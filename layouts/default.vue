<template>
  <v-app class="back">
    <v-app-bar>
      <v-app-bar-title>
        Swap
      </v-app-bar-title>
      <CommonConnectButton />
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>

    <v-footer class="bg-white justify-center" app>

      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>

    </v-footer>


  </v-app>
</template>
<style>

</style>

