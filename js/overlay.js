
/* Open when someone clicks on the span element */
function openIconOverlay() {
    document.getElementById("icon_overlay").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeIconOverlay() {
    document.getElementById("icon_overlay").style.width = "0%";
}

/* Open when someone clicks on the span element */
function openNeedOverlay() {
    document.getElementById("need_overlay").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNeedOverlay() {
    document.getElementById("need_overlay").style.width = "0%";
}

/* Open when someone clicks on the span element */
function openImplOverlay() {
    document.getElementById("impl_overlay").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeImplOverlay() {
    document.getElementById("impl_overlay").style.width = "0%";
}

function showNotification() {
    var notification = new NotificationBar({
		message : '<p>Something has happened somewhere in the system...</p>',
		icon: 'news',
		layout : 'bar',
		location: 'top',
		onClose : function() {
			bttn.disabled = false;
		}
	});

	// show the notification
	notification.show();
}