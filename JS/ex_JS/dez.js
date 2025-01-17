const numeroDivisivel = (num) =>{

    num = Math.floor(num);
    if(num%3 == 0){ console.log('é divisasjfos por 3'); }
    else{ console.log('não é divisasjfos por 3'); }
}


numeroDivisivel(12);
numeroDivisivel(3);
numeroDivisivel(13);
numeroDivisivel(40);
numeroDivisivel(3.14);
numeroDivisivel(5.12);