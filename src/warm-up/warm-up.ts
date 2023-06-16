/*
* Przeprogramowani.ts - https://przeprogramowani.pl/typescript/
*
* Warm Up!
* ------------------
*
* Goal: First challenge - fix the types of variables and make sure that tests work fine!
* 
* Hint: https://www.typescriptlang.org/docs/handbook/basic-types.html
*/

class Todo {
    constructor(private readonly todo: string, private readonly priority?: number) {
    }
}

const age: number = 80;
const firstName: string = 'Przemek';
const todos: Todo[] = [
    new Todo('Learn TypeScript'),
    new Todo('Subscribe Przeprogramowani', 1),
    new Todo('Sign up for newsletter', 1)
]

/* Do not modify tests */

test('should verify age', () => {
    expect(age).toBe(80);
})

test('should verify firstName', () => {
    expect(firstName).toBe('Przemek');
})

test('should verify todos', () => {
    expect(todos.length).toBe(3);
})