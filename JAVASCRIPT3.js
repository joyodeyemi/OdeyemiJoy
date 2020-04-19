var array = [];
function calculator(integer)
{
    for(i=1; i<=integer; i++)
    {
        if(i%2===0 && i%3===0 && i%5===0)
        {
        array.push("yu-gi-oh");
        }
         else if(i%3===0 && i%5===0)
        {
            array.push("gi-oh");
        }
         else if(i%2===0 && i%5===0)
        {
            array.push("yu-oh");
        }
         else if(i%2===0 && i%3===0)
        {
            array.push("yu-gi");
        }
        else  if(i%5===0)
        {
            array.push("oh");
        }
         else  if(i%3===0)
        {
           array.push("gi");
        }
         else  if(i%2===0)
        {
          array.push("yu");
        }
        else
        {
            array.push(i);
        }
    }
    console.log(array);

}
calculator(100);
