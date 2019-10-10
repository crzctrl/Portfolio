//???
$("#input1, #input2, #input3, #input4, #input5, #inputFact, #inputFB1, #inputFB2").keypress(function (abc) {
    if (!(abc.keyCode >= 48 && abc.keyCode <= 57) || (abc.keyCode >= 96 && abc.keyCode <= 105)) {
        return false;
    };
});

//Arithmetic
function small(array) {
    let x = array[0];
    for (let y of array) {
        if (y < x) {
            x = y;
        };
    };
    return x;
};
function big(array) {
    let x = array[0];
    for (let y of array) {
        if (y > x) {
            x = y;
        };
    };
    return x;
};
function avg(array) {
    let count = array.length;
    let add = sum(array);
    return add / count;
};
function sum(array) {
    let x = 0;
    for (let i of array) {
        x += i;
    };
    return x;
};
function prod(array) {
    let x = 1;
    for (let i of array) {
        x *= i;
    };
    return x;
};
$("#doMath").click(function () {
    let numArray = [];

    numArray[0] = Number($("#input1").val());
    numArray[1] = Number($("#input2").val());
    numArray[2] = Number($("#input3").val());
    numArray[3] = Number($("#input4").val());
    numArray[4] = Number($("#input5").val());

    $("#smallOutput").text(`The smallest of the numbers is ${small(numArray)}.`);
    $("#bigOutput").text(`The largest of the numbers is ${big(numArray)}.`);
    $("#avgOutput").text(`The mean of the numbers is ${avg(numArray)}.`);
    $("#sumOutput").text(`The sum of the numbers is ${sum(numArray)}.`);
    $("#prodOutput").text(`The product of the numbers is ${prod(numArray)}.`);
});
$("#resetMath").click(function () {
    $("#input1, #input2, #input3, #input4, #input5").val("");
    $("#smallOutput, #bigOutput, #avgOutput, #sumOutput, #prodOutput").text("");
});
$("#showMath").click(function () {
    $("#codeMath").toggle();
});

//Factorial
$("#doMathFact").click(function () {
    let factNum = Number($("#inputFact").val());

    function fact(x) {
        if (x === 1 || x === 0) {
            return 1;
        } for (let i = 2; i <= x - 1; i++) {
            factNum *= i;
        };
        return factNum;
    };

    $("#factOutput").text(`The factorial of ${factNum} is ${fact(factNum)}.`);
});
$("#resetFact").click(function () {
    $("#inputFact").val("");
    $("#factOutput").text("");
});
$("#showFact").click(function () {
    $("#codeFact").toggle();
})

//FizzBuzz
$("#pop").click(function () {
    let fb1 = Number($("#inputFB1").val());
    let fb2 = Number($("#inputFB2").val());
    let arrayFB = [];

    function fizzbuzz(x, y) {
        for (let i = 1; i <= 100; i++) {
            if (i % x == 0 && i % y == 0) {
                arrayFB.push("FizzBuzz");
            } else if (i % x == 0) {
                arrayFB.push("Fizz");
            } else if (i % y == 0) {
                arrayFB.push("Buzz");
            } else {
                arrayFB.push(i);
            };
        };
        return arrayFB.join(`, `)
    };

    $("#outputFB").text(`${fizzbuzz(fb1, fb2)}`);
});
$("#resetFB").click(function () {
    $("#inputFB1, #inputFB2").val("");
    $("#outputFB").text("");
});
$("#showFB").click(function () {
    $("#codeFB").toggle();
});

////Palindrome
$("#reverse").click(function () {
    let word1 = $("#inputPD").attr("checked", true).val().toLowerCase();
    let word2 = "";

    function reverse(x) {
        for (let i = x.length - 1; i >= 0; i--) {
            word2 += x[i];
        };
        return word2;
    };
    reverse(word1);
    word1 == word2 ? $("#outputPD").text(`SUCCESS! ${word1} reversed is: ${word2}`) : $("#outputPD").text(`UH-OH! ${word1} reversed is: ${word2}`);
});
    $("#resetPD").click(function () {
        $("#inputPD").val("");
        $("#outputPD").text("");
    });
    $("#showPD").click(function () {
        $("#codePD").toggle();
    });