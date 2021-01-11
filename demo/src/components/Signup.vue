<template>
    <div>
        <nav>
            <ul>
                
                <li>
                    <router-link to="/login" class="active">登陆</router-link>
                </li>
                <li>
                    <router-link to="/signUp">注册</router-link>
                </li>
            </ul>
        </nav>
        <form class="form signup">
            <h2>注册新用户</h2>
            <input v-model="signupUsername" type="username" id="inputUsername" class="form-control" placeholder="username" required autofocus>
            <input v-model="signupPassword" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
            <input v-model="emailAddress" type="email" id="inputEmail" class="form-control" placeholder="Email address" required>
            <button v-on:click="pushMessage" type="submit">注册</button>
        </form>
    </div>
</template>

<script>
import AV from 'leancloud-storage' ;

    export default {
        name: 'Signup',
        data() {
            return {
                signupUsername: '',
                signupPassword: '',
                emailAddress: ''
            }
        },
        methods: {
            pushMessage: function() {
                // 获取注册时用户输入的账号密码邮箱
                var username = this.signupUsername;
                var password = this.signupPassword;
                var email = this.emailAddress; 
                // 待会传给 leancloud
                var user = new AV.User();
            // 用 leancloud 提供的方法让 leancloud 自己管理账号密码邮箱
            // 我们只要提供这些值就可以了
                user.setUsername(username);
                user.setPassword(password);
                user.setEmail(email);

                //leanCloud提供了注册的方法
                user.signUp().then((loginedUser)=>{
                    this.$router.push('/home')
                }).catch(error => {
                    console.log(error);
                })
            }
        }
    }
</script>