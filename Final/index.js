document.addEventListener("DOMContentLoaded", function () 
{

    //this is the handler for the submit button
    //when clicked, the page will show links to sites helpful to the user
    document.getElementById("Submit").addEventListener('click', function () 
    {
        //if the user doesnt mind discussion, provide link to programming reddit page
        if (document.getElementById("Discussion_yes").checked) 
        {
            var resource_area = document.getElementById("Resources");
            var innerDiv = document.createElement('div');
            innerDiv.innerHTML = "<br>"
            innerDiv.innerHTML += 'Visit the r/learnprogramming subreddit for discussion and questions related to programming in any language. ';

            var aTag = document.createElement('a');
            aTag.setAttribute('href',"https://www.reddit.com/r/learnprogramming/");
            aTag.innerText = "\n  r/learnprogramming";
            innerDiv.appendChild(aTag);
            
            resource_area.appendChild(innerDiv);
        }

        if (document.getElementById("No_programming").checked) 
        {
            //if the user has never seen programming before, show them the intro video
            document.getElementById("Start_here").style.display = "block";

            var iframe = document.createElement('iframe');
            iframe.src = 'https://www.youtube.com/embed/FCMxA3m_Imc';
            iframe.width = '560';
            iframe.height = '315';

            var bottom = document.getElementById('Start_here');
            bottom.appendChild(iframe);
        }
        else if (document.getElementById("Some_programming").checked) 
        {
            document.getElementById("Start_here").style.display = "none";
        }

        if (document.getElementById("Web").checked)
        {
            webChosen();
        }

        //if the user would like to earn a certificate
        if (document.getElementById("Certificate_check").checked)
        {
            var resource_area = document.getElementById("Resources");
            var innerDiv = document.createElement('div');
            innerDiv.innerHTML = "<br>"
            innerDiv.innerHTML += 'A certification can help you stand out from your peers, and provide you with an employment advantage. This page will help you understand when a certification in web design could be highly valuable, or a boost to your resume.';

            var aTag = document.createElement('a');
            aTag.setAttribute('href',"https://www.2440media.com/blog/best-web-design-certifications");
            aTag.innerText = "\n The Best Web Design Certifications";
            innerDiv.appendChild(aTag);
            
            resource_area.appendChild(innerDiv);
        }

        //if the user would like to take a class
        if (document.getElementById("Class_check").checked)
        {
            var resource_area = document.getElementById("Resources");
            var innerDiv = document.createElement('div');
            innerDiv.innerHTML = "<br>"
            innerDiv.innerHTML += 'Coursera has compiled a list of over 500 programs to aid your web development learning experience. Utilise the filters available on the platform to sort courses based on language, difficulty level, and skills. You can choose among content by academic and industrial institutions, which include both practical and theoretical classes. ';

            var aTag = document.createElement('a');
            aTag.setAttribute('href',"https://www.coursera.org/courses?query=web+development&ranMID=40328&ranEAID=vedj0cWlu2Y&ranSiteID=vedj0cWlu2Y-V5aLKAcE8S5iEYQv1WnGfg&siteID=vedj0cWlu2Y-V5aLKAcE8S5iEYQv1WnGfg&utm_content=10&utm_medium=partners&utm_source=linkshare&utm_campaign=vedj0cWlu2Y");
            aTag.innerText = "\n Free Web Development Courses(Coursera)";
            innerDiv.appendChild(aTag);
            
            resource_area.appendChild(innerDiv);
        }

        document.getElementById("Submit").disabled = true;
    });
});

