document.querySelector('.switch').addEventListener("change", function () {
    const condition = this.checked;
    const monthly = document.querySelector('.toggle-wrapper .monthly');
    const annually = document.querySelector('.toggle-wrapper .annually');
    const logo = document.querySelector('.toggle-wrapper .logo');
    const monthlyForm = document.querySelector('.monthly-form-wrapper');
    const annuallyForm = document.querySelector('.annually-form-wrapper');

    if (!condition) {
        monthly.classList.add('green');
        annually.classList.remove('green');
        logo.classList.remove('logo-green');
        logo.classList.remove('green');
        monthlyForm.classList.remove('hide');
        monthlyForm.classList.add('show');
        annuallyForm.classList.remove('show');
        annuallyForm.classList.add('hide');
    } else {
        monthly.classList.remove('green');
        annually.classList.add('green');
        logo.classList.add('logo-green');
        logo.classList.add('green');
        annuallyForm.classList.remove('hide');
        annuallyForm.classList.add('show');
        monthlyForm.classList.remove('show');
        monthlyForm.classList.add('hide');
    }
});

const radioList = document.querySelectorAll('.radio');

radioList.forEach(radio => radio.addEventListener("click", function (e) {
    const id = e.target.id;
    const essential = document.querySelector('.essential');
    const advanced = document.querySelector('.advanced');
    const professional = document.querySelector('.professional');
    const enterprise = document.querySelector('.enterprise');
    if (id === 'monthly-essential') {
        essential.classList.add('selected');
        advanced.classList.remove('selected');
        professional.classList.remove('selected');
        enterprise.classList.remove('selected');
        professional.style.borderWidth = '1px';
    } else if (id === 'monthly-advanced') {
        essential.classList.remove('selected');
        advanced.classList.add('selected');
        professional.classList.remove('selected');
        enterprise.classList.remove('selected');
        professional.style.borderWidth = 0;
    } else if (id === 'monthly-professional') {
        essential.classList.remove('selected');
        advanced.classList.remove('selected');
        professional.classList.add('selected');
        enterprise.classList.remove('selected');
        professional.style.borderWidth = '1px';
    } else {
        essential.classList.remove('selected');
        advanced.classList.remove('selected');
        professional.classList.remove('selected');
        enterprise.classList.add('selected');
        professional.style.borderWidth = '1px';
    }
}));

const annualRadioList = document.querySelectorAll('.annual-radio');

annualRadioList.forEach(radio => radio.addEventListener("click", function (e) {
    const id = e.target.id;
    const essential = document.querySelector('.annual-essential');
    const advanced = document.querySelector('.annual-advanced');
    const professional = document.querySelector('.annual-professional');
    const enterprise = document.querySelector('.annual-enterprise');
    if (id === 'annually-essential') {
        essential.classList.add('selected');
        advanced.classList.remove('selected');
        professional.classList.remove('selected');
        enterprise.classList.remove('selected');
        professional.style.borderWidth = '1px';
    } else if (id === 'annually-advanced') {
        essential.classList.remove('selected');
        advanced.classList.add('selected');
        professional.classList.remove('selected');
        enterprise.classList.remove('selected');
        professional.style.borderWidth = 0;
    } else if (id === 'annually-professional') {
        essential.classList.remove('selected');
        advanced.classList.remove('selected');
        professional.classList.add('selected');
        enterprise.classList.remove('selected');
        professional.style.borderWidth = '1px';
    } else {
        essential.classList.remove('selected');
        advanced.classList.remove('selected');
        professional.classList.remove('selected');
        enterprise.classList.add('selected');
        professional.style.borderWidth = '1px';
    }
}));