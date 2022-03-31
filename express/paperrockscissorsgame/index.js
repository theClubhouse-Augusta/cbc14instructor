// create main class
class PaperRockScissors {
	constructor() {
		this.playerChoice = null;
		this.computerChoice = null;
		this.result = 'tie';

		this.choices = ['paper', 'rock', 'scissors'];
	}

	game(playerChoice) {
		this.computerChoice = this.choices[Math.floor(Math.random() * this.choices.length)];
		this.playerChoice = playerChoice;

		let results = {
			'player': this.playerChoice,
			'computer': this.computerChoice,
			'result': this.result
		};

		if ( this.playerChoice == 'paper' ) {
			if ( this.computerChoice == 'rock' ) {
				results.result = 'win';
			} else if ( this.computerChoice == 'scissors' ) {
				results.result = 'loss';
			}
		} else if ( this.playerChoice == 'rock' ) {
			if ( this.computerChoice == 'scissors' ) {
				results.result = 'win';
			} else if ( this.computerChoice == 'paper' ) {
				results.result = 'loss';
			}
		} else if ( this.playerChoice == 'scissors' ) {
			if ( this.computerChoice == 'paper' ) {
				results.result = 'win';
			} else if ( this.computerChoice == 'rock' ) {
				results.result = 'loss';
			}
		}

		return results;
	}

	// player has picked paper
	paper() {
		return this.game('paper');
	}

	// player has picked rock
	rock() {
		return this.game('rock');
	}

	// player has picked scissors
	scissors() {
		return this.game('scissors');
	}

}

module.exports = PaperRockScissors;