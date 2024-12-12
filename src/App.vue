<script setup>
</script>

<template>
  <div class="layout">
    <div class="menu">
      <el-menu router default-active="Performance" active-text-color="#ffd04b" background-color="#545c64"
        class="el-menu-vertical-demo menu" text-color="#fff">
        <el-menu-item index="Home">
          <span>Home</span>
        </el-menu-item>
        <el-menu-item index="Performance">
          <span>Performance</span>
        </el-menu-item>
        <el-menu-item index="Error">
          <span>Error</span>
        </el-menu-item>
        <el-menu-item index="Behaviour">
          <span>Behaviour</span>
        </el-menu-item>
        <el-menu-item index="Crash">
          <span>Crash</span>
        </el-menu-item>
      </el-menu>
    </div>
    <router-view class="content"></router-view>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
}

.menu {
  width: 200px;
  height: 100vh;
}

.content {
  flex: 1;
}
</style>
