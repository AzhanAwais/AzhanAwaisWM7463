// Chapter 38-42

//Task # 01

// function power(a,b)
// {
//     var result=1;
//     for(var i=1;i<=b;i++)
//     {
//         result=result*a;
//     }
//     document.write(result);
// }

// power(2,5);

//Task # 02

// function leapYear(year)
// {
//     if(((year % 4 == 0) && (year % 100!= 0)) || (year%400 == 0))
//       document.write("leap year");
//    else
//       printf("not a leap year");
// }

// leapYear(2016);

//Task # 03

// function calArea(a,b,c)
// {
//     var S=calculateS(a,b,c);
//     var area=S*(S-a)*(S-b)*(S-c);
//     document.write(area);
// }

// function calculateS(a,b,c)
// {
//     var S=(a+b+c)/2;
//     return S;
// }

// calArea(5,6,3);


//Task # 04

// function percentage(m1,m2,m3)
// {
//     var result=((m1+m2+m3)/300)*100;
//     return result;
// }

// function average(m1,m2,m3)
// {
//     var result=(m1+m2+m3)/3;
//     return result;
// }

// function main()
// {
//     var per=percentage(50,50,50);
//     var avg=average(50,50,50);

//     document.write(per+"%"+"<br>");
//     document.write(avg)+"<br>";
// }

// main()


//Task # 05

// function customIndexOf(char)
// {
//     var i=0;
//     var text="lorem ipsum ";
//     for(var i=0;i<text.length;i++)
//     {
//         if(text[i]===char)
//         {
//             return i;
//             break;
//         }
//     }
// }

// var ans=customIndexOf('r');
// document.write(ans);


//Task # 06

// function removeVowels()
// {
//     var remVowel="";
//     var text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem nobis perferendis, dolore alias consequatur quaerat quam autem ab velit suscipit inventore? Facere recusandae eaque velit maiores dicta perferendis error incidunt";
//     for(var i=0;i<text.length;i++)
//     {
//         if(text[i]!='a' && text[i]!='e' && text[i]!='i'&& text[i]!='o' && text[i]!='u')
//         {
//            remVowel+=text[i]; 
//         }
//     }
//     document.write(remVowel+"<br>");
   
// }

// removeVowels();


//Task # 07

// function countVowel()
// {
//     count=0;
//     var text="Pleases read this application and give me gratuity";
//     for(var i=0;i<text.length;i++)
//     {
//         if(isVowel(text[i]))
//         {
//             if(isVowel(text[i+1]))
//             {
//                 count++;
//             }
//         }
//     }
//     return count;
// }

// function isVowel(char)
// {
//     switch(char)
//     {
//         case 'A':
//         case 'E':
//         case 'I':
//         case 'O':
//         case 'U':
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             return 1;
//         default: 
//             return 0;
//     }
// }

// var ans=countVowel();
// document.write(ans);


//Task # 08

// var kilometer=+prompt("Enter Distance in Km");

// function meter(km)
// {
//     var met=km*1000;
//     document.write(km+" = "+met+" meter");
// }

// function feet(km)
// {
//     var feets=km*3281;
//     document.write(km+" = "+feets+" feets");

// }

// function inches(km)
// {
//     var inch=km*39370;
//     document.write(km+" = "+inch+" inches");
// }

// function centimeter(km)
// {
//     var cent=km*100000;
//     document.write(km+" = "+cent+" centimeter");
// }

// meter(kilometer);



//Task # 09

// function calOverTime(hours,salary)
// {
//     var overtime=hours-40;
//     if(hours<=40)
//     {
//         return salary;
//     }
//     else
//     {
//         overTimePay=overtime*12;
//         salary=salary+overTimePay;
//         return salary;
//     }
// }

// var ans=calOverTime(41,10000);
// document.write(ans);


// Task # 10

// var inp=prompt("Enter amount to withdraw");

// function giveCurrNotes(inp)
// {
//     count=0;
//     var parseStr=parseInt(inp[1]);
//     var parseStr2=parseInt(inp[0]);
//     for(var i=0;i<inp.length;i++)
//     {
//         count++;
//     }
//     if(count===3)
//     {
//         document.write(inp[0]+" hundred notes ");
//         if(inp[1]==='5')
//         {
//             document.write("<br>1 fifty notes ");
//             document.write("<br>"+inp[2]+" coins");
//         }
//         else if(inp[1]==='1')
//         {
//             document.write("<br>1 ten notes ");
//             document.write("<br>"+inp[2]+" coins");

//         }
//         else if(inp[1]>5)
//         {
//             document.write("<br>1 fifty notes <br>");
//             var r=parseStr-5;
//             document.write(r+" ten notes ");
//             document.write("<br>"+inp[2]+ "coins ");

