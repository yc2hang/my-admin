<template>
  <el-form @submit.native.prevent="saveSubmit" ref="form" :model="form" label-width="80px">
    <el-form-item label="活动名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          desc: ''
        }
      }
    },
    methods: {
      saveSubmit() {
        console.log(this.form.name);
      }
    }
  }
</script>

<style lang="">
    
</style>