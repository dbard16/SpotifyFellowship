function sortByString (s,t) {
  let hash = {}
  // create a hash table from the 't' string for quicker look up when sorting
  for (var i = 0; i < t.length; i++){
    hash[t[i]] = i;
  }
  //don't have to worry about collisions since each letter in T only appears once

  const sArr = s.split('')

  //turn S into an array separated by each letter to do a merge sort. May be more code to write, but merge sort is safest in terms of efficiency and combined with the hash above, can be most beneficial for large data sets.

  return (mergeSort(sArr).join(''))
  //Sort the array using the merge sort, then join it to put it back into string form

  //merge Sort is within the sortByString function so it has access to the hash table

  function mergeSort (arr) {
    if (arr.length === 1) {
      return arr
    }

    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid) // create the left array to be merge sorted
    const right = arr.slice(mid) // create the right array to be merge sorted

    return merge(
      mergeSort(left),
      mergeSort(right)
    )
  }

  function merge (left, right) {
    let mergedArr = []
    let lIndex = 0
    let rIndex = 0

    while (lIndex < left.length && rIndex < right.length) {
      if (hash[left[lIndex]] < hash[right[rIndex]]) {
        mergedArr.push(left[lIndex])
        lIndex++
      } else {
        mergedArr.push(right[rIndex])
        rIndex++
      }
    }

    return mergedArr.concat(left.slice(lIndex)).concat(right.slice(rIndex))
  }

}
