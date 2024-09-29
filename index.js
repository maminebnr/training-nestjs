//rappel es6 js 
//Variables et constants 
let name ="amine"
const firstName="bacem"
var lastName = "ramzi"
let is_active = false 
if(!is_active){
    let name="mohame"
    console.log(name,lastName)
}
console.log(name)
//Arrow functions
//before 
function sum(a,b){
    return a+b
}
console.log(sum(2,3))
//after arrow function 
const sumNumbers = (a,b)=>a+b;
console.log(sumNumbers(2,3))

//Template Literals
//before 
const middleName ="john"
const pseudo ="152"
const fullName = middleName+" "+pseudo+"hello world "
//after
const greeting =`Hello ${middleName} ${pseudo}!`
//Destructing 
const person = {studentName:"ahmed",age:22,gender:"male",study:'it'}//destructing object
const {studentName,age,...data} = person
console.log(studentName,age,data)
const [first,second]=[10,20] //array destructing 
console.log(first,second)
//spread and rest operators
//spread
const array = [1,2,3,4,5,6,7,8,9]
const arr2 =[...array,10,11,12]
const arr3 = [...array,...arr2]
console.log(...array,arr2,arr3)
function sumSpread(...numbers){
    return numbers.reduce((acc,num)=>acc+num,0)
} 
console.log(sumSpread(1,2,3,7,9))
//Promises 
const fetchData = ()=>
    new Promise((resolve,reject)=>{
        const success = Math.round()>0.5
        setTimeout(()=>{
            if(!success){
                resolve({msg:"fetched data successfully"})
            }else{
                reject({msg:"failed to fetch data"})
            }
        },1000)
    })
fetchData().then(data =>console.log(data)).catch(err=>{console.log(err)})
//Map Set 
//creatiing a new map 
const userRoles = new Map()
userRoles.set('bacem','admin')
userRoles.set('oumeima','moderator')
userRoles.set('amine','viewer')
console.log(userRoles.get('oumeima'))
console.log(userRoles.has('amine'))
console.log(userRoles.size)
for(let [key,value] of userRoles){
    console.log(`${key} ${value}`)
}
userRoles.delete('amine')
console.log(userRoles.size)




