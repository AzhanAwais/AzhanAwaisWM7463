// ************  Chapter 21-25  ************

//Task # 01 

// var fName=prompt("Enter first name : ");
// var lName=prompt("Enter last name : ");
// var fullName=fName+" "+lName;
// document.write("Hello !"+fullName);


//Task # 02

// var mobModel=prompt("Enter your favorite mobile phone model");
// var len=mobModel.length;
// document.write("My favourite phone is "+mobModel+"<br>"+"Length of string is : "+len);


//Task # 03

// var str="Pakistan";
// var index=str.indexOf("n");
// document.write("Index of n : "+index);


//Task # 04

// var str="Hello World";
// var index=str.lastIndexOf("l");
// document.write("Last Index of L : "+index);


//Task # 05

// var str="Pakistani";
// var index=str[3];
// document.write("Character at Index 4 is : "+index);


//Task # 06

// var fName=prompt("Enter first name : ");
// var lName=prompt("Enter last name : ");
// var fullName=fName.concat(" "+lName);
// document.write("Hello !"+fullName);


//Task # 07

// var city="Hyderabad";
// var replace="Islam";
// var getChar=city.slice(5);
// var FinalResult=replace.concat(getChar);
// document.write("City : "+city+"<br>");
// document.write("After Replacement : "+FinalResult+"<br>");


//Task # 08

// var message = "Ali and Sami are best friends. They play cricket and football together";
// var fMessage=message.replace(/and/g,"&");
// document.write("After Replacement : "+fMessage+"<br>");


//Task # 09

// var str="472";
// var num=parseInt(str);
// document.write("Value : "+str+"<br>");
// document.write("Type : "+typeof(str)+"<br>");
// document.write(num+"<br>");
// document.write("Type : "+typeof(num)+"<br>");


//Task # 10

// var a=prompt("Enter fruit name : ");
// var b=a.toUpperCase();
// document.write("User Input : "+a+"<br>");
// document.write("Upper Case : "+b+"<br>");


//Task # 11

// var a=prompt("Enter fruit name : ");
// var b=a.charAt(0).toUpperCase();
// var c=a.slice(1);
// document.write("User Input : "+a+"<br>");
// document.write("Upper Case : "+b+c+"<br>");


//Task # 12

// var num = 35.36 ;
// var num1=num.toString();
// var f=num1.replace(".","");
// document.write(f);


//Task # 13

// var name=prompt("Enter your name : ");
// for(var i=0;i<name.length;i++)
// {
//     var s=name.charCodeAt(i);
//     if(s===33 || s===44 || s===46 || s===64)
//     {
//         document.write("Saas");
//         break;
//     }
// }


//Task # 14

// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var inp=prompt("Search : ");
// var convertInput=inp.toLowerCase();
// var bool=true;

// for(var i=0;i<arr.length;i++)
// {
//     if(arr[i]===convertInput)
//     {
//         bool=true;
//         document.write(convertInput+" is found at index : "+i);
//         break;
//     }
//     else
//     {
//         bool=false;
//     }
// }

// if(bool===false)
// {
//     document.write(convertInput+" is not available in bakery");
// }


//Task # 15

// var pass=prompt("Enter your password : ");
// var firstChar=pass.charCodeAt(0);
// var len=pass.length;
// if(firstChar >=48 && firstChar <=57  )
// {
//     alert("Enter a valid password");
// }
// else if(len>6)
// {
//     alert("Enter a valid password");
// }
// else
// {
//     document.write("your password is : "+pass);
// }


//Task # 16

// var university = "University of Karachi";
// var arr=university.split('');
// for(var i=0;i<arr.length;i++)
// {
//     document.write(arr[i]+"<br>");
// }


//Task # 17

// var pass=prompt("Enter your name : ");
// var len=pass.length;
// document.write("last character of input : "+pass[len-1]);


//Task # 18

// var str="The quick brown fox jumps over the lazy  the dog";
// var count=0;
// var text="";

// for(var i=0;i<str.length;i++)
// {
//     if(str[i]===" ")
//     {
//         if(text==="the" || text==="The")
//         {
//             count++;
//             text="";
//         }
//         text="";
//     }
//     else
//     {
//         text=text+str[i];
//     }
// }

// document.write(count);



// ************  Chapter 26-30  ************

//Task # 01

// var num=+prompt("Enter a positive number : ");
// if(num<0)
// {
//     alert("please enter a positive number ")
// }
// else
// {
//     document.write("Number : "+num+"<br>");
//     document.write("Round off value : "+Math.round(num)+"<br>");
//     document.write("Floor value : "+ Math.floor(num)+"<br>");
//     document.write("Ceil value : "+Math.ceil(num)+"<br>");
// }


//Task # 02

