function appendvalue(value) {
    document.getElementById('display').value += value;
}

function clearvalue() {
    document.getElementById('display').value = '';
}

function resultvalue(){
    try{
           document.getElementById('display').value = eval(document.getElementById('display').value);
    }catch{
          document.getElementById('display').value = 'error';
    }
}
