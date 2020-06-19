<template>
	<div>
		<!-- Start User Account Setting -->
		<div class="user-account-setting">
			<div class="container">
				<div class="row">
					<!-- LEFT -->
					<div class="col-sm-3" id="myScrollspy">
						<div class="list-group">
							<nuxt-link
								v-for="link in links" :key="link.route"
								class="list-group-item list-group-item-action"
								:to="{ name:link.route }"
								
								>
								{{ link.title }}
							</nuxt-link
							>
							<!-- <a
								class="list-group-item list-group-item-action"
								href="#"
								>Change Password</a
							>
							<a
								class="list-group-item list-group-item-action"
								href="#"
								>Teams</a
							> -->
							
						</div>
					</div>

					<!-- RIGHT -->
					<div class="col-sm-9">
						<router-view></router-view>
						<!-- <div class="setting-block" id="list-item-1">
							<div class="setting-title font-16 fw-500">
								Account Information
							</div>
							<div class="setting-body white-bg-color">
								<div class="row">
									<div class="col-md-6">
										<form class="custom-form">
											<div class="form-group">
												<label class="font-14 fw-500">Name</label>
												<input type="text"
													name="name"
													class="form-control form-control-lg font-14 fw-300"
													placeholder="Full Name"
												/>
											</div>
											<div class="form-group">
												<label class="font-14 fw-500">Tag Line</label>
												<input type="text"
													class="form-control form-control-lg font-14 fw-300"
													placeholder="eg. Senior Graphics Designer"
												/>
											</div>

											<div class="form-group">
												<label class="font-14 fw-500">About me</label>
												<textarea
													class="form-control font-14 fw-300"
													rows="5"
													placeholder="Tell us about you"
												></textarea>
											</div>

											<div class="form-group">
												<label
													class="font-14 fw-500"
													>Location</label
												>
												<input
													type="text"
													name="name"
													class="form-control form-control-lg font-14 fw-300"
													placeholder="eg New York, USA"
												/>
											</div>

											<div
												class="custom-control custom-checkbox mt-2 font-14 fw-300"
											>
												<input
													type="checkbox"
													class="custom-control-input"
													id="checkBox1"
												/>
												<label
													class="custom-control-label"
													for="checkBox1"
													>Available to
													hire?</label
												>
											</div>
											<div
												class="mt-2 font-14 fw-300"
											>
												<button
													class="btn btn-primary"
												>
													Save
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div> -->
					</div>
					<!-- END RIGHT -->
				</div>
			</div>
			<!-- END CONTAINER -->
		</div>		
	</div>
</template>

<script>
export default {
	middleware: ['auth'],
	data(){
		return {
			links: [
				{ title: 'Dashboard', route: 'settings.dashboard' },
				{ title: 'Update Profile', route: 'settings.profile' },
				{ title: 'Designs', route: 'settings.designs' },
			]
		}
	}
}
</script>

<style>

</style>