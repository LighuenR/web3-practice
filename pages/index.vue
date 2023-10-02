<template>
    <v-container>
        <v-row class="mt-6">
            <v-col cols="12" md="6">

                <h1 class="white--text">Send yourself native tokens
                    Why? There is no why.
                    Balance:</h1>

            </v-col>
            <v-col cols="12" md="6">
                <v-card title="Send Tokens">
                    <v-form class="mx-auto">
                        <v-text-field label="You Pay" variant="outlined" class="mx-2">
                            <template v-slot:append-inner>
                                <v-menu>
                                    <template v-slot:activator="{ props }">
                                        <v-dialog width="500">
  <template v-slot:activator="{ props }">
    <v-btn v-bind="props" text="Open Dialog"> </v-btn>
  </template>

  <template v-slot:default="{ isActive }">
    <v-card title="Dialog">
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text="Close Dialog"
          @click="isActive.value = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>
</v-dialog>
                                    </template>

                                    <v-card>
                                        <v-card-text class="pa-6">
                                            <v-btn color="primary" size="large" variant="text" @click="clickMe">
                                                <v-icon icon="mdi-target" start></v-icon>

                                                Click me
                                            </v-btn>
                                        </v-card-text>
                                    </v-card>
                                </v-menu>
                            </template>
                        </v-text-field>
                    </v-form>
                    <v-form class="mx-auto">
                        <v-text-field label="You get" variant="outlined" class="mx-2">
                            <template v-slot:append-inner>
                                <v-menu>
                                    <template v-slot:activator="{ props }">
                                        <v-dialog width="500">
  <template v-slot:activator="{ props }">
    <v-btn v-bind="props" text="Open Dialog"> </v-btn>
  </template>

  <template v-slot:default="{ isActive }">
    <v-card title="Dialog">
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text="Close Dialog"
          @click="isActive.value = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>
</v-dialog>
                                    </template>

                                    <v-card>
                                        <v-card-text class="pa-6">
                                            <v-btn color="primary" size="large" variant="text" @click="clickMe">
                                                <v-icon icon="mdi-target" start></v-icon>

                                                Click me
                                            </v-btn>
                                        </v-card-text>
                                    </v-card>
                                </v-menu>
                            </template>
                        </v-text-field>
                    </v-form>
                    <v-card-actions>
                        <v-btn append-icon="$vuetify" variant="tonal" block>Send</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>