// var num=+prompt("Enter a negative floating point number : ");
// if(num>0)
// {
//     alert("please enter a positive number ")
// }
// else
// {
//     document.write("Number : "+num+"<br>");
//     document.write("Round off value : "+Math.round(num)+"<br>");
//     document.write("Floor value : "+ Math.floor(num)+"<br>");
//     document.write("Ceil value : "+Math.ceil(num)+"<br>");
// }


//Task # 03

// var num=+prompt("Enter a negative floating point number : ");
// if(num>0)
// {
//     alert("please enter a positive number ")
// }
// else
// {
//     document.write("Number : "+num+"<br>");
//     document.write("Round off value : "+Math.round(num)+"<br>");
//     document.write("Floor value : "+ Math.floor(num)+"<br>");
//     document.write("Ceil value : "+Math.ceil(num)+"<br>");
// }


//Task # 04

// var num=+prompt("Enter a number : ");
// var convStr=num.toString();
// var str="";
// if(convStr[0]==="-")
// {
//     str=convStr.slice(1);
//     var nums=parseInt(str);
//     document.write("Absolute value of "+num+" is : "+nums);
// }
// else
// {
//     document.write("Absolute value of "+num+" is : "+num);
// }


//Task # 05

// var toss=Math.random()*2;
// var floorToss=Math.ceil(toss);
// if(floorToss===1)
// {
//     document.write("Random coin value : Tails");
// }
// else
// {
//     document.write("Random coin value : Heads");
// }


//Task # 06

// var rndNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
// document.write("Random number between 1-100 is : "+rndNumber);


//Task # 07

// var weight=prompt("Enter your weight : ");
// var w=weight.toLowerCase();
// var w1=weight.indexOf("k");
// if(w1===-1)
// {
//     document.write("Your weight is : "+weight+" kg");
// }
// else
// {
//     document.write("Your weight is : "+weight);
// } 


//Task # 08

// var secNum = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
// var Usernum=+prompt("Enter a number between 1-10 : ");
// if(Usernum===secNum)
// {
//     document.write("Congratulations ! You guess correct.");
// }
// else
// {
//     document.write("Try again !");
// }


// ************  Chapter 31-34  ************


// Task # 01

// var date=new Date();
// document.write(date);


// Task # 02

// var month=new Date();
// var arr=["January","February","March","April","May","June","July","August","September","October","November","December"];
// document.write("Current Month is : "+arr[month.getMonth()]);


// Task # 03

// var date=new Date();
// var arr=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
// var str=arr[date.getDay()];
// document.write("Today is : "+str.slice(0,3));


// Task # 04

// var date=new Date();
// var arr=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
// var str=arr[date.getDay()];
// if(str==="Saturday" || str==="Sunday")
// {
//     document.write("It's fun day");
// }


// Task # 05

// var date=new Date();
// var num=date.getDate();
// if(num<15)
// {
//     document.write("First fifteen days of the month");
// }
// else
// {
//     document.write("Last days of the month");
// }


// Task # 06
// ****************************
// var date=new Date(1970, 1, 1);
// var currDate = new Date();


// Task # 07

// var date=new Date();
// var hours = date.getHours();
// if(hours>000 && hours<=12)
// {
//     document.write("Am");
// }
// else
// {
//     document.write("Pm");
// }


// Task # 08

// var lastDay=new Date(2020, 11, 31);
// document.write(lastDay);


// Task # 09

// var date1 = new Date('4/29/2020');
// var date2 = new Date('6/18/2015');
// var diffTime = Math.abs(date2 - date1);
// var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
// document.write(diffDays + " days");


// Task # 10

// ******************


// Task # 11

// var date = new Date();
// document.write(date);
// var strDate=date.toTimeString();
// var getHours=strDate.slice(0,2);
// var getMin=strDate.slice(3,5);
// var getSec=strDate.slice(6,8);

// var befHours=parseInt(getHours)-1;
// date=new Date(2020, 5, 21, befHours,getMin,getSec);
// document.write("<br>1 hours ago, it was "+date);


// Task # 12
//**************


// Task # 13

// var age=+prompt("Enter your age : " );
// var date = new Date().toString();
// var Nowyear=date.slice(10,15);
// var birthYear=parseInt(Nowyear)-age;
// document.write("Your age is : "+age);
// document.write("<br>Your birth year is : "+birthYear);


// Task # 14

// document.write("<h1> Electricity Bill <h1>");
// var cName="Ali";
// var month="January";
// var Nounit=410;
// var chrgPerUnit=16;
// var latePayChrg=350;
// var netAmountPay=Nounit * chrgPerUnit;
// var grossAmountPay=netAmountPay + latePayChrg;

// document.write("Name : "+cName+"<br>");
// document.write("Month : "+month+"<br>");
// document.write("No of Unit : "+Nounit+"<br>");
// document.write("Charges per unit : "+chrgPerUnit+"<br>");
// document.write("Net Amount Payable (within Due Date) : "+Math.round(netAmountPay)+"<br>");
// document.write("Gross Amount Payable (after Due Date) : "+Math.round(grossAmountPay)+"<br>");



