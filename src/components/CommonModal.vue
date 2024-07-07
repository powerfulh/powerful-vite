<script setup>
import { onMounted, ref } from 'vue'
import ModalUtil from './ModalUtil.vue'

defineProps({
	title: String,
})
defineEmits(['close'])

function init() {
	const m = mu.value.box
	m.style.left = innerWidth / 2 - m.offsetWidth / 2 + 'px'
	m.style.top = innerHeight / 2 - m.offsetHeight / 2 + 'px'
}

// After mount
const mu = ref()

onMounted(init)
</script>

<template>
	<ModalUtil ref="mu">
		<template v-if="title" #title>
			<div class="title">
				{{ title }}
				<button @click="$emit('close')">Close</button>
			</div>
		</template>
		<slot />
	</ModalUtil>
</template>
