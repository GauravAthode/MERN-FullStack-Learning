function search() {
  const state = document.getElementById("state").value.trim().toLowerCase();

  if (!state) {
    alert("State Empty");
    return;
  }

  const flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "text-danger", "fs-3");
  flag.style.position = "absolute";

  

  if (state === "himachal pradesh") {
    flag.style.top = "240px";
    flag.style.left = "380px";
    flag.title = "State: Himachal Pradesh\nCapital: Shimla";
  }
    if (state === "tripura") {
    flag.style.top = "570px";
    flag.style.left = "840px";
    flag.title = "State: Tirpura\nCapital: Agartala";
  }
  if (state === "mizoram") {
    flag.style.top = "580px";
    flag.style.left = "880px";
    flag.title = "State: Mizoram\nCapital: Aizawl";
  }
  if (state === "Manipur") {
    flag.style.top = "530px";
    flag.style.left = "910px";
    flag.title = "State: Manipur\nCapital: Imphal";

  }
  if (state === "meghalay") {
    flag.style.top = "500px";
    flag.style.left = "820px";
    flag.title = "State: Meghalaya\nCapital: Shillong";
  }
  if (state === "assam") {
    flag.style.top = "450px";
    flag.style.left = "860px";
    flag.title = "State: Assam\nCapital: Dispur";
  }
  if (state === "nagaland") {
    flag.style.top = "450px";
    flag.style.left = "90px";
    flag.title = "State: Nagaland\nCapital: Kohima";
  }
 
  if (state === "telangana") {
    flag.style.top = "720px";
    flag.style.left = "600px";
    flag.title = "State: Telangana\nCapital: Hyderabad";
  }
  if (state === "andhra pradesh") {
    flag.style.top = "760px";
    flag.style.left = "650px";
    flag.title = "State: Andra Pradesh\nCapital: Amaravati";
  }
  if (state === "karnataka") {
    flag.style.top = "820px";
    flag.style.left = "500px";
    flag.title = "State: karnataka\nCapital: Bengaluru";
  }
  if (state === "tamil nadu") {
    flag.style.top = "910px";
    flag.style.left = "580px";
    flag.title = "State: Tamil Nadu\nCapital: Chennai";
  }
  if (state === "kerala") {
    flag.style.top = "980px";
    flag.style.left = "480px";
    flag.title = "State: kerala\nCapital: Thiruvananthapuram";
  }
  if (state === "andaman nicobar") {
    flag.style.top = "110px";
    flag.style.left = "860px";
    flag.title = "State: andaman nicobar\nCapital: Blair";
  }

  if (state === "punjab") {
    flag.style.top = "270px";
    flag.style.left = "320px";
    flag.title = "State: Punjab\nCapital: Chandigarh";
  }

  if (state === "uttarakhand") {
    flag.style.top = "320px";
    flag.style.left = "440px";
    flag.title = "State: Uttarakhand\nCapital: Dehradun";
  }
  if (state === "delhi") {
    flag.style.top = "350px";
    flag.style.left = "390px";
    flag.title = "State: Delhi\nCapital: New Delhi";
  }

  if (state === "madhya pradesh") {
    flag.style.top = "540px";
    flag.style.left = "490px";
    flag.title = "State: Madhya Pradesh\nCapital: Bhopal";
  }

  if (state === "ladakh") {
    flag.style.top = "140px";
    flag.style.left = "310px";
    flag.title = "State: Ladakh\nCapital: Leh";
  }

  if (state === "jammu & kashmir" || state === "jammu and kashmir") {
    flag.style.top = "150px";
    flag.style.left = "420px";
    flag.title = "State: Jammu & Kashmir\nCapital: Srinagar";
  }

  if (state === "haryana") {
    flag.style.top = "330px";
    flag.style.left = "340px";
    flag.title = "State: Haryana\nCapital: Chandigarh";
  }

  if (state === "up" || state === "uttar pradesh") {
    flag.style.top = "500px";
    flag.style.left = "600px";
    flag.title = "State: Uttar Pradesh\nCapital: Lucknow";
  }

  if (state === "rajasthan") {
    flag.style.top = "450px";
    flag.style.left = "300px";
    flag.title = "State: Rajasthan\nCapital: Jaipur";
  }

  if (state === "bihar") {
    flag.style.top = "510px";
    flag.style.left = "660px";
    flag.title = "State: Bihar\nCapital: Patna";
  }

  if (state === "jharkhand") {
    flag.style.top = "580px";
    flag.style.left = "640px";
    flag.title = "State: Jharkhand\nCapital: Ranchi";
  }

  if (state === "west bengal") {
    flag.style.top = "590px";
    flag.style.left = "720px";
    flag.title = "State: West Bengal\nCapital: Kolkata";
  }

  if (state === "chhattisgarh") {
    flag.style.top = "630px";
    flag.style.left = "560px";
    flag.title = "State: Chhattisgarh\nCapital: Raipur";
  }

  if (state === "maharashtra") {
    flag.style.top = "690px";
    flag.style.left = "450px";
    flag.title = "State: Maharashtra\nCapital: Mumbai";
  }
  if (state === "sikkim") {
    flag.style.top = "410px";
    flag.style.left = "740px";
    flag.title = "State: Sikkim\nCapital: Gangtok";
  }
 if (state === "arunachal pradesh") {
    flag.style.top = "360px";
    flag.style.left = "830px";
    flag.title = "State: arunachal pradesh\nCapital: itanagar";
  }

  
  

  document.getElementById("Map").appendChild(flag);
  document.getElementById("state").value = "";
}