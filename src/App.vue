<template >
  <router-view />
  <!-- <button @click="handleSignOut">로그아웃하기</button> -->
</template>

<script>
import { ref, onMounted } from 'vue';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../public/js/firebase';

export default ({
  setup() {
    const isLoggedIn = ref(false);

    onMounted(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;

          console.log(uid, user);

          isLoggedIn.value = true;
          // ...
        } else {
          isLoggedIn.value = false;
          // User is signed out
          // ...
        }
      })
    });

    const handleSignOut = () => {
      signOut(auth).then((res) => {
        console.log(res, '로그아웃 성공');
      })
        .catch((error) => {
          console.error(error);
        })
    };

    return { handleSignOut }
  },
})
</script>


<style lang="scss">
@font-face {
  font-family: 'nanum-squarer';
  src: url(@/assets/fonts/nanumsquarer.woff2) format("woff2");
}

html, body, nav, div, ul, li, ol, p, span, input, a, h1, h2, h3, h4, h5, h6, section, button {
  margin: 0;
  padding: 0;
  font-family: 'nanum-squarer';
  font-weight: normal;
}

ul, ol, li {
  list-style: none;
  margin: 0;
  padding: 0;
}

a, a:focus, a:hover {
  text-decoration: none;
}
.bana-swiper-pagination {
  position: absolute;
  display: flex !important;
  justify-content: center !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  bottom: -40px !important;
  .swiper-pagination-bullet {
    border-radius: 0 !important;
    border: 1px solid #fff;
    opacity: 1 !important;
    width: 16px;
    height: 16px;
    background: url(@/assets/images/bana/btn_menu_pager.png) no-repeat 100% 0;
    margin: 0 10px !important;
  }
  .swiper-pagination-bullet-active {
    background: url(@/assets/images/bana/btn_menu_pager.png) no-repeat 0 0;
  }
  
}


.swiper {
  padding: 60px 20px !important;
}
.swiper-slide {
  box-shadow: 0 0 10px rgba(0,0,0,0.2) !important;
  transition: transform 0.3s;
}
.swiper-slide:hover {
  transform: scale(1.1);
  
}

@media screen and (max-width:450px) {
  .swiper {
    padding: 0 !important;
  }
  .swiper-slide {
    box-shadow: 0 0 10px rgba(0,0,0,0.2) !important;
    transition: unset;
  }
  .swiper-slide:hover {
    transform: unset;
    
  }
}
</style>
