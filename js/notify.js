(function ($) {

    'use strict';

    $(document).ready(function () {

        // Init here.
        var $button_notify = $('#notification-trigger'),
            smoothState;
		
		$button_notify.on("click", showNotification});
		
    });

}(jQuery));
