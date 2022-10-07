let no_1 = 1
let no_2 = 2
let no_3 = 3
console.log(`no_1 = ${no_1}`)
console.log(`no_2 = ${no_2}`)
console.log(`no_3 = ${no_3}`)

function add(a, b, c) {
    ans=(a+b+c);
    console.log(`no_1 + no_2 + no_3 = ${ans}`);
    // alert(ans);
}

function sub(a, b) {
    ans2=parseInt(a-b);
    console.log(`no_1-no_2 = ${ans2}`);
    // alert(ans2);
}

function divide(a, b) {
    ans3=(a/b);
    console.log(`no_1/no_2 = ${ans3}`);
    // alert(ans3);
}

function mul(a, b) {
    ans4=(a*b);
    console.log(`no_1 * no_2 = ${ans4}`);
    // alert(ans4);
}



add(no_1, no_2, no_3)
sub(no_1, no_2)
divide(no_1, no_2)
mul(no_1, no_2)

