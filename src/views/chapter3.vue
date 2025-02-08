<template>
  <!--    绑定class样式--字符串写法，适用于：样式的类名不确定，需要动态绑定-->
  <div style="text-align: left">
    <div class="basic" :class="mood" @click="changeMood"> {{ mood }}</div>
    <!--      绑定class样式--数组写法，适用于：要绑定的样式个数不确定，名字也不确定-->
    <div class="basic" :class="classArr">{{ name }}</div>
    <!--      绑定class样式--对象写法，适用于：要绑定的样式个数确定，名字确定，但要动态决定用不用-->
    <div class="basic" :class="classObj">{{ name }}</div>
    <!--      绑定style样式--数组写法---->
    <div class="basic" :style="[styleObj1,styleObj2]">test</div>

    <h2 v-show="true">欢迎{{ name }}</h2>
    <template v-if="true">
      <h2>你好</h2>
      <h2>北京</h2>
      <h2>欢迎</h2>
    </template>

    <!--    列表渲染-->
    <hr>
    <h2 style="text-align: left;margin-left: 50px">人员列表</h2>
    <ul>
      <!-- :key="item.id" -> 主要是为了 diff 算法，尽量减少重新渲染的次数-->
      <!-- <li v-for="p in persons" :key="p.id">{{ p.name }}-{{ p.age }}</li>-->
      <li v-for="(p,index) of persons" :key="'p1'+p.id">{{ p }} --- {{ index }}</li>
      <!--      遍历对象-->
      <li v-for="(value,key) of cars" :key="key">{{ key }} ： {{ value }}</li>
      <!--      遍历字符串-->
      <li v-for="(value,index) of 'abc'">{{ value }} --- {{ index }}</li>
      <!--      遍历指定次数-->
      <h2>遍历指定次数</h2>
      <li v-for="(value,index) of 5">{{ value }} --- {{ index }}</li>

      <h2>key的作用</h2>
      <!--      直接使用index作为索引-->
      <button @click.once='add'>添加一个老刘</button>
      <li v-for="(p,index) of persons" :key="index">
        {{ p.name }} - {{ p.age }}
        <input type="text">
      </li>

      <!--列表的过滤与排序-->
      <h2>列表的过滤</h2>
      <input type="text" v-model="keyWord" placeholder="请输入名字">
      <button @click="updateMei">更新马冬梅</button>
      <button @click="sortType = 2">年龄升序</button>
      <button @click="sortType = 1">年龄降序</button>
      <button @click="sortType = 0">原顺序</button>
      <li v-for="(p,index) of filePersons" :key="p.id">
        {{ p.name }} - {{ p.age }} - {{ p.sex }}
      </li>
    </ul>
    <hr>
    <h2>vue.set()方法</h2>
    <button @click="addSex">添加一个性别</button>
    <h2>姓名：{{student.name}} </h2>
    <h2>年龄：真实{{student.age.rAge}},对外{{student.age.sAge}} </h2>
    <h2 v-if="student.sex">性别：{{student.sex}} </h2>
    <h2>朋友们</h2>
    <ul>
      <li v-for = '(f,index) in student.friends' :key="f.id">
       {{f.name}}--{{f.age}}
      </li>

      <h2>vue监测数据改变——数组</h2>
      <button @click= "removeRun">过滤掉跑步</button>
      <li v-for = '(f,index) in student.hobby '>
         {{f}}
      </li>
    </ul>




  </div>
</template>

<script>

export default {
  name: "chapter3",
  data() {
    return {
      keyWord:'',
      mood: 'normal',
      //
      sortType:0,
      name: 'tao',
      classArr: ['tao1', 'tao2', 'tao3'],
      classObj: {
        //false就是不应用
        tao1: false,
        tao2: false,
        tao3: true
      },
      styleObj1: {
        fontSize: '40px',
        color: 'red',
        backgroundColor: '#000'
      },
      styleObj2: {
        backgroundColor: '#000'
      },
      persons: [
        {
          id: 1,
          name: 'zhangsan',
          age: 18
        },
        {
          id: 2,
          name: 'lisi',
          age: 20
        },
        {
          id: 3,
          name: 'wangwu',
          age: 25
        }
      ],
      cars: {
        name: 'benz',
        price: 1000000,
        color: 'black'
      },
      personArray:[
        {id:'001',name:'马冬梅',age:18,sex:'女'},
        {id:'002',name:'周冬雨',age:66,sex:'女'},
        {id:'003',name:'周杰伦',age:33,sex:'男'},
        {id:'004',name:'温兆伦',age:21,sex:'男'},
      ],
      // filePersons:[]
       student:{
        name:'tom',
        age:{
          rAge:40,
          sAge:29
        },
        friends:[
          {id:'001',name:'小红',age:18},
          {id:'002',name:'小花',age:19},
          {id:'003',name:'小绿',age:20},
        ],
         hobby:['跑步','乒乓球','编程']
      }
    }
  },
  methods: {
    changeMood() {
      const arr = ['sad', 'happy', 'normal']
      this.mood = arr[Math.floor(Math.random() * 3)]
    },
    add() {
      const p = {id: 4, name: '老刘', age: 60}
      this.persons.unshift(p)
    },
    updateMei(){
      // this.personArray[0].name = '马老师' //奏效
      // this.personArray[0].age = '50' //奏效
      // this.personArray[0].sex = '男' //奏效
      // this.personArray[0] = {id:'001',name:'马老师',age:30,sex:'男'}//不奏效
      this.personArray.splice(0,1,{id:'001',name:'马老师',age:30,sex:'男'})

    },
    addSex(){
      this.$set(this.student,'sex','男')
    },
    removeRun(){
      this.student.hobby = this.student.hobby.filter((h)=>{
        return h !== '跑步'
      })
    }
  },
  // watch:{
  //   keyWord:{
  //     //提前执行一次，默认为空串，则全部匹配
  //     immediate:true,
  //     handler(val){
  //       this.filePersons = this.personArray.filter((p)=>{
  //         return p.name.indexOf(val) !== -1;
  //       })
  //     }
  //   }
  // },
  computed:{
    //计算属性页面初始化时候就调用一次
    filePersons(){
      const arr =  this.personArray.filter((p)=>{
        return p.name.indexOf(this.keyWord) !== -1;
      })
      //判断是否要排序
      if(this.sortType ){
        if(this.sortType === 1){
          //降序
          return arr.sort((a,b)=>{
            return b.age - a.age
          })
        }else{
          //升序
          return arr.sort((a,b)=>{
            return a.age - b.age
          })
        }
      }
      return arr
    }
  }
}

</script>

<style scoped>
.basic {
  width: 400px;
  height: 100px;
  border: 1px solid #000;
}

.happy {
  border: 4px solid red;
  background: rgba(255, 255, 0, 0.644) linear-gradient(30deg, yellow, pink, orange, yellow);
}

.sad {
  border: 4px dashed rgb(2, 197, 2);
  background-color: gray;
}

.normal {
  background-color: skyblue;
}

.tao1 {
  background-color: yellowgreen;
}

.tao2 {
  font-size: 30px;
  text-shadow: 2px 2px 10px red;
}

.tao3 {
  border-radius: 20px;
}
</style>