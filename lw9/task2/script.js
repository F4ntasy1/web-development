function calc(str) {
    let countBracker = 0;
    let arr = Array.from(str);
    let Result;
    let Skip = 0;
    let Leng = 0;   //Длина массива

    for (let i = 0; i < arr.length; i++) {          //считает скобки ( )
        if (arr[i] === '(') {
            countBracker++;
        }
        if (arr[i] === ')') {
            countBracker--;
        }
    }
    if (countBracker === 0 && str.length > 0) {           //если скобок одинаковое кол-во(0) и длина больше 0, то true
        for (let i = 0; i < arr.length; i++) {          //Обработка дробного значения на входе (0.54 и др.)
            let amount = 0;
            let dividend;       //Делитель  

            if (arr[i] === '.' && arr[i + 1] >= '0' && arr[i + 1] <= '9' && arr[i - 1] >= '0' && arr[i - 1] <= '9') {
                let store = i;

                while (arr[i + 1] >= '0' && arr[i+1] <= '9') {        //Считает количество цифр после точки
                    amount++;
                    i++;
                }
                i = store;
                
                if (arr[i - 1] === '0' && (arr[i - 2] === ' ' || arr[i - 2] === '(' || arr[i - 2] === '-')) {           //Если 0.254.. - удаляет '0.' -24.2
                    arr.splice(i - 1, 2);
                }
                else {                  //Удаляет '.'
                    arr.splice(i, 1);
                }
                        
                while (arr[i - 1] >= '0' && arr[i - 1] <= '9') {        //Добираемся до начала числа
                    i--;
                }      
                if (arr[i - 1] === '-') {           //Если число отрицательное, ставит деление на 1 позицию левее
                    arr.splice(i - 1, 0, '/', ' ')
                } else {                            //Вставляет знак деления перед числом
                    arr.splice(i, 0, '/', ' ')
                }

                i += 2;
                while (arr[i] >= '0' && arr[i] <= '9') {        //Добираемся до конца числа
                    i++;
                }
                store = i;
                dividend = 10;
                for (i = 1; i < amount; i++) {          //Рассчитывает делитель, если после точки i чисел, то делит на 10 i раз
                    dividend *= 10;
                }
            
                arr.splice(store, 0, ' ', dividend);        //Вставляет делитель после дробного числа         
            }
        }
        
        Leng = arr.length;
        for (let i = Leng; i >= 0; i--) {       //Обработка выражения
            if (arr[i] === '+' || (arr[i] === '-' && (arr[i+1] === ' ' || arr[i+1] === '(')) || arr[i] === '*' || arr[i] === '/') {         //Нахождение арифметического операнда
                let Operand = arr[i];           //i - номер позиции арифм. операнда
                if (arr[i+1] === ' ' && (arr[i+2] === ' ' || arr[i+2] === '(' || arr[i+2] === ')')) {           //Проверка '..<операнд>_(..', где _ пробел
                    printErrorMsg();
                    Result = -1;
                    break;
                }

                let PosStart;
                let Length;
                let Number1;
                let Number2;

                if (arr[i+1] === ' ' || arr[i+1] === '(') {         //Проверка на корректность символов после операнда
                    let j = i + 2;
                    
                    if (Number(arr[j]) || arr[j] === '0') {
                        Number1 = Number(arr[j]);         //Первое слагаемое
                    }
                    else {          //Вывод сообщения об ошибке, если значение слагаемого - не число
                        printErrorMsg();  
                        Result = -1;
                        break;
                    }

                    while (arr[j+1] >= '0' && arr[j+1] <= '9') {        //Обработка числа, если оно больше 9 (12/345 и т.д.)
                        Number1 = Number1 * 10;
                        if (Number1 < 0) {          //Обработка отрицательных чисел
                            Number1 = Number1 - Number(arr[j+1]);
                        }
                        else {          //Обработка положительных чисел
                            Number1 = Number1 + Number(arr[j+1]);
                        }
                        j++;
                    }

                    if (arr[j+1] === ' ' && arr[j+2] !== '(') {
                        j = j + 2;

                        if (Number(arr[j]) || arr[j] === '0') {
                            Number2 = Number(arr[j]);         //Второе слагаемое
                        }
                        else {          //Вывод сообщения об ошибке, если значение слагаемого - не число
                            printErrorMsg();  
                            Result = -1;
                            break;
                        }

                        while (arr[j+1] >= '0' && arr[j+1] <= '9') {
                            Number2 = Number2 * 10;
                            if (Number2 < 0) {
                                Number2 = Number2 - Number(arr[j+1]);
                            }
                            else {
                                Number2 = Number2 + Number(arr[j+1]);
                            }
                            j++;
                        }
                        //Начальная позиция для замены выражения: '..(+ 4 5)..', ( - начальная позиция
                        if (arr[i-1] === '(' && arr[i+1] !== '(' && arr[j+1] === ')') {         //Пример: '..(+ 4 5)..' - начальная позиция на (
                            PosStart = i - 1;
                        }
                        else {              //если '..(+4 5 2)..' / '..* 3 12..' , то начальная позиция на + / *
                            PosStart = i;
                        }
                        //Длина для замены выражения
                        if (arr[j+1] === ')') {         //Длина берётся до ')', включая этот символ
                            Length = j - PosStart + 2;
                        }
                        else {          //Если скобок нет, то просто до конца данного выражения
                            Length = j - PosStart + 1;
                        }

                        if (((arr[j+1] === ' ' || arr[j+1] === ')') && (arr[j+1] !== undefined)) || (arr[j+1] === undefined)) {
                            if (Operand === '+') Result = Number1 + Number2;    //Считает результат (+, -, /, *), если после слагаемых корректное расположение символов
                            if (Operand === '-') Result = Number1 - Number2;
                            if (Operand === '*') Result = Number1 * Number2;
                            if (Operand === '/') Result = Number1 / Number2;
                        }
                        else {
                            printErrorMsg();
                            Result = -1;
                            break;
                        }
                            
                        Result = String(Result);        //Результат преобразует в строку

                        arr.splice(PosStart, Length, Result);       //Заменяет данное выражения с позиции PosStart длиной в Length на Result '..+ 3 5..' -> '..8..'
                    }
                    else {          //Если условие неверное - выход из цикла с сообщением об ошибке и Result = -1;
                        printErrorMsg();
                        Result = -1;
                        break;
                    }
                }
                else {
                    printErrorMsg();
                    Result = -1;
                    break;
                }
            }
            else if (arr[i] === '-' && arr[i+1] !== ' ') {          //Обработка значения с '-', пример: -5 ('-', '5') -> '-5'
                arr.splice(i, 1);
                arr[i] = '-' + arr[i];
            }
            else {          //Инкрементирует Skip, если не находит операнд
                Skip++;
            }
        }

        if (Skip - 1 === Leng) {         //Сравнивает Skip и Leng, выводит сообщение о том, что в переданной строке нет операндов
            console.log('You have not entered any operand');
            Result = -1;
        }

        if (Result !== -1) {
            console.log('Result: ' + Result);           //вывод в консоль результата
        }
    }
    else if (countBracker !== 0) console.log('You misplaced the brackets');     //Сообщение о том, что в строке неправильно расставлены скобки
    else if (Leng === 0) console.log('You are passing an empty string');        //Сообщение о том, что передана пустая строка
}

