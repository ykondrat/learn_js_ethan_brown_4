function rand(m, n) {
    return (m + Math.floor((n - m + 1) * Math.random()));
}

function randFace() {
    return (['crown', 'anchor', 'heart', 'spade', 'clube', 'diamond'][rand(0, 5)]);
}

let funds = 50;
let round = 0;

while (funds > 1 && funds < 100) {
    round++;
    console.log(`Round: ${round}`);
    console.log(`\tStarting funds: ${funds}`);

    let bets = {
        crown: 0,
        anchor: 0,
        heart: 0,
        spade: 0,
        clube: 0,
        diamond: 0
    };
    let totalBet = rand(1, funds);

    if (totalBet === 7) {
        totalBet = funds;
        bets.heart = totalBet;
    } else {
        let remaining = totalBet;
        do {
            let bet = rand(1, remaining);
            let face = randFace();
            bets[face] = bets[face] + bet;
            remaining = remaining - bet;
        } while (remaining > 0)
    }
    funds = funds - totalBet;
    console.log('\tBets:' +
        Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(', ') +
        ` (total: ${totalBet} pence)`
    );

    const hand = [];
    for (let roll = 0; roll < 3; roll++) {
        hand.push(randFace());
    }

    console.log(`\tHand: ${hand.join(', ')}`);

    let winnings = 0;
    for (let die = 0; die < hand.length; die++) {
        let face = hand[die];
        if (bets[face] > 0) {
            winnings = winnings + bets[face];
        }
    }
    funds = funds + winnings;
    console.log(`\tWinnings: ${winnings}`);
}
console.log(`\tTending funds: ${funds}`);
