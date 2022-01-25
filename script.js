const buttonNext = document.querySelector('.button-next');
const buttonBack = document.querySelector('.button-back');
let currentStep = 1;
const form = document.querySelector('form');

buttonNext.addEventListener('click', function () {
	

	currentStep++;

	if (currentStep !== 1) {
		buttonBack.style.opacity = '1';
	}

       if (currentStep === 6) {
		buttonNext.innerText = 'Submit';
		resetSummaryData();
		fillSummary();
	}


	document.querySelector(`[data-step="${currentStep - 1}"]`).style.display = 'none';
	document.querySelector(`[data-step="${currentStep}"]`).style.display = 'block';
});

buttonBack.addEventListener('click', function () {
	if (currentStep === 1) {
		return;
	}

	currentStep--;

	buttonNext.innerText = 'Next';
	document.querySelector(`[data-step="${currentStep + 1}"]`).style.display = 'none';
	document.querySelector(`[data-step="${currentStep}"]`).style.display = 'block';
});



const resetSummaryData = () => {
	document.querySelectorAll('[data-field]').forEach((element) => {
		element.innerText = '';
	});
};

const fillSummary = () => {
	const data = new FormData(form);
	for (const [key, value] of data.entries()) {
		const listItem = document.querySelector(`[data-field="${key}"]`);
		listItem.innerText = Boolean(listItem.innerText) ? listItem.innerText + ', ' + value : value;
	}
};
