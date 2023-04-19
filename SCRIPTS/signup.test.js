const { getByText } = require ('@testing-library/dom');
const { toBeInTheDocument } = require ('@testing-library/jest-dom/extend-expect');
const {JSDOM} = require('jsdom');
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../HTML/signup.html'), 'utf8');

let container;
let dom;

beforeEach(() => {
  dom = new JSDOM(html, { runScripts: 'dangerously' });
  global.document = dom.window.document;
  container = document.body;
});

afterEach(() => {
  dom.window.close();
  global.document = undefined;
  container = undefined;
});

test('Form exists', () => {
  //Check that the form element exists
  const form = document.getElementById('EventForm');
  expect(form).toBeTruthy();
});

test('Event name exists', () => {
  //Check that event name exists
  const input = document.getElementById('NewEventName');
  expect(input).toBeTruthy();
});

test('Contains element for date types', () => {
  //Element for date types is present
  const select = document.getElementById('DateTypes');
  expect(select).toBeTruthy();
});

test('Form contains input element for date range', () => {
  //Selector for date range exists
  const input = document.getElementById('datePick');
  expect(input).toBeTruthy();
});

test('Form contains select element for "no earlier than" time', () => {
  //Check that the form contains a select element for "no earlier than" time
  const select = document.getElementById('NoEarlierThan');
  expect(select).toBeTruthy();
});
