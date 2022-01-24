const h1 = document.getElementById("calc");
    vivod = document.querySelector(".vivod");
    del = document.querySelector(".del");
    btn = document.querySelectorAll(".btn");
    
    number = "";
    i = 0;
    i2 = 0;
    znak = 0;
h1.style.color = "blue";
del.addEventListener("click", ()=> {
    vivod.value = "";
    number = "";
});


btn[0].addEventListener("click", ()=> {
    number += 9;
    vivod.value = number;
});
btn[1].addEventListener("click", ()=> {
    number += 8;
    vivod.value = number;
});
btn[2].addEventListener("click", ()=> {
    number += 7;
    vivod.value = number;
});

btn[3].addEventListener("click", ()=> {
    i1= +number;
    number += "/";
    znak = "/";
    vivod.value = number;
    number = "";
});
btn[4].addEventListener("click", ()=> {
    number += 6;
    vivod.value = number;
});
btn[5].addEventListener("click", ()=> {
    number += 5;
    vivod.value = number;
});
btn[6].addEventListener("click", ()=> {
    number += 4;
    vivod.value = number;
});
btn[7].addEventListener("click", ()=> {
    i1= +number;
    number += "*";
    znak = "*";
    vivod.value = number;
    number = "";
});
btn[8].addEventListener("click", ()=> {
    number += 3;
    vivod.value = number;
});
btn[9].addEventListener("click", ()=> {
    number += 2;
    vivod.value = number;
});
btn[10].addEventListener("click", ()=> {
    number += 1;
    vivod.value = number;
});
btn[11].addEventListener("click", ()=> {
    i1= +number
    number += "-";
    znak = "-";
    vivod.value = number;
    number = "";
});
btn[12].addEventListener("click", ()=> {
    number += 0;
    vivod.value = number;
});
btn[13].addEventListener("click", ()=> {
    number += ".";
    vivod.value = number;
});
btn[14].addEventListener("click", ()=> {
    i1= +number
    number += "+";
    znak = "+";
    vivod.value = number;
    number = "";
});
btn[15].addEventListener("click", ()=> {
    var rounded = function(number){
        return +number.toFixed(2);
    }
    i2 = number;
    if(znak == "+") {
        number = rounded(i1 + i2 * 1);
        vivod.value = number;       
    }
    if(znak == "-") {
        number = rounded(i1 - i2 * 1);
        vivod.value = number;       
    }
    if(znak == "*") {
        number = rounded(i1 * i2 * 1);
        vivod.value = number;       
    }
    if(znak == "/") {
        number = rounded(i1 / i2 * 1);
        vivod.value = number;       
    }
    

});