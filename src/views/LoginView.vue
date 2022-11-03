<template>
  <div class="login-page">
    <div class="container">
      <div class="login-box">
        <h1>DH's Blog</h1>
        <div class="input-wrap">
          <div class="input-box">
            <input type="text" placeholder="아이디" v-model="id">
          </div>
          <div class="input-box">
            <input type="password" placeholder="비밀번호" v-model="pw">
          </div>
          <div class="button-box">
            <button @click="login">로그인</button>
          </div>
          <ul>
            <li><a href="#">비밀번호 찾기</a></li>
            <li><a href="#">아이디 찾기</a></li>
            <li><a href="#">회원가입</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../public/js/firebase';
export default {
  setup() {
    const id = ref("");
    const pw = ref("");

    const router = useRouter();

    const login = async () => {
      await signInWithEmailAndPassword(auth, id.value, pw.value)
          .then((res) => {
            console.log(res);

            router.push('/peed');
          })
          .catch((error) => {
            console.error(error);
          })
      }
  

    return { id, pw, login}
  }
}
</script>

<style lang="scss" scoped>

.container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 30px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-page {
  width: 100vw;
  height: 100vh;
  background: url('https://source.unsplash.com/random?sky') no-repeat center / cover;
  .login-box {
    width: 400px;
    background: rgba(0,0,0,0.26);
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.1);
    padding: 0 20px 50px;
    border: 1px solid #fff;
    box-sizing: border-box;
  }

  .input-box, .button-box {
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    > input {
      width: 100%;
      height: 100%;
      padding: 0 16px;
      box-sizing: border-box;
      font-size: 1.6rem;
      border-radius: 4px;
    }
    > button {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      border: 1px solid #000;
      box-sizing: border-box;
      font-size: 1.8rem;
      cursor: pointer;
      font-weight: bold;
    }
  }
  .button-box {
    margin-bottom: 0;
    margin-top: 20px;
    height: 50px;
  }
  h1 {
    font-size: 4rem;
    color: #fff;
    text-shadow: 3px 3px 5px rgba(0,0,0,0.2);
    margin-bottom: 40px;
    margin-top: 35px;
    text-align: center;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
    > li {
      width: 100%;
      > a {
        display: block;
        text-align: center;
        color: #fff;
        font-size: 1.4rem;
      }
    }
  }
}


</style>