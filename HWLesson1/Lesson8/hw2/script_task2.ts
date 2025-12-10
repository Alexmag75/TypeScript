let usr = {

    id: 1, name: 'Vasia', greeting() {
        console.log('Привет')
    },
    massage() {
        console.log('Пока')
    }
}

type FunctionClone = { functionClone: Function, key: string };

function cloner<T>(user: T): T {
    if (user) {
        const functions: Array<FunctionClone> = [];

        for (const key in user) {
            if (typeof user[key] === 'function') {
                const functionClone = (user[key] as Function).bind({});
                functions.push({functionClone, key});
            }
        }
        const cloneUser: T = JSON.parse(JSON.stringify(user));
        for (const func of functions) {
            (cloneUser as any)[func.key] = func.functionClone;
        }
        return cloneUser

    }

    throw new Error('Error!');

}

const clone = cloner(usr);
clone.massage();
