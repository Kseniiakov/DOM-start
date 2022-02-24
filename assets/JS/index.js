"use strict";

const array = [
    {name: 'bread', price: 10}, 
    {name: 'milk', price: 15}, 
    {name: 'cheese', price: 40},
    {name: 'apples', price: 30},
];

const tableBody = document.querySelector('#tbody');

array.forEach((value) => {
    const myTr = document.createElement('tr');

    const myTdName = document.createElement('td');
    myTdName.append(value.name);

    const myTdPrice = document.createElement('td');
    myTdPrice.append(value.price);

    myTr.append(myTdName, myTdPrice);
   
    tableBody.append(myTr);
});