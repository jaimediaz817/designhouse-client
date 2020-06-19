<template>
	<div class="container bg-success">
		<!-- home quitar esto del contenido principal -->
		{{ $auth.user }}
		<i class="fas fa-user"></i>
	</div>
</template>

<script>

export default {
	middleware: ['auth'],
}
</script>

<style>

</style>
