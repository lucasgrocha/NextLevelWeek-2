import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/37275161?s=460&u=285926518278bfbe642b8c912a211fd2a65ad3b2&v=4"
          alt="Lucas"
        />
        <div>
          <strong>Lucas Rocha</strong>
          <span>Química </span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nostrum
        facilis in dolore.
        <br />
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt nobis
        labore praesentium non rerum consectetur, dolor aliquid asperiores
        veniam voluptatibus illo modi aperiam ex omnis blanditiis earum eveniet.
        Ab, repellendus.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
