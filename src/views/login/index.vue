<template>
  <div>
    <el-input v-model='username' placeholder='请输入用户名'/>
    <el-input v-model='password' placeholder='请输入密码' type='password'/>
    <el-button type='primary' size='small' @click='handleLogin'>登陆</el-button>
  </div>
</template>

<script>
import request from '../../utils/request'
import {encrypt} from '../../utils/index';
import {ElMessage} from 'element-plus'
export default {
  data(){
    return{
      username:'',
      password:''
    }
  },
  methods:{
    async handleLogin(){
      const params = {
        username:this.username,
        encrypt: encrypt('kubesphere', this.password),
      }
      const result = await request.post('login', params);
      console.log(result)
      if(result.status === 200){
        ElMessage({
          type:'error',
          message:result.message
        })
      }else{
        ElMessage({
          type:'error',
          message:result.message
        })
      }
    }
  }
}
</script>


<style lang='scss'>
.login{
  width: 100%;
}
</style>
