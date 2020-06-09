    // Task 1

let a = 1;

console.log('Task 1');

while (a <= 50) {
    console.log(a);
    a++;
}

console.log('')

for (let b = 35; b >= 8; b--) {
    console.log(b);
}

    // Task 2

let c = 89;

document.write('Task 2<br />');

while (c >= 11) {
    document.write(c + '<br />');
    c--;
}

console.log('');

    // Task 3

console.log('Task 3');

let sum = 0;

for (let d = 0; d <= 100; d++) {
    sum += d;
}
console.log(sum);
console.log('');

    // Task 4

console.log('Task 4');

let e = 1;
    summ = 0;

for (; e <= 5; e++) {
    summ = 0;

    for (let f = 1; f <= e; f++) {
        summ += f;
    }

    console.log(summ);
}
console.log('');

    // Task 5

console.log('Task 5');

// for (let g = 8; g <= 56; g++) {
//     if (g % 2 != 0) continue;
//     console.log(g);
// }

let h = 7;
while (h <= 56) {
    h++;
    if (h % 2 != 0) continue;
    console.log(h)
}
console.log('');

    // Task 6

console.log('Task 6');

for (i = 2; i <= 10; i++) {

    for (j = 2; j <= 10; j++) {
        console.log(i + ' + ' + j +' = ' + i*j);
    }
}
console.log('');

    //Task 7

console.log('Task 7');

let k = 0;

for (let n = 1000; n >= 50;) {
    k++;
    n = n / 2;
    console.log(n + ' число итераций = ' + k);
}
console.log('');    

    // Task 8

console.log('Task 8');

let summa = 0,
    av = 0;

for (l = 0;;l++) {
    let m = +prompt('Введите число');

    if (m <= 0) break; 
    summa = summa + m;
}

av = summa / l;
console.log('Общая сумма ' + summa);
console.log('Среднее арифметическое ' + av);
console.log('');

    // Task 9

console.log('Task 9');

let strNums = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57',
    min = +strNums[0],
    max = +strNums[0],
    strNum = '';

for (let q = 0; q < 44; q++) {
    if (strNums[q] != ' ') {
        strNum += strNums[q];
    } else {
        console.log(strNum);

        if (strNum < min) min = +strNum;
        if (strNum > max) max = +strNum;
        strNum = '';
    }
}

console.log('Максимальное число: ' + max);
console.log('Минимальное число: ' + min);
console.log('');

    // Task 10

console.log('Task 10');

let r = prompt('Введите целое положительное число для задания 10'),
    f = +r,
    cifrVchisle = 0,
    summachisel = 0,
    obrPoryadok = 0,
    z = 0;

console.log('Число: ' + r);

for (;; z++) {
    if (r[z] == undefined) break;
    console.log(r[z]);  
    summachisel += Number(r[z]);
}
console.log('');
for (let zz = r.length-1; zz >= 0; zz--) {
    obrPoryadok += r[zz];
}
console.log(Number(obrPoryadok));
console.log('Цифр в числе: ' + Number(z));
console.log('Сумма чисел: ' + summachisel);


