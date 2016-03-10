import {Injectable} from 'angular2/angular2'

import {Course} from './course.model';
import {ICourse} from './course.interface';

@Injectable()
export class CourseService {

  //private _courses:Course[] = [
  //  {
  //    "id": "2310283013810238",
  //    "title": "طراحی سیستم های شئ گرا",
  //    "campus": "مهندسی کامپیوتر",
  //    "code": "۴۰۴۸۴",
  //    "professor": {
  //      "user": {
  //        "name": "سبحان فروغی",
  //        "imageUrl": "/src/app/components/assets/images/avatar-1-big.jpg",
  //        "email": "sobhanforoughi@gmail.com",
  //        "password": "lksdjlsjf",
  //        "birthday": new Date(1224043200000)
  //      }
  //    },
  //    "resources": [
  //      {
  //        "title": "ARLOW, J., and NEUSTADT, I., UML 2 and the Unified Process, 2nd ed., Addison-Wesley, 2005.",
  //        "description": "منبع اصلی درس",
  //        "url": ""
  //      },
  //      {
  //        "title": "GAMMA, E., HELM, R., JOHNSON, R., and VLISSIDES, J., Design Patterns: Elements of Reusable Object-Oriented Software. Addison Wesley, 1995.",
  //        "description": "در قسمت آخر درس مورد استفاده قرار می گیرد",
  //        "url": ""
  //      }
  //    ],
  //    "chief": {
  //      "user": {
  //        "name": "مجتبی ورمزیار",
  //        "email": "mahmoud1468@gmail.com",
  //        "imageUrl": "/src/app/components/assets/images/avatar-1-big.jpg",
  //        "password": "lsjflaskjflasjf",
  //        "birthday": new Date(1224043200000),
  //      }
  //    },
  //    "assistants": [
  //      {
  //        "user": {
  //          "name": "Mohammad Asghari",
  //          "email": "mhm.asghari@gmail.com",
  //          "imageUrl": "/src/app/components/assets/images/avatar-1-big.jpg",
  //          "password": "lkjlkdjfadf",
  //          "birthday": new Date(1224043200000),
  //        }
  //      }
  //    ],
  //    "semester": "۹۵-۹۴",
  //    "time": "شنبه ها و دوشنبه ها ساعت ۷:۳۰ تا ۹:۰۰",
  //    "class": "دانشکده کامپیوتر ۷۲۴",
  //    "topics": [
  //      {
  //        "title": "Introducing UML and UP",
  //        "children": [
  //          {
  //            "title": "What is UML",
  //            "children": [],
  //            "parent": null,
  //          },
  //          {
  //            "title": "What is Unified Process",
  //            "children": [],
  //            "parent": null,
  //          }
  //        ],
  //        "parent": null
  //      },
  //      {
  //        "title": "Requirement",
  //        "children": [
  //          {
  //            "title": "The requirement workflow",
  //            "children": [],
  //            "parent": null,
  //          },
  //          {
  //            "title": "Use case modeling",
  //            "children": [],
  //            "parent": null,
  //          },
  //          {
  //            "title": "Advance use case modeling",
  //            "children": [],
  //            "parent": null,
  //          },
  //        ],
  //        "parent": null,
  //      },
  //      {
  //        "title": "Analyze",
  //        "children": [
  //          {
  //            "title": "The analysis workflow",
  //            "children": [],
  //            "parent": null,
  //          },
  //          {
  //            "title": "Object and classes",
  //            "children": [],
  //            "parent": null,
  //          },
  //          {
  //            "title": "Finding analysis class",
  //            "children": [],
  //            "parent": null,
  //          },
  //          {
  //            "title": "Relationship",
  //            "children": [],
  //            "parent": null,
  //          },
  //          {
  //            "title": "Inheritance and polymorphism",
  //            "children": [],
  //            "parent": null,
  //          },
  //        ],
  //        "parent": null
  //      }
  //    ],
  //    "exams": [
  //      {
  //        "title": "میان ترم اول",
  //        "datetime": "2015-12-06",
  //        "type": "میان ترم"
  //      }
  //    ],
  //    "assignments": [
  //      {
  //        "title": "فاز نیم پروژه",
  //        "type": "پروژه",
  //        "startDate": "2015-09-10",
  //        "softDeadLine": "2015-10-01",
  //        "hardDeadLine": "2015-10-10",
  //        "lastUpdate": "2015-10-20",
  //        "descriptionUrl": "/src/app/components/assets/documents/OOD-Project-941.pdf"
  //      },
  //      {
  //        "title": "فاز اول پروژه",
  //        "type": "پروژه",
  //        "startDate": "2015-10-21",
  //        "softDeadLine": "2015-11-01",
  //        "hardDeadLine": "2015-11-10",
  //        "lastUpdate": "2015-11-15",
  //        "descriptionUrl": "http://ood.ce.sharif.edu/%D9%85%D8%B3%D8%AA%D9%86%D8%AF%D8%A7%D8%AA_%D8%AF%D8%B1%D8%B3/%D9%BE%D8%B1%D9%88%DA%98%D9%87/%D8%B5%D9%88%D8%B1%D8%AA_%D9%81%D8%A7%D8%B2_%DB%8C%DA%A9",
  //      },
  //      {
  //        "title": "تمرین الگوهای برنامه نویسی",
  //        "type": "تمرین",
  //        "startDate": "2015-10-25",
  //        "softDeadLine": "2015-10-30",
  //        "hardDeadLine": "2015-10-30",
  //        "lastUpdate": "2015-10-30",
  //        "descriptionUrl": "#"
  //      }
  //    ],
  //  }
  //]

  public findCourseById(id:string):Course {

    try {
      for (var i in this._courses) {
        var course:Course = this._courses[i];
        if (course.id == id) {
          return course;
        }
      }
    }
    catch (e) {
      throw new Error(` هنگام دریافت اطلاعات درس ${id} خطای نامشخص رخ داده است.`)
    }
    return null;
  }

  public addOrUpdate(course:ICourse):void
  {
    console.log('course saved or update in db', course);
  }

  public addOrUpdateRange(courses:ICourse[]):void
  {
    console.log('courses saved or update in db', courses);
  }

}
