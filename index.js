// Task 1

const input = [
  { from: "Ankara", to: "Tel Aviv" },
  { from: "Tel Aviv", to: "Dubai" },
  { from: "Kyiv", to: "Chisinau" },
  { from: "Bucuresti", to: "Ankara" },
  { from: "Chisinau", to: "Bucuresti" },
];

const getTicketRoute = (ticket) => {
  // Получаем массив отправных и конечных пунктов
  const arrTicket = ticket
    .map((obj) => {
      return [obj.from, obj.to];
    })
    .flat();

  // Получаем начальный и конечный пункт
  startFinish = arrTicket.filter(
    (el, _, arr) => arr.indexOf(el) === arr.lastIndexOf(el)
  );

  // Получаем первый билет/маршрут
  const firstTicket = ticket.filter(
    (obj) => obj.from === startFinish[0] || obj.from === startFinish[1]
  );

  // Получаем массив билетов в порядке маршрута
  const tickets = [...firstTicket];
  for (let i = 0; i < ticket.length; i += 1) {
    for (let i = 0; i < ticket.length; i += 1) {
      if (ticket[i].from === tickets[tickets.length - 1].to) {
        tickets.push(ticket[i]);
      }
    }
  }

  return tickets;
};

console.log("Task 1:\n", getTicketRoute(input));

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
  // Массив [начало, конец] рабочего дня превращает в
  // дискретный вектор рабочего дня - растягивает массив,
  // заполняя промежутки через каждые пол часа
  const workingHours = [];
  const workingHoursLength = totalTime[1] - totalTime[0];
  for (let i = 0; i < workingHoursLength; i += 1) {
    workingHours.push(totalTime[0] + i, totalTime[0] + i + 0.5);
  }

  // Создаёт массив наложенных друг на друга векторов
  // прогулянных часов по тому же принципу
  const outWorkingHours = outTime.reduce((acc, arr) => {
    const outHoursLength = arr[1] - arr[0];
    for (let i = 0; i < outHoursLength; i += 1) {
      acc.push(arr[0] + i, arr[0] + i + 0.5);
    }
    return acc;
  }, []);

  // Вычитает вектора прогулов из вектора рабочего дня
  const inWorkTime = workingHours.filter((el) => !outWorkingHours.includes(el));

  // Удаляет промежуточные значения
  // между концами векторов оставшегося рабочего времени,
  // т.е. превращает вектора в массивы [начало, конец]
  const fractionalTimes = [];
  for (let i = 0; i < inWorkTime.length; i += 1) {
    inWorkTime[i] !== inWorkTime[i - 1] + 0.5 &&
      fractionalTimes.push(inWorkTime[i]);
    inWorkTime[i] !== inWorkTime[i + 1] - 0.5 &&
      fractionalTimes.push(inWorkTime[i]);
  }

  // Округляет верхние значения массивов до целого значения
  const integer = fractionalTimes.map((el) => Math.round(el));

  // Делит сплошной массив на интервалы рабочего времени
  const result = [];
  for (let i = 0; i < integer.length; i += 2) {
    const chunk = integer.slice(i, i + 2);
    result.push(chunk);
  }

  return result;
};

console.log("Task 2:\n", getWorkTime(workingTime, timeOut));
