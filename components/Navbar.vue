<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/"> Nuxt Portfolio </nuxt-link>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link class="navbar-item" to="/"> Home </nuxt-link>

        <nuxt-link to="/blog" class="navbar-item"> Blog </nuxt-link>

        <nuxt-link to="/profile" class="navbar-item"> Profile </nuxt-link>

        <nuxt-link to="/photos" class="navbar-item"> Photos </nuxt-link>
        
        <nuxt-link to="/about" class="navbar-item"> About </nuxt-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div v-if="loggedIn" class="buttons">
            <button @click="logout" class="button is-primary">
              <strong>Logout</strong>
            </button>
          </div>
          <div v-else class="buttons">
            <nuxt-link to="/login" class="button is-primary">
              <strong>Login</strong>
            </nuxt-link>
          </div>
        </div>
      </div>

      
    </div>
  </nav>
</template>

<script>
  import { mapState } from 'vuex'

  export default {

    methods: {
      async logout() {
        await this.$auth.logout()

        this.$router.push('/login')
      }
    },
    computed: {
      ...mapState('auth', ['loggedIn'])
    }
  };
</script>
