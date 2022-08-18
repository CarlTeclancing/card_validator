let card = document.getElementById('card').value
let Name = document.getElementById('name').value
let date = document.getElementById('date').value
let cv = document.getElementById('cv').value
let submit = document.getElementById('submit')

 checkInput = () => {
    if( (card == '') && (Name == '') && (date == '') && (cv == '')){
       let errorMessage = document.getElementsByName('small')
       errorMessage = ''
       errorMessage.InnerText = 'error fill all elements'
       errorMessage = errorMessage
       console.log(errorMessage)
    }
    else{
        console.log('good check out');
    }
}