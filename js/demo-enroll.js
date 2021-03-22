const form = document.querySelector(".demo-enroll");

let elements;


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = {};
   elements = e.target.elements;
  formData["cname"] = elements[0].value;
  formData["parent"] = elements[1].value;
  formData["city"] = elements[2].value;
  formData["number"] = '+91'+(elements[3].value);
  formData["class"] = elements[4].value;
  console.log(formData);
  //sendData(formData);
});

function sendData(formData) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'demo-enrolldb.php', true);
  xhr.onload = function () {
    const res = JSON.parse(this.responseText);
    if (res.success) {
      clearfield(elements);
      window.location.href = 'thankyou.html';
    } else {
      alert("error occured")
    }

  }
  xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
  console.log(JSON.stringify(formData))
  xhr.send(JSON.stringify(formData))
}


function clearfield(elements){
    
    for(let x=0;x<elements.length;x++)
    {
        elements[x].value = "";
    }
    }