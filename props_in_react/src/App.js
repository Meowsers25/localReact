import React from "react";
import ContactCard from "./ContactCard";

function App() {
  return (
    <div className="contacts">
      <ContactCard
        name="Mr. Whiskerson"
        imgUrl="http://placekitten.com/300/200"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <ContactCard
        name="Fluffykins"
        imgUrl="http://placekitten.com/400/200"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <ContactCard />
      <ContactCard />

      <div className="contact-card">
        <img src="http://placekitten.com/400/300" alt="badass kitten" />
        <h3>Destroyer</h3>
        <p>Phone: (212) 555-3456</p>
        <p>Email: ofworlds@yahoo.com</p>
      </div>

      <div className="contact-card">
        <img src="http://placekitten.com/200/100" alt="badass kitten" />
        <h3>Felix</h3>
        <p>Phone: (212) 555-4567</p>
        <p>Email: thecat@hotmail.com</p>
      </div>
    </div>
  );
}

export default App;
