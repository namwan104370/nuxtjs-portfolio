<template>
  <div class="container">
    <div class="columns is-multiline">
        <div v-for="photo in photos " :key="photo.id" class="colum is-3">
           <div class="card">
            <div class="card-content">
                <nuxt-link :to="`/photos/${photo.id}`">
                    <p>{{ photo.id }}</p>
                    <p>{{ photo.author }}</p>
                </nuxt-link>
            </div>
           </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    async asyncData({ $axios }) {
        const photos = await $axios.$get(`https://picsum.photos/v2/list`)

        return { photos }
    }
}
</script>

<style>

</style>