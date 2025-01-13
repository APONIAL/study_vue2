<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{_data.school.name}}</h1>
<!--    <a :href="href.toUpperCase()">超链接</a>-->
    <div>
      单向数据绑定：<input type="text" :value="school.name">
      <br>
      双向数据绑定：<input type="text" v-model="message">
      <br>
<!--      <button v-on:click ="showInfo">点我提示信息</button>-->
      <button @click="showInfo">点我提示信息1</button>
      <button @click="showInfo2(66,$event)">点我提示信息2</button>
      <a :href="href" @click.prevent="showInfo">超链接</a>
<!--      阻止事件冒泡-->
      <div @click='showInfo'>
        <button @click.stop="showInfo3">点我提示信息div</button>
      </div>

      <div class="box1" @click.capture="showMsg(6)">
        div1
        <div class="box2" @click="showMsg(5)">
          div2
        </div>
      </div>

<!--      self 只有event.target是当前操作的元素时才触发-->
      <div @click.self='funTestSelf'>
        <button @click.stop="funTestSelf">点我提示信息slef</button>
      </div>

<!--      passive -->
<!--      scroll是给滚动条的滚动事件，滚动条滚动时触发-->
      <ul @wheel.passive="funTestPassive" class="list">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>

<!--      键盘事件-->
       <input type="text" placeholder = "按下回车提示输入信息" @keyup.exact.enter="funTestKeyUp">
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      message: 'dongtaotao',
      href:'https://www.baidu.com',
      school:{
        name:'sggss'
      }
    };
  },
  methods:{
    showInfo(event){
      alert('你好！showInfo1')
      console.log(event.target.innerHTML)
    },
    showInfo2(number,event){
      console.log(number)
      console.log(event.target.innerHTML)
      alert('你好！！')
    },
    showInfo3(){
      alert('你好！！！！showInfo3')
    },
    showMsg(msg){
      alert(msg)
    },
    funTestSelf(e){
      console.log(e.target)
    },
    funTestPassive(){
      for (let i = 0; i < 100000; i++) {
        console.log("#")
      }
      console.log('funTestPassive run over')
    },
    funTestKeyUp(e){
        console.log(e.keyCode)
        console.log(e.target.value)
    }
  }
};
</script>