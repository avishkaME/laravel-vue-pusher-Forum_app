<template>
    <div>
        <vue-simplemde v-model="reply.reply" ref="markdownEditor" />
         <v-card-actions>
                    <v-btn icon small color="green" @click="update">
                        <v-icon>save</v-icon> 
                    </v-btn>
                    <v-btn icon small color="black" @click="cancel">
                        <v-icon>cancel</v-icon> 
                    </v-btn>
        </v-card-actions>
    </div>
</template>

<script>
    export default {
      props: ['reply'],
      methods: {
          cancel(reply){
              EventBus.$emit('cancelEditing',reply);
          },

          update() {
              axios.patch(`/api/question/${this.reply.question_slug}/reply/${this.reply.id}`,{body:this.reply.reply})
              .then(res => this.cancel(this.reply.reply))
          },
      },
    }
</script>

<style lang="scss" scoped>

</style>