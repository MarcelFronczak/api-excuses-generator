window.onload = function() {

    // Mobile Nav
    const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});


    // Displaying Excuses from excuser API

    // Display Random Excuse Widescreen
    const randomBtn = document.querySelector('.btn-random-widescreen');
    const box = document.querySelector(".content");

    const newH = document.createElement('h3');

    const labelBox = document.querySelector('.label');
    const newLabel = document.createElement('h4');
    newLabel.classList.add('label-text');

    randomBtn.addEventListener('click', () => {

        const h = document.querySelector('h3');

        const label = document.querySelector('h4');
        label.parentElement.removeChild(label);
        newLabel.innerText = randomBtn.innerText;
        labelBox.prepend(newLabel);

        let url = "https://excuser.herokuapp.com/v1/excuse";
        fetch(url)
            .then(response => response.json())
            .then(response => {
                let text = response[0].excuse;
                newH.innerText = `"${text}"`;
                h.parentElement.removeChild(h);
                box.appendChild(newH);
            })
    });

    // Display Random Excuse by Category Widescreen
    const cat_btns_wide = document.querySelectorAll('.btn-cat-widescreen');
    cat_btns_wide.forEach(catBtn => catBtn.addEventListener('click', () => {
        const h = document.querySelector('h3');

        const label = document.querySelector('h4');
        label.parentElement.removeChild(label);
        newLabel.innerText = catBtn.innerText;
        labelBox.prepend(newLabel);

        const categoryName = catBtn.innerText.toLowerCase();
        let catUrl = `https://excuser.herokuapp.com/v1/excuse/${ categoryName }`;

        fetch(catUrl)
            .then(response => response.json())
            .then(response => {
                let text = response[0].excuse;
                newH.innerText = `"${text}"`;
                h.parentElement.removeChild(h);
                box.appendChild(newH);
            })
    }))

    // Display Random Excuse Mobile
    const randomBtnMobile = document.querySelector('.btn-random-mobile');

    randomBtnMobile.addEventListener('click', () => {
        if (mobile_menu.classList.contains('is-active')) {
            mobile_menu.classList.remove('is-active');
            menu_btn.classList.remove('is-active');
        }

        const h = document.querySelector('h3');

        const label = document.querySelector('h4');
        label.parentElement.removeChild(label);
        newLabel.innerText = randomBtn.innerText;
        labelBox.prepend(newLabel);

        let url = "https://excuser.herokuapp.com/v1/excuse";
        fetch(url)
            .then(response => response.json())
            .then(response => {
                let text = response[0].excuse;
                newH.innerText = `"${text}"`;
                h.parentElement.removeChild(h);
                box.appendChild(newH);
            })
    });

    const cat_btns_mobile = document.querySelectorAll('.btn-cat-mobile');
    cat_btns_mobile.forEach(button => button.addEventListener('click', () => {
        if (mobile_menu.classList.contains('is-active')) {
            mobile_menu.classList.remove('is-active');
            menu_btn.classList.remove('is-active');
        }
        
        const h = document.querySelector('h3');

        const label = document.querySelector('h4');
        label.parentElement.removeChild(label);
        newLabel.innerText = button.innerText;
        labelBox.prepend(newLabel);

        const categoryName = button.innerText.toLowerCase();
        let catUrl = `https://excuser.herokuapp.com/v1/excuse/${ categoryName }`;

        fetch(catUrl)
            .then(response => response.json())
            .then(response => {
                let text = response[0].excuse;
                newH.innerText = `"${text}"`;
                h.parentElement.removeChild(h);
                box.appendChild(newH);
            })
    }));
};


