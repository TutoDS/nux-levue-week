<template>
	<div class="flex justify-center items-center mt-8 lg:mt-14 text-9xl text-title font-rajdhani">
		<CountdownDigits :digits="minutes" />
		<span class="px-4 text-white">:</span>
		<CountdownDigits :digits="seconds" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapGetters, mapMutations } from 'vuex';
import CountdownDigits from '~/components/atoms/CountdownDigits.vue';
import { Mutations } from '~/store/Countdown/types';

let TIMEOUT_REF: ReturnType<typeof setTimeout>;

export default Vue.extend({
	components: {
		CountdownDigits
	},
	computed: {
		...mapState('Countdown', ['time', 'isActive']),
		...mapGetters('Countdown', ['minutes', 'seconds'])
	},
	methods: {
		...mapMutations('Countdown', {
			setTime: Mutations.SET_TIME,
			resetTime: Mutations.RESET_TIME
		}),
		runCountdown(flag: boolean) {
			if (this.isActive && flag) {
				TIMEOUT_REF = setTimeout(() => {
					this.setTime(this.time - 1);
				}, 1000);
			} else {
				clearTimeout(TIMEOUT_REF);
			}
		}
	},
	watch: {
		isActive(newValue: boolean) {
			this.runCountdown(newValue);
			if (!newValue) {
				this.resetTime();
			}
		},
		time(newTime: number) {
			if (newTime > 0) {
				this.runCountdown(true);
			} else {
				this.$emit('completed');
			}
		}
	}
});
</script>
