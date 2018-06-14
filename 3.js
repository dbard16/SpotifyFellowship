function makeChange(amount, allCoins){
  // intialize the count of possible coin scenarios
  var count = 0

  function createChange(remainingAmt, coinsArr){
    //The last recursive call, don't want it to keep running after there's nothing left to slice form the array, so break out of everything by just returning blank
    if (coinsArr.length === 0){
      return
    }
    //if the remaining Amount - the last index in the array is exactly 0, we've reached a valid coin amount and add 1 to the count
    if(remainingAmt - coinsArr[coinsArr.length-1] === 0 ){
      count+=1
    }

    //if the remaining amount - last index is less than 0, we've subtracted too much and rerun createChange with the same amount as before, but an array with 1 less index at the end
    else if(remainingAmt - coinsArr[coinsArr.length-1] < 0 ){
      return createChange(remainingAmt, coinsArr.slice(0,-1))
    }

    //if the remaining amount - last index is greater than 0, it means there's still a possibility that coin can be deducted from the amount, but we also want to check other possibilties with the current amount and other coins, so we run createChange with the last index subtracted, and reun create change with the amount before subtraction and a smaller array
    else{
      return createChange(remainingAmt - coinsArr[coinsArr.length-1], coinsArr) + createChange(remainingAmt, coinsArr.slice(0,-1))
    }

  }
  //the initial call to start everything where allCoins is sorted greatest to least. This ensures every possibility is accounted for and no duplicates arise.

  createChange(amount, allCoins.sort(function(a, b){return b - a}))

  //finally we return the total count we've been adding to
  return count
}

makeChange(4, [1, 2, 3])

