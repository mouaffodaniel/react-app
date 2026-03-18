import { useState, useEffect } from "react";

function Admin() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [formData, setFormData] = useState({
        nom: "",
        email: "",
        password: ""
    });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch("http://localhost:3000/users");
            if (response.ok) {
                const data = await response.json();
                setUsers(data);
            }
        } catch (error) {
            console.log("Erreur de réseau", error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/users/${selectedUser.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                console.log("Erreur lors de la modification");
                return;
            }

            alert("Utilisateur modifié avec succès !");
            setSelectedUser(null);
            setFormData({ nom: "", email: "", password: "" });
            fetchUsers();

        } catch (error) {
            console.log("Erreur de réseau", error);
        }
    };

    const handleEdit = (user) => {
        setSelectedUser(user);
        setFormData({
            nom: user.nom,
            email: user.email,
            password: user.password
        });
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Voulez-vous vraiment supprimer cet utilisateur ?")) return;

        try {
            const response = await fetch(`http://localhost:3000/users/${id}`, {
                method: "DELETE"
            });

            if (!response.ok) {
                console.log("Erreur lors de la suppression");
                return;
            }

            alert("Utilisateur supprimé avec succès !");
            fetchUsers();

        } catch (error) {
            console.log("Erreur de réseau", error);
        }
    };

    return (
        <div className="container my-4">
            <h2 className="mb-4">👨‍💼 Panneau Administrateur</h2>

            {/* Formulaire de modification */}
            {selectedUser && (
                <div className="card shadow-sm mb-4">
                    <div className="card-body">
                        <h4 className="card-title">Modifier l'utilisateur</h4>
                        <form onSubmit={handleUpdate}>

                            <div className="mb-3">
                                <label className="form-label">Nom</label>
                                <input
                                    type="text"
                                    name="nom"
                                    className="form-control"
                                    value={formData.nom}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Mot de passe</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-success me-2">
                              Confirmer la modification
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => {
                                    setSelectedUser(null);
                                    setFormData({ nom: "", email: "", password: "" });
                                }}
                            >
                                 Annuler
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Tableau des utilisateurs */}
            <div className="card shadow-sm">
                <div className="card-body">
                    <h4 className="card-title mb-3"> Liste des utilisateurs</h4>
                    <table className="table table-bordered table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>Nom</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="text-center">Aucun utilisateur trouvé</td>
                                </tr>
                            ) : (
                                users.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.nom}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button
                                                className="btn btn-warning btn-sm me-2"
                                                onClick={() => handleEdit(user)}
                                            >
                                              Modifier
                                            </button>
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => handleDelete(user.id)}
                                            >
                                              Supprimer
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Admin;