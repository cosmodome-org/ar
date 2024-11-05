AFRAME.registerComponent("sync-marker-pos", {
    init: function () {
        console.log('sync-marker-pos')
        this.localpos = new THREE.Vector3();
        this.worldpos = new THREE.Vector3();
        this.textEl = document.querySelector("p")
    },
    posToString: function (pos) {
        // return pos.x.toFixed(2) + " " + pos.y.toFixed(2) + " " + pos.z.toFixed(2);
        return pos.x.toFixed(2) + " " + pos.y.toFixed(2) + " -3";
    },
    // called on each frame
    tick: function () {
        // getAttribute("position") has the local position
        // this.el.object3D.position has the local position
        // this.el.getObject3D("mesh").position has the local position
        this.localpos.copy(this.el.getAttribute("position"))
        this.el.getObject3D("mesh").getWorldPosition(this.worldpos)
        document.getElementById('all').setAttribute('position', this.posToString(this.worldpos))
        // compose the displayed message
        // let msg = "";
        // msg += "Sphere local position:" + this.posToString(this.localpos)
        // msg += "<br>"
        // msg += "Sphere world position:" + this.posToString(this.worldpos)
        // console.log(msg)
        // this.textEl.innerHTML = msg
    }
})