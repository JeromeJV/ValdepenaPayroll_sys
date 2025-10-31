            const popup = document.getElementById('popupOverlay');


            function openPopup() {
            popup.style.display = 'flex';  // show popup
                var x = document.getElementById("idnum").value;
                document.getElementById("idnumber").innerHTML = x;
                var y = document.getElementById("Lname").value;p
                document.getElementById("lastname").innerHTML = y;
                var z = document.getElementById("Fname").value;
                document.getElementById("firstname").innerHTML = z;
                var a = document.getElementById("Mname").value;
                document.getElementById("middlename").innerHTML = a;
                var b = document.getElementById("poss").value;
                document.getElementById("position").innerHTML = b;
                var c = document.getElementById("rt").value;
                document.getElementById("rate").innerHTML = c;
                var d = document.getElementById("wd").value;
                document.getElementById("workdays").innerHTML = d;
            }

            function closePopup() {
            popup.style.display = 'none';  // hide popup
            }