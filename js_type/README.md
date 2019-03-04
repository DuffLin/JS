# JS_Type
没什么好说的，归类一下js数据类型，变量类型以及变量计算

## 数据类型
- 基本类型：__Number__、__String__、__Boolean__、__Null__、__Undefined__
- 引用类型：__Object__ 、__Array__ 、__Function__ 、__Data__

> 注意：Null类型，这个类型很特殊，从逻辑来看，null值表示一个空对象指针，而这也正是使用typeof操作符检测null值会返回“object”的原因

### typeof
```
typeof number         //number
typeof string         //string 
typeof boolean        //boolean
typeof undefined      //undefined
typeof {}             //object
typeof []             //object
typeof null           //object
typeof console.log    //function

```
可以看出来，变量类型分为值类型和引用类型
* 值类型：number、string、boolean、undefined
* 引用类型：obiect,array,function  **引用类型具有对象特性，可以自由扩展属性（除null意外）**
> 注意：typeof只能区分**值类型**，不能区分**引用类型**，但是能区分函数，因为函数是一个特殊的引用类型


以下是值类型的一个例子
```
var aa = 10;
var bb = a;
aa = 11;
console.log(bb); //11
```
以下是引用类型的一个例子
```
var aaa = {age: 18};
var bbb = aaa;
bbb.age = 20;
console.log(aaa.age);  //20
```
通过例子可以看出他们的区别，引用类型是可以自由扩展属性的，**值类型复制不会相互影响**，**引用类型变量指针赋值，会相互影响**

## 变量计算
> 本节专门讲解值类型的计算，引用类型的计算放在后面作为 **“JS 算法”** 统一讲解。数字的加减乘除、字符串的拼接和替换，这个太简单了，这里不提了。但是 JS 在值类型的运算过程中，特别需要注意和利用**强制类型转换**这一特性
- 字符串拼接
- ==
- 逻辑运算符

### 字符串拼接
```
var a = 100 + 10   // 110
var b = 100 + '10' // '10010'
```

### == 双等
```
100 == '100'   // true
0 == ''  // true
null == undefined  // true
```
要求你写 JS 代码时，所有的地方都要使用===而不能使用==，但是阅读 jquery 源码后我发现一个特例，就是obj.a == null，使用很简洁。

### 逻辑运算 if 或 && 或 || 或 ！
```
var a = true
if (a) { //此时a为true
   // ....
}
var b = 100
if (b) {  //此时b为true
   // ....
}
var c = ''
if (c) { //此时c为false
   // ....
}

console.log(10&&0) //0 前面10转为true
console.log(''||'abc') // abc 前面‘’转为false
console.log(!window.abc) //true window.abc为undefined转为true

// 判断一个变量会被当做 true 还是 false
var aa = 100
console.log(!!aa)
```

日常开发中，以下变量会被转换为false

- 0
- NaN
- ''
- null
- undefined
- false 本身
除了以上几个，其他的都会被转换为true。**除了if之外，! || &&这三个运算符也会进行同样的转换，跟if是一个道理**。因此，如何快速判断一个变量将会被if转换为什么呢？————!!a

