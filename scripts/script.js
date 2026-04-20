// Het script met tijden, emojis en sferen
const podcastScript = [
    { tijd: 1000, spreker: "Anna", tekst: "Welkom in deze donkere grot.", emotie: "fluisteren", emoji: "🤫", sfeer: "🪨 [Echoënde waterdruppels]" },
    { tijd: 2500, spreker: "Tim", tekst: "Waarom praten we zo zachtjes?", emotie: "fluisteren", emoji: "🤔", sfeer: "🪨 [Echoënde waterdruppels]" },
    { tijd: 4000, spreker: "Anna", tekst: "Omdat we het monster niet wakker mogen maken!", emotie: "boos", emoji: "😤", sfeer: "⚠️ [Spannende, lage basmuziek]" },
    { tijd: 6500, spreker: "Tim", tekst: "Wauw, ik zie een schatkist! Geweldig!", emotie: "vrolijk", emoji: "✨", sfeer: "✨ [Magisch, rinkelend geluid]" },
    { tijd: 8000, spreker: "Anna", tekst: "Wacht, raak hem niet aan!", emotie: "paniek", emoji: "😨", sfeer: "⚠️ [Harde klik, mechanisch geratel]" },
    { tijd: 9500, spreker: "Tim", tekst: "Oeps... was dat een valstrik?", emotie: "fluisteren", emoji: "🤫", sfeer: "⚠️ [Diep, aanzwellend gerommel]" },
    { tijd: 11000, spreker: "Anna", tekst: "Rennen! Nu!", emotie: "boos", emoji: "😤", sfeer: "⚠️ [Harde voetstappen, een luide brul in de verte]" },
    { tijd: 12500, spreker: "Tim", tekst: "Maar mijn tas met goud ligt daar nog...", emotie: "verdrietig", emoji: "😢", sfeer: "⚠️ [Harde voetstappen en gehijg]" },
    { tijd: 14000, spreker: "Anna", tekst: "Laat liggen, als je tenminste wilt blijven leven!", emotie: "paniek", emoji: "😨", sfeer: "⚠️ [Snelle, opzwepende achtervolgingsmuziek]" }
];

let actieveTimeouts = [];

function resetScherm() {
    actieveTimeouts.forEach(clearTimeout);
    actieveTimeouts = [];
    document.getElementById('transcriptie').innerHTML = '';
}

function startLuisterModus() {
    resetScherm();
    const transcriptieDiv = document.getElementById('transcriptie');
    const sfeerDiv = document.getElementById('sfeer-balk');
    
    sfeerDiv.style.display = 'block';

    podcastScript.forEach(item => {
        let timer = setTimeout(() => {
            sfeerDiv.innerText = "Achtergrondgeluid: " + item.sfeer;
            
            transcriptieDiv.innerHTML += `
                <div class="bericht ${item.emotie}">
                    <span class="spreker">${item.spreker}</span>
                    <span class="emotie-emoji">${item.emoji}</span>
                    <p>${item.tekst}</p>
                </div>
            `;
            window.scrollTo(0, document.body.scrollHeight);
        }, item.tijd);
        
        actieveTimeouts.push(timer);
    });
}

function startLeesModusKleurrijk() {
    resetScherm();
    const transcriptieDiv = document.getElementById('transcriptie');
    const sfeerDiv = document.getElementById('sfeer-balk');
    
    sfeerDiv.style.display = 'none';

    podcastScript.forEach(item => {
        transcriptieDiv.innerHTML += `<p style="color: #888; font-size: 14px; margin-bottom: 0;"><i>${item.sfeer}</i></p>`;
        
        transcriptieDiv.innerHTML += `
            <div class="bericht ${item.emotie}" style="margin-top: 5px;">
                <span class="spreker">${item.spreker}</span>
                <span class="emotie-emoji">${item.emoji}</span>
                <p>${item.tekst}</p>
            </div>
        `;
    });
}

function startLeesModusSaai() {
    resetScherm();
    const transcriptieDiv = document.getElementById('transcriptie');
    const sfeerDiv = document.getElementById('sfeer-balk');
    
    sfeerDiv.style.display = 'none'; // Verberg de grote sfeerbalk

    podcastScript.forEach(item => {
        // Strip de emojis uit de sfeer voor een nog rustiger beeld (optioneel, maar wel zo strak)
        let sfeerZonderEmoji = item.sfeer.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '');

        // Heel subtiel de sfeer aangeven in grijze letters
        transcriptieDiv.innerHTML += `<p style="color: #aaa; font-size: 13px; margin: 15px 0 5px 0;">[Achtergrond: ${sfeerZonderEmoji}]</p>`;
        
        // De tekst plaatsen met de class 'saai' (zonder emoji's en zonder kleur-classes)
        transcriptieDiv.innerHTML += `
            <div class="bericht saai" style="margin-top: 0;">
                <span class="spreker">${item.spreker}:</span>
                <p>${item.tekst}</p>
            </div>
        `;
    });
}