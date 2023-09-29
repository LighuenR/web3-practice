<script setup lang="ts">
import { useAccount } from 'use-wagmi'

const { $web3Modal } = useNuxtApp()
const { address, isConnected } = useAccount()

function connect() {
    console.log("ESRAS", $web3Modal)
  $web3Modal?.openModal()
}
</script>

<template>
  <v-btn variant="plain" @click="connect">
    <template v-if="!isConnected">
      Connect
    </template>
    <template v-else>
      {{ shorterAddress(address) }}
    </template>
  </v-btn>
</template>