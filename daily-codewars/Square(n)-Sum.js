function squareSum(numbers){
var result = 0;
for(i = 0; i < numbers.length; i++){
result = result + Math.pow(numbers[i], 2)
}
return result
}
