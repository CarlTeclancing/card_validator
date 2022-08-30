let card = document.getElementById('card')
let Name = document.getElementById('name')
let date = document.getElementById('date')
let cv = document.getElementById('cv')
let submit = document.getElementById('submit')

let Sub = document.getElementById('submit')
Sub.addEventListener('click', function(){
    if( (card.value == '') || (Name.value == '') || (date.value == '') || (cv.value == '')){

        
        document.getElementById('error').style.display = 'inline';
        document.getElementById('error1').style.display = 'inline';
        document.getElementById('error2').style.display = 'inline';
        console.log('connection created sucefully' + errrorMessage);

     }
     else{
        document.getElementById('error').style.display = 'none';
        document.getElementById('error1').style.display = 'none';
        document.getElementById('error2').style.display = 'none'
        card.value = '';
        Name.value = '';
        date.value = '';
        cv.value = '';
        document.getElementById('right').style.display = 'none';
        document.getElementById('popup').style.display = 'flex';


         console.log('good check out');
     }
})

console.log('connection created sucefully')