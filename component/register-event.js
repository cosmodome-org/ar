AFRAME.registerComponent('register-events', {
    posToString: function (pos) {
        return pos.x.toFixed(2) + " " + pos.y.toFixed(2) + " " + pos.z.toFixed(2);
    },
    init: function () {
        this.localpos = new THREE.Vector3();
        this.worldpos = new THREE.Vector3();
        console.log('register-events');
        var marker = this.el;
        var language;
        function show(id, visible) {
            document.getElementById(id).setAttribute('visible', visible);
        }
        function title(text) {
            document.getElementById('title').innerHTML = text;
        }
        function text(text) {
            document.getElementById('text').innerHTML = text;
        }
        function hideAll() {
            show('obj-dragon', false);
            show('obj-astronaut', false);
            show('obj-hubble', false);
            show('obj-starliner', false);
            show('obj-iss', false);
        }
        hideAll();

        marker.addEventListener('markerFound', function () {
            //
            this.localpos.copy(this.el.getAttribute("position"))
            this.el.getObject3D("mesh").getWorldPosition(this.worldpos)
            document.getElementById('all').setAttribute('position', this.posToString(this.worldpos))
            msg += "marker local position:" + this.posToString(this.localpos)
            msg += "<br>"
            msg += "marker world position:" + this.posToString(this.worldpos)
            console.log(msg)
            //
            if (document.getElementById('language').innerHTML == '<u>FR</u>-EN') language = 'FR';
            else if (document.getElementById('language').innerHTML == 'FR-<u>EN</u>') language = 'EN';
            var markerId = marker.id;
            console.log('markerFound', markerId);
            console.log('language : ' + language);
            document.getElementById('target').style.display = 'none';
            document.getElementById('bottom').style.display = 'block';
            if (markerId == 'marker-astronaut') {
                hideAll();
                show('obj-astronaut', true);
                if (language == 'FR') title('Astronaute');
                else if (language == 'EN') title('Astronaut');
                if (language == 'FR') text("Les sorties extravéhiculaires, communément appelées marches dans l’espace, font partie intégrante des responsabilités des astronautes. Lors de ces sorties, ils effectuent des tâches telles que des réparations, des installations et de la maintenance. La combinaison spatiale qu’ils portent est un peu comme une armure en tissu : elle les protège et leur fournit de l’oxygène dans l’environnement hostile de l’espace.");
                else if (language == 'EN') text("Extravehicular activities, commonly known as spacewalks, are an integral part of astronauts’ responsibilities. During these outings, they perform tasks such as repairs, installations, and maintenance. The spacesuit they wear is like a fabric armor: it protects them and provides them with oxygen in the hostile environment of space.");
            }
            else if (markerId == 'marker-starliner') {
                hideAll();
                show('obj-starliner', true);
                if (language == 'FR') title('Starliner');
                else if (language == 'EN') title('Starliner');
                if (language == 'FR') text("En 2024, le vaisseau Starliner de Boeing a décollé vers la Station spatiale internationale avec des astronautes de la NASA à bord, rejoignant la liste restreinte des véhicules transportant des humains dans l’espace. La diversification des lanceurs spatiaux permet d'assurer une relève en cas de problème avec un type de vaisseau, mais entraîne aussi une accélération dans le développement des technologies.");
                else if (language == 'EN') text("In 2024, Boeing’s Starliner spacecraft launched toward the International Space Station with NASA astronauts on board, joining the select list of vehicles carrying humans into space. Diversifying space launch systems ensures redundancy in case of issues with a particular type of spacecraft, and it also accelerates technology development.");
            }
            else if (markerId == 'marker-dragon') {
                hideAll();
                show('obj-dragon', true);
                if (language == 'FR') title('Dragon');
                else if (language == 'EN') title('Dragon');
                if (language == 'FR') text("Le vaisseau cargo Dragon, développé par l’entreprise SpaceX, assure le ravitaillement de la Station spatiale internationale conjointement avec d’autres vaisseaux. Cet appareil réutilisable peut s’arrimer à la Station de manière autonome. Dragon peut mettre en orbite et ramener sur Terre jusqu’à 6 tonnes de matériel, dont des expériences scientifiques.");
                else if (language == 'EN') text("The Dragon cargo spacecraft, developed by SpaceX, provides supplies to the International Space Station (ISS) in conjunction with other spacecraft. This reusable vehicle can autonomously dock with the Station. Dragon can carry up to 6 tonnes of equipment, including scientific experiments, into orbit and back to Earth.");
            }
            else if (markerId == 'marker-hubble') {
                hideAll();
                show('obj-hubble', true);
                if (language == 'FR') title('Téléscope spatial Hubble');
                else if (language == 'EN') title('Hubble Space Telescope');
                if (language == 'FR') text("Le télescope spatial Hubble, lancé en 1990, nous dévoile des images extraordinaires de l’Univers. Grâce à lui, nous avons fait des découvertes majeures en astrophysique, notamment la première mesure précise du taux d’expansion de l’Univers et la confirmation de l’existence des trous noirs supermassifs.");
                else if (language == 'EN') text("The Hubble Space Telescope, launched in 1990, reveals extraordinary images of the Universe. Thanks to this instrument, we have made major discoveries in astrophysics, including the first precise measurement of the expansion rate of the Universe and confirmation of the existence of supermassive black holes.");
            }
            else if (markerId == 'marker-iss') {
                hideAll();
                show('obj-iss', true);
                if (language == 'FR') title('Station spatiale internationale (SSI)');
                else if (language == 'EN') title('International Space Station (ISS)');
                if (language == 'FR') text("La station spatiale internationale, dont la construction s’est terminée en 2011, est le plus gros objet jamais envoyé dans l’espace. Sa superficie est équivalente à celle d’un terrain de football américain! Chaque jour, elle effectue 16 orbites complètes autour de notre planète, et la nuit, elle est facilement repérable depuis la Terre, volant à seulement 320 kilomètres au-dessus de nous.");
                else if (language == 'EN') text("The International Space Station, whose construction was completed in 2011, is the largest object ever sent into space. It covers an area as big as an american football field! Each day, it completes 16 full orbits around our planet, and at night, it is easily visible from Earth, flying just 320 kilometers above us.");
            }


        });

        marker.addEventListener('markerLost', function () {
            var markerId = marker.id;
            console.log('markerLost', markerId);
            // document.getElementById('bottom').style.display = 'none';
            document.getElementById('target').style.display = 'block';
            // TODO: Add your own code here to react to the marker being lost.
        });
    },
    tick: function () {
        // this.localpos.copy(this.el.getAttribute("position"))
        // this.el.getObject3D("mesh").getWorldPosition(this.worldpos)
        // document.getElementById('all').setAttribute('position', this.posToString(this.worldpos))
        // msg += "Sphere local position:" + this.posToString(this.localpos)
        // msg += "<br>"
        // msg += "Sphere world position:" + this.posToString(this.worldpos)
        // console.log(msg)
        // this.textEl.innerHTML = msg
    }
});

