# my-b2b-lookbook

This lookbook requires a 4 digit login code to access the different looks of spring 2024.
You will be provided with the passcode in an email together with the relevant links and comments
about the project.

# Structure

react.js based web application with a numeric code based login. Once you have inserted
a code in the correct format, an azure function authenticates the code and if login is
successful you will be redirected to the home page or you will be alerted of a failed login.

The app is deployed with Vercel in address https://my-b2b-lookbook-awqp4bt6u-emmatus-projects.vercel.app/
and it seems that the alert on the page shows undefined which would be something I'd need to look into
for version 2.0.

# Restrictions and Improvements

Unfortunately due to time constraints I was not able to add all the required features and techologies
such as Terraform. Additionally I would have liked to add the images and text/excel files into
Azure as well and fetch them from there but that will have to be done in the next version. The
actual lookbook page is unfinished in terms of image arrangement and metadata for the products.
To challenge myself I started with the features that I had less experience in to be out of my comfort zone.

I ran into various technical challenges that took more of my time than I would have liked but I am pleased
I was able to resolve the problems I ran into. My initial version was created with Next.js but possibly due
to a faulty directory structure I was unable to authenticate the login. Additionally, I ran into cors challenges
and github authentication issues so it has definitely been a very rewarding coding challenge.
