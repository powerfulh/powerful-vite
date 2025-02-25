<script setup lang="ts">
import { ref } from 'vue'
import { callback } from './i'

const prop = defineProps<{
	dialog: String
	confirmCallback?: callback
}>()
const emit = defineEmits(['click-close'])

function onConfirm(c) {
	prop.confirmCallback(c)
	emit('click-close')
}
function onClose() {
	if (prop.confirmCallback) prop.confirmCallback(false)
	emit('click-close')
}

// After mount
const root = ref()
const box = ref()
const confirmBtn = ref()
const closeBtn = ref()

defineExpose({
	root,
	box,
	confirmBtn,
	closeBtn,
})
</script>

<template>
	<Teleport to="body">
		<div class="powerful-modal-wrap" ref="root">
			<div class="powerful-modal" ref="box">
				<slot name="title"></slot>
				<div v-if="dialog" class="dialog">
					<div class="msg">{{ dialog }}</div>
					<div class="btn-wrap">
						<button v-if="confirmCallback" class="confirm" ref="confirmBtn" @click="onConfirm(true)">Confirm</button>
						<button ref="closeBtn" @click="onClose">Close</button>
					</div>
				</div>
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
