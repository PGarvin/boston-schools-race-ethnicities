(function() {
    // global variables

    var dropdown = document.getElementById('dropdown');

    var data2017 = [{
            "Name": "Boston - Another Course To College",
            "Code": 00350541,
            "Black": 45.1,
            "Asian": 4,
            "Hispanic": 40.2,
            "White": 8,
            "Native American": 0,
            "Pacific Islander": 0.4,
            "Multi-race": 2.2
        },
        {
            "Name": "Boston - Baldwin Early Learning Center",
            "Code": 00350003,
            "Black": 9.2,
            "Asian": 28.9,
            "Hispanic": 31.2,
            "White": 25.4,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 5.2
        },
        {
            "Name": "Boston - Beethoven",
            "Code": 00350021,
            "Black": 27.8,
            "Asian": 2.5,
            "Hispanic": 25.9,
            "White": 40.4,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 3.4
        },
        {
            "Name": "Boston - Blackstone",
            "Code": 00350390,
            "Black": 25.4,
            "Asian": 1.7,
            "Hispanic": 66.8,
            "White": 3.5,
            "Native American": 0.2,
            "Pacific Islander": 0.2,
            "Multi-race": 2.3
        },
        {
            "Name": "Boston - Boston Adult Academy",
            "Code": 00350548,
            "Black": 51.3,
            "Asian": 5.2,
            "Hispanic": 40.3,
            "White": 1.9,
            "Native American": 0,
            "Pacific Islander": 0.6,
            "Multi-race": 0.6
        },
        {
            "Name": "Boston - Boston Arts Academy",
            "Code": 00350546,
            "Black": 40.3,
            "Asian": 4.1,
            "Hispanic": 37.5,
            "White": 13.2,
            "Native American": 0.4,
            "Pacific Islander": 0.2,
            "Multi-race": 4.3
        },
        {
            "Name": "Boston - Boston Collaborative High School",
            "Code": 00350755,
            "Black": 44,
            "Asian": 3.8,
            "Hispanic": 45.1,
            "White": 5.5,
            "Native American": 0.5,
            "Pacific Islander": 0,
            "Multi-race": 1.1
        },
        {
            "Name": "Boston - Boston Community Leadership Academy",
            "Code": 00350558,
            "Black": 34.8,
            "Asian": 5.3,
            "Hispanic": 52.7,
            "White": 5.1,
            "Native American": 0.4,
            "Pacific Islander": 0,
            "Multi-race": 1.7
        },
        {
            "Name": "Boston - Boston International High School",
            "Code": 00350507,
            "Black": 43.4,
            "Asian": 4.1,
            "Hispanic": 48.4,
            "White": 2.5,
            "Native American": 0,
            "Pacific Islander": 0.8,
            "Multi-race": 0.8
        },
        {
            "Name": "Boston - Boston Latin",
            "Code": 00350560,
            "Black": 7.9,
            "Asian": 29.1,
            "Hispanic": 12.7,
            "White": 45.9,
            "Native American": 0.1,
            "Pacific Islander": 0.2,
            "Multi-race": 4
        },
        {
            "Name": "Boston - Boston Latin Academy",
            "Code": 00350545,
            "Black": 21.8,
            "Asian": 21.8,
            "Hispanic": 23.5,
            "White": 29.4,
            "Native American": 0.3,
            "Pacific Islander": 0.2,
            "Multi-race": 3.1
        },
        {
            "Name": "Boston - Boston Teachers Union School",
            "Code": 00350012,
            "Black": 25.4,
            "Asian": 1.7,
            "Hispanic": 37.6,
            "White": 31.4,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 3.8
        },
        {
            "Name": "Boston - Brighton High",
            "Code": 00350505,
            "Black": 42.2,
            "Asian": 4,
            "Hispanic": 47.7,
            "White": 4.4,
            "Native American": 0.7,
            "Pacific Islander": 0.1,
            "Multi-race": 0.9
        },
        {
            "Name": "Boston - Carter Developmental Center",
            "Code": 00350036,
            "Black": 51.7,
            "Asian": 10.3,
            "Hispanic": 20.7,
            "White": 13.8,
            "Native American": 0,
            "Pacific Islander": 3.4,
            "Multi-race": 0
        },
        {
            "Name": "Boston - Charles H Taylor",
            "Code": 00350054,
            "Black": 76.5,
            "Asian": 0.8,
            "Hispanic": 18.8,
            "White": 0.6,
            "Native American": 0.9,
            "Pacific Islander": 0,
            "Multi-race": 2.5
        },
        {
            "Name": "Boston - Charles Sumner",
            "Code": 00350052,
            "Black": 19.4,
            "Asian": 1.7,
            "Hispanic": 59.9,
            "White": 13.9,
            "Native American": 0,
            "Pacific Islander": 0.2,
            "Multi-race": 4.8
        },
        {
            "Name": "Boston - Charlestown High",
            "Code": 00350515,
            "Black": 32.6,
            "Asian": 13.2,
            "Hispanic": 48.4,
            "White": 4.7,
            "Native American": 0.1,
            "Pacific Islander": 0,
            "Multi-race": 1.1
        },
        {
            "Name": "Boston - Clarence R Edwards Middle",
            "Code": 00350430,
            "Black": 13.1,
            "Asian": 7.5,
            "Hispanic": 70.3,
            "White": 6.9,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 2.3
        },
        {
            "Name": "Boston - Community Academy",
            "Code": 00350518,
            "Black": 41.8,
            "Asian": 0,
            "Hispanic": 21.5,
            "White": 35.4,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 1.3
        },
        {
            "Name": "Boston - Community Academy of Science and Health",
            "Code": 00350581,
            "Black": 66.8,
            "Asian": 3.1,
            "Hispanic": 25.4,
            "White": 2.1,
            "Native American": 0.3,
            "Pacific Islander": 0,
            "Multi-race": 2.3
        },
        {
            "Name": "Boston - Condon K-8",
            "Code": 00350146,
            "Black": 35,
            "Asian": 7.4,
            "Hispanic": 32.9,
            "White": 20.3,
            "Native American": 0.1,
            "Pacific Islander": 0.3,
            "Multi-race": 3.9
        },
        {
            "Name": "Boston - Curley K-8 School",
            "Code": 00350020,
            "Black": 19.3,
            "Asian": 2.4,
            "Hispanic": 51.4,
            "White": 21.3,
            "Native American": 0.1,
            "Pacific Islander": 0.1,
            "Multi-race": 5.4
        },
        {
            "Name": "Boston - Curtis Guild",
            "Code": 00350062,
            "Black": 1,
            "Asian": 0.7,
            "Hispanic": 80,
            "White": 18,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 0.3
        },
        {
            "Name": "Boston - Dante Alighieri Montessori School",
            "Code": 00350066,
            "Black": 2.2,
            "Asian": 1.1,
            "Hispanic": 56.5,
            "White": 35.9,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 4.3
        },
        {
            "Name": "Boston - David A Ellis",
            "Code": 00350072,
            "Black": 39.6,
            "Asian": 0,
            "Hispanic": 54.9,
            "White": 2.6,
            "Native American": 0.7,
            "Pacific Islander": 0,
            "Multi-race": 2.2
        },
        {
            "Name": "Boston - Dearborn",
            "Code": 00350074,
            "Black": 66.7,
            "Asian": 0.3,
            "Hispanic": 28,
            "White": 1.1,
            "Native American": 0.3,
            "Pacific Islander": 0.6,
            "Multi-race": 3.1
        },
        {
            "Name": "Boston - Dennis C Haley",
            "Code": 00350077,
            "Black": 30.6,
            "Asian": 1.1,
            "Hispanic": 37.6,
            "White": 24.6,
            "Native American": 0.2,
            "Pacific Islander": 0.2,
            "Multi-race": 5.6
        },
        {
            "Name": "Boston - Donald Mckay",
            "Code": 00350080,
            "Black": 2.1,
            "Asian": 0.5,
            "Hispanic": 88.9,
            "White": 7.5,
            "Native American": 0.1,
            "Pacific Islander": 0,
            "Multi-race": 0.9
        },
        {
            "Name": "Boston - Dorchester Academy",
            "Code": 00350651,
            "Black": 69,
            "Asian": 2.4,
            "Hispanic": 19,
            "White": 9.5,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 0
        },
        {
            "Name": "Boston - Dr. Catherine Ellison-Rosa Parks Early Ed School",
            "Code": 00350008,
            "Black": 51.9,
            "Asian": 1.1,
            "Hispanic": 42.9,
            "White": 2.1,
            "Native American": 0.5,
            "Pacific Islander": 0,
            "Multi-race": 1.6
        },
        {
            "Name": "Boston - Dr. William Henderson Lower",
            "Code": 00350266,
            "Black": 31.6,
            "Asian": 14.6,
            "Hispanic": 16,
            "White": 33.5,
            "Native American": 0,
            "Pacific Islander": 0.5,
            "Multi-race": 3.8
        },
        {
            "Name": "Boston - Dr. William Henderson Upper",
            "Code": 00350426,
            "Black": 41.4,
            "Asian": 7.1,
            "Hispanic": 25.4,
            "White": 22.8,
            "Native American": 0.3,
            "Pacific Islander": 0,
            "Multi-race": 3
        },
        {
            "Name": "Boston - East Boston Early Childhood Center",
            "Code": 00350009,
            "Black": 9.6,
            "Asian": 2.5,
            "Hispanic": 59.9,
            "White": 25.4,
            "Native American": 0,
            "Pacific Islander": 0.5,
            "Multi-race": 2
        },
        {
            "Name": "Boston - East Boston High",
            "Code": 00350530,
            "Black": 7,
            "Asian": 1.6,
            "Hispanic": 78.8,
            "White": 11.1,
            "Native American": 0.4,
            "Pacific Islander": 0,
            "Multi-race": 1.2
        },
        {
            "Name": "Boston - Edison K-8",
            "Code": 00350375,
            "Black": 19.8,
            "Asian": 16.5,
            "Hispanic": 45.5,
            "White": 14,
            "Native American": 1.4,
            "Pacific Islander": 0.2,
            "Multi-race": 2.5
        },
        {
            "Name": "Boston - Edward Everett",
            "Code": 00350088,
            "Black": 41.5,
            "Asian": 18.4,
            "Hispanic": 30.5,
            "White": 3.7,
            "Native American": 0.4,
            "Pacific Islander": 0,
            "Multi-race": 5.5
        },
        {
            "Name": "Boston - ELC - West Zone",
            "Code": 00350006,
            "Black": 28.7,
            "Asian": 7,
            "Hispanic": 38.3,
            "White": 21.7,
            "Native American": 0.9,
            "Pacific Islander": 0,
            "Multi-race": 3.5
        },
        {
            "Name": "Boston - Eliot Elementary",
            "Code": 00350096,
            "Black": 7.4,
            "Asian": 9.3,
            "Hispanic": 17.2,
            "White": 59.4,
            "Native American": 0.2,
            "Pacific Islander": 0.2,
            "Multi-race": 6.5
        },
        {
            "Name": "Boston - Ellis Mendell",
            "Code": 00350100,
            "Black": 22.8,
            "Asian": 0.7,
            "Hispanic": 31.8,
            "White": 36,
            "Native American": 0.4,
            "Pacific Islander": 0,
            "Multi-race": 8.2
        },
        {
            "Name": "Boston - Excel High School",
            "Code": 00350522,
            "Black": 37.3,
            "Asian": 23,
            "Hispanic": 30.5,
            "White": 7.3,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 1.8
        },
        {
            "Name": "Boston - Fenway High School",
            "Code": 00350540,
            "Black": 31,
            "Asian": 3.3,
            "Hispanic": 59.9,
            "White": 4.1,
            "Native American": 0,
            "Pacific Islander": 0.3,
            "Multi-race": 1.4
        },
        {
            "Name": "Boston - Franklin D Roosevelt",
            "Code": 00350116,
            "Black": 37.1,
            "Asian": 1.5,
            "Hispanic": 39.7,
            "White": 17.9,
            "Native American": 0.4,
            "Pacific Islander": 0.2,
            "Multi-race": 3.1
        },
        {
            "Name": "Boston - Gardner Pilot Academy",
            "Code": 00350326,
            "Black": 11.7,
            "Asian": 4.5,
            "Hispanic": 65.6,
            "White": 13.2,
            "Native American": 0,
            "Pacific Islander": 0.2,
            "Multi-race": 4.7
        },
        {
            "Name": "Boston - George H Conley",
            "Code": 00350122,
            "Black": 36.8,
            "Asian": 3.3,
            "Hispanic": 40.1,
            "White": 16.5,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 3.3
        },
        {
            "Name": "Boston - Greater Egleston Community High School",
            "Code": 00350543,
            "Black": 36.2,
            "Asian": 0,
            "Hispanic": 60,
            "White": 1,
            "Native American": 1,
            "Pacific Islander": 0,
            "Multi-race": 1.9
        },
        {
            "Name": "Boston - Harvard-Kent",
            "Code": 00350200,
            "Black": 23.5,
            "Asian": 27.1,
            "Hispanic": 33.4,
            "White": 12.7,
            "Native American": 0.2,
            "Pacific Islander": 0.2,
            "Multi-race": 3
        },
        {
            "Name": "Boston - Haynes Early Education Center",
            "Code": 00350010,
            "Black": 49.5,
            "Asian": 4.2,
            "Hispanic": 38.7,
            "White": 2.8,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 4.7
        },
        {
            "Name": "Boston - Henry Grew",
            "Code": 00350135,
            "Black": 40.9,
            "Asian": 2,
            "Hispanic": 41.3,
            "White": 10.2,
            "Native American": 0,
            "Pacific Islander": 0.4,
            "Multi-race": 5.1
        },
        {
            "Name": "Boston - Higginson",
            "Code": 00350015,
            "Black": 37.4,
            "Asian": 0.6,
            "Hispanic": 57.9,
            "White": 1.2,
            "Native American": 0.6,
            "Pacific Islander": 0,
            "Multi-race": 2.3
        },
        {
            "Name": "Boston - Higginson/Lewis K-8",
            "Code": 00350377,
            "Black": 49.7,
            "Asian": 0.3,
            "Hispanic": 42.5,
            "White": 1.6,
            "Native American": 0.3,
            "Pacific Islander": 0,
            "Multi-race": 5.5
        },
        {
            "Name": "Boston - Horace Mann School for the Deaf",
            "Code": 00350750,
            "Black": 33.3,
            "Asian": 4.8,
            "Hispanic": 47.6,
            "White": 10.7,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 3.6
        },
        {
            "Name": "Boston - Hugh Roe O'Donnell",
            "Code": 00350141,
            "Black": 1.6,
            "Asian": 2,
            "Hispanic": 89.9,
            "White": 5.3,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 1.2
        },
        {
            "Name": "Boston - Jackson Mann",
            "Code": 00350013,
            "Black": 37.5,
            "Asian": 11.6,
            "Hispanic": 39.9,
            "White": 8.1,
            "Native American": 0.3,
            "Pacific Islander": 0,
            "Multi-race": 2.6
        },
        {
            "Name": "Boston - James J Chittick",
            "Code": 00350154,
            "Black": 64.4,
            "Asian": 1.3,
            "Hispanic": 26.8,
            "White": 2.9,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 4.6
        },
        {
            "Name": "Boston - James Otis",
            "Code": 00350156,
            "Black": 4.4,
            "Asian": 2,
            "Hispanic": 68.9,
            "White": 23.2,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 1.5
        },
        {
            "Name": "Boston - James P Timilty Middle",
            "Code": 00350485,
            "Black": 30.8,
            "Asian": 0.6,
            "Hispanic": 64.4,
            "White": 1.5,
            "Native American": 0,
            "Pacific Islander": 0.6,
            "Multi-race": 2.1
        },
        {
            "Name": "Boston - James W Hennigan",
            "Code": 00350153,
            "Black": 28.5,
            "Asian": 2.6,
            "Hispanic": 63.1,
            "White": 4.1,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 1.7
        },
        {
            "Name": "Boston - Jeremiah E Burke High",
            "Code": 00350525,
            "Black": 71,
            "Asian": 0.6,
            "Hispanic": 24.4,
            "White": 1.9,
            "Native American": 0.2,
            "Pacific Islander": 0.2,
            "Multi-race": 1.7
        },
        {
            "Name": "Boston - John D Philbrick",
            "Code": 00350172,
            "Black": 47.2,
            "Asian": 1.2,
            "Hispanic": 32.5,
            "White": 17.2,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 1.8
        },
        {
            "Name": "Boston - John F Kennedy",
            "Code": 00350166,
            "Black": 18.1,
            "Asian": 1.8,
            "Hispanic": 71.7,
            "White": 6.4,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 2
        },
        {
            "Name": "Boston - John W McCormack",
            "Code": 00350179,
            "Black": 29.1,
            "Asian": 4.9,
            "Hispanic": 58.8,
            "White": 4.9,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 2.4
        },
        {
            "Name": "Boston - John Winthrop",
            "Code": 00350180,
            "Black": 59.3,
            "Asian": 1.8,
            "Hispanic": 33.3,
            "White": 1.8,
            "Native American": 0.3,
            "Pacific Islander": 1.2,
            "Multi-race": 2.1
        },
        {
            "Name": "Boston - Joseph J Hurley",
            "Code": 00350182,
            "Black": 6.9,
            "Asian": 1.1,
            "Hispanic": 68.9,
            "White": 20.3,
            "Native American": 0.3,
            "Pacific Islander": 0,
            "Multi-race": 2.5
        },
        {
            "Name": "Boston - Joseph Lee",
            "Code": 00350183,
            "Black": 54.8,
            "Asian": 5.7,
            "Hispanic": 27.7,
            "White": 5.4,
            "Native American": 0.2,
            "Pacific Islander": 0.3,
            "Multi-race": 5.9
        },
        {
            "Name": "Boston - Joseph P Manning",
            "Code": 00350184,
            "Black": 20.4,
            "Asian": 3.9,
            "Hispanic": 27,
            "White": 40.1,
            "Native American": 0,
            "Pacific Islander": 0.7,
            "Multi-race": 7.9
        },
        {
            "Name": "Boston - Joseph P Tynan",
            "Code": 00350181,
            "Black": 39.1,
            "Asian": 9.4,
            "Hispanic": 27,
            "White": 20.2,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 4.3
        },
        {
            "Name": "Boston - Josiah Quincy",
            "Code": 00350286,
            "Black": 14.7,
            "Asian": 58.5,
            "Hispanic": 12.1,
            "White": 10.8,
            "Native American": 0.1,
            "Pacific Islander": 0,
            "Multi-race": 3.7
        },
        {
            "Name": "Boston - Joyce Kilmer",
            "Code": 00350190,
            "Black": 15.2,
            "Asian": 8.6,
            "Hispanic": 19.5,
            "White": 51.3,
            "Native American": 0,
            "Pacific Islander": 0.2,
            "Multi-race": 5.2
        },
        {
            "Name": "Boston - King K-8",
            "Code": 00350376,
            "Black": 61.2,
            "Asian": 0.6,
            "Hispanic": 31.2,
            "White": 2.9,
            "Native American": 0.2,
            "Pacific Islander": 0.2,
            "Multi-race": 3.7
        },
        {
            "Name": "Boston - Lee Academy",
            "Code": 00350001,
            "Black": 52.5,
            "Asian": 7.6,
            "Hispanic": 27.8,
            "White": 6.3,
            "Native American": 0.9,
            "Pacific Islander": 0.4,
            "Multi-race": 4.5
        },
        {
            "Name": "Boston - Lilla G. Frederick Middle School",
            "Code": 00350383,
            "Black": 44.1,
            "Asian": 7.9,
            "Hispanic": 43.9,
            "White": 1,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 3
        },
        {
            "Name": "Boston - Lyndon",
            "Code": 00350262,
            "Black": 8.9,
            "Asian": 2.2,
            "Hispanic": 29.6,
            "White": 55.5,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 3.8
        },
        {
            "Name": "Boston - Lyon K-8",
            "Code": 00350004,
            "Black": 20.6,
            "Asian": 9.9,
            "Hispanic": 32.8,
            "White": 29,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 7.6
        },
        {
            "Name": "Boston - Lyon Upper 9-12",
            "Code": 00350655,
            "Black": 20.2,
            "Asian": 6.5,
            "Hispanic": 35.5,
            "White": 30.6,
            "Native American": 0.8,
            "Pacific Islander": 0,
            "Multi-race": 6.5
        },
        {
            "Name": "Boston - Madison Park High",
            "Code": 00350537,
            "Black": 36.7,
            "Asian": 1.3,
            "Hispanic": 57.5,
            "White": 2,
            "Native American": 0.2,
            "Pacific Islander": 0.2,
            "Multi-race": 2.1
        },
        {
            "Name": "Boston - Manassah E Bradley",
            "Code": 00350215,
            "Black": 4.1,
            "Asian": 6.4,
            "Hispanic": 52.2,
            "White": 34.6,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 2.7
        },
        {
            "Name": "Boston - Margarita Muniz Academy",
            "Code": 00350549,
            "Black": 2.3,
            "Asian": 0,
            "Hispanic": 96.3,
            "White": 1,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 0.3
        },
        {
            "Name": "Boston - Mario Umana Academy",
            "Code": 00350656,
            "Black": 3.2,
            "Asian": 2.3,
            "Hispanic": 87.3,
            "White": 6.6,
            "Native American": 0,
            "Pacific Islander": 0.1,
            "Multi-race": 0.6
        },
        {
            "Name": "Boston - Mather",
            "Code": 00350227,
            "Black": 38.7,
            "Asian": 32.6,
            "Hispanic": 16.3,
            "White": 5.9,
            "Native American": 0.5,
            "Pacific Islander": 0,
            "Multi-race": 6.1
        },
        {
            "Name": "Boston - Mattahunt Elementary School",
            "Code": 00350016,
            "Black": 65.2,
            "Asian": 0.3,
            "Hispanic": 26.2,
            "White": 5.9,
            "Native American": 0.7,
            "Pacific Islander": 0,
            "Multi-race": 1.7
        },
        {
            "Name": "Boston - Maurice J Tobin",
            "Code": 00350229,
            "Black": 32.4,
            "Asian": 1.2,
            "Hispanic": 61.1,
            "White": 2.3,
            "Native American": 0.2,
            "Pacific Islander": 0.2,
            "Multi-race": 2.6
        },
        {
            "Name": "Boston - Michael J Perkins",
            "Code": 00350231,
            "Black": 42.7,
            "Asian": 2.8,
            "Hispanic": 39.9,
            "White": 9.6,
            "Native American": 0.9,
            "Pacific Islander": 0,
            "Multi-race": 4.1
        },
        {
            "Name": "Boston - Mildred Avenue K-8",
            "Code": 00350378,
            "Black": 67.5,
            "Asian": 0.9,
            "Hispanic": 25.8,
            "White": 2,
            "Native American": 1.5,
            "Pacific Islander": 0,
            "Multi-race": 2.4
        },
        {
            "Name": "Boston - Mission Hill School",
            "Code": 00350382,
            "Black": 23.2,
            "Asian": 0.8,
            "Hispanic": 35.7,
            "White": 34,
            "Native American": 0.4,
            "Pacific Islander": 0.4,
            "Multi-race": 5.4
        },
        {
            "Name": "Boston - Mozart",
            "Code": 00350237,
            "Black": 24,
            "Asian": 3.9,
            "Hispanic": 24,
            "White": 39.7,
            "Native American": 1.1,
            "Pacific Islander": 0,
            "Multi-race": 7.3
        },
        {
            "Name": "Boston - Nathan Hale",
            "Code": 00350243,
            "Black": 49.4,
            "Asian": 6.3,
            "Hispanic": 31.6,
            "White": 6.3,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 6.3
        },
        {
            "Name": "Boston - New Mission High School",
            "Code": 00350542,
            "Black": 59.9,
            "Asian": 1,
            "Hispanic": 35.2,
            "White": 2.3,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 1.5
        },
        {
            "Name": "Boston - O W Holmes",
            "Code": 00350138,
            "Black": 58.8,
            "Asian": 3.2,
            "Hispanic": 28.8,
            "White": 2.9,
            "Native American": 0,
            "Pacific Islander": 0.6,
            "Multi-race": 5.8
        },
        {
            "Name": "Boston - O'Bryant School Math/Science",
            "Code": 00350575,
            "Black": 33.2,
            "Asian": 21.2,
            "Hispanic": 32.5,
            "White": 10.3,
            "Native American": 0.3,
            "Pacific Islander": 0.2,
            "Multi-race": 2.3
        },
        {
            "Name": "Boston - Oliver Hazard Perry",
            "Code": 00350255,
            "Black": 21.4,
            "Asian": 0.9,
            "Hispanic": 14.5,
            "White": 60.5,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 2.7
        },
        {
            "Name": "Boston - Orchard Gardens",
            "Code": 00350257,
            "Black": 50.9,
            "Asian": 1.3,
            "Hispanic": 42.3,
            "White": 1.9,
            "Native American": 0.8,
            "Pacific Islander": 0.4,
            "Multi-race": 2.3
        },
        {
            "Name": "Boston - Patrick J Kennedy",
            "Code": 00350264,
            "Black": 2.6,
            "Asian": 2.6,
            "Hispanic": 88.5,
            "White": 5.9,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 0.3
        },
        {
            "Name": "Boston - Paul A Dever",
            "Code": 00350268,
            "Black": 25.3,
            "Asian": 6.2,
            "Hispanic": 61,
            "White": 5.1,
            "Native American": 0.6,
            "Pacific Islander": 0.3,
            "Multi-race": 1.7
        },
        {
            "Name": "Boston - Pauline Agassiz Shaw Elementary School",
            "Code": 00350014,
            "Black": 64.5,
            "Asian": 2.3,
            "Hispanic": 24.6,
            "White": 2.7,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 5.9
        },
        {
            "Name": "Boston - Phineas Bates",
            "Code": 00350278,
            "Black": 31.7,
            "Asian": 5.7,
            "Hispanic": 37.4,
            "White": 21.8,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 3.4
        },
        {
            "Name": "Boston - Quincy Upper School",
            "Code": 00350565,
            "Black": 21.3,
            "Asian": 48.1,
            "Hispanic": 22.9,
            "White": 4.9,
            "Native American": 0.2,
            "Pacific Islander": 0,
            "Multi-race": 2.6
        },
        {
            "Name": "Boston - Rafael Hernandez",
            "Code": 00350691,
            "Black": 3.1,
            "Asian": 0.3,
            "Hispanic": 88.4,
            "White": 6.2,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 2.1
        },
        {
            "Name": "Boston - Richard J Murphy",
            "Code": 00350240,
            "Black": 18.4,
            "Asian": 41.9,
            "Hispanic": 21.6,
            "White": 14.3,
            "Native American": 0.5,
            "Pacific Islander": 0.3,
            "Multi-race": 3
        },
        {
            "Name": "Boston - Roger Clap",
            "Code": 00350298,
            "Black": 38.2,
            "Asian": 5.1,
            "Hispanic": 31.2,
            "White": 22.9,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 2.5
        },
        {
            "Name": "Boston - Samuel Adams",
            "Code": 00350302,
            "Black": 4.1,
            "Asian": 1.4,
            "Hispanic": 75.6,
            "White": 17.9,
            "Native American": 0.3,
            "Pacific Islander": 0,
            "Multi-race": 0.7
        },
        {
            "Name": "Boston - Samuel W Mason",
            "Code": 00350304,
            "Black": 48.3,
            "Asian": 2.1,
            "Hispanic": 34.7,
            "White": 6.2,
            "Native American": 2.1,
            "Pacific Islander": 0.8,
            "Multi-race": 5.8
        },
        {
            "Name": "Boston - Sarah Greenwood",
            "Code": 00350308,
            "Black": 23.6,
            "Asian": 0.2,
            "Hispanic": 72.9,
            "White": 0.7,
            "Native American": 0,
            "Pacific Islander": 0.2,
            "Multi-race": 2.2
        },
        {
            "Name": "Boston - Snowden International School at Copley",
            "Code": 00350690,
            "Black": 34,
            "Asian": 6.5,
            "Hispanic": 49.5,
            "White": 6.3,
            "Native American": 0.5,
            "Pacific Islander": 0.7,
            "Multi-race": 2.5
        },
        {
            "Name": "Boston - TechBoston Academy",
            "Code": 00350657,
            "Black": 64.9,
            "Asian": 3.3,
            "Hispanic": 26.3,
            "White": 2,
            "Native American": 0.3,
            "Pacific Islander": 0.2,
            "Multi-race": 3.1
        },
        {
            "Name": "Boston - The English High",
            "Code": 00350535,
            "Black": 41.7,
            "Asian": 1.5,
            "Hispanic": 54.9,
            "White": 1.3,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 0.6
        },
        {
            "Name": "Boston - Thomas J Kenny",
            "Code": 00350328,
            "Black": 36.9,
            "Asian": 15.4,
            "Hispanic": 22.5,
            "White": 20,
            "Native American": 0.3,
            "Pacific Islander": 0,
            "Multi-race": 4.9
        },
        {
            "Name": "Boston - UP Academy Holland",
            "Code": 00350167,
            "Black": 44.5,
            "Asian": 6.7,
            "Hispanic": 43.4,
            "White": 1.7,
            "Native American": 0.3,
            "Pacific Islander": 0,
            "Multi-race": 3.4
        },
        {
            "Name": "Boston - Urban Science Academy",
            "Code": 00350579,
            "Black": 51.3,
            "Asian": 0,
            "Hispanic": 39.3,
            "White": 6.4,
            "Native American": 0.5,
            "Pacific Islander": 0,
            "Multi-race": 2.6
        },
        {
            "Name": "Boston - Warren-Prescott",
            "Code": 00350346,
            "Black": 12.1,
            "Asian": 5.3,
            "Hispanic": 26.9,
            "White": 51,
            "Native American": 0,
            "Pacific Islander": 0.2,
            "Multi-race": 4.5
        },
        {
            "Name": "Boston - Washington Irving Middle",
            "Code": 00350445,
            "Black": 42.4,
            "Asian": 1.6,
            "Hispanic": 47,
            "White": 5.9,
            "Native American": 0.9,
            "Pacific Islander": 0,
            "Multi-race": 2.2
        },
        {
            "Name": "Boston - West Roxbury Academy",
            "Code": 00350658,
            "Black": 49.9,
            "Asian": 2.7,
            "Hispanic": 37.9,
            "White": 6.7,
            "Native American": 0.4,
            "Pacific Islander": 0.4,
            "Multi-race": 1.9
        },
        {
            "Name": "Boston - William E Russell",
            "Code": 00350366,
            "Black": 31.9,
            "Asian": 13.2,
            "Hispanic": 49.5,
            "White": 2.5,
            "Native American": 0.7,
            "Pacific Islander": 0.2,
            "Multi-race": 2
        },
        {
            "Name": "Boston - William Ellery Channing",
            "Code": 00350360,
            "Black": 49.1,
            "Asian": 2.3,
            "Hispanic": 39.4,
            "White": 6,
            "Native American": 0,
            "Pacific Islander": 0.5,
            "Multi-race": 2.8
        },
        {
            "Name": "Boston - William H Ohrenberger",
            "Code": 00350258,
            "Black": 28.2,
            "Asian": 4,
            "Hispanic": 41.4,
            "White": 23.1,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 3.2
        },
        {
            "Name": "Boston - William McKinley",
            "Code": 00350363,
            "Black": 53.8,
            "Asian": 1.7,
            "Hispanic": 34.9,
            "White": 6.5,
            "Native American": 0.6,
            "Pacific Islander": 0,
            "Multi-race": 2.5
        },
        {
            "Name": "Boston - William Monroe Trotter",
            "Code": 00350370,
            "Black": 57.5,
            "Asian": 0.8,
            "Hispanic": 34.3,
            "White": 2.5,
            "Native American": 0,
            "Pacific Islander": 0.8,
            "Multi-race": 4.2
        },
        {
            "Name": "Boston - Winship Elementary",
            "Code": 00350374,
            "Black": 17.2,
            "Asian": 14.5,
            "Hispanic": 32.6,
            "White": 29.9,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 5.9
        },
        {
            "Name": "Boston - Young Achievers",
            "Code": 00350380,
            "Black": 50.6,
            "Asian": 0,
            "Hispanic": 45.8,
            "White": 1.2,
            "Native American": 0.2,
            "Pacific Islander": 0,
            "Multi-race": 2.1
        },
        {
            "Name": "Boston Day and Evening Academy Charter (District) - Boston Day and Evening Academy Charter School",
            "Code": 04240505,
            "Black": 45,
            "Asian": 1.2,
            "Hispanic": 43.6,
            "White": 5.4,
            "Native American": 0.5,
            "Pacific Islander": 0,
            "Multi-race": 4.2
        },
        {
            "Name": "Boston Green Academy Horace Mann Charter School (District) - Boston Green Academy Horace Mann Charter School",
            "Code": 04110305,
            "Black": 50.3,
            "Asian": 2.3,
            "Hispanic": 37.6,
            "White": 7.2,
            "Native American": 0.4,
            "Pacific Islander": 0,
            "Multi-race": 2.1
        },
        {
            "Name": "Dudley Street Neighborhood Charter School (District) - Dudley Street Neighborhood Charter School",
            "Code": 04070405,
            "Black": 62.3,
            "Asian": 0,
            "Hispanic": 35.9,
            "White": 0.7,
            "Native American": 0,
            "Pacific Islander": 0,
            "Multi-race": 1.1
        },
        {
            "Name": "Edward M. Kennedy Academy for Health Careers (Horace Mann Charter) (District) - Edward M. Kennedy Academy for Health Careers (Horace Mann Charter School)",
            "Code": 04520505,
            "Black": 42.4,
            "Asian": 1.8,
            "Hispanic": 48.7,
            "White": 3.9,
            "Native American": 0.3,
            "Pacific Islander": 0,
            "Multi-race": 2.9
        },
        {
            "Name": "UP Academy Charter School of Boston (District) - UP Academy Charter School of Boston",
            "Code": 04800405,
            "Black": 45.4,
            "Asian": 6.6,
            "Hispanic": 41.2,
            "White": 3.8,
            "Native American": 0.2,
            "Pacific Islander": 0.6,
            "Multi-race": 2.2
        },
        {
            "Name": "UP Academy Charter School of Dorchester (District) - UP Academy Charter School of Dorchester",
            "Code": 35050405,
            "Black": 54,
            "Asian": 2,
            "Hispanic": 40.3,
            "White": 1.2,
            "Native American": 0.4,
            "Pacific Islander": 0,
            "Multi-race": 2
        }
    ];

    var data1997 = [{
            "Name": "BOSTON - AGASSIZ",
            "Code": 00350007,
            "Black": 22.7,
            "Asian": 1,
            "Hispanic": 68.2,
            "White": 7.7,
            "Native American": 0.4
        },
        {
            "Name": "BOSTON - ALEXANDER HAMILTON",
            "Code": 00350011,
            "Black": 42,
            "Asian": 30.8,
            "Hispanic": 15.2,
            "White": 11.6,
            "Native American": 0.4
        },
        {
            "Name": "BOSTON - ANOTHER COURSE TO COLLEGE",
            "Code": 00350541,
            "Black": 38.5,
            "Asian": 11,
            "Hispanic": 4.6,
            "White": 45,
            "Native American": 0.9
        },
        {
            "Name": "BOSTON - BEETHOVEN",
            "Code": 00350021,
            "Black": 48.5,
            "Asian": 5.2,
            "Hispanic": 15.8,
            "White": 30.3,
            "Native American": 0.3
        },
        {
            "Name": "BOSTON - BLACKSTONE",
            "Code": 00350390,
            "Black": 26.5,
            "Asian": 0.6,
            "Hispanic": 71,
            "White": 1.5,
            "Native American": 0.4
        },
        {
            "Name": "BOSTON - BOSTON HIGH SCHOOL",
            "Code": 00350650,
            "Black": 56.5,
            "Asian": 3.3,
            "Hispanic": 26.6,
            "White": 13.2,
            "Native American": 0.4
        },
        {
            "Name": "BOSTON - BOSTON LATIN",
            "Code": 00350560,
            "Black": 19.4,
            "Asian": 20.2,
            "Hispanic": 9.6,
            "White": 50.6,
            "Native American": 0.1
        },
        {
            "Name": "BOSTON - BOSTON LATIN ACADEMY",
            "Code": 00350545,
            "Black": 29.4,
            "Asian": 19.4,
            "Hispanic": 6.7,
            "White": 44.2,
            "Native American": 0.3
        },
        {
            "Name": "BOSTON - BRIGHTON HIGH",
            "Code": 00350505,
            "Black": 47.1,
            "Asian": 10.4,
            "Hispanic": 34.9,
            "White": 7.4,
            "Native American": 0.3
        },
        {
            "Name": "BOSTON - CARTER DEVELOP DAY CARE",
            "Code": 00350036,
            "Black": 57.9,
            "Asian": 5.3,
            "Hispanic": 36.8,
            "White": 0,
            "Native American": 0
        },
        {
            "Name": "BOSTON - CHARLES H TAYLOR",
            "Code": 00350054,
            "Black": 87.4,
            "Asian": 2,
            "Hispanic": 4.2,
            "White": 5.8,
            "Native American": 0.5
        },
        {
            "Name": "BOSTON - CHARLES SUMNER",
            "Code": 00350052,
            "Black": 36.9,
            "Asian": 2.6,
            "Hispanic": 44.6,
            "White": 15.7,
            "Native American": 0.2
        },
        {
            "Name": "BOSTON - CHARLESTOWN HIGH",
            "Code": 00350515,
            "Black": 35.5,
            "Asian": 21.7,
            "Hispanic": 28.7,
            "White": 13.7,
            "Native American": 0.4
        },
        {
            "Name": "BOSTON - CLARENCE R EDWARDS MIDDLE",
            "Code": 00350430,
            "Black": 35.8,
            "Asian": 19.8,
            "Hispanic": 22,
            "White": 21.8,
            "Native American": 0.6
        },
        {
            "Name": "BOSTON - CURTIS GUILD",
            "Code": 00350062,
            "Black": 19.3,
            "Asian": 29.9,
            "Hispanic": 14.4,
            "White": 36.4,
            "Native American": 0
        },
        {
            "Name": "BOSTON - DANTE ALIGHIERI",
            "Code": 00350066,
            "Black": 18.5,
            "Asian": 8.4,
            "Hispanic": 40.4,
            "White": 32.6,
            "Native American": 0
        },
        {
            "Name": "BOSTON - DAVID A ELLIS",
            "Code": 00350072,
            "Black": 43,
            "Asian": 0.7,
            "Hispanic": 54.8,
            "White": 1.3,
            "Native American": 0.2
        },
        {
            "Name": "BOSTON - DEARBORN",
            "Code": 00350074,
            "Black": 73.8,
            "Asian": 2.9,
            "Hispanic": 19.8,
            "White": 3.3,
            "Native American": 0.2
        },
        {
            "Name": "BOSTON - DENNIS C HALEY",
            "Code": 00350077,
            "Black": 73.9,
            "Asian": 0.7,
            "Hispanic": 18.6,
            "White": 6.5,
            "Native American": 0.3
        },
        {
            "Name": "BOSTON - DONALD MCKAY",
            "Code": 00350080,
            "Black": 11.6,
            "Asian": 0.1,
            "Hispanic": 75,
            "White": 13.1,
            "Native American": 0.1
        },
        {
            "Name": "BOSTON - DORCHESTER HIGH",
            "Code": 00350520,
            "Black": 64.1,
            "Asian": 2.2,
            "Hispanic": 27.8,
            "White": 5.4,
            "Native American": 0.5
        },
        {
            "Name": "BOSTON - DOWNTOWN EVENING ACADEMY",
            "Code": 00350085,
            "Black": 64.7,
            "Asian": 2.5,
            "Hispanic": 26.9,
            "White": 5.9,
            "Native American": 0
        },
        {
            "Name": "BOSTON - EAST BOSTON HIGH",
            "Code": 00350530,
            "Black": 24,
            "Asian": 7.7,
            "Hispanic": 37.8,
            "White": 30.3,
            "Native American": 0.3
        },
        {
            "Name": "BOSTON - EDWARD EVERETT",
            "Code": 00350088,
            "Black": 50,
            "Asian": 14.4,
            "Hispanic": 6.4,
            "White": 28.5,
            "Native American": 0.8
        },
        {
            "Name": "BOSTON - EGLESTON COMM HIGH SCHOOL",
            "Code": 00350543,
            "Black": 50.7,
            "Asian": 0,
            "Hispanic": 44.8,
            "White": 3,
            "Native American": 1.5
        },
        {
            "Name": "BOSTON - ELC - EAST ZONE",
            "Code": 00350005,
            "Black": 65.2,
            "Asian": 2.7,
            "Hispanic": 15.5,
            "White": 14.4,
            "Native American": 2.1
        },
        {
            "Name": "BOSTON - ELC - NORTH ZONE",
            "Code": 00350003,
            "Black": 36.3,
            "Asian": 22,
            "Hispanic": 9.9,
            "White": 30.8,
            "Native American": 1.1
        },
        {
            "Name": "BOSTON - ELC - WEST ZONE",
            "Code": 00350006,
            "Black": 45.8,
            "Asian": 0,
            "Hispanic": 24.6,
            "White": 28,
            "Native American": 1.7
        },
        {
            "Name": "BOSTON - ELIHU GREENWOOD",
            "Code": 00350094,
            "Black": 69.6,
            "Asian": 1.2,
            "Hispanic": 11.6,
            "White": 16.9,
            "Native American": 0.8
        },
        {
            "Name": "BOSTON - ELIOT ELEMENTARY",
            "Code": 00350096,
            "Black": 50.4,
            "Asian": 6.1,
            "Hispanic": 28.1,
            "White": 15.4,
            "Native American": 0
        },
        {
            "Name": "BOSTON - ELLIS MENDELL",
            "Code": 00350100,
            "Black": 61.7,
            "Asian": 0.4,
            "Hispanic": 31.6,
            "White": 6.3,
            "Native American": 0
        },
        {
            "Name": "BOSTON - EMILY A FIFIELD",
            "Code": 00350102,
            "Black": 86.3,
            "Asian": 1.8,
            "Hispanic": 8.3,
            "White": 3.1,
            "Native American": 0.5
        },
        {
            "Name": "BOSTON - EXPULSION ALT SCHOOL",
            "Code": 00350580,
            "Black": 78.1,
            "Asian": 9.4,
            "Hispanic": 9.4,
            "White": 3.1,
            "Native American": 0
        },
        {
            "Name": "BOSTON - FARRAGUT",
            "Code": 00350108,
            "Black": 49.6,
            "Asian": 19.2,
            "Hispanic": 25.4,
            "White": 5.4,
            "Native American": 0.4
        },
        {
            "Name": "BOSTON - FENWAY PILOT HIGH SCHOOL",
            "Code": 00350540,
            "Black": 47.8,
            "Asian": 4.5,
            "Hispanic": 24.3,
            "White": 23.5,
            "Native American": 0
        },
        {
            "Name": "BOSTON - FRANK V THOMPSON MIDDLE",
            "Code": 00350114,
            "Black": 79.1,
            "Asian": 3.3,
            "Hispanic": 13.8,
            "White": 3.8,
            "Native American": 0
        },
        {
            "Name": "BOSTON - FRANKLIN D ROOSEVELT",
            "Code": 00350116,
            "Black": 67.6,
            "Asian": 2.5,
            "Hispanic": 8.1,
            "White": 20.7,
            "Native American": 1.1
        },
        {
            "Name": "BOSTON - GEORGE H CONLEY",
            "Code": 00350122,
            "Black": 41.7,
            "Asian": 1.2,
            "Hispanic": 20.6,
            "White": 35.6,
            "Native American": 0.8
        },
        {
            "Name": "BOSTON - GROVER CLEVELAND",
            "Code": 00350415,
            "Black": 72.8,
            "Asian": 3.1,
            "Hispanic": 16.1,
            "White": 7.6,
            "Native American": 0.4
        },
        {
            "Name": "BOSTON - HARBOR SCHOOL",
            "Code": 00350426,
            "Black": 63.2,
            "Asian": 1.8,
            "Hispanic": 17.5,
            "White": 17.5,
            "Native American": 0
        },
        {
            "Name": "BOSTON - HARRIET A BALDWIN",
            "Code": 00350129,
            "Black": 19.4,
            "Asian": 73,
            "Hispanic": 2.8,
            "White": 4.8,
            "Native American": 0
        },
        {
            "Name": "BOSTON - HARVARD-KENT",
            "Code": 00350200,
            "Black": 19.5,
            "Asian": 35.5,
            "Hispanic": 15.8,
            "White": 28.4,
            "Native American": 0.7
        },
        {
            "Name": "BOSTON - HENRY GREW",
            "Code": 00350135,
            "Black": 66.6,
            "Asian": 1.8,
            "Hispanic": 9.4,
            "White": 22,
            "Native American": 0.3
        },
        {
            "Name": "BOSTON - HENRY L HIGGINSON",
            "Code": 00350137,
            "Black": 77.4,
            "Asian": 3.5,
            "Hispanic": 15,
            "White": 3.1,
            "Native American": 0.9
        },
        {
            "Name": "BOSTON - HORACE MANN",
            "Code": 00350750,
            "Black": 36.6,
            "Asian": 6.3,
            "Hispanic": 38.4,
            "White": 17.9,
            "Native American": 0.9
        },
        {
            "Name": "BOSTON - HUGH ROE O'DONNELL",
            "Code": 00350141,
            "Black": 14.5,
            "Asian": 12.7,
            "Hispanic": 35.8,
            "White": 36.4,
            "Native American": 0.6
        },
        {
            "Name": "BOSTON - HYDE PARK HIGH SCHOOL",
            "Code": 00350550,
            "Black": 73.1,
            "Asian": 1,
            "Hispanic": 18,
            "White": 7.7,
            "Native American": 0.1
        },
        {
            "Name": "BOSTON - JACKSON MANN",
            "Code": 00350013,
            "Black": 47.9,
            "Asian": 22.1,
            "Hispanic": 17.2,
            "White": 12.8,
            "Native American": 0
        },
        {
            "Name": "BOSTON - JAMES A GARFIELD ELEM",
            "Code": 00350152,
            "Black": 45.6,
            "Asian": 10.8,
            "Hispanic": 16.3,
            "White": 27.3,
            "Native American": 0
        },
        {
            "Name": "BOSTON - JAMES CONDON ELEM",
            "Code": 00350146,
            "Black": 51.7,
            "Asian": 11.5,
            "Hispanic": 9.5,
            "White": 26.5,
            "Native American": 0.8
        },
        {
            "Name": "BOSTON - JAMES J CHITTICK",
            "Code": 00350154,
            "Black": 89.2,
            "Asian": 0.7,
            "Hispanic": 5.2,
            "White": 4.1,
            "Native American": 0.9
        },
        {
            "Name": "BOSTON - JAMES M CURLEY",
            "Code": 00350384,
            "Black": 56,
            "Asian": 2.8,
            "Hispanic": 23.2,
            "White": 18,
            "Native American": 0
        },
        {
            "Name": "BOSTON - JAMES OTIS",
            "Code": 00350156,
            "Black": 5.3,
            "Asian": 1.9,
            "Hispanic": 64.7,
            "White": 28.1,
            "Native American": 0
        },
        {
            "Name": "BOSTON - JAMES P TIMILTY MIDDLE",
            "Code": 00350485,
            "Black": 47.5,
            "Asian": 4.2,
            "Hispanic": 38.9,
            "White": 9.1,
            "Native American": 0.3
        },
        {
            "Name": "BOSTON - JAMES W HENNIGAN",
            "Code": 00350153,
            "Black": 32.6,
            "Asian": 6.8,
            "Hispanic": 43.7,
            "White": 16.8,
            "Native American": 0
        },
        {
            "Name": "BOSTON - JEREMIAH E BURKE HIGH",
            "Code": 00350525,
            "Black": 88,
            "Asian": 3,
            "Hispanic": 6.5,
            "White": 2.2,
            "Native American": 0.3
        },
        {
            "Name": "BOSTON - JOHN D PHILBRICK",
            "Code": 00350172,
            "Black": 51.6,
            "Asian": 1.9,
            "Hispanic": 23.9,
            "White": 22,
            "Native American": 0.6
        },
        {
            "Name": "BOSTON - JOHN F KENNEDY",
            "Code": 00350166,
            "Black": 24.1,
            "Asian": 0.4,
            "Hispanic": 72.3,
            "White": 3.1,
            "Native American": 0.2
        },
        {
            "Name": "BOSTON - JOHN MARSHALL",
            "Code": 00350178,
            "Black": 60.8,
            "Asian": 3.4,
            "Hispanic": 31.9,
            "White": 3.2,
            "Native American": 0.7
        },
        {
            "Name": "BOSTON - JOHN P HOLLAND",
            "Code": 00350167,
            "Black": 53.6,
            "Asian": 17.9,
            "Hispanic": 25.6,
            "White": 2.8,
            "Native American": 0.2
        },
        {
            "Name": "BOSTON - JOHN W MCCORMACK",
            "Code": 00350179,
            "Black": 50.1,
            "Asian": 4.6,
            "Hispanic": 29.9,
            "White": 15,
            "Native American": 0.3
        },
        {
            "Name": "BOSTON - JOHN WINTHROP",
            "Code": 00350180,
            "Black": 66.7,
            "Asian": 3,
            "Hispanic": 27.7,
            "White": 2.6,
            "Native American": 0
        },
        {
            "Name": "BOSTON - JOSEPH H BARNES MIDDLE",
            "Code": 00350405,
            "Black": 18.4,
            "Asian": 8.9,
            "Hispanic": 40.8,
            "White": 31.6,
            "Native American": 0.3
        },
        {
            "Name": "BOSTON - JOSEPH J HURLEY",
            "Code": 00350182,
            "Black": 29.8,
            "Asian": 0.8,
            "Hispanic": 67.8,
            "White": 1.4,
            "Native American": 0.3
        },
        {
            "Name": "BOSTON - JOSEPH LEE",
            "Code": 00350183,
            "Black": 83.5,
            "Asian": 2.8,
            "Hispanic": 6.5,
            "White": 6.5,
            "Native American": 0.7
        },
        {
            "Name": "BOSTON - JOSEPH P MANNING",
            "Code": 00350184,
            "Black": 53.9,
            "Asian": 1.1,
            "Hispanic": 25,
            "White": 18.3,
            "Native American": 1.7
        },
        {
            "Name": "BOSTON - JOSEPH P TYNAN",
            "Code": 00350181,
            "Black": 62.4,
            "Asian": 5.9,
            "Hispanic": 8.9,
            "White": 22.4,
            "Native American": 0.4
        },
        {
            "Name": "BOSTON - JOSIAH QUINCY",
            "Code": 00350286,
            "Black": 21.8,
            "Asian": 62.4,
            "Hispanic": 5.8,
            "White": 9.8,
            "Native American": 0.1
        },
        {
            "Name": "BOSTON - JOYCE KILMER",
            "Code": 00350190,
            "Black": 33.1,
            "Asian": 12.8,
            "Hispanic": 14.9,
            "White": 38.3,
            "Native American": 0.9
        },
        {
            "Name": "BOSTON - LEWIS MIDDLE SCHOOL",
            "Code": 00350455,
            "Black": 73.6,
            "Asian": 0.6,
            "Hispanic": 22.5,
            "White": 3,
            "Native American": 0.3
        },
        {
            "Name": "BOSTON - LUCY STONE",
            "Code": 00350211,
            "Black": 80.9,
            "Asian": 0.9,
            "Hispanic": 9.1,
            "White": 8.2,
            "Native American": 0.9
        },
        {
            "Name": "BOSTON - LYNDON",
            "Code": 00350262,
            "Black": 31.2,
            "Asian": 2.1,
            "Hispanic": 35.2,
            "White": 30.6,
            "Native American": 0.9
        },
        {
            "Name": "BOSTON - MADISON PARK HIGH",
            "Code": 00350537,
            "Black": 58.1,
            "Asian": 3.9,
            "Hispanic": 29.7,
            "White": 8,
            "Native American": 0.2
        },
        {
            "Name": "BOSTON - MANASSAH E BRADLEY",
            "Code": 00350215,
            "Black": 20.6,
            "Asian": 7.6,
            "Hispanic": 18.2,
            "White": 53.3,
            "Native American": 0.3
        },
        {
            "Name": "BOSTON - MARGARET FULLER",
            "Code": 00350217,
            "Black": 60.2,
            "Asian": 2,
            "Hispanic": 27.7,
            "White": 10,
            "Native American": 0
        },
        {
            "Name": "BOSTON - MARTIN LUTHER KING JR MID",
            "Code": 00350410,
            "Black": 53,
            "Asian": 3.4,
            "Hispanic": 41.3,
            "White": 1.8,
            "Native American": 0.5
        },
        {
            "Name": "BOSTON - MARY E CURLEY MIDDLE",
            "Code": 00350420,
            "Black": 34.2,
            "Asian": 1.5,
            "Hispanic": 59.3,
            "White": 4.7,
            "Native American": 0.4
        },
        {
            "Name": "BOSTON - MARY LYON",
            "Code": 00350004,
            "Black": 38.9,
            "Asian": 11.1,
            "Hispanic": 9.7,
            "White": 40.3,
            "Native American": 0
        },
        {
            "Name": "BOSTON - MATHER",
            "Code": 00350227,
            "Black": 51,
            "Asian": 30.8,
            "Hispanic": 5.9,
            "White": 11.7,
            "Native American": 0.7
        },
        {
            "Name": "BOSTON - MATTAHUNT",
            "Code": 00350226,
            "Black": 70.8,
            "Asian": 0.2,
            "Hispanic": 24.6,
            "White": 4,
            "Native American": 0.4
        },
        {
            "Name": "BOSTON - MAURICE J TOBIN",
            "Code": 00350229,
            "Black": 28.8,
            "Asian": 0.9,
            "Hispanic": 68.3,
            "White": 1.7,
            "Native American": 0.2
        },
        {
            "Name": "BOSTON - MICHAEL J PERKINS",
            "Code": 00350231,
            "Black": 40.1,
            "Asian": 16.2,
            "Hispanic": 11.4,
            "White": 31.6,
            "Native American": 0.7
        },
        {
            "Name": "BOSTON - MISSION SCHOOL",
            "Code": 00350382,
            "Black": 45.4,
            "Asian": 6.2,
            "Hispanic": 16.5,
            "White": 32,
            "Native American": 0
        },
        {
            "Name": "BOSTON - MOZART",
            "Code": 00350237,
            "Black": 50.7,
            "Asian": 0.5,
            "Hispanic": 19.2,
            "White": 29.6,
            "Native American": 0
        },
        {
            "Name": "BOSTON - MULTICULTURAL MIDDLE COLL",
            "Code": 00350542,
            "Black": 71.1,
            "Asian": 4.4,
            "Hispanic": 19.3,
            "White": 5.2,
            "Native American": 0
        },
        {
            "Name": "BOSTON - NATHAN HALE",
            "Code": 00350243,
            "Black": 86.7,
            "Asian": 1,
            "Hispanic": 11.3,
            "White": 1,
            "Native American": 0
        },
        {
            "Name": "BOSTON - O W HOLMES",
            "Code": 00350138,
            "Black": 81.3,
            "Asian": 2,
            "Hispanic": 9.8,
            "White": 6.6,
            "Native American": 0.4
        },
        {
            "Name": "BOSTON - O'BRYANT SCH MATH/SCIENCE",
            "Code": 00350575,
            "Black": 46.8,
            "Asian": 30,
            "Hispanic": 13.9,
            "White": 9.1,
            "Native American": 0.2
        },
        {
            "Name": "BOSTON - OLIVER HAZARD PERRY",
            "Code": 00350255,
            "Black": 39.4,
            "Asian": 9.3,
            "Hispanic": 10.6,
            "White": 39.4,
            "Native American": 1.4
        },
        {
            "Name": "BOSTON - PATRICK F GAVIN MIDDLE",
            "Code": 00350435,
            "Black": 45.6,
            "Asian": 14.5,
            "Hispanic": 10.3,
            "White": 28.6,
            "Native American": 1
        },
        {
            "Name": "BOSTON - PATRICK J KENNEDY",
            "Code": 00350264,
            "Black": 12.3,
            "Asian": 7.2,
            "Hispanic": 36.4,
            "White": 43.1,
            "Native American": 0.9
        },
        {
            "Name": "BOSTON - PATRICK O'HEARN",
            "Code": 00350266,
            "Black": 55.1,
            "Asian": 7.4,
            "Hispanic": 3.2,
            "White": 33.3,
            "Native American": 0.9
        },
        {
            "Name": "BOSTON - PAUL A DEVER",
            "Code": 00350268,
            "Black": 42.9,
            "Asian": 6.2,
            "Hispanic": 34.3,
            "White": 15.1,
            "Native American": 1.5
        },
        {
            "Name": "BOSTON - PAULINE AGASSIZ SHAW",
            "Code": 00350270,
            "Black": 92.2,
            "Asian": 1.1,
            "Hispanic": 3.5,
            "White": 3,
            "Native American": 0.3
        },
        {
            "Name": "BOSTON - PHINEAS BATES",
            "Code": 00350278,
            "Black": 55.3,
            "Asian": 3.4,
            "Hispanic": 20,
            "White": 21.3,
            "Native American": 0
        },
        {
            "Name": "BOSTON - PHYLLIS WHEATLEY MIDDLE",
            "Code": 00350139,
            "Black": 74.3,
            "Asian": 0.7,
            "Hispanic": 23.2,
            "White": 1.1,
            "Native American": 0.7
        },
        {
            "Name": "BOSTON - QUINCY E DICKERMAN",
            "Code": 00350284,
            "Black": 82.7,
            "Asian": 0.3,
            "Hispanic": 15.8,
            "White": 1.2,
            "Native American": 0
        },
        {
            "Name": "BOSTON - RAFAEL HERNANDEZ",
            "Code": 00350691,
            "Black": 22.3,
            "Asian": 0,
            "Hispanic": 61.9,
            "White": 15.8,
            "Native American": 0
        },
        {
            "Name": "BOSTON - RALPH WALDO EMERSON",
            "Code": 00350288,
            "Black": 83.7,
            "Asian": 0.4,
            "Hispanic": 13.6,
            "White": 1.9,
            "Native American": 0.4
        },
        {
            "Name": "BOSTON - RICHARD J MURPHY",
            "Code": 00350240,
            "Black": 66.3,
            "Asian": 9.5,
            "Hispanic": 5,
            "White": 18.6,
            "Native American": 0.6
        },
        {
            "Name": "BOSTON - ROBERT GOULD SHAW MIDDLE",
            "Code": 00350475,
            "Black": 57.1,
            "Asian": 1.1,
            "Hispanic": 22.4,
            "White": 18.9,
            "Native American": 0.5
        },
        {
            "Name": "BOSTON - ROGER CLAP",
            "Code": 00350298,
            "Black": 54.7,
            "Asian": 15.4,
            "Hispanic": 8.5,
            "White": 20.9,
            "Native American": 0.5
        },
        {
            "Name": "BOSTON - SAMUEL ADAMS",
            "Code": 00350302,
            "Black": 23.4,
            "Asian": 3.3,
            "Hispanic": 29.6,
            "White": 43.1,
            "Native American": 0.6
        },
        {
            "Name": "BOSTON - SAMUEL W MASON",
            "Code": 00350304,
            "Black": 57.1,
            "Asian": 4.2,
            "Hispanic": 21.1,
            "White": 16.1,
            "Native American": 1.5
        },
        {
            "Name": "BOSTON - SARAH GREENWOOD",
            "Code": 00350308,
            "Black": 42.7,
            "Asian": 0,
            "Hispanic": 55.8,
            "White": 1.4,
            "Native American": 0.2
        },
        {
            "Name": "BOSTON - SNOWDEN INT'L HIGH",
            "Code": 00350690,
            "Black": 54,
            "Asian": 11.7,
            "Hispanic": 20.2,
            "White": 13.7,
            "Native American": 0.4
        },
        {
            "Name": "BOSTON - SOLOMON LEWENBERG MIDDLE",
            "Code": 00350450,
            "Black": 77.3,
            "Asian": 4.2,
            "Hispanic": 9,
            "White": 9.3,
            "Native American": 0.2
        },
        {
            "Name": "BOSTON - SOUTH BOSTON HIGH",
            "Code": 00350570,
            "Black": 49.2,
            "Asian": 16,
            "Hispanic": 15.8,
            "White": 18.4,
            "Native American": 0.5
        },
        {
            "Name": "BOSTON - THE ENGLISH HIGH",
            "Code": 00350535,
            "Black": 48.4,
            "Asian": 2.4,
            "Hispanic": 38.6,
            "White": 10.2,
            "Native American": 0.4
        },
        {
            "Name": "BOSTON - THOMAS A EDISON JR HIGH",
            "Code": 00350425,
            "Black": 27.3,
            "Asian": 18.8,
            "Hispanic": 43.3,
            "White": 9.7,
            "Native American": 0.8
        },
        {
            "Name": "BOSTON - THOMAS GARDNER",
            "Code": 00350326,
            "Black": 23.7,
            "Asian": 11.2,
            "Hispanic": 50.4,
            "White": 14.4,
            "Native American": 0.2
        },
        {
            "Name": "BOSTON - THOMAS J KENNY",
            "Code": 00350328,
            "Black": 68.1,
            "Asian": 6.3,
            "Hispanic": 2.6,
            "White": 21.8,
            "Native American": 1.1
        },
        {
            "Name": "BOSTON - WARREN-PRESCOTT",
            "Code": 00350346,
            "Black": 42.5,
            "Asian": 5.2,
            "Hispanic": 16.9,
            "White": 35.1,
            "Native American": 0.2
        },
        {
            "Name": "BOSTON - WASHINGTON IRVING MIDDLE",
            "Code": 00350445,
            "Black": 39,
            "Asian": 4.4,
            "Hispanic": 35.3,
            "White": 21,
            "Native American": 0.4
        },
        {
            "Name": "BOSTON - WEST ROXBURY SCH",
            "Code": 00350573,
            "Black": 62.7,
            "Asian": 1.8,
            "Hispanic": 20.8,
            "White": 14,
            "Native American": 0.6
        },
        {
            "Name": "BOSTON - WILLIAM E RUSSELL",
            "Code": 00350366,
            "Black": 42.7,
            "Asian": 3.9,
            "Hispanic": 40.2,
            "White": 12.2,
            "Native American": 0.9
        },
        {
            "Name": "BOSTON - WILLIAM ELLERY CHANNING",
            "Code": 00350360,
            "Black": 71.7,
            "Asian": 1.3,
            "Hispanic": 10.1,
            "White": 15.9,
            "Native American": 1
        },
        {
            "Name": "BOSTON - WILLIAM H OHRENBERGER",
            "Code": 00350258,
            "Black": 26.4,
            "Asian": 2.2,
            "Hispanic": 51.3,
            "White": 19.5,
            "Native American": 0.6
        },
        {
            "Name": "BOSTON - WILLIAM H TAFT MIDDLE",
            "Code": 00350480,
            "Black": 37.3,
            "Asian": 25.9,
            "Hispanic": 21.7,
            "White": 14.6,
            "Native American": 0.4
        },
        {
            "Name": "BOSTON - WILLIAM MCKINLEY",
            "Code": 00350363,
            "Black": 68.3,
            "Asian": 0.2,
            "Hispanic": 19.1,
            "White": 11.4,
            "Native American": 0.9
        },
        {
            "Name": "BOSTON - WILLIAM MONROE TROTTER",
            "Code": 00350370,
            "Black": 82,
            "Asian": 0.7,
            "Hispanic": 6.9,
            "White": 9.7,
            "Native American": 0.8
        },
        {
            "Name": "BOSTON - WINSHIP ELEMENTARY",
            "Code": 00350374,
            "Black": 16.4,
            "Asian": 7.6,
            "Hispanic": 63.5,
            "White": 12.6,
            "Native American": 0
        },
        {
            "Name": "BOSTON - WM B ROGERS MIDDLE",
            "Code": 00350470,
            "Black": 63.2,
            "Asian": 14.6,
            "Hispanic": 8.7,
            "White": 12.2,
            "Native American": 1.4
        },
        {
            "Name": "BOSTON - WM E ENDICOTT",
            "Code": 00350362,
            "Black": 82.1,
            "Asian": 1.9,
            "Hispanic": 12.1,
            "White": 3.4,
            "Native American": 0.5
        },
        {
            "Name": "BOSTON - WOODROW WILSON MIDDLE",
            "Code": 00350490,
            "Black": 79.7,
            "Asian": 4.6,
            "Hispanic": 7.3,
            "White": 8.2,
            "Native American": 0.2
        },
        {
            "Name": "BOSTON - YOUNG ACHIEVERS",
            "Code": 00350380,
            "Black": 54.5,
            "Asian": 2.6,
            "Hispanic": 19.3,
            "White": 22.3,
            "Native American": 1.3
        }
    ];

    var array2017 = [];
    var array1997 = [];

    var categories = ["Black", "Asian", "Hispanic", "White", "Native American", "Pacific Islander", "Multi-race"];

    var div1997 = d3.select('#div1997');
    var div2017 = d3.select('#div2017');


    //The code builds the dropdown menu by looping through a for array

    for (var i = 0; i < data2017.length; i++) {
        var optionItem = document.createElement('option');
        optionItem.value = data2017[i].Code.toString();
        optionItem.text = data2017[i].Name.split(' - ')[1];
        dropdown.appendChild(optionItem);
    }

    function nWC(x) {
        var fraction;
        if (x % 1 !== 0) {
            x = Number(x).toFixed(2)
        }
        var parts = x.toString().split(".");

        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        if (parts.length !== 1) {
            fraction = true;
            parts = parts[0] + "." + parts[1];
            //parts = Number(parts);
        }

        return parts;
    }

    // called once on page load
    var init = function() {

        //This code updates charts in the main div each time the dropdown changes.

        function updateList(data, prop, chartHolder) {



            var arrayValues = [];

            for (var i in data) {
                arrayValues.push(data[i][prop]);
            }

            var largest = 96; //Math.max.apply(Math, arrayValues);

            data.sort(function(a, b) {

                var aConcat = a[prop];
                var bConcat = b[prop];

                if (aConcat > bConcat) {
                    return -1;
                } else if (aConcat < bConcat) {
                    return 1;
                } else {
                    return 0;
                }
            });



            var schoolBarCharts = chartHolder
                .selectAll('div')
                .data(data, function(d) {
                    return d
                });

            var enterDiv = schoolBarCharts.enter()
                .append("div")
                .attr("class", "row")
                .attr("id", function(d, i) {
                    return "row" + i
                });
            enterDiv.append("div")
                .attr("class", "Name")
                .text(function(d) {
                    return d.Name
                });
            enterDiv.append("div")
                .attr("class", function(d) {
                    var typeText;
                    if (d.Name !== undefined) {
                        typeText = d.Name.split(' ').join('-').toLowerCase();
                    }
                    return typeText + " Value"
                })
                .style("width", 0)
                .transition()
                .duration(1000)
                .style("width", function(d) {
                    return d[prop] * 55 / largest + "%"
                })

            enterDiv.append("div")
                .attr("class", "ValueNumber")
                .text(function(d) {
                    return nWC(d[prop]) + "%"
                });
        }


        function makeChart() {

            array2017 = [];
            array1997 = [];
            for (var i = 0; i < data2017.length; i++) {
                if (Number(data2017[i].Code) === Number(dropdown.value)) {
                    for (var j = 0; j < categories.length; j++) {

                        array2017.push({
                            "Name": categories[j]
                        });
                        array2017[j].Value = data2017[i][categories[j]];
                    }
                }
            }

            for (var i = 0; i < data1997.length; i++) {
                if (Number(data1997[i].Code) === Number(dropdown.value)) {
                    for (var j = 0; j < categories.length; j++) {
                        if (data1997[i][categories[j]] !== undefined) {
                            array1997.push({
                                "Name": categories[j]
                            });
                            array1997[j].Value = data1997[i][categories[j]];
                        }
                    }
                }
            }


            div2017.html('<div class="sub1">2017-2018 school year</div>');
            updateList(array2017, "Value", div2017);

            if (array1997.length !== 0) {
                div1997.html('<div class="sub1">1997-1998 school year</div>');
                updateList(array1997, "Value", div1997);
            } else {
                div1997.html('');
            }

            document.getElementById('header').innerHTML = dropdown.options[dropdown.selectedIndex].text;

        };

        makeChart();


        dropdown.addEventListener("change", function() {
            makeChart();

        });




    };




    // run code
    init();
})();