const { queryString, parse } = require('./queryString');

describe('Object to query string', () => {
	it('should create a valid query string when an object is provided', () => {
		const obj = {
			name: 'Lucas',
			profession: 'Dev',
		};

		expect(queryString(obj)).toBe('name=Lucas&profession=Dev');
	});

	it('should create a valid query string even when an array is passed as value', () => {
		const obj = {
			name: 'Lucas',
			abilities: ['JS', 'ReactJS'],
		};

		expect(queryString(obj)).toBe('name=Lucas&abilities=JS,ReactJS');
	});

	it('should throw an error when an object is passed as value', () => {
		const obj = {
			name: 'Lucas',
			abilities: { first: 'JS', second: 'TDD' },
		};

		expect(() => {
			queryString(obj);
		}).toThrowError();
	});
});

describe('Query string to object', () => {
	it('should convert a query string to object', () => {
		const queryString = 'name=Lucas&profession=Dev';

		expect(parse(queryString)).toEqual({ name: 'Lucas', profession: 'Dev' });
	});

	it('should convert a query string of a single key-value to object', () => {
		const queryString = 'name=Lucas';

		expect(parse(queryString)).toEqual({ name: 'Lucas' });
	});

	it('should convert a query string to an object taking care of comma separated value', () => {
		const queryString = 'name=Lucas&abilities=JS,ReactJS';

		expect(parse(queryString)).toEqual({ name: 'Lucas', abilities: ['JS', 'ReactJS'] });
	});
});
