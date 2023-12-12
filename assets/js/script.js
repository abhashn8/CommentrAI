let liveTagBtn = document.getElementById("live-btn")
let recentTagBtn = document.getElementById("recent-btn")
let upcomingTagBtn = document.getElementById("incoming-btn")

let liveMatches = document.getElementById("live-cards")
let recentMatches = document.getElementById("recent-cards")
let upcomingMatches = document.getElementById("incoming-cards")

let recentBtn = document.getElementById("recent-btn")
let upcomingBtn = document.getElementById("upcoming-btn")
let recentEvents = document.getElementById("recent-events")
let upcomingEvents = document.getElementById("upcoming-events")

let homeSection = document.getElementById("home-section")
let tvSection = document.getElementById("tv-section")
let calendarSection = document.getElementById("calendar-section")

let homeLink = document.getElementById("home-link")
let tvLink = document.getElementById("tv-link")
let calendarLink = document.getElementById("calendar-link")

// let playerName = document.getElementById("player-name")
// let playerRun = document.getElementById("player-run")
// let playerBowl = document.getElementById("player-bowl")
// let playerSix = document.getElementById("player-six")
// let playerFour = document.getElementById("player-four")
// let playerStrikeRate = document.getElementById("player-StrikeRate")


let preLoader = document.getElementById("pre-loader")
console.log(calendarLink)


// PRELOADER 
window.addEventListener("load", () => {
	preLoader.style.display = " none"
})

// MATCHES

let matchesLoaded = {
	live: false,
	recent: false,
	upcoming: false
}


let playerOfTheMatch = document.getElementById("player-of-the-match")
let matchStatus = document.getElementById("match-status")
let extraBatting = document.getElementById("extra-batting")
let extraBattingOvers = document.getElementById("extra-batting-overs")
let batTeamName = document.getElementById("bat-team-name")
let bowlingTeamName = document.getElementById("bowling-team-name")

