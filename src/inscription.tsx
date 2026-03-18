import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Inscription() {
    const navigate = useNavigate();
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nomError, setNomError] = useState("");
    const [prenomError, setPrenomError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    

    const validateNom = (value: string) => {
        const nomRegex = /^[a-zA-ZÀ-ÿ\s-]*$/;
        if (value.length > 0 && !nomRegex.test(value)) {
            setNomError("Le nom ne doit contenir que des lettres, espaces et tirets");
        } else {
            setNomError("");
        }
        setNom(value);
    };
        const validatePrenom = (value: string) => {
        const prenomRegex = /^[a-zA-ZÀ-ÿ\s-]*$/;
        if (value.length > 0 && !prenomRegex.test(value)) {
            setPrenomError("Le prénom ne doit contenir que des lettres, espaces et tirets");
        } else {
            setPrenomError("");
        }
        setPrenom(value);
    };
        const validatePassword = (value: string) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (value.length > 0 && !passwordRegex.test(value)) {
            setPasswordError("Le mot de passe doit contenir au moins 8 caractères, 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial (@$!%*?&)");
        } else {
            setPasswordError("");
        }
        setPassword(value);
    };

    const validateEmail = (value: string) => {
        const emailRegex = /^[^@\s]+@(gmail|yahoo|outlook|hotmail|protonmail)\.(com|fr|cmr|ca|co\.uk|de|es|it|nl|be|ch|at|au|jp|kr|cn|in|br|mx|ar|za)$/i;
        if (value.length > 0 && !emailRegex.test(value)) {
            setEmailError("L'email doit être d'un fournisseur reconnu (@gmail, @yahoo, @outlook, @hotmail, @protonmail)");
        } else {
            setEmailError("");
        }
        setEmail(value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (nomError || prenomError || emailError || passwordError) {
            alert("Veuillez corriger les erreurs avant de soumettre");
            return;
        }

        console.log({ nom, prenom, email, password });

        // TRAITEMENT DES DONNÉES D'INSCRIPTION 
        if (nom && prenom && email && password) {
            navigate("/success");
        }
    };

    return (
        <div className="container my-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-3">Inscription</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="nom" className="form-label">Nom</label>
                                    <input
                                        type="text"
                                        id="nom"
                                        name="nom"
                                        className={`form-control ${nomError ? "is-invalid" : ""}`}
                                        placeholder="Votre nom"
                                        value={nom}
                                        onChange={(e) => validateNom(e.target.value)}
                                        required
                                    />
                                    {nomError && <div className="invalid-feedback d-block">{nomError}</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="prenom" className="form-label">Prénom</label>
                                    <input
                                        type="text"
                                        id="prenom"
                                        name="prenom"
                                        className={`form-control ${prenomError ? "is-invalid" : ""}`}
                                        placeholder="Votre prénom"
                                        value={prenom}
                                        onChange={(e) => validatePrenom(e.target.value)}
                                        required
                                    />
                                    {prenomError && <div className="invalid-feedback d-block">{prenomError}</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className={`form-control ${emailError ? "is-invalid" : ""}`}
                                        placeholder="Votre email"
                                        value={email}
                                        onChange={(e) => validateEmail(e.target.value)}
                                        required
                                    />
                                    {emailError && <div className="invalid-feedback d-block">{emailError}</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Mot de passe</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className={`form-control ${passwordError ? "is-invalid" : ""}`}
                                        placeholder="Votre mot de passe"
                                        value={password}
                                        onChange={(e) => validatePassword(e.target.value)}
                                        required
                                    />
                                    {passwordError && <div className="invalid-feedback d-block">{passwordError}</div>}
                                </div>

                                <button type="submit" className="btn btn-primary w-100">S'inscrire</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inscription;