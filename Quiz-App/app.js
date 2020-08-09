var questions=[
    {
        question:"what is the capital of Turkey?",
        answer:"Ankara",
        option:["Ankara","Istanbul","Izmir","Konya"]
    },

    {
        question:"what is the largest rainforest of the world?",
        answer:"Amazon",
        option:["Congo ","Daintree ","Amazon","Monteverde"]
    },
    
    {
        question:"Total number of continent in the world?",
        answer:"7",
        option:["5","7","8","6"]
    },

    {
        question:"what is the capital of China?",
        answer:"Beijing",
        option:["Tianjin","Shanghai","Beijing","Chongqing"]
    },

    {
        question:"Largest ocean in the world?",
        answer:"Pacific Ocean",
        option:["Atlantic Ocean","Pacific Ocean","Arctic Ocean","Indian Ocean"]
    },
];


var count=0;
var countHeading=1;
var quesHeading=document.getElementById('quesHeading');
quesHeading.innerHTML="Question "+countHeading;

var qusetion=document.getElementById('question');
qusetion.innerHTML=questions[count].question;


var r1=document.getElementById("r1");
var r2=document.getElementById("r2");
var r3=document.getElementById("r3");
var r4=document.getElementById("r4");


r1.innerHTML=questions[count].option[0];
r2.innerHTML=questions[count].option[1];
r3.innerHTML=questions[count].option[2];
r4.innerHTML=questions[count].option[3];




function removeBegColor()
{
    document.getElementById("r1").style.backgroundColor="white";
    document.getElementById("r2").style.backgroundColor="white";
    document.getElementById("r3").style.backgroundColor="white";
    document.getElementById("r4").style.backgroundColor="white";
}

function noChange(a,b,c)
{
    var f1=document.getElementById(a);
    var f2=document.getElementById(b);
    var f3=document.getElementById(c);

    f1.style.backgroundColor="white";
    f2.style.backgroundColor="white";
    f3.style.backgroundColor="white";
}

var score=0;
var text="";
var ans="";

function setActive(e)
{
    if(e=='r1')
    {
        var para=document.getElementById(e);
        para.style.backgroundColor="yellow";
        noChange("r2","r3","r4");
        text=para.innerHTML;
        ans=questions[count].answer;
    }
    else if(e=='r2')
    {
        var para=document.getElementById(e);
        para.style.backgroundColor="yellow";
        noChange("r1","r3","r4");
        text=para.innerHTML;
        ans=questions[count].answer;
    }
    else if(e=='r3')
    {
        var para=document.getElementById(e);
        para.style.backgroundColor="yellow";
        noChange("r1","r2","r4");
        text=para.innerHTML;
        ans=questions[count].answer;
    }
    else if(e=='r4')
    {
        var para=document.getElementById(e);
        para.style.backgroundColor="yellow";
        noChange("r1","r2","r3");
        text=para.innerHTML;
        ans=questions[count].answer;
    }

}

function calResult(text,answer)
{
    if(text===answer && text!=null && text!="")
    {
        score++;
    }
}


function showQuestionHeading()
{
    if(countHeading>=5)
    {
        document.getElementById("btn-next").style.visibility="hidden";
        calResult(text,ans);
        showPassMessage(score);
    }
    else
    {
        count++;
        countHeading++;
        var quesHeading=document.getElementById('quesHeading');
        quesHeading.innerHTML="Question "+countHeading;

        var question=document.getElementById('question');
        question.innerHTML=questions[count].question;

        var r1=document.getElementById("r1");
        var r2=document.getElementById("r2");
        var r3=document.getElementById("r3");
        var r4=document.getElementById("r4");

    
        r1.innerHTML=questions[count].option[0];
        r2.innerHTML=questions[count].option[1];
        r3.innerHTML=questions[count].option[2];
        r4.innerHTML=questions[count].option[3];

        removeBegColor();

        calResult(text,ans);
    }
    
}


function showPassMessage(score)
{
    document.getElementById("cardrem").innerHTML="";
    document.getElementById("DivshowOnPass").style.visibility="initial";
    if(score>=3)
    {
        var heading=document.getElementById("headingPassOrFail");
        var scoring=document.getElementById("showMarks");
    
        heading.innerHTML="Congratulation! You Pass The Exam";
        scoring.innerHTML="Your Score : "+score;
    }
    else
    {
        var heading=document.getElementById("headingPassOrFail");
        var scoring=document.getElementById("showMarks");
    
        heading.innerHTML="Try Again! You Fail To Pass The Exam";
        scoring.innerHTML="Your Score : "+score;
    }
  
}