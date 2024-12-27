<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
	<header>
		<div class="wrapper">
			<nav style="text-align: center">
				<router-link v-for="(item, i) in $router.getRoutes()" :key="i" :to="item.path" style="margin-right: 8px">{{
					item.name || item.path
				}}</router-link>
			</nav>
		</div>
	</header>
</template>
