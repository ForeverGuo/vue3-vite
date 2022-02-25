<template>
  <div class="home">
    <div class="top_set">
      <el-button type="success" size="large" style="width: 80px" @click.stop="handleCreate">新建客户</el-button>
      <el-button type="primary" size="large" style="width: 80px" @click.stop="handleExport">导出</el-button>
    </div>
    <el-table id="user_list" :data="data.table" border  height="500" style="width: 100%">
      <el-table-column prop="customerName" label="客户姓名" align="center"> </el-table-column>
      <el-table-column prop="customerTele" label="客户电话" align="center"> </el-table-column>
      <el-table-column prop="cardNumber" label="银行卡号" align="center"> </el-table-column>
      <el-table-column prop="projectNo" label="项目号" align="center"> </el-table-column>
      <el-table-column prop="createTime" label="创建时间" align="center"> </el-table-column>
      <el-table-column prop="description" label="详情描述" align="center"> </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination 
        layout="prev, pager, next"
        v-model:current-page="data.page"
        :page-size="data.size"
        :total="data.total"
        @current-change="handleCurrentChange"

      > </el-pagination>
    </div>
    <AddUser ref="AddUserRef" :dialogInfo="dialogInfo" @closeDialog="closeDialog"/>
  </div>
</template>
<script setup>
import AddUser from './components/addUser.vue'
import { reactive } from "@vue/reactivity";
import { ElMessage } from 'element-plus'
import { adminList, userList, exportClinical } from '@/api'
import store from '@/store/store'
import { onMounted } from "@vue/runtime-core";
import { downloadUrl } from '@/utils/common'
import { ref } from 'vue'

const data = reactive({
  table: [],
  total: 100,
  size: 20,
  page: 1,
});
const dialogInfo = reactive({
  isShow: false
})
const AddUserRef = ref(null);
const handleCurrentChange= (index) => {
  data.page = index;
  initData();
}
const initData = () => {
  const isAdmin = store.state.user.user_type === 2 ? true : false;
  const params = {
    pageNo: data.page,
    pageSize: data.size
  }
  const callback = res => {
      if(res.code === 10000) {
        data.total = res.data.total
        data.table = res.data.list;
        //downloadUrl(JSON.stringify(data.table), '1111')
      } else {
        ElMessage({
          message: `${res.message}`,
          type: 'warning',
        })
      }
  }
  if(isAdmin) {
    adminList(params).then(callback)
  } else {
    userList(params).then(callback)
  }
}
// 导出功能
const handleExport = () => {
  exportClinical().then(res => {
    console.log(res)
    downloadUrl(JSON.stringify(res), '1111')
  })
}
// 创建新用户
const handleCreate = () => {
  console.log(AddUserRef)
  dialogInfo.isShow = true;
}
const closeDialog = () => {
  initData();
}
onMounted(() => {
  initData()
})
</script>
<style lang="scss" scoped>
.home {
  .top_set {
    padding: 20px;
    text-align: right;
  }
  .page {
    display: flex;
    justify-content: end;
  }
}
</style>
