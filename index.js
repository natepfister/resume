
$(document).ready(function(){

    $('#collapse').find('h2').click(function(){
        $(this).next().slideToggle();
        $(".collapse-content").not($(this).next()).slideUp();
    })

    $.getJSON('https://raw.githubusercontent.com/natepfister/ajax/master/resume.json', function(json) {        
        displayFromResume(json);
    });


function displayFromResume(resume){
        $('h1').html(resume.contactInfo.name);
        $('#contact').html('<div class="flexItem"><ul><li>' + resume.contactInfo.phone + '</li><li>' + resume.contactInfo.email + '</li></ul></div>');

    qualStr = '<div class="flexItem"><ul>';
        for (var qual of resume.qualifications){
            qualStr += '<li>' + qual + '</li>'
        }
        qualStr += '</ul></div>';
        $('#qualifications').html(qualStr);

    accompStr = ''
        for (var history of resume.accomplishments){
            accompStr += '<div class="flexItem"><h3>' + history.name + '</h3>';
                for (var part of history.accomplishment){
                    accompStr += '<p>' + part + '</p>'

                }
                accompStr += '</div>';
        }
        $('#accomplishments').html(accompStr);


    empHistoryStr = ""
        
        for (var job of resume.employmentHistory){
            employer = '<div class="flexItem"><h3>' + job.employer + '</h3><p>' + job.duration
            + '</p><p>' + job.title + '</p><p>' + job.description + '</p>'; 
            
            if (job.supportedApps != null){
                employer += '<ul>' 
                    for (var app of job.supportedApps){
                            employer += '<li>' + app + '</li>';
                        }

                employer += '</ul>';
                }
                employer += '<p>' + job.responsibilityDescription + '</p>' + '<ul>';  
                    for (var resp of job.responsibilities){
                            employer += '<li>' + resp + '</li>';
                    }
            
                    employer += '</ul></div>';  
            
            empHistoryStr += employer
        }
        $('#employmentHistory').html(empHistoryStr);

    eduStr = ""
        for (var school of resume.education){
            edu = '<div class="flexItem"><h3>' + school.name + '</h3><p>' + school.degree + '</p>' + '<ul><li>' + school.program + '</li><li>' + school.date + '</li><li>' + school.status + '</li></ul></div>';

            eduStr += edu
            }
        $('#education').html(eduStr);

    commStr = ""
        for (var serviceOpp of resume.communityInvolvement){
            opp = '<div class="flexItem"><h3>' + serviceOpp.organization + '</h3><p>'+  serviceOpp.type + '</p><p>' + serviceOpp.duration+ '</p><p>' + serviceOpp.title + '</p><p>' + serviceOpp.description + '</p><ul>';
                for (var detail of serviceOpp.details){
                    opp += '<li>' + detail + '</li>';
                }
            commStr += '</ul></div>'
        commStr += opp
        }
        $('#community').html(commStr);

}

});

