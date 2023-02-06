import React, { useState } from "react";
import "../style/footer.css";

function Footer() {
  const [lore, setLore] = useState(
    "Réalisé par Jason en Anthestérion de l'an 515 avant JC"
  );
  return (
    <footer>
      <p>{lore}</p>
      <button
        type="button"
        aria-label="bob"
        className="buttonSecret"
        onClick={() =>
          setLore("Réalisé par Robin de Reims de l'an 2023 après JC")
        }
      />
    </footer>
  );
}
export default Footer;
