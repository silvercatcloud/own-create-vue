<template>

  <div class="videoBox">
    <video class="hero-video"
           src="https://acd-assets.alicdn.com/acd_work/tongyi-portal/assets/hero/tongyi_branding.mp4" preload="auto"
           autoplay loop></video>
  </div>
  <h1 class="slogan">
    通义致力于实现<br>类人智慧的通用智能
  </h1>

  <!--  <el-carousel :interval="3000" type="card"-->
  <!--               height="350px"-->
  <!--               width="80%"-->
  <!--  >-->
  <!--    <el-carousel-item v-for="item in imgList" :key="item">-->
  <!--      <img :src="item.src" :alt="item.alt" :style="{ width: '100%', height: '100%' }" />-->
  <!--    </el-carousel-item>-->
  <!--  </el-carousel>-->

  <h2 style="
    display: block;
    margin-top: 130px;
    font-size: 30px;
    color: #8776ff;
"
  >我的文章</h2>
  <div class="Mycard" v-loading="loading">
    <el-card
      :data="articleList"
      v-for="(article, index) in articleList"
      :key="index"
      style="
       float: left;
       width:310px;
       height: 220px;
       margin-top: 30px;
       margin-right: 30px;"
    >
      <template #header>
        <p>{{ article.title }}</p>

      </template>
      <!--    <template #default="{ row }">-->
      <!--      {{ formatTime(row.pub_date) }}-->
      <!--    </template>-->
      <p>发布时间: {{ formatTime(pub_date) }}</p>
      <p>标签: {{ article.cate_name }}</p>
    </el-card>
  </div>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.videoBox {
  display: flex;
  position: relative; /* 为绝对定位的视频提供参考点 */
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30vh;
  border-radius: 20px;
  padding-bottom: 30px;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: -250px;
  left: 0;
  width: 100%;
}

/*
.slogan{
  display: inline-block;
  font-size: 27px;
  text-align: right;
  padding-top: 30px;
  padding-left: 1125px;
}*/
.slogan {
  //display: block;
  display: inline-block;
  float: right;
  clear: both;
  font-size: 27px;
  text-align: right;
}

.Mycard {
  margin-top: 30px;
}
</style>
<script setup>
import { artGetListService } from '@/api/article'
import { ref } from 'vue'
import { formatTime } from '@/utils/format'
// const imgList = ref([
//   { src: 'https://env-00jxgen4mzna.normal.cloudstatic.cn/vue-own-img/lbt1.png', alt: '' },
//   { src: 'https://env-00jxgen4mzna.normal.cloudstatic.cn/vue-own-img/lbt2.png', alt: '' },
//   { src: 'https://env-00jxgen4mzna.normal.cloudstatic.cn/vue-own-img/lbt3.png', alt: '' },
//   { src: 'https://env-00jxgen4mzna.normal.cloudstatic.cn/vue-own-img/fj1.jpg', alt: '' },
//   { src: 'https://env-00jxgen4mzna.normal.cloudstatic.cn/vue-own-img/PixPin_2024-04-01_14-21-48.png', alt: '' },
//   { src: 'https://env-00jxgen4mzna.normal.cloudstatic.cn/vue-own-img/PixPin_2024-04-01_14-22-07.png', alt: '' },
//   { src: 'https://env-00jxgen4mzna.normal.cloudstatic.cn/vue-own-img/PixPin_2024-04-01_14-20-55.png', alt: '' }
// ])
const params = ref({
  pagenum: 1,
  pagesize: 10,
  cate_id: '',
  state: '',
  title: '',
  cate_name: '',
  pub_date: ''
})
const loading = ref(false)
const articleList = ref([])
const total = ref(0)

const getArticleList = async () => {
  loading.value = true
  const res = await artGetListService(params.value)
  articleList.value = res.data.data
  total.value = res.data.total
  loading.value = false
}
getArticleList()
</script>
