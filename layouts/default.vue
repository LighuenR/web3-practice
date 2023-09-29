<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>
        Swap
      </v-app-bar-title>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
    <v-footer class="bg-grey-lighten-1" app>
      <v-row justify="center" no-gutters>
        <v-btn v-for="link in links" :key="link" color="white" variant="text" class="mx-2" rounded="xl">
          {{ link }}
        </v-btn>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>
