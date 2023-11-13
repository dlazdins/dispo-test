<template>
    <header class="header">
      <div class="header-content">
		<div class="logo">
			<img src="@/assets/images/dispo-travel-logo.png" alt="Dispo travel logo" class="logo" />
		</div>
		<nav>
			<router-link to="/">Home</router-link> |
			<router-link to="/bookings">Book a ride</router-link> |
			<router-link to="/transfers">Transfers</router-link> |
			<router-link to="/requests">Requests</router-link> |
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
	padding: 10px 40px;
	position: -webkit-sticky; /* Required for Safari */
	position: sticky;
	top: 0; /* Set the top edge of the sticky header */
	z-index: 1000; /* Ensure the header stays on top of other elements */
	box-shadow: 0 2px 5px rgba(0,0,0,0.2); /* Optional: Adds a shadow for better separation */
}

.header-content {
	display: flex;
	align-items: center;
	justify-content: flex-start;
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

.logo {
	widows: 230px;
	height: 50px;
}
</style>
  
  