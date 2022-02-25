<template>
  <div class="home">
    <div v-if="data.table.length">
      <div class="top_set">
        <el-button type="primary" size="large" style="width: 80px"
        @click.stop="handleCreate"
          >创建用户</el-button
        >
      </div>
      <el-table :data="data.table" border height="500" style="width: 100%">
        <el-table-column prop="userName" label="用户名" align="center">
        </el-table-column>
        <el-table-column prop="passWord" label="密码" align="center">
        </el-table-column>
        <el-table-column prop="userTele" label="电话" align="center">
        </el-table-column>
        <el-table-column prop="userStatus" label="用户状态" align="center">
          <template #default="scope">
            <div class="flex-center">
              <span>{{ scope.row.userStatus == 1 ? '正常' : '冻结' }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="userDesc" label="用户描述" align="center">
        </el-table-column>
        <el-table-column prop="userEmail" label="邮箱" align="center">
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" align="center">
        </el-table-column>
        <el-table-column align="center" label="操作">
        <template #default="scope">
          <el-button size="small" type="primary" @click="handleEdit(scope.$index, scope.row)"
            >修改</el-button
          >
        </template>
      </el-table-column>
      </el-table>
      <div class="page">
        <el-pagination
          layout="prev, pager, next"
          v-model:current-page="data.page"
          :page-size="data.size"
          :total="data.total"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>
    <div v-else class="empty">
      <el-empty description="暂无访问权限"></el-empty>
    </div>
    <AddManager ref="AddManagerRef" :dialogInfo="dialogInfo" @closeDialog="closeDialog"/>
  </div>
</template>
<script setup>
import AddManager from './components/addManager.vue'
import { reactive } from "@vue/reactivity";
import { ElMessage } from "element-plus";
import { adminList, userList, userManager } from "@/api";
import store from "@/store/store";
import { onMounted } from "@vue/runtime-core";
const data = reactive({
  table: [{}],
  total: 100,
  size: 20,
  page: 1,
});
const dialogInfo = reactive({
  isShow: false
})
const handleCurrentChange = (index) => {
  data.page = index;
  initData();
};
const initData = () => {
  const isAdmin = store.state.user.user_type === 2 ? true : false;
  const params = {
    pageNo: data.page,
    pageSize: data.size,
  };
  const callback = (res) => {
    if (res.code === 10000) {
      data.total = res.data.total;
      data.table = res.data.list;
    } else {
      ElMessage({
        message: `${res.message}`,
        type: "warning",
      });
    }
  };
  if (isAdmin) {
    userManager(params).then(callback);
  } else {
    data.table = [];
  }
};
// 创建用户
const handleCreate = () => {
  dialogInfo.isShow = true;
}
const closeDialog = () => {
  initData();
}
onMounted(() => {
  initData();
});
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
  .empty {
    margin-top: 180px;
  }
}
</style>
