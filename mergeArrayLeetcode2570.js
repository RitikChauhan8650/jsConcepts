var mergeArrays = function (nums1, nums2) {
  var nums2 = [...nums1, ...nums2];
  console.log("nums2--------", nums2);
  const objectArr = {};
  nums2.forEach((element) => {
    console.log("element-----", element);
    console.log("elemetnppp", element[0]);
    objectArr[element[0]] = (objectArr[element[0]] || 0) + element[1];
  });
  console.log("objectarrr--------", objectArr);
  let res = Object.keys(objectArr)
    .map((key) => [Number(key), objectArr[key]])
    .sort((a, b) => a[0] - b[0]);
};

var nums1 = [
  [1, 2],
  [2, 3],
  [4, 5],
];
var nums2 = [
  [1, 4],
  [3, 2],
  [4, 1],
];

console.log("mergearraye------", mergeArrays(nums1, nums2));
