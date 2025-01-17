const fatorial = (num) => {

    let nums = num-1;
    
    while(nums != 1){
        num *= nums;
        nums--;
    }

    console.log(num);
}

fatorial(2);
fatorial(4);
fatorial(8);
fatorial(10);