AFRAME.registerComponent("control", {
    init: function() {
        this.onClick()
    },
    onClick: function() {
        window.addEventListener("click", function() {
            var camera = document.querySelector("#camera")
            var coords = camera.getAttribute("position");
            var tasks = parseInt(camera.getAttribute("tasks"));
            var hill = camera.getAttribute("hill");
            var rover = camera.getAttribute("rover");
            console.log(hill)
            if (coords.x > 78 && coords.x < 207 && coords.z > -85 && coords.z < 33 && hill === "false") {
                camera.setAttribute("hill", "true");
                camera.setAttribute("tasks", tasks - 1);
                console.log(camera.getAttribute("tasks"))
            }
            if (coords.x > -120 && coords.x < -75  && coords.z > -15 && coords.z < 25 && rover === "false") {
                camera.setAttribute("rover", "true");
                camera.setAttribute("tasks", tasks - 1);
            }
        })
    }
});