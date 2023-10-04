<template>
    <v-container>
        <v-row class="mt-2 d-flex justify-center">
            <v-col style="max-width: 500px;">
                <v-card title="Send Tokens">
                    <v-card-text>
                        <v-form class="mx-auto">
                            <v-text-field label="You Pay" variant="outlined" class="swap-input">
                                <template v-slot:append-inner>
                                    <v-menu>
                                        <template v-slot:activator="{ props }">
                                            <v-dialog width="500">
                                                <template v-slot:activator="{ props }">
                                                    <v-btn v-bind="props" text="Open Dialog"> </v-btn>
                                                </template>

                                                <template v-slot:default="{ isActive }">
                                                    <v-card title="Dialog">
                                                        <v-list :items="items" item-props lines="three">
                                                            <template v-slot:subtitle="{ subtitle }">
                                                                <div v-html="subtitle"></div>
                                                            </template>
                                                        </v-list>

                                                        <v-card-actions>
                                                            <v-spacer></v-spacer>

                                                            <v-btn text="Close Dialog"
                                                                @click="isActive.value = false"></v-btn>
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
                            <v-text-field label="You Pay" variant="outlined" class="swap-input">
                                <template v-slot:append-inner>
                                    <v-menu>
                                        <template v-slot:activator="{ props }">
                                            <v-dialog width="500">
                                                <template v-slot:activator="{ props }">
                                                    <v-btn v-bind="props" text="Open Dialog"> </v-btn>
                                                </template>

                                                <template v-slot:default="{ isActive }">
                                                    <v-card title="Dialog">
                                                        <v-list :items="items" item-props lines="three">
                                                            <template v-slot:subtitle="{ subtitle }">
                                                                <div v-html="subtitle"></div>
                                                            </template>
                                                        </v-list>

                                                        <v-card-actions>
                                                            <v-spacer></v-spacer>

                                                            <v-btn text="Close Dialog"
                                                                @click="isActive.value = false"></v-btn>
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
                    </v-card-text>

                    <v-card-actions>
                        <v-btn append-icon="$vuetify" variant="tonal" block size="large">Send</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
const items = [
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
    },
    { type: 'divider', inset: true },
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ',
        subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
    },
    { type: 'divider', inset: true },
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
    },
    { type: 'divider', inset: true },
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
    },
    { type: 'divider', inset: true },
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
    },
]
</script>

<style lang="scss">
.swap-input {
    height: 130px;

    input {
        font-size: 2rem;

    }
}
</style>