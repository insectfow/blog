<template>
  <div class="card-list">
    {{posts.title}}
    {{posts.body}}
  </div>  
</template>

<script>
import {onMounted, onUnmounted, onUpdated} from 'vue'
export default {
  props: ["posts"],
  setup(props) {
    onMounted(() => console.log("component mounted"));
    onUnmounted(() => console.log("component onUnmounted"));
    onUpdated(() => console.log("component onUpdated"));
    console.log(props.posts[1]); // 받은 prop 사용가능
  }
}
</script>

<style>

</style>