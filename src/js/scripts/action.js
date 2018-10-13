var indexchartskill = 0;
var skillh = 0;
var abouth = 0;

function SkillBind(skills)
{
	$('div#skillcontainer').empty();
	var htmlskrow = '';
	$.each(skills, function(i, itemsk) {
		htmlskrow = '<div class="col-md-4 col-sm-6 skill"> <span class="chart" data-percent="' + itemsk.levelskill + '"> <span class="percent">' + itemsk.levelskill + '</span> </span>';
		htmlskrow += '<h4>' + itemsk.nameskill + '</h4></div>';
		
		$('div#skillcontainer').append(htmlskrow);
		
	});

	
	
	$(document).scroll(function(){
		ChartSkillActive();
	});


}

function ChartSkillActive()
{
	var topsk = skillh-$(window).scrollTop();
	var topab = abouth-$(window).scrollTop();
	

	if(topsk <-topab + 10){
		if(indexchartskill==0){	
		
			$('.chart').easyPieChart({
				easing: 'easeOutBounce',
				onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				}
			});
		
		}
		
		indexchartskill++;
	}
}

function PortfolioBind(portfolio)
{
	$('ol#categoriesportfolio').empty();
	$('ol#categoriesportfolio').append('<li><a href="#" data-filter="*" class="active">All</a></li>');
	var htmlportrow = '';
	var htmlportitem = '';
	$('div.portfolio-items').empty();
	
	$.each(portfolio, function(i, categoriaport) {
		htmlportrow = '<li><a href="#" data-filter=".' + categoriaport.portfoliocategorie_id + '">' + categoriaport.portfoliocategorie_name + '</a></li>';
		$('ol#categoriesportfolio').append(htmlportrow);
		
		$.each(categoriaport.portfolioitems, function(i, itemport) {
			htmlportitem = '<div class="col-sm-6 col-md-3 col-lg-3 ' + categoriaport.portfoliocategorie_id + '">';
			htmlportitem += '<div class="card portfolio-item">';
			htmlportitem += '<div class="hover-bg">';
			htmlportitem += '<a href="' + itemport.linkportfolio + '" title="Project description" rel="prettyPhoto">';
			htmlportitem += '<div class="card-body">';
			htmlportitem += '<h4 class="card-title"><strong>' + itemport.nameportfolio + '</strong></h4>';
			htmlportitem += '<p class="card-text">' + itemport.descportfolio + '</p>';
			htmlportitem += '</div></a></div></div></div>';
			
			$('div.portfolio-items').append(htmlportitem);
		});
		
	});
}

function SomeStatsBind(somestats)
{
	$('div#somestatscontainer').empty();
	
	$.each(somestats, function(i, itemst) {
		var htmlstatsrow = '';
		htmlstatsrow += '<div class="col-md-3 col-sm-3 wow fadeInDown" data-wow-delay="' + itemst.delay + '">';
		htmlstatsrow += '<div class="achievement-box">';
		htmlstatsrow += '<span class="count">' + itemst.value + '</span>';
		htmlstatsrow += '<h4>' + itemst.name + '</h4>';
		htmlstatsrow += '</div></div>';

		$('div#somestatscontainer').append(htmlstatsrow);
		
	});

	if($("span.count").length > 0){	
		$('span.count').counterUp({
				delay: 10, // the delay time in ms
		time: 1500 // the speed time in ms
		});
	}
}


function XpTimeLineBind(xptimeline)
{
	$('ul#xptimeline').empty();
	
	$.each(xptimeline, function(i, itemxptm) {
		var htmlxptmrow = '';

		if (i % 2 == 0){
			htmlxptmrow += '<li>';
		}else{
			htmlxptmrow += '<li class="timeline-inverted">';
		}

		htmlxptmrow += '<div class="timeline-image">';
		htmlxptmrow += '<h4>' + itemxptm.period.datein + ' <br>';
		htmlxptmrow += '- <br>' + itemxptm.period.dateout + ' </h4></div>';
		htmlxptmrow += '<div class="timeline-panel"><div class="timeline-heading">';
		htmlxptmrow += '<h4>' + itemxptm.employer + '</h4>';
		htmlxptmrow += '<h4 class="subheading">' + itemxptm.ocupation + '</h4>';
		htmlxptmrow += '</div><div class="timeline-body">';
		htmlxptmrow += '<p>' + itemxptm.description + '</p>';
		htmlxptmrow += '</div></div></li>';
	
		
		$('ul#xptimeline').append(htmlxptmrow);
		
	});
}


function EduTimeLineBind(edutimeline)
{
	$('ul#edutimeline').empty();
	
	$.each(edutimeline, function(i, itemedutm) {
		var htmledutmrow = '';

		if (i % 2 == 0){
			htmledutmrow += '<li>';
		}else{
			htmledutmrow += '<li class="timeline-inverted">';
		}

		htmledutmrow += '<div class="timeline-image">';
		//htmledutmrow += '<h4>' + itemedutm.period.datein + ' <br>';
		//htmledutmrow += '- <br>' + itemedutm.period.dateout + ' </h4></div>';
		htmledutmrow += '<h4>' + itemedutm.period.dateout + ' </h4></div>';
		htmledutmrow += '<div class="timeline-panel"><div class="timeline-heading">';
		htmledutmrow += '<h4>' + itemedutm.institution + '</h4>';
		htmledutmrow += '<h4 class="subheading">' + itemedutm.course + '</h4>';
		htmledutmrow += '</div><div class="timeline-body">';
		htmledutmrow += '<p>' + itemedutm.description + '</p>';
		htmledutmrow += '</div></div></li>';
	
		
		$('ul#edutimeline').append(htmledutmrow);
		
	});
}

function SocialNetwork(socialnetwork)
{
	$('div.social-network > ul').empty();
	
	$.each(socialnetwork, function(i, itemsnet) {
		var htmlsocialnetrow = '';
		htmlsocialnetrow += '<li><a href="' + itemsnet.url + '">';
		htmlsocialnetrow += '<i class="fa ' + itemsnet.icon + '"></i></a></li>';
		
		$('div.social-network > ul').append(htmlsocialnetrow);
		
	});
	
}

$(document).ready(function() {
	$('html').smoothScroll(900);
	
	//console.log(resume);
	document.title = resume.name + " - " + resume.profile;
	$('span.name').text(resume.name);
	$('p.profile').text(resume.profile);
	$('a.name').text(resume.name);
	$('div.about-text > p.resumedescription').text(resume.Description);
	$('div.intro').css('background-image', 'url(' + resume.urlimgbanner + ')');
	$('img#imgaboutme').attr("src",resume.urlimgaboutme);
	
	
	$('a#btnResumeDownload').click(function(e) {
		e.preventDefault();  //stop the browser from following
		window.location.href = 'uploads/' + resume.urlresumedownload;
	});
	
	//contact
	$('p#contactaddress').text(resume.AddressContact);
	
	$('a#contactmaps').attr("href", resume.AddressUrlGmaps);
	$('p#contactmail').text(resume.EmailContact);
	$('p#contactphonenumber').text(resume.PhoneNumberContact);

	
	SkillBind(resume.skills);

	skillh = $('#skills').height();
	abouth = $('#about').height();
	

	ChartSkillActive();
	$(document).scroll(function(){
		ChartSkillActive();
	});

	PortfolioBind(resume.portfolio);
	SomeStatsBind(resume.somestats);

	XpTimeLineBind(resume.experience);

	EduTimeLineBind(resume.education);

	SocialNetwork(resume.socialnetwork)
	
	
});




