/**
 * Создайте функцию getChange, которая принимает 2 аргумента:
 * первый стоимость товара и второй - оплата.
 * Функиция рассчитывает количество сдачи, которое вы получите исходя из входных данных.
 * Автомат может возвращать 1 коп, 5 коп, 10 коп, 20 коп, 50 коп, 1 руб.
 * Крупные деньги должны быть первыми в вашем ответе.
 * @param {number} cost
 * @param {number} payment
 * @return {object} массив денежных номиналов от  1коп. до 1р
 */
var getChange = function(cost, payment) {                  //cost - стоимость товара; payment - оплата.
    var arrRest = [];
    var i;
    var arrNominal= [100, 50, 20, 10, 5, 1];
    var rest = (payment * 100) - (cost * 100);
    if (cost === payment){
        for( i = 0; i < 6; i++){
            arrRest.push(0);
        }
        return arrRest;
    } else if (cost > payment) {
        return ("error");
    } else {
        for (i = 0; i < 6; i++){
            arrRest[i] = Math.floor(rest / arrNominal[i]);
            rest = rest % arrNominal[i];
        }
    }
    return arrRest;
};