let dailyWork = ['sleep', 'work', 'exercise']
let newRoutine = ['eat'];

// sorting elements in the alphabetical order
dailyWork.sort();
console.log(dailyActivities); // ['exercise', 'sleep', 'work']

//finding the index position of string
const position = dailyWork.indexOf('work');
console.log(position); // 2

// slicing the array elements
const newdailyWork = dailyWork.slice(1);
console.log(newdailyWork); // [ 'sleep', 'work']

// concatenating two arrays
const routine = dailyWork.concat(newRoutine);
console.log(routine); // ["exercise", "sleep", "work", "eat"]