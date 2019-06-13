$(document).ready(function () {
    // autoplay video
    $('#video').get(0).play();

    /**
     * Determine the mobile operating system.
     * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
     *
     * @returns {String}
     */
    function getMobileOperatingSystem() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
            $('.apps__link_app-store').removeClass('apps__link_hidden');
            $('.apps__link_google-play').removeClass('apps__link_hidden');
            $('.download-now__link_app-store').removeClass('download-now__link_hidden');
            $('.download-now__link_google-play').removeClass('  download-now__link_hidden');
            return "Windows Phone";
        }

        if (/android/i.test(userAgent)) {
            $('.apps__link_app-store').addClass('apps__link_hidden');
            $('.apps__link_google-play').removeClass('apps__link_hidden');
            $('.download-now__link_app-store').addClass('download-now__link_hidden');
            $('.download-now__link_google-play').removeClass('download-now__link_hidden');
            return "Android";
        }

        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            $('.apps__link_app-store').removeClass('apps__link_hidden');
            $('.apps__link_google-play').addClass('apps__link_hidden');
            $('.download-now__link_app-store').removeClass('download-now__link_hidden');
            $('.download-now__link_google-play').addClass('download-now__link_hidden');
            return "iOS";
        }

        else {
            $('.apps__link_app-store').removeClass('apps__link_hidden');
            $('.apps__link_google-play').removeClass('apps__link_hidden');
            $('.download-now__link_app-store').removeClass('download-now__link_hidden');
            $('.download-now__link_google-play').removeClass('download-now__link_hidden');
        }

        return "unknown";
    }
    getMobileOperatingSystem();
});