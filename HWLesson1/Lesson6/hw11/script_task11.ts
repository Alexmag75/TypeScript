type cardsType={
    value:string|number,
    cardSuit:string,
    color:string
}
interface CardGroupType {
    spades: CardsType[];
    diamonds: CardsType[];
    hearts: CardsType[];
    clubs: CardsType[];
}

let cards_:cardsType[] = [];
let value_:(string|number)[] =[6,7,8,9,10,'ace','jack','queen','king'];
let cardSuit_:string[]=['spades','diamonds','hearts','clubs'];


for(let valueCard of value_){
    for(let suit of cardSuit_){
        if((suit==='spades')||(suit==='clubs'))
        {
            cards_.push({value:valueCard,cardSuit:suit,color:'black'});
        }
        if((suit==='diamonds')||(suit==='hearts'))
        {
            cards_.push({value:valueCard,cardSuit:suit,color:'red'});
        }
    }
}
const initialValue: CardGroupType = {spades: [], diamonds: [], hearts: [], clubs: []};

let cardGroup:CardGroupType=cards_.reduce((accumulator,card)=>{
    if(card.cardSuit==='spades'){
        accumulator.spades.push(card);
    }
    if(card.cardSuit==='diamonds'){
        accumulator.diamonds.push(card);
    }
    if(card.cardSuit==='hearts'){
        accumulator.hearts.push(card);
    }
    if(card.cardSuit==='clubs'){
        accumulator.clubs.push(card);
    }
    return accumulator;
},initialValue);
console.log(cardGroup);
