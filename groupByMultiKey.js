const users = [
  { name: "A", age: 20, city: "Delhi" },
  { name: "B", age: 20, city: "Mumbai" },
  { name: "C", age: 25, city: "Delhi" },
  { name: "D", age: 20, city: "Delhi" },
];

// {
//   20: {
//     Delhi: ["A", "D"],
//     Mumbai: ["B"]
//   },
//   25: {
//     Delhi: ["C"]
//   }
// }

const ans=users.reduce((acc,ele)=>{
    console.log("annsnsnns----",acc)
    if(!acc[ele.age]){
        acc[ele.age]=[]
    }
    if(!acc[ele.age][ele.city]){
        acc[ele.age][ele.city]=[]
    }
    acc[ele.age][ele.city].push(ele.name)

    return acc
},{})
console.log("ans-------",ans)