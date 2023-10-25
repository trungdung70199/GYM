// button addEvent

let btnAction = document.getElementById('btn-action');
btnAction.addEventListener('click', () => {
	// input gio lam
	let hour = parseInt(document.getElementById('hour').value);
	// input bac cua nhan vien
	let level = parseInt(document.getElementById('level').value);

	// if (hour >= 400) {
	// 	alert('Nhan vien trong dieu kien dc thuong');
	// }

	// switch (level) {
	// 	case 1:
	// 		alert('Nhan vien dc thuong 1000$');
	// 		break;
	// 	case 2:
	// 		alert('Nhan vien dc thuong 2000$');
	// 		break;
	// 	default:
	// 		alert('Sai dinh dang');
	// 		break;
	// }

	if (hour >= 400 && level == 1) {
		alert('nhan vien dc thuong 1000$');
	} else if (hour >= 400 && level == 2) {
		alert('Nhan vien dc thuong 2000$');
	} else {
		alert('Sai dinh dang');
	}

    // Dung thu root?
});
