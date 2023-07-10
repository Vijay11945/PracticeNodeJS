

var arr =['apple','oranges','','mango','','lemon'];

arr.map(function(element,index,array)

{

  if(element='')

  {

    console.log("empty string");

  }

  else

  {

    console.log(element);

  }

});

let modifiedArr = arr.map(function(element){

    if(element=='')

    {

        return 'empty string';

    }

    else

    {

        return element;

    }

});

console.log(modifiedArr);

const obj1 = {'key1': 1}

const obj2 = { ...obj1}
if(obj2.value === obj1.value)
{
console.log('same objects')
}
else
{
console.log('different objects')
}
console.log(obj1)

console.log(obj2)

const obj3 = {'key1': 1 , 'key2' : 2}

const obj4 = { ...obj1, key1: 1000}

console.log(obj3)

console.log(obj4)