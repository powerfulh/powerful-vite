<script setup>
import { ref } from 'vue'
import { PS } from 'powerful-select'

const prop = defineProps({
	list: Array,
	modelValue: {
		type: [String, Number],
		required: true,
	},
	multi: Boolean,
	auto: Boolean,
})

const ownVal = ref(prop.modelValue)
</script>

<template>
	<p-s v-model="ownVal" :list="list" :multi="multi" :auto-comp="auto" ref="ps" @update:model-value="$emit('update:model-value', ownVal)"></p-s>
</template>
