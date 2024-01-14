import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = () => {
  const data = [
    {
      id: 1,
      courseName: "DCA",
      courseDetails:
        "Diploma in Computer Application is a practical and career-oriented program that equips students with the necessary skills to excel in today's technology-driven world.",
      modules: [
        // Module 1
        {
          id: 1,
          name: "Fundamental of Computer",
          description: "History of Computer, Generation of Computer, Type of Memory, Input and Output Device",
        },
        {
          id: 2,
          name: "Typing Software  ",
          description: "Hindi and english typing",
        },
        {
          id: 3,
          name: "Operating System (Windows 7, 8, 10, 11)",
          description: "Application Software, System Software",
        },
        {
          id: 4,
          name: "MS-Office 2003,7,10,13,16,19,21",
          description: "MS-Word, Writer, MS-Excel , Calc, MS-Power Point, MS-Access",
        },
        {
          id: 5,
          name: "InterNet ",
          description: "Internet Fundamental, Type of Internet, Type of Protocol, Type of topology, Type of Internet Protocol (IP), Create E-mail A/C & Online Text",
        },
        // module 2
        {
          id: 6,
          name: "Page Maker (7.0) (DTP)",
          description: "Letter Design, Application Form, Cash Memo, Newspaper Design, Marriage Card design",
        },
        {
          id: 7,
          name: "Corel Draw (12/X3,4,5,7,8,9,20,21) (DTP)",
          description:
            "Logo, Hand Bill, Posters, Banner, Flex design, Hoarding Design, 3D Text design",
        },
        {
          id: 8,
          name: "Photoshop (7.0/CS/CS2/CS3) (DTP)",
          description:
            "Photo Edit, Photo Mixup, Background Change, Face Change",
        },
      ],
    },
    {
      id: 2,
      courseName: "PGDCA",
      courseDetails:
        "PGDCA program offers advanced knowledge and practical skills in computer applications, enabling individuals to excel in the dynamic and competitive field of information technology.",
      modules: [
        {
          id: 1,
          name: "Desktop Publishing",
          description: "This is the funda",
        },
        {
          id: 2,
          name: "Page Maker (7.0)",
          description:
            "Letter Design, Application Form, Cash Memo, Newspaper Design, Marriage Card design",
        },
        {
          id: 3,
          name: "Corel Draw (12/X3,4,5,7,8,9,20,21,365)",
          description:
            "Logo, Hand Bill, Posters, Banner, Flex design, Hoarding Design, 3D Text design",
        },
        {
          id: 4,
          name: "Photoshop (7.0/CS/CS2/CS3)",
          description:
            "Photo Edit, Photo Mixup, Background Change, Face Change",
        },
      ],
    },
    {
      id: 3,
      courseName: "CCC",
      courseDetails:
        "CCC program serves as an excellent starting point for individuals looking to build a solid foundation in computer literacy, enabling them to navigate the digital world with confidence and competence.",
      modules: [
        {
          id: 1,
          name: "Fundamental of Computer",
          description: "History of Computer, Generation of Computer, Type of Memory, Input and Output Device",
        },
        {
          id: 2,
          name: "Typing Software",
          description: "(Hindi, English)",
        },
        {
          id: 3,
          name: "Operating System  ",
          description: "(Windows7/8/10/11)",
        },
        { id: 4, name: "Type of Memory ", description: "This is the funda" },
        {
          id: 5,
          name: "Application Software, System Software ",
          description: "This is the funda",
        },
        {
          id: 6,
          name: "Micro Soft Office 2003,7,10,13,16,19,21 ",
          description: " MS Word, MS Excel, MS Power Point",
        },
        {
          id: 7,
          name: "Libre Office",
          description: "Writer, Calc, Impress",
        },
        {
          id: 8,
          name: "InterNet",
          description: "Internet Fundamental, Type of Internet, Type of Protocol, Type of topology, Type of Internet Protocol (IP),Create E-mail A/C & Online Text",
        },
      ], // No modules for this course
    },

    {
      id: 4,
      courseName: "ADCA",
      courseDetails:
        "The ADFA course offers foundational computer literacy training for beginners. Covers fundamentals, software applications, and internet usage. Build confidence in the digital world.",
        modules: [
          // Module 3
          {
            id: 1,
            name: "Fundamental of Account",
            description: "Accounting Rules & Regulation, Accounting Terms, Accounting Process, Journal & Ledger Posting",
          },
          // Module 4
          {
            id: 2,
            name: "Advance Accounting",
            description: "BUSY, MARG, Prime Erp. 9",
          },
         
          // module 6
          {
            id: 3,
            name: "Web Development",
            description: " HTML Introduction, Elements, Images, Tables, Forms, Colors, Links,  List, Fonts, Layout,,  Paragraph, Check Button etc.",
          },
          {
            id: 4,
            name: "Typing Software  ",
            description: "Hindi and english typing",
          },
          {
            id: 5,
            name: "Operating System (Windows 7, 8, 10, 11)",
            description: "Application Software, System Software",
          },
          {
            id: 6,
            name: "MS-Office 2003,7,10,13,16,19,21",
            description: "MS-Word, Writer, MS-Excel , Calc, MS-Power Point, MS-Access",
          },
          {
            id: 7,
            name: "InterNet ",
            description: "Internet Fundamental, Type of Internet, Type of Protocol, Type of topology, Type of Internet Protocol (IP), Create E-mail A/C & Online Text",
          },
          // module 2
          {
            id: 8,
            name: "Page Maker (7.0) (DTP)",
            description: "Letter Design, Application Form, Cash Memo, Newspaper Design, Marriage Card design",
          },
          {
            id: 9,
            name: "Corel Draw (12/X3,4,5,7,8,9,20,21,365) (DTP)",
            description:
              "Logo, Hand Bill, Posters, Banner, Flex design, Hoarding Design, 3D Text design",
          },
          {
            id: 10,
            name: "Photoshop (7.0/CS/CS2/CS3) (DTP)",
            description:
              "Photo Edit, Photo Mixup, Background Change, Face Change",
          },
           // Module 5
           {
            id: 11,
            name: "Tally",
            description: " Introduction, Company Info, Company Creation/Modify/Delete, Company Backup and Restore, Gateway of Tally, Master Creation, Maintain Bill Wise, Stock Item Creation, Godown Creation, Accounting Vouchers, Inventory VouchersBalance sheet report, Bill Printing and Daybook Report, Purchases and Sales Order, Rejection Out and Rejection In Entry, Complete GST Taxation, Display & Reporting",
          },
        ], // No modules for this course
    },

    {
      id: 5,
      courseName: "DFA",
      courseDetails:
        "The DFA course is eginner-friendly computer literacy program covering fundamentals, software applications, and internet usage. Gain confidence in the digital landscape.",
        modules: [
          // Module 1
          {
            id: 1,
            name: "Fundamental of Computer",
            description: "History of Computer, Generation of Computer, Type of Memory, Input and Output Device",
          },
          {
            id: 2,
            name: "Typing Software  ",
            description: "Hindi and english typing",
          },
          {
            id: 3,
            name: "Operating System (Windows 7, 8, 10, 11)",
            description: "Application Software, System Software",
          },
          {
            id: 4,
            name: "MS-Office 2003,7,10,13,16,19,21",
            description: "MS-Word, Writer, MS-Excel , Calc, MS-Power Point, MS-Access",
          },
          {
            id: 5,
            name: "InterNet ",
            description: "Internet Fundamental, Type of Internet, Type of Protocol, Type of topology, Type of Internet Protocol (IP), Create E-mail A/C & Online Text",
          },
          // Module 2
          {
            id: 6,
            name: "Page Maker (7.0) (DTP)",
            description: "Letter Design, Application Form, Cash Memo, Newspaper Design, Marriage Card design",
          },
          {
            id: 7,
            name: "Corel Draw (12/X3,4,5,7,8,9,20,21) (DTP)",
            description:
              "Logo, Hand Bill, Posters, Banner, Flex design, Hoarding Design, 3D Text design",
          },
          {
            id: 8,
            name: "Photoshop (7.0/CS/CS2/CS3) (DTP)",
            description:
              "Photo Edit, Photo Mixup, Background Change, Face Change",
          },
           // Module 5
           {
            id: 9,
            name: "Tally",
            description: " Introduction, Company Info, Company Creation/Modify/Delete, Company Backup and Restore, Gateway of Tally, Master Creation, Maintain Bill Wise, Stock Item Creation, Godown Creation, Accounting Vouchers, Inventory VouchersBalance sheet report, Bill Printing and Daybook Report, Purchases and Sales Order, Rejection Out and Rejection In Entry, Complete GST Taxation, Display & Reporting",
          },
        ], // No modules for this course
    },
    {
      id: 6,
      courseName: "ADFA",
      courseDetails:
        "The ADFA course offers foundational computer literacy training for beginners. Covers fundamentals, software applications, and internet usage. Build confidence in the digital world.",
        modules: [
          // Module 1
          {
            id: 1,
            name: "Fundamental of Computer",
            description: "History of Computer, Generation of Computer, Type of Memory, Input and Output Device",
          },
          {
            id: 2,
            name: "Typing Software  ",
            description: "Hindi and english typing",
          },
          {
            id: 3,
            name: "Operating System (Windows 7, 8, 10, 11)",
            description: "Application Software, System Software",
          },
          {
            id: 4,
            name: "MS-Office 2003,7,10,13,16,19,21",
            description: "MS-Word, Writer, MS-Excel , Calc, MS-Power Point, MS-Access",
          },
          {
            id: 5,
            name: "InterNet ",
            description: "Internet Fundamental, Type of Internet, Type of Protocol, Type of topology, Type of Internet Protocol (IP), Create E-mail A/C & Online Text",
          },
          // Module 2
          {
            id: 6,
            name: "Page Maker (7.0) (DTP)",
            description: "Letter Design, Application Form, Cash Memo, Newspaper Design, Marriage Card design",
          },
          {
            id: 7,
            name: "Corel Draw (12/X3,4,5,7,8,9,20,21) (DTP)",
            description:
              "Logo, Hand Bill, Posters, Banner, Flex design, Hoarding Design, 3D Text design",
          },
          {
            id: 8,
            name: "Photoshop (7.0/CS/CS2/CS3) (DTP)",
            description:
              "Photo Edit, Photo Mixup, Background Change, Face Change",
          },
          // module 3
          {
            id: 9,
            name: "Fundamental of Account",
            description: "Accounting Rules & Regulation, Accounting Terms, Accounting Process, Journal & Ledger Posting",
          },
           // Module 4
           {
            id: 10,
            name: "Advance Accounting",
            description: "BUSY, MARG, Prime Erp. 9",
          },
        ], // No modules for this course

    },
    {
      id: 7,
      courseName: "BCA",
      courseDetails:
        " Bachelor of Computer Applications is an undergraduate degree program that focuses on computer science and its applications. It provides students with skills in programming, software development etc.",
        modules: [
          // module 7
          {
            id: 1,
            name: "Fundamental of Computer",
            description: "History of Computer, Generation of Computer, Type of Memory, Input and Output Device",
          },
          {
            id: 2,
            name: "Typing Software  ",
            description: "Hindi and english typing",
          },
          {
            id: 3,
            name: "Operating System (Windows 7, 8, 10, 11)",
            description: "Application Software, System Software",
          },
          {
            id: 4,
            name: "MS-Office 2003,7,10,13,16,19,21",
            description: "MS-Word, Writer, MS-Excel , Calc, MS-Power Point, MS-Access",
          },
          {
            id: 5,
            name: "InterNet ",
            description: "Internet Fundamental, Type of Internet, Type of Protocol, Type of topology, Type of Internet Protocol (IP), Create E-mail A/C & Online Text",
          },
        ], // No modules for this course
    },
    {
      id: 8,
      courseName: "MS-CIT",
      courseDetails:
        "Essential IT skills in databases, cybersecurity, networks, and project management for diverse career opportunities.",
        modules: [
          // module 8
          {
            id: 1,
            name: "Fundamental of Computer",
            description: "History of Computer, Generation of Computer, Type of Memory, Input and Output Device",
          },
          {
            id: 2,
            name: "Typing Software",
            description: "(Hindi, English)",
          },
          {
            id: 3,
            name: "Operating System  ",
            description: "(Windows7/8/10/11)",
          },
          {
            id: 4,
            name: "Application Software, System Software ",
            description: "Description needed",
          },
          {
            id: 5,
            name: "Microsoft Office 2003,7,10,13,16,19,21,365 ",
            description: "MS Word, MS Excel, MS Power Point",
          },
          {
            id: 6,
            name: "Libre Office ",
            description: "Writer, Calc, Impress",
          },
          {
            id: 7,
            name: "InterNet ",
            description: "Internet Fundamental, Type of Internet, Type of Protocol, Type of topology, Type of Internet Protocol (IP), Create E-mail A/C & Online Text",
          },
        ], // No modules for this course
    },
    {
      id: 9,
      courseName: "'O' Level",
      courseDetails:
        "NIELIT ‘O’ level course of DOEACC Scheme is equivalent to a Foundation Level Course in Computer Applications. Students can acquire this qualification by undergoing this course and passing the examination conducted by NIELIT",
        modules: [
          // module 8
          {
            id: 1,
            name: "IT Tools and Basic of Network",
            description: "Introduction to computer, Introduction to operating system, Word Processing, Spreedsheets, Introduction to Internet and www, E-mail, Social networking, Digital financial tools and application, Overview of future skill and cyber security",
          },
          {
            id: 2,
            name: "Web Designing and Publishing (Python)",
            description: "Introduction to Web Design, Code Editor, HTML, CSS, CSS (Framework), Javascript and Angular Js, Photo Editor, Web publishing And Browsing",
          },
          {
            id: 3,
            name: "Programming and problem solving (Python)",
            description: "Introduction to Programming, Algorithm and Flowchart, Introduction to python, Operator, Expression and python statement, Sequence of data type, Function, File Processing, Modules, Numpy Basic",
          },
          {
            id: 4,
            name: "(Internet of things (IOT) and it application",
            description: "Application, Device, Protocol, Communication Model, Things of Connection, Sensors, Actuators and microcontrollers",
          },
         
        ], // No modules for this course
    },
    {
      id: 10,
      courseName: "'A' Level",
      courseDetails:
        " DOEACC ‘A’ Level Course is the next level of NIELIT IT Professional Course after ‘O’ Level. It is equivalent to the Advanced Diploma Course in Computer Application as recognized by Govt. of India for job purposes. The course starts in the month of January and July every year.",
        modules: [
          // module 8
          // {
          //   id: 1,
          //   name: "Fundamental of Computer",
          //   description: "History of Computer, Generation of Computer, Type of Memory, Input and Output Device",
          // },
          // {
          //   id: 2,
          //   name: "Typing Software",
          //   description: "(Hindi, English)",
          // },
          // {
          //   id: 3,
          //   name: "Operating System  ",
          //   description: "(Windows7/8/10/11)",
          // },
          // {
          //   id: 4,
          //   name: "Application Software, System Software ",
          //   description: "Description needed",
          // },
          // {
          //   id: 5,
          //   name: "Microsoft Office 2003,7,10,13,16,19,21 ",
          //   description: "MS Word, MS Excel, MS Power Point",
          // },
          // {
          //   id: 6,
          //   name: "Libre Office ",
          //   description: "Writer, Calc, Impress",
          // },
          // {
          //   id: 7,
          //   name: "InterNet ",
          //   description: "Internet Fundamental, Type of Internet, Type of Protocol, Type of topology, Type of Internet Protocol (IP), Create E-mail A/C & Online Text",
          // },
        ], // No modules for this course
    },
    {
      id: 11,
      courseName: "YouTube",
      courseDetails:
        "A practical program teaching video creation, audience engagement, and channel growth for success on YouTube. Learn content optimization and monetization strategies for a thriving online presence.",
        modules: [
          // module 9
          {
            id: 1,
            name: "Create Youtube Channel",
            description: "This is the funda",
          },
          {
            id: 2,
            name: "Make Videos, Video Editing",
            description: "This is the funda",
          },
          {
            id: 3,
            name: "Video Upload, Video Algorithm",
            description: "This is the funda",
          },
          {
            id: 4,
            name: "Video Tag, Video Adds, Free All Software",
            description: "This is the funda",
          },
        ]
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      {data.map((res) => (
        <div
          key={res.id}
          className="card w-96 bg-base-100 shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
        >
          <div className="card-body">
            <h2 className="card-title text-center mx-auto">{res.courseName}</h2>
            <p className="text-justify">{res.courseDetails}</p>
            <div className="card-actions justify-center">
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate("/course-page", { state: res });
                }}
              >
                View more
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CourseCard;
