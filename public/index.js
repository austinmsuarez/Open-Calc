
calculation_stack = [];

current = 0;
is_float = false;
is_neg = false;
is_float = false;
function append(number){
    current = document.getElementsByClassName("answer")[0].innerHTML;
    if(is_float){
        document.getElementsByClassName("answer")[0].innerHTML  = document.getElementsByClassName("answer")[0].innerHTML + number;
        current = document.getElementsByClassName("answer")[0].innerHTML;
    }
    else{
        current= parseInt(current);
        current *= 10; 
        current = Math.abs(current) 
        current += number;
    
        if(is_neg){
            current*=-1;
        }
        
        document.getElementsByClassName("answer")[0].innerHTML = current;
    }

};

function changeTheme($event){
    
    if(event.srcElement.innerHTML === "Default"){
        sheet = "default.css"
        document.getElementById("default-style-button").style.backgroundColor= "darkorange";  
        document.getElementById("dark-style-button").style.backgroundColor= "whitesmoke";  
        document.getElementById("light-style-button").style.backgroundColor= "whitesmoke";  

        document.getElementById("default-style-button").style.color= "white";  
        document.getElementById("dark-style-button").style.color= "black";  
        document.getElementById("light-style-button").style.color= "black";  
    }
    else if(event.srcElement.innerHTML === "Dark"){
        sheet = "dark.css"
        document.getElementById("default-style-button").style.backgroundColor= "whitesmoke";  
        document.getElementById("dark-style-button").style.backgroundColor= "cadetblue";  
        document.getElementById("light-style-button").style.backgroundColor= "whitesmoke";  

        document.getElementById("default-style-button").style.color= "black";  
        document.getElementById("dark-style-button").style.color= "white";  
        document.getElementById("light-style-button").style.color= "black";  

    }else{
        sheet = "light.css"
        document.getElementById("default-style-button").style.backgroundColor= "whitesmoke";  
        document.getElementById("dark-style-button").style.backgroundColor= "whitesmoke";  
        document.getElementById("light-style-button").style.backgroundColor= "#e52e60";  

        document.getElementById("default-style-button").style.color= "black";  
        document.getElementById("dark-style-button").style.color= "black";  
        document.getElementById("light-style-button").style.color= "white";  
    }
    document.getElementById("theme-style-sheet").setAttribute("href", "./styles/"+sheet);  
}


function performOperation(){
    while(calculation_stack.length){
        x  = calculation_stack.pop();
        switch(x){
            case '+': 
                    y = calculation_stack.pop()
                    console.log(y)
                    console.log(current)
                    current = parseFloat(current) + y;
                    console.log(current)
                break;
            case '-':
                    current = calculation_stack.pop()-current;
                break;
            case 'X':
                    current *= calculation_stack.pop();
                break;
            case '/':
                    current = calculation_stack.pop()/current;
                break;
            case '%':
                    current = calculation_stack.pop()/100;
                break;
        }
    }
    console.log(current)
    if(is_float){
        document.getElementsByClassName("answer")[0].innerHTML = parseFloat(current).toPrecision(4);
    }
    else{
        document.getElementsByClassName("answer")[0].innerHTML = parseFloat(current);

    }

}

/* sign operators */
function clearCurrent(){
    current=0;
    is_neg = false;
    document.getElementsByClassName("answer")[0].innerHTML = current;
}
//fix issues with creating decimal point numbers
function makeFloat(){
    if(!is_float){
        document.getElementsByClassName("answer")[0].innerHTML = String(current+'.');
        is_float = true;
    }

}

function signChange(){
    current *= -1;
    is_neg = !is_neg;
    document.getElementsByClassName("answer")[0].innerHTML = current;
}

function operate($event){
    if(is_float){
        calculation_stack.push(parseFloat(current))
    }
    else{
        calculation_stack.push(current)
    }
    clearCurrent();
    calculation_stack.push(event.srcElement.innerHTML)
}