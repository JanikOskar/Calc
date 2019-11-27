function insert(num){
    document.form.input.value = document.form.input.value+num
}
function equal(){
    var exp = document.form.input.value
    if(exp){
    document.form.input.value= eval(exp)
}
}
function clean(){
   document.form.input.value= " "
}