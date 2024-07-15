import React, { useState, useEffect } from 'react';
import visionImage from '../vision.png';
import misionImage from '../mision.png';

const About = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div className="container-fluid getToKnowBG" id="getToKnow">
      <div className="container getToKnow">
        <div className="row">
          <div className="col text-center">
            <h2>Tentang</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-m-12 text-center">
            <iframe
              src="https://www.youtube.com/embed/sJsC6zQCfNI?si=z_TabLxpdi4I3OF1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-7 text-center" id="shortDescription">
            <p>
            Website edukasi "Panduan dan Mitigasi Bencana Banjir" dirancang untuk memberikan informasi komprehensif dan praktis kepada masyarakat mengenai cara menghadapi dan mengurangi dampak bencana banjir. Situs ini mencakup berbagai topik penting, mulai dari pemahaman dasar tentang penyebab banjir, jenis-jenis banjir, hingga strategi mitigasi yang dapat diterapkan di tingkat individu, komunitas, dan pemerintah. Selain itu, website ini menyediakan panduan langkah demi langkah tentang tindakan yang harus diambil sebelum, selama, dan setelah banjir terjadi. Dengan menyertakan sumber daya seperti peta risiko banjir, video edukatif, dan forum diskusi, situs ini bertujuan untuk meningkatkan kesadaran dan kesiapan masyarakat dalam menghadapi ancaman banjir, serta mempromosikan budaya kesiapsiagaan dan tanggap darurat.
            </p>
            <br></br>
          </div>
        </div>

        
          <div className="col-6 text-center">
            <img src={misionImage} alt="exsolMision" />
          </div>
        </div>

        <div className="row justify-content-center misionVisionDetails">
          <div className="col-6 text-center">
          <h3>VISI</h3>
            <p className="visionText">
            Menjadi sumber informasi utama yang terpercaya dalam edukasi dan mitigasi bencana banjir, membantu menciptakan masyarakat yang lebih tangguh, sadar, dan siap dalam menghadapi ancaman banjir.
            </p>

          </div>
          <div className="row misionVision justify-content-center">
          <div className="col-6 text-center">
            <img src={visionImage} alt="exsolVision" />
          </div>
          <div className="col-6 text-center">
          <h3>MISI</h3>
            <p className="misionText">
            1. Menyediakan Informasi Komprehensif: Menyajikan informasi yang akurat dan up-to-date mengenai penyebab, jenis, dan dampak banjir serta langkah-langkah mitigasi yang efektif. <br />
            2. Edukasi Masyarakat: Memberikan edukasi yang mudah dipahami dan diterapkan oleh berbagai kalangan masyarakat mengenai cara mempersiapkan diri, bertindak, dan pulih dari bencana banjir. <br />
            3. Pengembangan Sumber Daya: Menyediakan berbagai sumber daya seperti peta risiko banjir, video edukatif, dan panduan praktis untuk membantu masyarakat memahami dan mengurangi risiko banjir.
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col text-center">
            <h2>TENTANG KAMI</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6">
            {userData ? (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{userData.name}</h5>
                  <p className="card-text"><strong>Email:</strong> {userData.email}</p>
                  <p className="card-text"><strong>Phone:</strong> {userData.phone}</p>
                </div>
              </div>
            ) : (
              <p className="text-center">Loading user data...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
