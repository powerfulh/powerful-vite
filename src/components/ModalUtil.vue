<script setup>
import { ref } from 'vue'

defineProps({
	dialog: Boolean,
})

const root = ref()
const box = ref()

defineExpose({
	root,
	box,
})
</script>

<template>
	<Teleport to="body">
		<div class="powerful-modal-wrap" ref="root">
			<div class="powerful-modal" ref="box">
				<slot name="title"></slot>
				<div v-if="dialog" class="dialog"></div>
				<slot v-else />
			</div>
		</div>
	</Teleport>
</template>

<style scoped lang="scss">
.powerful-modal-wrap {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	.powerful-modal {
		position: absolute;
	}
}
</style>
