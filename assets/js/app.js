var setData = "";
var result = 0;
var percentage = 0;
fetch("./assets/data/data.json")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      setData += `
        <div class="empty b"  style="background-color:${data[i].bg_color} ; ">
          <div class="empty_content">
            <img src=${data[i].icon} alt="Reaction logo">
            <h1>${data[i].category}</h1>
          </div>
          <div>
            <p>${data[i].score} / <span>100</span> </p>
          </div>
        </div>
        `;

      result += data[i].score;
    }
    // console.log(Math.floor((result / (data.length * 100)) * 100));

    percentage = Math.floor((result / (data.length * 100)) * 100);
    document.querySelector(".data").innerHTML = setData;

    document.querySelector(".Btn").addEventListener("click", function () {
      //   document.querySelector(".result").innerHTML = percentage;

      let counts = setInterval(() => {
        updated();
      }, 10);

      let number = 0;

      function updated() {
        document.querySelector(".result").innerHTML = ++number;
        if (number === percentage) {
          clearInterval(counts);
        }
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });
