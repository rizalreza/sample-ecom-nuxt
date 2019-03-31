<template>
    <div>
		<section class="banner">
			<div class="box h-300 bg-image-13">
				<div class="box-overlay text-left">
					<div class="container">
						<h1 class="box-heading box-heading-md p-b-0">Profile</h1>
						<ul class="breadcrumbs">
							<li><a href="/">Home</a></li>
							<li>Profile</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		<section class="bg-pri-c relative bg-f5">
		<div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-md-8 col-sm-offset-2 col-md-offset-2">
                    <div class="well well-sm">
                        <div class="row">
                            <div class="col-sm-6 col-md-4">
                                <img :src="require('@/static/template/images/avatar.png')" alt="" class="img-circle img-responsive" />
                            </div>
                            <div class="col-sm-6 col-md-8">
                                <div class="pull-right">
                                                                    <!-- Split button -->
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-primary btn-xs">
                                            Action</button>
                                        <button type="button" class="btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown">
                                            <span class="caret"></span><span class="sr-only">Action</span>
                                        </button>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a href="#">Edit Profile</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <h3>{{user.name}}</h3>
                                <br/>
                                <small><i class="fa fa-university"></i> <cite title="San Francisco, USA">San Francisco, USA 
                                </cite></small>
                                <p>
                                    <i class="fa fa-envelope"></i> {{user.email}}
                                    <br />
                                    <i class="fa fa-calendar"></i> June 02, 1988</p>

                            </div>
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
        middleware: 'auth',
        mounted() {
            console.log('Profile Page');
        }
    }
</script>

<style>
    .circle-img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    }
</style>

