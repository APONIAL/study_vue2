<template>
  <div class="root">
    <hr/>
    <h2>表单收集</h2>
    <form>
      账号：<input type="text" v-model="userInfo.account"> <br/>
      密码：<input type="password" v-model="userInfo.password"> <br/>
      年龄：<input type="number" v-model.number="userInfo.age"> <br/>
      性别：
      男 <input type="radio" name="sex" v-model="userInfo.sex" value="male">
      女 <input type="radio" name="sex" v-model="userInfo.sex" value="female"> <br/>
      爱好：
      <!--    多组勾选框，数组保存-->
      学习 <input type="checkbox" v-model="userInfo.hobbies" value="study">
      打游戏 <input type="checkbox" v-model="userInfo.hobbies" value="game">
      吃饭 <input type="checkbox" v-model="userInfo.hobbies" value="eat"> <br/>
      所属校区
      <select v-model="userInfo.city">
        <option value="">请选择校区</option>
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
        <option value="shenzhen">深圳</option>
        <option value="wuhan">武汉</option>
      </select>
      <br/>
      其他信息：
      <textarea v-model.lazy="userInfo.other"></textarea> <br/>
      <input type="checkbox" v-model="userInfo.agree">阅读并接受<a href="#">《用户协议》</a>
      <input type="submit" @click="submit">
    </form>
    <hr/>
    <div>
      <h2>过滤器</h2>
      <h3>显示格式化后的时间</h3>
      <p>现在是：{{ fmtTime }}(计算属性实现)</p>
      <p>现在是：{{ getFmtTime() }}(methods实现)</p>
      <p>现在是：{{ time | timeFormater }}(过滤器实现)</p>
      <p>现在是：{{ time | timeFormater('YYYY-MM-DD T HH:mm:ss') }}(传参过滤器实现)</p>
      <p>现在是：{{ time | timeFormater | mySlice }}(多个过滤器实现日期切割)</p>
      <p :x="msg | mySlice">hello world</p>
    </div>
    <div>
      <hr>
      <h2>内置指令</h2>
      <div v-html="str"></div>
      <p v-once>初始化的n值是：{{ n }}</p>
      <p>当前的n值是：{{ n }}</p>
      <h3>放大10倍后的n值是：<span v-big="n"></span></h3>
      <button @click="n++">点击n加1</button>
    </div>
    <div>
      <hr>
      <h2>自定义指令</h2>
      <h3>实现v-fbind</h3>
      <input type="text" v-fbind="n">
      <button @click="n++">点击n加1</button>
    </div>

    <div>
      <hr>
      <h2>vue生命周期</h2>
      <!--  opacity: opacity 重名可以直接只写成 opacity  -->
      <!--  v-bind 中要写成对象形式    -->
      <h2 :style="{opacity}">欢迎学习vue</h2>
      <button @click="opacity = 1">透明度设置为1</button>
      <button @click="stop">点我停止变化</button>
      <button @click="destroyVm">销毁vm</button>
    </div>
  </div>
</template>
<script>
import dayjs from "dayjs";

export default {
  name: "chapter4",
  data() {
    return {
      userInfo: {
        account: '',
        password: '',
        age: '',
        sex: '',
        hobbies: [],
        city: '',
        other: '',
        agree: false,
      },
      time: Date.now(),
      msg: 'hello world',
      str: '<h2>hello world</h2>',
      n: 0,
      opacity: 1,
    }
  },
  directives: {
    // big(el, binding) {
    //   // console.dir(el)
    //   // console.log(binding)
    //   // el.style.fontSize = '30px'
    //   el.style.fontSize = `${binding.value}px`
    //   el.innerHTML = binding.value * 10
    // },
  },
  methods: {
    submit() {
      //打印data用this.$data
      // console.log(JSON.stringify(this.userInfo))
    },
    getFmtTime() {
      return dayjs(this.time).format('YYYY-MM-DD T HH:mm:ss')
    },
    destroyVm() {
      console.log('run destroyVm')
      this.$destroy()
    },
    stop() {
      clearInterval(this.intervalId)
    }
  },
  computed: {
    fmtTime() {
      // ff:  {name:"Fiat", model:500, color:"white"}
      // console.log(Object.keys(this.ff))
      // Object.keys(this.ff).forEach(key=>{
      //   console.log(key,this.ff[key])
      // })
      return dayjs(this.time).format('YYYY-MM-DD T HH:mm:ss')
    }
  },

  beforeCreate() {
    console.log('beforeCreate')
    console.log('this.$data', this.$data)
    console.log(this)
    // debugger
  },
  created() {
    console.log('created')
    console.log('this.$data', this.$data)
    console.log(this)
    // debugger
  },
  beforeMount() {
    console.log('beforeMount')
    // debugger;
  },

  //Vue完成模板的解析并把初始的真实DOM元素放入页面后（挂载完毕）调用mounted
  mounted() {
    this.intervalId = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
    }, 16);
  },
  beforeUpdate() {
    console.log('beforeUpdate')
    // console.log(this.n)
    // debugger;
  },
  updated() {
    console.log('updated')
    // console.log(this.n)
    // debugger;
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
    console.log('beforeDestroy')
  },
  destroyed() {
    console.log('destroyed')
  }
}

</script>

<style scoped>
* {
  margin: 10px;
}
</style>