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

//Palindrome
$("#reverse").click(function () {
    let word1 = $("#inputPD").attr("checked", true).val();
    let word2 = "";

    function reverse(x) {
        for (let i = x.length - 1; i >= 0; i--) {
            word2 += x[i];
        };
        return word2;
    };

    reverse(word1)
    let pword1 = word1.toLowerCase().replace(/[^\w]|_/g, "");
    let pword2 = word2.toLowerCase().replace(/[^\w]|_/g, "");
    pword1 == pword2 ? $("#outputPD").text(`SUCCESS! ${word1} reversed is: ${word2}`) : $("#outputPD").text(`UH-OH! ${word1} reversed is: ${word2}`);
});
    $("#resetPD").click(function () {
        $("#inputPD").val("");
        $("#outputPD").text("");
    });
    $("#showPD").click(function () {
        $("#codePD").toggle();
    });

//smtp

//$(document).ready(function () {
//    $("#submit").click(function (event) {
//        event.preventDefault();
//        console.log("yo");

//        //let name = $("#name").val();
//        //let email = $("#email").val();
//        //let subject = $("#subject").val();
//        //let message = $("#message").val();
//    });
//});

//let name = document.getElementById("name").value;
//let email = document.getElementById("email").value;
//let subject = document.getElementById("subject").value;
//let message = document.getElementById("message").value;

function sendSMTP() {
    let name = $("#name").attr("checked", true).val();
    let email = $("#email").attr("checked", true).val();
    let subject = $("#subject").attr("checked", true).val();
    let message = $("#message").attr("checked", true).val();

    if (name.length >= 1 && name.length < 50 && email.includes("@") && subject.length >= 1 && subject.length < 50 && message.length >= 1 && message.length < 500) {
        $("#coinflip").html("<div>Your message has been sent. Thank you!</div>")

        Email.send({
            SecureToken: "529772b2-1c6c-4e98-8a0d-9cec5cc47592",
            To: "RealChill104@Yahoo.com",
            From: `${email}`,
            Subject: `${subject}`,
            Body: `${name} said:<br /><br />${message}<br /><br />Sent from le portfolio de christopher`
        });
    } else {
        $("#coinflip").html(`<div style="color: red">Something went wrong...</div>`)
    }
};