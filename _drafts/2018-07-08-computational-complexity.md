---
title: Оценка сложности алгоритмов с примерами на JavaScript
date: 2018-07-08 10:00:00 +0230
categories: computer science
description: При разработке алгоритма важно уметь оценить его эффективность. Оценкой эффективности алгоритма является его сложность – функция зависимости объема необходимых ресурсов от размера входных данных.
---

Алгоритм, это определенная вычислительная процедура, которая получает некий набор входных данных, преобразует их в ходе своего выполнения и возвращает итоговый результат вычислений. При разработке алгоритма важно уметь оценить его эффективность. Эффективность, это свойство алгоритма, связанное с объемом необходимых для его выполнения ресурсов. Оценкой эффективности алгоритма является его сложность – функция зависимости объема необходимых ресурсов от размера входных данных. Чаще всего, оцениваются такие ресурсы, как время выполнения (как долго алгоритм занимает процессор) и память (как много рабочей памяти нужно для алгоритма).

Чтобы оценить время работы как функцию от размера входных данных используется анализ Временной сложности. А оценить необходимую память обычно используется анализ пространственной сложности алгоритма. Результат обычно выражается в терминах «O» большое.

```javascript
let caches = { ann: [1], john: [0] };

const prep = (current, opposite, n) => {
 if (caches[current][n] || caches[current][n] === 0) return caches[current][n];
 let res = n - prep(opposite, current, prep(current, opposite, n - 1));
 caches[current][n] = res;
 return res;
};

const john = n =>
 Array(n)
  .fill(undefined)
  .map((x, i) => prep("john", "ann", i));
const ann = n =>
 Array(n)
  .fill(undefined)
  .map((x, i) => prep("ann", "john", i));

const sumJohn = n => john(n).reduce((acc, el) => acc + el, 0);
const sumAnn = n => ann(n).reduce((acc, el) => acc + el, 0);
```

```javascript
const factors = remainder => {
 let factors = [];
 for (let i = 2; i <= remainder; i++) {
  while (remainder % i === 0) {
   if (!factors.includes(i)) factors.push(i);
   remainder /= i;
  }
 }
 return factors;
};

const properFractions = n =>
 n === 1 ? 0 : Math.round(factors(n).reduce((acc, val) => acc - acc / val, n));
```
