import React, { useEffect, useState } from "react";
import "../style/body.css";
import axios from "axios";

function Body() {
  const [argos, setArgos] = useState([]);
  const [addArgos, setAddArgos] = useState("");
  const handleClick = async () => {
    setArgos(argos.concat([{ name: addArgos }]));
    axios.post("http://localhost:5000/argonaute", { name: addArgos });
    setAddArgos("");
  };
  const handleDelete = async (id) => {
    axios
      .delete(`http://localhost:5000/argonaute/${id}`)
      .then(() => setArgos(argos.filter((argo) => argo.id !== id)))
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/argonaute`)
      .then((response) => setArgos(response.data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main>
      <h2>Ajouter un(e) Argonaute</h2>
      <form className="new-member-form">
        <label htmlFor="name">Nom de l'Argonaute</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Charalampos"
          value={addArgos}
          onChange={(event) => {
            setAddArgos(event.target.value);
          }}
        />
        <button
          type="button"
          className="buttonSend"
          onClick={() => {
            handleClick();
          }}
        >
          Envoyer
        </button>
      </form>

      <h2>Membres de l'équipage</h2>
      <section className="member-list">
        <div className="grid-container">
          {argos.map((argo) => (
            <div key={argo.id} className="grid-item">
              {argo.name}
              <button
                type="button"
                className="deleteButton"
                onClick={() => {
                  handleDelete(argo.id);
                }}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
export default Body;
