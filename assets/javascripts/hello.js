var obj = {
    inp : '0',
    out : '0',
    ope : '+',
}

function onButton(value){
    
    if(!value.match(/[0-9]/)){
        obj.ope = value;
        switch (obj.ope){
            case '+':
            obj.out = obj.inp + obj.out;
            break;
            case '-':
            obj.out = obj.inp - obj.out;
            break;
            case '×':
            obj.out = obj.inp * obj.out;
            break;
            case '÷':
            obj.out = obj.inp / obj.out;
            break;
        } 
    }else if(value.match(/[0-9]/)){
        obj.inp = value;
    }
    
    document.js.result.value = obj.out;
}

function calcResult(array){
    _.each(array, function(element, index, array) {
     console.log(element + ' : ' + index);
    });
    return 0;
}
