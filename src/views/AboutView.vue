<template>
  <div class="home" :scroll="handelScroll">
    <input type="text" v-model="search" />
    <p>{{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
    <button @click="handleClick">중지</button>

    <card-list :posts="posts" />


    <div class="div1">
      <div class="div2">sub 1</div>
      <div class="div3">sub 2</div>
    </div>
  </div>
</template>
<script>
import { computed, ref, watch, watchEffect } from "vue";
import CardList from '@/components/CardList.vue';
export default {
  name: "HOME",
  components: {CardList},
  setup() {
    const search = ref("");
    const names = ref(["qq", "aa", "zz", "dd"]);

    const scrollWrap = document.getElementById('app');

    console.log(scrollWrap);
    

    const matchingNames = computed(() => {
      return names.value.filter(name => name.includes(search.value));
    });

    const stopWatch = watch(search, () => {
      "search 값이 바뀔 때 마다 실행되는 함수";
    });

    const stopWatchEffect = watchEffect(() => {
      console.log(
        "search value가 정의됬기에 search가 바뀔때마다 실행된다",
        search.value
      );
    });

    

    const posts = ref([
        { title: '1번 타이틀', body: '1번 제목', id: 1 },
        { title: '2번 타이틀', body: '2번 제목', id: 2 },
    ]);

    const handleClick = () => {
      stopWatch();
      stopWatchEffect();

      posts.value = [{title: '3번 타이틀', body: '3번 제목', id: 3}]
    };

    return { names, search, matchingNames, handleClick, posts, scrollWrap };
  }
};
</script>

<style>
.div1 {
  width: 1200px;
  height: 400px;
  background: rgba(0,0,0,.2);
}

.div2 {
  width: 900px;
  background: rgba(0,0,0,.4);
}

.div3 {
  width: 300px;
  background: rgba(0,0,0,.6);
}

</style>