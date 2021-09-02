const obj1={
    a:1
}

const obj2={
    a:2
}

function bindThis_1(f, oTarget) {
    return function(){
        return f.apply(oTarget,arguments)
    }
}

function bindThis_2(f,oTarget){
    return f.bind(oTarget)
}


function bindThis(f,oTarget){
    return function(){
        return f.call(oTarget,...arguments)
    }
}


