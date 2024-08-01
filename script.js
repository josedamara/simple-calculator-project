function number(num) {
    if (document.getElementById("result").innerHTML != "") {
        document.getElementById("calculation").innerHTML += num;
        document.getElementById("result").innerHTML = "";
        document.getElementById("result").style.display = "none";
        document.getElementById("calculation").style.display = "block";
    } else {
        document.getElementById("calculation").innerHTML += num;
        document.getElementById("result").style.display = "none";
        document.getElementById("calculation").style.display = "block";
    }
};

function operation(operand) {
    if (document.getElementById("result").innerHTML != "") {
        document.getElementById("calculation").innerHTML =
        document.getElementById("result").innerHTML + operand;
        document.getElementById("calculation").style.display = "block";
        document.getElementById("result").style.display = "none";
        document.getElementById("result").innerHTML = "";
    } else if (document.getElementById("calculation").innerHTML === "") {
        document.getElementById("calculation").innerHTML += "";
    } else if (/(\-|\×|\+|\÷|\^)/.test(document.getElementById("calculation").innerHTML)) {
        document.getElementById("calculation").innerHTML += "";
    } else {
        document.getElementById("calculation").innerHTML += operand;
    };
};

function result() {
    function resultLocal(position) {
        if (document.getElementById("calculation").innerHTML.length === position) {
            document.getElementById("result").innerHTML =
            document.getElementById("calculation").innerHTML;
            document.getElementById("result").style.display = "block";
            document.getElementById("calculation").innerHTML = "";
            document.getElementById("calculation").style.display = "none";
        } else if (document.getElementById("calculation").innerHTML[position] === "+") {
            document.getElementById("result").innerHTML = 
            parseInt(document.getElementById("calculation").innerHTML.slice(0, position), 10) +
            parseInt(document.getElementById("calculation").innerHTML.slice(position + 1, document.getElementById("calculation").innerHTML.length), 10);
            document.getElementById("result").style.display = "block";
            document.getElementById("calculation").innerHTML = "";
            document.getElementById("calculation").style.display = "none";
        } else if (document.getElementById("calculation").innerHTML[position] === "-") {
            document.getElementById("result").innerHTML = 
            parseInt(document.getElementById("calculation").innerHTML.slice(0, position), 10) -
            parseInt(document.getElementById("calculation").innerHTML.slice(position + 1, document.getElementById("calculation").innerHTML.length), 10);
            document.getElementById("result").style.display = "block";
            document.getElementById("calculation").innerHTML = "";
            document.getElementById("calculation").style.display = "none";
        } else if (document.getElementById("calculation").innerHTML[position] === "×") {
            document.getElementById("result").innerHTML = 
            parseInt(document.getElementById("calculation").innerHTML.slice(0, position), 10) *
            parseInt(document.getElementById("calculation").innerHTML.slice(position + 1, document.getElementById("calculation").innerHTML.length), 10);
            document.getElementById("result").style.display = "block";
            document.getElementById("calculation").innerHTML = "";
            document.getElementById("calculation").style.display = "none";
        } else if (document.getElementById("calculation").innerHTML[position] === "÷") {
            document.getElementById("result").innerHTML = 
            parseInt(document.getElementById("calculation").innerHTML.slice(0, position), 10) /
            parseInt(document.getElementById("calculation").innerHTML.slice(position + 1, document.getElementById("calculation").innerHTML.length), 10);
            document.getElementById("result").style.display = "block";
            document.getElementById("calculation").innerHTML = "";
            document.getElementById("calculation").style.display = "none";
        } else if (document.getElementById("calculation").innerHTML[position] === "^") {
            document.getElementById("result").innerHTML = 
            parseInt(document.getElementById("calculation").innerHTML.slice(0, position), 10) **
            parseInt(document.getElementById("calculation").innerHTML.slice(position + 1, document.getElementById("calculation").innerHTML.length), 10);
            document.getElementById("result").style.display = "block";
            document.getElementById("calculation").innerHTML = "";
            document.getElementById("calculation").style.display = "none";
        } else {
            return resultLocal(position + 1);
        };
    };

    return resultLocal(0);
};

function deleteChar() {
    document.getElementById("calculation").innerHTML = 
    document.getElementById("calculation").innerHTML.slice(0, document.getElementById("calculation").innerHTML.length - 1);
}

window.addEventListener("keydown", function (event)  {
    if (event.key === "0") {
        return number(0);
    } else if (event.key === "1") {
        return number(1);
    } else if (event.key === "2") {
        return number(2);
    } else if (event.key === "3") {
        return number(3);
    } else if (event.key === "4") {
        return number(4);
    } else if (event.key === "5") {
        return number(5);
    } else if (event.key === "6") {
        return number(6);
    } else if (event.key === "7") {
        return number(7);
    } else if (event.key === "8") {
        return number(8);
    } else if (event.key === "9") {
        return number(9);
    } else if (event.key === "+") {
        return operation("+");
    } else if (event.key === "-") {
        return operation("-");
    } else if (event.key === "*") {
        return operation("×");
    } else if (event.key === "/") {
        return operation("÷");
    } else if (event.key === "^") {
        return operation("^");
    } else if (event.key === "=" || event.key === "Enter") {
        return result();
    } else if (event.key === "Backspace") {
        return deleteChar();
    } else {
        return undefined;
    }
})