$('.gachaBtn').click(function(){
    $('.gachagif').css('display','none');
    $('[id^=twt]').css('display','none');

    // 乱数作る
    const getRandomIntInclusive = function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
      }
    var ransu = getRandomIntInclusive(1,3);

    switch(ransu){
        case 1:
            $('#res1').fadeIn();
            $('#twt01').fadeIn();
            break;
        case 2:
            $('#res2').fadeIn();
            $('#twt02').fadeIn();
            break;
        case 3:
            $('#res3').fadeIn();
            $('#twt03').fadeIn();
            break;

    }
})