//         }
//         else if(inp[1]<5 && inp[1]>=1)
//         {
//             var r=inp[1];
//             document.write(r+" ten notes "+"<br>");
//             document.write("<br>"+inp[2]+" coins");

//         }
//         else if(inp[1]===0){
//             document.write(" ");
//             document.write("<br>"+inp[2]+" coins");
//         }
//     }
//     else if(count===2)
//     {
//         if(inp[0]==='5')
//         {
//             document.write("<br>1 fifty notes <br>");
//             document.write("<br>"+inp[1]+" coins");

//         }

//         else if(parseStr2>5)
//         {
//             document.write("<br>1 fifty notes <br>");
//             var r=parseStr2-5;
//             document.write(r+" ten notes <br>");
//             document.write("<br>"+inp[1]+" coins");

//         }
//         else if(inp[0]==='1')
//         {
//             document.write("<br>1 ten notes <br>");
//             document.write("<br>"+inp[1]+" coins");

//         }
//         else if(parseStr2>1)
//         {
//             document.write(parseStr2+" ten notes <br>");
//             document.write("<br>"+inp[1]+" coins");

//         }

//     }
//     else if (count===1)
//     {
//         document.write("<br>"+inp[0]+" coins");
//     }
// }

// giveCurrNotes(inp);


// Chapter 43-48

// Task # 01

function callAlert()
{
    alert("Hello");
}

// Task # 02

function callAlert()
{
    alert("Mobile");
}


// Task # 03

// function removeBtn(id)
// {
//     if(id==='btn1')
//     {
//         var row=document.getElementById('row1');
//         row.style.visibility="hidden";
//     }
//     if(id==='btn2')
//     {
//         var row=document.getElementById('row2');
//         row.style.visibility="hidden";
//     }
//     if(id==='btn3')
//     {
//         var row=document.getElementById('row3');
//         row.style.visibility="hidden";
//     }
//     if(id==='btn4')
//     {
//         var row=document.getElementById('row4');
//         row.style.visibility="hidden";
//     }
// }


// Task # 04

// function changePic()
// {
//     var img=document.getElementById('img1');
//     img.src="img4.jpg";
// }

// function prevPic()
// {
//     var img=document.getElementById('img1');
//     img.src="img3.jpg";
// }


// Task # 04

// var count=0;

// function increment()
// {
//     var c=document.getElementById('inc');
//     var h1=document.getElementById('countH1');
//     var plus=count++;
//     h1.innerHTML=plus;
// }

// function decrement()
// {
//     var c=document.getElementById('dec');
//     var h1=document.getElementById('countH1');
//     count--;
//     h1.innerHTML=count;
// }





// Chapter 49-52

//Task # 01

// function showData()
// {
//     var name=document.getElementById('name').value;
//     var email=document.getElementById('email').value;
//     var age=document.getElementById('age').value;
//     var text="Name : "+name+"<br> Email"+email+"<br> Age"+age;

//     document.getElementById("myDiv").innerHTML = text;

// }


//Task # 02

// function readMore()
// {
//     var text=document.getElementById('p1').innerHTML;
//     text+="error sed odio commodi voluptatum officiis possimus vero nobis dolore nesciunt impedit saepe assumenda laudantium!";

//     document.write(text);
// }


// Chapter 58-67
 
// Task # 01

// 1
// var assignedId=document.getElementById('main-content');


// 2
// var content=document.getElementById('main-content');
// for(var i=0;i<content.childNodes.length;i++)
// {
//     console.log(content.childNodes[i]);
// }


// 3
// var allItem=document.getElementsByClassName('render');
// document.write(allItem.innerHTML);


// 4
// var val=document.getElementById('first-name');
// val.value="Muhammad Azhan"


// 5

// var lname=document.getElementById('last-name');
// var email=document.getElementById('email');
// lname.value="Muhammad Azhan"
// email.value="azhan@gmail.com"


// Task # 02

// 1

// var element=document.getElementById('form-content');
// console.log(element.nodeType);

// 2

// var element=document.getElementById('lastName');
// console.log(element.nodeType);
// for(var i=0;i<element.childNodes.length;i++)
// {
//     console.log(element.childNodes[i]);
// }


// 4

// var e=document.getElementById('main-content');
// console.log(e.firstChild);
// console.log(e.lastChild);


// 5

// var e=document.getElementById('lastName');
// console.log(e.nextSibling);
// console.log(e.previousSibling);


// 6

// var e=document.getElementById('email');
// console.log(e.parentNode);
// console.log(e.nodeType);
