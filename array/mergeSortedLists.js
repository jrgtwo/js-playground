
var mergeKLists = function (lists) {
  let results = []

  lists.forEach((list) => {
    let i = 0
    let j = 0

    while (j < list.length) {

      if (!results[i]) {
        results.push(list[j])
        j++
      } else if (list[j] <= results[i]) {
        results.splice(i, 0, list[j])
        j++
      }
      i++
    }
  })

  return results
};

console.log(mergeKLists([[1, 4, 5], [1, 3, 4], [2, 6]]))