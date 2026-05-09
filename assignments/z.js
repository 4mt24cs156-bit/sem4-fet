
        function show(id) {

            // Remove active class from all layers
            let layers = document.getElementsByClassName('layer');

            for(let i = 0; i < layers.length; i++) {
                layers[i].classList.remove('active');
            }

            // Show selected layer
            document.getElementById(id).classList.add('active');
        }
