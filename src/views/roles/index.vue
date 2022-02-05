<template>
  <div class='roles'>
    角色页面
    <el-button type='primary' size='large' @click='handleLogOut'>退出</el-button>
  </div>
</template>

<script>
import request from '../../utils/request'
export default {
  data(){
    return{

    }
  },
  methods:{
    async handleLogOut(){
      try{
        const res = await request.post('logout')
        console.log(res);
      }catch (e) {
        console.log(e)
      }

    }
  },
  mounted() {

  }
}
</script>

<style lang='scss'>
.roles{
  width: 300px;
  height: 300px;
  background: #959da5;
}
</style>
