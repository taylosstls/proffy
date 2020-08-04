import React from 'react';

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/45001547?s=460&u=6a6d06226e32daf8037dbc5b2097109b4614a661&v=4" alt="Gustavo Teixeira" />

        <div>
          <strong>Gustavo Teixeira</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit ornare pellentesque.<br /> Nullam commodo mollis orci, at rutrum turpis volutpat scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla a ex at urna euismod tempus. Nunc efficitur molestie mauris, id vulputate nisi condimentum eu. </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img src={WhatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
