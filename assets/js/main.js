const cors = require("cors");
app.use(cors());

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector("#contactForm");
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("Le formulaire a été soumis");
    const data = {
      firstname: document.querySelector("#firstname").value,
      lastname: document.querySelector("#lastname").value,
      email: document.querySelector("#email").value,
      subject: document.querySelector("#subject").value,
      message: document.querySelector("#message").value,
    };
    const response = await axios.post(
      "https://form-backend-2020-04-24.herokuapp.com/",
      data
    );
    console.log(response);
    if (response.status === 200) {
      alert("Message envoyé !");
    }
  });
});
