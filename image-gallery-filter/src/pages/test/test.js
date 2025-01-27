import React, { useState } from "react";

const Contactus = () => {
  const [formState, setFormState] = useState({});

  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(document.getElementById("email").value, ">>");

    // const config = {
    //   SecureToken: "5d3fe060-2b33-49e0-9fc9-4a64742d1c6d",
    //   To: "info@oatsandco.ae",
    //   From: formState.email,
    //   Subject: "This is the subject",
    //   Body: "And this is the body",
    // };
    // if (window.Email) {
    //   window.Email.send(config).then(() => alert("email sent"));
    // }

    window.Email.send({
      //IONOS SMTP DETAILS

      /**
      Host: "smtp.elasticemail.com",
      Username: "info@oatsandco.ae",
      Password: "084DB08E3DBCDC9C29BCDA97D301375B888A",
      //   Password: "Oats&Co2023",
      From: "info@oatsandco.ae",
      To: document.getElementById("email").value,
      ReplyFrom: document.getElementById("email").value,
      Subject: "New Signup!!!",
      Body: "And this is the body",
       */

      //GMAIL SMTP DETAILS
      Host: "smtp.gmail.com",
      Username: "reservations.oatsandco@gmail.com",
      Password: "zzmh lpzz fhpo yaoe",
      From: "reservations.oatsandco@gmail.com",
      To: document.getElementById("email").value, // The recipient's email
      ReplyFrom: document.getElementById("email").value,
      Subject: "New Signup!!!",
      Body: "And this is the body",
      SecureToken: "", // You can omit this as it's not necessary for Gmail
    }).then((message) => alert(message));

    // window.Email.send({
    //   Host: "smtp.elasticemail.com",
    //   Username: "info@oatsandco.ae",
    //   Password: "084DB08E3DBCDC9C29BCDA97D301375B888A",
    //   From: document.getElementById("email").value,
    //   To: "info@oatsandco.ae",
    //   Subject: "New Signup!!!",
    //   Body: "And this is the body",
    // }).then((message) => alert(message));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          value={formState.name || ""}
          onChange={changeHandler}
        />
        <input
          type="email"
          name="email"
          id="email"
          value={formState.email || ""}
          onChange={changeHandler}
        />
        <input type="submit" value="Send Email CC" />
      </form>
    </div>
  );
};

export default Contactus;
