import React, { useState } from 'react';
import './Certificates.css';
import certificate1 from '../../assets/certificates/1.pdf';
import certificate2 from '../../assets/certificates/2.pdf';
import certificate3 from '../../assets/certificates/3.pdf';
import certificate4 from '../../assets/certificates/4.pdf';
import certificate5 from '../../assets/certificates/5.pdf';
import certificate6 from '../../assets/certificates/6.pdf';
import certificate7 from '../../assets/certificates/7.pdf';
import certificate8 from '../../assets/certificates/8.pdf';
import certificate9 from '../../assets/certificates/9.pdf';
import certificate10 from '../../assets/certificates/10.pdf';
import certificate11 from '../../assets/certificates/11.pdf';
import certificate12 from '../../assets/certificates/12.pdf';
import certificate13 from '../../assets/certificates/13.pdf';
import certificate14 from '../../assets/certificates/14.pdf';
import certificate15 from '../../assets/certificates/15.pdf';



function MyCertificates() {
    const certificatesData = [
        {
          name: "İnternette Güvenlik",
          link: certificate1,
        },
        {
          name: "İleri Ağ Teknolojileri",
          link: certificate2,
        },
        {
            name: "Kullanıcı Deneyimi ve Kullanabilirlik",
            link: certificate3,
        },
          {
          name: "Mikroservis Mimarileri",
          link: certificate4,
        },
        {
          name: "Figma",
          link: certificate5,
        },
        {
            name: "Java",
            link: certificate6,
          },
          {
            name: "Spring",
            link:certificate7,
          },
          {
            name: "Bilgi Teknolojilerine Giriş",
            link: certificate8,
          },
          {
            name: "Bilişim Hukuğu",
            link: certificate9,
          },
          {
            name: "jQuery-1",
            link: certificate10,
          },
          {
            name: "Flo",
            link: certificate11,
          },
          {
            name: "jQuery-2",
            link: certificate12,
          },
          {
            name: "Temel Ağ Teknolojileri",
            link: certificate13,
          },
          {
            name: "Web Sitesi Kullanabilirliği",
            link: certificate14,
          },
          {
            name: "Temel Ağ Teknolojileri",
            link: certificate15,
          },
      ];

      const [visibleCount, setVisibleCount] = useState(10);

      return (
        
          <div className="certificates-section" id='certificates'>
              <h2>My Certificates</h2>
              <div className="certificates-box">
                  {certificatesData.slice(0, visibleCount).map((certificate, index) => (
                      <div key={index} className="certificate-item">
                          <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                              {certificate.name}
                          </a>
                      </div>
                  ))}
                  {visibleCount < certificatesData.length && (
                      <button className="load-more" onClick={() => setVisibleCount(visibleCount + 10)}>
                          ▼
                      </button>
                  )}
              </div>
          </div>
         
      );
  }
  
  export default MyCertificates;