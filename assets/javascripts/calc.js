var obj = {
    inp : '0',
    out : '0',
    ope : '+',
    disp: '0'
}

function onButton(value){
    
    alert("hogehoge");
    
    console.log("a");
    if(!value.match(/[0-9]/)){
        if(value == '='){
            obj.ope = value;
            document.js.result.value  = calcResult(obj.ope, obj.out, obj.inp);            
        }

    }else if(value.match(/[0-9]/)){
        obj.inp = value;
        document.js.result.value = obj.disp;
    }
}

function calcResult(ope, out, inp){
    
    var in_number = parseInt(inp);
    var out_number = parseInt(out);
    var result = 0;
    switch(ope){
        case '+':
            result = in_number + out_number;
            break;
        default :
            break;
    }
    console.log("reslut : " + result)
    obj.disp = result;
    obj.inp = 0;
    obj.out = result;
    return result;
}
