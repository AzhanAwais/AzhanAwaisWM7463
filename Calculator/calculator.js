function setTextFiledValue(num)
{
    var text=document.getElementById('textfield');
    text.value +=num;
}

function RemoveAndsetTextFiledValue(num)
{
    var text=document.getElementById('textfield');
    text.value =num;
}

function calculateEquation()
{
    var text=document.getElementById('textfield');
    var answer=eval(text.value);
    text.value = answer;
}

function RemoveChar()
{
    var text=document.getElementById('textfield');
    var len=text.value.length;
    var AfterRemove=text.value.slice(0,len-1);
    text.value=AfterRemove;
}

function clears()
{
    var text=document.getElementById('textfield');
    text.value=" ";
}


function calculateRoot()
{
    var num=document.getElementById('textfield').value;
    var ans=Math.sqrt(parseInt(num));
    RemoveAndsetTextFiledValue(ans);
}

function calSquare()
{
    var num=document.getElementById('textfield').value;
    var ans=parseInt(num*num);
    RemoveAndsetTextFiledValue(ans);
}
