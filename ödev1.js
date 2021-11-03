//Soru-1 : JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.
function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let flag = 1;
        for (let j = 2; j <= numbers[i]/2; j++) {
            if(numbers[i] % j === 0){
                console.log(numbers[i] + " sayısı asal bir sayı değildir.");
                flag = 0;
            }
        }
        if(flag == 1){
            console.log(numbers[i] + " sayısı asal bir sayıdır.");
        }
    }
}
findPrime(301, 5, 12, 50, 71 ,90);

//Soru-2 : Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
function findFriendlyNumbers(number1, number2) {
    let sumOfnumber1Divisors = 0;
    let sumOfnumber2Divisors = 0;
    
    for (let i = 1; i < number1; i++) {
        if(number1 % i === 0){
            sumOfnumber1Divisors = sumOfnumber1Divisors + i;
        }
    }

    for (let i = 1; i < number2; i++) {
        if(number2 % i === 0){
            sumOfnumber2Divisors = sumOfnumber2Divisors + i;
        }
    }

    if(sumOfnumber2Divisors === number1 && sumOfnumber1Divisors === number2){
        console.log(number1 + " ve " + number2 + " arkadaş sayılar")
    }
    else{
        console.log(number1 + " ve " + number2 + " arkadaş sayı değiller")
    }
}
findFriendlyNumbers(220,284);

//Soru-3 : 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
console.log("Mükemmel sayılar:");
for (let i = 1; i <= 1000; i++) {
    let divisorOfNumber = 0;
    for (let j = 1; j < i; j++) {
        if(i % j === 0){
            divisorOfNumber = divisorOfNumber + j;
        }
    }

    if(divisorOfNumber === i){
        console.log(i);
    }
}

//Soru-4 : 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
console.log("Asal sayılar: ");
for (let i = 2; i <= 1000; i++) {
    let flag2 = 1;
    for (let j = 2; j <= i/2 ; j++) {
        if(i % j === 0){
            flag2 = 0;
            break;
        }
    }
    if(flag2 === 1){
        console.log(i);
    }
}
