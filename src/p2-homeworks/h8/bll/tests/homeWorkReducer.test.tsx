import React from 'react';
import {homeWorkReducer} from "../homeWorkReducer";

type StateType = {
    _id: number
    name: string
    age: number
}

let initialState: Array<StateType>;

beforeEach(() => {
    initialState = [
        {_id: 0, name: "Кот", age: 3},
        {_id: 1, name: "Александр", age: 66},
        {_id: 2, name: "Коля", age: 16},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 5, name: "Ирина", age: 55},
    ]
});

test("sort name up", () => {
    const newState = homeWorkReducer(initialState, {type: "sort", payload: "up"});

    expect(newState[0].name).toBe("Александр");
    expect(newState[1].name).toBe("Виктор");
});
test("sort name down", () => {
    const newState = homeWorkReducer(initialState, {type: "sort", payload: "down"});

    expect(newState[0].name).toBe('Кот')
    expect(newState[1].name).toBe('Коля')

});
test("check age 18", () => {
    const newState = homeWorkReducer(initialState, {type: "check"});

    expect(newState[0].name).toBe('Александр')
    expect(newState[1].name).toBe('Виктор')
    expect(newState[2].name).toBe('Дмитрий')
    expect(newState[3].name).toBe('Ирина')

});
