<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="common-layout"> 
    <el-container>
      <el-header>
        <span>向日葵保险</span>
        <span class="floatR">
          <span>1506667894</span>
          <span>退出</span>
        </span>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>
        <div class="foot_img"></div>
        <div>ICP</div>
      </el-footer>
    </el-container>
  </div>
</template>

<style lang="less">
body,html {
  margin: 0;
  padding: 0;
}
.floatR{
  float:right;
  span {
    margin-left: 10px;
  }
}
.el-header{
  height: 32px;
  line-height: 32px;
  font-size: 12px;
  padding: 0 120px;
  background: #333;
  color: #fff;
}
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  padding: 0;
  .foot_img {
    width: 100%;
    height: 90px;
    background: url(./assets/home_foot.png) center center no-repeat #ff6f10;
  }
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}
</style>

