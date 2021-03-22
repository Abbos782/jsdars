function  add(value1, value2){
    let sum = []
      for(let i = 1; i<value1; i++){
          if(i%value2==0){
             sum.push(i)
          }
          
      }
      return sum
}
let x =add(10,2)
console.log(x)