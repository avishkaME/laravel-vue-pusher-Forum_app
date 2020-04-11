<template>
    <div class="mt-3">
        <v-card>
            <v-card-title>
                <div class="headline">{{data.user}}</div>
                <div class="ml-2">said {{data.created_at}}</div>
                <v-spacer></v-spacer>
                <like :content="data"></like>
            </v-card-title>
            <v-divider></v-divider>

            <edit-reply v-if="editing" :reply="data"></edit-reply>
            <v-card-text v-else v-html="reply"></v-card-text>

            <div v-if="!editing">
                <v-card-actions v-if="own">
                    <v-btn icon small color="orange" @click="edit">
                        <v-icon>edit</v-icon> 
                    </v-btn>
                    <v-btn icon small color="red" @click="destroy">
                        <v-icon>delete</v-icon> 
                    </v-btn>
                </v-card-actions>
            </div>
        </v-card>
    </div>
</template>

<script>
import EditReply from './EditReply'
import Like from '../likes/Like'
    export default {
        data() {
            return {
                editing: false,
                beforeEditReplyBody: ''
            }
        },
        props: ['data','index'],
        components: {EditReply,Like},
        computed: {
            own() {
                return User.own(this.data.user_id)
            },

            reply(){
                return md.parse(this.data.reply)
            }
        },
        created () {
            this.listen()
        },
        methods: {
            destroy() {
                EventBus.$emit('deleteReply',this.index)
            },

            edit(){
                this.editing = true
                this.beforeEditReplyBody = this.data.reply
            },

            listen(){
                EventBus.$on('cancelEditing',(reply) =>{
                    this.editing = false
                    if(reply !== this.data.reply){
                        this.data.reply = this.beforeEditReplyBody
                        this.beforeEditReplyBody = ''

                    }

                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>