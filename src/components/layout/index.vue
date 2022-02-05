<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      :default-active='activeKey'
    >
      <el-menu-item v-for='item in navs' :key='item.name' :index="item.name">{{item.title}}</el-menu-item>
    </el-menu>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
export default {

  data(){
    return{
      navs:[],
      activeKey:''
    }
  },
  methods:{
    handleSelect(key,a){
      console.log(key,a)
    }
  },
  mounted(){
    const navs = globals.app.getAccessNavs();
    this.navs = navs[0].items
    this.activeKey = this.navs[0].name
  }
}
</script>
