import HolographicMaterial from '../lib/HolographicMaterialVanilla.js'
AFRAME.registerComponent('holo-material', {
    schema: {
    },
    init: function () {
        console.log('holo-material')
        const loader = new THREE.GLTFLoader();
        const holographicMaterial = new HolographicMaterial();
        const holoMaterial1 = new HolographicMaterial({
            hologramColor: '#00d5ff',
            fresnelAmount: 0.7,
            blendMode: THREE.NormalBlending,
            scanlineSize: 3.7,
            signalSpeed: 0.18,
            hologramOpacity: 0.7,
            blinkFresnelOnly: true,
            depthTest: true,
            hologramBrightness: 1.6
        })

        const holoMaterial2 = new HolographicMaterial({
            hologramColor: '#00ffaa',
            fresnelAmount: 0.6,
            blendMode: THREE.NormalBlending,
            scanlineSize: 30,
            signalSpeed: 1,
            blinkFresnelOnly: true,
            hologramOpacity: 0.5,
            hologramBrightness: 2,
            depthTest: false
        });
        const holoMaterial3 = new HolographicMaterial({
            hologramColor: '#00ffaa',
            fresnelAmount: -0.5,
            blendMode: THREE.NormalBlending,
            scanlineSize: 20,
            signalSpeed: 1,
            blinkFresnelOnly: true,
            hologramOpacity: 0.5,
            hologramBrightness: 2,
            hologramColor: new THREE.Color(0x00d5ff),
            depthTest: false
        });
        this.holo1 = holoMaterial1;
        this.holo2 = holoMaterial2;
        this.holo3 = holoMaterial3;
        this.el.addEventListener("model-loaded", (e) => {
            var children = this.el.getObject3D('mesh').children;
            // children[0].material = holoMaterial1;
            // children[1].material = holoMaterial2;
            // children[2].material = holoMaterial1;






            this.el.getObject3D('mesh').traverse(node => {
                if (node.isMesh) {
                    // console.log('isMeshed');
                    node.material.dispose();
                    node.material = holoMaterial3;
                }
            });

        })
    },
    tick: function () {
        // this.holo1.update();
        // this.holo2.update();
        this.holo3.update();
    },
    update: function () {
        const data = this.data;
        const el = this.el;
    }
});