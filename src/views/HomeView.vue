<template>
  <div class="home">
    <header class="header">
      <div class="container flex-container">
        <h3 class="logo">
          <router-link to="/">
            Dh blog
          </router-link>
        </h3>
        <ul>
          <li><a href="#"></a></li>
        </ul>
        <!-- <swich-button-vue @toggle="onToggleDarkMode" :darkmode="darkmode" /> -->
      </div>
    </header>
    <div class="home-content page">
      <div class="container">
        <!-- <h3 class="home-title layout">1.클론 코딩</h3> -->
        <ul class="card-list layout">
          <li v-for="lists in cardList" :key="'card list' + (lists.idx + 1)">
            <router-link :to="lists.path" >
              <figure :style="{ backgroundImage : 'url(' + lists.imageUrl + ')'}">
                <div class="cover-bg"></div>
              </figure>
              <h4>{{lists.name}}</h4>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive,  onMounted } from 'vue';
// import SwichButtonVue from '@/components/home/SwichButton.vue';
export default ({
  name: "HomeView",
  components: {
    // SwichButtonVue
  },
  setup() {

    let cardList = ref(
      [
        {
          idx: 1,
          name: '바나프레소',
          path: '/bana',
          imageUrl: 'https://source.unsplash.com/random?coffee'
        },
        {
          idx: 2,
          name: 'Todo:D',
          path: '/todo',
          imageUrl: 'https://source.unsplash.com/random?sky'
        },
        {
          idx: 3,
          name: 'IntersectionObserver',
          path: '/test',
          imageUrl: 'https://source.unsplash.com/random?water'
        },
        {
          idx: 4,
          name: 'login',
          path: '/login',
          imageUrl: 'https://source.unsplash.com/random?login'
        },
       
      ]
    );
    let darkmode = ref(false);

    const dackModeCheck = onMounted(() => {
      if (window && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add("darkmode");
        darkmode.value = true;
      } else {
        document.documentElement.classList.add("lightmode");
        darkmode.value = false;
      }
    });

    const onToggleDarkMode = () => {
      if (window) {
        console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          if(document.documentElement.classList.contains('darkmode')) {
            document.documentElement.classList.remove("darkmode");
            document.documentElement.classList.add("lightmode");
            darkmode.value = false;
          } else {
            document.documentElement.classList.remove("lightmode");
            document.documentElement.classList.add("darkmode");
            darkmode.value = true;
          }
        } else {
          if(document.documentElement.classList.contains('lightmode')) {
            document.documentElement.classList.remove("lightmode");
            document.documentElement.classList.add("darkmode");
            darkmode.value = true;
          } else {
            document.documentElement.classList.remove("darkmode");
            document.documentElement.classList.add("lightmode");
            darkmode.value = false;
          }
        }
      }
    }

    return { cardList, dackModeCheck, onToggleDarkMode, darkmode}
  }
});
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
.home {
  display: grid;
  grid-template-rows: 80px auto;
  .home-title {
    font-size: 24px;
    // color: #000;
    margin-bottom: 20px;
  }
  .container {
    padding: 0 20px;
    height: 100%;
  }
  .flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100%;
    background: var(--background-color);
    z-index: 3;
    .logo {
      > a {
        font-family: 'Nanum-Gothic-Extra-Bold';
        font-size: 2.6rem;
        letter-spacing: 1px;
        background-image: -webkit-linear-gradient(92deg, var(--title-color), #feab3a);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-animation: hue 10s infinite linear;
      }
      @-webkit-keyframes hue {
        from {
          -webkit-filter: hue-rotate(0deg);
        }
        to {
          -webkit-filter: hue-rotate(-360deg);
        }
      }
    }
    
    
  }
  .header::after {
    content: '';
    position: absolute;
    left: 0; bottom: 0;
    width: 100%;
    height: 1px;
    background: var(--title-color);
  }
  .page {
    // height: 4000px;
    padding: 40px 0 20px;
  }
  .card-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    > li {
      min-width: calc(20% - 15px);
      > a {
        position: relative;
        aspect-ratio: 1/1.618;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        overflow: hidden;
        box-sizing: border-box;
        transition: all 0.3s ease-in-out;
        > figure {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: -1;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;  
          transition: all 0.2s ease-in-out;
        }
        > h4 {
          position: relative;
          z-index: 1;
          font-size: 2rem;
          color: var(--card-content-color);
          opacity: 0;
          transition: all 0.25s ease-in-out;
        }
      }
      > a:hover {
        box-shadow: 0 0 12px 5px rgba($color: var(--shadow-color), $alpha: 0.2);
        transform: scale(105%);
        > h4 {
          opacity: 1;
        }
        > figure {
          filter: grayscale(100%);
        }
      }
    }
  }
  .cover-bg::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.21);
    width: 100%;
    height: 100%;
    z-index: 2;
  }
}

@media screen and (max-width: 1320px) {
  .home-content {
    .card-list {
      > li {
        min-width: calc(25% - 15px);
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .home-content {
    .card-list {
      > li {
        min-width: calc(33.3333% - 15px);
      }
    }
  }
}

@media screen and (max-width: 640px) {
  .home-content {
    padding: 20px 0;
    .card-list {
      > li {
        min-width: calc(50% - 10px);
      }
    }
  }
}

@media screen and (max-width: 414px) {
  .home-content {
    padding: 20px 0;
    .card-list {
      > li {
        min-width: calc(100%);
        > a {
        aspect-ratio: 1.618/1;
        }
      }
    }
  }
}

</style>
