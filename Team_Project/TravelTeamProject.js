function changeThema (){
    $('.themaGrims').addClass('hidden')
    $('.themaFoods').removeClass('hidden')
    $('.themBtn').addClass('cliBtn')
    $('.foodBtn').removeClass('cliBtn')
    
}

function changeFood (){
    $('.themaFoods').addClass('hidden')
    $('.themaGrims').removeClass('hidden')
    $('.foodBtn').addClass('cliBtn')
    $('.themBtn').removeClass('cliBtn')
    
}

$('.nickForm').submit(function(e){
    e.preventDefault();
    let nickVal = $('.nickInput').val();

    $('.nickInput').val('');

    $('.nickDiv').addClass('hidden')

    $('.welcDiv').removeClass('hidden')

    $('.welcDiv').text(`환영합니다 ${nickVal}님`)
    console.log(nickVal);
})