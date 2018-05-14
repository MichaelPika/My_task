function collectData(event) {                 //сбор данных с формы
    var formPassword = document.getElementsByName("password")[0];
        var formMessage = document.getElementsByName("message")[0];
        var resultArr = encryption(formPassword.value, formMessage.value);
    outputText(resultArr);
    event.preventDefault();
}

document.getElementById("btn").addEventListener("click", collectData);

function encryption(password, message) {            //шифрование
    var key, result;
    var arr = [];
    if (isNaN(password) && password.length === 1) {
        key = password.charCodeAt(0);
    } else if (0 <= +password && +password <= 255) {
        key = +password;
    } else {
        return "error";
    }
    for (var i = 0; i <= message.length - 1; i++) {
        result = key ^ message[i].charCodeAt(0);
        arr.push(String.fromCharCode(result));
    }
    return arr;
}

function outputText(arr) {              //вывод на экран
    document.getElementById("outP").innerHTML = "XORtext: " + arr.join("");
}
