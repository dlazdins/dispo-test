<template>
	<main class="tours">

		<div class="content">
			<div class="grid-container box-wrapper">
				<div class="request-nr">Request #779</div>
				<!-- Supplier Information -->
				<div class="grid-item item1">
					<section class="supplier-info">
						<h3 class="section-title">Supplier information</h3>
						<div class="supplier-profile">
							<div class="profile-photo-wrapper">
								<div class="profile-photo">
									<img v-if="supplier.profileImageUrl" :src="supplier.profileImageUrl" alt="Supplier" class="image" />
									<img v-else src="@/assets/icons/user-solid.svg" alt="Supplier" class="image placeholder" />
								</div>
								<p class="supplier-name">{{ supplier.name }}</p>
								<div class="rating-wrapper">
									<img src="@/assets/icons/star-solid.svg" alt="Rating star" class="star" />
									<span class="rating">{{ supplier.rating }}</span>
								</div>
							</div>
						</div>
						<div class="profile-details">
							<div class="details-item">
								<div class="item-title">Driver</div>
								<p class="item-description">{{ supplier.driver }}</p>
							</div>
							<div class="details-item">
								<div class="item-title">Name of carrier</div>
								<p class="item-description">{{ supplier.carrier }}</p>
							</div>
							<div class="details-item">
								<div class="item-title">National Registration Number / Transport Name</div>
								<p class="item-description">"{{ supplier.registration }}"</p>
							</div>
						</div>
						<!-- Car details -->
						<div class="car-details">
							<div class="arrival-details">
								<div class="date">
									<img src="@/assets/icons/calendar-days-solid.svg" alt="Calendar icon" class="icon" />
									<span>{{ supplier.arrivalDate }}</span>
								</div>
								<div class="time">
									<img src="@/assets/icons/clock-solid.svg" alt="Clock icon" class="icon" />
									<span>{{ supplier.arrivalTime }}</span>
								</div>
							</div>
							<div class="content">
								<div class="car-image">
									<img v-if="supplier.carImageUrl" :src="supplier.carImageUrl" alt="Supplier" class="image" />
									<img v-else src="@/assets/icons/no-car-image.png" alt="Car image placeholder" class="image placeholder" />
								</div>
								<div class="car-description">
									<div class="registration-wrapper">
										<div class="title">Car Resgistration:</div>
										<div class="number-plate">
											<div>{{ supplier.carRegistrationNr }}</div>
										</div>
									</div>
									<span class="car-brand">{{ supplier.carBrand }}, </span>
									<span class="car-color">Color: {{ supplier.carColor }}</span>
									<div class="invoice-button">
										<div class="icon" />
										<span>Invoice</span>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
				<!-- Overview -->
				<div class="grid-item item2">
					<section class="overview">
						<h3>Overview</h3>
						<div class="booked-dates">{{ bookingDetails.dates }}<span class="day-count color-secondary">{{ bookingDetails.days }}</span></div>

						<div class="overview-item passengers-info">
							<img src="@/assets/icons/user-solid.svg" alt="Calendar icon" class="icon" />
							<span>{{ bookingDetails.passengers }}</span><span class="adult-count color-secondary">({{ bookingDetails.adults }})</span>
						</div>
						<div class="overview-item luggage-info">
							<img src="@/assets/icons/suitcase-solid.svg" alt="Calendar icon" class="icon" />
							<span>{{ bookingDetails.luggage }}</span>
						</div>
						<!-- Edit booking days -->
						<div class="edit-booking-dates">
							<div class="date-item">
								<img src="@/assets/icons/calendar-days-solid.svg" alt="Calendar icon" class="icon" />
								<span>7 March</span>
								<img src="@/assets/icons/circle-xmark-solid.svg" alt="Close icon" class="close" />
							</div>
							<div class="date-item">
								<img src="@/assets/icons/calendar-days-solid.svg" alt="Calendar icon" class="icon" />
								<span>8 March</span>
								<img src="@/assets/icons/circle-xmark-solid.svg" alt="Close icon" class="close" />
							</div>
							<div class="date-item">
								<img src="@/assets/icons/calendar-days-solid.svg" alt="Calendar icon" class="icon" />
								<span>9 March</span>
								<img src="@/assets/icons/circle-xmark-solid.svg" alt="Close icon" class="close" />
							</div>
						</div>
						<!-- Route info -->
						<div class="route-info">
							<div class="col-1">
								<p class="departure-time">{{ bookingDetails.departureTime }}</p>
							</div>
							<div class="col-2">
								<div class="departure">
									<img src="@/assets/icons/point_marker.svg" alt="Point marker icon" class="icon" />
									<span>{{ bookingDetails.pickUpAddress }}</span>
								</div>
								<div class="arrival">
									<img src="@/assets/icons/point_marker_end.svg" alt="Point marker end icon" class="icon" />
									<span>{{ bookingDetails.destinationAddress }}</span>
								</div>
							</div>
						</div>
						<!-- Total travel time and distance -->
						<div class="route-total">
							<div class="total-distance">
								<img src="@/assets/icons/route_distance_marker.svg" alt="Route distance icon" class="icon" />
								<span>124,27km</span>
							</div>
							<div class="total-time">
								<img src="@/assets/icons/clock-solid.svg" alt="Clock icon" class="icon" />
								<span>2:10 Hours</span>
							</div>
						</div>
					</section>
				</div>
				<!-- Map -->
				<div class="grid-item item3">
					<section class="map-container">
						<img v-if="supplier.mapUrl" :src="supplier.mapUrl" alt="Supplier" class="map" />
						<div v-else class="map placeholder" />
					</section>
				</div>
				<!-- Additional info -->
				<div class="grid-item span-2-cols item4">
					<section class="additional-info-container">
						<div class="col-1">
							<p>Additional information</p>
							<div class="info-block">
								<img src="@/assets/icons/triangle-exclamation-solid.svg" alt="Exclamation in triangle icon" class="icon" />
								<span>Need 2 Kid Seats</span>
							</div>
						</div>
						<div class="col-2">
							<div class="arrival-time">
								<div class="time-title">Estimated time of arrival</div>
								<img src="@/assets/icons/clock-solid.svg" alt="Exclamation in triangle icon" class="icon" />
								<span class="time">{{ bookingDetails.estimatedTimeOfArrival }}</span>
							</div>
							<div class="drive-status">
								<span class="status-title">Drive status</span>
								<span class="status-text">{{ bookingDetails.driveStatus }}</span>
							</div>
							<div class="chat-button">
								<img src="@/assets/icons/phone-volume-solid.svg" alt="Exclamation in triangle icon" class="icon" />
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>

	</main>
