import Cert1 from '../assets/Cert1.jpg';
import Cert2 from '../assets/Cert2.jpg';
import Cert3 from '../assets/Cert3.jpg';
import Cert4 from '../assets/Cert4.jpg';
import Cert5 from '../assets/Cert5.jpg';

const CertificationModal = ({ certificationId, onClose }) => {
    if (!certificationId) return null;

    // All certification data with custom content for each
    const certificationsData = {
        1: {
            id: 1,
            title: "Front End Developer 2",
            image: Cert1,
            issuer: 'Codex Academy',
            date: 'January 23rd, 2026',
            content: (
                <>
                    <p className="cert-content-text">This comprehensive front-end development bootcamp provided intensive training in modern web development technologies and best practices.</p>

                    <h3>Skills Learned:</h3>
                    <ul>
                        <li>React.js and component-based architecture</li>
                        <li>Modern JavaScript (ES6+)</li>
                        <li>Responsive web design and CSS frameworks</li>
                        <li>State management and hooks</li>
                        <li>API integration and asynchronous programming</li>
                        <li>Git version control and collaboration</li>
                    </ul>
                </>
            )
        },
        2: {
            id: 2,
            title: "Unreal Engine 5 Blueprints - The Ultimate Developer Course",
            image: Cert2,
            issuer: 'Udemy - Stephen Ulibarri',
            date: 'October 6th, 2025',
            content: (
                <>
                    <p className="cert-content-text">Complete mastery of Unreal Engine 5's visual scripting system, enabling the creation of complex game mechanics without traditional coding.</p>

                    <h3>Skills Learned:</h3>
                    <ul>
                        <li>Blueprint visual scripting fundamentals</li>
                        <li>Game mechanics implementation</li>
                        <li>AI behavior systems</li>
                        <li>User interface design and implementation</li>
                        <li>Animation blueprints and state machines</li>
                        <li>Physics and collision systems</li>
                    </ul>
                </>
            )
        },
        3: {
            id: 3,
            title: "Writing Interactive Stories for Video Games & Other Formats",
            image: Cert3,
            issuer: 'Udemy - Prof. Michael McIntyre',
            date: 'September 30, 2025',
            content: (
                <>
                    <p className="cert-content-text">Professional training in narrative design and interactive storytelling for video games and digital media.</p>

                    <h3>Skills Learned:</h3>
                    <ul>
                        <li>Branching narrative structures</li>
                        <li>Character development and arc design</li>
                        <li>Dialogue system implementation</li>
                        <li>Player agency and meaningful choices</li>
                        <li>Story pacing and tension building</li>
                        <li>Writing for different game genres</li>
                    </ul>
                </>
            )
        },
        4: {
            id: 4,
            title: "Pre-Programming",
            image: Cert4,
            issuer: 'Udemy - Evan Kimbrell',
            date: 'October 9th, 2025',
            content: (
                <>
                    <p className="cert-content-text">Foundational course establishing core programming concepts and computational thinking skills necessary for any programming language.</p>

                    <h3>Topics Covered:</h3>
                    <ul>
                        <li>Computational thinking and problem-solving</li>
                        <li>Algorithm design and logic flow</li>
                        <li>Data structures fundamentals</li>
                        <li>Programming paradigms overview</li>
                        <li>Debugging strategies and best practices</li>
                        <li>Code organization and documentation</li>
                    </ul>
                </>
            )
        },
        5: {
            id: 5,
            title: "Unreal Engine - The Ultimate 2D Top Down",
            image: Cert5,
            issuer: 'Udemy - Cobra Code',
            date: 'September 21, 2025',
            content: (
                <>
                    <p className="cert-content-text">Specialized training in creating 2D top-down games using Unreal Engine's powerful toolset.</p>

                    <h3>Skills Learned:</h3>
                    <ul>
                        <li>2D camera systems and controls</li>
                        <li>Paper2D sprite management</li>
                        <li>Top-down movement mechanics</li>
                        <li>Tile-based level design</li>
                        <li>2D collision and physics</li>
                        <li>Enemy AI for 2D environments</li>
                    </ul>
                </>
            )
        }
    };

    const certification = certificationsData[certificationId];

    if (!certification) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <button
                className="close-button"
                onClick={onClose}
                aria-label="Close"
            >
                ✕
            </button>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-info-box">
                    <h2>{certification.title}</h2>
                    <p className="modal-issuer">{certification.issuer}</p>
                    <p className="modal-date">{certification.date}</p>

                    <div className="modal-description">
                        {certification.content}
                    </div>
                </div>
                <div className="modal-image-container">
                    <img
                        src={certification.image}
                        alt={certification.title}
                        className="cert-fullscreen"
                    />
                </div>
            </div>
        </div>
    );
};

export default CertificationModal;