let d = [1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], dy = 1

function taskType(deadlines, day){
  let i=0,j=0,k=0,task = []
   deadlines.forEach(x => x <= day ? i++ : (x > day && x <= (day+7)) ? j++ : k++)
   task = [i,j,k]
   return task
}

console.log(taskType(d, dy))