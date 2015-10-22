
var bio = {
	"welcomeMessage" : "Hi",
	"name" : "Tim JK",
	"role" : "Front End Web Developer",
	"contacts" : {
		"email" : "timjstrickland@gmail.com", 
		"mobile" : "208.640.0320",
		"twitter" : "StricklyDesign",
		"github" : "timjkstrickland",
		"location" : "San Francisco adjacent"
	},
	"bioPic" : "images/fry.jpg",
	"skills" : [
	"HTML5", "CSS", "jQuery", "Photography", "Videography", "Adobe Creative Suite"
	],
};


var work = {
	"jobs" : [
	{
		"employer" : "Woodruff-Sawyer & Co.",
		"title" : "Marketing Assistant",
		"location" : "San Francisco",
		"dates" : "October 2015 - Present",
		"description" : "Lorem Ipsum"
	}, {
		"employer" : "Woodruff-Sawyer & Co.",
		"title" : "Document Imaging Assistant",
		"dates" : "June 2014 - October 2015",
		"description" : "Lorem Ipsum"
	}
	]
};
var projects = {
	"projects" : [
	{
		"title" : "Lorem",
		"dates" : "From this to then",
		"description" : "Lorem Ipsum",
		"images" : []
	},
	{
		"title" : "Lorem",
		"dates" : "From this to then",
		"description" : "Lorem Ipsum",
		"images" : []
	}
	]
};
var education = {
	"schools" : [
	{
		"name" : "University of Oregon",
		"city" : "Eugene, OR",
		"major" : "English",
		"minor" : "Creative Writing",
		"Graduation Year" : "2012"
	},
	{
		"name" : "North Idaho College",
		"city" : "Coeur d'Alene, ID",
		"major" : "General Studies",
		"minor" : "N/A",
		"Graduation Year" : "2009"
	}
	],
	"onlineCourse" : {
		"name" : "Udacity",
		"city" : "N/A",
		"major" : "Front End Web Developer Nanodegree",
		"minor" : "N/A",
		"Graduation Year" : "2015",
		"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}
};
var displayWork = function(){
for(skill in bio.skills) {
      $('#header').append(HTMLskillsStart);
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").append(formattedSkill);
    }

    for (job in work.jobs) {
      $('#workExperience').append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
      $(".work-entry:last").append(formattedEmployerTitle);
    }
};
displayWork();
