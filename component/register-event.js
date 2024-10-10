AFRAME.registerComponent('register-events', {
    init: function () {
        var marker = this.el;
        
        marker.addEventListener('markerFound', function () {
            var markerId = marker.id;
            console.log('markerFound', markerId);
            document.getElementById('target').style.display = 'none';
            document.getElementById('bottom').style.display = 'block';
            if (markerId == 'marker-astronaut') {
                document.getElementById('title').innerHTML = 'ASTRONAUT'
                document.getElementById('text').innerHTML = 'Astro ceci est le texte ceci est le texte ceci est le texte ceci est le texte ceci est le texte'
            }
            if (markerId == 'marker-straliner') {
                document.getElementById('title').innerHTML = 'STARLINER'
                document.getElementById('text').innerHTML = 'Starliner ceci est le texte ceci est le texte ceci est le texte ceci est le texte ceci est le texte'
            }
            if (markerId == 'marker-dragon') {
                document.getElementById('title').innerHTML = 'DRAGON'
                document.getElementById('text').innerHTML = 'Dragon ceci est le texte ceci est le texte ceci est le texte ceci est le texte ceci est le texte'
            }
            if (markerId == 'marker-hubble') {
                document.getElementById('title').innerHTML = 'HUBBLE'
                document.getElementById('text').innerHTML = 'Hubble ceci est le texte ceci est le texte ceci est le texte ceci est le texte ceci est le texte'
            }
            if (markerId == 'marker-iss') {
                document.getElementById('title').innerHTML = 'ISS'
                document.getElementById('text').innerHTML = 'ISS ceci est le texte ceci est le texte ceci est le texte ceci est le texte ceci est le texte'
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