
// simpleInterest();

export default function simpleInterest(p,t,r){
return p*t*r/100
}


// named import
export const a = 10;
export const b = 20;

// compound interest

export function compoundInterest(p,t,r){
    return p*(1+r/100)**t-p
    }

// minites to seconds

export  function minToSec(m){
    return m*60
    }
// sum of natural numbers
export function sum(n) {
    return n*(n+1)/2
    
}




