/* 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
 */
console.log("Задача #1");
const arr = [1, 5, 7, 9];
console.log(`Минимальное число в массиве ${Math.min(...arr)}`);

/* 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую. */
console.log("Задача #2");
function createCounter() {
  return {
    count: 0,
    increment() {
      return this.count++;
    },
    decrement() {
      return this.count--;
    },
  };
}

const num = createCounter();

console.log(`Результат работы increment ${num.increment()}`);
console.log(`Результат работы increment ${num.increment()}`);
console.log(`Результат работы increment ${num.increment()}`);

console.log(`Результат работы decrement ${num.decrement()}`);
console.log(`Результат работы decrement ${num.decrement()}`);
console.log(`Результат работы decrement ${num.decrement()}`);
console.log(`Результат работы decrement ${num.decrement()}`);
console.log(`Результат работы decrement ${num.decrement()}`);

/* 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
 */

console.log("Задача #3");

function findElementByClass(rootElement, str) {
  if (rootElement.classList.contains(str)) {
    return rootElement;
  } else {
    const childs = rootElement.children;

    if (childs.length !== 0) {
      for (let i = 0; i < childs.length; i++) {
        //console.log(childs[i]);
        return findElementByClass(childs[i], str);
      }
    } else {
      const neib = rootElement.nextElementSibling;
      if (neib) {
        console.log(neib);
        return findElementByClass(neib, str);
      }
    }
    return "Указанного элемента не найдено";
  }
}

const rootElement = document.getElementById("root");

const targetElement = findElementByClass(rootElement, "my-class");
console.log(targetElement);

