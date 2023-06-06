<template>
  <div class="container has-text-centered">
    <h2 class="title" >My Profile</h2>

    <img :src="user.avatar_url" alt="User Avatar" class="avatar">
    <p>Bio : {{ user.bio}}</p>
    <p>Location : {{ user.location}}</p>

    <div class="columns is-multiline">
        <div v-for="repo in repos " :key="repo.id" class="colum is-3" >
            <div class="card">
                <div class="card-content">
                    <p>
                        repo Name : <a :href="repo.html_url" 
                                        target="_blank"
                                        rel="noopener noreferrer" 
                                    >
                                            {{ repo.name }}
                                    </a>
                    </p>
                    <p>Star : {{ repo.stargazers_count }}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    middleware: 'auth',
    head() {
        return {
            title: this.title
        }
    },
    async asyncData({ $axios }) {
        const baseURL = 'https://api.github.com'

        // set header not sent Authorization 
        $axios.setHeader('Authorization',null)


        const [user , repos] = await Promise.all([
            $axios.$get(`${baseURL}/users/namwan104370`), 
            $axios.$get(`${baseURL}/users/namwan104370/repos`)])

        const name = user.login
        
        return { user , repos , title: name}

    }
}
</script>

<style scoped>
.avatar{
    width: 128px !important;
    height: 128px !important;
}
.container{
  margin: 0 auto;
 /* min-height: 100vh; 
  display: flex; */
  justify-content: center;
  align-items: center;
  text-align: center;
}
.card-content{
    border: 1px solid ;
    padding: 10px;
    text-align: start;
    width: 250px;
}
</style>
