<template>
     <div>
         <!-- 通过邮箱重置密码 -->
         重置密码
        <input v-model="resetEmail" required type="email" placeholder="请输入邮箱">
        <button @click="sureBtn">确定</button>
     </div>
</template>

<script>
import AV from 'leancloud-storage' ;

export default {
    name: 'Reset',
    data(){
        return {
                resetEmail: ''
        }
    },
    methods:{
        sureBtn(){
            let resetemail = this.resetEmail
            AV.User.requestPasswordReset(resetemail)
        }
    }
}
</script>

<style>

</style>