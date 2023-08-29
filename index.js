let numbers = []
const li = document.getElementById

const randomeNumberGenerator = () => {
    numbers = [];
    for (let i = 0; i < 4; i++) {
            numbers.push(Math.floor(Math.random() * 9) + 1)
    }
    console.log(numbers)

    document.getElementById("nr0").innerHTML = numbers[0]
    document.getElementById("nr1").innerHTML = numbers[1]
    document.getElementById("nr2").innerHTML = numbers[2]
    document.getElementById("nr3").innerHTML = numbers[3]
}

const sortNumbers = () => {
        numbers.sort();
        console.log(numbers);
        
        document.getElementById("nr1").innerHTML = numbers[0]
        document.getElementById("nr1").innerHTML = numbers[1]
        document.getElementById("nr2").innerHTML = numbers[2]
        document.getElementById("nr3").innerHTML = numbers[3]
}