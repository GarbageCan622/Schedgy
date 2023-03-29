const { getByText } = require ('@testing-library/dom');
const { toBeInTheDocument } = require ('@testing-library/jest-dom/extend-expect');
const {JSDOM} = require('jsdom');
const fs = require('fs'); //== import fs from fs
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../HTML/homepage.html'), 'utf8');

let container;
let dom;

describe('homepage.html', () => {
    beforeEach(() => {
        // Constructing a new JSDOM with this option is the key
        // to getting the code in the script tag to execute.
        // This is indeed dangerous and should only be done with trusted content.
        // https://github.com/jsdom/jsdom#executing-scripts
        dom = new JSDOM(html, { runScripts: 'dangerously' })
        container = dom.window.document.body
      })

  test('renders a heading element', () => {
    expect(container.querySelector('h1')).not.toBeNull()
    expect(getByText(container, 'Link Schedgy to your Discord Server')).toBeInTheDocument()
  })
  //checks for accurate link on link element
  test('renders a link h2 element with known link content', () => {
    expect(container.querySelector('h2')).not.toBeNull()
    expect(getByText(container, 'Link')).toHaveAttribute('href', 'https://discord.com/api/oauth2/authorize?client_id=1080576304551825478&permissions=337155091456&scope=bot%20applications.commands')
    })
})