<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <h1>Send yourself native tokens
                    Why? There is no why.
                    Balance:</h1>
            </v-col>
            <v-col cols="12" md="6">
                <v-card title="Send Tokens">
                    <v-form class="mx-auto">
                        <v-text-field label="Token Amount" variant="outlined" class="mx-2"></v-text-field>
                    </v-form>
                    <v-card-actions>
                        <v-btn append-icon="$vuetify" variant="tonal" block>Send</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>