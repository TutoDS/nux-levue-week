<template>
	<transition name="slide-fade">
		<div
			v-if="isLevelUpModalOpen"
			class="overlay flex justify-center items-center bg-gray-line text-background fixed inset-0"
			@click="setModalState(false)"
		>
			<div class="bg-white w-full max-w-2xl p-16 rounded-md shadow-xl text-center relative" @click.stop>
				<header class="text-9xl font-semibold text-blue bg-contain">
					{{ level }}
				</header>

				<strong class="text-2xl text-blue-dark mt-1">Congratulation!</strong>

				<p>You reached a new level!</p>

				<button class="absolute right-2 top-2 bg-transparent border-0" type="button" @click="setModalState(false)">
					<img src="icons/close.svg" alt="Close">
				</button>
			</div>
		</div>
	</transition>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapMutations } from 'vuex';
import { Mutations } from '~/store/Challenges/types';

export default Vue.extend({
	computed: mapState('Challenges', ['level', 'isLevelUpModalOpen']),
	methods: mapMutations('Challenges', {
		setModalState: Mutations.SET_IS_LEVEL_UP_MODAL_OPEN
	})
});
</script>

<style scoped>
.overlay {
	background-color: rgba(00,00, 00, 0.8);
}

header {
	background: url('/icons/levelup.svg') no-repeat center;
	text-shadow: 0 2px 10px rgba(89, 101, 224, 0.85);
}

button {
	font-size: 0;
}
</style>
