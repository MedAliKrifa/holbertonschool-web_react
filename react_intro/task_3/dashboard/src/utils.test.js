import { getFullYear, getFooterCopy, getLatestNotification } from './utils'

describe('year should be equal to 2023', function () {
    it('get the year', function () {
        var year = 2023;
        expect(getFullYear()).toBe(year);
    });
});

describe('text should be equal Holberton School if true', function () {
    it('reuturn must be true ', function () {
        expect(getFooterCopy(true)).toBe('Holberton School');
    });
});

it('should return <strong>Urgent requirement</strong> - complete by EOD', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });