// import React from "react";


// function Essaie() {
//   return(
//   <>
     
//   <div className="container mt-4">
//     <div className="row">
      
//       <div className="col-md-6">
//         <h1>Remplir le formulaire</h1>
//         <form id="cv-form">

//           <h2>Informations Personnelles</h2>
//           <label htmlFor="nom">Nom complet :</label>
//           <input type="text" id="nom" name="nom" className="form-control mb-2" required />

//           <label htmlFor="email">Email :</label>
//           <input type="email" id="email" name="email" className="form-control mb-2" required />

//           <label htmlFor="telephone">Téléphone :</label>
//           <input type="tel" id="telephone" name="telephone" className="form-control mb-2" required />

//           <label htmlFor="pays">Pays :</label>
//           <select id="pays" name="pays" className="form-select mb-2" required>
//             <option value="">-- Sélectionnez un pays --</option>
//             <option value="france">France</option>
//             <option value="cameroun">Cameroun</option>
//             <option value="espagne">Espagne</option>
//             <option value="italie">Italie</option>
//             <option value="allemagne">Allemagne</option>
//             <option value="autre">Autre...</option>
//           </select>

//           <div id="autre-pays-container" style={{display:"none"}}>
//             <label htmlFor="autre-pays">Précisez le pays :</label>
//             <input type="text" id="autre-pays" name="autre-pays" className="form-control mb-2" />
//           </div>

//           <label htmlFor="ville">Ville :</label>
//           <select id="ville" name="ville" className="form-select mb-2" required>
//             <option value="">-- Sélectionnez une ville --</option>
//             <option value="douala">Douala</option>
//             <option value="yaounde">Yaoundé</option>
//             <option value="paris">Paris</option>
//             <option value="berlin">Berlin</option>
//             <option value="autre">Autre...</option>
//           </select>

//           <div id="autre-ville-container" style={{display:"none"}}>
//             <label htmlFor="autre-ville">Précisez la ville :</label>
//             <input type="text" id="autre-ville" name="autre-ville" className="form-control mb-2" />
//           </div>

//           <h2>Profil</h2>
//           <textarea id="profil" name="profil" rows={4} className="form-control mb-2" placeholder="Décrivez brièvement votre profil..." required></textarea>

//           <label htmlFor="photo">Photo de profil :</label>
//           <input type="file" id="photo" name="photo" accept="image/*" className="form-control mb-2" required />

//           <h2>Formations</h2>
//           <label htmlFor="formation">Formation :</label>
//           <select id="formation" name="formation" className="form-select mb-2" required>
//             <option value="">-- Sélectionnez une formation --</option>
//             <option value="licence">Licence</option>
//             <option value="master">Master</option>
//             <option value="doctorat">Doctorat</option>
//             <option value="certification">Certification</option>
//             <option value="autre">Autre...</option>
//           </select>

//           <div id="autre-formation-container" style={{display:"none"}}>
//             <label htmlFor="autre-formation">Précisez la formation :</label>
//             <input type="text" id="autre-formation" name="autre-formation" className="form-control mb-2" />
//           </div>

//           <label htmlFor="ecole">École / Université :</label>
//           <input type="text" id="ecole" name="ecole" className="form-control mb-2" placeholder="Ex: Université de Douala" required />

//           <label htmlFor="dates-formation">Dates :</label>
//           <input type="text" id="dates-formation" name="dates-formation" className="form-control mb-2" placeholder="Ex: 2020 - 2023" required />

//           <label htmlFor="details-formation">Détails / Spécialisation :</label>
//           <textarea id="details-formation" name="details-formation" rows={3} className="form-control mb-2" placeholder="Ex: Spécialisation en développement web..." required></textarea>

//           <h2>Expériences professionnelles</h2>
//           <label htmlFor="poste">Poste :</label>
//           <input type="text" id="poste" name="poste" className="form-control mb-2" placeholder="Ex: Développeur Web" required />

//           <label htmlFor="entreprise">Entreprise :</label>
//           <input type="text" id="entreprise" name="entreprise" className="form-control mb-2" placeholder="Ex: Startup X" required />

//           <label htmlFor="dates">Dates :</label>
//           <input type="text" id="dates" name="dates" className="form-control mb-2" placeholder="Ex: 2023 - 2025" required />

//           <label htmlFor="missions">Missions / Réalisations :</label>
//           <textarea id="missions" name="missions" rows={4} className="form-control mb-2" placeholder="Décrivez vos principales missions..." required></textarea>
//         </form>
//       </div>

//       <div className="col-md-6">
//         <h1>CV</h1>

//         <div className="information">
//           <h2>Informations Personnelles</h2>
//           <p id="previewnom"></p>
//           <p id="previewemail"></p>
//           <p id="previewtelephone"></p>
//           <p id="previewpays"></p>
//           <p id="previewville"></p>
//         </div>

//         <div className="profil">
//           <h2>Profil</h2>
//           <img id="previewphoto" src="" alt="Photo de profil" style={{maxWidth:"150px", display:"none"}} />
//           <p id="previewprofil"></p>
//         </div>

//         <div className="formation">
//           <h2>Formations</h2>
//           <p id="previewformation"></p>
//           <p id="previewecole"></p>
//           <p id="previewdatesformation"></p>
//           <p id="previewdetailsformation"></p>
//         </div>

//         <div className="experience">
//           <h2>Expériences professionnelles</h2>
//           <p id="previewposte"></p>
//           <p id="previewentreprise"></p>
//           <p id="previewdates"></p>
//           <p id="previewmissions"></p>
//         </div>

//         <div className="mt-3">
//           <button type="button" id="downloadBtn" className="btn btn-primary">
//             Télécharger
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>

  
//   </>
//   );
// }
//   export default Essaie;

  import {useState} from "react";
  
  function Test() {

    const [Texte, setTexte] = useState("bonjour");
    const handleClick = () => {

      setTexte("bonsoir");
      
    };
    return(
      <>
        <h1>{Texte}</h1>
        <button onClick={handleClick}>Changer le text</button>
      </>
    );
  }
export default Test;