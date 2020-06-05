
 $('.gachaBtn').click(function(){
                $('.twitter-share-button').css('opacity','1.0');
                $('.gachagif').css('display','none');
                $('[id^=twt]').css('display','none');

    // 乱数作る
         const getRandomIntInclusive = function(min, max) {
         min = Math.ceil(min);
         max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
      }
                var ransu = getRandomIntInclusive(1,26);

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
        case 4:
                $('#res4').fadeIn();
                $('#twt04').fadeIn();
                break;
        case 5:
            $('#res5').fadeIn();
             $('#twt05').fadeIn();
              break;
        case 6:
                $('#res6').fadeIn();
                $('#twt06').fadeIn();
                break;
        case 7:
                    $('#res7').fadeIn();
                    $('#twt07').fadeIn();
                    break;

        case 8:
                    $('#res8').fadeIn();
                    $('#twt08').fadeIn();
                    break;

        case 9:
            $('#res9').fadeIn();
            $('#twt09').fadeIn();
            break;

        case 10:
                $('#res10').fadeIn();
                $('#twt10').fadeIn();
                break;
        case 11:
                    $('#res11').fadeIn();
                    $('#twt11').fadeIn();
                    break;

        case 12:
                    $('#res12').fadeIn();
                    $('#twt12').fadeIn();
                    break;
        case 13:
                        $('#res13').fadeIn();
                        $('#twt13').fadeIn();
                        break;
        case 14:
                            $('#res14').fadeIn();
                            $('#twt14').fadeIn();
                            break;
        case 15:
             $('#res15').fadeIn();
            $('#twt15').fadeIn();
             break;
        case 16:
                $('#res16').fadeIn();
                $('#twt16').fadeIn();
                break;
        case 17:
                    $('#res17').fadeIn();
                    $('#twt17').fadeIn();
                    break;
        case 18:
                        $('#res18').fadeIn();
                        $('#twt18').fadeIn();
                        break;
        case 19:
                            $('#res19').fadeIn();
                            $('#twt19').fadeIn();
                            break;
        case 20:
                                $('#res20').fadeIn();
                                $('#twt20').fadeIn();
                                break;
        case 21:
                $('#res21').fadeIn();
                $('#twt21').fadeIn();
                break;
        case 22:
                $('#res22').fadeIn();
                $('#twt22').fadeIn();
                break;
        case 23:
                $('#res23').fadeIn();
                $('#twt23').fadeIn();
                break;
        case 24:
                $('#res24').fadeIn();
                $('#twt24').fadeIn();
                break;
        case 25:
                $('#res25').fadeIn();
                $('#twt25').fadeIn();
                break;
        case 26:
                $('#res26').fadeIn();
                $('#twt26').fadeIn();
                break;
                


    }
})

