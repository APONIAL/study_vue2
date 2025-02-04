<template>
  <div>
    <!--    组件引入-->
    <div>
      <h3>创建组件——引入</h3>
      <school ref="sch"/>
      <hr/>
      <Student student-name="elysia"/>
      <p>测试组件用vuex传值</p>
      <p>{{ $store.state.name }}</p>
    </div>
    <hr/>
    <!--       ref使用-->
    <div>
      <h3>ref使用</h3>
      <p v-text="str" ref="msg"></p>
      <button @click="showDOM">输出上方DOM</button>
      <Student student-name="张三" :student-age="18" :is-true="true"/>
    </div>
    <hr/>
    <!--mixin-->
    <div>
      <h3>mixin使用</h3>
      <School></School>
      <Student student-name="tom" :student-age="18" :is-true="false"/>
    </div>
    <hr/>
<!--    plugins-->
    <div>
      <h3>plugins使用</h3>
      <input type="text" v-fbind:value="str">
      <button @click="testHello">测试hello方法</button>
    </div>

  </div>
</template>

<script>
import School from '@/components/School'

export default {
  name: "chapter5",
  components: {
    School
  },
  data() {
    return {
      str: 'hello ref'
    }
  },
  methods: {
    showDOM() {
      console.log('ref==>', this.$refs.sch)
    },
    testHello() {
      this.hello()
      console.log('this==>', this)
    }
  },

  mounted() {
    function Demo() {
      this.a = 1
      this.b = 2
    }

    const demo = new Demo()
    //显示原型属性
    console.log('Demo.prototype', Demo.prototype)
    //隐式原型属性  这两个都指向同一个原型对象
    console.log('demo.__proto__', demo.__proto__)
    console.log('验证是否是同一个原型对象', Demo.prototype === demo.__proto__)

    //通过显示原型对象添加属性
    Demo.prototype.x = 3
    console.log(demo.x)
    console.log(demo)

  }

}

</script>

<style scoped>

</style>