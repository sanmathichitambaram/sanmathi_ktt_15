const Data = [

        { name: "Alice",degree: "PhD",score: 200 },
        { name: "Bob", degree: "MSc", score: 180 },
        { name: "Abi", degree: "MBA", score: 190 },
        { name: "Anu", degree: "CSE", score: 140 },
        { name: "Eve", degree: "PhD", score: 190 },
        { name: "Sam", degree: "MSc", score: 140 },
    ];
//find the odd elements
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < array.length; i += 2) {
    console.log(array[i]);
}
let abc=[];
for (let i = 1; i < array.length; i += 2) {
    abc.push(array[i]);
}
 console.log(abc);
 
let sfr =[];
for(let i= array.length-1 ; i>=0 ;i--){
   sfr.push(array[i]);
}
console.log(sfr);


 //function
 function event(array){
 const even=[];
 for(let i=0;i<=array.length;i++){
 if(array[i]%2===0){
 even.push(array[i]);
 }
 }
 return even;
 }
 
 console.log(event(array));
 
 
 //for each 
 function sum(Data){
 let sum=0;
 Data.forEach(h=>{
 sum+=h.score
 });
 return sum;
 }
 console.log(sum(Data));


function sd(Data){
Data.forEach(h=>{
h.score+=1
});
return Data;
}
console.log(sd(Data));

function scd(Data){
let a=Data.filter(w=>w.name==="Abi");
a.forEach(h=>{
h.score+=1
});
return a;
}
console.log(scd(Data));

function reverse(array){
let a=[];
array.forEach(e=>{
a.unshift(e);
});
return a;
}
console.log(reverse(array));

//Finding the middle element

function middle(Data){
let a=Data.length;
let b=Math.floor(a/2);
if(a%2===0){
return Data.slice(b-1,b+1);
}else{
return Data.slice(b);
}
}
console.log(middle(Data));


function m(Data){
let s=Data.map(e=>({name:e.name,degree:e.degree}));
let a=s.length;
let b=Math.floor(a/2);
if(a%2===0){
return s.slice(b-1,b+1);
}else{
return s.slice(b);
}
}
console.log(m(Data));

//sort
function sort(Data) {
    let a = Data.sort((a, b) => a.name.localeCompare(b.name));
    return a;
}

console.log(sort(Data));

//Adding a value at a particular position

function add(Data){
let a={name:"Bala",degree:"M.Tech",score:187};
Data.splice(4,0,a);
return Data;
}
console.log(add(Data));

//Extract the first letter
let a=Data.map(e=>e.name[0]);
console.log(a);















