            var strSuccess = "<strong>JavaScript ✔</strong><br />";
            var strFailure = "";
            var strInformation = "";

            if (window.jQuery) {
                strSuccess = strSuccess + "<strong>jQuery ✔</strong><br />";

                // Bootstrap JavaScript Fallback
                // By flashtopia (Frank Basti):
                // https://github.com/MaxCDN/bootstrap-cdn/issues/110#issue-11539955
                if (typeof ($.fn.modal) === 'undefined') {
                    strFailure = strFailure + "<strong>Bootstrap JavaScript ✘</strong><br />";
                } else {
                    strSuccess = strSuccess + "<strong>Bootstrap JavaScript ✔</strong><br />";
                }

            } else {
                strFailure = strFailure + "<strong>jQuery ✘</strong><br />";
                strInformation = strInformation + "<strong>Bootstrap JavaScript ?</strong><br />jQuery is required to check if Bootstrap's JavaScript has loaded correctly.";
            }

            // Get <body> Color
            // By David Harrison:
            // http://www.webdeveloper.com/forum/showthread.php?56559-document-body-style-color&s=1e90ccb5dbb2dbece0a47fdc8a28e32d&p=317492#post317492
            if (window.getComputedStyle) {
                var bodyColor = window.getComputedStyle(document.getElementsByTagName("body")[0], null).getPropertyValue("color");
            } else {
                var bodyColor = eval('document.getElementsByTagName("body")[0].currentStyle.' + "color");
            }
            // Bootstrap CSS Fallback (via <body> color)
            // By flashtopia (Frank Basti):
            // https://github.com/MaxCDN/bootstrap-cdn/issues/110#issue-11539955
            if (bodyColor === 'rgb(51, 51, 51)') {
                strSuccess = strSuccess + "<strong>Bootstrap CSS ✔</strong><br />";
            } else {
                strFailure = strFailure + "<strong>Bootstrap CSS ✘</strong><br />";
            }

            document.getElementById("BDV-Success").innerHTML = strSuccess;
            document.getElementById("BDV-Failure").innerHTML = strFailure;
            document.getElementById("BDV-Information").innerHTML = strInformation;

            document.getElementById("BDV-Success").style.display = "block";
            if (!strFailure == "") {document.getElementById("BDV-Failure").style.display = "block"; }
            if (!strInformation == "") {document.getElementById("BDV-Information").style.display = "block"; }