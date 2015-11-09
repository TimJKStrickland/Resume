
var bio = {
	"welcomeMessage" : "Hello.",
	"name" : "Tim Strickland",
	"role" : "Front End Web Developer",
	"contacts" : {
		"email" : "timjstrickland@gmail.com", 
		"mobile" : "208.640.0320",
		"twitter" : "@timjkstrickland",
		"github" : "timjkstrickland",
		"location" : "Alameda, CA"
	},
	"biopic" : "./images/fry.jpg",
	"skills" : [
		"HTML5", "CSS", "jQuery", "Videography", "Adobe Creative Suite"
	],
	"display" : function(){
		var data ="%data%";
		var $header = $("#header");
		var formattedName = HTMLheaderName.replace(data, bio.name);
		var formattedRole = HTMLheaderRole.replace(data, "Front End Web Developer");
		var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
		var formattedTwit = HTMLtwitter.replace(data, bio.contacts.twitter);
		var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
		var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
		var formattedwelcomeMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
		var formattedbioPic = HTMLbioPic.replace(data, bio.biopic);
		$header.append(formattedName)
			.append(formattedRole)
			.append(formattedwelcomeMessage)
			.append(formattedbioPic);
		
		$("#topContacts").append(formattedMobile)
			.append(formattedEmail)
			.append(formattedTwit)
			.append(formattedGithub)
			.append(formattedLocation);
		$("#footerContacts").append(formattedMobile)
			.append(formattedEmail)
			.append(formattedTwit)
			.append(formattedGithub)
			.append(formattedLocation);
		
		// creates new div
		$header.append(HTMLskillsStart);
		bio.skills.forEach(function(skill) {
			var formattedSkill = HTMLskills.replace(data, skill);
	    	$("#skills").append(formattedSkill);
	    });
	}
};


var work = {
	"jobs" : [{
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
	}],
		"display" : function(){
			var data = '%data%';
	    	work.jobs.forEach(function(job){
	    	// creates new div
		    	$('#workExperience').append(HTMLworkStart);
			    var formattedEmployer = HTMLworkEmployer.replace(data, job.employer);
			    var formattedTitle = HTMLworkTitle.replace(data, job.title);
			    var formattedDates = HTMLworkDates.replace(data, job.dates);
			    var formattedLocation = HTMLworkLocation.replace(data, job.location);
			    var formattedDescription = HTMLworkDescription.replace(data, job.description);
			    $(".work-entry:last").append(formattedEmployer)
			    .append(formattedTitle)
			    .append(formattedDates)
			    .append(formattedLocation)
			    .append(formattedDescription);
	    });
	}
};
var projects = {
	"projects" : [{
		"title" : "Lorem",
		"dates" : "From this to then",
		"description" : "Lorem Ipsum",
		"images" : ["http://placehold.it/600x100"]
	},
	{
		"title" : "Lorem",
		"dates" : "From this to then",
		"description" : "Lorem Ipsum",
		"images" : ["http://placehold.it/600x100"]
	}],

	"display" : function(){
		var data = "%data%";
		projects.projects.forEach(function(project){
			// creates new div
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace(data, project.title);
			var formattedDates = HTMLprojectDates.replace(data, project.dates);
			var formattedDescription = HTMLprojectDescription.replace(data, project.description);
			var formattedImage = HTMLprojectImage.replace(data, project.images);
			$(".project-entry:last").append(formattedTitle)
			.append(formattedDates)
			.append(formattedDescription)
			.append(formattedImage);
		});
	}
};
var education = {
	"schools": [{
		"name" : "University of Oregon",
		"location" : "Eugene, OR",
		"majors" : ["English"],
		"degree" : "Bachelor of Arts",
		"minor" : "Creative Writing",
		"dates" : 2012,
		"url" : "https://uoregon.edu"
	},
	{
		"name" : "North Idaho College",
		"location" : "Coeur d'Alene, ID",
		"majors" : "General Studies",
		"degree" : ["Associate Degree"],
		"dates" : 2009,
		"url" : "https://www.nic.edu"
	}],
	"onlineCourses" : [{
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
	}],

	"display" : function(){
		var data = "%data%";
		education.schools.forEach(function(school){
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace(data, school.name);
			var formattedDegree = HTMLschoolDegree.replace(data, school.degree);
			var formattedLocation = HTMLschoolLocation.replace(data, school.location);
			var formattedMajors = HTMLschoolMajor.replace(data, school.majors);
			var formattedDates = HTMLschoolDates.replace(data, school.dates);
			$(".education-entry:last").append(formattedName)
			.append(formattedDegree)
			.append(formattedLocation)
			.append(formattedMajors)
			.append(formattedDates);
		});
		education.onlineCourses.forEach(function(onlineCourse){
			$(".education").append(HTMLonlineClasses);
			var formattedonlineTitle = HTMLonlineTitle.replace(data, onlineCourse.title);
			var formattedonlineSchool = HTMLonlineSchool.replace(data, onlineCourse.school);
			var formattedonlineDate = HTMLonlineDates.replace(data, onlineCourse.date);
			$(".education-entry:last").append(formattedonlineTitle)
			.append(formattedonlineSchool)
			.append(formattedonlineDate);
		});
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

// Puts the map on the page
$("#mapDiv").append(googleMap);