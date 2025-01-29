import dayjs from "dayjs";

const filters = {
    //过滤器第一个参数一定过滤器管道符前的参数
    //第二个参数是可选参数
    timeFormater(value,str = 'YYYY-MM-DD T HH:mm:ss'){
        return dayjs(value).format(str)
    },
    mySlice(value){
        return value.slice(0,4)
    }
}

export default filters