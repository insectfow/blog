<template>
  <div class="bana-home" >
    <!-- 헤더 -->
    <header class="bana-header">
      <div class="bana-container">
        <!-- 헤더 로고 -->
        <h1 class="bana-logo">
          <router-link to="/bana">
            <img src="@/assets/images/bana/h_logo_9d3496d0dcaf.png" alt="bana home logo">
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
        <!-- 가이드 타이틀 -->
        <h3 class="bana-guide-title">
          <img src="@/assets/images/bana/tit_bana_guide.png" alt="bana guide title word img">
        </h3>
        <!-- 가이드 설명글 -->
        <p class="bana-guide-text">바나프레소 앱 다운 받고 더 많은 혜택을 누려보세요.</p>
        <!-- 가이드 1 -->
        <div class="bana-guide-contents">
          <div class="bana-guide-left glp">
            <h4>Guide 01</h4>
            <p>행복한 사이즈
              <br>
              행복한 한잔!
              <br>

              앱에서 편리하게 주문하고
              <br>

              다양한 이벤트와 혜택도
              <br>

              누려보세요!</p>
            <div class="bana-btn">
              <a href="#">
                <i class="apple-img"></i>
                <span>App store</span>
                <i class="arrow-img"></i>
              </a>
              <a href="#">
                <i class="google-img"></i>
                <span>google play</span>
                <i class="arrow-img"></i>
              </a>
            </div>
          </div>
          <div class="bana-guide-right">
            <figure>
              <img src="@/assets/images/bana/img_guide1.png" alt="bana guide img1">
            </figure>
          </div>
        </div>
        <!-- 가이드 2 -->
        <div class="bana-guide-contents btl">
          <div class="bana-guide-left grp">
            <figure>
              <img src="@/assets/images/bana/img_guide2.png" alt="bana guide img2">
            </figure>
          </div>
          <div class="bana-guide-right glp">
            <h4>Guide 02</h4>
            <p>앱 설치 문자 받기!
              <br>
              빠르고 손쉽게 앱을
              <br>
              설치해보세요 :)</p>
            <div class="bana-guide-input-wrap">
              <input type="tel" placeholder="(-)없이 휴대폰 번호 입력">
              <button>URL 받기</button>
            </div>
          </div>
        </div>
        <!-- App 상세보기 버튼 -->
        <div class="bana-guide-app-more-btn">
          <a href="#">
            <span>App 상세보기</span>
            <i class="arrow2-img"></i>
          </a>
        </div>
      </section>
      <!-- 바나 스토어 -->
      <section class="bana-store">
        <!-- 스토어 타이틀 -->
        <h3 class="bana-store-title">
          <img src="@/assets/images/bana/tit_store.png" alt="bana store title word img">
        </h3>
        <!-- 스토어 설명글 -->
        <p class="bana-store-text">주변의 가까운 바나프레소 매장을 찾아보세요.</p>

        <div class="bana-store-contents">
          <ul class="bana-store-lists">
            <li v-for="list in stores" :key="list.id">
              <a href="#">
                <picture>
                  <img :src="list.img" :alt="list.storeName + ' 스토어 이미지'">
                </picture>
                <h3>{{list.storeName}}</h3>
                <p>{{list.address}}</p>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
    <!-- 푸터 -->
    <footer class="bana-footer">
      <div class="bana-footer-container">
        <h4 class="footer-logo">
        <img src="@/assets/images/bana/footer_logo.png" alt="bana footer logo">
        </h4>
        <ul class="footer-nav">
          <li>
            <a href="#">개인정보처리방침</a>
          </li>
          <li>
            <a href="#">이용약관</a>
          </li>
          <li>
            <a href="#">채용</a>
          </li>
          <li>
            <a href="#">입점제안</a>
          </li>
          <li>
            <a href="#">가맹점 문의</a>
          </li>
        </ul>
        <address class="footer-address">
          <span>
            <strong>
              상호명 : 주식회사 바나플에프엔비
            </strong>
          </span>
          <span>
            <em>대표자명 : 송민기</em><em>사업장 소재지 : 서울특별시 강남구 테헤란로 81길 9 (삼성동, 바나플빌딩) 3층</em><em>사업자번호 : 358-87-00860</em>
          </span>
          <span>
            <em>대표전화 : 1811-1111</em><em>Fax : 070-4512-0296</em><em>이메일 : master@banapresso.com</em>
          </span>
          <span class="copy">© banaple F&B. All Rights Reserved.</span>
        </address>
      </div>
      
    </footer>
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
    
    const stores = ref([
      {
        id: 1,
        storeName: '충무로점',
        address: '서울특별시 중구 필동2가 21-1',
        img: require('@/assets/images/bana/store1.jpg')
      },
      {
        id: 2,
        storeName: '건대역점',
        address: '서울 광진구 아차산로 221 (화양동 7-4)',
        img: require('@/assets/images/bana/store2.jpg')
      },
      {
        id: 3,
        storeName: '서소문로점',
        address: '서울 중구 서소문로 130 1층',
        img: require('@/assets/images/bana/store3.jpg')
      },
      {
        id: 4,
        storeName: '교육개발원사거리점',
        address: '서울 서초구 강남대로27길 7-21 1층',
        img: require('@/assets/images/bana/store4.jpg')
      },
      {
        id: 5,
        storeName: '서초범원점',
        address: '서울시 서초구 서초동 1554-5 아스트라 101호, 102호',
        img: require('@/assets/images/bana/store5.jpg')
      },
      {
        id: 6,
        storeName: 'AK금정점',
        address: '경기도 군포시 금정동 689번지 AK플라자 금정점 2층',
        img: require('@/assets/images/bana/store6.jpg')
      },
      {
        id: 7,
        storeName: '낙성대역점',
        address: '서울시 관악구 봉천동 1658-19 ',
        img: require('@/assets/images/bana/store1.jpg')
      },
      {
        id: 8,
        storeName: '구로비즈메트로점',
        address: '서울시 구로구 구로동 851번지 한화비즈메트로1차 109호',
        img: require('@/assets/images/bana/store8.jpg')
      },
      {
        id: 9,
        storeName: '거여역점',
        address: '서울특별시 송파구 거여동 37-6',
        img: require('@/assets/images/bana/store9.jpg')
      }
    ])
    
    
    return { isMobileModal, onSwiper,
      onSlideChange, modules: [Pagination, Autoplay], stores};
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
    // height: 900px;
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
      word-break: keep-all;
    }
    .bana-guide-contents {
      display: flex;
      align-items: center;
      width: 1200px;
      margin: 0 auto;
      h4 {
        color: #f1648a;
        margin-bottom: 25px;
        font-size: 15px;
        font-weight: bold;
      }
      p {
        font-size: 38px;
        font-weight: bold;
        line-height: 51px;
        margin-bottom: 40px;
      }
      .glp {
        padding-left: 125px;
      }

      .grp {
        padding-left: 85px;
      }

      figure {
        width: 100%;
        img {
          width: 100%;
        }
      }

      .bana-btn {
        display: flex;
        gap: 5px;
        > a {
          display: flex;
          align-items: center;
          border-radius: 40px;
          border: 1px solid #f9c9d6;
          width: 134px;
          height: 66px;
          padding: 0 24px;
          background: #fff;
          > span {
            color: #000;
          }
        }
        .apple-img, .google-img {
          width: 22px;
          height: 64px;
          margin-right: 7px;
        }

        .apple-img {
          background: url(@/assets/images/bana/icon_app_store.png) no-repeat center / contain;
        }
        .google-img {
          background: url(@/assets/images/bana/icon_google_play.png) no-repeat center / contain;
        }

        .arrow-img {
          margin-left: 14px;
          width: 7px;
          height: 14px;
          background: url(@/assets/images/bana/arrow_right_black.png) no-repeat center / contain;
        }
      }

      .bana-guide-input-wrap {
        display: flex;
        height: 58px;
        > input {
          width: 268px;
          padding: 0 20px;
          height: 100%;
          box-sizing: border-box;
          border: 1px solid #f9c9d6;
          background: #fff;
          border-radius: 4px;
          font-size: 15px;
        }
        > button {
          width: 104px;
          height: 100%;
          border: none;
          background: #f1648a;
          font-size: 18px;
          border-radius: 4px;
          margin-left: 5px;
          color: #fff;
          font-weight: bold;
        }
      }
    }
    .btl {
      position: relative;
    }
    .btl::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: #fdd6e2;
    }
    .bana-guide-app-more-btn {
      margin-top: 50px;
      display: flex;
      justify-content: center;
      > a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 90px;
        background: #f1648a;
        border-radius: 50px;
        
        .arrow2-img {
          width: 40px;
          height: 12px;
          background: url(@/assets/images/bana/arrow_right_white.png) no-repeat center / contain;
          transform: translateX(0);
          transition: all 0.2s ease-in-out;
        }

        > span {
          font-size: 26px;
          font-weight: bold;
          color: #fff;
          margin-right: 30px;
        }
      }
      
      > a:hover {
        .arrow2-img {
          transform: translateX(10px);
        }
      }
    }
  }
  .bana-store {
    padding: 130px 0;
    width: 1200px;
    margin: 0 auto;
    .bana-store-title {
      text-align: center;
      margin-bottom: 20px;
      
    }
    .bana-store-text {
      text-align: center;
      color: #777;
      margin-bottom: 60px;
    }

    .bana-store-contents {
      padding: 40px 0;
      margin: 0 auto;
      > ul {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
        > li {
          width: 30%;
          > a {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            > picture {
              margin-bottom: 10px;
              > img {
                width: 100%;
              }
            }
            > h3 {
              margin-bottom: 10px;
              font-size: 22px;
              color: #000;
              font-weight: bold;
            }
            > p {
              color: #999;
              font-size: 16px;
              text-align: center;
              line-height: 20px;
              min-height: 60px;
            }
          }
          > a:hover {
            > h3 {
              color: #f1648a;
            }
          }
        }
      }
    }
  }
}

