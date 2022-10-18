var numbers = prompt('all-numbers');
numbers = parseInt(numbers * 100);
numbers = numbers / 100;
console.log(numbers);

var a = prompt('anythings');
a = parseFloat(a);
a = a.toFixed(2);
// 위에 과정을 toFixed로 바로 계산될 수 있다. (반올림해줌) //
// parseFloat는 주어진 값을 필요한 경우 string으로 변환한 후 실수로 반환시켜준다. => 다시 말해 string값을 실수인 number값으로 알려준다. //
// 주어진 값의 첫 글자를 숫자로 변환할 수 없는 경우 NaN을 반환시킨다. //
console.log(a);

var b = prompt('number_one');
var c = prompt('number_two');
var d = b / c;
c = parseInt(c);
var d = b - (c * d);
console.log(d);

console.log(b % c);