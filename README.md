# Техническое он-лайн собеседование на мидл фронтенд разработчика

## [Задача 1](https://www.youtube.com/watch?v=jH9wQfFZkcg&t=3094s&ab_channel=%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D1%83%D0%BC)

Дан массив:

```js
const time = [
  [9, 10],
  [15, 17],
  [14, 16],
];
```

Который показывает с какого по какое время сотрудники
отсутствовали на рабочем месте. Рабочее время с 9 до 18.
Нужно написать функцию которая покажет в каких
промежутках времени на работе были все сотрудники.

В данном случае должен быть такой ответ:

```js
[
  [10, 14],
  [17, 18],
];
```

## [Задача 2](https://www.youtube.com/watch?v=jH9wQfFZkcg&t=5104s&ab_channel=%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D1%83%D0%BC)

Требуется восстановить маршрут поездки по билетам:

```js
const input = [
  { from: Ankara, to: Tel_Aviv },
  { from: Kyiv, to: Chisinau },
  { from: Tel_Aviv, to: Dubai },
  { from: Bucuresti, to: Ankara },
  { from: Chisinau, to: Bucuresti },
];
```

Ответ должен выглядеть так:

```js
[
  { from: Kyiv, to: Chisinau },
  { from: Chisinau, to: Bucuresti },
  { from: Bucuresti, to: Ankara },
  { from: Ankara, to: Tel_Aviv },
  { from: Tel_Aviv, to: Dubai },
];
```
