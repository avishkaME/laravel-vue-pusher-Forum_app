<template>
    <v-card>
        <v-container fluid>
            <v-card-title>
                <div>
                    <div class="headline">
                        {{data.title}}
                    </div>
                    
                    <v-list-item-subtitle class="grey--text">by:{{data.user}} - {{data.created_at}}</v-list-item-subtitle>
                </div>
                <v-spacer></v-spacer>
                <v-btn color="teal">5 Replies</v-btn>
            </v-card-title>
            <v-card-text v-html="data.body"></v-card-text>
        </v-container>
    </v-card>
</template>

<script>

export default {
    props: ['data']
}
</script>