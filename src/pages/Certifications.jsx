import { useState } from 'react';
import '../Certifications.css';
import CertificationModal from '../components/CertificationsModal';
import Cert1 from '../assets/Cert1.jpg';
import Cert2 from '../assets/Cert2.jpg';
import Cert3 from '../assets/Cert3.jpg';
import Cert4 from '../assets/Cert4.jpg';
import Cert5 from '../assets/Cert5.jpg';

const Certifications = () => {
    const [selectedCertId, setSelectedCertId] = useState(null);

    // Simple card data for the grid display
    const certifications = [
        {
            id: 1,
            title: "Front End Developer 2",
            image: Cert1,
            issuer: 'Codex Academy',
            date: 'January 23rd, 2026'
        },
        {
            id: 2,
            title: "Unreal Engine 5 Blueprints - The Ultimate Developer Course",
            image: Cert2,
            issuer: 'Udemy - Stephen Ulibarri',
            date: 'October 6th, 2025'
        },
        {
            id: 3,
            title: "Writing Interactive Stories for Video Games & Other Formats",
            image: Cert3,
            issuer: 'Udemy - Prof. Michael McIntyre',
            date: 'September 30, 2025'
        },
        {
            id: 4,
            title: "Pre-Programming",
            image: Cert4,
            issuer: 'Udemy - Evan Kimbrell',
            date: 'October 9th, 2025'
        },
        {
            id: 5,
            title: "Unreal Engine - The Ultimate 2D Top Down",
            image: Cert5,
            issuer: 'Udemy - Cobra Code',
            date: 'September 21, 2025'
        },
    ];

    const openModal = (certId) => {
        setSelectedCertId(certId);
    };

    const closeModal = () => {
        setSelectedCertId(null);
    };

    return (
        <div className="certifications-container">
            <h1>My Certifications</h1>

            <div className="certifications-grid">
                {certifications.map((cert) => (
                    <div
                        key={cert.id}
                        className="cert-card"
                        onClick={() => openModal(cert.id)}
                    >
                        <img
                            src={cert.image}
                            alt={cert.title}
                            className="cert-thumbnail"
                        />
                        <div className="cert-info">
                            <h3>{cert.title}</h3>
                            <p>{cert.issuer}</p>
                            <p className="cert-date">{cert.date}</p>
                        </div>
                    </div>
                ))}
            </div>

            <CertificationModal 
                certificationId={selectedCertId} 
                onClose={closeModal} 
            />
        </div>
    );
};

export default Certifications;