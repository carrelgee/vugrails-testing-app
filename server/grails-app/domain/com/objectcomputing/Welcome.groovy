package com.objectcomputing

import grails.plugin.springsecurity.annotation.Secured
import grails.rest.Resource

//@Secured('ROLE_USER')
@Resource(uri = "/api/welcome")
class Welcome {

    String title
    String description

    static constraints = {
        title blank: false
        description nullable: true
    }
}

