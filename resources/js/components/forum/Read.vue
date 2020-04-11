<template>
    <div v-if="question">
        <edit-question
            v-if="editing"
            :data= question>
        </edit-question>
        <show-question
            v-else
            :data= question>
        </show-question>
        <replies :question="question"></replies>
        <add-reply :questionSlug="question.slug"></add-reply>
    </div>
</template>

<script>
import ShowQuestion from './ShowQuestion'
import EditQuestion from './EditQuestion'
import Replies from '../reply/Replies'
import AddReply from '../reply/AddReply'

export default {
    components:{ShowQuestion,EditQuestion,Replies,AddReply},
    data(){
        return {
            question: null,
            editing: false
        }
    },
    created(){
        this.listen()
        this.getQuestion()
    },
    methods: {
        listen() {
            EventBus.$on('startEditing',()=>{
                this.editing = true
            })

            EventBus.$on('cancelEditing',()=>{
                this.editing = false
            })
        },
        getQuestion(){
            axios.get(`/api/question/${this.$route.params.slug}`)
        .then(res => this.question = res.data.data)
        }
    },
}
</script>