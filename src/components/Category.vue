<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!--定义插槽，等着组件使用者来填充内容-->
    <slot name="center">我是一些默认值，当没有传递内容时显示</slot>
    <slot name="footer">我是一些默认值，当没有传递内容时显示</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ['title']
}
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
  margin-top: 20px ;
}

h3 {
  background-color: orange;
}

.category ul li {
  padding: 0;
  margin: 10px 0;
}
img{
  border: 1px solid red;
  padding: 0;
  margin: 0;
  /*不设置图片就会过大超出范围*/
  width: 100%;
}
video{
  width: 100%;
  padding: 0;
  margin: 0;
}
a{
  margin: 20px 5px;
}
</style>