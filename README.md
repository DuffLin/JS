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


