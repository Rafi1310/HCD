const podcastScript = [
            { tijd: 1000, spreker: "Anna", tekst: "Welkom in deze donkere grot.", emotie: "fluisteren", sfeer: "[Echoënde waterdruppels]" },
            { tijd: 2500, spreker: "Tim", tekst: "Waarom praten we zo zachtjes?", emotie: "fluisteren", sfeer: "[Echoënde waterdruppels]" },
            { tijd: 4000, spreker: "Anna", tekst: "Omdat we het monster niet wakker mogen maken!", emotie: "boos", sfeer: "[Spannende, lage basmuziek]" },
            { tijd: 6500, spreker: "Tim", tekst: "Wauw, ik zie een schatkist! Geweldig!", emotie: "vrolijk", sfeer: "[Magisch, rinkelend geluid]" },
            { tijd: 8000, spreker: "Anna", tekst: "Wacht, raak hem niet aan!", emotie: "paniek", sfeer: "[Harde klik, mechanisch geratel]" },
            { tijd: 95000, spreker: "Tim", tekst: "Oeps... was dat een valstrik?", emotie: "fluisteren", sfeer: "[Diep, aanzwellend gerommel]" },
            { tijd: 11000, spreker: "Anna", tekst: "Rennen! Nu!", emotie: "boos", sfeer: "[Harde voetstappen, een luide brul in de verte]" },
            { tijd: 12500, spreker: "Tim", tekst: "Maar mijn tas met goud ligt daar nog...", emotie: "verdrietig", sfeer: "[Harde voetstappen en gehijg]" },
            { tijd: 14000, spreker: "Anna", tekst: "Laat liggen, als je tenminste wilt blijven leven!", emotie: "paniek", sfeer: "[Snelle, opzwepende achtervolgingsmuziek]" }
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