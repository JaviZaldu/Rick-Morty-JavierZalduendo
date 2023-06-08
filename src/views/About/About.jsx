import React from 'react';
import style from './About.module.css';
import PerfilAbout from '../../assets/imagenes/PerfilAbout.png';

class About extends React.Component {
  render() {
      return (
          <div className={style.divAbout}>
              <img src={PerfilAbout} alt="FotoPerfil" className={style.Foto}/>
              <h2 className={style.Info}>Un poco sobre mí:</h2>
              <p className={style.Info}>
                  Hola me llamo <b>Javier Zalduendo</b>
                  <br/>
                  Estoy cursando HENRY con muchas ganas de aprender y mejorar
                  <br/>
                  Me gusta programar, menos cuando se rompe el codigo 😜😝
              </p>
          </div>
      );
  }
}

export default About;