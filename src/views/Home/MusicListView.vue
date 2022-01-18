<template>
	<div class="card">
		<div class="container">
			<div class="title">
				<h3>New Song</h3>
				<a href="#">More</a>
			</div>
		</div>
		<div class="list-container">
			<div class="music-box">
				<div class="image">Image</div>
				<div class="music-title">ABC</div>
				<div class="artist">NAME</div>
			</div>
			<div class="music-box">
				<div class="image">Image</div>
				<div class="music-title">ABC</div>
				<div class="artist">NAME</div>
			</div>
			<div class="music-box">
				<div class="image">Image</div>
				<div class="music-title">ABC</div>
				<div class="artist">NAME</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.music-box {
	width: 55px;
	background-color: rgb(194, 241, 241);
	margin: 0px 10px 20px;
	padding: 20px;
	border-radius: 5px;
}
.list-container {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
.card {
	background-color: rgb(194, 197, 238);
	padding: 3px 10px;
}

.title {
	display: flex;
}

.title h3 {
	flex: 1;
	text-align: start;
	font-weight: 700;
}

.title a {
	text-decoration: none;
	display: flex;
	align-items: center;
	color: black;
}
</style>
