var a = 132;
console.log(a); // 132
console.log(typeof a); // number

var b = '132';
console.log(b); // '132'
console.log(typeof b); // string

var c = true;
console.log(c); // true
console.log(typeof c); // boolean

var d = undefined;
console.log(d); // undefined
console.log(typeof d); // undefined

var e = {
    name:'john',
    age: 20
};
console.log(e); // {name: "john", age: 20}
console.log(typeof e); // object

var f = [1,2,3,4];
console.log(f); //  [1,2,3,4]
console.log(typeof f); // object

var g = null;
console.log(g); //  null
console.log(typeof g); // object

function fn(){
    console.log('我是函数')
}
console.log(fn()); //  我是函数
console.log(typeof fn); // function

//typeof 变量  --->返回object 引用变量（对象，数组，函数） 可自由扩展属性
e.sex = 'man';
console.log(e); //{name: "john", age: 20, sex:"man"}

f.name = 'array'; //?[1, 2, 3, 4, name: "array"]

//变量计算在流浪器console一下
