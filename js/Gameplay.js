AFRAME.registerComponent("gameplay", {
    init: function() {
        this.time();
        
    },
    time: function() {
        var camera = document.querySelector("#camera");
        var timer = document.querySelector("#timer");
        var over = document.querySelector("#over");
        var time = 45
        var state = "play";
        setInterval(function() {
            if (state === "play" && time !== 0) {
                time = time - 1;
                timer.setAttribute("text", {
                    value: "Time: " + time
                });
                window.addEventListener("click", function() {
                    var tasks = document.querySelector("#tasks");
                    var num = camera.getAttribute("tasks");
                    tasks.setAttribute("text", {
                        value: "Tasks Remaining: " + num
                    });
                    if (num === "0") {
                        over.setAttribute("text", {
                            value: "Mission Completed"
                        });
                        state = "over";
                    }
                })
            } else {
                over.setAttribute("visible", true);
            }
        }, 1000);
    },
    score: function() {
        
    }
})