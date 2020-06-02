$('.gacha').click(function(){
    // 乱数作る
    const getRandomIntInclusive = function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
      }
    var ransu = getRandomIntInclusive(1,3);

    switch(ransu){
        case 1:
            $('#res1').css('display','block' );
            break;
        case 2:
            $('#res2').css('display','block' );
            break;
        case 3:
            $('#res3').css('display','block' );
            break;

    }
})
