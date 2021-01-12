<template>
    <div class="container">
        <nav>
            <router-link to="/logout">退出登陆</router-link>
        </nav>
        <form>
            <input v-on: keyup.enter="input_todo" v-model="whatTodo" type="text">
        </form>
         
         <div>
             <ul class="todo-list">
                 <li v-for="(item,index) in todos" :key="index">
                        <input v-bind:value="item" v-bind:id="index">
                        <label v-bind:for="index" >modify</label>
                        <span v-on:click="deleteTodo(index)">delete</span>
                 </li>
             </ul>
         </div>
    </div>
</template>

<script>
    import AV from 'leancloud-storage';
    let Todo = AV.Object.extend('Todo'); //为AV.Object构建子类
    let todolists = [];
    export default {
        name: 'Home',
         data() {
            return {
                whatTodo: '',
                todos: todolists
            }
        },
        methods: {
            input_todo(){
                 var whatTodo = this.whatTodo;
                // 如果用户什么都没输入就回车了，就提示他：
                var userID;
                this.todos.push(whatTodo);

                //添加到leanCloud
                let todo = new Todo();// 为该类创建一个新的实例
                // todo.set('todoList', whatTodo);
                // todo.set('owner',AV.User.current());
                // todo.save().then((todo) => {
                //     userID = todo.id;
                //     todo.set('myId', userID);
                //     todo.save();
                // }).catch((error) => {
                //     console.log(error);
                // })

                // this.whatTodo = "";
                // if (whatTodo == '') {
                //     alert('请输入待办事项');
                //     return 0;
                // }
                // 在 div 添加 todo 
                // 将输入的todo添加到数组就可以了
                // todolists.push(whatTodo);
                // 清空输入框，方便下次输入
                // this.whatTodo = '';

                //为属性赋值
                todo.set('title', '马拉松');
                todo.set('priority',2);
                todo.set('name', '奶茶');


                //将对象保存到云端
                todo.save().then((todo) => {
                    console.log(`保存成功 Object:${todo.id}`);
                }).catch((error) => {
                    console.log(error);
                })
            },
            logout(){
                //退出账号
                AV.User.logOut();
                this.$router.push('/login')
            },
            deleteTodo(index){
                // this.todos.splice(index,1)
                let todoContent = this.todos[index];
                this.todos.splice(index,1);

                let query = new AV.Query('Todo');
                query.equalTo('todoList', todoContent);
                query.find().then((results) => {
                    let currentID = resultsp[0]['id'];
                    let deleteTodo = AV.Object.createWithoutData('Todo',currentID);
                    deleteTodo.destroy().then((success) => {
                        console.log('删除成功');
                    }).catch((error) => {
                        console.log(error);
                    })
                })
            }
        }
    }
</script>