<template>
  <div class="peed-page"></div>  
</template>

<script>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
export default {
  setup() {
    const router = useRouter();
    
    onMounted(() => {
      router.push('/bana');
    });
  }
}
</script>

<style>

</style>