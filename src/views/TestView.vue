<template>
  <main class="main-page">
    <div class="section">
      <h1>안녕?</h1>
    </div>
    <div class="section">
      <h1>반가워~</h1>
    </div>
    <div class="section">
      <h1>난 동현이야</h1>
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from 'vue';
export default {
  setup() {
    let observer = new IntersectionObserver((e) => {
      e.forEach((v) => {
        console.log(v);
        if (v.isIntersecting) {
          v.target.style.opacity = 1;
          v.target.style.transform = 'rotate(0deg)';
        } else {
          v.target.style.opacity = 0;

        }
      })
    });

    onMounted(() => {
      let div = document.querySelectorAll('div.section')
      console.log(div);
      observer.observe(div[0]);
      observer.observe(div[1]);
      observer.observe(div[2]);
    })

    

  }
}
</script>

<style lang="scss" scoped>
.main-page {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #000;
  .section {
    position: relative;
    margin-bottom: 40px;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    opacity: 0;
    transition: all 1.5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    > h1 {
      position: absolute;
      color: #fff;
      font-size: 40px;
    }
  }
}
</style>