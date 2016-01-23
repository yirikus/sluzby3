#sluzby 3.0
Web Appliaction for overtime planning for hospital employees. It is a port from previous two versions which were written as desktop Swing application.

##Required features
- single user (one user obtains overtime preferences from employees and creates full shedule in this webapp)
- semi-automatic shedule creation
  -best effort algorithm fills days that were not prefered by any employee
  -distribution of days should be balanced within one month(least amount of weekend days, overtime days should be as far as possible, never right after previous day)
  -user can make manual adjustments
- export to printable document
- persistent employee management
- There are two group of employees (junior and senior, as one senior and one junior employee is required to serve together on one day)
- basic statistics
- backup and view of past shedules


##Used technologies
- Spring
- Maven
- Angular 2.0
- bootstrap
- finished app is expected to run on latest JBoss server


