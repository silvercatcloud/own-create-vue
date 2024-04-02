<script setup>

import { Headset, Menu, StarFilled, UserFilled, Setting, ArrowLeft } from '@element-plus/icons-vue'
import { reactive, toRefs } from 'vue'
import { useUserStore } from '@/stores'
import { onMounted } from 'vue'
const userStore = useUserStore()
onMounted(() => {
  userStore.getUser()
})
// 通过reactive函数创建一个响应式对象state，其中包含一个url属性，该属性的值是一个图片链接。
const state = reactive({
  url:
    'https://env-00jxgen4mzna.normal.cloudstatic.cn/vue-own-img/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240206192328.jpg'
})
// 通过toRefs函数将state对象中的属性转换为Ref对象，并解构赋值给模板中的变量url
const { url } = toRefs(state)
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
        >
          <el-menu-item index="0">
            <img
              style="width: 100px"
              src="../../assets/llogo2.png"
              alt="Element logo"
            />
          </el-menu-item>
          <div class="flex-grow" />
          <el-sub-menu index="1">
            <template #title>
              <span class="MyName">{{ userStore.user.username }}</span>
              <el-avatar :src="url" />
            </template>
            <el-menu-item index="1">
              <el-icon>
                <UserFilled />
              </el-icon>
              个人中心
            </el-menu-item>
            <el-sub-menu index="2">
              <template #title>
                <el-icon>
                  <Menu />
                </el-icon>
                主题
              </template>
              <el-menu-item index="2-1">白天</el-menu-item>
              <el-menu-item index="2-2">黑夜</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="3">
              <el-icon>
                <Setting />
              </el-icon>
              设置
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <ArrowLeft />
              </el-icon>
              退出登录
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="250px">
          <el-col :span="18">
            <el-menu
              class="el-menu-vertical-demo"
              :default-active="$route.path"
              router
            >
              <el-menu-item index="/article/home">
                <el-icon>
                  <Headset />
                </el-icon>
                <span>首页</span>
              </el-menu-item>
              <el-menu-item index="/article/manage">
                <el-icon>
                  <Menu />
                </el-icon>
                <span>文章管理</span>
              </el-menu-item>
              <el-sub-menu index="3">
                <template #title>
                  <el-icon>
                    <StarFilled />
                  </el-icon>
                  <span>技术总览</span>
                </template>
                <el-menu-item index="/article/chart">chart</el-menu-item>
                <el-menu-item index="/article/userDefined">userDefined</el-menu-item>
              </el-sub-menu>
            </el-menu>
          </el-col>
        </el-aside>
        <el-main style="padding-right: 70px">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
.MyName{
  margin-right: 10px;
}
</style>