function printErrorMsg() {
    console.log('Expression entered incorrectly');
}
//calc('* (- 5 6) 7');                      //-7
//calc('+ /(240 6) * - 5 *(4 3) 4');        //12   
//calc('+ /(-24 6) * - 5 *(-4 3) -4');      //-72
//calc('+ + *(4 3) 4 5');                   //21
//calc('+ + - - + 4 -1 2 1 10 5')           //15
//calc('+ -(+(+(1 2) 3) 4) 5');             //7
//calc('+ * 50 30 4');                      //1504
//calc('+ 5 - 3 20');                       //-12
//calc('*(-4 2)');                          //-8
//calc('- -4 -5');                          //1
//calc('+ 0.4 -4.22');                      //-3.82
//calc('+ / 0.18 6 * - 5 * -4 10.3 -4');    //-184.77
//calc('+ 0.0 -1');                         //-1
//calc('- -10.004 4');                      //-14.004
//calc('*(0.25 2)');                        //0.5
//calc('/ 0.0000001 -10');                  //-1e-8
//calc('   + 1 1');                         //2

//Ошибки:
//calc('* - 5 (6 7)'); //нет операнда перед скобкой
//calc('* (- 5 6) 7)'); //лишняя скобка
//calc('+ / (24 4) 7'); //допущен символ между знаком операнда и скобкой
//calc('// 24 4'); //неверный ввод
//calc('3 4'); //не указан знак операнда
//calc('* 4'); //не введено второе слагаемое
//calc(''); //ничего не введено
//calc('+ a 3'); //введены символы вместо чисел
//calc('+ 2.0-3 7');  //неверная запись
//calc('+ 3. 8');   //Неправильно записано дробное число
//calc('+ .8 3');
//calc('   +  1 1');  //Два пробела между числами или операндами