<template>
	<main class="requests">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Requests Page"/>
	</main>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'RequestsView',

	components: {
		HelloWorld
	}

}
</script>
