function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
function misollar() {
    let operator = rnd(1, 4);
    let son1 = rnd(100, 500);
    let son2 = rnd(1, 99);
    let xisoblang = null;

if (operator === 1){
    alert(`${son1} + ${son2} = ?`);
    xisoblang = Number(prompt('Javobni hisoblang '));
    if (son1 + son2 === xisoblang) {
        alert(`${son1} + ${son2} =${xisoblang} Togri`);
    } else {
        alert(`${son1} + ${son2} = notogri`);
    }
} else if (operator === 2){
    alert(`${son1} - ${son2} = ?`);
    xisoblang = Number(prompt('Javobni yozing'));
    if (son1 - son2 === xisoblang) {
        alert(`${son1} - ${son2} =${xisoblang} Togri`);

    } else {
        alert(` =notogri`);
    }
} else if (operator === 3){
    alert(`${son1} * ${son2} = ?`);
    xisoblang = Number(prompt('Javobni yozing'));
    if (son1 * son2 === xisoblang) {
        alert(`${son1} * ${son2} =${xisoblang} Togri`);

    } else {
        alert(` =notogri`);
    }
} else if (operator === 4){
    alert(`${son1} / ${son2} = ?`);
    xisoblang = Number(prompt('Javobni yozing'));
    if (son1 - son2 === xisoblang) {
        alert(`${son1} / ${son2} =${xisoblang} Togri`);

    } else {
        alert(` = notogri`);
    }
}
}
for (let i = 0; i < Infinity; i++) {
    misollar();
}