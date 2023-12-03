<template>
  <div class="home">
    <button @click="getMenus">Call Menu</button>
    <!--    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />-->
  </div>
</template>

<script lang="ts" setup>
import { getMenusApi } from "@/api/menuApi"; // @ is an alias to /src

// export default defineComponent({
//   name: "HomeView",
//   // components: {
//   //   HelloWorld,
//   // },
// });

const getMenus = async () => {
  const res = await getMenusApi();
  console.log(res.data);
};
</script>
