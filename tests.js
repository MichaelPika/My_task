/* global mocha, chai, describe, it  */

mocha.setup("bdd");
const assert = chai.assert;

describe("getChange", function() {
    it("Это функция", function() {
        assert.isOk(typeof getChange === "function");
    });

    it ("Возврaщает массив с 6 элементами", function(){
        assert.lengthOf(getChange(1, 1) , 6);
    });

    it ("Возврaщает массив с нулевыми значениями при значeнии стоимость = оплата", function(){
        assert.deepEqual(getChange(1, 1), [0, 0, 0, 0, 0, 0]);
    });

    it ("Возврaщает массив (значeниe стоимость !== оплата)", function(){
        assert.deepEqual(getChange(1, 5), [4, 0, 0, 0, 0, 0]);
        assert.deepEqual(getChange(3.67, 10), [6, 0, 1, 1, 0, 3]);
    });

});

mocha.run();