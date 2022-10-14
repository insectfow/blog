<template>
  <div class="bana-home">
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
    <!-- 헤더 모바일 메뉴 모달 -->
    <bana-mobile-menu v-show="isMobileModal" @close="isMobileModal = false" />
  </div>  
</template>

<script>
import banaMobileMenu from '@/components/bana/BanaMobileMenu.vue';
import { ref } from 'vue';
export default {
  components: {
    banaMobileMenu
  },
  setup() {
    const isMobileModal = ref(false);

    return { isMobileModal };
  }
}
</script>

<style lang="scss" scoped>
// 헤더
.bana-header {
  width: 100%;
  height: 95px;
  background: #fff;
  display: flex;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
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
</style>