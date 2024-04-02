<template>
  <span class="Mytitle">文章管理</span>
  <span class="total">文章总数:{{ total }}</span>
  <el-button type="primary"
             style="
             position: absolute;
             right: 90px;
             top: 105px;
"
             @click="onAddArticle"
  >发布文章
  </el-button>
  <el-table  v-loading="loading"
    :data="articleList" stripe
    style="width: 100%;margin-top: 60px">
    <el-table-column prop="title" label="文章名称" width="180" />
    <el-table-column prop="cate_name" label="文章分类" width="180" />
    <el-table-column label="发布时间" prop="pub_date">
      <template #default="{ row }">
        {{ formatTime(row.pub_date) }}
      </template>
    </el-table-column>
    <el-table-column label="操作" width="100">
      <template #default="{ row }">
        <el-button
          color="#626aef"
          :icon="Edit"
          circle
          plain
          type="primary"
          @click="onEditArticle(row)"
        ></el-button>
        <el-button
          color="#626aef"
          :icon="Delete"
          circle
          plain
          type="danger"
          @click="onDeleteArticle(row)"
        ></el-button>
      </template>
    </el-table-column>
    <template #empty>
      <el-empty description="没有数据" />
    </template>
  </el-table>

  <!--将 article-edit 组件的实例或 DOM 节点赋值给 Vue 实例的 $refs.articleEditRef 属性-->
  <article-edit ref="articleEditRef" @success="onSuccess"></article-edit>
  <el-pagination
    v-model:current-page="params.pagenum"
    v-model:page-size="params.pagesize"
    :page-sizes="[2, 3, 4, 5, 10]"
    background
    layout="sizes, prev, pager, next"
    :total="total"
    @current-change="onCurrentChange"
    @size-change="onSizeChange"
    style="margin-top: 20px; justify-content: flex-end"
  />


</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Delete, Edit } from '@element-plus/icons-vue'
import { artGetListService } from '@/api/article'
import { formatTime } from '@/utils/format'
import ArticleEdit from '@/views/article/components/ArticleEdit.vue'
import { artDelService } from '@/api/article'
const onSizeChange = (size) => {
  params.value.pagenum = 1
  params.value.pagesize = size
  getArticleList()
}
const onCurrentChange = (page) => {
  params.value.pagenum = page
  getArticleList()
}
const articleEditRef = ref()
const onAddArticle = () => {
  articleEditRef.value.open({})
}
const onEditArticle = (row) => {
  articleEditRef.value.open(row)
}
const loading = ref(false)

const params = ref({
  pagenum: 1,
  pagesize: 10,
  cate_id: '',
  state: ''
})

const articleList = ref([])
const total = ref(0)
// 添加修改成功

const getArticleList = async () => {
  loading.value = true
  const res = await artGetListService(params.value)
  articleList.value = res.data.data
  total.value = res.data.total
  loading.value = false
}
getArticleList()
const onSuccess = (type) => {
  if (type === 'add') {
    // 如果是添加，需要跳转渲染最后一页，编辑直接渲染当前页
    const lastPage = Math.ceil((total.value + 1) / params.value.pagesize)
    params.value.pagenum = lastPage
  }
  getArticleList()
}
const onDeleteArticle = async (row) => {
  await ElMessageBox.confirm('你确认删除该文章信息吗？',
    '温馨提示', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning'
    })
  await artDelService(row.id)
  ElMessage({ type: 'success', message: '删除成功' })
  getArticleList()
}
</script>
<style scoped>
.total {
  display: inline-block;
  margin-left: 20px;
  margin-top: 15px;
  color: #4d4769;
  //border-bottom: 1.5px solid #aaaaf5;
  //border: 1px solid #aaaaf5;
  //background-color: #EFF0FD;

}

.Mytitle {
  font-size: 30px;
  font-weight: bold;
  color: #001a38;
  float: left;
}
</style>
