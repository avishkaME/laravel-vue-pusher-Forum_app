<template>
    <div class="mt-4">
        <v-container>
            <vue-simplemde v-model="body" ref="markdownEditor" />
            <v-btn dark color="green" @click="submit">
                <v-icon>done</v-icon>
                Reply
            </v-btn>
        </v-container>
    </div>
</template>

<script>
    export default {
        props: ['questionSlug'],
        data() {
            return {
                body: null
            }
        },
        methods: {
            submit() {
                axios.post(`/api/question/${this.questionSlug}/reply`,{body:this.body})
                .then(res => {
                    this.body = ''
                    EventBus.$emit('addReply',res.data.reply)
                    window.scroll(0,0)
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>