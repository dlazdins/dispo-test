<template>
    <header class="header">
      <div class="header-content">
		<nav>
			<router-link to="/">Home</router-link> |
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
    background-color: #231e60; /* Replace with your desired background color */
    color: #fff; /* Adjust text color for better visibility on your background */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
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
  
  