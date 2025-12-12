
function Submit(){
    const nm= document.getElementById("fullname").value.trim();
    const ph= document.getElementById("number").value.trim();
    const em= document.getElementById("email").value.trim();
    const db= document.getElementById("dob").value.trim();

    document.querySelectorAll(".Error").forEach((element)=>{
        element.innerHTML="";
    });

    if(!nm||!em||!ph||!db){
        document.querySelectorAll(".Error").forEach((element)=>{
        element.innerHTML="required";
    });

    }


   //validation start
   if(!nm){
    document.getElementById("NameError").innerText="Required"
        return;

   }
   if(!em){
    document.getElementById("NameError").innerText="Required"
        return;

   }
   if(!ph){
    document.getElementById("NameError").innerText="Required"
        return;

   }
   if(!db){
    document.getElementById("NameError").innerText="Required"
        return;

   }
   else{
    const currentdata=new date().getFullYear();
    const birthyear=number(db.split("-")[0]);

    if(currentyear-birthyear<17){
        document.getElementById("AgeError").innerText=
        "only Alphabets and Spaces are Allowed"
        return;
    }
   }


    if(!/^[A-Zaa-z]+$/.test(nm)){
        document.getElementById("NameError").innerText=
        "only Alphabets and Spaces are Allowed"
        return;
    }

    else if(!/^[\w\.]+@(gmail|outlook|ricr|yahoo )\.(com|in|co.in)$/.test(em))
    {
        document.getElementById("GmailError").innerText=
        "only Alphabets and Spaces are Allowed"
        return;
    }
    if(!/^[6-9]\d{9}$/.test(ph)){
        document.getElementById("PhoneError").innerText=
        "only Alphabets and Spaces are Allowed"
        return;
    }
    

    

    console.log

    //use Login of Age Calculator and don't allow less that 18years.
   


    const data ={
        FullName: nm,
        phone: ph,
        Email: em,
        Dob: db,
    };


    console.log(data);
}
