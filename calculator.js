var nums = [];
var keys = document.querySelectorAll(".num");
var add = document.getElementById("add");
var mul = document.getElementById("mul");
var dec = document.getElementById("dec");
var divide = document.getElementById("divide");
var eq = document.getElementById("eq");
var erease = document.getElementById("C");
var out = document.getElementById("out");

var total = "";
var op = "";
var submit = 0;

var num1 = "";
var num2 = "";


add.addEventListener('click', function(){
    op = "+";
})

mul.addEventListener('click', function(){
    op = "*";

})

dec.addEventListener('click', function(){
    op = "-";
    
})

divide.addEventListener('click', function(){
    op = "/";

})

eq.addEventListener('click', function(){
    submit = 1;
    total = num1;
})

erease.addEventListener("click", function(){
    total = "";
    num1 = "";
    num2 = "";
    out.innerHTML = "";
})


function GetNums() {
    for(var i = 0; i < 10; i++)
        nums.push(document.getElementById("b" + i));
}

keys.forEach(function(key){
    key.addEventListener('click', function(){
        if(op == "" && key.innerHTML != "="){
            num1 = num1 + key.innerHTML;
            out.innerHTML = num1;
            console.log(num1);
            temp = 0;
        }
        else if(op != "" && key.innerHTML != "="){
            if (temp == 0){
                out.innerHTML = "";
                temp = 1
            }
            if(temp == 1){
                num2 = num2 + key.innerHTML;
                out.innerHTML = num2;
            }
        }


        if(submit == 1)
            {
                if(op == "+"){
                    total = parseFloat(num1) + parseFloat(num2);
                    out.innerHTML = total;
                    console.log(total);
                }
                    
                else if(op == "-"){total = parseFloat(num1) - parseFloat(num2);
                    out.innerHTML = total;}
                    

                else if(op == "/"){
                    total = parseFloat(num1) / parseFloat(num2);
                    out.innerHTML = total;}
                    

                else if(op == "*"){total = parseFloat(num1) * parseFloat(num2);
                    out.innerHTML = total;
                    }
                    
                submit = 0;
                num1 = total;
                num2 = "";
                op = "";
            }
        
            

    })
})
