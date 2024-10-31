AFRAME.registerComponent('register-events', {
    init: function () {
        var marker = this.el;
        var language;
        if(document.getElementById('language').innerHTML == '<u>FR</u>-EN') language = 'FR';
        if(document.getElementById('language').innerHTML == 'FR-<u>EN</u>') language = 'EN';
        // var language = document.getElementById('language').innerText;
        marker.addEventListener('markerFound', function () {
            var markerId = marker.id;
            console.log('markerFound', markerId);
            document.getElementById('target').style.display = 'none';
            document.getElementById('bottom').style.display = 'block';
            if (markerId == 'marker-astronaut') {
                if(language=='FR') document.getElementById('title').innerHTML = 'Astronaute'
                if(language=='EN') document.getElementById('title').innerHTML = 'Astronaut'
                if(language=='FR') document.getElementById('text').innerHTML = "Les sorties extravéhiculaires, communément appelées marches dans l’espace, font partie intégrante des responsabilités des astronautes. Lors de ces sorties, ils effectuent des tâches telles que des réparations, des installations et de la maintenance. La combinaison spatiale qu’ils portent est un peu comme une armure en tissu : elle les protège et leur fournit de l’oxygène dans l’environnement hostile de l’espace."
                if(language=='EN') document.getElementById('text').innerHTML = "Extravehicular activities, commonly known as spacewalks, are an integral part of astronauts’ responsibilities. During these outings, they perform tasks such as repairs, installations, and maintenance. The spacesuit they wear is like a fabric armor: it protects them and provides them with oxygen in the hostile environment of space."
            }
            if (markerId == 'marker-straliner') {
                if(language=='FR') document.getElementById('title').innerHTML = 'Starliner'
                if(language=='EN') document.getElementById('title').innerHTML = 'Starliner'
                if(language=='FR') document.getElementById('text').innerHTML = "En 2024, le vaisseau Starliner de Boeing a décollé vers la Station spatiale internationale avec des astronautes de la NASA à bord, rejoignant la liste restreinte des véhicules transportant des humains dans l’espace. La diversification des lanceurs spatiaux permet d'assurer une relève en cas de problème avec un type de vaisseau, mais entraîne aussi une accélération dans le développement des technologies."
                if(language=='EN') document.getElementById('text').innerHTML = "In 2024, Boeing’s Starliner spacecraft launched toward the International Space Station with NASA astronauts on board, joining the select list of vehicles carrying humans into space. Diversifying space launch systems ensures redundancy in case of issues with a particular type of spacecraft, and it also accelerates technology development."
            }
            if (markerId == 'marker-dragon') {
                if(language=='FR') document.getElementById('title').innerHTML = 'Dragon'
                if(language=='EN') document.getElementById('title').innerHTML = 'Dragon'
                if(language=='FR') document.getElementById('text').innerHTML = "Le vaisseau cargo Dragon, développé par l’entreprise SpaceX, assure le ravitaillement de la Station spatiale internationale conjointement avec d’autres vaisseaux. Cet appareil réutilisable peut s’arrimer à la Station de manière autonome. Dragon peut mettre en orbite et ramener sur Terre jusqu’à 6 tonnes de matériel, dont des expériences scientifiques."
                if(language=='EN') document.getElementById('text').innerHTML = "The Dragon cargo spacecraft, developed by SpaceX, provides supplies to the International Space Station (ISS) in conjunction with other spacecraft. This reusable vehicle can autonomously dock with the Station. Dragon can carry up to 6 tonnes of equipment, including scientific experiments, into orbit and back to Earth."
            }
            if (markerId == 'marker-hubble') {
                if(language=='FR') document.getElementById('title').innerHTML = 'Téléscope spatial Hubble'
                if(language=='EN') document.getElementById('title').innerHTML = 'Hubble Space Telescope'
                if(language=='FR') document.getElementById('text').innerHTML = "Le télescope spatial Hubble, lancé en 1990, nous dévoile des images extraordinaires de l’Univers. Grâce à lui, nous avons fait des découvertes majeures en astrophysique, notamment la première mesure précise du taux d’expansion de l’Univers et la confirmation de l’existence des trous noirs supermassifs."
                if(language=='EN') document.getElementById('text').innerHTML = "The Hubble Space Telescope, launched in 1990, reveals extraordinary images of the Universe. Thanks to this instrument, we have made major discoveries in astrophysics, including the first precise measurement of the expansion rate of the Universe and confirmation of the existence of supermassive black holes."
            }
            if (markerId == 'marker-iss') {
                if(language=='FR') document.getElementById('title').innerHTML = 'Station spatiale internationale (SSI)'
                if(language=='EN') document.getElementById('title').innerHTML = 'International Space Station (ISS)'
                if(language=='FR') document.getElementById('text').innerHTML = "La station spatiale internationale, dont la construction s’est terminée en 2011, est le plus gros objet jamais envoyé dans l’espace. Sa superficie est équivalente à celle d’un terrain de football américain! Chaque jour, elle effectue 16 orbites complètes autour de notre planète, et la nuit, elle est facilement repérable depuis la Terre, volant à seulement 320 kilomètres au-dessus de nous."
                if(language=='EN') document.getElementById('text').innerHTML = "The International Space Station, whose construction was completed in 2011, is the largest object ever sent into space. It covers an area as big as an american football field! Each day, it completes 16 full orbits around our planet, and at night, it is easily visible from Earth, flying just 320 kilometers above us."
            }
        });

        marker.addEventListener('markerLost', function () {
            var markerId = marker.id;
            console.log('markerLost', markerId);
            // document.getElementById('bottom').style.display = 'none';
            document.getElementById('target').style.display = 'block';
            // TODO: Add your own code here to react to the marker being lost.
        });
    }
});

AFRAME.registerComponent('register-events-astronaut', {
    init: function () {
        var marker = this.el;

        marker.addEventListener('markerFound', function () {
            var markerId = marker.id;
            console.log('markerFound', markerId);
            document.getElementById('bottom').style.display = 'block';
            document.getElementById('title').innerHTML = 'COUCOU'
            document.getElementById('text').innerHTML = 'ceci est le texte ceci est le texte ceci est le texte ceci est le texte ceci est le texte'
        });

        marker.addEventListener('markerLost', function () {
            var markerId = marker.id;
            console.log('markerLost', markerId);
            document.getElementById('bottom').style.display = 'none';
            // TODO: Add your own code here to react to the marker being lost.
        });
    }
});