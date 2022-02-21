<template>
  <div class="home">
    <div class="top_set">
      <el-button type="primary" size="large" style="width: 80px">导出</el-button>
    </div>
    <el-table :data="data.table" border  height="500" style="width: 100%">
      <el-table-column prop="date" label="客户姓名" align="center"> </el-table-column>
      <el-table-column prop="name" label="客户电话" align="center"> </el-table-column>
      <el-table-column prop="address" label="银行卡号" align="center"> </el-table-column>
      <el-table-column prop="address" label="项目号" align="center"> </el-table-column>
      <el-table-column prop="address" label="创建时间" align="center"> </el-table-column>
      <el-table-column prop="address" label="详情描述" align="center"> </el-table-column>
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
  </div>
</template>
<script setup>
import { reactive } from "@vue/reactivity";

const data = reactive({
  table: [
    {
      date: "2016-05-03",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-02",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-04",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-01",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
  ],
  total: 100,
  size: 20,
  page: 1
});
const handleCurrentChange= (index) => {
  console.log(index)
}
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
