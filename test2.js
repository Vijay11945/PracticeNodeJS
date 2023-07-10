async function disp() {
    console.log('start');
    await promise();
    console.log('end');
}

function promise()
 {    
        for (var i = 97; i <= 101; i++) 
        {
            console.log(String.fromCharCode(i));
        }
  }
  disp();
