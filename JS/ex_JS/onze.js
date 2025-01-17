const anoBissexto = (ano) =>{

    if ( ( ano % 4 == 0 && ano % 100 != 0 ) || (ano % 400 == 0) ) { 
        console.log(ano + ' é bissexto'); 
    } else {
        console.log(ano + ' não é bissexto');
    }
}

anoBissexto(4);
anoBissexto(12);
anoBissexto(13);
anoBissexto(100);
anoBissexto(400);
anoBissexto(2000);