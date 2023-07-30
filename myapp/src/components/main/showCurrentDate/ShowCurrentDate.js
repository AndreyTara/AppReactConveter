
function ShowCurrentDate({ classElement }) {
	const d = new Date();
	const new_value = d.toISOString().slice(0, 10);
	document.querySelector({ classElement }).value = new_value;
}

export { ShowCurrentDate }