/*var myHeading = document.querySelector('h1');
myHeading.textContent="Hello World";
*/
//comment
/*document.querySelector('html').onclick = function(){
    alert("Ouch! stop poking me!");
}*/
var myImage = document.querySelector('img');
myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-image.jpeg') 
        {
                myImage.setAttribute('src','images/firefox-image2.jpeg');
        }
        else{
            myImage.setAttribute('src','images/firefox-image.jpeg');

        }

}
    var myButton= document.querySelector('button');
    var myHeading = document.querySelector('h1');

        function setUserName(){
        //alert('2');
        var myName = prompt("Please enter your name");
        localStorage.setItem('name',myName);
        myHeading.textContent = "Mozilla is cool "+ myName;

    }

    if(!localStorage.getItem('name')){
          //alert("1" + localStorage.getItem('name'));
        setUserName();
    }
    else{
        //alert(localStorage.getItem('name'));
        myHeading.textContent ="Mozilla is cool " + localStorage.getItem('name');
    }


    myButton.onclick= function(){
        setUserName()
    };
    
