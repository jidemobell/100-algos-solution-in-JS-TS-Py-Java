// areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight)

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight){
  return (yourLeft === friendsLeft && yourRight === friendsRight) || 
  (yourLeft + yourRight == friendsLeft + friendsRight)
}
console.log(areEquallyStrong(15,10,15,9))