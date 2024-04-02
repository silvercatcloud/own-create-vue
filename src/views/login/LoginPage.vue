<template>
  <div class="shell">
    <form>
      <h2>LOGIN</h2>
      <div
        class="form-item">
        <label for="username">username</label>
        <div class="input-wrapper">
          <input
            type="text"
            id="username"
            v-model="formModel.username"
            placeholder="ᕙ(`▿´)ᕗ"
          />
        </div>
      </div>
      <div class="form-item">
        <label for="password">Password</label>
        <div class="input-wrapper">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="૮(˶ᵔ ᵕ ᵔ˶)ა"
            v-model="formModel.password"
          />
        </div>
      </div>
      <el-button
        id="submit"
        type="primary"
        @click="login">
        登录
      </el-button>
    </form>
  </div>
</template>
<style lang="scss" scoped>
/* 设置全局样式 */
* {
  box-sizing: border-box;
  transition: .2s;
}

/* 设置根元素变量 */
:root {
  --bgColor: white;
  /* 设置背景颜色变量为白色 */
  --inputColor: black;
  /* 设置输入框颜色变量为黑色 */
  --outlineColor: rgb(60, 115, 235);
  /* 设置输入框边框颜色变量为RGB(60, 115, 235) */
  --border: black;
}

/* 设置body样式 */
body {
  display: flex;
  /* 设置body元素为flex布局 */
  justify-content: center;
  /* 水平居中对齐 */
  align-items: center;
  /* 垂直居中对齐 */
  height: 100vh;
  /* 设置body元素的高度为视口高度 */
  overflow: hidden;
  /* 隐藏溢出内容 */
  background: var(--bgColor);
  /* 设置背景颜色为变量--bgColor的值 */
}

/* 设置外层容器样式 */
.shell {
  width: 100%;
  /* 设置外层容器的宽度为100% */
  height: 100vh;
  /* 设置外层容器的高度为视口高度 */
  display: flex;
  /* 设置外层容器为flex布局 */
  align-items: center;
  /* 垂直居中对齐 */
  justify-content: center;
  /* 水平居中对齐 */
  //background-image: url("@/assets/fj1.jpg");
  background: url("@/assets/fj1.jpg");
  /* 设置背景图片为./img/1.png */
  background-size: cover;
  /* 背景图片等比例缩放铺满容器 */
}

/* 设置表单样式 */
form {
  transform: translate3d(0, 0, 0);
  /* 3D变换，无位移 */
  padding: 50px;
  /* 设置内边距为10px */
  border: 20px solid var(--border);
  border-radius: 10px;
  box-shadow: 10px 10px 10px 10px #00000065;
}

form > * + * {
  margin-top: 15px;
  /* 设置相邻元素之间的上边距为15px */
}

.form-item > * + * {
  margin-top: 0.5rem;
  /* 设置相邻元素之间的上边距为0.5rem */
}

/* 设置label, input, button样式 */
h2,
label,
input,
button {
  font-size: 1.7rem;
  /* 设置字体大小为2rem */
  color: var(--inputColor);
}

h2 {
  font-size: 3rem;
  margin: 0;
}

#submit {
  width: 100%;
  height: 50px;
  border: 1px solid #9493ff;
  cursor: pointer;
  /* 设置鼠标样式为手型 */
  margin: 30px 0 0 2px;
  /* 设置外边距为20px 0 0 2px */
  padding: 0.75rem 1.25rem;
  /* 设置内边距为0.75rem 1.25rem */
  background-color: var(--inputColor);
  border-radius: 50px;
}

a {
  text-decoration: none;
}
</style>
<script setup>
import { useUserStore } from '@/stores/index.js'
import { userLoginService } from '@/api/user.js'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const userStore = useUserStore()
const router = useRouter()

const formModel = ref({
  username: '',
  password: ''
})
const login = async () => {
  const res = await userLoginService(formModel.value)
  userStore.setToken(res.data.token)
  console.log('登录成功')
  await router.push('/')
}
</script>
