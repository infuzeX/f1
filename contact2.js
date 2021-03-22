const form = document.querySelector("#contactForm");

let elements;


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = {};
   elements = e.target.elements;
  formData["parent"] = elements[0].value;
  formData["email"] = elements[1].value;
  formData["number"] = elements[2].value;
  formData["cname"] = elements[3].value;
  formData["class"] = elements[4].value;
  console.log(formData);
  sendData(formData);
});

function sendData(formData) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'contact2db.php', true);
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