/*function add (a, b,){
    console.log(a+b);
}

const addV = (a,b) =>{
    console.log(a+b);
}

const hello = ()=> console.log("Hello,Mf");

const product = (a,b) => console.log(a*b);
const sum = (a,b) => console.log(a+b);
const Diff = (a,b) => console.log(a-b);
const Div = (a,b) => console.log(a/b);

elt arr=[2,4,6,8,10,12,14,16,18];

let names = (index)=>{
    console.log("Domain Expansion");

}
*/
/*elt arr=[2,4,6,8,10,12,14,16,18];
arr.map((val,index,arr)=>{
    console.log(val*val);
});
*/
/*let arr=[2,4,6,8,10,12,14,16,18];
let sum = arr.reduce((val,index)=>{
    return val + index;
});
console.log(sum);
*/
let arr = [55,66,77,99,90,78,95];
let newArr = arr.filter((val)=>{
    return val >= 90;
})
console.log("90+marks --",newArr);

let prod = arr.reduce((pre,curr)=>{
     return pre * curr;
})
console.log("product of all elements --",prod);

let n = prompt("Enter num of elements:");
let arr3 = [];
for (let i = 1;i<=n;i++){
    arr3.push(i);

}
console.log(arr3);
