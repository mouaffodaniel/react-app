import {useEffect, useState } from "react";

function Asynchronne() {

    type User = {
        id: number;
        nom: string;
        prenom: string;
        ville: string; 
    };

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {

   // Gestion des données asynchrones avec fetch et async/await(gestion des API)
        const fecthuser = async () => {

            try{
                const response = await fetch("/data/user.json")//chemin d'accès du fichier json
                if (!response.ok) {
                    console.log("Erreur lors de la récupération des données");

                } else {
                    const data = await response.json();
                    setUsers(data);
                }
            } catch (error) {
               
                 console.log("Erreur de réseau ou de parsing", error);
            }

        };

            fecthuser();

            },[]);
    return (

        <>
            <div>
                <h1>Utilisateurs</h1>
                {
                    users.map(user=> (
                        <div key={user.id}>
                            <p>{user.nom}</p>
                            <p>{user.prenom}</p>
                            <p>{user.ville}</p>
                        </div>
                    ))}
            </div>
        </>
    );
}
export default Asynchronne;