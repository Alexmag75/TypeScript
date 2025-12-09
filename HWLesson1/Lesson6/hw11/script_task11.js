"use strict";
let cards_ = [];
let value_ = [6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king'];
let cardSuit_ = ['spades', 'diamonds', 'hearts', 'clubs'];
for (let valueCard of value_) {
    for (let suit of cardSuit_) {
        if ((suit === 'spades') || (suit === 'clubs')) {
            cards_.push({ value: valueCard, cardSuit: suit, color: 'black' });
        }
        if ((suit === 'diamonds') || (suit === 'hearts')) {
            cards_.push({ value: valueCard, cardSuit: suit, color: 'red' });
        }
    }
}
const initialValue = { spades: [], diamonds: [], hearts: [], clubs: [] };
let cardGroup = cards_.reduce((accumulator, card) => {
    if (card.cardSuit === 'spades') {
        accumulator.spades.push(card);
    }
    if (card.cardSuit === 'diamonds') {
        accumulator.diamonds.push(card);
    }
    if (card.cardSuit === 'hearts') {
        accumulator.hearts.push(card);
    }
    if (card.cardSuit === 'clubs') {
        accumulator.clubs.push(card);
    }
    return accumulator;
}, initialValue);
console.log(cardGroup);
