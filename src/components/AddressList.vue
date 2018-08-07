<template>
  <el-main style="width: 100%;">
    <el-table :data="tableData" style="text-align: left;" stripe border>
      <el-table-column prop="date" label="日期" width="160">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="160">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script>
export default {
  data() {
    const item = {
      date: "2018-08-07",
      name: "eyea",
      address: "北京市海淀区 520 街道"
    };
    return {
      tableData: Array(20).fill(item),
    }
  }
}
</script>

<style scoped>

</style>


