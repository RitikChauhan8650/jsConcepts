// // Input
// [
//   { name: "A", age: 20 },
//   { name: "B", age: 20 },
//   { name: "C", age: 25 }
// ]

// // Output
// {
//   20: [...],
//   25: [...]
// }

const obj1= [
  { name: "A", age: 20 },
  { name: "B", age: 20 },
  { name: "C", age: 25 }
]

function helper(obj1){
    const ans={}
    obj1.map((ele)=>{
        if (!ans[ele.age]) {
            ans[ele.age] = [];
        }
        ans[ele.age].push(ele.name)
    })
    return ans;

}
const groupBy=helper(obj1)
console.log("ans-------",groupBy)


