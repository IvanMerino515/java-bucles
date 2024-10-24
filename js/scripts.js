

// - Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0\.

const countDown = numbers =>{
    for (let counter = numbers; counter>=0; counter --){
        console.log(counter);

    }


}

countDown (7)

// - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.  

const arrayPlus = numbers => {
    let plus = 0; 

    for (const number of numbers) { 
        plus += number; 
    }

    console.log(plus); 
}

arrayPlus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10\. Para el 4 el resultado debe ser:  

    const arrayMultiply = numbers =>{
        for(let counter = 0; counter < 10 ; counter++){
            console.log(`${numbers} x ${counter} = ${numbers * counter}`)

        }
    }
        arrayMultiply (8);


// -Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser:  

    const arrayMultiplyInverse = numbers =>{
        for(let counter =10; counter >=0; counter--){
            console.log(`${numbers} x ${counter} = ${numbers*counter}`)
        }

    }
        arrayMultiplyInverse (4)

// - Crea una función que reciba el año actual y tu edad, la función debe imprimir:  

    const ageAndYear = (numbers) =>{
        const year = numbers [0];
        const age = numbers [1];

        const yearBorn = year - age; 
            console.log("Naciste en el año: " + yearBorn)
        
        for(let counter = 0; counter <= age; counter ++){
            console.log("En el año " + (yearBorn + counter) + " cumpliste " + counter + " años");


        }
            
        
    }

    ageAndYear([2024,34]);

// - Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12\.  

    const TwoNumbers = (numbers) => {;
        const number1 = numbers [0];
        const number2 = numbers [1];

        for ( let counter = number1; counter <= number2; counter++){
            if (counter % 2 ===0)
                console.log(counter)
            
        }
        }

        TwoNumbers ([11,41]);

    // Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays.  


    const arrayRandom = (array1) => {
        const array2 = [];
    
        for (let counter = 0; counter < 5; counter++) {
            array1.push(Math.floor(Math.random() * 100)); 
        }
            console.log("Array 1: ", array1);
    
        for (let counter = 0; counter < 5; counter++) {
            array2.push(Math.floor(Math.random() * 100));
        }

            console.log("Array 2: ", array2);
    
        const repeatNumbers = [];
        for (let number of array1) {
            if (array2.includes(number) && ! repeatNumbers.includes(number)) {
                repeatNumbers.push(number);
            }
        }
    
        if (repeatNumbers.length > 0) {
            console.log(repeatNumbers + " " + " son repetidos");
        } 
        }
    
    
    const array1 = [];
    arrayRandom(array1);
    