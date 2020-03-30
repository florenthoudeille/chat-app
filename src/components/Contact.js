

// className= Contact à appliquer sur balise qui ouvre et ferme le composant (enclosing tag)

// faire div pour entourer la partie droite (nom + statut)

// className=status sur balise qui englobera l'indicateur de statut (rouge ou vert) et le texte correstpondant

// className=status-online pour le moment.

// afficher ce composant quand le composant "App"
import React from 'react';
import './Contact.css';

const online = true;

function Contact() {
    return (
    <div className="Contact">
        <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="Homme" className="avatar" />
        <div>
            <h3 className="name">Pierre Simon</h3>
            <div className="status">
                <img className={online ? 'status-online' : 'status-offline'} alt="" />
                <p className='status-text'>{online ? 'online' : 'offline'}</p>
            </div>
        </div>
    </div>
    );
};



export default Contact;