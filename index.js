console.log("I am learning Javascript arrays")

let a = [1 , 3 , 5 , 55]
console.log(a)
a[3] = 44
console.log(a.length)
console.log(a[3])
//Javascript Array Methods:
//tostring()
console.log(a.toString())

//join()
let i=[2,3,4,5]
console.log(i.join(" & "))


//pop()
let n=[1,2,3,4,5]
console.log(n.pop())

//push()
let a=[3,44,54,55,66]
console.log(a.push("Kiran"))
console.log(a)
//shift()
console.log(a.shift())
//unshift()
console.log(a.unshift("Ganesh"))
console.log(a)
 
//delete()
console.log(delete(a[5]))
console.log(a)

//concact()
let a1=[1,2,3]
let a2=[4,5,6]
let a3=[7,8,9]
console.log(a1.concat(a2,a3))

//sort()
let b=[8,9,4]
console.log(b.sort())
console.log(b.sort())

//splice()
let num=[8,7,3,4,5]
console.log(num.splice(1,2))

//slice()
let sli=[9,8,7,6,5]
console.log(sli.slice(3))
console.log(sli)

console.log(sli.slice(1,3))
console.log(sli)

//reverse()
let rev=[88,77,66,55,44]
console.log(rev.reverse())
console.log(rev)



