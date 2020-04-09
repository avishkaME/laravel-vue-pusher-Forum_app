<template>
  <v-container>
    <v-form @submit.prevent="create">
      <v-text-field v-model="form.title" label="Title" type="text" required></v-text-field>

        <!-- <markdown-editor v-model="form.body"></markdown-editor> -->
      <v-select
        v-model="form.category_id"
        :items="categories"
        item-text="name"
        item-value="id"
        label="Category"
        autocomplete
      ></v-select>
      
        <vue-simplemde v-model="form.body" ref="markdownEditor" />

      <v-btn color="success" type="submit" class="mr-4">Ask</v-btn>
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
        .then(res => console.log(res.data))
        .catch(error => this.errors = error.response.data.error)
    }
  }
};
</script>
 
<style>
@import '~simplemde/dist/simplemde.min.css';
</style>