
var bio = {
	"welcomeMessage" : "Hello.",
	"name" : "Tim Strickland",
	"role" : "Front End Web Developer",
	"contacts" : {
		"email" : "timjstrickland@gmail.com", 
		"mobile" : "208.640.0320",
		"twitter" : "TimJKStrickland",
		"github" : "timjkstrickland",
		"location" : "Alameda, CA"
	},
	"biopic" : "./images/fry.jpg",
	"skills" : [
	"HTML5", "CSS", "jQuery", "Videography", "Adobe Creative Suite"
	],
	"display" : function(){
		var formattedName = HTMLheaderName.replace("%data%", bio.name)
		$("#header").append(formattedName);
		var formattedRole = HTMLheaderRole.replace("%data%", "Front End Web Developer")
		$("#header").append(formattedRole);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
		var formattedTwit = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedTwit);
		$("#footerContacts").append(formattedTwit);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGithub);
		$("#footerContacts").append(formattedGithub);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location); 
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedLocation);
		var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedwelcomeMessage);	
		var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedbioPic);
		// creates new div
		$('#header').append(HTMLskillsStart);
		for(skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
	    $("#skills").append(formattedSkill);
	    }
	}
};


var work = {
	"jobs" : [
	{
		"employer" : "Woodruff-Sawyer & Co.",
		"title" : "Marketing Assistant",
		"location" : "San Francisco, CA",
		"dates" : "October 2015 - Present",
		"description" : "Lorem Ipsum"
	}, {
		"employer" : "Woodruff-Sawyer & Co.",
		"title" : "Document Imaging Assistant",
		"location": "San Francisco, CA",
		"dates" : "June 2014 - October 2015",
		"description" : "Lorem Ipsum"
	}
	],
		"display" : function(){
	    for (job in work.jobs) {
	    	// creates new div
	    	$('#workExperience').append(HTMLworkStart);
		    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		    var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
		    $(".work-entry:last").append(formattedEmployerTitle);
	    }
	}
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
	],
	"display" : function(){
		for(project in projects.projects){
			// creates new div
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
			if(projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images) {
			var formattedImage= HTMLprojectImage.replace("%data", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
			}
		}
	}
	}

};
var education = {
	"schools": [
	{
		"name" : "University of Oregon",
		"location" : "Eugene, OR",
		"majors" : "English",
		"degree" : "Bachelor of Arts",
		"minor" : "Creative Writing",
		"dates" : 2012
	},
	{
		"name" : "North Idaho College",
		"location" : "Coeur d'Alene, ID",
		"majors" : "General Studies",
		"degree" : "Associate Degree",
		"dates" : 2009
	}
	],
	"onlineCourses" : [
		{
		"title" : "Front End Web Developer Nanodegree",
		"school" : "Udacity",
		"date" : 2015,
		"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
	{
		"title" : "WordPress Essential Training",
		"school" : "Lynda.com",
		"date" : 2015,
		"url" : "http://www.lynda.com/WordPress-tutorials/WordPresscom-Essential-Training/141506-2.html"
	}
	],
	"display" : function(){
		for (school in education.schools){
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			$(".education-entry:last").append(formattedName);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedDegree);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);
			var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedMajors);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);
		}
		$("#education").append(HTMLonlineClasses);
		for(onlineCourse in education.onlineCourses){
		var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		$("#education").append(formattedonlineTitle);
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		$("#education").append(formattedonlineSchool);
		var formattedonlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
		$("#education").append(formattedonlineDate);
		var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		$("#education").append(formattedonlineURL);
		}
	}
};
// invoked to display bio items
bio.display();
// invoked to display education items
education.display();
// invoked to display work items
work.display();
// invoked to display projects items
projects.display();
// internationalize name
function inName(){
      var newName = bio.name;
      var names = newName.trim().split(" ");
       names[1] = names[1].toUpperCase();
       names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
        newName = names[0] + " " + names[1];
        return newName;
    };
$("#main").append(internationalizeButton);


// Puts the map on the page
$("#mapDiv").append(googleMap);