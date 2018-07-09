'use strict';

const List = require('../../lib/ll.js');

describe('Linked lists', () => {

 
  it('append', (done) => {
    let newList = new List;
    newList.append(1);
    newList.append(2);
    let expected = 2;
    let actual = newList.head.next.value;
    expect(actual).toEqual(expected);
    done();
  });

 
  it('prepend', (done) => {
    let newList = new List;
    newList.append(1);
    newList.prepend(2);
    let actual = newList.head.value;
    let expected = 2;
    expect(actual).toEqual(expected);
    done();
  });
  
  
  it('reverse', (done) => {
    let newList = new List;
    newList.append(1);
    newList.append(2);
    newList.append(3);
    newList.reverse();
    console.log(newList);
    let actual = newList.head.value;
    let expected = 3;
    expect(actual).toEqual(expected);
    done();
  });
});
