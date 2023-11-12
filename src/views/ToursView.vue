<template>
	<div id="page" class="tours">
		<TheHeader />
	
		<main>
			<section class="supplier-info">
			<!-- Supplier Information -->
			<div class="profile-photo">
				<!-- Profile Image -->
			</div>
			<div class="profile-details">
				<h2>{{ supplier.name }}</h2>
				<span class="rating">{{ supplier.rating }}</span>
				<p>Driver {{ supplier.driver }}</p>
				<p>Name of the carrier {{ supplier.carrier }}</p>
				<p>National Registration Number / Transport Name "{{ supplier.registration }}"</p>
			</div>
			</section>
	
			<section class="order-summary">
			<!-- Order Summary -->
			<div class="overview">
				<h3>Overview</h3>
				<p>{{ bookingDetails.dates }}</p>
				<p>{{ bookingDetails.passengers }} Passengers ({{ bookingDetails.adults }} Adults)</p>
				<p>{{ bookingDetails.suitcases }} Large Suitcases</p>
				<!-- ... -->
			</div>
			<div class="location">
				<h3>Location Details</h3>
				<!-- ... -->
			</div>
			</section>
	
			<section class="additional-info">
			<!-- Additional Information -->
			<p>{{ additionalInfo }}</p>
			</section>
		</main>

		<TheFooter />
	</div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
	name: 'BookingDetail',
	components: {
		TheHeader,
		TheFooter,
	},
	data() {
		return {
			// Sample data, you would replace this with actual data probably coming from props or a store
			supplier: {
				name: 'Adam',
				rating: '4.5',
				driver: 'Adam Lopoto',
				carrier: 'BAM BAM SIA',
				registration: 'Miranda',
			},
			bookingDetails: {
				dates: '7 March 2023 - 9 March 2023 (3 Days)',
				passengers: 7,
				adults: 5,
				suitcases: 3,
			},
			additionalInfo: 'Need 2 Kid Seats',
		};
	},
};
</script>

<style lang="scss" scoped>
/* Add your CSS here */
</style>
  