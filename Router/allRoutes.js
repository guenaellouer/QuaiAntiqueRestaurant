import Route from "./Route.js";


//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "Galerie", "/pages/galerie.html", []),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"],"/js/auth/signin.js"),
    new Route("/signup", "Insciption", "/pages/auth/signup.html", ["disconnnected"],"/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html", ["client","admin"]),
    new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html", ["client","admin"]),
    new Route("/allResa", "Vos réservations", "/pages/reservations/allResa.html", ["client"]),
    new Route("/reserver", "Réserver", "/pages/reservations/reserver.html", ["client"]),
];

//Le titre affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";