//QuickSort
/*
Tiene un pivote, y empieza comparando por los 2 lados, el izquierdo y el derecha
 */
var array = [9, 2, 5, 6, 4, 3, 154, 7, 10, 1, 8, 11];
var counter = [[]];
function quickSort(arr, first, last)
{
   var i = first;
   var j = last;
   /* if(arr.length < 2) {
        return arr;
    } */
    var pivot = (arr[i] + arr[j]) / 2; //calculo el pivote
    while (i < j) //mientras que I sea menor que J
    {
        while(arr[i] < pivot) //Si el valor es menor al pivote
        {
            i+=1; //incrementamos el indice izquierdo
        }
        while(array[j] > pivot) //si el valor es mayor al pivote
        {
            j-=1; //decrementamos el indice derecho
        }
        if(i <= j) //si es menor o igual, se invierten los valores
        {
            var x = arr[j]; //temp
            arr[j] = arr[i];
            arr[i] = x;
            i+=1;
            j-=1;
        }
    }
        arr = (first < j) ? quickSort(arr, first, j) : arr;
        arr = (last > i) ? quickSort(arr, i, last) : arr;

    // devolvemos la lista ordenada
    return arr;
}

console.log(array);
console.log("QuickSort: " + quickSort(array,0,11));
console.log("BubbleSort: " + bubbleSort(array));
console.log("MergeSort: " + mergeSort(array));
console.log("RadixSort LSD: " + sortLSD(array, 3));



//Bubble Sort
/*
Una maravilla jaja, el clasico de los clasicos.
Realiza el ordenamiento de los valores haciendo comparaciones. Compara el valor actual contra el siguiente, si se cumple
la condicion, se intercambian los valores.
 */
function bubbleSort(arr)
{
    for (var i = 0; i < arr.length; i++)
    { //primer ciclo
        for (var j = 0; j < (arr.length - i - 1); j++)
        {
            if(arr[j] > arr[j+1])  //comparar valores e intercambiar
            {
                var tmp = arr[j];  //Variable temporal
                arr[j] = arr[j+1]; //intercambiamos la variable
                arr[j+1] = tmp; //remplazamos la variable
            }
        }
    }
    return arr;
}

//Merge Sort
/*
Divide el arreglo en pequeños arreglos, los ordena y se retorna en un solo arreglo nuevamente, ya ordenado.
 */
function mergeSort(arr)
{
    if (arr.length < 2)
        return arr;

    var middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
    var result = [];

    while (left.length && right.length)
    {
        if (left[0] <= right[0])
        {
            result.push(left.shift());
        }
        else
        {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}


/* Radix Sort
-LSD
-MSD
Es un algoritmo de ordenamiento el cual no hace comparaciones para ordenar los elementos(que loco).
Puede empezar desde el digito menos significativo o el digito mas significativo.
 */

//LSD

/*
Metodo para obtener el digito.
var getDigit = function(num,nth){
  // get last nth digit of a number
  var ret = 0;
  while(nth--){
    ret = num % 10
    num = Math.floor((num - ret) / 10)
  }
  return ret
}

var max = Math.floor(Math.log10(Math.max.apply(Math,list))); //Obtengo el numero de digitos del numero mas largo.
 */

function sortLSD(array, maxDigitSymbols) //El arreglo y el numero maximo de digitos
{
    var md = 10; //Variables para extraer el digito.
    var dv = 1;
    for (var i = 0; i < maxDigitSymbols; i++, dv *= 10, md *= 10) //recorro de digito en digito
    {
        for (var j = 0; j < array.length; j++) //recorro el arreglo
        {
            var bucket = parseInt((array[j] % md) / dv); //extraigo el digito
            if (counter[bucket] == null ) //verifico si esta vacia la posicion en el arreglo
            {
                counter[bucket] = [];
            }
            counter[bucket].push(array[j]); //coloco el numero al final del arreglo en posicion actual.
        }

        var pos = 0;
        for (var j = 0; j < counter.length; j++) //ciclo que recorre los elementos del nuevo arreglo
        {
            var value = null ;
            if (counter[j] != null ) //se compara si no esta vacia la posicion
            {
                while ((value = counter[j].shift()) != null )//mientras el arreglo no este vacio, se ejecuta el ciclo
                {
                    array[pos++] = value; //inserto la nueva lista con los valores ordenados
                }
            }
        }
    }
    return array;
}
