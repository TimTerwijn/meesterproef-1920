# Meesterproef @cmda-minor-web 1920

## Design rationale

### Debriefing
I am going to build a student portal for the organization Goed Georganiseerd Onderwijs. They are an organization of the HVA that works with students to improve the school.

The GGO has already researched a bit what they and their users want for this student portal application. The students of the HVA would like to have the following information and features inside of the application:

#### Information
##### Primary information
* Schedule
* Course info
* Grades
* Education Progress
* Urgent statements

##### Secondary information
* Statements
* Team sites
* Teacher contact information
* Events

##### Tertiary information
* link to A-Z list
* link to Brightspace
* link to SIS
* Link to education manual
* Link to library
* Link to education page
* Link to HvA addresses
* Link to HvA organization.

##### Other information
* Waar moet mail komen?
* Waar moet news komen?

#### Features
* All information must be available on one location.
* MijnHvA.nl and MijnHvApp must contain the same information and must look and feel the same as the new app.
* The portal looks and apps must be customizable by a user.
* Students wants to receive push notifications when changes occur in their schedule, when they receive a new grade and when a course has new information.
* Course overview must have a link to brightspace.
* All customizable options and settings must be visible on one page.
* Customizable and personal news.
* Customizable push notifications, both layout and the content.

#### Final notes
* The app must be actual, real time, personal and school related.
* Students wants to know the difference between news en Statements.
* Absence of teachers is only useful when the app is real time.
* Schedule needs to have holidays and deadlines.

## Product biography (Think, Make, Check)
### Think
We had a meeting with the guys from GGO (Goed Georganiseerd Onderwijs), they told us what they want a student portal app with the features I described above in the debriefing.

They said it is important to figure out how to design the web page with all the features in mind. So the first thing I am going to do for this project is to create a wireframe I can present next Monday. I do not like endless scrolling inside of an application, and I also do not want to use a classic menu for this application thats why I was inspired to make something like a pocket knive. It's compact, easy to use and it has a lot of tools.

### Make
As you can see in figure one, my prototype is based on a pocket knife. You can use one of the buttons on the left part of the sceen to open a tab on the right part of the screen. It is possible to read your Schedule, Grades or Education Progress with the bigger buttons in the top left. The smaller buttons in the bottom left are links to other HvA tools.  

And of course as you can see in figure two, it is also possible to visit the site on your mobile phone. The right part of the screen dissapears and when you use one of the buttons you eigther open the Schedule, Grades or Education Progress page or when you use the smaller buttons, you are send to the other HvA tools.  

![Desktop prototype](docs/img/desktop-prototype1.PNG "Desktop prototype")  
Figure 1: My first desktop prototype.  

![Mobile prototype](docs/img/mobile-prototype1.PNG "Desktop prototype")  
Figure 2: My first mobile prototype.  

### Check
So today we had the first demo, I presented my work to the product owners and a lot of students. I gained a lot of usefull information what they would like in the app. First of all it is importand to see your notivications when you visit the page. The students also wants their unread notivations on top of the list, bolt and maybe some bulbs. There must also be a diffrence between urgend and normal notivications. Urgent notivications are notivications like last minute schedule changes.  

Students also want a pupup when they are leaving the site trough a link for the first time. In this pupup they want information of what they are about to visit. If they procede the message is never shown again. You can see this information again when you press the I next to the link. If you do not procede, the popup is shown again when you press the link. After you procede a page is opened in a new tab. It is important that an user does not have to log in again in the opened webpage.

Students also like to have access to mail, but it is not so important. It is okay to link to the webmail of the HvA.  

### Think
As I said above I need to make some changes to my prototype. First of all, when a user visit the main paige, he sees his notivications. I would also like to add some breadcrumbs where users can see where they are on the website and it is posible to go back to the main page quickly. Unreaded notivication are bolt and on top of the page, and urgent notivications have a red exclamation mark.

When an user clicks one of the buttons for the first time he gets a pupup with the information of that functionality when he accepts the functionality is shown, else he returns to the last screen. If an functionality is accepted the popup is never shown again unless you press the I next to a functionality button on the left side of the screen.

And I also want to add the mail to the less important buttons.

Some time later I received a mail from Sevval with extra feedback form the students. They gave me the following feedback:
* They want a swipe function to split the homepage of the mobile version in two parts.
* The students want to customize their page so they can decide what is importand and whats not for them self.
* News and Notifications need some icon with a number to show how much unreaded things their are.
* One student wanted a name, email and phone number of the teacher in schegual. But I think Name is enough because they can find the teacher inside contacts. 

### Make
As you can see the figures below, I made some changes and added some pages. Now you can see the notivications, news, result and schedule page. I also added some icons and a gray background with a coloured icon to the selected page. And as you can see in figure 3, 4 and 5 the newest item is on top except for unread items, those are higer and the urgent messages are on top of that.

You can also see the i in each tool button for information and a number if there are unread items inside a tool.

![Desktop prototype](docs/img/prototype2-home.PNG "Desktop prototype")  
Figure 3: The home and notivcations page of the second prototype.

![Desktop prototype](docs/img/prototype2-nieuws.PNG "Desktop prototype")  
Figure 4: The news page of the second prototype.

![Desktop prototype](docs/img/prototype2-results.PNG "Desktop prototype")  
Figure 5: The result page of the second prototype.  

![Desktop prototype](docs/img/prototype2-rooster.PNG "Desktop prototype")  
Figure 6: The schedule page of the second prototype.    

![Mobile prototype](docs/img/mobile-prototype1.PNG "Desktop prototype")  
Figure 7: The second mobile prototype.  

### Check
Today I splitted my demo in three parts. First of all I wanted to ask the student some questions about their wishes from last week. Secondly I wanted to let a student test my app by him self because Koop gave me feedback that I should not present my prototypes. And lastly I presented the things the student had not tested of my prototype.

I wanted to know why the students want their teachers information inside their schedule because there is a teacher contact button. But they told me that sometimes the information is outdated and they would like to see the teacher information as quickly as possible. 

Also they wanted the app to be customizable. They want to chose what tool is important for them and what is not. But it does not have any priority. News must be spitted into 4 categories: "opleiding (oc), vakeltijd stud (fmr) , hva breed (cvbr) and medezegingscahap".

On the app side it is hard to know that there is a swipe function in the menu thats why I need some kind of indicator. Like bubbles thats instagram uses.

Lastly the info button must become red if someone has seen its information. And they should only open when someone press them, not when you open the tool for the first time.

### Think

## Reflection
### Week 2
#### Code
I talked with Janno about my issue that I would not like to use a server and a real time application. Because I think the product owner does not need one for his requirements. Also I think I can learn the most as an ICT student if I fucus on the UX part of this project. Janno told me that I could focus on the WAFS, BT and PWA courses by using a client side app with JSON with three layers and faster loading. But I have to ask Koop and Joost first to be sure if it is okay. He also mentioned that it would be cool to make use of progressive disclosure, I told him about my pocket knive choices and that I already unintentional made use of it. But I am going definitely reasearch progressive disclosure in a few days.  

#### Design
I talked with Koop about my designs. He told me that it was useless to test the way I am testing now. I should let the students test my work. This is something I am going to do tomorrow by letting the users downloading a PDF. He also told me that the pocketknive type of prototype most of the times is not going to work. However the demo is tomorrow so I have deceided to let my users deceide if they think the prototype is not helpfull. I also asked Koop about the server, but he wanted to make a diffrent meeting for that.
