# Single Page Apps with Grails And Vue.js


## Folders info
  - build/  - war file for tomcat
  - client/ - client
  - server/ - grails rest api


##To launch the Grails application, run the following command:
  - gradlew server:bootRun
  - gradlew client:start
  
  
## WAR generated at build. It combines the server and client projects.
  - gradlew assembleServerAndClient

### Production Tomcat url
  - http://localhost:8080/server-1/

### Development url
  - http://localhost:3000 - vue app
  - http://localhost:8080 - grails rest api


