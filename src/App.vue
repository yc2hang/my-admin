<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-header style="text-align: right; font-size: 12px">
      <span style="margin-left:10px;float:left">魔点科技官网后台管理</span>
      <el-dropdown @command="handleCommand" placement="bottom">
        <i class="el-icon-user-solid" style="margin-right: 15px"><span style="margin-left: 15px">张远成</span></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">查看</el-dropdown-item>
          <el-dropdown-item command="b">新增</el-dropdown-item>
          <el-dropdown-item command="c">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>   
    
    <el-container>  
      <el-aside width="300px" style="background-color: rgb(238, 241, 246)">
        <el-menu 
          router 
          :default-openeds="['1']"
        >
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-news"></i>新闻管理</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="/news/list">新闻列表</el-menu-item>
            <el-menu-item index="/news/add">新闻增加</el-menu-item>
            <el-menu-item index="/news/delete">新闻删除</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-s-custom"></i>案例管理</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        
        
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  },
  methods: {
    handleCommand(command) {
      this.$message('click on item ' + command);
    }
  }
  
}
</script>

<style>
  body,html {
    padding:0;
    margin:0;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }

  span {
    font-size: 20px;
  }

  i {
    cursor:pointer;
    font-size:20px;
  }
</style>
