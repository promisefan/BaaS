<template>
  <div>
      查询
      <button @click="baseQuery">基础查询</button>
  </div>
</template>

<script>
import AV from 'leancloud-storage';
export default {
        name: 'QueryText',
        data(){
            return{

            }
        },
        methods:{
            baseQuery(){
                const query = new AV.Query('Todo1');
                query.equalTo('name', '李明'); // 获取name为李的students
                query.find().then((students) => {
                    console.log(students); //students是包含满足条件的Student对象的数组
                })
            }

            //更多的查询方式：如条件查询等，参考https://leancloud.cn/docs/leanstorage_guide-js.html#hash701396643
        }
}
</script>

<style>

</style>