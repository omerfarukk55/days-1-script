console.log("hello word")
sayı=0
const arry=[{
    id:1,
    name:"ömer",
    age:20,
},{
    id:2,
    name:"faruk",
    age:23,
},{
    id:3,
    name:"samet",
    age:21,
}]
document.getElementById("root").innerHTML = "merhaba dünya"
for(let i=0;i<10;i++){
    
    sayı=i
    console.log(sayı);
}
/* git swich -c css
swithed to a new branch 'css'
//git check out*/

for (let person of arry) {
    const element=document.createElement("div")
    element.innerHTML =`${person.id}${person.name}${person.age}`
    document.getElementById("root").append(element);
    
}
