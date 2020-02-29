# anchorage-deploy

## What is this ?
Anchorage lets you deploy your application to helm container instance. It is meant to be a central place to store all your configs and data.

### Architecture 

![alt text][architecture]

[architecture]: https://raw.githubusercontent.com/huskywhale/anchorage-deploy/master/wiki/architecture.png "architecture"


### Onboarding apps

Adding new apps to Anchorage:

![alt text][onboarding]

[onboarding]: https://raw.githubusercontent.com/huskywhale/anchorage-deploy/master/wiki/onboarding.png "onboarding"

### Assumption for MVP

See the red stuff on onboarding diagram, need to do more research

Grey means MVP we only do bare min

### Internal Architecture
1. Apollo will provide read me acess
2. Express side will let you write things to postgress 
3. Storing of helm charts and docker build will happen on our File System (if this app is installed by an SRE in their ENV)

### Todo
1. Create a function that lets you clone a repo
2. Create a function that lets you create a yaml and store in FS for a file ( figure out a way to do that for a proj[FileName + whatever you wanna use])
3. When you are doing 1,2 you need to allow the VUe app to read all the things happening in the FS layer
4. we are using Worker Threads for 1,2 so, 3 will need to work with that
5. Learn how to create a helm chart ( charts are used to deploy things in a helm env)
6. People will want to use encryption keys ( encrypt with some hash for now)
7. Connect to kubernetes cluster ( for now lets learn to connect to a local k8 cluster- minikube )

### How to Run ?
<ol>
<li>npm i</li>
<li>npm run start for dev</li>
</ol>

### What does it use ?
Vue 2 for FE
Node/Express.js for Backend
Hapi.js/Joi for validation
todo: add postgress