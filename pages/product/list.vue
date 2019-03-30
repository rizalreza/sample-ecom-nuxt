<template>
    <div>
		<section class="banner" style="margin-top: 71px;">
			<div class="box h-200 bg-image-13">
				<div class="box-overlay text-left">
					<div class="container">
						<h1 class="box-heading box-heading-md p-b-0">List Lelang</h1>
						<ul class="breadcrumbs">
							<li><a href="#">Dashboard</a></li>
							<li>List Lelang Jam</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<section class="product bg-pri-c">
			<div class="container">
				<div class="row">
					<div class="col-md-3">
						<div class="box-1">
							<h3 style="text-transform: none;padding-top: 10px;">Filter</h3>
							<form>
								<select class="form-item">
									<option>Kondisi</option>
									<option>Baru</option>
									<option>Second</option>
								</select>
								<select class="form-item">
									<option>Kategori</option>
									<option>Brand New</option>
									<option>Pre-Owned</option>
									<option>Casio</option>
									<option>Accessories</option>
									<option>Strap or Bracelet</option>
								</select>
								<select class="form-item">
									<option>Warna</option>
									<option>Emas</option>
									<option>Perak</option>
									<option>Merah</option>
									<option>Biru</option>
									<option>Hitam</option>
									<option>Kuning</option>
									<option>Lainnya</option>
								</select>
								<select class="form-item">
									<option>Harga</option>
									<option>500,000 - 2,000,000</option>
									<option>2,000,000 - 10,000,000</option>
									<option>10,000,000 &gt;</option>
								</select>
								<a href="#" class="btn bg-2">Cari</a>
								<div class="m-t-20"><a href="#" class="color-9">Cari dengan Opsi Lain</a></div>
							</form>
						</div>
						<div class="box-1">
							<h3 style="text-transform: none;padding-top: 10px;">Menu</h3>
							<ul class="list-g2">
								<li class="active"><a href="#">List Lelang</a></li>
								<li><a href="#">Favorit</a></li>
								<li><a href="#">Transaksi Pembelian</a></li>
								<li><a href="#">Profile</a></li>
								<li><a href="#">Logout</a></li>
							</ul>
						</div>
					</div>
					<div class="col-sm-8 col-md-9">
						<div class="row">
							<div class="col-sm-6 col-md-4">
								<div class="box">
									<a class="box-img"><img :src="require('@/assets/images/jam1.jpg')" alt="image"></a>
									<div class="box-body">
										<h4 class="box-heading">
											<div class="col-sm-6" style="text-align: left;padding: 0px;">
												<b>67</b> <i class="fa fa-gavel"></i></a> 
												<b>22</b> <i class="fa fa-user"></i></a>
											</div> 
											<div class="col-sm-6" style="text-align: right;padding: 0px;">
												<i class="fa fa-heart-o"></i></a>
											</div>
										</h4>
										<h4 class="box-heading"><a href="/product/detail" class="border-left-5">Panerai Pam692 Sub...</a></h4>
										<p class="color-9">200x di lihat <i class="fa fa-eye"></i></p>
										<p class="color-9">2019-01-15 / 08:00:00</p>
										<p class="color-9">Ref. No. PAM00692, Movement Automatic, Case Diametre...</p>
									</div>
									<div class="box-call"><div class="box-call">Rp.5.500.000</div></div>
								</div>
							</div>
							<div class="col-sm-6 col-md-4">
								<div class="box">
									<a class="box-img"><img :src="require('@/assets/images/jam2.jpg')" alt="image"></a>
									<div class="box-body">
										<h4 class="box-heading">
											<div class="col-sm-6" style="text-align: left;padding: 0px;">
												<b>17</b> <i class="fa fa-gavel"></i></a> 
												<b>42</b> <i class="fa fa-user"></i></a>
											</div> 
											<div class="col-sm-6" style="text-align: right;padding: 0px;">
												<i class="fa fa-heart-o"></i></a>
											</div>
										</h4>
										<h4 class="box-heading"><a href="/product/detail" class="border-left-5">Panerai PAM 654 Lumi...</a></h4>
										<p class="color-9">200x di lihat <i class="fa fa-eye"></i></p>
										<p class="color-9">2019-01-15 / 08:00:00</p>
										<p class="color-9">Reference number PAM 654, Movement Automatic, Ca...</p>
									</div>
									<div class="box-call"><div class="box-call">Rp.6.200.000</div></div>
								</div>
							</div>
							<div class="col-sm-6 col-md-4">
								<div class="box">
									<a class="box-img"><img :src="require('@/assets/images/jam3.jpg')" alt="image"></a>
									<div class="box-body">
										<h4 class="box-heading">
											<div class="col-sm-6" style="text-align: left;padding: 0px;">
												<b>67</b> <i class="fa fa-gavel"></i></a> 
												<b>22</b> <i class="fa fa-user"></i></a>
											</div> 
											<div class="col-sm-6" style="text-align: right;padding: 0px;">
												<i class="fa fa-heart-o"></i></a>
											</div>
										</h4>
										<h4 class="box-heading"><a href="/product/detail" class="border-left-5">BNIB Panerai Pam...</a></h4>
										<p class="color-9">200x di lihat <i class="fa fa-eye"></i></p>
										<p class="color-9">2019-01-15 / 08:00:00</p>
										<p class="color-9">Ref. No. PAM 631, Movement Manual winding, Cas...</p>
									</div>
									<div class="box-call"><div class="box-call">Rp.3.200.000</div></div>
								</div>
							</div>
							<div class="col-sm-6 col-md-4">
								<div class="box">
									<a class="box-img"><img :src="require('@/assets/images/jam4.jpg')" alt="image"></a>
									<div class="box-body">
										<h4 class="box-heading">
											<div class="col-sm-6" style="text-align: left;padding: 0px;">
												<b>67</b> <i class="fa fa-gavel"></i></a> 
												<b>22</b> <i class="fa fa-user"></i></a>
											</div> 
											<div class="col-sm-6" style="text-align: right;padding: 0px;">
												<i class="fa fa-heart-o"></i></a>
											</div>
										</h4>
										<h4 class="box-heading"><a href="/product/detail" class="border-left-5">TUDOR BlackBay Herit...</a></h4>
										<p class="color-9">200x di lihat <i class="fa fa-eye"></i></p>
										<p class="color-9">2019-01-15 / 08:00:00</p>
										<p class="color-9">Ref: 79220R, Case material: Steel, Diameter: 41mm...</p>
									</div>
									<div class="box-call"><div class="box-call">Rp.3.200.000</div></div>
								</div>
							</div>
							<div class="col-sm-6 col-md-4">
								<div class="box">
									<a class="box-img"><img :src="require('@/assets/images/jam1.jpg')"alt="image"></a>
									<div class="box-body">
										<h4 class="box-heading">
											<div class="col-sm-6" style="text-align: left;padding: 0px;">
												<b>67</b> <i class="fa fa-gavel"></i></a> 
												<b>22</b> <i class="fa fa-user"></i></a>
											</div> 
											<div class="col-sm-6" style="text-align: right;padding: 0px;">
												<i class="fa fa-heart-o"></i></a>
											</div>
										</h4>
										<h4 class="box-heading"><a href="#" class="border-left-5">Panerai Pam692 Sub...</a></h4>
										<p class="color-9">200x di lihat <i class="fa fa-eye"></i></p>
										<p class="color-9">2019-01-15 / 08:00:00</p>
										<p class="color-9">Ref. No. PAM00692, Movement Automatic, Case Diametre...</p>
									</div>
									<div class="box-call"><div class="box-call">Rp.6.100.000</div></div>
								</div>
							</div>
							<div class="col-sm-6 col-md-4">
								<div class="box">
									<a class="box-img"><img :src="require('@/assets/images/jam2.jpg')" alt="image"></a>
									<div class="box-body">
										<h4 class="box-heading">
											<div class="col-sm-6" style="text-align: left;padding: 0px;">
												<b>67</b> <i class="fa fa-gavel"></i></a> 
												<b>22</b> <i class="fa fa-user"></i></a>
											</div> 
											<div class="col-sm-6" style="text-align: right;padding: 0px;">
												<i class="fa fa-heart-o"></i></a>
											</div>
										</h4>
										<h4 class="box-heading"><a href="#" class="border-left-5">Panerai PAM 654 Lumi...</a></h4>
										<p class="color-9">200x di lihat <i class="fa fa-eye"></i></p>
										<p class="color-9">2019-01-15 / 08:00:00</p>
										<p class="color-9">Reference number PAM 654, Movement Automatic, Ca...</p>
									</div>
									<div class="box-call"><div class="box-call">Rp.13.200.000</div></div>
								</div>
							</div>
							<div class="col-sm-6 col-md-4">
								<div class="box">
									<a class="box-img"><img :src="require('@/assets/images/jam3.jpg')" alt="image"></a>
									<div class="box-body">
										<h4 class="box-heading">
											<div class="col-sm-6" style="text-align: left;padding: 0px;">
												<b>67</b> <i class="fa fa-gavel"></i></a> 
												<b>22</b> <i class="fa fa-user"></i></a>
											</div> 
											<div class="col-sm-6" style="text-align: right;padding: 0px;">
												<i class="fa fa-heart-o"></i></a>
											</div>
										</h4>
										<h4 class="box-heading"><a href="/product/detail" class="border-left-5">BNIB Panerai Pam...</a></h4>
										<p class="color-9">200x di lihat <i class="fa fa-eye"></i></p>
										<p class="color-9">2019-01-15 / 08:00:00</p>
										<p class="color-9">Ref. No. PAM 631, Movement Manual winding, Cas...</p>
									</div>
									<div class="box-call"><div class="box-call">Rp.4.200.000</div></div>
								</div>
							</div>
							<div class="col-sm-6 col-md-4">
								<div class="box">
									<a class="box-img"><img :src="require('@/assets/images/jam4.jpg')"alt="image"></a>
									<div class="box-body">
										<h4 class="box-heading">
											<div class="col-sm-6" style="text-align: left;padding: 0px;">
												<b>67</b> <i class="fa fa-gavel"></i></a> 
												<b>22</b> <i class="fa fa-user"></i></a>
											</div> 
											<div class="col-sm-6" style="text-align: right;padding: 0px;">
												<i class="fa fa-heart-o"></i></a>
											</div>
										</h4>
										<h4 class="box-heading"><a href="/product/detail" class="border-left-5">TUDOR BlackBay Herit...</a></h4>
										<p class="color-9">200x di lihat <i class="fa fa-eye"></i></p>
										<p class="color-9">2019-01-15 / 08:00:00</p>
										<p class="color-9">Ref: 79220R, Case material: Steel, Diameter: 41mm...</p>
									</div>
									<div class="box-call"><div class="box-call">Rp.1.000.000</div></div>
								</div>
							</div>
							<div class="col-sm-6 col-md-4">
								<div class="box">
									<a class="box-img"><img :src="require('@/assets/images/jam3.jpg')" alt="image"></a>
									<div class="box-body">
										<h4 class="box-heading">
											<div class="col-sm-6" style="text-align: left;padding: 0px;">
												<b>67</b> <i class="fa fa-gavel"></i></a> 
												<b>22</b> <i class="fa fa-user"></i></a>
											</div> 
											<div class="col-sm-6" style="text-align: right;padding: 0px;">
												<i class="fa fa-heart-o"></i></a>
											</div>
										</h4>
										<h4 class="box-heading"><a href="/product/detail" class="border-left-5">BNIB Panerai Pam...</a></h4>
										<p class="color-9">2019-01-15 / 08:00:00</p>
										<p class="color-9">Ref. No. PAM 631, Movement Manual winding, Cas...</p>
									</div>
									<div class="box-call"><div class="box-call">Rp.500.000</div></div>
								</div>
							</div>
						</div>
						<nav aria-label="Page navigation">
							<ul class="pagination ht-pagination">
								<li><a href="#" aria-label="Previous"><i class="fa fa-chevron-left"></i></a></li>
								<li><a href="#">1</a></li>
								<li><a href="#">2</a></li>
								<li><a href="#">3</a></li>
								<li><a href="#">4</a></li>
								<li><a href="#">5</a></li>
								<li><a href="#" aria-label="Next"><i class="fa fa-chevron-right"></i></a></li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</section>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Product List.')
        }
    }
</script>
