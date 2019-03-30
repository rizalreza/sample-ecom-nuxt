<template>
    <div>
        <section class="banner">
			<div class="box h-300 bg-image-13">
				<div class="box-overlay text-left">
					<div class="container">
						<h1 class="box-heading box-heading-md p-b-0">Login</h1>
						<ul class="breadcrumbs">
							<li><a href="#">Home</a></li>
							<li>Login</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		<section class="bg-pri-c relative bg-f5">
			<div class="container">
				<div class="content">
					<div class="row">
						<div class="col-sm-6 col-sm-offset-3">
							<div class="box-1 p-50"><!-- Nav tabs --><!-- Tab panes -->
								<h3 class="line-default f-30 selected">LOGIN</h3>
								<form>
									<input type="text" class="form-item" placeholder="Email">
									<input type="password" class="form-item" placeholder="Password">
									<!-- <div class="checkbox">
										<label><input type="checkbox" value="">Lorem ipsum dolor sit amet consectetur</label>
									</div> -->
                                    <center>
									    <button type="submit" class="btn bg-dc4c46">Login</button>
                                    </center>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Product Detail.')
        }
    }
</script>
