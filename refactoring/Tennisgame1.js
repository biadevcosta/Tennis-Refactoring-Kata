class TennisGame1 {
  constructor(player1Name, player2Name){
    this.m_score1 = 0;
    this.m_score2 = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName) {
    if (playerName === "player1") {
        this.m_score1 += 1;
    } else {
        this.m_score2 += 1;
    }
  }

  getScore() {
    if (this.m_score1 === this.m_score2) { //ok
        return this.getEqualScore();
    } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
        return this.getAdvantageOrWinScore();
    } else {
        return this.getRegularScore();
    }
  }

  getEqualScore() {
    const equalScores = ["Love-All", "Fifteen-All", "Thirty-All", "Deuce"];
    return this.m_score1 < 4 ? equalScores[this.m_score1] : equalScores[3];
  }

  getAdvantageOrWinScore() {
    const minusResult = this.m_score1 - this.m_score2;

    if (minusResult === 1) {
        return "Advantage player1";
    } else if (minusResult === -1) {
        return "Advantage player2";
    } else if (minusResult >= 2) {
       return "Win for player1";
    } else {
        return "Win for player2";
    }
  }

  getRegularScore() {
      const scoreNames = ["Love", "Fifteen", "Thirty", "Forty"];
      return `${scoreNames[this.m_score1]}-${scoreNames[this.m_score2]}`;
  } 

}

// Cria uma instância do jogo com dois jogadores
const game = new TennisGame1("Player 1", "Player 2");

// Exibe o placar inicial 0 x 0 = Love-All
console.log("Placar Inicial 0x0:", game.getScore());
console.log(game.m_score1, game.m_score2)

// Jogadas simuladas para testar o placar 1 x 1  = Fifteen-All
game.wonPoint("player1");
game.wonPoint("player2");
console.log("Placar 1x1:", game.getScore());

// Jogadas simuladas para testar o placar 2 x 2  = Thirty-All
game.wonPoint("player1");
game.wonPoint("player2");
console.log("Placar 2x2:", game.getScore());

// Jogadas simuladas para testar o placar 3 x 3  = Deuce
game.wonPoint("player1");
game.wonPoint("player2");
console.log("Placar 3x3:", game.getScore());


