<template>
  <v-card flat>
    <v-container fluid>
      <v-row class="child-flex">
        <div>
          <v-toolbar dark>

            <v-toolbar-title>Forumify</v-toolbar-title>

            <v-spacer></v-spacer>
            <div class="hidden-sm-and-down">
                <router-link
                v-for="item in items"
                :key="item.title"
                :to="item.to"
                v-if="item.show">
                    <v-btn>{{item.title}}</v-btn>
                </router-link> 
            </div>
          </v-toolbar>
        </div>

        <!-- <div style="flex-basis: 20%">
          <v-toolbar dark>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-reply</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-toolbar>
        </div> -->
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data(){
    return {
      items: [
        
        {title : 'Ask Question', to:'/ask',show: User.loggedIn()},
        {title : 'Category', to:'/category',show: User.loggedIn()},
        {title : 'Forum', to:'/forum',show:true},
        {title : 'Login', to:'/login',show: !User.loggedIn()},
        {title : 'Logout', to:'/logout',show: User.loggedIn()},
      ]
    }
  },
  created(){
    EventBus.$on('logout', () => {
      User.logout()
    })
  }
}
</script>