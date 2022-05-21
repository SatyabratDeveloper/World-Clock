let a;
let time;
var ct;

setInterval(() => {
    a = new Date();
    time = a.toLocaleDateString('en-GB', {
        timeZone: ct,
        weekday: 'long', // long, short, narrow
        day: '2-digit', // numeric, 2-digit
        year: 'numeric', // numeric, 2-digit
        month: 'long', // numeric, 2-digit, long, short, narrow
        hourCycle: 'h12', //h11, h12, h23, h24
        hour: '2-digit', // numeric, 2-digit
        minute: '2-digit', // numeric, 2-digit
        second: '2-digit', // numeric, 2-digit
    });
    
    document.getElementById("time").innerHTML = time;
}, 1000);
document.getElementById("flag").src = "images/India.png";
document.getElementById("current-country").innerHTML = "India";

var country = document.querySelectorAll(".dropdown-item").length;
for(var i = 0; i<country; i++){
    document.querySelectorAll(".dropdown-item")[i].addEventListener("click", function() {
        var currentCountry = this.innerHTML;

        countryTimeZone(currentCountry);

        setInterval(() => {
            a = new Date();
            time = a.toLocaleDateString('en-GB', {
                timeZone: ct,
                weekday: 'long', // long, short, narrow
                day: '2-digit', // numeric, 2-digit
                year: 'numeric', // numeric, 2-digit
                month: 'long', // numeric, 2-digit, long, short, narrow
                hourCycle: 'h12', //h11, h12, h23, h24
                hour: '2-digit', // numeric, 2-digit
                minute: '2-digit', // numeric, 2-digit
                second: '2-digit', // numeric, 2-digit
            });

            document.getElementById("time").innerHTML = time;
        }, 1000);
        document.getElementById("flag").src = "images/" + currentCountry + ".png";
        document.getElementById("current-country").innerHTML = currentCountry;
    });
}

function countryTimeZone(key) {
    switch (key) {
        case "Australia":
            ct = 'Australia/Melbourne';
            break;

        case "Canada":
            ct = 'America/Toronto';
            break;

        case "China":
            ct = 'Asia/Shanghai';
            break;
            
        case "France":
            ct = 'Europe/Paris';
            break;
                
        case "Germany":
            ct = 'Europe/Berlin';
            break;

        case "India":
            ct = 'Asia/Kolkata';
            break;

        case "Italy":
            ct = 'Europe/Rome';
            break;

        case "Japan":
            ct = 'Asia/Tokyo';
            break;
            
        case "Mexico":
            ct = 'America/Mexico_City';
            break;
                
        case "Russia":
            ct = 'Europe/Moscow';
            break;
            
        case "Singapore":
            ct = 'Asia/Singapore';
            break;
            
        case "South Africa":
            ct = 'Africa/Johannesburg';
            break;
            
        case "Thailand":
            ct = 'Asia/Bangkok';
            break;
            
        case "UAE":
            ct = 'Asia/Dubai';
            break;
            
        case "UK":
            ct = 'Europe/London';
            break;

        case "USA":
            ct = 'America/New_York';
            break;
                
        default: console.log("error");
            }
        }
        
        