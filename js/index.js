window.onload=function(){
	var rules_btn = document.getElementById('rules_btn');
	var start_btn = document.getElementById('start_btn');
	var rules_page = document.getElementById('rules_page');
	var rules_close = document.getElementById('rules_close');
	var start_page = document.getElementById('start_page');
	var start_close = document.getElementById('start_close');
	var footer = document.getElementById('footer');

	rules_btn.addEventListener('touchstart',function(){
		rules_page.setAttribute('class','page page_show');
		footer.style.display = 'none';
	},false);
	rules_close.addEventListener('touchstart',function(){
		rules_page.setAttribute('class','page page_close');
		footer.style.display = 'block';
	},false);
	start_btn.addEventListener('touchstart',function(){
		start_page.setAttribute('class','page page_show');
		footer.style.display = 'none';
	},false);
	start_close.addEventListener('touchstart',function(){
		start_page.setAttribute('class','page page_close');
		footer.style.display = 'block';
	},false);
}