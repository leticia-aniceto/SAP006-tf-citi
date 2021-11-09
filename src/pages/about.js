import React from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import './about.css'

const About = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="text-center">
        <div className="container-fluid justify-content-center">
          <div className="row">
            <div className="col-12">
              <h2 className="main-title">Nosso time</h2>
            </div>
            <section className="profile-cards">
              <div className="col-md-3">
                <div className="card">
                  <img src="https://github.com/AlineFAndrade.png?size=200" class="card-img-top" alt="Imagem de Perfil Aline" />
                  <div className="card-body">
                    <h5 className="card-title">Aline Andrade</h5>
                    <a href='https://github.com/AlineFAndrade'><img alt='GitHub - Aline' src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'></img></a> <a href='https://www.linkedin.com/in/aline-andrade-/'><img alt='LinkedIn - Aline' src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'></img></a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <img src="https://github.com/leticia-aniceto.png?size=200"  class="card-img-top" alt="Imagem de Perfil Letícia"/>
                  <div className="card-body">
                    <h5 className="card-title">Letícia Aniceto</h5>
                    <a href='https://github.com/leticia-aniceto'><img alt='GitHub - Leticia' src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'></img></a> <a href='https://www.linkedin.com/in/leticia-braga-aniceto/'><img alt='LinkedIn - Leticia' src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'></img></a> 
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <img src="https://github.com/lyandrasaito.png?size=200" class="card-img-top" alt="Imagem de Perfil Lyandra"/>
                  <div className="card-body">
                    <h5 className="card-title">Lyandra Saito</h5>
                    <a href='https://github.com/lyandrasaito'><img alt='GitHub - Lyandra' src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'></img></a> <a href='https://www.linkedin.com/in/lyandra-saito/'><img alt='LinkedIn - Lyandra' src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'></img></a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <img src="https://github.com/tenorionique.png?size=200" class="card-img-top" alt="Imagem de Perfil Monique"/>
                  <div className="card-body">
                    <h5 className="card-title">Monique Doretto</h5>
                    <a href='https://github.com/tenorionique'><img alt='GitHub - Monique' src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'></img></a> <a href='https://www.linkedin.com/in/monique-doretto/'><img alt='LinkedIn - Monique' src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'></img></a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <img src="https://github.com/palomacqueiroz.png?size=200" class="card-img-top" alt="Imagem de Perfil Paloma"/>
                  <div className="card-body">
                    <h5 className="card-title">Paloma Queiroz</h5>
                    <a href='https://github.com/palomacqueiroz'><img alt='GitHub - Paloma' src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'></img></a> <a href='https://www.linkedin.com/in/palomac-queiroz/'><img alt='LinkedIn - Paloma' src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'></img></a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <img src="https://github.com/RafaelaCugini.png?size=200" class="card-img-top" alt="Imagem de Perfil Rafaela"/>
                  <div className="card-body">
                    <h5 className="card-title">Rafaela Cugini</h5>
                    <a href='https://github.com/RafaelaCugini'><img alt='GitHub - Rafaela' src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'></img></a> <a href='https://www.linkedin.com/in/rafaela-cugini-1002a225/'><img alt='LinkedIn - Rafaela' src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'></img></a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      

    </>
  );
};

export default About;