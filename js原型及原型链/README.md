# 原型及原型链
必须掌握的**知识点**
- 构造函数及扩展
- 原型规则
- 原型链
- instanceof 引用类型得判断，原型链的一个表现

## 构造函数
> 构造函数函数名一般首字母大写
```
    function Fn(name, age){
        this.name = name;
        this.age = age;
        //return this;  这里面的this本身是个空对象，new 对象后，return this,此时this就指向 newF 或 newF2
    }
    var newF = new Fn('yalu',20);
    var newF2 = new Fn('john',18); //可创建多个对象
```
> 构造函数—扩展
- var a={} ......//其实是 var a = new Object()的语法糖
- var b=[] ......//其实是 var b = new Array()的语法糖
- function Fn(){} ......//其实是 var Fn = new Function(){}的语法糖
- 使用instanceof 判断一个函数是否是一个变量的构造函数。判断一个变量是否为“数组”：变量 instanceof Array

## 原型规则
> 有5大原型规则，必须掌握记住。原型规则是学习原型链的基础
1. 所有的引用类型（数组，对象，函数），都具有对象特性，即可**自由扩展属性**（除null意外）
2. 所有的引用类型（数组，对象，函数），都有一个_proto_(隐式原型)属性，属性值是一个普通的对象
3. 所有的函数，都有一个prototype(显示原型)属性，属性值也是一个普通的对象
4. 所有的引用类型（数组，对象，函数）,_proto_(隐式原型)属性值指向它的构造函数的“prototype”属性值
5. 当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么就会去它的_proto_找（即它的构造函数的prototype中寻找）





