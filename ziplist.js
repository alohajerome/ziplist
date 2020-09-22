const listOne = ['a','b','c'];
const listTwo = [1,2,3];

function zipList(list1, list2) {
  const finalList = [];
  for(let i = 0; i < list1.length; i++) {
    finalList.push(list1[i],list2[i]);
  }
  return finalList;
}
console.log(zipList(listOne,listTwo));

function zipListTheSimpleWay(list1, list2) {
    return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(listOne,listTwo));