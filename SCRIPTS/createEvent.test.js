const createEvent = require('./createEvent');

describe('createEvent', () => {
  // Mock the document object
  const doc = {
    readyState: 'complete',
    addEventListener: jest.fn(),
    createElement: jest.fn(),
    getElementById: jest.fn(),
  };

  beforeEach(() => {
    // Reset the mock implementations before each test
    doc.addEventListener.mockReset();
    doc.createElement.mockReset();
    doc.getElementById.mockReset();
  });

  test('it should initialize the date range picker', () => {
    // Mock the daterangepicker library
    const daterangepicker = {
      callCount: 0,
      mockImplementation: function() {
        this.callCount++;
      },
    };

    // Call the function with the mocked objects
    createEvent(doc, daterangepicker);

    // Assert that the daterangepicker library was called
    expect(daterangepicker.callCount).toBe(1);
  });

  test('it should disable hours later than 9 PM', () => {
    // Call the function with the mocked objects
    createEvent(doc);

    // Assert that the options were disabled
    expect(doc.getElementById).toHaveBeenCalledTimes(2);
    expect(doc.getElementById).toHaveBeenCalledWith('NoLaterThan');
    expect(doc.getElementById).toHaveBeenCalledWith('NoEarlierThan');

    const noLaterThan = doc.getElementById('NoLaterThan');
    const noEarlierThan = doc.getElementById('NoEarlierThan');

    for (let i = 10; i < 24; i++) {
      expect(noLaterThan.options[i].disabled).toBe(true);
      expect(noEarlierThan.options[i].disabled).toBe(false);
    }
  });

  test('it should disable hours earlier than 5 PM', () => {
    // Call the function with the mocked objects
    createEvent(doc);

    // Assert that the options were disabled
    expect(doc.getElementById).toHaveBeenCalledTimes(2);
    expect(doc.getElementById).toHaveBeenCalledWith('NoLaterThan');
    expect(doc.getElementById).toHaveBeenCalledWith('NoEarlierThan');

    const noLaterThan = doc.getElementById('NoLaterThan');
    const noEarlierThan = doc.getElementById('NoEarlierThan');

    for (let i = 0; i < 17; i++) {
      expect(noLaterThan.options[i].disabled).toBe(false);
      expect(noEarlierThan.options[i].disabled).toBe(true);
    }
  });

  test('it should show the specific dates input when selected', () => {
    // Call the function with the mocked objects
    createEvent(doc);

    // Assert that the elements were hidden by default
    expect(doc.getElementById('SpecificDates').style.display).toBe('none');
    expect(doc.getElementById('DaysOfTheWeek').style.display).toBe('block');

    // Select the SpecificDates option
    const dateTypes = doc.getElementById('DateTypes');
    dateTypes.value = 'SpecificDates';
    dateTypes.dispatchEvent(new Event('change'));

    // Assert that the SpecificDates input is visible
    expect(doc.getElementById('SpecificDates').style.display).toBe('block');
    expect(doc.getElementById('DaysOfTheWeek').style.display).toBe('none');
  });
});
