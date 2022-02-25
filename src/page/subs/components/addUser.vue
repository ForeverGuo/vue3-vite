<template>
  <div class="add_user">
    <el-dialog v-model="_dialogInfo.isShow" width="35%" title="新建客户">
      <el-form :model="form">
        <el-form-item label="银行卡号" :label-width="formLabelWidth">
          <el-input v-model="form.cardNumber" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="客户姓名" :label-width="formLabelWidth">
          <el-input v-model="form.customerName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="客户电话" :label-width="formLabelWidth">
          <el-input v-model="form.customerTele" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="详情描述" :label-width="formLabelWidth">
          <el-input v-model="form.description" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="项目号" :label-width="formLabelWidth">
          <el-input v-model="form.projectNo" autocomplete="off"></el-input>
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
import { addClinucal } from "@/api/index";
import { ElMessage } from "element-plus";
import { onMounted, reactive, ref } from "vue";
const formLabelWidth = "140px";

const props = defineProps({
  dialogInfo: Object,
});

const _dialogInfo = props.dialogInfo;

const emits = defineEmits(["closeDialog"]);

const form = reactive({
  cardNumber: "",
  customerName: "",
  customerTele: "",
  description: "",
  projectNo: "",
});

const handleClose = () => {
  _dialogInfo.isShow = false;
};

const submit = () => {
  addClinucal(form).then((res) => {
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