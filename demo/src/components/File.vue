<template>
   <div>
       上传文件
       <input type="file" @click="pushFile" id="file-url">
   </div>
</template>

<script>
import AV from 'leancloud-storage';

export default {
 name: "File",
 data(){
     return {
            fileUrl: ''
     }
 },
 methods:{
        pushFile(){
            //上传本地的图片到云端
            const fileUrls = document.getElementById("file-url");
            if(fileUrls.files.length) {
                const localFile = fileUrls.files[0];
                const file = new AV.File('lala.png', localFile);
                // 在文件的 url 中保留文件名：可以在保存时传入 keepFileName 参数
                file.save({ keepFsileName: true}).then((file) => {
                    console.log(`保存成功${file.id}`);
                })
            }  
            const Todo = AV.Object.extend('Todo1');
            const todo = new Todo();
            todo.set('doSomething', '买车厘子');
            // attachments 是一个 Array 属性
            todo.add('attachments', this.file);
            todo.save();

            //查询
            const query = new AV.Query('Todo1');
            query.equalTo('doSomething', '买车厘子');
            query.exists('attachments');
            //获取附件中的文件
            query.include('attachments');
            query.find().then((todos) => {
                todos.forEach((todo) => {
                    // 获取每一个todo的attachments数组
                    const attachments = todo.get('attachments');
                    attachments.forEach((attachment) => {
                        console.log(`${attachment.get('url')}`);
                    })
                })
            })

        }
 }
}
</script>

<style>
    
</style>