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
    console.log('���Ǻ���')
}
console.log(fn()); //  ���Ǻ���
console.log(typeof fn); // function

//typeof ����  --->����object ���ñ������������飬������ ��������չ����
e.sex = 'man';
console.log(e); //{name: "john", age: 20, sex:"man"}

f.name = 'array'; //?[1, 2, 3, 4, name: "array"]

//����������������consoleһ��
