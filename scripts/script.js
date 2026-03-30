const podcastScript = [
            { tijd: 1000, spreker: "Anna", tekst: "Welkom in deze donkere grot.", emotie: "fluisteren", sfeer: "[Echoënde waterdruppels]" },
            { tijd: 3500, spreker: "Tim", tekst: "Waarom praten we zo zachtjes?", emotie: "fluisteren", sfeer: "[Echoënde waterdruppels]" },
            { tijd: 6500, spreker: "Anna", tekst: "Omdat we het monster niet wakker mogen maken!", emotie: "boos", sfeer: "[Spannende, lage basmuziek]" },
            { tijd: 9500, spreker: "Tim", tekst: "Wauw, ik zie een schatkist! Geweldig!", emotie: "vrolijk", sfeer: "[Magisch, rinkelend geluid]" }
        ];

        function startPodcast() {
            const transcriptieDiv = document.getElementById('transcriptie');
            const sfeerDiv = document.getElementById('sfeer-balk');

            // Speel het script af
            podcastScript.forEach(item => {
                setTimeout(() => {
                    // 1. Update de sfeer/achtergrondgeluid
                    sfeerDiv.innerText = "Achtergrondgeluid: " + item.sfeer;

                    // 2. Zet de tekst op het scherm met de juiste CSS class voor de emotie
                    transcriptieDiv.innerHTML += `<p class="${item.emotie}"><b>${item.spreker}:</b> ${item.tekst}</p>`;
                    
                }, item.tijd);
            });
        }