import {Injectable} from 'angular2/angular2'

import {Course} from './course.model'

@Injectable()
export class CourseService {
  private _courses:Course[] = [
    {
      "_id": "2310283013810238",
      "title": "طراحی سیستم های شئ گرا",
      "campus": "مهندسی کامپیوتر",
      "code": "۴۰۴۸۴",
      "professor": {
        "name": "سبحان فروغی",
        "imageUrl": "/src/app/components/assets/images/avatar-1-big.jpg",
        "email": "sobhanforoughi@gmail.com"
      },
      "resources": [
        {
          "title": "ARLOW, J., and NEUSTADT, I., UML 2 and the Unified Process, 2nd ed., Addison-Wesley, 2005.",
          "description": "منبع اصلی درس",
          "url": ""
        },
        {
          "title": "GAMMA, E., HELM, R., JOHNSON, R., and VLISSIDES, J., Design Patterns: Elements of Reusable Object-Oriented Software. Addison Wesley, 1995.",
          "description": "در قسمت آخر درس مورد استفاده قرار می گیرد",
          "url": ""
        }
      ],
      "director": {
        "name": "مجتبی ورمزیار",
        "email": "mahmoud1468@gmail.com",
        "imageUrl": "/src/app/components/assets/images/avatar-1-big.jpg"
      },
      "assistants": [
        {
          "name": "Mohammad Asghari",
          "email": "mhm.asghari@gmail.com",
          "imageUrl": "/src/app/components/assets/images/avatar-1-big.jpg"
        }
      ],
      "semester": "۹۵-۹۴",
      "time": "شنبه ها و دوشنبه ها ساعت ۷:۳۰ تا ۹:۰۰",
      "class": "دانشکده کامپیوتر ۷۲۴",
      "scores": [
        {
          "title": "میان ترم اول",
          "percent": "15%",
        },
        {
          "title": "میان ترم دوم",
          "percent": "15%",
        },
        {
          "title": "پایان ترم",
          "percent": "20%"
        },
        {
          "title": "پروژه عملی",
          "percent": "50%"
        },
        {
          "title": "حضور در کلاس",
          "percent": "0%"
        }
      ],
      "topics": [
        {
          "title": "Introducing UML and UP",
          "subjects": [
            {
              "title": "What is UML"
            },
            {
              "title": "What is Unified Process"
            }
          ]
        },
        {
          "title": "Requirement",
          "subjects": [
            {
              "title": "The requirement workflow"
            },
            {
              "title": "Use case modeling",
            },
            {
              "title": "Advance use case modeling",
            },
          ]
        },
        {
          "title": "Analyze",
          "subjects": [
            {
              "title": "The analysis workflow",
            },
            {
              "title": "Object and classes",
            },
            {
              "title": "Finding analysis class"
            },
            {
              "title": "Relationship"
            },
            {
              "title": "Inheritance and polymorphism"
            },

          ]
        }
      ],
      "exams": [
        {
          "title": "میان ترم اول",
          "datetime": "2015-12-06",
          "type": "میان ترم"
        }
      ],
      "assignments": [
        {
          "title": "فاز نیم پروژه",
          "type": "پروژه",
          "startDate": "2015-09-10",
          "softDeadLine": "2015-10-01",
          "hardDeadLine": "2015-10-10",
          "lastUpdate": "2015-10-20",
          "descriptionUrl": "/src/app/components/assets/documents/OOD-Project-941.pdf"
        },
        {
          "title": "فاز اول پروژه",
          "type": "پروژه",
          "startDate": "2015-10-21",
          "softDeadLine": "2015-11-01",
          "hardDeadLine": "2015-11-10",
          "lastUpdate": "2015-11-15",
          "descriptionUrl": "http://ood.ce.sharif.edu/%D9%85%D8%B3%D8%AA%D9%86%D8%AF%D8%A7%D8%AA_%D8%AF%D8%B1%D8%B3/%D9%BE%D8%B1%D9%88%DA%98%D9%87/%D8%B5%D9%88%D8%B1%D8%AA_%D9%81%D8%A7%D8%B2_%DB%8C%DA%A9",
        },
        {
          "title": "تمرین الگوهای برنامه نویسی",
          "type": "تمرین",
          "startDate": "2015-10-25",
          "softDeadLine": "2015-10-30",
          "hardDeadLine": "2015-10-30",
          "lastUpdate": "2015-10-30",
          "descriptionUrl": "#"
        }
      ],
      "projects": []
    },
    {
      "_id": "09238208432084302",
      "title": "آز مهندسی نرم افزار",
      "campus": "مهندسی کامپیوتر",
      "code": "۴۰۴۸۱",
      "professor": {
        "name": "دکتر رامسین",
        "imageUrl": "/src/app/components/assets/images/avatar-1-big.jpg",
        "email": "sobhanforoughi@gmail.com"
      },
      "resources": [
        {
          "title": "GAMMA, E., HELM, R., JOHNSON, R., and VLISSIDES, J., Design Patterns: Elements of Reusable Object-Oriented Software. Addison Wesley, 1995.",
          "description": "در قسمت آخر درس مورد استفاده قرار می گیرد",
          "url": ""
        }
      ],
      "director": {
        "name": "علی علوی",
        "email": "mahmoud1468@gmail.com",
        "imageUrl": "/src/app/components/assets/images/avatar-1-big.jpg"
      },
      "assistants": [
        {
          "name": "Mohammad Asghari",
          "email": "mhm.asghari@gmail.com",
          "imageUrl": "/src/app/components/assets/images/avatar-1-big.jpg"
        }
      ],
      "semester": "۹۵-۹۴",
      "time": "شنبه ها و دوشنبه ها ساعت ۷:۳۰ تا ۹:۰۰",
      "class": "دانشکده کامپیوتر ۷۲۴",
      "scores": [
        {
          "title": "میان ترم اول",
          "percent": "15%",
        },
        {
          "title": "میان ترم دوم",
          "percent": "15%",
        },
        {
          "title": "پایان ترم",
          "percent": "20%"
        },
        {
          "title": "پروژه عملی",
          "percent": "50%"
        },
        {
          "title": "حضور در کلاس",
          "percent": "10%"
        }
      ],
      "topics": [
        {
          "title": "Introducing UML and UP",
          "subjects": [
            {
              "title": "What is UML"
            },
            {
              "title": "What is Unified Process"
            }
          ]
        },
        {
          "title": "Requirement",
          "subjects": [
            {
              "title": "The requirement workflow"
            },
            {
              "title": "Use case modeling",
            },
            {
              "title": "Advance use case modeling",
            },
          ]
        }
      ],
      "exams": [
        {
          "title": "میان ترم اول",
          "datetime": "2015-12-06",
          "type": "میان ترم"
        }
      ]
      ,
      "assignments": [
        {
          "title": "تمرین الگوهای برنامه نویسی",
          "type": "تمرین",
          "startDate": "2015-10-25",
          "softDeadLine": "2015-10-30",
          "hardDeadLine": "2015-10-30",
          "lastUpdate": "2015-10-30",
          "descriptionUrl": "#"
        }
      ]
      ,
      "projects": []
    }
  ]

  findCourseById(id:string):Course {

    try
    {
      for(var i in this._courses)
      {
        var course:Course = this._courses[i];
        if(course._id == id)
        {
          return course;
        }
      }
    }
    catch(e)
    {
      throw new Error(` هنگام دریافت اطلاعات درس ${id} خطای نامشخص رخ داده است.`)
    }
    return null;

  }

}
