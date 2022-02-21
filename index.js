// Task 1

//

// Task 2

const workingTime = [9, 18];
const timeOut = [
  [9, 10],
  [9, 17],
  [11, 12],
  [15, 17],
  [15, 16],
  [14, 16],
  [3, 13],
];

const getWorkTime = (totalTime, outTime) => {
  const workingHours = [];
  const workingHoursLength = totalTime[1] - totalTime[0];
  for (let i = 0; i < workingHoursLength; i += 1) {
    workingHours.push(totalTime[0] + i, totalTime[0] + i + 0.5);
  }

  const outWorkingHours = outTime.reduce((acc, arr) => {
    const outHoursLength = arr[1] - arr[0];
    for (let i = 0; i < outHoursLength; i += 1) {
      acc.push(arr[0] + i, arr[0] + i + 0.5);
    }
    return acc;
  }, []);

  const inWorkTime = workingHours.filter((el) => !outWorkingHours.includes(el));

  const fractionalTimes = [];
  for (let i = 0; i < inWorkTime.length; i += 1) {
    inWorkTime[i] !== inWorkTime[i - 1] + 0.5 &&
      fractionalTimes.push(inWorkTime[i]);
    inWorkTime[i] !== inWorkTime[i + 1] - 0.5 &&
      fractionalTimes.push(inWorkTime[i]);
  }

  const integer = fractionalTimes.map((el) => Math.round(el));

  const result = [];
  for (let i = 0; i < integer.length; i += 2) {
    const chunk = integer.slice(i, i + 2);
    result.push(chunk);
  }

  return result;
};

console.log("Task 2:\n", getWorkTime(workingTime, timeOut));
