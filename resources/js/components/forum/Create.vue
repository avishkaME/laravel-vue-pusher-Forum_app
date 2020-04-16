<template>
  <v-container>
    <v-form @submit.prevent="create">
      <span class="red--text" v-if="errors.title">{{errors.title[0]}}</span>
      <v-text-field v-model="form.title" label="Title" type="text" required></v-text-field>

        <!-- <markdown-editor v-model="form.body"></markdown-editor> -->
      <span class="red--text" v-if="errors.category_id">{{errors.category_id[0]}}</span>
      <v-select
        v-model="form.category_id"
        :items="categories"
        item-text="name"
        item-value="id"
        label="Category"
        autocomplete
      ></v-select>
      <span class="red--text" v-if="errors.body">{{errors.body[0]}}</span>
      <vue-simplemde v-model="form.body" ref="markdownEditor" />

      <v-btn color="success" type="submit" class="mr-4" :disabled="disabled">Ask</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: null,
        category_id: null,
        body: null
      },
      categories: {},
      errors: {}
    };
  },
  created () {
      axios.get('/api/category')
      .then(res => this.categories = res.data.data);
  },
  methods: {
    create() {
        axios.post('/api/question',this.form)
        .then(res => this.$router.push(res.data.path))
        .catch(error => this.errors = error.response.data.errors)
    }
  },
  computed: {
    disabled() {
       return !(this.form.title && this.form.body && this.form.category_id)
    }
  },
};
</script>
 
<style>
@import '~simplemde/dist/simplemde.min.css';
</style>