</template>

<script>

export default {
	name: 'BookingDetail',

	components: {},

	data() {
		return {
			// Sample data, you would replace this with actual data probably coming from props or a store
			supplier: {
				profileImageUrl: '',
				carImageUrl: '',
				name: 'Adam',
				rating: '4.5',
				driver: 'Adam Lopoto',
				carrier: 'BAM BAM SIA',
				registration: 'Miranda',
				arrivalDate: '18. feb',
				arrivalTime: '11:00',
				carRegistrationNr: 'HZ - 7221',
				carBrand: 'Skoda Fabia',
				carColor: 'Silver',
			},
			bookingDetails: {
				dates: '7 March 2023 - 9 March 2023',
				days: '(3 Days)',
				passengers: '7 persons',
				adults: '5 adults',
				luggage: '3 Large Suitcases',
				departureTime: '11:00',
				pickUpAddress: 'Hamburg Airport, Flughafenstraße 3, 22335 Hamburg, Germany',
				destinationAddress: 'ibis Hamburg St Pauli Messe, Simon-von-Utrecht-Straße 63, 20359 Hamburg, Germany',
				estimatedTimeOfArrival: '11:15',
				driveStatus: 'SCHEDULED'
			},
			additionalInfo: {
				items: 'Need 2 Kid Seats',
			}
		};
	},
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/common-styles";

.box-wrapper {
	position: relative;
	border: 1px solid $border-gray;
	margin: 10% 10% 5% 10%;
	padding: 12px;

	.request-nr {
		position: absolute;
		top: -28px;
	}
}

.supplier-info {
	display: flex;
	flex-direction: column;
	height: 100%;
	text-align: left;
}

.supplier-profile {
	display: flex;
	align-content: flex-start;
	margin-top: 20px;
}

.profile-photo-wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.profile-photo {
		display: flex;
		align-items: center;
		width: 90px;
		height: 90px;
		border-radius: 24%;
		background-color: $sky-blue;

		.image {
			width: 100%;
			height: 100%;
		}

		.image.placeholder {
			width: 40px;
			height: auto;
			margin: 0 auto;
		}
	}

	.supplier-name {
		margin-top: 12px;
	}

	.rating-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 20px;
	}

	.rating,
	.star {
		height: 18px;
	}

	.star {
		margin-right: 4px;
	}
}

