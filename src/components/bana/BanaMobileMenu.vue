<template>
  <transition name="modal" appear>
    <div class="modal">
      <div class="modal-overlay" @click.prevent="$emit('close')"></div>
      <div class="modal-window">
        <a href="#" class="close-btn" @click.prevent="$emit('close')"></a>
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
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  &-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  &-window {
    position: absolute;
    top: 0;
    right: 0;
    width: 70vw;
    height: 100vh;
    background: #fff;
    padding: 20px;
    box-sizing: border-box;
    z-index: 40;
    overflow: hidden;
    > ul {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      > li {
        font-size: 20px;
        margin-bottom: 20px;
        > a {
          display: flex;
          padding: 10px 26px;
          padding-left: 0;
          color: #020303;
          > span {
            position: relative;
          }
          > span::after {
            content: '';
            position: absolute;
            bottom: -10px;
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
            bottom: -10px;
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
        margin-bottom: 0;
        > a {
          > span {
            font-weight: 700;
          }
          > span::after {
            display: none;
          }
        }
      }
      .bana-nav-franchisee {
        position: relative;
        > a {
          > span {
            font-weight: 700;
          }
          > span::after {
            display: none;
          }
        }
      }
    }
  }

  &-content {
    padding: 10px 20px;
  }

  &-footer {
    background: #ccc;
    padding: 10px;
    text-align: right;
  }
  .close-btn {
    position: absolute;
    z-index: 50;
    right: 20px;
    top: 20px;
    width: 32px;
    height: 32px;
    border: 1px solid #000;
    border-radius: 50px;
  }
  .close-btn::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 16px;
    height: 1px;
    background: #000;
  }
  .close-btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 16px;
    height: 1px;
    background: #000;
  }
}

// 오버레이 트랜지션
.modal-enter-active {
  .modal-window {
    animation: slide 0.4s;
  }
}
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.4s;

  // 오버레이에 포함되어 있는 모달 윈도의 트랜지션
  .modal-window {
    transition: opacity 0.4s, transform 0.4s;
  }
}

// 딜레이가 적용된 모달 윈도가 제거된 후에 오버레이가 사라짐
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;

  .modal-window {
    opacity: 0;
    transform: translateX(400px);
  }
}

@keyframes slide {
  0% {
    transform: translateX(400px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>