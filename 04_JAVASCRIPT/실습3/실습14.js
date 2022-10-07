let sum = 0;
for (n = 1; n < 100; n++) {
    if (n % 2 == 0 || n % 3 == 0){
        sum = sum + n;
    }
}
console.log(`2또는 3의 배수의 총합은 ${sum}입니다`);

console.log('======================================================================');


for (i = 2; i <= 9; i++) {
    
    console.log(`${i}단`);
    for(n=1; n <= 9; n++){
       console.log(`${i} x ${n} = ${i*n}`);
    }
}