.profile-details {
	.details-item {
		margin-bottom: 12px;
	}

	.item-title {
		color: gray;
		font-size: 12px;
	}

	.item-description {
		font-family: $font-family-regular;
	}
}

.car-details {
	padding: 12px 12px;
	margin: auto 12px 12px 0;
	background-color: rgba(81,145,250,.05);
	@media (min-width: 1300px) {
		margin-bottom: 0;
	}
	
	.arrival-details {
		display: flex;
		align-items: center;
		border-bottom: 1px solid #ccc;
	}

	.arrival-details .date {
		margin-right: 24px;
	}

	.arrival-details .icon {
		width: 12px;
		height: auto;
		margin-right: 6px;
	}
	.arrival-details span {
		font-size: 18px;
		font-family: $font-family-medium;
	}
	
	.content {
		margin-top: 8px;
		display: flex;
	}
	
	.car-image {
		width: 156px;
		height: 108px;
		flex-shrink: 0;

		.image {
			width: 100%;
			height: 100%;
		}
	}

	.car-description {
		vertical-align: top;
		margin-left: 12px;
		font-size: 12px;
		width: 100%;

		.registration-wrapper {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;
			width: 100%;
		}

		.number-plate {
			border: 2px solid $border-gray;
			border-radius: 4px;
			text-align: center;
			max-width: 100px;
			padding: 0 12px;
			font-size: 14px;
			font-family: $font-family-semibold;
		}
	}

	.car-color {
		color: gray;
	}

	.invoice-button {
		width: 108px;
		height: 48px;
		border: 1px solid $sky-blue;
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: $sky-blue;
		font-family: $font-family-semibold;
		margin-left: auto;
		margin-top: 12px;
		font-size: 14px;
		cursor: pointer;

		&:hover {
			background-color: $sky-blue;
			color: $white;

			.icon {
				background-image: url('@/assets/icons/file-lines-solid-white.svg');
			}
		}

		.icon {
			width: 18px;
			height: 24px;
			margin-right: 12px;
			background-image: url('@/assets/icons/file-lines-solid.svg');
			background-repeat: no-repeat;
			background-size: contain;
		}
	}
}

.overview {
	text-align: left;
	height: 100%;
	position: relative;

	.overview-item {
		display: flex;
		align-items: center;
	}

	.booked-dates {
		margin-bottom: 20px;
	}

	.edit-booking-dates {
		display: flex;
		align-items: center;
		margin-top: 12px;

		.date-item {
			display: flex;
			align-items: center;
			border: 1px solid rgba(81,145,250,0);
			background-color: rgba(81,145,250,.05);
			padding: 12px 12px;
			font-size: 12px;
			cursor: pointer;
		}

		.date-item:hover {
			background-color: $white;
			border: 1px solid $border-gray;
			border-radius: 8px;

			.close {
				display: block;
			}
		}

		.icon {
			width: 16px;
			height: auto;
			margin-right: 8px;
		}

		.close {
			display: none;
			width: 16px;
			height: auto;
			margin-left: 8px;
		}
	}

	.icon {
		width: 14px;
		height: auto;
		margin-right: 12px;
	}

	.route-info {
		margin-top: 32px;
		margin-bottom: 40px;
		margin-left: 12px;
		display: flex;

		.col-1 {
			max-width: 20%;
			margin-right: 20px;
		}

		.departure-time {
			font-family: $font-family-semibold;
		}
		
		.departure,
		.arrival {
			display: flex;
			align-items: center;

			.icon {
				align-self: flex-start;
				margin-top: 6px;
			}
		}
		.departure {
			margin-bottom: 32px;
		}
	}

	.route-total {
		position: absolute;
		bottom: -24px;
		right: 0;
		display: flex;

		.icon {
			margin-right: 4px;
		}

		.total-distance,
		.total-time {
			display: flex;
			align-items: center;
			font-size: 12px;
		}

		.total-distance {
			margin-right: 20px;
		}
	}
}

