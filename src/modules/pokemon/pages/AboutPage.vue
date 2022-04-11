<template>
  <h1>About Pages</h1>
  <hr />
  <h2>{{ name }}</h2>
  <button @click="onChangeName">cambiar</button>
</template>

<script>
export default {
  data() {
    return {
      name: "fernando",
    };
  },

  methods: {
    onChangeName() {
      console.log("se cambia el nombre a walter");
      this.name = "walter";
    },
  },

  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    // PETICIONES HTTP

    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
  errorCaptured() {
    console.log("errorCaptured");
  },
  renderTracked() {
    console.log("renderTracked");
  },
  renderTriggered() {
    console.log("renderTriggered");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  serverPrefetch() {
    console.log("serverPrefetch");
  },
};
</script>