//this function will show web programming content based on the users responses
function webChosen() 
{
    document.getElementById("web_programming").style.display = "block";
    
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/5YDVJaItmaY';
    iframe.width = '560';
    iframe.height = '315';

    var video_area = document.getElementById('Web_video');
    video_area.appendChild(iframe);

    if (document.getElementById("Length1").checked)  //longer videos preferred
    {
        if (document.getElementById("Learn_style1").checked)
        {
            
            var innerDiv = document.createElement('div');
            innerDiv.innerHTML = "<br>";
            innerDiv.innerHTML += 'Here is a full web development course';
            video_area.appendChild(innerDiv);

            var iframe = document.createElement('iframe');
            iframe.src = 'https://www.youtube.com/embed/Q33KBiDriJY';
            iframe.width = '560';
            iframe.height = '315';

            video_area.appendChild(iframe);
        }
        else if (document.getElementById("Learn_style2").checked)
        {
            var innerDiv = document.createElement('div');
            innerDiv.innerHTML = "<br>";
            innerDiv.innerHTML += 'Try this HTML tutorial ';

            var aTag = document.createElement('a');
            aTag.setAttribute('href',"https://htmldog.com/guides/html/");
            aTag.innerText = "\n  HTML 5 tutorial";
            innerDiv.appendChild(aTag);
            
            document.getElementById("web_programming").appendChild(innerDiv);

        }
        else if (document.getElementById("Learn_style3").checked)
        {
            var innerDiv = document.createElement('div');
            innerDiv.innerHTML = "<br>";
            innerDiv.innerHTML += 'Try this tutorial ';

            var aTag = document.createElement('a');
            aTag.setAttribute('href',"https://careerfoundry.com/en/tutorials/web-development-for-beginners/introduction-to-web-development/");
            aTag.innerText = "  Career Foundry web development material";
            innerDiv.appendChild(aTag);
            
            document.getElementById("web_programming").appendChild(innerDiv);
        }
    }
    else if (document.getElementById("Length2").checked) //shorter videos preferred
    {
        if (document.getElementById("Learn_style1").checked)
        {
            var innerDiv = document.createElement('div');
            innerDiv.innerHTML = "<br>";
            innerDiv.innerHTML += 'This youtube channel has a playlist of video tutorials for beginners! ';

            var aTag = document.createElement('a');
            aTag.setAttribute('href','https://www.youtube.com/watch?v=f0No0ZpZC04&list=PL6cactdCCnTK662FLIdwmKo46cIV2NVig');
            aTag.innerText = "\n Udemy Tech Web programming tutorials";
            innerDiv.appendChild(aTag);
            
            document.getElementById("web_programming").appendChild(innerDiv);
        }
        else if (document.getElementById("Learn_style2").checked)
        {
            var innerDiv = document.createElement('div');
            innerDiv.innerHTML = "<br>";
            innerDiv.innerHTML += "Mozilla's Getting started with the Web is a concise series introducing you to the practicalities of web development. You'll set up the tools you need to construct a simple webpage and publish your own simple code.";

            var aTag = document.createElement('a');
            aTag.setAttribute('href',"https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web");
            aTag.innerText = "\n Getting Started";
            innerDiv.appendChild(aTag);
            
            document.getElementById("web_programming").appendChild(innerDiv);

        }
        else if (document.getElementById("Learn_style3").checked)
        {
            var innerDiv = document.createElement('div');
            innerDiv.innerHTML = "<br>";
            innerDiv.innerHTML += 'This youtube channel has a playlist of video tutorials for beginners! ';

            var aTag = document.createElement('a');
            aTag.setAttribute('href','https://www.youtube.com/watch?v=f0No0ZpZC04&list=PL6cactdCCnTK662FLIdwmKo46cIV2NVig');
            aTag.innerText = "\n Udemy Tech Web programming tutorials";
            innerDiv.appendChild(aTag);
            
            document.getElementById("web_programming").appendChild(innerDiv);
            
            var innerDiv = document.createElement('div');
            innerDiv.innerHTML = "<br>";
            innerDiv.innerHTML += "Mozilla's Getting started with the Web is a concise series introducing you to the practicalities of web development. You'll set up the tools you need to construct a simple webpage and publish your own simple code.";

            var aTag = document.createElement('a');
            aTag.setAttribute('href',"https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web");
            aTag.innerText = "\n Getting Started";
            innerDiv.appendChild(aTag);
            
            document.getElementById("web_programming").appendChild(innerDiv);
        }
    }
    else if (document.getElementById("Length3").checked)
    {
        if (document.getElementById("Learn_style1").checked)
        {
            var innerDiv = document.createElement('div');
            innerDiv.innerHTML = "<br>";
            innerDiv.innerHTML += "Codecademy is an online interactive platform that offers free coding classes in 12 different programming languages ";

            var aTag = document.createElement('a');
            aTag.setAttribute('href',"https://www.codecademy.com/");
            aTag.innerText = "\n Code Academy tutorials";
            innerDiv.appendChild(aTag);
            
            document.getElementById("web_programming").appendChild(innerDiv);
        }
        else if (document.getElementById("Learn_style2").checked)
        {
            var innerDiv = document.createElement('div');
            innerDiv.innerHTML = "<br>";
            innerDiv.innerHTML += "Mozilla's Getting started with the Web is a concise series introducing you to the practicalities of web development. You'll set up the tools you need to construct a simple webpage and publish your own simple code.";

            var aTag = document.createElement('a');
            aTag.setAttribute('href',"https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web");
            aTag.innerText = "\n Getting Started";
            innerDiv.appendChild(aTag);
            
            document.getElementById("web_programming").appendChild(innerDiv);

        }
        else if (document.getElementById("Learn_style3").checked)
        {
            video_area.innerHTML += "<br>";
            var innerDiv = document.createElement('div');
            innerDiv.innerHTML = "<br>";
            innerDiv.innerHTML += 'This youtube channel has the perfect list of tutorials for beginners!';
            video_area.appendChild(innerDiv);

            var iframe = document.createElement('iframe');
            iframe.src = 'https://www.youtube.com/embed/3JluqTojuME';
            iframe.width = '560';
            iframe.height = '315';

            video_area.appendChild(iframe);
        }
    }
}