.bana-footer {
  position: relative;
  padding: 60px 0 40px;
  background: #fff;
  border-top: 1px solid #cecece;
  .bana-footer-container {
    width: 1200px;
    margin: 0 auto;
    
  }
  .footer-logo {
    margin-bottom: 15px;
  }
  .footer-nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
    > li {
      > a {
        color: #000;
      }
      > a:hover {
        color: #f1648a;
      }
    }
  }
  .footer-address {
    > span {
      display: block;
      margin-bottom: 10px;
      color: #333;
      > strong {
        display: inline-block;
        font-style: normal;
        margin-bottom: 5px;
      }
      > em {
        margin-right: 20px;
        font-style: normal;
      }
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

  .bana-contents {
    .bana-guide {
      .bana-guide-contents {
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
        p {
          font-size: 28px;
          line-height: 44px;
        }
        .glp {
          padding-left: 60px;
        }

        .grp {
          padding-left: 0;
        }
        figure {
          width: 400px;
        }
      }
    }
    .bana-store {
      width: 100%;
    }
  }
  .bana-footer {
    .footer-logo {
      margin-bottom: 30px;
    }
    .bana-footer-container {
      width: 100%;
      // margin: 0 auto;
      padding: 0 20px;
      box-sizing: border-box;
    }
    .footer-address {
      > span {
        > em {
          display: inline-block;
          word-break: keep-all;
          line-height: 26px;
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
@media screen and (max-width:900px) {
  .bana-contents {
    .bana-guide {
      .bana-guide-contents {
        flex-direction: column;
        padding-top: 60px;
        h4 {
          text-align: center;
        }
        p {
          font-size: 28px;
          line-height: 44px;
          text-align: center;
        }
        .glp {
          padding-left: 0;
        }

        > div {
          margin-bottom: 40px;
        }

        .grp {
          padding-left: 0;
        }
        figure {
          width: 400px;
        }
      }
      .btl {
        flex-direction: column-reverse !important;
      }
      .btl::after {
        width: 80%;
      }
    }
    .bana-store {
      .bana-store-contents {
        > ul {
          > li {
            width: 46%;
          }
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
    .bana-store {
      .bana-store-contents {
        > ul {
          > li {
            width: 90%;
          }
        }
      }
    }
    .bana-guide {
      .bana-guide-contents {
        > div {
        }
        figure {
          width: 100%;
          margin: 0;
          padding: 0;
        }
      }
    }
  }
  .bana-footer {
    .footer-nav {
      flex-wrap: wrap;
      > li {
        
        > a {
          display: flex;
          flex-wrap: wrap;
        }
      }
    }
    .footer-logo {
      margin-bottom: 30px;
    }
    .bana-footer-container {
      width: 100%;
      // margin: 0 auto;
      padding: 0 20px;
      box-sizing: border-box;
    }
    .footer-address {
      > span {
        > em {
          display: inline-block;
          word-break: keep-all;
          line-height: 26px;
        }
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