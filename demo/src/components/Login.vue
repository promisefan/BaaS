<template>
    <div>
    <nav>
      <ul>
        <li>
          
          <router-link to="/login">登陆</router-link>
        </li>
        <li>
          <router-link to="/signUp">注册</router-link>
        </li>
      </ul>  
    </nav>
    <form class="form login">
        <h2>登陆</h2>
        <input v-model="username" type="username" class="form-control" placeholder="username" required autofocus>
        <input v-model="password" class="form-control" type="password" placeholder="Password" required> 
        <button v-on:click="login" type="submit">提交</button>
        <div class="reset">
        <button @click="reSet">重置密码</button>

        </div>
    </form>
</div>
</template>
<script>
import AV from 'leancloud-storage' ;

export default {
     name: 'Login',
        data() {
            return {
                // 在这里绑定用户名和密码的 value 值
                username: '',
                password: ''
            }
        },
        methods: {
           // 这是点击登陆按钮的事件处理方法
                // 这里要跳转路由
                // 然后用到 leancloud 验证登陆
            login () {
                let username = this.username;        
                let password = this.password;
                // AV.User.logIn('Tom', 'cat!@#123').then((user) => {
                //     // 登录成功
                //     }, (error) => {
                //     // 登录失败（可能是密码错误）
                //     });
                AV.User.logIn(username,password).then((loginedUser) => {
                    this.$router.push({ path: "/home"})
                    alert("登录成功")
                }).catch(error => {
                    alert("用户名或者密码不正确！")
                })
            },
            reSet(){
                this.$router.push({path: '/reset'})
            }
        }
}
</script>

<style scoped>
.reset{
    margin-top: 20px;
}
</style>