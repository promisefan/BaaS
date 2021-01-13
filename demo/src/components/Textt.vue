<template>
    <div class="container">
        <button @click="addData">添加对象</button>
        <button @click="getData">查询对象</button>
        <button @click="updateData">更新对象</button>
        <button @click="deleteObject">删除整个对象</button>
        <button @click="deleteKey">删除某一个属性</button>
    </div>
</template>

<script>
    import AV from 'leancloud-storage';
    let todolists = [];
    export default {
        name: 'Textt',
         data() {
            return {
                whatTodo: '',
                todos: todolists
            }
        },
        methods: {
            //添加数据
            addData(){
                //添加class
               let Todo1 = AV.Object.extend('Todo1');      
                //构建对象
                let todo = new Todo1();// 为该类创建一个新的实例

                //为属性赋值： AA:每次只能添加最新的一条数据，保证数据不丢失，每次只添加一条数据
                
                todo.set('name', '张浩');
                todo.set('age', 20)
                todo.set('name', '李明');
                todo.set('age', 21);            
                todo.set('name', '李洋');
                todo.set('age', 20);
                todo.set('name', '张佳');
                todo.set('age', 19);



                //将对象保存到云端
                todo.save().then((todo) => {
                    console.log(`保存成功 ObjectID:${todo.id}`);
                }).catch((error) => {
                    console.log(error);
                })
            },

            //查询数据
            getData(){
                //将云端的数据通过objectId取回来
                const query = new AV.Query('Todo1'); //获取到Todo1这个对象，将其赋值给query
                // query.get('5ffd3d4f989c9a69c0f2f10f').then((todo) => {
                //     const title1 = todo.get('title');
                //     const priority = todo.get('priority');
                //      // 获取内置属性
                //     const objectId  = todo.id;
                //     const updatedAt = todo.updatedAt;
                //     const createdAt = todo.createdAt;
                //   console.log(title1);
                //  console.log(priority);
                // })

                //一次性获取所有的值 : X.
                query.get('5ffd3d4f989c9a69c0f2f10f').then((todo) => {
                    console.log(todo.toJSON())
                })
            },
            
            //更新对象数据
            updateData(){
                const todo = AV.Object.createWithoutData('Todo1', '5ffd3d4f989c9a69c0f2f10f');
                todo.set('title', '今天是1月12号，星期二');
                todo.save()

            },
           //删除对象较为敏感，需要结合权限来进行，阻止未经授权的操作
            //删除整个对象
            deleteObject(){
                const todo = AV.Object.createWithoutData('Todo1', '5ffd3d4e1862270b0e1bdccb');
                todo.destroy()
            },

            //删除某一个属性 
            deleteKey(){
                //这里换了一个id值，因为已经执行了deleteObject()方法
                const todo = AV.Object.createWithoutData('Todo1', '5ffd3d4f989c9a69c0f2f10e');              
                todo.unset('title'); // 只删除title属性
                todo.save(); //保存对象

            }
        }
    }
</script>