<template>
  <div class="bana-home">
    <!-- 헤더 -->
    <header class="bana-header">
      <div class="bana-container">
        <!-- 헤더 로고 -->
        <h1 class="bana-logo">
          <router-link to="/bana">
            <img src="../assets/images/bana/h_logo_9d3496d0dcaf.png" alt="bana home logo">
          </router-link>
        </h1>
        <!-- 헤더 네비 -->
        <nav class="bana-nav">
          <ul>
            <li class="bana-nav-info">
              <a href="#">
                <span>바나프레소 소개</span></a>
            </li>
            <li class="bana-nav-menu">
              <a href="#">
                <span>메뉴 리스트</span>
              </a>
            </li>
            <li class="bana-nav-store">
              <a href="#">
                <span>매장 안내</span>
              </a>
            </li>
            <li class="bana-nav-news">
              <a href="#">
                <span>소식</span></a>
            </li>
            <li class="bana-nav-recruit">
              <a href="#">
                <span>채용</span></a>
            </li>
            <li class="bana-nav-partner">
              <a href="#">
                <span>입점제안</span>
              </a>
            </li>
            <li class="bana-nav-franchisee">
              <a href="#">
                <span>가맹점 문의</span>
              </a>
            </li>
            <li class="bana-nav-multilink">
              <a href="#">
                <span>멀티링크</span>
              </a>
            </li>
          </ul>
        </nav>
        <!-- 헤더 모바일 메뉴바 -->
        <div class="bana-m">
          <a href="#" @click.prevent="isMobileModal = true">
            <img src="@/assets/images/bana/ham.png" alt="bana menu icon">
          </a>
        </div>
      </div>
    </header>
    <!-- 컨텐츠 -->
    <div class="bana-contents">
      <!-- 메인 미디어 영역 -->
      <section class="bana-main-media">
        <!-- 가맹점 문의 바로가기 버튼 -->
        <div class="bana-btn-franchisee">
          <a href="#">
            <i class="shop-icon"></i>
            <span>가맹점 문의</span>
            <i class="arrow-icon"></i>
          </a>
        </div>
        <!-- 마우스 애니메이션 -->
        <div class="bana-mouse-img">
          <img src="@/assets/images/bana/ico_mouse.png" alt="bana main media mouse animation">
        </div>
        <!-- 메인 영상 컨텐츠 -->
        <div class="bana-media">
          <video src="@/assets/images/bana/home_v_6c27a118e335.mp4" muted autoplay></video>
        </div>
      </section>
      <!-- 새로운 메뉴 영역 -->
      <section class="bana-new-menu">
        <h3 class="bana-new-menu-title">
          <img src="@/assets/images/bana/tit_new_menu.png" alt="bana menu title word img">
        </h3>
        <p class="bana-new-menu-text">시즌마다 들어오는 새로운 메뉴들을 바나프레소에서 즐기세요.</p>
        <div class="bana-new-menu-contents">
          <swiper
            :modules="modules"
            :slides-per-view="1.3"
            :space-between="25"
            :pagination="{ clickable: true, el: '.bana-swiper-pagination' }"
            :loop="true"
            :centeredSlides="true"
            :autoplay='{
              "delay": 4000,
              "disableOnInteraction": false
            }'
            :breakpoints="{
              1240: {
                slidesPerView: 5,
                spaceBetween: 50
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 50
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 30
              }
            }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide>
              <div class="bana-card">
                <a href="#">
                  <img src="@/assets/images/bana/banner_15817b9d471f.jpg" alt="bana new menu img">
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="bana-card">
                <a href="#">
                  <img src="@/assets/images/bana/220920_3TYPE-원두_키오스크POP.jpg" alt="bana new menu img">
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="bana-card">
                <a href="#">
                  <img src="@/assets/images/bana/banner_3f5a7a8040c5.jpg" alt="bana new menu img">
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="bana-card">
                <a href="#">
                  <img src="@/assets/images/bana/banner_6c2b3ff2f693.jpg" alt="bana new menu img">
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="bana-card">
                <a href="#">
                  <img src="@/assets/images/bana/banner_6f6fdae8c160.jpg" alt="bana new menu img">
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="bana-card">
                <a href="#">
                  <img src="@/assets/images/bana/banner_8da0180039fd.jpg" alt="bana new menu img">
                </a>
              </div>
            </swiper-slide>
          </swiper>
          <div class="bana-swiper-pagination"></div>
        </div>
      </section>
      <!-- 바나 가이드 -->
      <section class="bana-guide">
        <h3 class="bana-guide-title">
          <img src="@/assets/images/bana/tit_bana_guide.png" alt="bana guide title word img">
        </h3>
        <p class="bana-guide-text">바나프레소 앱 다운 받고 더 많은 혜택을 누려보세요.</p>
        <div class="bana-guide-contents">
          <div></div>
          <div></div>
        </div>
      </section>
    </div>
    <!-- 헤더 모바일 메뉴 모달 -->
    <bana-mobile-menu v-show="isMobileModal" @close="isMobileModal = false" />
  </div>  
