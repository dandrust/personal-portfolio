$(document).ready(function(){

	// Declare variables
	var setMinSectHeight = function() {
		var headerHeight = $(window).height() - 50;
		var headRowTopMargin = (headerHeight - $(".head-row").outerHeight(true))/2.5;
		var contactHeight = $(window).height() - (50 + 60 - 10);
		var contactContentHeight = $("#contact-content").outerHeight(true);

		// Set height of top pane and vertically center header row
		$(".top-pane").css("min-height", headerHeight);
		$(".head-row").css("margin-top", headRowTopMargin);

		// Set height of contact section and vertically center content if viewport larger than content
		if (contactContentHeight < contactHeight) {
			$("#contact").css("min-height", contactHeight);
			$("#contact-content").css("margin-top", (contactHeight-contactContentHeight)/2);
		}


		//$("#contact").css("min-height", windowHeight - 50);
		//console.log($("#contact").css("min-height"));
	};

	var buildPortfolio = function(){

	var portfolio = [{
			"num": "5",
			"title": "Wikipedia Searcher",
			"address": "wikipedia-viewer",
			"date": "June 2016",
			"description": "The challenge was to build a site that uses the <a href='http://www.mediawiki.org/wiki/API:Main_page' target='_blank'>MediaWiki API</a> to fetch search results and display them. For this page, I've used jQuery and JSON/Ajax to request and receive JSONP from Wikipedia, then parse those results and build result boxes using jQuery. The page also features some basic CSS animation upon loading and to display additional search results. Another <a href='http://www.freecodecamp.com' target='_blank'>Free Code Camp</a> assignment.",
			"img": "wikipedia_project.png",
			"tags": ["HTML5/CSS3", "jQuery", "Ajax/JSON", "MediaWiki API"],
			"highlight": true
		},

		{
			"num": "4",
			"title": "Weather App",
			"address": "local-weather",
			"codepen": "WxQJoy",
			"date": "June 2016",
			"description": "This page is designed to grab geolocation data and display weather data for a users location.  As a <a href='http://www.freecodecamp.com' target='_blank'>Free Code Camp</a> assignment, requirements were to display current weather in a user's location and toggle metric/imperial units with a button. These tasks are accomplished with an API call to <a href='http://www.freegeoip.net' target='_blank'>freegeoip.net</a> and <a href='http://www.openweathermap.org/api' target='_blank'>OpenWeatherMap</a>, jQuery to parse the data and write it to HTML, and functions to convert unit.  Aside from those requirements, I included a refresh button and a progress bar that tells the user the status of the refresh, and then hides when complete.  Additional goals for this project were to use Bootstrap 3 to a deeper degree, focus on using semantic HTML, and create a mobile design. For that reason, the page is best viewed with a small or extra-small viewport.",
			"img": "weather_app.png",
			"tags": ["HTML5/CSS3", "Bootstrap 3", "jQuery", "Ajax/JSON", "JavaScript"],
			"highlight": false
		},

		{
			"num": "3",
			"title": "Quote Machine",
			"address": "random-quote-machine",
			"date": "June 2016",
			"description": "This page, also created to fulfill a <a href='http://www.freecodecamp.com' target='_blank'>Free Code Camp</a> assignment, uses JavaScript to select a random number, reads an quote bank stored in an object, and then uses jQuery to write the quote to the page. Users may also tweet the quote by clicking a twitter icon. My goals for this page were to apply CSS layouts to create a custom layout, not relying on CSS frameworks.  I've also tried to exercise my design muscles with a minimalist layout and expressive color.",
			"img": "quote_machine.png",
			"tags": ["HTML5/CSS", "jQuery", "JavaScript"],
			"highlight": true
		},



		{
			"num": "2",
			"title": "Portfolio Website, first draft",
			"address": "portfolio_draft.html",
			"codepen": "pbvKNR",
			"date": "June 2016",
			"description": "This was my first attempt at a portfolio website, using a model from <a href='http://www.freecodecamp.com' target='_blank'>Free Code Camp</a>.  This project's aim was to create a navbar and use links to social media.",
			"img": "portfolio_first.png",
			"tags": ["HTML5/CSS3", "Bootstrap 3"],
			"highlight": false
		},



		{
			"num": "1",
			"title": "Tribute Page",
			"address": "tribute.html",
			"codepen": "WxbGoB",
			"date": "June 2016",
			"description": "This was my first page while working through the <a href='http://www.freecodecamp.com' target='_blank'>Free Code Camp</a> curriculum. The assignment was to built a tribute page, relying heavily on formatting with Bootstrap, that included a picture and external links.",
			"img": "tribute_thumb.png",
			"tags": ["HTML5/CSS3", "Bootstrap 3"],
			"highlight": false
		}]



	//$.getJSON("portfolio/portfolio.json", function(portfolio){

		for (i = 0; i < 3; i++) {
		var html = ""
		var x = portfolio[i];
		console.log(x.num);
		html += "<div class='row vcenter project-container b'>" +
					"<div class='col-sm-6 b '>" +
						"<a href='https://dandrust.github.io/" + x.address + "'><img src='portfolio/img/" + x.img +"' class='img-responsive img-border portfolio-img'></a>" +
					"</div>" +
					"<div class='col-sm-6 b'>" +
						"<p class='title project-title text-center'><a href='https://dandrust.github.io/" + x.address + "'>" + x.title + "</a>" +
						"</p>" +
						"<p class='portfolio-desc-text'>" + x.description + "<span>&nbsp;</span>" +
						"<h4>";
		x.tags.forEach(function(tag){
				html += "<span class='label label-custom'>" + tag + "</span> ";
		});	// end x.tags.forEach()

		html += "</h4></div></div>";
		console.log(html);
		$("#portfolio").append(html);


	} // end for loop
	$("#portfolio").append("<!--<a href='#'><button type='button' class='btn btn-custom center-block'>See More ></button></a>-->");

	//});	//end getJSON


	};  //end buildPortfolio()

	//Click handlers
	$(".nav>li").on("click",function(){
		$('#nav-menu').collapse('toggle');
	});

	setMinSectHeight();
	buildPortfolio();

});
