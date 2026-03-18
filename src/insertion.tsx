import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";

function Inscription() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nom: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({
        nom: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const validateField = (name: string, value: string) => {
        let error = "";

        if (name === "nom") {
            const nomRegex = /^[a-zA-ZÀ-ÿ\s-]*$/;
            if (value.length > 0 && !nomRegex.test(value)) {
                error = "Le nom ne doit contenir que des lettres, espaces et tirets";
            }
        }

        if (name === "email") {
            const emailRegex = /^[^@\s]+@(gmail|yahoo|outlook|hotmail|protonmail)\.(com|fr|cmr|ca|co\.uk|de|es|it|nl|be|ch|at|au|jp|kr|cn|in|br|mx|ar|za)$/i;
            if (value.length > 0 && !emailRegex.test(value)) {
                error = "L'email doit être d'un fournisseur reconnu (@gmail, @yahoo, @outlook, @hotmail, @protonmail)";
            }
        }

        if (name === "password") {
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (value.length > 0 && !passwordRegex.test(value)) {
                error = "Le mot de passe doit contenir au moins 8 caractères, 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial (@$!%*?&)";
            }
        }

        if (name === "confirmPassword") {
            if (value !== formData.password) {
                error = "Les mots de passe ne correspondent pas";
            }
        }

        setErrors({ ...errors, [name]: error });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateField(name, value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (errors.nom || errors.email || errors.password || errors.confirmPassword) {
            alert("Veuillez corriger les erreurs avant de soumettre");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nom: formData.nom,
                    email: formData.email,
                    password: formData.password
                })
            });

            if (!response.ok) {
                console.log("Erreur liée au serveur");
                return;
            }

            alert("Inscription réussie !");
            setFormData({ nom: "", email: "", password: "", confirmPassword: "" });
            navigate("/form");

        } catch (error) {
            console.log("Erreur de réseau", error);
        }
    };

    return (
        <div className="container my-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-3">Créer un compte</h3>
                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    <label htmlFor="nom" className="form-label">Nom</label>
                                    <input
                                        type="text"
                                        id="nom"
                                        name="nom"
                                        className={`form-control ${errors.nom ? "is-invalid" : ""}`}
                                        placeholder="Votre nom"
                                        value={formData.nom}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.nom && <div className="invalid-feedback d-block">{errors.nom}</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                        placeholder="Votre email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Mot de passe</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                        placeholder="Votre mot de passe"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label">Confirmation du mot de passe</label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                                        placeholder="Confirmez votre mot de passe"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.confirmPassword && <div className="invalid-feedback d-block">{errors.confirmPassword}</div>}
                                </div>

                                <button type="submit" className="btn btn-primary w-100">
                                    S'inscrire
                                </button>

                            </form>

                            <p className="text-center mt-3">
                                Déjà un compte ?{" "}
                                <a href="#" onClick={(e) => { e.preventDefault(); navigate("/form"); }} className="text-decoration-none">
                                    Se connecter
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inscription;