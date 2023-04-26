describe('createEvent', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <form id="EventForm">
          <input id="NewEventName" type="text" value="Test Event" />
          <select id="NoEarlierThan">
            <option value="0">12:00am</option>
            <option value="1">1:00am</option>
            <option value="2">2:00am</option>
          </select>
          <select id="NoLaterThan">
            <option value="22">10:00pm</option>
            <option value="23">11:00pm</option>
          </select>
          <select id="DateTypes">
            <option value="SpecificDates">Specific Dates</option>
            <option value="DaysOfTheWeek">Days of the Week</option>
          </select>
          <div id="SpecificDates">
            <input type="text" name="daterange" value="03/17/2023 - 03/23/2023" />
          </div>
          <div id="DaysOfTheWeek">
            <input type="checkbox" name="days" value="monday" /> Monday
            <input type="checkbox" name="days" value="tuesday" /> Tuesday
            <input type="checkbox" name="days" value="wednesday" /> Wednesday
            <input type="checkbox" name="days" value="thursday" /> Thursday
            <input type="checkbox" name="days" value="friday" /> Friday
            <input type="checkbox" name="days" value="saturday" /> Saturday
            <input type="checkbox" name="days" value="sunday" /> Sunday
          </div>
          <input id="event_id" type="hidden" value="1" />
          <button type="submit" id="submitBtn">Submit</button>
        </form>
      `;
    });
  
    test('selecting Specific Dates shows the correct div', () => {
      const specificDatesDiv = document.getElementById('SpecificDates');
      const daysOfWeekDiv = document.getElementById('DaysOfTheWeek');
      const dateTypesSelect = document.getElementById('DateTypes');
  
      dateTypesSelect.value = 'SpecificDates';
      dateTypesSelect.dispatchEvent(new Event('change'));
  
      expect(specificDatesDiv.style.display).toBe('block');
      expect(daysOfWeekDiv.style.display).toBe('none');
    });
  
    test('selecting Days of the Week shows the correct div', () => {
      const specificDatesDiv = document.getElementById('SpecificDates');
      const daysOfWeekDiv = document.getElementById('DaysOfTheWeek');
      const dateTypesSelect = document.getElementById('DateTypes');
  
      dateTypesSelect.value = 'DaysOfTheWeek';
      dateTypesSelect.dispatchEvent(new Event('change'));
  
      expect(specificDatesDiv.style.display).toBe('none');
      expect(daysOfWeekDiv.style.display).toBe('block');
    });
  
    test('selecting a No Earlier Than time disables appropriate No Later Than options', () => {
      const noLaterThanSelect = document.getElementById('NoLaterThan');
      const noEarlierThanSelect = document.getElementById('NoEarlierThan');
  
      noEarlierThanSelect.value = '1';
      noEarlierThanSelect.dispatchEvent(new Event('change'));
  
      expect(noLaterThanSelect.children[0].disabled).toBe(true);
      expect(noLaterThanSelect.children[1].disabled).toBe(false);
      expect(noLaterThanSelect.children[2].disabled).toBe(false);
    });
});
