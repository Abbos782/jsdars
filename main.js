
// //1-javob
// function  add(value1, value2){
//     let sum = []
//       for(let i = value2; i<=value1; i+=value2){
//         sum.push(i)
//       }
//       return sum
// }
// let x =add(18, 3)
// console.log(x)





// 2-javob 
// function searchs(value1, value2){
//     let jamiArray = []
//     for(let i = 0; i<value1.length; i++){
//        for(let j = 0; j < value1[i].length; j++){
//            if(value1[i][j]==value2){
//               jamiArray.push(value1[i])
//            }
//         }
//     }
//     return jamiArray

// }
// let x = searchs(["a","ab","b"],"b")
// console.log(x)

// 3-javob
// function soat(soat, minut){
//     if(soat == 0 && minut== 0){
//         console.log("24:00")
//     }
//     else if(soat ==0 && minut !==0){
//         let xminut = 60-minut
//         let xsoat = 23
//         console.log(xsoat + ":" + xminut)
//     }else if(minut == 0 && soat !==0){
//         let xminut = 0 
//         let xsoat = 24 - soat
//         console.log(xsoat + ":" + xminut + xminut)
//     }else{
//         let xsoat = 23 - soat
//         let xminut = 60 - minut
//         console.log(xsoat + ":" + xminut)
//     }
// }
// soat(00, 10)
// 4-javob
// function suma(value){
//         let a = 0
//         for(let i =0; i<value.length; i++){
//             a = a + value[i]
//         }
//         return a
    
//     }
//     let x = suma([100, -2, 20, -100])
//     console.log(x)
// 5-javob
// function typeofs(value){
//     let number = []
//     let sting = []
//     for(let i = 0; i<value.length; i++){
       
//         if(typeof value[i] === "number"){
//              number.push(value[i])
             
//         }else if(typeof value[i] ==="string")
//             sting.push(value[i])
            
//     }
//     let ans = [];

//     if(number.length > 0) ans.push("numbers:" + number)

//     if(sting.length > 0) ans.push("string:" + sting)

//     return ans
// }
// console.log(typeofs([1, 3, "slaom",'s']))