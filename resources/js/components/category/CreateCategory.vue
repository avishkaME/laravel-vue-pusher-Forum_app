<template>
  <v-container>
    <v-alert
      v-if="errors"
      dense
      outlined
      type="error"
    >
      Please enter category name!
    </v-alert>

    <v-form @submit.prevent="submit">
      <v-text-field v-model="form.name" label="Category Name"></v-text-field>

      <v-btn color="teal" type="submit" :disabled="disabled" v-if="editSlug">Update</v-btn>
      <v-btn color="primary" type="submit" :disabled="disabled" v-else>Add</v-btn>
    </v-form>

    <v-card class="pt-3">
      <v-toolbar color="indigo" dark sense>
        <v-toolbar-title>Categories</v-toolbar-title>
      </v-toolbar>

      <v-list>
        <div v-for="(category,index) in categories" :key="category.id">
          <v-list-item>
            <v-list-item-action>
              <v-btn icon small @click="edit(index)">
                <v-icon color="orange">edit</v-icon>
              </v-btn>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{category.name}}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon small @click="destroy(category.slug)">
                <v-icon color="red">delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          <v-divider></v-divider>
        </div>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: null
      },
      categories: {},
      editSlug: null,
      errors: null
    };
  },
  created() {
      if(!User.admin()){
          this.$router.push('/forum')
      }
    axios.get("/api/category")
    .then(res => this.categories = res.data.data);
  },
  methods: {
    submit() {
        this.editSlug ? this.update() : this.create()
    },
    create(){
        axios.post("/api/category", this.form)
      .then(res =>{
          this.categories.unshift(res.data)
          this.form.name = null
      })
      .catch(error => this.errors = error.response.data.errors)
    },
    update(){
        axios.patch(`/api/category/${this.editSlug}`, this.form)
      .then(res =>{
          this.categories.unshift(res.data)
          this.form.name = null
      })
    },
    destroy(slug,index){
        axios.delete(`/api/category/${slug}`)
        .then(res => this.categories.splice(index,1))
    },
    edit(index){
        // console.log(this.index)
        this.form.name = this.categories[index].name
        this.editSlug = this.categories[index].slug
        this.categories.splice(index,1)
    }
  },
  computed: {
    disabled() {
      // return !(this.form.name)
    }
  },
};
</script>

<style>
</style>