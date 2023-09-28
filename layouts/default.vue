<template>
    <v-app>
        <v-app-bar>
            <v-app-bar-tittle>
                Swap
            </v-app-bar-tittle>
        </v-app-bar>
        <v-footer class="bg-grey-lighten-1" app>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        variant="text"
        class="mx-2"
        rounded="xl"
      >
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
    
        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>
