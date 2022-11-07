//Homework


function whatIsYourName () {
    let name = prompt('Введите ваше имя', 'Имя')
    let msg = prompt('Как вас зовут?', 'Имя')
    if (msg == name) {
        alert('Привет ' + name);
    }else{
        alert('Введите имя');
    }  
};

whatIsYourName ()
