<template>
    <div>
		<section class="banner">
			<div class="box h-300 bg-image-13">
				<div class="box-overlay text-left">
					<div class="container">
						<h1 class="box-heading box-heading-md p-b-0">Register</h1>
						<ul class="breadcrumbs">
							<li><a href="#">Home</a></li>
							<li>Register</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		<section class="bg-pri-c">
			<div class="container">
				<div class="content">
					<div class="row">
						<div class="col-sm-6 col-sm-offset-3">
							<div class="box-1 p-50">
								<h3 class="line-default f-30 selected">REGISTER FORM</h3>
								<form @submit.prevent="register">
                                    <div class="form-group">
                                        <label>Name</label>
                                        <input v-model="form.name" type="text" class="form-control" :class="{ 'is-invalid' : errors.name}" placeholder="Name">
                                        <div class="invalid-feedback text-danger" v-if="errors.name">
                                            {{errors.name[0]}}
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label>Email</label>
                                        <input v-model="form.email" type="text" class="form-control" :class="{ 'is-invalid' : errors.email}"  placeholder="Email">
                                        <div class="invalid-feedback text-danger" v-if="errors.email">
                                            {{errors.email[0]}}
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label>Password</label>
                                        <input v-model="form.password" type="password" class="form-control" :class="{ 'is-invalid' : errors.password}" placeholder="Password">
                                        <div class="invalid-feedback text-danger" v-if="errors.password">
                                            {{errors.password[0]}}
                                        </div>
                                    </div>
	
									<!-- <input type="text" class="form-item" placeholder="Username"> -->
									<!-- <input type="text" class="form-item" placeholder="Email"> -->
									<!-- <input  type="password" class="form-item" placeholder="Password"> -->
									<!-- <input type="password" class="form-item" placeholder="Confrim password"> -->
									<!-- <div class="checkbox">
										<label><input type="checkbox" value="">Lorem ipsum dolor sit amet consectetur</label>
									</div> -->
                                    <center>
									<button type="submit" class="btn bg-dc4c46">Register</button>
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
        middleware: 'guest',
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    password: '',
                }
            }
        },

        methods: {
            register() {
                this.$axios.$post('/auth/register', this.form)
                .then(data => {
                    this.$auth.login({data: this.form});
                    this.$router.push({name : 'index'});
                    console.log(data);
                })
                .catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>
