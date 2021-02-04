// TODO: Fix broken typescript-eslint.
// TODO: Move js/ts tests to mocha.

namespace test {
    const add1 = (x: number): number => ++x;
    const add2 = (__: any, v: number): number => v + 1;
    const firstLetter = (s = ''): string => s[0];
    const sum = (arr: number[]) => arr.reduce((a, v) => a += v, 0);
    const arrToStr = (a: any[]) => a.join(', ').trim();
    const valuesO = (o: object) => Object.values(o);
    const map = (t: (v: any, i: number) => any) => (a: any[]) => a.map(t);
    const comp = (...fs: Function[]) => (x: any) => fs.reverse().reduce((v, f) => f(v), x);

    const nums = [1, 2, 3];
    const words: {[id: string]: any} = {
        one: 'one',
        two: 'two',
        three: 'three',
    };

    console.debug(`nums=${arrToStr(nums)}`);
    console.debug(`words=${valuesO(words)}`);
    console.debug(`firstLetter=${comp(map(firstLetter), valuesO)(words)}`);
    console.debug(`sum=${sum(nums)}`);
    console.debug(`nums+1=${arrToStr(nums.map(add1))}`);

    interface User {
        name: string;
        id: number;
        latLong: [number, number];
    }
    
    class UserAccount implements User {
        name: string;
        id: number;
        latLong: [number, number];
    
        constructor(name: string, id: number) {
            this.name = name;
            this.id = id;
            this.latLong = [0, 0];
        }

        public toString(): string {
            return JSON.stringify(this);
        }
    }
    
    const user: User = new UserAccount("John", 1);
    console.debug(`User is ${user}`)
}


