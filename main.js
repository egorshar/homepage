$(function () {
	var strings = ["Hi all!^500"];

	strings.push([
		"My name is Egor and I'm a frontend-developer^1000",
		"The last " + (Math.floor((Date.now() - new Date('Sat Sep 15 2012 11:34:49 GMT+0300 (MSK)'))/(1000*60*60*24*30*12))) + " years I have been working in amoCRM^1000",
		"Currently not available for hire^1000",
		'^500',
		'My social profiles:^300'
	].join('<br>'));

	$(".element").typed({
		contentType: 'html',
		strings: strings,
		typeSpeed: 0,

		callback: function () {
			$('#socials').css('opacity', 1);
		}
  });
});
