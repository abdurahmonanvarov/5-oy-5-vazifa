const form = document.getElementById('form');
const vj = document.getElementById('vj'); 
const rathod = document.getElementById('rathod'); 
const number = document.getElementById('number'); 
const emile = document.getElementById('emile'); 
const password = document.getElementById('password'); 
const password2 = document.getElementById('password2'); 
const chec = document.getElementById('chec'); 
const button = document.getElementById('button');
const block = document.getElementById('block');

function validator(){
    if(vj.value.length < 3){
        alert('Bunday qiymatdagi VJ mavjuda emas');
        vj.focus();
        vj.style.outlineColor = 'red';
        return false;
    }

    if(rathod.value.length < 6){
        alert('Bunday qiymatdagi RETHOD mavjuda emas');
        rathod.focus();
        rathod.style.outlineColor = 'red';
        return false;
    }

    if(number.value.length <= 7 || number.value.length >=15){
        alert('Bunday qiymatdagi NUMBER mavjuda emas yana qayta yozin');
        number.focus();
        number.style.outlineColor = 'red';
        return false;   
    }

    if(emile.value.length <= 5 || emile.value.length >= 30){
        alert('Bunday qiymatdagi EMEIL mavjuda emas yana qayta yozin');
        emile.focus();
        emile.style.outlineColor = 'red';
        return false;
    }

    if(password.value.length <= 10){
        alert('paswordni mukammal bolishi uchun yana element kiriting');
        password.focus();
        password.style.outlineColor = 'red';
        return false;
    }
    
    if(password2.value.length <=10){
        alert('yuqoridagi codni yana qaytadan kiriting');
        password2.focus();
        password2.style.outlineColor = 'red';
        return false;
    }


    if(chec.value == true ){
        alert('Companya shrtlariga eozilik kiriting');
        chec.focus();
        chec.style.outlineColor = 'red';

        return false;
    }


    return true;
    
}

function createCard(user){
    let card = document.createElement('div');
    card.setAttribute('class', 'wrapper12');

    const nameElement = document.createElement('h2');
    nameElement.innerHTML = user.vj;
    card.appendChild(nameElement);

    const rathodElement = document.createElement('h2');
    rathodElement.innerHTML = user.rathod;
    card.appendChild(rathodElement);

    const numberElement = document.createElement('h2');
    numberElement.innerHTML = user.number;
    card.appendChild(numberElement);

    const emileElement = document.createElement('h2');
    emileElement.innerHTML = user.emile;
    card.appendChild(emileElement);

    const passwordElement = document.createElement('h2');
    passwordElement.innerHTML = user.password;
    card.appendChild(passwordElement);

    const password2Element = document.createElement('h2');
    password2Element.innerHTML = user.password2;
    card.appendChild(password2Element);







    return card;

}


form && form.addEventListener('submit', function(event){
    event.preventDefault();
    const isValidat = validator();
    if(!isValidat){
        return;
    }

    const user = {
        vj: vj.value,
        rathod: rathod.value,
        number: number.value,
        emile: emile.value,
        password: password.value,
        password2: password2.value
    }

    let card = createCard(user);
    block.appendChild(card)
    

})









