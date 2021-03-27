import { getters, mutations, state as originalState } from './index';
import { Mutations } from './types';

describe('Store:Countdown:index', () => {
	let state;

	beforeEach(() => {
		state = {
			time: 600,
			isActive: false,
			hasCompleted: false
		};
	});

	describe('State', () => {
		it('shoud have an initial state', () => {
			expect(originalState()).toMatchObject({
				time: 25 * 60,
				isActive: false,
				hasCompleted: false
			});
		});
	});

	describe('Getters', () => {
		it('should have 10 minutes', () => {
			const minutes = getters.minutes(state);

			expect(minutes).toBe(10); // 600 / 60 (defined in beforeEach)
		});

		it('should have 00 seconds', () => {
			const seconds = getters.seconds(state);

			expect(seconds).toBe(0);
		});
	});

	describe('Mutations', () => {
		it('Set Time', () => {
			mutations[Mutations.SET_TIME](state, 10);

			expect(state.time).toBe(10);
		});
		it('Reset Time', () => {
			mutations[Mutations.RESET_TIME](state);

			expect(state.time).toBe(25 * 60);
		});
		it('Set is Active', () => {
			mutations[Mutations.SET_IS_ACTIVE](state, true);

			expect(state.isActive).toBe(true);
		});
		it('Set Has Completed', () => {
			mutations[Mutations.SET_HAS_COMPLETED](state, true);

			expect(state.hasCompleted).toBe(true);
		});
	});
});
