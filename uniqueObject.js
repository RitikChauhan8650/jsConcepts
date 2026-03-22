const data=[
  {id:1,val:"pp"},
  {id:2,val:"ps"},
  {id:3,val:"pp"},
  {id:2,val:"pt"},
  {id:4,val:"ps"},
  {id:1,val:"pmm"},
]

const uniqueObject = data.filter((item,index,self)=>
  index===self.findIndex(i=>i.id===item.id)
)
console.log("unique object-------",uniqueObject)