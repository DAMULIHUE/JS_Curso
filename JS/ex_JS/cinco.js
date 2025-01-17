const aroundTheWorld = (numb) => {
    const numbFixed = Number.parseFloat(numb).toFixed(2); 
    const numbString = numbFixed.toString();
    console.log(`$${numbString.replace('.', ',')}`)
}

aroundTheWorld(124572390.1234);