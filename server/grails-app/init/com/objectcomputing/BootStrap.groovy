package com.objectcomputing

class BootStrap {

    def init = { servletContext ->
        println "Create model Welcome"
        //def welcome1 = new Welcome(title: "Welcome to Grails!", description: "Get feedback and share your experience with other Grails developers in the community").save flush:true

        User.withTransaction {
            Welcome welcome = new Welcome(title: "Welcome to Grails!", description: "Get feedback and share your experience with other Grails developers in the community").save()
            println "Creating user..."
            def role1 = new Role(authority: "ROLE_USER").save flush:true
            def user1 = new User(username: "mason", password: "12345678").save flush:true
            UserRole.create(user1, role1, true)
        }
    }
    def destroy = {
    }
}
