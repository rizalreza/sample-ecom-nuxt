<template>
    <div>
        <header class="header-fixed">
			<div class="main-header">
				<div class="container">
					<div class="row">
						<div class="col-xs-5 col-sm-2">
							<a href="/">
								<img src="/template/images/logoa.png" alt="image" style="width: 250px;margin-top: 5px;">
							</a>
						</div>
						<div class="col-sm-8 hidden-xs">
							<nav class="menu-nav pull-right">
								<ul class="menu">
									<li>
										<a href="/product/list">Product</a>
									</li>
									<li>
										<a href="#">Artikel</a>
										<ul class="sub-menu">
											<li><a href="/promotion">Promosi</a></li>
											<li><a href="#">Ulasan Jam</a></li>
											<li><a href="#">Gaya Hidup</a></li>
										</ul>
									</li>
									<li>
										<a href="#">Tentang Kami</a>
										<ul class="sub-menu">
											<li><a href="/career">Karir</a></li>
											<li><a href="#">Hubungi Kami</a></li>
											<li><a href="#">Marketing</a></li>
											<li><a href="#">Partnership</a></li>
										</ul>
									</li>
								</ul>
							</nav>
						</div>
						<div class="col-xs-7 col-sm-2 text-right">
							<ul class="list list-inline m-t-15">
								<li>
									<i class="icon-t icon-search fa fa-search"></i>
								</li>
								<li class="menu-btn">
									<i class="icon-t fa fa-bars"></i>
								</li>
							</ul>
						</div>
					</div>
					<div class="search-box">
						<input type="text" class="form-item search-txt" placeholder="Enter you keyword...">
						<button class="search-btn"><i class="fa fa-search"></i></button>
					</div>
				</div>
			</div>
		</header>
		<div class="header1-fixed">
			<div class="row" style="padding: 20px;">
				<div class="col-xs-5 col-sm-6"></div>
				<div class="col-xs-5 col-sm-6">
					<b class="textstart" style="margin-left: 35px;background: #dc4c46;padding: 8px;border-radius: 7px;color:#FFF;">00<font color="#FFF;">h</font> : 32<font color="#FFF;">m</font> : 02<font color="FFF;">s</font></b>
					<span class="badge badge-success" style="background-color: #28a745;padding: 15px;margin-left: 0px;margin-top: -10px;font-size: 14px;">Lelang di Mulai</span>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
export default {
    
}
</script>

