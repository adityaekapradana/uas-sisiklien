import React from 'react';
import packagesImage from '../BANJIR1.jpg';
import selectImage from '../BANJIR2.jpg';
import introduceImage from '../BANJIR4.jpg';

const Home = () => {
  return (
    <div className="container-fluid whyExsolBG" id="whyExsolBG">
      <div className="container whyExsol">
        <div className="row">
          <div className="col text-center">
            <h2 id="whyExsol">Layanan Kami Fokus Kepada </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="card text-center">
              <img src={packagesImage} className="card-img-top" alt="logoPackages" />
              <div className="card-body">
                <h3 className="card-title">Informasi Terkait Panduan Dan Mitigasi</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card text-center">
              <img src={selectImage} className="card-img-top" alt="logoSelect" />
              <div className="card-body">
                <h3 className="card-title">Edukasi Tentang Visi Dan Misi</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card text-center" id="lastCard">
              <img src={introduceImage} className="card-img-top" alt="logoIntroduce" />
              <div className="card-body">
                <h3 className="card-title">Tentang Layanan Dan Our Contact </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
