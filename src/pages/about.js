import React from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";

const About = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="text-center">
        <div className="container-fluid justify-content-center">
          <div className="row">
            <div className="col-12">
              <h3 className="main-title">Nosso time</h3>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src="img/profile1.jpg" class="card-img-top" alt="Imagem de Perfil 1"/>
                <div className="card-body">
                  <h5 className="card-title">Aline Andrade</h5>
                  <a href='https://github.com/AlineFAndrade'><img alt='GitHub - Aline' src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'></img></a> <a href='https://www.linkedin.com/in/aline-andrade-/'><img alt='LinkedIn - Aline' src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'></img></a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src="img/profile2.jpg" class="card-img-top" alt="Imagem de Perfil 2"/>
                <div className="card-body">
                  <h5 className="card-title">Leticia Aniceto</h5>
                  <a href='https://github.com/leticia-aniceto'><img alt='GitHub - Leticia' src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'></img></a> <a href='https://www.linkedin.com/in/leticia-braga-aniceto/'><img alt='LinkedIn - Leticia' src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'></img></a> 
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src="img/profile3.jpg" class="card-img-top" alt="Imagem de Perfil 3"/>
                <div className="card-body">
                  <h5 className="card-title">Lyandra Saito</h5>
                  <a href='https://github.com/lyandrasaito'><img alt='GitHub - Lyandra' src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'></img></a> <a href='https://www.linkedin.com/in/lyandra-saito/'><img alt='LinkedIn - Lyandra' src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'></img></a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src="img/profile4.jpg" class="card-img-top" alt="Imagem de Perfil 4"/>
                <div className="card-body">
                  <h5 className="card-title">Monique Doretto</h5>
                  <a href='https://github.com/tenorionique'><img alt='GitHub - Monique' src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'></img></a> <a href='https://www.linkedin.com/in/monique-doretto/'><img alt='LinkedIn - Monique' src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'></img></a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src="" class="card-img-top" alt="Imagem de Perfil 4"/>
                <div className="card-body">
                  <h5 className="card-title">Paloma Queiroz</h5>
                  <a href='https://github.com/palomacqueiroz'><img alt='GitHub - Paloma' src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'></img></a> <a href='https://www.linkedin.com/in/palomac-queiroz/'><img alt='LinkedIn - Paloma' src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'></img></a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src="img/profile4.jpg" class="card-img-top" alt="Imagem de Perfil 4"/>
                <div className="card-body">
                  <h5 className="card-title">Rafaela Cugini</h5>
                  <a href='https://github.com/RafaelaCugini'><img alt='GitHub - Rafaela' src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'></img></a> <a href='https://www.linkedin.com/in/rafaela-cugini-1002a225/'><img alt='LinkedIn - Rafaela' src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'></img></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </>
  );
};

export default About;