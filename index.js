const userage = document.getElementById("userage");
const submit = document.getElementById("submit");
const systemresult = document.getElementById("systemresult");

let age;

submit.onclick = function(){

    age = userage.value;
    age = Number(age);

    if(age >= 100){
        systemresult.textContent = "You are a very old man.";
    }
    else if(age == 0){
        systemresult.textContent="You need to be born.";
    }
    else if(age >= 18){
        systemresult.textContent="Nice, you can join us.";
    }
    else if(age < 0){
        systemresult.textContent = "WTFf!! Do you owe anything to God?";
    }
    else{
        systemresult.textContent = "I'm sorry but you are too young.";
    }


}

