// User data for debouncing search application
const userData = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  },
  {
    "id": 11,
    "name": "Alexander Johnson",
    "username": "alex_j",
    "email": "alex.johnson@techcorp.com",
    "address": {
      "street": "Tech Avenue",
      "suite": "Suite 100",
      "city": "Silicon Valley",
      "zipcode": "94000-0001",
      "geo": {
        "lat": "37.7749",
        "lng": "-122.4194"
      }
    },
    "phone": "555-0101",
    "website": "alexjohnson.dev",
    "company": {
      "name": "TechCorp Solutions",
      "catchPhrase": "Innovation through technology",
      "bs": "revolutionize digital experiences"
    }
  },
  {
    "id": 12,
    "name": "Sarah Williams",
    "username": "sarah_w",
    "email": "sarah.williams@designstudio.com",
    "address": {
      "street": "Creative Lane",
      "suite": "Studio 200",
      "city": "Design City",
      "zipcode": "90210-0001",
      "geo": {
        "lat": "34.0522",
        "lng": "-118.2437"
      }
    },
    "phone": "555-0102",
    "website": "sarahdesigns.com",
    "company": {
      "name": "Design Studio Pro",
      "catchPhrase": "Beautiful designs, powerful impact",
      "bs": "create stunning visual experiences"
    }
  },
  {
    "id": 13,
    "name": "Michael Brown",
    "username": "mike_brown",
    "email": "michael.brown@financegroup.com",
    "address": {
      "street": "Wall Street",
      "suite": "Floor 50",
      "city": "New York",
      "zipcode": "10001-0001",
      "geo": {
        "lat": "40.7128",
        "lng": "-74.0060"
      }
    },
    "phone": "555-0103",
    "website": "mikebrownfinance.com",
    "company": {
      "name": "Finance Group Inc",
      "catchPhrase": "Smart investments, smart future",
      "bs": "optimize financial strategies"
    }
  },
  {
    "id": 14,
    "name": "Emily Davis",
    "username": "emily_d",
    "email": "emily.davis@healthcare.org",
    "address": {
      "street": "Medical Center Blvd",
      "suite": "Building A",
      "city": "Health City",
      "zipcode": "60601-0001",
      "geo": {
        "lat": "41.8781",
        "lng": "-87.6298"
      }
    },
    "phone": "555-0104",
    "website": "emilydavishealth.com",
    "company": {
      "name": "Healthcare Solutions",
      "catchPhrase": "Caring for your health",
      "bs": "improve patient outcomes"
    }
  },
  {
    "id": 15,
    "name": "David Wilson",
    "username": "david_w",
    "email": "david.wilson@education.edu",
    "address": {
      "street": "University Drive",
      "suite": "Campus Center",
      "city": "Education City",
      "zipcode": "02101-0001",
      "geo": {
        "lat": "42.3601",
        "lng": "-71.0589"
      }
    },
    "phone": "555-0105",
    "website": "davidwilson.edu",
    "company": {
      "name": "Education Excellence",
      "catchPhrase": "Learning without limits",
      "bs": "empower through education"
    }
  },
  {
    "id": 16,
    "name": "Benjamin Jones",
    "username": "benjamin_jones",
    "email": "benjamin.jones@beauty.com",
    "address": {
      "street": "6899 Sixth St",
      "suite": "Apt. 63",
      "city": "Bowling Green",
      "zipcode": "88507-2839",
      "geo": {
        "lat": "75.2269",
        "lng": "165.4053"
      }
    },
    "phone": "555-4656",
    "website": "benjaminjones.com",
    "company": {
      "name": "Beauty",
      "catchPhrase": "Creating solutions",
      "bs": "accelerate growth"
    }
  },
  {
    "id": 17,
    "name": "Joshua Richardson",
    "username": "joshua_richardson",
    "email": "joshua.richardson@cloudservices.com",
    "address": {
      "street": "2876 Lee Ave",
      "suite": "Apt. 83",
      "city": "Pompano Beach",
      "zipcode": "18395-9283",
      "geo": {
        "lat": "88.7120",
        "lng": "20.7127"
      }
    },
    "phone": "555-5043",
    "website": "joshuarichardson.com",
    "company": {
      "name": "Cloud Services",
      "catchPhrase": "Connecting people",
      "bs": "enhance customer engagement"
    }
  },
  {
    "id": 18,
    "name": "Mark Hernandez",
    "username": "mark_hernandez",
    "email": "mark.hernandez@customersuccess.com",
    "address": {
      "street": "2628 Brooks Ave",
      "suite": "Apt. 438",
      "city": "San Marcos",
      "zipcode": "64509-1032",
      "geo": {
        "lat": "88.7584",
        "lng": "109.8491"
      }
    },
    "phone": "555-9017",
    "website": "markhernandez.com",
    "company": {
      "name": "Customer Success",
      "catchPhrase": "Enhancing experiences",
      "bs": "build relationships"
    }
  },
  {
    "id": 19,
    "name": "Helen Green",
    "username": "helen_green",
    "email": "helen.green@ui/uxdesign.com",
    "address": {
      "street": "8383 Elm St",
      "suite": "Apt. 474",
      "city": "Hesperia",
      "zipcode": "56042-1116",
      "geo": {
        "lat": "-33.2665",
        "lng": "26.2346"
      }
    },
    "phone": "555-8105",
    "website": "helengreen.com",
    "company": {
      "name": "UI/UX Design",
      "catchPhrase": "Innovation through technology",
      "bs": "create value"
    }
  },
  {
    "id": 20,
    "name": "Ruth Howard",
    "username": "ruth_howard",
    "email": "ruth.howard@sportsmanagement.com",
    "address": {
      "street": "9373 Stewart St",
      "suite": "Suite 686",
      "city": "Rochester",
      "zipcode": "70077-8716",
      "geo": {
        "lat": "4.4005",
        "lng": "-87.9097"
      }
    },
    "phone": "555-9456",
    "website": "ruthhoward.com",
    "company": {
      "name": "Sports Management",
      "catchPhrase": "Quality first",
      "bs": "optimize business processes"
    }
  },
  {
    "id": 21,
    "name": "Brandon Martinez",
    "username": "brandon_martinez",
    "email": "brandon.martinez@businessintelligence.com",
    "address": {
      "street": "4815 Franklin St",
      "suite": "Suite 909",
      "city": "Birmingham",
      "zipcode": "23106-7228",
      "geo": {
        "lat": "-1.9584",
        "lng": "-13.3156"
      }
    },
    "phone": "555-6939",
    "website": "brandonmartinez.com",
    "company": {
      "name": "Business Intelligence",
      "catchPhrase": "Quality first",
      "bs": "improve efficiency"
    }
  },
  {
    "id": 22,
    "name": "Sharon Evans",
    "username": "sharon_evans",
    "email": "sharon.evans@operations.com",
    "address": {
      "street": "1402 Griffin St",
      "suite": "Apt. 724",
      "city": "Corona",
      "zipcode": "47207-3118",
      "geo": {
        "lat": "-42.4514",
        "lng": "105.1405"
      }
    },
    "phone": "555-6395",
    "website": "sharonevans.com",
    "company": {
      "name": "Operations",
      "catchPhrase": "Leading the industry",
      "bs": "improve efficiency"
    }
  },
  {
    "id": 23,
    "name": "Dennis Morris",
    "username": "dennis_morris",
    "email": "dennis.morris@travelservices.com",
    "address": {
      "street": "8023 Robinson Ave",
      "suite": "Suite 196",
      "city": "Lake Havasu City",
      "zipcode": "29515-4575",
      "geo": {
        "lat": "41.7851",
        "lng": "-42.9491"
      }
    },
    "phone": "555-8212",
    "website": "dennismorris.com",
    "company": {
      "name": "Travel Services",
      "catchPhrase": "Building the future",
      "bs": "achieve goals"
    }
  },
  {
    "id": 24,
    "name": "Matthew Rodriguez",
    "username": "matthew_rodriguez",
    "email": "matthew.rodriguez@educationexcellence.com",
    "address": {
      "street": "2587 Johnson St",
      "suite": "Suite 504",
      "city": "Columbia",
      "zipcode": "56422-8194",
      "geo": {
        "lat": "42.0018",
        "lng": "-20.7726"
      }
    },
    "phone": "555-2120",
    "website": "matthewrodriguez.com",
    "company": {
      "name": "Education Excellence",
      "catchPhrase": "Simplifying complexity",
      "bs": "streamline operations"
    }
  },
  {
    "id": 25,
    "name": "Helen Robinson",
    "username": "helen_robinson",
    "email": "helen.robinson@mediaproduction.com",
    "address": {
      "street": "6110 Edwards St",
      "suite": "Suite 831",
      "city": "Sioux Falls",
      "zipcode": "29954-3288",
      "geo": {
        "lat": "7.1843",
        "lng": "-41.9136"
      }
    },
    "phone": "555-8645",
    "website": "helenrobinson.com",
    "company": {
      "name": "Media Production",
      "catchPhrase": "Simplifying complexity",
      "bs": "accelerate growth"
    }
  },
  {
    "id": 26,
    "name": "Gary Ortiz",
    "username": "gary_ortiz",
    "email": "gary.ortiz@wellness.com",
    "address": {
      "street": "4945 Hernandez St",
      "suite": "Suite 456",
      "city": "Aurora",
      "zipcode": "17240-5145",
      "geo": {
        "lat": "-7.8151",
        "lng": "-179.7641"
      }
    },
    "phone": "555-9151",
    "website": "garyortiz.com",
    "company": {
      "name": "Wellness",
      "catchPhrase": "Leading the industry",
      "bs": "build relationships"
    }
  },
  {
    "id": 27,
    "name": "Alexander Richardson",
    "username": "alexander_richardson",
    "email": "alexander.richardson@manufacturing.com",
    "address": {
      "street": "5087 Tenth St",
      "suite": "Apt. 99",
      "city": "Hattiesburg",
      "zipcode": "64477-6254",
      "geo": {
        "lat": "-9.3601",
        "lng": "91.4164"
      }
    },
    "phone": "555-5957",
    "website": "alexanderrichardson.com",
    "company": {
      "name": "Manufacturing",
      "catchPhrase": "Excellence in service",
      "bs": "create value"
    }
  },
  {
    "id": 28,
    "name": "Sarah Garcia",
    "username": "sarah_garcia",
    "email": "sarah.garcia@engineeringinnovations.com",
    "address": {
      "street": "2338 Thomas Ave",
      "suite": "Suite 295",
      "city": "Boulder",
      "zipcode": "99106-7450",
      "geo": {
        "lat": "-38.3135",
        "lng": "49.4477"
      }
    },
    "phone": "555-6123",
    "website": "sarahgarcia.com",
    "company": {
      "name": "Engineering Innovations",
      "catchPhrase": "Building the future",
      "bs": "revolutionize digital experiences"
    }
  },
  {
    "id": 29,
    "name": "Donna Brown",
    "username": "donna_brown",
    "email": "donna.brown@retailsolutions.com",
    "address": {
      "street": "5787 Roosevelt Ave",
      "suite": "Apt. 626",
      "city": "Napa",
      "zipcode": "35237-5302",
      "geo": {
        "lat": "4.7905",
        "lng": "144.2630"
      }
    },
    "phone": "555-9355",
    "website": "donnabrown.com",
    "company": {
      "name": "Retail Solutions",
      "catchPhrase": "Innovation through technology",
      "bs": "enhance customer engagement"
    }
  },
  {
    "id": 30,
    "name": "Helen Perez",
    "username": "helen_perez",
    "email": "helen.perez@qualityassurance.com",
    "address": {
      "street": "6912 Long St",
      "suite": "Apt. 419",
      "city": "Garland",
      "zipcode": "42369-4895",
      "geo": {
        "lat": "-76.4316",
        "lng": "159.1615"
      }
    },
    "phone": "555-9358",
    "website": "helenperez.com",
    "company": {
      "name": "Quality Assurance",
      "catchPhrase": "Creating solutions",
      "bs": "achieve goals"
    }
  },
  {
    "id": 31,
    "name": "Eric Brooks",
    "username": "eric_brooks",
    "email": "eric.brooks@businessconsultants.com",
    "address": {
      "street": "9859 Garcia Ave",
      "suite": "Apt. 791",
      "city": "Mobile",
      "zipcode": "64804-4884",
      "geo": {
        "lat": "61.7015",
        "lng": "81.7904"
      }
    },
    "phone": "555-2277",
    "website": "ericbrooks.com",
    "company": {
      "name": "Business Consultants",
      "catchPhrase": "Driving success",
      "bs": "achieve goals"
    }
  },
  {
    "id": 32,
    "name": "Dennis Flores",
    "username": "dennis_flores",
    "email": "dennis.flores@projectmanagement.com",
    "address": {
      "street": "2975 Maple Ave",
      "suite": "Apt. 110",
      "city": "Joplin",
      "zipcode": "70353-1349",
      "geo": {
        "lat": "-0.6405",
        "lng": "176.7130"
      }
    },
    "phone": "555-4665",
    "website": "dennisflores.com",
    "company": {
      "name": "Project Management",
      "catchPhrase": "Leading the industry",
      "bs": "accelerate growth"
    }
  },
  {
    "id": 33,
    "name": "Lisa Young",
    "username": "lisa_young",
    "email": "lisa.young@manufacturing.com",
    "address": {
      "street": "2563 Bailey Ave",
      "suite": "Suite 790",
      "city": "West Covina",
      "zipcode": "93371-1285",
      "geo": {
        "lat": "-48.0277",
        "lng": "-74.5871"
      }
    },
    "phone": "555-2849",
    "website": "lisayoung.com",
    "company": {
      "name": "Manufacturing",
      "catchPhrase": "Innovation through technology",
      "bs": "optimize business processes"
    }
  },
  {
    "id": 34,
    "name": "Karen Mendoza",
    "username": "karen_mendoza",
    "email": "karen.mendoza@cloudservices.com",
    "address": {
      "street": "7146 Carter Ave",
      "suite": "Suite 373",
      "city": "Peoria",
      "zipcode": "82738-7317",
      "geo": {
        "lat": "-68.0579",
        "lng": "-119.8354"
      }
    },
    "phone": "555-2343",
    "website": "karenmendoza.com",
    "company": {
      "name": "Cloud Services",
      "catchPhrase": "Enhancing experiences",
      "bs": "enhance customer engagement"
    }
  },
  {
    "id": 35,
    "name": "Lisa King",
    "username": "lisa_king",
    "email": "lisa.king@webdevelopment.com",
    "address": {
      "street": "6895 Gray Ave",
      "suite": "Apt. 427",
      "city": "Oakland",
      "zipcode": "73112-1035",
      "geo": {
        "lat": "-28.8055",
        "lng": "90.1197"
      }
    },
    "phone": "555-6731",
    "website": "lisaking.com",
    "company": {
      "name": "Web Development",
      "catchPhrase": "Excellence in service",
      "bs": "drive innovation"
    }
  },
  {
    "id": 36,
    "name": "Jason Cook",
    "username": "jason_cook",
    "email": "jason.cook@customersuccess.com",
    "address": {
      "street": "7576 Barnes Ave",
      "suite": "Apt. 436",
      "city": "San Leandro",
      "zipcode": "22105-8105",
      "geo": {
        "lat": "-22.0262",
        "lng": "-78.8860"
      }
    },
    "phone": "555-6577",
    "website": "jasoncook.com",
    "company": {
      "name": "Customer Success",
      "catchPhrase": "Customer satisfaction",
      "bs": "drive innovation"
    }
  },
  {
    "id": 37,
    "name": "Jerry Kelly",
    "username": "jerry_kelly",
    "email": "jerry.kelly@financegroupinc.com",
    "address": {
      "street": "783 Young Ave",
      "suite": "Apt. 138",
      "city": "Tulsa",
      "zipcode": "89960-8764",
      "geo": {
        "lat": "-39.0967",
        "lng": "84.1496"
      }
    },
    "phone": "555-7298",
    "website": "jerrykelly.com",
    "company": {
      "name": "Finance Group Inc",
      "catchPhrase": "Quality first",
      "bs": "create value"
    }
  },
  {
    "id": 38,
    "name": "Deborah Collins",
    "username": "deborah_collins",
    "email": "deborah.collins@legalservices.com",
    "address": {
      "street": "3161 Cook Ave",
      "suite": "Apt. 318",
      "city": "Baltimore",
      "zipcode": "76659-6113",
      "geo": {
        "lat": "-66.8807",
        "lng": "176.2156"
      }
    },
    "phone": "555-7436",
    "website": "deborahcollins.com",
    "company": {
      "name": "Legal Services",
      "catchPhrase": "Leading the industry",
      "bs": "improve efficiency"
    }
  },
  {
    "id": 39,
    "name": "Daniel Edwards",
    "username": "daniel_edwards",
    "email": "daniel.edwards@legalservices.com",
    "address": {
      "street": "7322 Martinez St",
      "suite": "Suite 25",
      "city": "Toledo",
      "zipcode": "37989-3899",
      "geo": {
        "lat": "-10.1352",
        "lng": "-16.2183"
      }
    },
    "phone": "555-7733",
    "website": "danieledwards.com",
    "company": {
      "name": "Legal Services",
      "catchPhrase": "Leading the industry",
      "bs": "achieve goals"
    }
  },
  {
    "id": 40,
    "name": "George Walker",
    "username": "george_walker",
    "email": "george.walker@travelservices.com",
    "address": {
      "street": "9770 Cedar St",
      "suite": "Apt. 671",
      "city": "Akron",
      "zipcode": "36686-1470",
      "geo": {
        "lat": "22.4680",
        "lng": "-127.4958"
      }
    },
    "phone": "555-2690",
    "website": "georgewalker.com",
    "company": {
      "name": "Travel Services",
      "catchPhrase": "Enhancing experiences",
      "bs": "streamline operations"
    }
  },
  {
    "id": 41,
    "name": "Carol Wood",
    "username": "carol_wood",
    "email": "carol.wood@digitalsolutions.com",
    "address": {
      "street": "3817 Fourth St",
      "suite": "Suite 69",
      "city": "Joplin",
      "zipcode": "13720-8377",
      "geo": {
        "lat": "36.7404",
        "lng": "86.4424"
      }
    },
    "phone": "555-8198",
    "website": "carolwood.com",
    "company": {
      "name": "Digital Solutions",
      "catchPhrase": "Simplifying complexity",
      "bs": "streamline operations"
    }
  },
  {
    "id": 42,
    "name": "Dennis Martinez",
    "username": "dennis_martinez",
    "email": "dennis.martinez@digitalsolutions.com",
    "address": {
      "street": "9895 Wood St",
      "suite": "Suite 690",
      "city": "Greenville",
      "zipcode": "50326-6625",
      "geo": {
        "lat": "-29.9173",
        "lng": "57.2914"
      }
    },
    "phone": "555-4009",
    "website": "dennismartinez.com",
    "company": {
      "name": "Digital Solutions",
      "catchPhrase": "Leading the industry",
      "bs": "drive innovation"
    }
  },
  {
    "id": 43,
    "name": "John Torres",
    "username": "john_torres",
    "email": "john.torres@softwaredevelopment.com",
    "address": {
      "street": "3751 Bryant Ave",
      "suite": "Suite 969",
      "city": "Stamford",
      "zipcode": "34180-8635",
      "geo": {
        "lat": "-39.0797",
        "lng": "-88.5268"
      }
    },
    "phone": "555-1660",
    "website": "johntorres.com",
    "company": {
      "name": "Software Development",
      "catchPhrase": "Delivering results",
      "bs": "create value"
    }
  },
  {
    "id": 44,
    "name": "Sharon Lewis",
    "username": "sharon_lewis",
    "email": "sharon.lewis@travelservices.com",
    "address": {
      "street": "6316 Anderson Ave",
      "suite": "Apt. 285",
      "city": "Pueblo",
      "zipcode": "14756-7619",
      "geo": {
        "lat": "48.0805",
        "lng": "-153.4224"
      }
    },
    "phone": "555-2445",
    "website": "sharonlewis.com",
    "company": {
      "name": "Travel Services",
      "catchPhrase": "Creating solutions",
      "bs": "enable success"
    }
  },
  {
    "id": 45,
    "name": "Lisa Jackson",
    "username": "lisa_jackson",
    "email": "lisa.jackson@logistics.com",
    "address": {
      "street": "5996 Griffin St",
      "suite": "Suite 291",
      "city": "Fayetteville",
      "zipcode": "20914-3955",
      "geo": {
        "lat": "39.7719",
        "lng": "-53.1640"
      }
    },
    "phone": "555-3469",
    "website": "lisajackson.com",
    "company": {
      "name": "Logistics",
      "catchPhrase": "Leading the industry",
      "bs": "create value"
    }
  },
  {
    "id": 46,
    "name": "Jane Cook",
    "username": "jane_cook",
    "email": "jane.cook@transportation.com",
    "address": {
      "street": "5439 Collins Ave",
      "suite": "Suite 269",
      "city": "Wilmington",
      "zipcode": "93950-9828",
      "geo": {
        "lat": "-63.9293",
        "lng": "12.4412"
      }
    },
    "phone": "555-8740",
    "website": "janecook.com",
    "company": {
      "name": "Transportation",
      "catchPhrase": "Empowering businesses",
      "bs": "revolutionize digital experiences"
    }
  },
  {
    "id": 47,
    "name": "Jose Brooks",
    "username": "jose_brooks",
    "email": "jose.brooks@educationexcellence.com",
    "address": {
      "street": "4453 Butler Ave",
      "suite": "Suite 455",
      "city": "Pueblo",
      "zipcode": "36452-3398",
      "geo": {
        "lat": "-3.8746",
        "lng": "24.8251"
      }
    },
    "phone": "555-3271",
    "website": "josebrooks.com",
    "company": {
      "name": "Education Excellence",
      "catchPhrase": "Empowering businesses",
      "bs": "optimize business processes"
    }
  },
  {
    "id": 48,
    "name": "Matthew White",
    "username": "matthew_white",
    "email": "matthew.white@creativeagency.com",
    "address": {
      "street": "315 Rogers Ave",
      "suite": "Suite 250",
      "city": "Hayward",
      "zipcode": "27864-6738",
      "geo": {
        "lat": "44.5174",
        "lng": "-95.0634"
      }
    },
    "phone": "555-4102",
    "website": "matthewwhite.com",
    "company": {
      "name": "Creative Agency",
      "catchPhrase": "Enhancing experiences",
      "bs": "drive innovation"
    }
  },
  {
    "id": 49,
    "name": "William Chavez",
    "username": "william_chavez",
    "email": "william.chavez@humanresources.com",
    "address": {
      "street": "7102 Bailey Ave",
      "suite": "Apt. 142",
      "city": "Taylorsville",
      "zipcode": "98635-9974",
      "geo": {
        "lat": "79.5111",
        "lng": "-102.6209"
      }
    },
    "phone": "555-8913",
    "website": "williamchavez.com",
    "company": {
      "name": "Human Resources",
      "catchPhrase": "Simplifying complexity",
      "bs": "transform industries"
    }
  },
  {
    "id": 50,
    "name": "Aaron Diaz",
    "username": "aaron_diaz",
    "email": "aaron.diaz@productmanagement.com",
    "address": {
      "street": "6529 Allen St",
      "suite": "Apt. 159",
      "city": "Gilbert",
      "zipcode": "54506-5621",
      "geo": {
        "lat": "-37.1750",
        "lng": "-103.9948"
      }
    },
    "phone": "555-2635",
    "website": "aarondiaz.com",
    "company": {
      "name": "Product Management",
      "catchPhrase": "Delivering results",
      "bs": "solve problems"
    }
  },
  {
    "id": 51,
    "name": "Deborah Jackson",
    "username": "deborah_jackson",
    "email": "deborah.jackson@environmentalservices.com",
    "address": {
      "street": "5723 Roosevelt Ave",
      "suite": "Suite 977",
      "city": "Lakeland",
      "zipcode": "11485-4041",
      "geo": {
        "lat": "-19.3187",
        "lng": "-92.9087"
      }
    },
    "phone": "555-4112",
    "website": "deborahjackson.com",
    "company": {
      "name": "Environmental Services",
      "catchPhrase": "Driving success",
      "bs": "accelerate growth"
    }
  },
  {
    "id": 52,
    "name": "Jessica Ramirez",
    "username": "jessica_ramirez",
    "email": "jessica.ramirez@food&beverage.com",
    "address": {
      "street": "8141 Sanders Ave",
      "suite": "Apt. 110",
      "city": "Stamford",
      "zipcode": "95877-5999",
      "geo": {
        "lat": "0.4310",
        "lng": "119.8771"
      }
    },
    "phone": "555-5710",
    "website": "jessicaramirez.com",
    "company": {
      "name": "Food & Beverage",
      "catchPhrase": "Empowering businesses",
      "bs": "deliver excellence"
    }
  },
  {
    "id": 53,
    "name": "Joshua Gray",
    "username": "joshua_gray",
    "email": "joshua.gray@logistics.com",
    "address": {
      "street": "2522 Nelson St",
      "suite": "Apt. 766",
      "city": "Ontario",
      "zipcode": "36427-3653",
      "geo": {
        "lat": "27.3681",
        "lng": "176.0060"
      }
    },
    "phone": "555-6302",
    "website": "joshuagray.com",
    "company": {
      "name": "Logistics",
      "catchPhrase": "Innovation through technology",
      "bs": "achieve goals"
    }
  },
  {
    "id": 54,
    "name": "Sharon Cook",
    "username": "sharon_cook",
    "email": "sharon.cook@logistics.com",
    "address": {
      "street": "8584 Phillips St",
      "suite": "Apt. 193",
      "city": "Corona",
      "zipcode": "80359-9225",
      "geo": {
        "lat": "63.2014",
        "lng": "37.7302"
      }
    },
    "phone": "555-7978",
    "website": "sharoncook.com",
    "company": {
      "name": "Logistics",
      "catchPhrase": "Quality first",
      "bs": "deliver excellence"
    }
  },
  {
    "id": 55,
    "name": "Jason Howard",
    "username": "jason_howard",
    "email": "jason.howard@webdevelopment.com",
    "address": {
      "street": "5078 Fifth St",
      "suite": "Suite 662",
      "city": "Fremont",
      "zipcode": "15673-4164",
      "geo": {
        "lat": "4.4373",
        "lng": "32.9804"
      }
    },
    "phone": "555-9238",
    "website": "jasonhoward.com",
    "company": {
      "name": "Web Development",
      "catchPhrase": "Excellence in service",
      "bs": "enhance customer engagement"
    }
  },
  {
    "id": 56,
    "name": "Ryan Brooks",
    "username": "ryan_brooks",
    "email": "ryan.brooks@wellness.com",
    "address": {
      "street": "4300 Wright St",
      "suite": "Apt. 421",
      "city": "Carrollton",
      "zipcode": "64558-4473",
      "geo": {
        "lat": "-82.2857",
        "lng": "-18.7159"
      }
    },
    "phone": "555-3867",
    "website": "ryanbrooks.com",
    "company": {
      "name": "Wellness",
      "catchPhrase": "Making a difference",
      "bs": "create value"
    }
  },
  {
    "id": 57,
    "name": "Christopher Baker",
    "username": "christopher_baker",
    "email": "christopher.baker@ui/uxdesign.com",
    "address": {
      "street": "1081 Kelly St",
      "suite": "Apt. 696",
      "city": "San Mateo",
      "zipcode": "47911-5738",
      "geo": {
        "lat": "-65.7823",
        "lng": "89.2217"
      }
    },
    "phone": "555-1387",
    "website": "christopherbaker.com",
    "company": {
      "name": "UI/UX Design",
      "catchPhrase": "Quality first",
      "bs": "streamline operations"
    }
  },
  {
    "id": 58,
    "name": "Edward Alvarez",
    "username": "edward_alvarez",
    "email": "edward.alvarez@entertainment.com",
    "address": {
      "street": "7412 Bell Ave",
      "suite": "Suite 255",
      "city": "Little Rock",
      "zipcode": "76388-4662",
      "geo": {
        "lat": "-10.8419",
        "lng": "22.6542"
      }
    },
    "phone": "555-3775",
    "website": "edwardalvarez.com",
    "company": {
      "name": "Entertainment",
      "catchPhrase": "Building the future",
      "bs": "enhance customer engagement"
    }
  },
  {
    "id": 59,
    "name": "Sharon Robinson",
    "username": "sharon_robinson",
    "email": "sharon.robinson@beauty.com",
    "address": {
      "street": "7613 Ramirez St",
      "suite": "Apt. 688",
      "city": "Norman",
      "zipcode": "23529-1099",
      "geo": {
        "lat": "-81.1377",
        "lng": "-135.3780"
      }
    },
    "phone": "555-2310",
    "website": "sharonrobinson.com",
    "company": {
      "name": "Beauty",
      "catchPhrase": "Innovation through technology",
      "bs": "enable success"
    }
  },
  {
    "id": 60,
    "name": "James Sanchez",
    "username": "james_sanchez",
    "email": "james.sanchez@digitalsolutions.com",
    "address": {
      "street": "4618 Collins Ave",
      "suite": "Apt. 790",
      "city": "Gastonia",
      "zipcode": "21806-8605",
      "geo": {
        "lat": "25.4747",
        "lng": "53.1183"
      }
    },
    "phone": "555-1786",
    "website": "jamessanchez.com",
    "company": {
      "name": "Digital Solutions",
      "catchPhrase": "Leading the industry",
      "bs": "build relationships"
    }
  },
  {
    "id": 61,
    "name": "Donna Brown",
    "username": "donna_brown",
    "email": "donna.brown@operations.com",
    "address": {
      "street": "3357 Russell Ave",
      "suite": "Apt. 438",
      "city": "Keizer",
      "zipcode": "93062-5013",
      "geo": {
        "lat": "31.7492",
        "lng": "102.8542"
      }
    },
    "phone": "555-9976",
    "website": "donnabrown.com",
    "company": {
      "name": "Operations",
      "catchPhrase": "Innovation through technology",
      "bs": "transform industries"
    }
  },
  {
    "id": 62,
    "name": "Brian Lewis",
    "username": "brian_lewis",
    "email": "brian.lewis@energysolutions.com",
    "address": {
      "street": "4285 Ramirez St",
      "suite": "Apt. 337",
      "city": "Fargo",
      "zipcode": "29352-8279",
      "geo": {
        "lat": "-53.7224",
        "lng": "138.4023"
      }
    },
    "phone": "555-1102",
    "website": "brianlewis.com",
    "company": {
      "name": "Energy Solutions",
      "catchPhrase": "Delivering results",
      "bs": "drive innovation"
    }
  },
  {
    "id": 63,
    "name": "John Stewart",
    "username": "john_stewart",
    "email": "john.stewart@digitalsolutions.com",
    "address": {
      "street": "4912 Garcia Ave",
      "suite": "Suite 967",
      "city": "Terre Haute",
      "zipcode": "20211-9350",
      "geo": {
        "lat": "70.3263",
        "lng": "171.1815"
      }
    },
    "phone": "555-2819",
    "website": "johnstewart.com",
    "company": {
      "name": "Digital Solutions",
      "catchPhrase": "Customer satisfaction",
      "bs": "optimize business processes"
    }
  },
  {
    "id": 64,
    "name": "Donna Moore",
    "username": "donna_moore",
    "email": "donna.moore@architecture.com",
    "address": {
      "street": "8306 Hayes St",
      "suite": "Suite 870",
      "city": "Vancouver",
      "zipcode": "53729-3660",
      "geo": {
        "lat": "-42.8455",
        "lng": "19.4715"
      }
    },
    "phone": "555-2790",
    "website": "donnamoore.com",
    "company": {
      "name": "Architecture",
      "catchPhrase": "Driving success",
      "bs": "enable success"
    }
  },
  {
    "id": 65,
    "name": "Michelle Jones",
    "username": "michelle_jones",
    "email": "michelle.jones@financegroupinc.com",
    "address": {
      "street": "9675 Green St",
      "suite": "Apt. 991",
      "city": "Vallejo",
      "zipcode": "65477-4199",
      "geo": {
        "lat": "-77.1890",
        "lng": "-86.6096"
      }
    },
    "phone": "555-4004",
    "website": "michellejones.com",
    "company": {
      "name": "Finance Group Inc",
      "catchPhrase": "Driving success",
      "bs": "improve efficiency"
    }
  },
  {
    "id": 66,
    "name": "Daniel Martin",
    "username": "daniel_martin",
    "email": "daniel.martin@airesearch.com",
    "address": {
      "street": "167 Sanders Ave",
      "suite": "Apt. 704",
      "city": "Tulare",
      "zipcode": "62722-4239",
      "geo": {
        "lat": "70.6552",
        "lng": "136.6938"
      }
    },
    "phone": "555-9193",
    "website": "danielmartin.com",
    "company": {
      "name": "AI Research",
      "catchPhrase": "Innovation through technology",
      "bs": "transform industries"
    }
  },
  {
    "id": 67,
    "name": "Aaron Jackson",
    "username": "aaron_jackson",
    "email": "aaron.jackson@legalservices.com",
    "address": {
      "street": "8841 Wilson Ave",
      "suite": "Apt. 392",
      "city": "Moline",
      "zipcode": "11204-9358",
      "geo": {
        "lat": "-9.2451",
        "lng": "126.4713"
      }
    },
    "phone": "555-3374",
    "website": "aaronjackson.com",
    "company": {
      "name": "Legal Services",
      "catchPhrase": "Delivering results",
      "bs": "create value"
    }
  },
  {
    "id": 68,
    "name": "Jack Howard",
    "username": "jack_howard",
    "email": "jack.howard@architecture.com",
    "address": {
      "street": "4409 Watson St",
      "suite": "Apt. 641",
      "city": "Lansing",
      "zipcode": "42864-4108",
      "geo": {
        "lat": "65.1945",
        "lng": "133.9585"
      }
    },
    "phone": "555-6747",
    "website": "jackhoward.com",
    "company": {
      "name": "Architecture",
      "catchPhrase": "Quality first",
      "bs": "create value"
    }
  },
  {
    "id": 69,
    "name": "Paul Hall",
    "username": "paul_hall",
    "email": "paul.hall@realestate.com",
    "address": {
      "street": "9665 Jefferson St",
      "suite": "Suite 963",
      "city": "Austin",
      "zipcode": "51122-6395",
      "geo": {
        "lat": "-0.8200",
        "lng": "-171.4190"
      }
    },
    "phone": "555-4186",
    "website": "paulhall.com",
    "company": {
      "name": "Real Estate",
      "catchPhrase": "Making a difference",
      "bs": "enable success"
    }
  },
  {
    "id": 70,
    "name": "David Mitchell",
    "username": "david_mitchell",
    "email": "david.mitchell@energysolutions.com",
    "address": {
      "street": "794 Flores Ave",
      "suite": "Apt. 778",
      "city": "Allentown",
      "zipcode": "42984-4094",
      "geo": {
        "lat": "7.5744",
        "lng": "-110.3699"
      }
    },
    "phone": "555-7956",
    "website": "davidmitchell.com",
    "company": {
      "name": "Energy Solutions",
      "catchPhrase": "Innovation through technology",
      "bs": "deliver excellence"
    }
  },
  {
    "id": 71,
    "name": "Justin Rivera",
    "username": "justin_rivera",
    "email": "justin.rivera@realestate.com",
    "address": {
      "street": "385 Perez Ave",
      "suite": "Apt. 257",
      "city": "Carson",
      "zipcode": "61217-6800",
      "geo": {
        "lat": "2.0645",
        "lng": "8.4835"
      }
    },
    "phone": "555-2223",
    "website": "justinrivera.com",
    "company": {
      "name": "Real Estate",
      "catchPhrase": "Simplifying complexity",
      "bs": "enhance customer engagement"
    }
  },
  {
    "id": 72,
    "name": "Scott Chavez",
    "username": "scott_chavez",
    "email": "scott.chavez@e-commerce.com",
    "address": {
      "street": "6638 Rodriguez Ave",
      "suite": "Suite 144",
      "city": "Spokane Valley",
      "zipcode": "54061-4343",
      "geo": {
        "lat": "85.0492",
        "lng": "-31.7615"
      }
    },
    "phone": "555-6531",
    "website": "scottchavez.com",
    "company": {
      "name": "E-commerce",
      "catchPhrase": "Leading the industry",
      "bs": "create value"
    }
  },
  {
    "id": 73,
    "name": "Andrew Sanders",
    "username": "andrew_sanders",
    "email": "andrew.sanders@operations.com",
    "address": {
      "street": "3618 Park Ave",
      "suite": "Suite 615",
      "city": "Gresham",
      "zipcode": "86697-5259",
      "geo": {
        "lat": "-29.5197",
        "lng": "143.5438"
      }
    },
    "phone": "555-5525",
    "website": "andrewsanders.com",
    "company": {
      "name": "Operations",
      "catchPhrase": "Excellence in service",
      "bs": "solve problems"
    }
  },
  {
    "id": 74,
    "name": "Sharon Gray",
    "username": "sharon_gray",
    "email": "sharon.gray@financegroupinc.com",
    "address": {
      "street": "294 Johnson St",
      "suite": "Suite 671",
      "city": "Surprise",
      "zipcode": "78943-5088",
      "geo": {
        "lat": "-69.4867",
        "lng": "176.9463"
      }
    },
    "phone": "555-7426",
    "website": "sharongray.com",
    "company": {
      "name": "Finance Group Inc",
      "catchPhrase": "Connecting people",
      "bs": "accelerate growth"
    }
  },
  {
    "id": 75,
    "name": "Sarah Morgan",
    "username": "sarah_morgan",
    "email": "sarah.morgan@logistics.com",
    "address": {
      "street": "8729 Third St",
      "suite": "Apt. 525",
      "city": "San Angelo",
      "zipcode": "54091-6303",
      "geo": {
        "lat": "27.2538",
        "lng": "152.7162"
      }
    },
    "phone": "555-1840",
    "website": "sarahmorgan.com",
    "company": {
      "name": "Logistics",
      "catchPhrase": "Customer satisfaction",
      "bs": "revolutionize digital experiences"
    }
  },
  {
    "id": 76,
    "name": "Dorothy Miller",
    "username": "dorothy_miller",
    "email": "dorothy.miller@logistics.com",
    "address": {
      "street": "3172 Tenth St",
      "suite": "Apt. 975",
      "city": "Burlington",
      "zipcode": "71586-3110",
      "geo": {
        "lat": "75.7889",
        "lng": "95.8883"
      }
    },
    "phone": "555-5976",
    "website": "dorothymiller.com",
    "company": {
      "name": "Logistics",
      "catchPhrase": "Delivering results",
      "bs": "enable success"
    }
  },
  {
    "id": 77,
    "name": "Carol Martinez",
    "username": "carol_martinez",
    "email": "carol.martinez@transportation.com",
    "address": {
      "street": "2009 Wright St",
      "suite": "Suite 95",
      "city": "Tamarac",
      "zipcode": "21256-8318",
      "geo": {
        "lat": "-42.5288",
        "lng": "-129.3368"
      }
    },
    "phone": "555-7366",
    "website": "carolmartinez.com",
    "company": {
      "name": "Transportation",
      "catchPhrase": "Driving success",
      "bs": "achieve goals"
    }
  },
  {
    "id": 78,
    "name": "Stephen Sanders",
    "username": "stephen_sanders",
    "email": "stephen.sanders@healthcaresolutions.com",
    "address": {
      "street": "1696 Sixth St",
      "suite": "Suite 385",
      "city": "Irvine",
      "zipcode": "67014-9105",
      "geo": {
        "lat": "-77.0408",
        "lng": "110.0511"
      }
    },
    "phone": "555-3989",
    "website": "stephensanders.com",
    "company": {
      "name": "Healthcare Solutions",
      "catchPhrase": "Enhancing experiences",
      "bs": "transform industries"
    }
  },
  {
    "id": 79,
    "name": "Sharon Sanchez",
    "username": "sharon_sanchez",
    "email": "sharon.sanchez@projectmanagement.com",
    "address": {
      "street": "295 Taylor St",
      "suite": "Apt. 484",
      "city": "Lexington",
      "zipcode": "51227-7831",
      "geo": {
        "lat": "-62.7834",
        "lng": "149.7469"
      }
    },
    "phone": "555-5513",
    "website": "sharonsanchez.com",
    "company": {
      "name": "Project Management",
      "catchPhrase": "Innovation through technology",
      "bs": "achieve goals"
    }
  },
  {
    "id": 80,
    "name": "Ashley Chavez",
    "username": "ashley_chavez",
    "email": "ashley.chavez@salesdynamics.com",
    "address": {
      "street": "5395 Young Ave",
      "suite": "Suite 409",
      "city": "Bowling Green",
      "zipcode": "65759-8086",
      "geo": {
        "lat": "27.9848",
        "lng": "117.3878"
      }
    },
    "phone": "555-4111",
    "website": "ashleychavez.com",
    "company": {
      "name": "Sales Dynamics",
      "catchPhrase": "Excellence in service",
      "bs": "enhance customer engagement"
    }
  },
  {
    "id": 81,
    "name": "Donna Cruz",
    "username": "donna_cruz",
    "email": "donna.cruz@sportsmanagement.com",
    "address": {
      "street": "2016 Kelly St",
      "suite": "Suite 910",
      "city": "Durham",
      "zipcode": "83077-4144",
      "geo": {
        "lat": "20.3123",
        "lng": "-153.6009"
      }
    },
    "phone": "555-8713",
    "website": "donnacruz.com",
    "company": {
      "name": "Sports Management",
      "catchPhrase": "Making a difference",
      "bs": "build relationships"
    }
  },
  {
    "id": 82,
    "name": "Ryan White",
    "username": "ryan_white",
    "email": "ryan.white@food&beverage.com",
    "address": {
      "street": "7960 Lee Ave",
      "suite": "Apt. 691",
      "city": "North Las Vegas",
      "zipcode": "39849-8298",
      "geo": {
        "lat": "-79.5645",
        "lng": "-69.7353"
      }
    },
    "phone": "555-6041",
    "website": "ryanwhite.com",
    "company": {
      "name": "Food & Beverage",
      "catchPhrase": "Leading the industry",
      "bs": "enable success"
    }
  },
  {
    "id": 83,
    "name": "Sandra Wilson",
    "username": "sandra_wilson",
    "email": "sandra.wilson@financegroupinc.com",
    "address": {
      "street": "2560 Cooper Ave",
      "suite": "Apt. 42",
      "city": "Austin",
      "zipcode": "30915-8861",
      "geo": {
        "lat": "-63.6951",
        "lng": "117.5338"
      }
    },
    "phone": "555-4827",
    "website": "sandrawilson.com",
    "company": {
      "name": "Finance Group Inc",
      "catchPhrase": "Simplifying complexity",
      "bs": "optimize business processes"
    }
  },
  {
    "id": 84,
    "name": "Betty Gutierrez",
    "username": "betty_gutierrez",
    "email": "betty.gutierrez@designstudiopro.com",
    "address": {
      "street": "9264 Seventh St",
      "suite": "Suite 593",
      "city": "Valdosta",
      "zipcode": "19841-9408",
      "geo": {
        "lat": "22.3635",
        "lng": "85.6646"
      }
    },
    "phone": "555-5788",
    "website": "bettygutierrez.com",
    "company": {
      "name": "Design Studio Pro",
      "catchPhrase": "Connecting people",
      "bs": "improve efficiency"
    }
  },
  {
    "id": 85,
    "name": "Ronald Carter",
    "username": "ronald_carter",
    "email": "ronald.carter@blockchainsolutions.com",
    "address": {
      "street": "443 Jackson St",
      "suite": "Suite 339",
      "city": "The Colony",
      "zipcode": "59521-1708",
      "geo": {
        "lat": "5.7681",
        "lng": "-99.5118"
      }
    },
    "phone": "555-4346",
    "website": "ronaldcarter.com",
    "company": {
      "name": "Blockchain Solutions",
      "catchPhrase": "Quality first",
      "bs": "revolutionize digital experiences"
    }
  },
  {
    "id": 86,
    "name": "Nancy Gomez",
    "username": "nancy_gomez",
    "email": "nancy.gomez@productmanagement.com",
    "address": {
      "street": "4987 Walker St",
      "suite": "Apt. 262",
      "city": "Hawthorne",
      "zipcode": "36389-8417",
      "geo": {
        "lat": "-69.3781",
        "lng": "79.6231"
      }
    },
    "phone": "555-1867",
    "website": "nancygomez.com",
    "company": {
      "name": "Product Management",
      "catchPhrase": "Leading the industry",
      "bs": "accelerate growth"
    }
  },
  {
    "id": 87,
    "name": "Stephen Mitchell",
    "username": "stephen_mitchell",
    "email": "stephen.mitchell@cloudservices.com",
    "address": {
      "street": "9649 Green St",
      "suite": "Suite 443",
      "city": "Downey",
      "zipcode": "57914-6395",
      "geo": {
        "lat": "-69.1583",
        "lng": "45.2690"
      }
    },
    "phone": "555-3874",
    "website": "stephenmitchell.com",
    "company": {
      "name": "Cloud Services",
      "catchPhrase": "Delivering results",
      "bs": "revolutionize digital experiences"
    }
  },
  {
    "id": 88,
    "name": "Laura Nelson",
    "username": "laura_nelson",
    "email": "laura.nelson@realestate.com",
    "address": {
      "street": "6640 Maple Ave",
      "suite": "Suite 604",
      "city": "Naperville",
      "zipcode": "15316-8443",
      "geo": {
        "lat": "-3.4122",
        "lng": "-57.4972"
      }
    },
    "phone": "555-4149",
    "website": "lauranelson.com",
    "company": {
      "name": "Real Estate",
      "catchPhrase": "Making a difference",
      "bs": "build relationships"
    }
  },
  {
    "id": 89,
    "name": "Helen Hill",
    "username": "helen_hill",
    "email": "helen.hill@customersuccess.com",
    "address": {
      "street": "4632 Barnes Ave",
      "suite": "Apt. 857",
      "city": "Lubbock",
      "zipcode": "31514-7735",
      "geo": {
        "lat": "-7.8608",
        "lng": "-94.0090"
      }
    },
    "phone": "555-6033",
    "website": "helenhill.com",
    "company": {
      "name": "Customer Success",
      "catchPhrase": "Customer satisfaction",
      "bs": "enhance customer engagement"
    }
  },
  {
    "id": 90,
    "name": "Karen Morris",
    "username": "karen_morris",
    "email": "karen.morris@construction.com",
    "address": {
      "street": "984 Ward St",
      "suite": "Apt. 961",
      "city": "McAllen",
      "zipcode": "74902-9945",
      "geo": {
        "lat": "28.3767",
        "lng": "-45.9612"
      }
    },
    "phone": "555-9768",
    "website": "karenmorris.com",
    "company": {
      "name": "Construction",
      "catchPhrase": "Creating solutions",
      "bs": "build relationships"
    }
  },
  {
    "id": 91,
    "name": "Sarah Bennett",
    "username": "sarah_bennett",
    "email": "sarah.bennett@businessintelligence.com",
    "address": {
      "street": "4958 Pine St",
      "suite": "Apt. 903",
      "city": "Clearwater",
      "zipcode": "17215-8731",
      "geo": {
        "lat": "17.6160",
        "lng": "-80.7017"
      }
    },
    "phone": "555-9702",
    "website": "sarahbennett.com",
    "company": {
      "name": "Business Intelligence",
      "catchPhrase": "Innovation through technology",
      "bs": "drive innovation"
    }
  },
  {
    "id": 92,
    "name": "Brian Lopez",
    "username": "brian_lopez",
    "email": "brian.lopez@healthcaresolutions.com",
    "address": {
      "street": "4230 Coleman St",
      "suite": "Apt. 886",
      "city": "Mesquite",
      "zipcode": "12971-1219",
      "geo": {
        "lat": "18.5422",
        "lng": "40.2387"
      }
    },
    "phone": "555-7704",
    "website": "brianlopez.com",
    "company": {
      "name": "Healthcare Solutions",
      "catchPhrase": "Excellence in service",
      "bs": "solve problems"
    }
  },
  {
    "id": 93,
    "name": "Daniel Cook",
    "username": "daniel_cook",
    "email": "daniel.cook@fashion.com",
    "address": {
      "street": "7176 Ninth St",
      "suite": "Apt. 77",
      "city": "Springfield",
      "zipcode": "49475-5660",
      "geo": {
        "lat": "-17.4420",
        "lng": "-26.8987"
      }
    },
    "phone": "555-5396",
    "website": "danielcook.com",
    "company": {
      "name": "Fashion",
      "catchPhrase": "Customer satisfaction",
      "bs": "improve efficiency"
    }
  },
  {
    "id": 94,
    "name": "Jack Kelly",
    "username": "jack_kelly",
    "email": "jack.kelly@legalservices.com",
    "address": {
      "street": "9575 Washington St",
      "suite": "Suite 604",
      "city": "Fort Collins",
      "zipcode": "57166-4506",
      "geo": {
        "lat": "34.8545",
        "lng": "59.5478"
      }
    },
    "phone": "555-1626",
    "website": "jackkelly.com",
    "company": {
      "name": "Legal Services",
      "catchPhrase": "Enhancing experiences",
      "bs": "enhance customer engagement"
    }
  },
  {
    "id": 95,
    "name": "Jack Jackson",
    "username": "jack_jackson",
    "email": "jack.jackson@marketingmasters.com",
    "address": {
      "street": "3135 Young Ave",
      "suite": "Apt. 963",
      "city": "Wilmington",
      "zipcode": "55501-3857",
      "geo": {
        "lat": "87.4998",
        "lng": "17.8871"
      }
    },
    "phone": "555-5067",
    "website": "jackjackson.com",
    "company": {
      "name": "Marketing Masters",
      "catchPhrase": "Building the future",
      "bs": "improve efficiency"
    }
  },
  {
    "id": 96,
    "name": "William Davis",
    "username": "william_davis",
    "email": "william.davis@environmentalservices.com",
    "address": {
      "street": "1770 Fourth St",
      "suite": "Apt. 118",
      "city": "San Angelo",
      "zipcode": "82244-4920",
      "geo": {
        "lat": "65.0167",
        "lng": "148.4416"
      }
    },
    "phone": "555-6786",
    "website": "williamdavis.com",
    "company": {
      "name": "Environmental Services",
      "catchPhrase": "Enhancing experiences",
      "bs": "build relationships"
    }
  },
  {
    "id": 97,
    "name": "Stephen Wright",
    "username": "stephen_wright",
    "email": "stephen.wright@marketingmasters.com",
    "address": {
      "street": "5229 Elm St",
      "suite": "Suite 270",
      "city": "Hesperia",
      "zipcode": "58248-4513",
      "geo": {
        "lat": "27.2294",
        "lng": "84.8466"
      }
    },
    "phone": "555-5899",
    "website": "stephenwright.com",
    "company": {
      "name": "Marketing Masters",
      "catchPhrase": "Customer satisfaction",
      "bs": "drive innovation"
    }
  },
  {
    "id": 98,
    "name": "Joshua Murphy",
    "username": "joshua_murphy",
    "email": "joshua.murphy@realestate.com",
    "address": {
      "street": "164 Lincoln Ave",
      "suite": "Apt. 449",
      "city": "Concord",
      "zipcode": "39293-1948",
      "geo": {
        "lat": "-65.6407",
        "lng": "-145.3027"
      }
    },
    "phone": "555-8795",
    "website": "joshuamurphy.com",
    "company": {
      "name": "Real Estate",
      "catchPhrase": "Driving success",
      "bs": "transform industries"
    }
  },
  {
    "id": 99,
    "name": "Stephen Gomez",
    "username": "stephen_gomez",
    "email": "stephen.gomez@beauty.com",
    "address": {
      "street": "2011 Russell Ave",
      "suite": "Suite 971",
      "city": "Mentor",
      "zipcode": "29760-1254",
      "geo": {
        "lat": "-47.2024",
        "lng": "135.1644"
      }
    },
    "phone": "555-3709",
    "website": "stephengomez.com",
    "company": {
      "name": "Beauty",
      "catchPhrase": "Empowering businesses",
      "bs": "revolutionize digital experiences"
    }
  },
  {
    "id": 100,
    "name": "Sharon Evans",
    "username": "sharon_evans",
    "email": "sharon.evans@marketingmasters.com",
    "address": {
      "street": "3189 Thompson St",
      "suite": "Suite 980",
      "city": "Port St. Lucie",
      "zipcode": "72639-2992",
      "geo": {
        "lat": "-52.1277",
        "lng": "159.9159"
      }
    },
    "phone": "555-1279",
    "website": "sharonevans.com",
    "company": {
      "name": "Marketing Masters",
      "catchPhrase": "Creating solutions",
      "bs": "enhance customer engagement"
    }
  },
  {
    "id": 101,
    "name": "Donna Gonzalez",
    "username": "donna_gonzalez",
    "email": "donna.gonzalez@operations.com",
    "address": {
      "street": "2295 Roberts St",
      "suite": "Suite 373",
      "city": "Fremont",
      "zipcode": "15228-4596",
      "geo": {
        "lat": "40.7877",
        "lng": "13.3893"
      }
    },
    "phone": "555-5536",
    "website": "donnagonzalez.com",
    "company": {
      "name": "Operations",
      "catchPhrase": "Enhancing experiences",
      "bs": "streamline operations"
    }
  },
  {
    "id": 102,
    "name": "Sarah Brooks",
    "username": "sarah_brooks",
    "email": "sarah.brooks@ui/uxdesign.com",
    "address": {
      "street": "1036 Fourth St",
      "suite": "Apt. 446",
      "city": "Kansas City",
      "zipcode": "38089-4457",
      "geo": {
        "lat": "53.2003",
        "lng": "169.1045"
      }
    },
    "phone": "555-5140",
    "website": "sarahbrooks.com",
    "company": {
      "name": "UI/UX Design",
      "catchPhrase": "Customer satisfaction",
      "bs": "achieve goals"
    }
  },
  {
    "id": 103,
    "name": "Sarah Scott",
    "username": "sarah_scott",
    "email": "sarah.scott@environmentalservices.com",
    "address": {
      "street": "3090 White Ave",
      "suite": "Suite 709",
      "city": "Yonkers",
      "zipcode": "96326-3032",
      "geo": {
        "lat": "75.2370",
        "lng": "-110.6786"
      }
    },
    "phone": "555-6600",
    "website": "sarahscott.com",
    "company": {
      "name": "Environmental Services",
      "catchPhrase": "Excellence in service",
      "bs": "deliver excellence"
    }
  },
  {
    "id": 104,
    "name": "Sarah Phillips",
    "username": "sarah_phillips",
    "email": "sarah.phillips@retailsolutions.com",
    "address": {
      "street": "7596 Martinez St",
      "suite": "Suite 960",
      "city": "Mesa",
      "zipcode": "73507-6758",
      "geo": {
        "lat": "41.1279",
        "lng": "118.3772"
      }
    },
    "phone": "555-3032",
    "website": "sarahphillips.com",
    "company": {
      "name": "Retail Solutions",
      "catchPhrase": "Excellence in service",
      "bs": "enhance customer engagement"
    }
  },
  {
    "id": 105,
    "name": "Lisa Collins",
    "username": "lisa_collins",
    "email": "lisa.collins@marketingmasters.com",
    "address": {
      "street": "5371 King Ave",
      "suite": "Apt. 35",
      "city": "Murrieta",
      "zipcode": "25130-4331",
      "geo": {
        "lat": "-29.5568",
        "lng": "-118.7913"
      }
    },
    "phone": "555-7484",
    "website": "lisacollins.com",
    "company": {
      "name": "Marketing Masters",
      "catchPhrase": "Empowering businesses",
      "bs": "streamline operations"
    }
  },
  {
    "id": 106,
    "name": "David Diaz",
    "username": "david_diaz",
    "email": "david.diaz@wellness.com",
    "address": {
      "street": "2792 Perry St",
      "suite": "Suite 452",
      "city": "Berkeley",
      "zipcode": "96888-7351",
      "geo": {
        "lat": "54.0163",
        "lng": "-71.2548"
      }
    },
    "phone": "555-8921",
    "website": "daviddiaz.com",
    "company": {
      "name": "Wellness",
      "catchPhrase": "Making a difference",
      "bs": "achieve goals"
    }
  },
  {
    "id": 107,
    "name": "Laura Ruiz",
    "username": "laura_ruiz",
    "email": "laura.ruiz@airesearch.com",
    "address": {
      "street": "8739 Robinson Ave",
      "suite": "Apt. 557",
      "city": "Peoria",
      "zipcode": "95414-7908",
      "geo": {
        "lat": "61.0503",
        "lng": "125.3492"
      }
    },
    "phone": "555-9033",
    "website": "lauraruiz.com",
    "company": {
      "name": "AI Research",
      "catchPhrase": "Quality first",
      "bs": "revolutionize digital experiences"
    }
  },
  {
    "id": 108,
    "name": "Matthew Kim",
    "username": "matthew_kim",
    "email": "matthew.kim@webdevelopment.com",
    "address": {
      "street": "4003 Murphy St",
      "suite": "Apt. 177",
      "city": "Aurora",
      "zipcode": "14715-5584",
      "geo": {
        "lat": "-38.9404",
        "lng": "12.5954"
      }
    },
    "phone": "555-7750",
    "website": "matthewkim.com",
    "company": {
      "name": "Web Development",
      "catchPhrase": "Quality first",
      "bs": "drive innovation"
    }
  },
  {
    "id": 109,
    "name": "John Wood",
    "username": "john_wood",
    "email": "john.wood@marketingmasters.com",
    "address": {
      "street": "3651 Main St",
      "suite": "Apt. 986",
      "city": "Topeka",
      "zipcode": "16835-1106",
      "geo": {
        "lat": "52.2689",
        "lng": "-3.3335"
      }
    },
    "phone": "555-8055",
    "website": "johnwood.com",
    "company": {
      "name": "Marketing Masters",
      "catchPhrase": "Connecting people",
      "bs": "solve problems"
    }
  },
  {
    "id": 110,
    "name": "Tyler Stewart",
    "username": "tyler_stewart",
    "email": "tyler.stewart@manufacturing.com",
    "address": {
      "street": "472 Parker St",
      "suite": "Apt. 174",
      "city": "Murrieta",
      "zipcode": "77598-3425",
      "geo": {
        "lat": "-61.9354",
        "lng": "-126.8753"
      }
    },
    "phone": "555-9620",
    "website": "tylerstewart.com",
    "company": {
      "name": "Manufacturing",
      "catchPhrase": "Innovation through technology",
      "bs": "revolutionize digital experiences"
    }
  },
  {
    "id": 111,
    "name": "Brandon Murphy",
    "username": "brandon_murphy",
    "email": "brandon.murphy@techcorpsolutions.com",
    "address": {
      "street": "157 Roberts St",
      "suite": "Apt. 465",
      "city": "Greenville",
      "zipcode": "44461-1533",
      "geo": {
        "lat": "-52.5764",
        "lng": "-23.3168"
      }
    },
    "phone": "555-4013",
    "website": "brandonmurphy.com",
    "company": {
      "name": "TechCorp Solutions",
      "catchPhrase": "Driving success",
      "bs": "create value"
    }
  },
  {
    "id": 112,
    "name": "Dorothy Castillo",
    "username": "dorothy_castillo",
    "email": "dorothy.castillo@devopsexperts.com",
    "address": {
      "street": "7416 Wood St",
      "suite": "Apt. 455",
      "city": "Vacaville",
      "zipcode": "21819-6757",
      "geo": {
        "lat": "2.9006",
        "lng": "143.7604"
      }
    },
    "phone": "555-2301",
    "website": "dorothycastillo.com",
    "company": {
      "name": "DevOps Experts",
      "catchPhrase": "Connecting people",
      "bs": "drive innovation"
    }
  },
  {
    "id": 113,
    "name": "Benjamin Baker",
    "username": "benjamin_baker",
    "email": "benjamin.baker@projectmanagement.com",
    "address": {
      "street": "6443 Barnes Ave",
      "suite": "Apt. 170",
      "city": "Bowling Green",
      "zipcode": "33695-4213",
      "geo": {
        "lat": "-64.1704",
        "lng": "-125.1256"
      }
    },
    "phone": "555-1627",
    "website": "benjaminbaker.com",
    "company": {
      "name": "Project Management",
      "catchPhrase": "Driving success",
      "bs": "achieve goals"
    }
  },
  {
    "id": 114,
    "name": "Christopher Roberts",
    "username": "christopher_roberts",
    "email": "christopher.roberts@mediaproduction.com",
    "address": {
      "street": "4077 Torres Ave",
      "suite": "Suite 244",
      "city": "Frisco",
      "zipcode": "59306-1933",
      "geo": {
        "lat": "-11.7398",
        "lng": "142.3851"
      }
    },
    "phone": "555-2146",
    "website": "christopherroberts.com",
    "company": {
      "name": "Media Production",
      "catchPhrase": "Enhancing experiences",
      "bs": "achieve goals"
    }
  },
  {
    "id": 115,
    "name": "Alexander Jackson",
    "username": "alexander_jackson",
    "email": "alexander.jackson@transportation.com",
    "address": {
      "street": "2022 Mitchell St",
      "suite": "Suite 677",
      "city": "Columbus",
      "zipcode": "80918-5470",
      "geo": {
        "lat": "-12.3694",
        "lng": "67.3438"
      }
    },
    "phone": "555-1280",
    "website": "alexanderjackson.com",
    "company": {
      "name": "Transportation",
      "catchPhrase": "Creating solutions",
      "bs": "drive innovation"
    }
  }
];
module.exports = userData;