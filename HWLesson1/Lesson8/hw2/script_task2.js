"use strict";
let usr = {
    id: 1, name: 'Vasia', greeting() {
        console.log('Привет');
    },
    massage() {
        console.log('Пока');
    }
};
function cloner(user) {
    if (user) {
        const functions = [];
        for (const key in user) {
            if (typeof user[key] === 'function') {
                const functionClone = user[key].bind({});
                functions.push({ functionClone, key });
            }
        }
        const cloneUser = JSON.parse(JSON.stringify(user));
        for (const func of functions) {
            cloneUser[func.key] = func.functionClone;
        }
        return cloneUser;
    }
    throw new Error('Error!');
}
const clone = cloner(usr);
clone.massage();
