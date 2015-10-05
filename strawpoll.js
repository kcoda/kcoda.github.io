var currpoll;

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function refresh(){
    var idk;
    var poll = httpGetAsync("https://strawpoll.me/api/v2/polls/" + currpoll, idk);
    document.getElementById("demo").innerHTML = idk;
    
    //var nameIdx = poll.search("title:");
}

function SetupButtons(){
  var body = document.getElementsByTagName("body")[0];
  var prevbutton = document.createElement("button");
  prevbutton.innerHTML = "Previous";
  body.appendChild(prevbutton);
  prevbutton.addEventListener("click", function() {
    currpoll--;
    refresh();
    }
    );
  
 
  var submitbutton = document.createElement("button");
  submitbutton.innerHTML = "Submit";
  body.appendChild(submitbutton);
  submitbutton.addEventListener("click", function() {
    currpoll = document.getElementsByName("fname")[0].value;
    console.log(currpoll);
    refresh();
    }
    );
  var nextbutton = document.createElement("button");
  nextbutton.innerHTML = "Next"; 
  body.appendChild(nextbutton);
  nextbutton.addEventListener("click", function() {
     currpoll++;
     refresh();
     }
    );
  
  
    
}


function startup(){
    SetupButtons();
    
    
}