</template>

<script>
import banaMobileMenu from '@/components/bana/BanaMobileMenu.vue';
import { ref } from 'vue';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

export default {
  components: {
    banaMobileMenu,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const isMobileModal = ref(false);

    const onSwiper = (swiper) => {
        console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };

    return { isMobileModal, onSwiper,
      onSlideChange, modules: [Pagination, Autoplay], };
  }
}
</script>

<style lang="scss" scoped>
// 헤더
.bana-header {
  position: sticky;
  top: 0;
  width: 100%;
  height: 95px;
  background: #fff;
  display: flex;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  z-index: 20;
  // 헤더 컨테이너
  .bana-container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  // 헤더 로고
  .bana-logo {
    display: flex;
    align-items: center;
    > a {
      display: flex;
    }
  }
  // 헤더 네비
  .bana-nav {
    display: flex;
    > ul {
      display: flex;
      align-items: center;
      > li {
        font-size: 16px;
        > a {
          display: flex;
          padding: 16px 26px;
          color: #020303;
          > span {
            position: relative;
          }
          > span::after {
            content: '';
            position: absolute;
            bottom: -40px;
            left: 0;
            width: 0;
            height: 3px;
            background: #f1648a;
            transition: all .3s ease-in-out;
          }
          
        }
        > a:hover {
          color: #f1648a;
          font-weight: 700;
          > span::after {
            content: '';
            position: absolute;
            bottom: -40px;
            left: 0;
            width: 100%;
            height: 3px;
            background: #f1648a;
            transition: all .3s ease-in-out;
          }
        }
        
      }
      .bana-nav-partner {
        position: relative;
        > a {
          padding: 16px 12px 16px 26px;
          > span {
            font-weight: 700;
          }
          > span::after {
            display: none;
          }
        }
      }
      .bana-nav-partner:after {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: 80%;
        background: #ddd;
      }
      .bana-nav-franchisee {
        position: relative;
        > a {
          padding: 16px 26px 16px 12px;
          > span {
            font-weight: 700;
          }
          > span::after {
            display: none;
          }
        }
      }
      .bana-nav-franchisee:after {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: 32%;
        background: #ddd;
      }
    }
  }

  .bana-m {
    display: none;
  }
}

