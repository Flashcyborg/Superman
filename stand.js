// Registering component in log-component.js
AFRAME.registerComponent('left-force', {
    schema: {
      
      moveX : {type : "number", default : 1}

    },
    tick: function () {
        window.addEventListener("click", (e) => {
       
        this.data.moveX = this.data.moveX+0.5
        })
        
        var pos = this.el.getAttribute("position"); 
       
        pos.x = this.data.moveX;
       
        this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
      }
  });

