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
        <button v-on:click="login" type="submit">登陆</button>
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
                AV.User.logIn(username,password).then((loginedUser) => {
                    this.$router.push('/home')
                }).catch(error => {
                    console.log(error);
                })
            }
        }
}
</script>