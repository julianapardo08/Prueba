// var arrayBooleans = [true,false,true].length();
// var filtrar = arrayBooleans.filter(function(x){
//     var number = x == true;
//     return number;
// });
// console.log(filtrar);

function countTrue(){
    cont = 0;
    var array = [true,true,false,true,true,false,false,true,true,false,true,true,true,true,false,false,false];
    for(var i = 0;i<array.length;i++){
        if(array[i] == true){
            var cont = cont + 1
        }
    }
    console.log(`En el arreglo existen ${cont} "True".`)
}

countTrue();