.map-container {
	width: 100%;
	height: 100%;
	min-height: 400px;
	padding-top: 12px;
	padding-bottom: 12px;
	@media (min-width: 1300px) {
		padding-top: 0;
		padding-bottom: 0;
	}

	.map.placeholder {
			background-image: url('@/assets/icons/no-car-image.png');
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			width: 100%;
			height: 100%;
	}
}

.additional-info-container {
	display: flex;
	padding-bottom: 12px;
	@media (min-width: 1300px) {
		padding-bottom: 0;
	}

	.col-1,
	.col-2 {
		width: 50%;
	}

	.col-1 {
		padding-top: 40px;
		text-align: left;
	}

	.col-2 {
		text-align: right;
	}

	.arrival-time {
		display: flex;
		justify-content: flex-end;
		align-items: center;

		.time-title {
			margin-right: 12px;
		}

		.time {
			font-family: $font-family-semibold;
		}

		.icon {
			margin-right: 4px;
		}
	}

	.drive-status {
		display: flex;
		justify-content: flex-end;
		align-items: center;

		.status-title {
			font-size: 14px;
			margin-right: 12px;
		}

		.status-text {
			color: $sky-blue;
			font-family: $font-family-semibold;
		}
	}

	.info-block {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: 12px;
		padding: 24px;
		background-color: rgba(252, 240, 219, 0.6);
		.icon {
			width: 30px;
			height: auto;
			margin-right: 12px;
		}
	}

	.chat-button {
		display: flex;
		align-items: center;
		width: 74px;
		height: auto;
		padding: 12px 24px;
		background-color: $leaf-green;
		border-radius: 4px;
		margin-top: 26px;
		margin-left: auto;
		cursor: pointer;

		&:hover {
			background-color: #00bf49;
		}
	}
}

.color-secondary {
	color: gray;
}

.grid-container {
	display: grid;
	grid-template-columns: 1fr; /* Default to single column for mobile */
	grid-template-rows: auto; /* Each row's height is set to wrap its content */
	grid-gap: 12px;
}

.grid-item {
	border-bottom: 1px solid #ccc;
}

/* The first item takes full width and does not span since it's a single column layout */
.item1 {
	grid-column: 1;
	grid-row: 1;
}

/* The last item takes full width in a single column layout */
.span-2-cols {
	grid-column: 1;
	grid-row: 4; /* Position based on it being the fourth item */
}

/* Large screens (e.g., desktops) */
@media (min-width: 1300px) {
	.grid-container {
		/* Now we have three columns */
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: auto 1fr;
	}

	.grid-item {
		border: none;
	}

	.item1 {
		/* The first item will span all rows */
		grid-row: 1 / -1;
		border-right: 1px solid $border-gray;
	}

	.item2, .item3 {
		/* These items only take up their respective columns */
		grid-column: auto;
		grid-row: 1;
	}

	.item2 {
	border-bottom: 1px solid $border-gray;
	}

	.item3 {
	border: 1px solid $border-gray;
	}

	.span-2-cols {
		/* This will span the last two columns */
		grid-column: 2 / -1;
		grid-row: 2;
	}
}
</style>
  