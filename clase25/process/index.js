process.on('exit', code => {
    console.log(code);
    console.log('Justo antes de salir del proceso');
});

process.on('uncaughtException', code => {
    console.log('Atrapa excepciones no controladas');
});

process.on('message', code => {
    console.log('mensaje de otro proceso');
});

function listNumbers(numbers) {
    const numberTypes = numbers.map((number) => typeof(number));
    for(numberType of numberTypes) {
        if(numberType != 'number') {
            process.exit(-4)
        }
    }
    console.log(numberTypes);
}

listNumbers([1,2,3]);