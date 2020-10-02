name=prompt("Enter your name : ");
// set name of user in header

var ownerName=document.getElementById('owner');
owner.innerHTML=name;


// save message in database

function sendMessage()
{
    var textKey=firebase.database().ref('message').push().key;
    var textMessage=document.getElementById('text');

    var messsageObj={
        userName:name,
        messagekey:textKey,
        text:textMessage.value
    };

    firebase.database().ref('message').child(textKey).set(messsageObj);
    textMessage.value="";
}


function createRightLiNode(userName, textMessage, msgkey)
{
    var li=document.createElement('li');
    var liText=document.createTextNode(userName+" : "+textMessage);
    li.appendChild(liText);
    li.setAttribute('class','msgright');
    li.setAttribute('id',msgkey);
    li.setAttribute('name',userName);
    var ul=document.getElementById('message-ul');
    ul.appendChild(li);

    // delete on click 
    li.setAttribute('onclick',"deleteNode(this,'"+name+"')")
}


function createLeftLiNode(userName, textMessage, msgkey)
{
    var li=document.createElement('li');
    var liText=document.createTextNode(userName+" : "+textMessage);
    li.appendChild(liText);
    li.setAttribute('class','msgleft');
    li.setAttribute('id',msgkey);
    li.setAttribute('name',userName);
    var ul=document.getElementById('message-ul');
    ul.appendChild(li);

    // delete on click 
    li.setAttribute('onclick',"deleteNode(this,'"+name+"')")
}


function deleteNode(e, userName)
{
    var li=document.getElementById(e.id);
    var liName=li.getAttribute('name');
    var liId=li.getAttribute('id');

    if(userName==liName){
        // delete message on liId in firebase database
        firebase.database().ref('message').child(liId).remove();
    }
}


// listen for delete msg

firebase.database().ref('message').on('child_removed',function(data){
    // delete message from DOM
    var li=document.getElementById(data.val().messagekey);
    li.innerHTML="🛇 This message has been deleted";
});



// fetch message from firebase database

function fetchMessage()
{
    console.log(name);
    firebase.database().ref('message').on('child_added',function(data){
        if(data.val().userName==name)
        {
            createRightLiNode(data.val().userName, data.val().text, data.val().messagekey);
        }
        else {
            createLeftLiNode(data.val().userName, data.val().text, data.val().messagekey);
        }
    });
}


fetchMessage();

