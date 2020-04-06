<template>
  <v-card flat>
    <v-container fluid>
      <v-row class="child-flex">
        <div>
          <v-toolbar dark>

            <v-toolbar-title>Forumify</v-toolbar-title>

            <v-spacer></v-spacer>
            <div class="hidden-sm-and-down">
                <router-link to="/forum">
                    <v-btn>Forum</v-btn>
                </router-link>
                <router-link to="/question">
                    <v-btn>Ask Question</v-btn>
                </router-link>
                <router-link to="/category">
                    <v-btn>Category</v-btn>
                </router-link>
                <router-link to="/login">
                    <v-btn>Login</v-btn>
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