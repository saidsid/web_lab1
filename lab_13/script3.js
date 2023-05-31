

let calculateSalary = function (many) {
    let nalog = 0.35
    if (many >= 100000){
        nalog = 0.45;

    return Math.round(many * (1-nalog));
    }
}

let as = prompt("Введите зарплату") 
let den = calculateSalary(as)
alert(`чистая зарплата: ${den}`)
