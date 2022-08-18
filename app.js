let card = document.getElementById('card').value
let Name = document.getElementById('name').value
let date = document.getElementById('date').value
let cv = document.getElementById('cv').value
let submit = document.getElementById('submit')

let Sub = document.getElementById('submit')
Sub.addEventListener('click', function(){
    if( (card == '') || (Name == '') || (date == '') || (cv == '')){
        let errorMessage = 'error fill all elements'
        document.getElementsByName('small').innerText = errorMessage;
        console.log(errorMessage)
     }
     else{
         console.log('good check out');
     }
})