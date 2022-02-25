<template>
  <div class="add_user">
    <el-dialog v-model="_dialogInfo.isShow" width="35%" title="创建用户">
      <el-form :model="form">
        <el-form-item label="用户描述" :label-width="formLabelWidth">
          <el-input v-model="form.userDesc" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="form.userEmail" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="form.userTele" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户类型" :label-width="formLabelWidth">
          <el-radio v-model="form.userType" label="1" size="large">客户</el-radio>
          <el-radio v-model="form.userType" label="2" size="large">管理员</el-radio>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click.stop="handleClose">取消</el-button>
          <el-button type="primary" @click="submit">提交</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
import { creataManageUser } from "@/api/index";
import { ElMessage } from "element-plus";
import { onMounted, reactive, ref } from "vue";
const formLabelWidth = "140px";

const props = defineProps({
  dialogInfo: Object,
});

const _dialogInfo = props.dialogInfo;

const emits = defineEmits(["closeDialog"]);

const form = reactive({
  userDesc: "",
  userEmail: "",
  userName: "",
  userTele: "",
  userType: "",
});

const handleClose = () => {
  _dialogInfo.isShow = false;
};

const submit = () => {
  creataManageUser(form).then((res) => {
    console.log(res);
    const { code, message } = res;
    if (code === 10000) {
      ElMessage({
        message: `提交成功`,
        type: "success",
      });
      _dialogInfo.isShow = false;
      emits("closeDialog");
    } else {
      ElMessage({
        message: `${res.message}`,
        type: "warning",
      });
    }
  });
};

onMounted(() => {
  console.log(props);
});
</script>
<style lang="scss">
.add_user {
  .el-input__inner {
    width: 60%;
  }
}
</style>