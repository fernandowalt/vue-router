<template>
  <div>
    <!-- <router-link :to="{ name:'home'}">Pokemon list</router-link>
    <router-link :to="{ name:'pokemon-id',params:{id:100}}">Pokemon por id</router-link>
    <router-link :to="{ name:'about'}">about</router-link> -->
    <CustomLink v-for="link in links" :key="link.to" :link="link" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  data() {
    return {
      links: [
        { to: "pokemon-home", name: "pokemons" },
        { to: "pokemon-id", name: "por id", id: 60 },
        { to: "pokemon-about", name: "about" },

        { to: "dbz-characters", name: "characters" },
        { to: "dbz-about", name: "DBZ-about" },
        
        { to: "https://google.com", name: "Google" },
      ],
    };
  },
  components: {
    CustomLink: defineAsyncComponent(() =>
      import("@/modules/shared/components/CustomLink.vue")
    ),
  },
};
</script>

<style scoped>
div {
  padding: 0 30px;
}
a {
  font-weight: bold;
  color: rgb(56, 54, 54);
  margin: 0 10px;
}
/* a.router-link-active {
  color: #42b983;
} */
</style>