async function fetchData(matchId) {
	let matchScoreCard = document.getElementById("match-scorecard");

	try {
		const response = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchId}/scard`, {
			method: 'GET',
			headers: {
<<<<<<< HEAD
				// 8 
=======
				// 8
>>>>>>> 67a0dea4e7081fd67d9492453f7925d751baf32c
				'X-RapidAPI-Key': '85534a32e2msh413b9cae9a18949p1403e2jsn1f4d0abac534',
				// 'X-RapidAPI-Key': '7f97c88be2mshb65b57c8d2913cdp1faf78jsn88326a15efcf',
				'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
			}
		});
		const result = await response.json();
		console.log("result", result);

		let menSummary = result.matchHeader.playersOfTheMatch[0].fullName
		let batTeam = result.scoreCard[0].batTeamDetails.batTeamName
		let bowlingTeam = result.scoreCard[0].bowlTeamDetails.bowlTeamName

		batTeamName.innerText = batTeam
		bowlingTeamName.innerText = bowlingTeam
		let statusSummary = result.matchHeader.status
		playerOfTheMatch.innerText = menSummary
		matchStatus.innerText = statusSummary
		console.log(menSummary)
		let extractScoreCards = result.scoreCard[0] //.batTeamDetails.batsmenData

		let battingWic = extractScoreCards.scoreDetails.wickets
		let battingRuns = extractScoreCards.scoreDetails.runs
		let battingRunRate = extractScoreCards.scoreDetails.runRate
		let battingOvers = extractScoreCards.scoreDetails.overs

		extraBatting.innerText = `${battingRuns} - ${battingWic}/ ${battingOvers}`
		extraBattingOvers.innerText = battingRunRate

		// extractScoreCards.forEach(extractScoreCard => {
			let batsMansData = extractScoreCards.batTeamDetails.batsmenData;

			if (typeof batsMansData === 'object' && batsMansData !== null) {
				for (const key in batsMansData) {
					const batsManData = batsMansData[key];
					console.log(batsManData);

					let playerName = batsManData.batName;
					let playerRun = batsManData.runs;
					let playerBowl = batsManData.balls;
					let playerSix = batsManData.sixes;
					let playerFour = batsManData.fours;
					let playerStrikeRate = batsManData.strikeRate;

					console.log(playerName, playerBowl, playerRun, playerSix, playerFour, playerStrikeRate)

					if (playerRun) {
							matchScoreCard.innerHTML += `
							<tr>
							<td class="column-space" id="player-name">${playerName} </td>
							<td class="column-space" id="player-run">${playerRun}</td>
							<td class="column-space" id="player-bowl">${playerBowl}</td>
							<td class="column-space" id="player-six">${playerSix}</td>
							<td class="column-space" id="player-four">${playerFour}</td>
							<td class="column-space" id="player-strike-rate">${playerStrikeRate}</td>
							</tr>
							`;
					}
				}
			} else {
				console.error("batsMansData not found");
			}
		// });

	} catch (error) {
		console.error(error);
		matchScoreCard.innerHTML += `<p>There was an error loading the scorecard</p>`;
	}
}


// /*
const matchOptions = {
	method: 'GET',
	headers: {
		// 8
		'X-RapidAPI-Key': '85534a32e2msh413b9cae9a18949p1403e2jsn1f4d0abac534',

		// 789
		// 'X-RapidAPI-Key': 'c1bed9ec45msh5b49abb77b7300ep15fed0jsn0d8cca958638',

		// college 
		// 'X-RapidAPI-Key': '7f97c88be2mshb65b57c8d2913cdp1faf78jsn88326a15efcf',


		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};
let matchId;
async function displayMatches(url, matchContainer) {
	let result;
	try {
		const response = await fetch(url, matchOptions);
		result = await response.json();
	} catch (err) {
		console.log("Error", err)
		matchContainer.innerHTML = `<div class="no-matches">No matches found! Please try again later.</div>`;
	}
	// console.log(result);


	let matches = result.typeMatches;
	matches.forEach(match => {
		let matchesInfo = match.seriesMatches[0].seriesAdWrapper.matches[0].matchInfo
		// console.log(matchesInfo)
		matchId = matchesInfo.matchId
		let teamImgId = matchesInfo.team1.imageId
		let seriesName = matchesInfo.seriesName
		let team1 = matchesInfo.team1.teamName
		let team2 = matchesInfo.team2.teamName
		let matchVenue = matchesInfo.venueInfo.ground
		// 75385

		// 172301
		// 172203
		// console.log(matchesInfo.startDate)
		let startDateFull = new Date(parseInt(matchesInfo.startDate))
		let endDateFull = new Date(parseInt(matchesInfo.endDate))

		const monthNames = [
			"Jan", "Feb", "Mar", "Apr", "May", "Jun",
			"Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
		];

		const alphaMonth = monthNames[startDateFull.getMonth()];

		let startDate = `${alphaMonth} ${startDateFull.getDate()}, ${startDateFull.getFullYear()}`
		let startTimeHr = startDateFull.getHours()
		let startTimeMins = startDateFull.getMinutes()

		let endTimeHr = endDateFull.getHours()
		let endTimeMins = endDateFull.getMinutes()

		// console.log(startDate, startTimeHr, startTimeMins, "-", endTimeHr, endTimeMins)

		// let liveCards = document.getElementById("live-cards")

		matchContainer.innerHTML += `
			<div class="live-card" id="${matchId}">
			<div class="match-teams">${team1} Vs ${team2}</div>
			<span class="series-name">${seriesName}</span>
			<!-- <span class="match-series">${matchVenue}</span> -->
			<div class="match-setting"><span class="match-date">${startDate}</span> &bull; <span
				class="match-time">${startTimeHr}:${startTimeMins} - ${endTimeHr}:${endTimeMins}</span> </div>
			</div>
	`

	});




	let renderMatchesCard = document.getElementsByClassName("live-card");
	renderMatchesCard = [...renderMatchesCard];

	renderMatchesCard.forEach(renderMatchCard => {
		renderMatchCard.addEventListener('click', () => {
			tvSection.style.display = "flex";
			tvSection.style.flexDirection = "column";
			homeSection.style.display = "none";
			calendarSection.style.display = "none";

			fetchData(matchId);
		});
	});


	// 	let renderMatchesCard = document.getElementsByClassName("live-card");
	// 	renderMatchesCard = [...renderMatchesCard];

	// 	renderMatchesCard.forEach(async renderMatchCard => {
	// 		renderMatchCard.addEventListener('click', () => {
	// 			tvSection.style.display = "flex";
	// 			tvSection.style.flexDirection = "column";
	// 			homeSection.style.display = "none";
	// 			calendarSection.style.display = "none";


	// 			let matchScoreCard = document.getElementById("match-scorecard")

	// 			try {
	// 				const response = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchId}/scard`, {
	// 					method: 'GET',
	// 					headers: {
	// 						// 8
	// 						// 'X-RapidAPI-Key': '85534a32e2msh413b9cae9a18949p1403e2jsn1f4d0abac534',
	// 						// 789
	// 						// 'X-RapidAPI-Key': 'c1bed9ec45msh5b49abb77b7300ep15fed0jsn0d8cca958638',
	// 						//colelge
	// 						'X-RapidAPI-Key': '7f97c88be2mshb65b57c8d2913cdp1faf78jsn88326a15efcf',

	// 						'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	// 					}
	// 				});
	// 				const result = await response.json();
	// 				console.log("result", result);

	// 				let extractScoreCards = result.scoreCard //.batTeamDetails.batsmenData

	// 				extractScoreCards.forEach(extractScoreCard => {
	// 					let batsMansData = extractScoreCard.batTeamDetails.batsmenData;

	// 					if (typeof batsMansData === 'object' && batsMansData !== null) {
	// 						for (const key in batsMansData) {
	// 							const batsManData = batsMansData[key];
	// 							console.log(batsManData);

	// 							let playerName = batsManData.batName;
	// 							let playerRun = batsManData.runs;
	// 							let playerBowl = batsManData.balls;
	// 							let playerSix = batsManData.sixes;
	// 							let playerFour = batsManData.fours;
	// 							let playerStrikeRate = batsManData.strikeRate;

	// 							console.log(playerName, playerBowl, playerRun, playerSix, playerFour, playerStrikeRate)

	// 							if (playerRun) {
	// 								matchScoreCard.innerHTML += `
	// 								<tr>
	// 									<td class="column-space" id="player-name">${playerName} </td>
	// 									<td class="column-space" id="player-run">${playerRun}</td>
	// 									<td class="column-space" id="player-bowl">${playerBowl}</td>
	// 									<td class="column-space" id="player-six">${playerSix}</td>
	// 									<td class="column-space" id="player-four">${playerFour}</td>
	// 									<td class="column-space" id="player-strike-rate">${playerStrikeRate}</td>
	// 								</tr>
	// 							`;
	// 							}
	// 						}
	// 					} else {
	// 						console.error("batsMansData not found");
	// 					}
	// 				});
	// 				console.log(renderMatchCard);
	// 			} catch (error) {
	// 				console.error(error);
	// 				matchScoreCard.innerHTML += `<p>there was error loading the score card</p>`

	// 			}
	// 		})
	// 	});


	}



	let showLive = () => {
		if (!matchesLoaded.live) {
			displayMatches("https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live", liveMatches)
			matchesLoaded.live = true;

		}
		liveMatches.style.display = "flex"
		recentMatches.style.display = "none"
		upcomingMatches.style.display = "none"
	}

	window.addEventListener("load", showLive())

	liveTagBtn.addEventListener('click', () => {
		if (!matchesLoaded.live) {
			displayMatches("https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live", liveMatches)
			matchesLoaded.live = true;

		}
		liveMatches.style.display = "flex"
		recentMatches.style.display = "none"
		upcomingMatches.style.display = "none"
	})

	recentTagBtn.addEventListener('click', () => {
		if (!matchesLoaded.recent) {
			displayMatches("https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent", recentMatches)
			matchesLoaded.recent = true;
		}

		recentMatches.style.display = "flex"
		liveMatches.style.display = "none"
		upcomingMatches.style.display = "none"
	})
	upcomingTagBtn.addEventListener('click', () => {
		if (!matchesLoaded.upcoming) {
			displayMatches("https://cricbuzz-cricket.p.rapidapi.com/matches/v1/upcoming", upcomingMatches);
			matchesLoaded.upcoming = true;

		}
		upcomingMatches.style.display = "flex"
		recentMatches.style.display = "none"
		liveMatches.style.display = "none"
	})


	// */



	homeLink.addEventListener("click", () => {
		homeSection.style.display = "flex";
		homeSection.style.flexDirection = "column";
		tvSection.style.display = "none";
		calendarSection.style.display = "none";
	})

	tvLink.addEventListener("click", () => {
		tvSection.style.display = "flex";
		tvSection.style.flexDirection = "column";
		homeSection.style.display = "none";
		calendarSection.style.display = "none";
	})

	calendarLink.addEventListener("click", () => {
		homeSection.style.display = "none";
		tvSection.style.display = "none";
		calendarSection.style.display = "flex";
	})


	// function toggleTags() {
	// 	upcomingEvents.classList.toggle("display-cards")
	// 	recentEvents.classList.toggle("display-cards")
	// }

	// recentBtn.addEventListener("click", () => {
	// 	upcomingEvents.classList.toggle("display-cards")
	// 	recentEvents.classList.toggle("display-cards")
	// })

	// upcomingBtn.addEventListener("click", () => {
	// 	upcomingEvents.classList.toggle("display-cards")
	// 	recentEvents.classList.toggle("display-cards")
	// })



	// const newsUrl = 'https://cricbuzz-cricket.p.rapidapi.com/news/v1/index';
	// const newsOptions = {
	// 	method: 'GET',
	// 	headers: {
	// 		'X-RapidAPI-Key': '85534a32e2msh413b9cae9a18949p1403e2jsn1f4d0abac534',
	// 		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	// 	}
	// };


	let newsLoad = {
		newsFlag: false
	}

	calendarLink.addEventListener("click", async function displayNews() {

		if (!newsLoad.newsFlag) {
			const response = await fetch("https://cricbuzz-cricket.p.rapidapi.com/news/v1/index", {
				method: 'GET',
				headers: {
					// 8 
					'X-RapidAPI-Key': '85534a32e2msh413b9cae9a18949p1403e2jsn1f4d0abac534',
					// 789
					// 'X-RapidAPI-Key': 'c1bed9ec45msh5b49abb77b7300ep15fed0jsn0d8cca958638',

					// college
					// 'X-RapidAPI-Key': '7f97c88be2mshb65b57c8d2913cdp1faf78jsn88326a15efcf',

					'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
				}
			});
			const result = await response.json();
			console.log(result)

			let newses = result.storyList
			newses.forEach(news => {
				let newsStory = news.story
				if (newsStory) {

					let newshline = newsStory.hline;
					let newsIntro = newsStory.intro;
					let newsTime = new Date(parseInt(newsStory.pubTime));

					const monthNames = [
						"Jan", "Feb", "Mar", "Apr", "May", "Jun",
						"Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
					];

					const alphaMonth = monthNames[newsTime.getMonth()];

					let newsStartDate = `${alphaMonth} ${newsTime.getDate()}, ${newsTime.getFullYear()}`

					let calEvents = document.getElementById("recent-events-cards")

					calEvents.innerHTML += `
		<div class="calendar-card">
                                <div class="calendar">${newshline}</div>
                                <div class="match-setting"><span class="match-date">${newsStartDate}</span> </div>
                                <span class="winners">${newsIntro}</span>
                            </div>
		`
				}
			}
			)
			newsLoad.newsFlag = true;
		}

	})
