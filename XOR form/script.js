function getFormValues(event) {                 //сбор данных с формы
    var formPassword = document.getElementsByName("password")[0];
    var formMessage = document.getElementsByName("message")[0];
    var resultArr = encryption(formPassword, formMessage);
    outputText(resultArr);
    event.preventDefault();
}

document.getElementById("btn").addEventListener("click", getFormValues);

function encryption(formPassword, formMessage) {            //шифрование
    var key, result;
    var arr = [];
    if (isNaN(formPassword.value) && formPassword.value.length === 1) {
        key = formPassword.value.charCodeAt(0);
    } else if (0 <= +formPassword.value && +formPassword.value <= 255) {
        key = +formPassword.value;
    } else {
        return "error";
    }
    for (var i = 0; i <= formMessage.value.length - 1; i++) {
        result = key ^ formMessage.value[i].charCodeAt(0);
        arr.push(String.fromCharCode(result));
    }
    return arr;
}

function outputText(arr) {              //вывод на экран
    document.getElementById("outP").innerHTML = "XORtext: " + arr.join("");
}
