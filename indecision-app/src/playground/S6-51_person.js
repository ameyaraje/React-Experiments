export const isAdult = (age) => {
    if (age >= 18) 
        return 'an adult';

    return 'not an adult';
};

export const canDrink = (age) => {
    if (age >= 21) 
        return 'can drink';
    
     return 'cant drink';
};