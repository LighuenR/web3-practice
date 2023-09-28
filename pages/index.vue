<template>
    <v-container class="d-flex justify-space-around">
        <v-sheet width="500" class="mx-auto">
            <h1>Send yourself native tokens
                Why? There is no why.
                Balance:</h1>
        </v-sheet>
        <v-sheet width="500" class="mx-auto">
            <v-card title="Send Tokens">
                <v-form class="mx-auto">
                    <v-text-field  label="Token Amount" variant="outlined" class="mx-2"></v-text-field>
                </v-form>
                <v-card-actions>
                    <v-btn append-icon="$vuetify" variant="tonal" block>Send</v-btn>
                </v-card-actions>
            </v-card>
        </v-sheet>
    </v-container>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>