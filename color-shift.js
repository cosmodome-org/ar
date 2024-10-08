AFRAME.registerComponent("color-shift", {
    init: function () 
    {
        // render the scene to this texture
        this.renderTarget0 = new THREE.WebGLRenderTarget(1024, 1024);
        this.renderTarget0.texture.magFilter = THREE.NearestFilter;
        this.renderTarget0.texture.minFilter = THREE.NearestFilter;
        this.renderTarget0.texture.generateMipmaps = false;

        let texture = this.renderTarget0.texture;

        let postMaterial = new THREE.ShaderMaterial( {

          uniforms: {
            tex: {type: "t", value: texture},
          },

          vertexShader: `
          varying vec2 vUv;
          void main() 
          {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
          }
          `,

          fragmentShader: `
          varying vec2 vUv;
          uniform sampler2D tex;
          void main() 
          {
              vec4 color = texture2D(tex, vUv);
              gl_FragColor = vec4(color.g, color.b, color.r, 1);
          }
          `
         });

        // separate scene #1 for texture post processing
        const quad = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 2), postMaterial );

        this.rtScene = new THREE.Scene();
        this.rtScene.add(quad);
        this.rtCamera = new THREE.OrthographicCamera();
        this.rtCamera.position.z = 0.5;
    },

    tick: function(t, dt)
    {
       // store XR settings
       const renderer = this.el.sceneEl.renderer;
       const currentRenderTarget = renderer.getRenderTarget();
       const currentXrEnabled = renderer.xr.enabled;
       const currentShadowAutoUpdate = renderer.shadowMap.autoUpdate;

       // temporarily disable XR
       renderer.xr.enabled = false;
       renderer.shadowMap.autoUpdate = false;

       // apply post-processing effects to previously rendered target texture,
       //   displayed on a quad, rendered to screen
       renderer.setRenderTarget(null);
       renderer.render(this.rtScene, this.rtCamera);

       // re-enable XR
       renderer.xr.enabled = currentXrEnabled;
       renderer.shadowMap.autoUpdate = currentShadowAutoUpdate;
       
       // render scene onto a texture the next time it renders
       renderer.setRenderTarget(this.renderTarget0); 
    }
});