// Chapter 35-38

// Task # 01

// function currDate()
// {
//     document.write(new Date());
// }

// currDate();


// Task # 02

// function fullName(fname,lname)
// {
//     document.write(fname+" "+lname);
// }

// fullName("Azhan","Awais");


// Task # 03

// function add(n1,n2)
// {
//     sum=n1+n2;
//     return sum;
// }
// n1=+prompt("Enter first number : ");
// n2=+prompt("Enter second number : ");

// var s=add(n1,n2);
// document.write("Sum : "+s);


// Task # 04

// function cal(n1,n2,opr)
// {
//     if(opr==='+')
//     {
//         return n1+n2;
//     }
//     else if(opr==='-')
//     {
//         return n1-n2;
//     }
//     else if(opr==='*')
//     {
//         return n1*n2;
//     }
//     else if(opr==='/')
//     {
//         return n1/n2;
//     }
//     else if(opr==='%')
//     {
//         return n1%n2;
//     }
// }

// n1=+prompt("Enter first number : ");
// n2=+prompt("Enter second number : ");
// opr=prompt("Enter an operator : ");

// ans=cal(n1,n2,opr);
// document.write("Answer : "+ans);


// Task # 05

// function square(n1)
// {
//     return n1*n1;
// }
// var n1= 5;
// document.write("Square of  : "+n1+" is : "+square(n1));


// Task # 06

// function fact(n1)
// {
//     if(n1==0 || n1==1)
//     {
//         return 1;
//     }
//     else
//     {
//         return (n1*fact(n1-1));
//     }
// }
// var n1= 5;
// document.write("Square of  : "+n1+" is : "+fact(n1));


// Task # 07

// function count(s1,s2)
// {
//     for(var i=s1;i<=s2;i++)
//     {
//         document.write(i+"<br>");
//     }
// }

// s1=+prompt("Enter start number : ");
// s2=+prompt("Enter end number : ");
// count(s1,s2);


// Task # 08

// function hypo()
// {
//     function square(n1,n2)
//     {
//         return (n1**2)+(n2**2);
//     }
//     hypo.square=square;
//     var ansSquare= square(n1,n2);
//     var hypotenuse=Math.sqrt(ansSquare);
//     document.write("Hypotenuse : "+hypotenuse);
// }

// n1=+prompt("Enter base of right angle triangle : ");
// n2=+prompt("Enter perpendicular of right angle triangle: : ");
// hypo();
// hypo.square(2,2);


// Task # 09 (a)

// function area(width,height)
// {
//     return width*height;
// }
// width=+prompt("Enter width of rectangle : ");
// height=+prompt("Ente height of rectangle : ");
// a=area(width,height);
// document.write(a);


// Task # 09 (b)

// function area(width,height)
// {
//     return width*height;
// }
// a=area(2,2);
// document.write(a);


// Task # 10

// function palindrome(str)
// {
//     var inpStr=str;
//     var check="";
//     var len=inpStr.length-1;
//     for(var i=len;i>=0;i--)
//     {
//         check=check+inpStr[i];
//     }
//     if(inpStr===check)
//     {
//         document.write("palindrome ");
//     }
//     else
//     {
//         document.write("Not a palindrome ");
//     }
// }

// palindrome("madam");


// Task # 11

// function convertStr(str)
// {
//     var inpStr=str;
//     var len=inpStr.length;
//     var strings=inpStr[0].toUpperCase();
//     for(var i=1;i<len;i++)
//     {
//         if(inpStr[i]===" ")
//         {
//             strings=strings+" "+inpStr[i+1].toUpperCase();
//             i++;
//         }
//         else
//         {
//             strings=strings+inpStr[i];
//         }
//     }
//     document.write(strings);
// }
// convertStr("the quick brown fox");


// Task # 12

// function longWord(str)
// {
//     var arr=str.split(" ");
//     var word=arr[0];
//     for(var i=1;i<arr.length-1;i++)
//     {
//         if(word.length <= arr[i].length)
//         {
//             word=arr[i];
//         }
//     }
//     return word;
// }

// var word=longWord("Web Development Tutorial");
// document.write(word);


// Task # 13

// function occur(str,char)
// {
//     count=0;
//     for(var i=0;i<str.length;i++)
//     {
//         if(str[i]===char)
//         {
//             count++;
//         }
//     }
//     return count;
// }
// var letter=occur("Web Development Tutorial",'e');
// document.write(letter);


// Task # 14

// function calcCircumference(radius)
// {
//     var circum=2*3.14*radius;
//     document.write("The circumference is : "+circum+"<br>");
// }

// function calcArea(radius)
// {
//     var area=3.14*(radius*radius);
//     document.write("The Area is : "+area);
// }

// var radius=10;
// calcCircumference(radius);
// calcArea(radius);