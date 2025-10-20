const albums = [
    {
        album: "Abbey Road",
        anio: 1969,
        descografica: "Apple Records",
        numCanciones: "17",
        canciones: [
            { nombre: "Come Together", url: "https://www.youtube.com/embed/45cYwDMibGo", duracion: "4:20", compositores: "Lennon, McCartney" },
            { nombre: "Something", url: "https://www.youtube.com/embed/UelDrZ1aFeY", duracion: "3:03", compositores: "George Harrison" },
            { nombre: "Maxwell’s Silver Hammer", url: "https://www.youtube.com/embed/UG7Kjtn3nL8", duracion: "3:27", compositores: "Lennon, McCartney" },
            { nombre: "Oh! Darling", url: "https://www.youtube.com/embed/YxCQZx5a1T8", duracion: "3:26", compositores: "Lennon, McCartney" },
            { nombre: "Octopus’s Garden", url: "https://www.youtube.com/embed/cgPZ0w1-cfA", duracion: "2:51", compositores: "Ringo Starr" },
            { nombre: "I Want You (She’s So Heavy)", url: "https://www.youtube.com/embed/NPBzKR3j5pI", duracion: "7:47", compositores: "Lennon, McCartney" },
            { nombre: "Here Comes the Sun", url: "https://www.youtube.com/embed/KQetemT1sWc", duracion: "3:05", compositores: "George Harrison" },
            { nombre: "Because", url: "https://www.youtube.com/embed/zt7Oa2lgY3U", duracion: "2:45", compositores: "Lennon, McCartney" },
            { nombre: "You Never Give Me Your Money", url: "https://www.youtube.com/embed/LQSuTPqAqzA", duracion: "4:02", compositores: "Lennon, McCartney" },
            { nombre: "Sun King", url: "https://www.youtube.com/embed/_qL1E7xOQwA", duracion: "2:26", compositores: "Lennon, McCartney" },
            { nombre: "Mean Mr. Mustard", url: "https://www.youtube.com/embed/dnl3tB9l4KI", duracion: "1:06", compositores: "Lennon, McCartney" },
            { nombre: "Polythene Pam", url: "https://www.youtube.com/embed/loGQK0H2z20", duracion: "1:12", compositores: "Lennon, McCartney" },
            { nombre: "She Came In Through the Bathroom Window", url: "https://www.youtube.com/embed/nKjK8r3HH28", duracion: "1:57", compositores: "Lennon, McCartney" },
            { nombre: "Golden Slumbers", url: "https://www.youtube.com/embed/Tt8Jklj2YDA", duracion: "1:31", compositores: "Lennon, McCartney" },
            { nombre: "Carry That Weight", url: "https://www.youtube.com/embed/MtZ4tx0y-Wc", duracion: "1:36", compositores: "Lennon, McCartney" },
            { nombre: "The End", url: "https://www.youtube.com/embed/q_e87JJoC1Y", duracion: "2:05", compositores: "Lennon, McCartney" },
            { nombre: "Her Majesty", url: "https://www.youtube.com/embed/qM_gZKZ1vLk", duracion: "0:23", compositores: "Lennon, McCartney" }
        ]
    },
    {
        album: "Revolver",
        anio: 1966,
        descografica: "Parlophone",
        numCanciones: "14",
        canciones: [
            { nombre: "Taxman", url: "https://www.youtube.com/embed/DS-SAIqBfUY?si=EVOJTXRm8ubcNn_l", duracion: "2:39", compositores: "George Harrison" },
            { nombre: "Eleanor Rigby", url: "https://www.youtube.com/embed/HuS5NuXRb5Y", duracion: "2:08", compositores: "Lennon, McCartney" },
            { nombre: "I’m Only Sleeping", url: "https://www.youtube.com/embed/L-OEnyBwHrE?si=ltV8eCKem1AES2D7", duracion: "3:01", compositores: "Lennon, McCartney" },
            { nombre: "Love You To", url: "https://www.youtube.com/embed/tE93TJDKTQU", duracion: "3:00", compositores: "George Harrison" },
            { nombre: "Here, There and Everywhere", url: "https://www.youtube.com/embed/vs7U4xfkAfI", duracion: "2:25", compositores: "Lennon, McCartney" },
            { nombre: "Yellow Submarine", url: "https://www.youtube.com/embed/m2uTFF_3MaA", duracion: "2:40", compositores: "Lennon, McCartney" },
            { nombre: "She Said She Said", url: "https://www.youtube.com/embed/3iybCwJdudM", duracion: "2:37", compositores: "Lennon, McCartney" },
            { nombre: "Good Day Sunshine", url: "https://www.youtube.com/embed/6dC7ILQ_vtE", duracion: "2:09", compositores: "Lennon, McCartney" },
            { nombre: "And Your Bird Can Sing", url: "https://www.youtube.com/embed/sOUlbredoUM?si=f6jwVVSy0E1rKlI2", duracion: "2:01", compositores: "Lennon, McCartney" },
            { nombre: "For No One", url: "https://www.youtube.com/embed/sep5E3ssXLQ?si=jDJ7ZaB8QH8C8_Go", duracion: "2:01", compositores: "Lennon, McCartney" },
            { nombre: "Doctor Robert", url: "https://www.youtube.com/embed/a396v8kuViw?si=UrUCzivj6_RtH1UU", duracion: "2:14", compositores: "Lennon, McCartney" },
            { nombre: "I Want to Tell You", url: "https://www.youtube.com/embed/yqUUBUbfK3U", duracion: "2:30", compositores: "George Harrison" },
            { nombre: "Got to Get You Into My Life", url: "https://www.youtube.com/embed/azvE5dh2f1A", duracion: "2:29", compositores: "Lennon, McCartney" },
            { nombre: "Tomorrow Never Knows", url: "https://www.youtube.com/embed/6a3NcwfOBzQ", duracion: "2:57", compositores: "Lennon, McCartney" }
        ]
    }
];

function mostrarCancion(albumNombre, numCancion) {
    const album = albums.find(a => a.album === albumNombre);
    const cancion = album.canciones[numCancion];

    document.addEventListener("click", (event) => {
        if (event.target.closest("#album-revolver")) {
            document.getElementById("videoPlayer_Revolver").src = cancion.url;
        } else if (event.target.closest("#album-abbeyRoad")) {
            document.getElementById("videoPlayer_Abbey").src = cancion.url;
        }
    });
    console.log(`Reproduciendo: ${cancion.nombre} (${album.album})`);
}