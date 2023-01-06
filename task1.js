function generateSongText(number) {
    const bottle1 = 'бутылка'
    const bottle2 = 'бутылки'
    const bottle3 = 'бутылок'

    let song99bottles = function generateSingleStanza(number) {
        if(number === 1 || number === 21 || number === 31 ||number === 41 ||number === 51 || number === 61 ||number === 71 || number === 81 ||number === 91){
            console.log(`${number} ${bottle1} пива на стене
                ${number} ${bottle1} пива!
                Возьми одну, пусти по кругу
                ${number - 1} ${bottle3} пива на стене!`)
        }else if(number >= 3 && number <= 4 || number >= 23 && number <= 24 ||number >= 33 && number <= 34 ||number >= 43 && number <= 44 || number >= 53 && number <= 54 ||number >= 63 && number <= 64 ||number >= 73 && number <= 74 ||number >= 83 && number <= 84 ||number >= 93 && number <= 94) {
            console.log(`${number} ${bottle2} пива на стене
                ${number} ${bottle2} пива!
                Возьми одну, пусти по кругу
                ${number - 1} ${bottle2} пива на стене!`)
        }else if(number === 2 || number === 22 || number === 32 || number === 42 || number === 52 || number === 62 || number === 72 || number === 82 || number === 92){
            console.log(`${number} ${bottle2} пива на стене
                ${number} ${bottle2} пива!
                Возьми одну, пусти по кругу
                ${number - 1} ${bottle1} пива на стене!`)
        }else if(number === 5 || number === 25 || number === 35 || number === 45 || number === 55 || number === 65 || number === 75 || number === 85 || number === 95) {
            console.log(`${number} ${bottle3} пива на стене
                ${number} ${bottle3} пива!
                Возьми одну, пусти по кругу
                ${number - 1} ${bottle2} пива на стене!`)
        }else{console.log(`${number} ${bottle3} пива на стене
        ${number} ${bottle3} пива!
        Возьми одну, пусти по кругу
        ${number - 1} ${bottle3} пива на стене!`)
        }
    }
    for(i = 0; i < number; number--){
        song99bottles(number)
    }
    return song99bottles
}