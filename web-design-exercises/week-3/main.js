const kickstarter = {
	name: 'Nicha',
	description: 'Nicha is an upcycle brand focused on make atemporal clothes using recycled fabrics, fabric scraps and second hand clothes.',
	imgPath: 'img/reward-icon.jpg',
	link: 'https://www.kickstarter.com/projects/859669267/nicha?ref=recommended&ref=discovery',
	pledged: '$358',
	backers: 7,
	pledgedLevels: [{
		name: 'Pledge $8 or more',
		details: 'Tote bag made by textile scraps',
		includes: ['Tote Bag'],
		availabel: true
	},
	{
		name: 'Pledge $10 or more',
		details: 'Purse made by textile scraps',
		includes: ['Purse'],
		availabel: true
	},
	{
		name: 'Pledge $42 or more',
		details: 'Basic blouse made by 50 recycled cotton and 50 cotton',
		includes: ['Basic Blouse Woman'],
		availabel: true
	}],
	timeLeft: function(){
		let second = 1000,
			minute = second * 60,
			hour = minute * 60,
			day = hour * 24;

		let timer;
		let end = new Date('09/28/2018 2:00 PM'),
			now = new Date();

		let distance = end - now;

		let days = Math.floor(distance / day),
			hours = Math.floor((distance % day) / hour),
			minutes = Math.floor((distance % hour) / minute),
			seconds = Math.floor((distance % minute) / second);

		return [days, hours, minutes, seconds];	
	}
}

let projectName = document.getElementById('projectName');
projectName.textContent = kickstarter.name;

let rewardIcon = document.getElementById('rewardIcon');
rewardIcon.src = kickstarter.imgPath;

let description = document.getElementById('description');
description.textContent = kickstarter.description;

let learnMore = document.getElementById('learnMore');
learnMore.href = kickstarter.link;

let pledged = document.getElementById('pledged');
pledged.innerHTML = '<span>' + kickstarter.pledged + '</span>' + ' pledged of $794 goal';

let backers = document.getElementById('backers');
backers.innerHTML = '<span>' + kickstarter.backers + '</span>' + ' backers';

let remainingTime = kickstarter.timeLeft();
let timeLeft = document.getElementById('timeLeft');
timeLeft.innerHTML = '<span>' + remainingTime[0] + '</span>' + ' &nbsp;days&nbsp; ' + '<span>' + remainingTime[1] + '</span>' + ' &nbsp;hours&nbsp; ' + '<span>' + remainingTime[2] + '</span>' + ' &nbsp;minutes&nbsp; ' + '<span>' +  remainingTime[3] + '</span>' + ' &nbsp;seconds&nbsp; before funding ends';

let items = document.getElementsByClassName('items');
let rewards = document.getElementsByClassName('rewards');
let aboutReward = document.getElementsByClassName('aboutReward');
for(let i = 0; i < kickstarter.pledgedLevels.length; i++){
	items[i].textContent = kickstarter.pledgedLevels[i].includes[0];
	rewards[i].textContent = kickstarter.pledgedLevels[i].name;
	aboutReward[i].textContent = kickstarter.pledgedLevels[i].details;
}

