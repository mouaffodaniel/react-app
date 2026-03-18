import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Connexion() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validateEmail = (value: string) => {
        const emailRegex = /^[^\s@]+@(gmail|yahoo|outlook|hotmail|protonmail)\.(com|fr|cmr|ca|co\.uk|de|es|it|nl|be|ch|at|au|jp|kr|cn|in|br|mx|ar|za)$/i;
        if (value.length > 0 && !emailRegex.test(value)) {
            setEmailError("L'email doit être d'un fournisseur reconnu (@gmail, @yahoo, @outlook, @hotmail, @protonmail)");
        } else {
            setEmailError("");
        }
        setFormData({ ...formData, email: value });
    };

    const validatePassword = (value: string) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (value.length > 0 && !passwordRegex.test(value)) {
            setPasswordError("Le mot de passe doit contenir au moins 8 caractères, 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial (@$!%*?&)");
        } else {
            setPasswordError("");
        }
        setFormData({ ...formData, password: value });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "email") {
            validateEmail(value);
        } else if (name === "password") {
            validatePassword(value);
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (emailError || passwordError) {
            alert("Veuillez corriger les erreurs avant de soumettre");
            return;
        }

        console.log(formData);
        navigate("/dashboard");
    };

    return (
        <div className="container my-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-3">Connexion</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className={`form-control ${emailError ? "is-invalid" : ""}`}
                                        placeholder="Votre email"
                                        value={formData.email}
                                        onChange={handleChange}
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
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    {passwordError && <div className="invalid-feedback d-block">{passwordError}</div>}
                                </div>

                                <button type="submit" className="btn btn-primary w-100">Se connecter</button>
                            </form>

                            <p className="text-center mt-3">
                                Pas encore inscrit ?{" "}
                                <a href="#" onClick={(e) => { e.preventDefault(); navigate("/insertion"); }} className="text-decoration-none">
                                    S'inscrire ici
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Connexion;
