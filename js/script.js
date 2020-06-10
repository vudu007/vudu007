const Typewriter = function (txtElement, words, wait = 2000) {
	this.txtElement = txtElement;
	this.words = words;
	this.txt = '';
	this.wordIndex = 0;
	this.wait = parseInt(wait, 10);
	this.type();
	this.IsDeleting = false;
}


// Type Mode
Typewriter.prototype.type = function () {
	// current index of word
	const current = this.wordIndex % this.words.length;
	// Get full text of current words
	const fullTxt = this.words[current];

	// check if deleting
	if (this.isDeleting) {
		// remove char
		this.txt = fullTxt.substring(0, this.txt.length - 1);

	} else {
		// add char
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	// insert txt into Element
	this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

	// Type speed
	let typeSpeed = 200;

	if (this.isDeleting) {
		typeSpeed /= 2;
	}

	// if word is complete

	if (!this.isDeleting && this.txt === fullTxt) {
		typeSpeed = this.wait;

		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {

		this.isDeleting = false;
		// move to the next word
		this.wordIndex++;
		// pause before typing
		typeSpeed = 300;
	}

	setTimeout(() => this.type(), typeSpeed);

}
// Init On Dom Load

document.addEventListener('DOMContentLoaded', init);

// Init App

function init() {
	const txtElement = document.querySelector('.txt-type');
	const words = JSON.parse(txtElement.getAttribute('data-words'));
	const wait = txtElement.getAttribute('data-wait');

	// Init Tywriter
	new Typewriter(txtElement, words, wait);
}