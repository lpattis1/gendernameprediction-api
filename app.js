const nameOutput = document.querySelector(".output");
const btn = document.querySelector(".btn");

class Person {
  constructor(name) {
    this.name = name;

    this.determineGender = this.getName(this.name)
      .then((nameData) => {
        nameOutput.innerHTML += `
       <div class="names-here">
       <h5>${nameData.name}</h5>
       <p><span class="gender-emph">Gender:</span> ${nameData.gender}</p>
       <p><span class="prob-emph">Probability:</span> ${nameData.probability}</p>
       </div>
        `;
      })
      .catch(() => {
        alert("Something went wrong");
      });
  }

  async getName(name) {
    const response = await fetch(`https://api.genderize.io?name=${name}`);
    console.log(response);
    const returnedData = await response.json();

    return returnedData;
  }
}

btn.addEventListener("click", function (e) {
  const nameInput = document.querySelector(".name-input").value;
  const newName = new Person(nameInput);
});