.bana-contents {
  position: relative;
  width: 100%;
  height: 4000px;
  z-index: 19;
  background: #fff;
  .bana-main-media {
    position: relative;
    width: 100%;
    .bana-media {
      width: 100%;
      overflow: hidden;
      max-height: 850px;
      > video {
        width: 100%;
      }
    }
    .bana-btn-franchisee {
      position: absolute;
      top: 28%;
      right: 5%;
      z-index: 20;
      > a {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        border: 1px solid #23163e;
        border-radius: 40px;
        background-color: rgba(38,26,63,.9);
        color: #fff;
        height: 80px;
        padding: 0 26px;
        > span {
          font-size: 24px;
          font-weight: bold;
          padding: 0 20px 0 12px;
        }
        .shop-icon {
          background: url(@/assets/images/bana/icon_store.png) no-repeat center / cover;
          width: 27px;
          height: 26px;
        }
        .arrow-icon {
          background: url(@/assets/images/bana/icon_arrow_right.png) no-repeat center / cover;
          width: 27px;
          height: 26px;
        }
      }
    }
    .bana-mouse-img {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 30px;
      animation: mouseMove 2.4s infinite ease-in-out;
      > img {
        width: 100%;
      }
    }
  }
  .bana-new-menu {
    padding: 130px 0;
    .bana-new-menu-title {
      text-align: center;
      margin-bottom: 20px;
      
    }
    .bana-new-menu-text {
      text-align: center;
      color: #777;
      margin-bottom: 60px;
    }
    .bana-new-menu-contents {
      position: relative;
      margin: 0 20px;
    }
    .bana-card {
      > a {
        display: flex;
        width: 100%;
        > img {
          width: 100%;
        }
      }
    }
    
  }
  .bana-guide {
    width: 100%;
    height: 900px;
    background: url(@/assets/images/bana/bg_guide.jpg) no-repeat center / cover;
    padding: 130px 0;
    .bana-guide-title {
      text-align: center;
      margin-bottom: 20px;
      
    }
    .bana-guide-text {
      text-align: center;
      color: #777;
      margin-bottom: 60px;
    }
  }
}

@keyframes mouseMove {
  0% {
    bottom: 5%;
  }
  50% {
    bottom: 4%;
  }
  100% {
    bottom: 5%;
  }
}

@media screen and (max-width:1240px) {
  .bana-header {
    height: 60px;
    .bana-container {
      width: 100%;
      padding: 0 20px;
      display: flex;
    }
    .bana-nav {
      > ul {
        > li {
          font-size: 14px;
          > a {
            padding: 16px 20px;
            > span::after {
              bottom: -23px;
            }
          }
          > a:hover {
            > span::after {
              bottom: -23px;
            }
          }
          
        }
        .bana-nav-partner {
          position: relative;
          > a {
            padding: 16px 12px 16px 20px;
          }
        }
        .bana-nav-franchisee {
          position: relative;
          > a {
            padding: 16px 20px 16px 12px;
          }
        }
      }
    }
  }
}

@media screen and (max-width:1024px) {
  .bana-header {
    .bana-nav {
      display: none;
    }
    .bana-m {
      display: flex;
      justify-content: center;
      align-items: center;
      > a {
        width: 36px;
        height: 36px;
        > img {
          width: 100%;
        }
      }
    }
  }
}
@media screen and (max-width:768px) {
  .bana-contents {
    .bana-main-media {
      .bana-btn-franchisee {
        top: 10%;
        right: 5%;
        > a {
          padding: 0 20px;
          height: 60px;
          > span {
            font-size: 20px;
          }
        }
      }
      .bana-mouse-img {
        width: 24px;
      }
      
    }
    .bana-new-menu {
      .bana-new-menu-contents {
        margin: 0;
      }
    }
  }
  @keyframes mouseMove {
    0% {
      bottom: 8%;
    }
    50% {
      bottom: 7%;
    }
    100% {
      bottom: 8%;
    }
  }
}

@media screen and (max-width:420px) {
  .bana-contents {
    .bana-main-media {
      .bana-btn-franchisee {
        transition: opacity 0.2s;
        opacity: 0;
        > a {
          padding: 0 20px;
          height: 60px;
          > span {
            font-size: 20px;
          }
        }
      }
      .bana-media {
        > video {
          width: 100%;
          object-fit: cover;
          height: calc(100vh - 60px);
        }
      }
    }
    .bana-main-media:hover {
      .bana-btn-franchisee {
        opacity: 1;
      }
    }
    .bana-new-menu {
      .bana-new-menu-text {
        text-align: center;
        word-break: keep-all;
        line-height: 1.5;
        font-size: 20px;
        color: #777;
        margin-bottom: 60px;
      }
    }
    
    
    
    
  }
  @keyframes mouseMove {
    0% {
      bottom: 10%;
    }
    50% {
      bottom: 9%;
    }
    100% {
      bottom: 10%;
    }
  }
}
</style>