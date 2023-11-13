<template>
    <header class="header">
      <div class="header-content">
		<div class="logo"></div>
		<nav>
			<router-link to="/">Home</router-link> |
			<router-link to="/">Book a ride</router-link> |
			<router-link to="/">Transfers</router-link> |
			<router-link to="/">Requests</router-link> |
			<router-link to="/tours">Tours</router-link>
		</nav>
      </div>
    </header>
</template>
  
<script>
  export default {
    name: 'TheHeader'
  };
  </script>
  
<style lang="scss" scoped>
.header {
	height: 100px;
	background-color: #231e60;
	color: #fff;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px;
	position: -webkit-sticky; /* Required for Safari */
	position: sticky;
	top: 0; /* Set the top edge of the sticky header */
	z-index: 1000; /* Ensure the header stays on top of other elements */
	box-shadow: 0 2px 5px rgba(0,0,0,0.2); /* Optional: Adds a shadow for better separation */
}

.header-content {
	text-align: center;
}

nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: #ffffff;
}

nav a.router-link-exact-active {
	color: #42b983;
}

.icon {
	margin-right: 8px; /* Space between icon and text */
	width: 20px;
	height: 20px;
}
</style>
  
  