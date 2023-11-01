<template>
  <v-container>
    <v-row class="mt-2 d-flex justify-center">
      <v-col style="max-width: 500px">
        <v-card title="Send Tokens">
          <v-card-text>
            <v-form class="mx-auto">
              <v-text-field
                label="You Pay"
                variant="outlined"
                class="swap-input"
              >
                <template v-slot:append-inner>
                  <v-menu>
                    <template v-slot:activator="{ props }">
                      <v-dialog width="500">
                        <template v-slot:activator="{ props }">
                          <v-btn
                            v-bind="props"
                            :prepend-avatar="tokenPay?.icon"
                          >
                          <template v-slot:prepend>
                              <img style="max-height: 20px;" :src="`${tokenReceipt?.icon}`">
                            </template>

                           {{ tokenReceipt?.symbol }}
                          </v-btn>
                        </template>

                        <template v-slot:default="{ isActive }">
                          <v-card title="Dialog">
                            <v-list lines="three">
                              <v-list-item
                                v-for="token in tokenList"
                                :key="token.symbol"
                                link
                                @click="setPayToken(token)"
                                :prepend-avatar="token.icon"
                                :title="token.symbol"
                                :subtitle="token.name"
                              >
                
                              </v-list-item>
                            </v-list>

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
                        <v-btn
                          color="primary"
                          size="large"
                          variant="text"
                          @click="clickMe"
                        >
                          <v-icon icon="mdi-target" start></v-icon>

                          Click me
                        </v-btn>
                      </v-card-text>
                    </v-card>
                  </v-menu>
                </template>
              </v-text-field>
              <v-text-field
                label="You Pay"
                variant="outlined"
                class="swap-input"
              >
                <template v-slot:append-inner>
                  <v-menu>
                    <template v-slot:activator="{ props }">
                      <v-dialog width="500">
                        <template v-slot:activator="{ props }">
                          <v-btn
                            v-bind="props"
                            text="Open Dialog"
                            color="#986F14"
                          >
                            <template v-slot:prepend>
                              <img style="max-height: 20px;" :src="`${tokenReceipt?.icon}`">
                            </template>

                           {{ tokenReceipt?.symbol }}
                          </v-btn>
                        </template>

                        <template v-slot:default="{ isActive }">
                          <v-card title="Dialog">
                            <v-list lines="three">
                              <v-list-item
                                v-for="token in tokenList"
                                :key="token.symbol"
                                link
                                @click="setReceiptToken(token)"
                                :prepend-avatar="token.icon"
                                :title="token.symbol"
                                :subtitle="token.name"
                              >
                
                              </v-list-item>
                            </v-list>

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
                        <v-btn
                          color="primary"
                          size="large"
                          variant="text"
                          @click="clickMe"
                        >
                          <v-icon icon="mdi-target" start></v-icon>

                          Click me
                        </v-btn>
                      </v-card-text>
                    </v-card>
                  </v-menu>
                </template>
              </v-text-field>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-btn
              append-icon="$vuetify"
              variant="flat"
              block
              size="large"
              color="#9E6A11"
              >Send</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const tokenList = [
  {
    icon: "https://cryptologos.cc/logos/thumbs/bitcoin.png?v=025",
    symbol: "BTC",
    name: "Bitcoin",
  },
  {
    icon: "https://cryptologos.cc/logos/thumbs/bnb.png?v=025",
    symbol: "BNB",
    name: "Binance Coin",
  },
];

const tokenPay = ref();
const tokenReceipt = ref();

function setPayToken(token) {
  console.log("Token que llega", token.symbol);
  tokenPay.value = token
}
function setReceiptToken(token) {
  console.log("Token que llega", token.symbol);
  tokenReceipt.value = token
}
</script>

<style lang="scss">
.swap-input {
  height: 130px;

  input {
    font-size: 2rem;
  }
}
</style>
