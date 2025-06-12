<script setup lang="ts">
import { RouteRecord, RouterLink } from 'vue-router'

function finalRoutes(routes: Array<RouteRecord>) {
	return routes.filter(item => item.components)
}
</script>

<template>
	<header>
		<div class="wrapper">
			<nav style="text-align: center">
				<router-link v-for="(item, i) in finalRoutes($router.getRoutes())" :key="i" :to="item.path" style="margin-right: 8px">{{
					item.name || item.path
				}}</router-link>
			</nav>
		</div>
	</header>
</template>
