//Referece: YeetWords by Vera Chellgren
const months = [
  "the spring of",
  "the summer of",
  "the fall of",
  "the winter of",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const years = [
  //29years
  "2004",
  "2005",
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
  "2027",
  "2028",
  "2029",
  "2030",
  "2031",
  "2032",
]; //29 years

const origins = [
  "Syria",
  "Iraq",
  "Afghanistan",
  "Pakistan",
  "Yemen",
  "Mali",
  "Burkina Faso",
  "Niger",
  "Nigeria",
  "Chad",
  "the Central African Republic",
  "South Sudan",
  "Sudan",
  "Congo",
  "Ethiopia",
  "Mozambique",
  "Eritrea",
  "Somalia",
  "Burundi",
  "the Gambia",
  "Palestine",
];

// Source of refugee origins: https://www.forbes.com/sites/niallmccarthy/2019/06/19/the-top-origin-countries-for-refugees-in-2018-infographic/?sh=4ac95ee16cce
//https://reliefweb.int/sites/reliefweb.int/files/resources/618ae4694_0.pdf
//https://www.bbc.com/news/world-europe-44660699

const women = [
  "Olivia",
  "Emma",
  "Amelia",
  "Ava",
  "Sophia",
  "Isabella",
  "Mia",
  "Charlotte",
  "Luna",
  "Harper",
  "Evelyn",
  "Ella",
  "Gianna",
  "Nova",
  "Scarlett",
  "Aurora",
  "Sofia",
  "Mila",
  "Ellie",
  "Aria",
  "Willow",
  "Layla",
  "Violet",
  "Lily",
  "Camila",
  "Hazel",
  "Penelope",
  "Avery",
  "Nora",
  "Abigail",
  "Chloe",
  "Elena",
  "Grace",
  "Eliana",
  "Eleanor",
  "Zoey",
  "Paisley",
  "Isla",
  "Riley",
  "Emily",
  "Elizabeth",
  "Emilia",
  "Stella",
  "Ivy",
  "Everly",
  "Maya",
  "Leilani",
  "Kinsley",
  "Lucy",
  "Zoe",
  "Athena",
  "Delilah",
  "Naomi",
  "Madison",
  "Addison",
  "Everleigh",
  "Sophie",
  "Victoria",
  "Hannah",
  "Arya",
  "Autumn",
  "Alice",
  "Bella",
  "Natalie",
  "Ayla",
  "Valentina",
  "Aaliyah",
  "Audrey",
  "Skylar",
  "Rylee",
  "Raelynn",
  "Iris",
  "Eva",
  "Claire",
  "Sadie",
  "Savannah",
  "Nevaeh",
  "Leah",
  "Lillian",
  "Madelyn",
  "Hailey",
  "Melody",
  "Brooklyn",
  "Natalia",
  "Serenity",
  "Ruby",
  "Amara",
  "Kennedy",
  "Emery",
  "Sarah",
  "Maria",
  "Aubrey",
  "Gabriella",
  "Jasmine",
  "Jade",
  "Ariana",
  "Cora",
  "Brielle",
  "Adeline",
  "Freya",
  "River",
  "Piper",
  "Lyla",
  "Anna",
  "Charlie",
  "Hadley",
  "Eloise",
  "Quinn",
  "Lydia",
  "Catalina",
  "Josie",
  "Clara",
  "Kehlani",
  "Eden",
  "Peyton",
  "Julia",
  "Caroline",
  "Daisy",
  "Adalynn",
  "Liliana",
  "Oaklynn",
  "Vivian",
  "Remi",
  "Isabelle",
  "Alina",
  "Genesis",
  "Sienna",
  "Norah",
  "Sara",
  "Sage",
  "Rose",
  "Ryleigh",
  "Madeline",
  "Emersyn",
  "Millie",
  "Eliza",
  "Zuri",
  "Alani",
  "Ember",
  "Zara",
  "Laila",
  "Elliana",
  "Amaya",
  "Journee",
  "Faith",
  "Samantha",
  "Juniper",
  "Josephine",
  "Fatima",
  "Ariella",
];

const men = [
  "Noah",
  "Liam",
  "Oliver",
  "Elijah",
  "Mateo",
  "Lucas",
  "Levi",
  "James",
  "Ethan",
  "Asher",
  "Benjamin",
  "Grayson",
  "Luca",
  "Leo",
  "Aiden",
  "Ezra",
  "Sebastian",
  "Alexander",
  "Daniel",
  "Owen",
  "Jackson",
  "Mason",
  "Jack",
  "Wyatt",
  "Muhammad",
  "Gabriel",
  "Henry",
  "Gold",
  "Kai",
  "Carter",
  "Hudson",
  "William",
  "Michael",
  "Ezekiel",
  "Samuel",
  "Logan",
  "Luke",
  "Maverick",
  "Jayden",
  "David",
  "Jacob",
  "Julian",
  "Josiah",
  "Matthew",
  "Jaxon",
  "Waylon",
  "Lincoln",
  "Elias",
  "Theo",
  "John",
  "Caleb",
  "Isaiah",
  "Isaac",
  "Eli",
  "Adam",
  "Thomas",
  "Nathan",
  "Anthony",
  "Miles",
  "Joseph",
  "Theodore",
  "Jameson",
  "Ryan",
  "Cooper",
  "Kayden",
  "Santiago",
  "Adrian",
  "Greyson",
  "Roman",
  "Nolan",
  "Jace",
  "Joshua",
  "Christian",
  "Christopher",
  "Colton",
  "Landon",
  "Jeremiah",
  "Dylan",
  "Easton",
  "Myles",
  "Hunter",
  "Micah",
  "Jordan",
  "Cameron",
  "Xavier",
  "Parker",
  "Silas",
  "Weston",
  "Andrew",
  "Bennett",
  "Ian",
  "Jaxson",
  "Wesley",
  "River",
  "Charlie",
  "Zion",
  "Everett",
  "Axel",
  "Kingston",
  "Luka",
  "Ryder",
  "Declan",
  "Amir",
  "Aaron",
  "Rowan",
  "Legend",
  "Brooks",
  "Dominic",
  "Atlas",
  "Connor",
  "August",
  "Ace",
  "Lorenzo",
  "Sawyer",
  "Emmett",
  "Carson",
  "Max",
  "Braxton",
  "Enzo",
  "Walker",
  "Aakash",
  "Beau",
  "Elliot",
  "Ali",
  "Jason",
  "Giovanni",
  "Bryson",
  "Bentley",
  "Matteo",
  "Nicholas",
  "Zayden",
  "Leon",
  "Omar",
  "Leonardo",
  "Kaiden",
  "Ashton",
  "Jasper",
  "Nathaniel",
  "Ryker",
  "Jonathan",
  "Milo",
  "King",
  "Damian",
  "Amari",
  "Evan",
  "Ayden",
  "Jonah",
  "Alex",
  "Arthur",
  "Jayce",
];

// Source of 150 common male and female names: https://www.babycenter.com/baby-names/most-popular/top-baby-names-2022?startIndex=100

const femaleId = [
  // female identity
  "a mother with her child",
  "a mother with her two children",
  "a mother with her three children",
  "a mother with her four children",
  "a mom with her kid",
  "a mom with her two kids",
  "a mom with her three kids",
  "a mom with her four kids",
  "a mother carrying her child",
  "a mother carrying her two children",
  "a mother carrying her three children",
  "a mother carrying her four children",
  "a mom carrying her kid",
  "a mom carrying her two kids",
  "a mom carrying her three kids",
  "a mom carrying her four kids",
  "a mother having a baby",
  "a mother carrying a baby",
  "a mom having a baby",
  "a mom carrying a baby",
  "a pregnant lady",
  "a pregnant woman",
  "a lady who had just gotten pregnant",
  "a woman who had just gotten pregnant",
  "an expectant mother",
  "an elderly woman",
  "an elderly lady",
  "a grandma",
  "an old grandma",
  "an old woman",
  "an old lady",
  "a middle-aged woman",
  "a middle-aged lady",
  "a young girl",
  "a young lady",
  "a young woman",
  "a teenage girl",
  "a teenager",
  "an adolescent",
  "a little girl",
  "a 9-year-old girl",
  "a 10-year-old girl",
  "an 11-year-old girl",
  "a 12-year-old girl",
];

const maleId = [
  //male identity
  "a father with his son",
  "a father with his daughter",
  "a man with his son",
  "a dad with his daughter",
  "a father carrying his son",
  "a father carrying his daughter",
  "a man carrying his son",
  "a man carrying his daughter",
  "an expectant father",
  "an elderly man",
  "an elderly guy",
  "a grandpa",
  "an old grandpa",
  "an old man",
  "an old guy",
  "a middle-aged man",
  "a middle-aged guy",
  "a young boy",
  "a young guy",
  "a young man",
  "a teenage boy",
  "a teenager",
  "an adolescent",
  "a little boy",
  "a little kid",
  "a 9-year-old boy",
  "a 10-year-old boy",
  "an 11-year-old boy",
  "a 12-year-old boy",
  "a jobless guy",
  "a jobless man",
  "an unemployed man",
  "an unemployed middle-aged man",
  "a farmer",
  "a peasant",
  "a laborer",
  "a factory worker",
  "a man around 20 years old",
  "a guy around 30 years old",
  "a man around 40 years old",
  "a guy around 40 years old",
  "a man about 20 years old",
  "a guy about 30 years old",
  "a man about 40 years old",
  "a guy about 40 years old",
];

let year = [];

const timeline = [
  "This year, the Italian and Libyan governments reached a secret agreement that obliged Libya to accept African immigrants deported from Italian territories. ",
  "This year, there was a rise in the number of people living in refugee-like situations within their own countries",
  "This year, at least six people drowned in Turkey migrant boat disaster.",
  "This year, A migrant boat with 53 people on board went missing around 150 km south of Malta.",
  "This year, a migrant boat sank 70 km south of Malta and more than 70 migrants had drowned according to the survivors.",
  "This year, two boats carrying about 250 people altogether went missing near the coast of Libya.",
  "This year, a migrant boat carrying over 200 people sank near the Italian island of Lampedusa. Only 48 survivors were rescued by the Italian Coast Guard.",
  "This year, 21,300 individual asylum applications were lodged by unaccompanied or separated children, which was the highest number on record according to the UNHCR. ",
  "This year, a migrant boat carrying at least 515 people sank near Lampedusa. The Italian Coast Guard only rescued less than half of the survivors.",
  "This year, Egyptian border guards stopped an attempt by people smugglers to send 172 migrants to Italy.",
  "This year, the European Council held an emergency meeting to discuss the migrant crisis. The European Commission proposed that EU member states should take in refugees under a quota scheme. The EU also began a new operation in the southern Mediterranean to block boats smuggling migrants. The UN refugee agency reported that more than one million migrants and refugees had reached Europe by sea this year.",
  "This year, during the New Year's Eve celebrations, hundreds of sexual assaults, thefts, and at least five rapes were reported in several German cities. The majority of suspects were asylum seekers and illegal immigrants.",
  "This year, the anti-immigration Alternative for Germany (AfD) became the first nationalist party to enter the German Bundestag.",
  "This year, Italy's Interior Minister declared that his country would reject a foreign navy that had boarded refugees at sea, and urged Europe's rescue missions to take refugees away from Italy's ports.",
  "This year, the European Union recorded the lowest number of migrant arrivals in five years.",
  "This year, COVID-19 influenced worldwide. The global-scale pandemic had taken over almost all the media content.",
  "This year, the coronavirus was still affecting the world. The pandemic made the situation for migrants get worse and more difficult.",
  "This year, Russia set the war with Ukraine. Many people from Ukraine fled to the neighboring countries.",
  "This year, the improving situation of coronavirus in some parts of the world led to a rising number of refugees.",
  "This year, a migrant boat carrying more than 100 people went missing near the south of the Canary Islands.",
  "This year, unfortunately, wars happened between some countries. The economy of some countries still hadn't fully recovered from the pandemic. The famine and poverty caused more and more people to leave their home countries.",
  "This year, the number of NGOs had largely increased compared to the previous year. An increasing number of people started to be concerned about the issues of refugees. ",
  "This year, police found 36 illegal immigrants dead inside a lorry container in France.",
  "This year, more than least 20 migrants, including seven children, drowned when the migrant boats sank off the Greek island of Farmakonisi.",
  "This year, the Libyan Coast Guard arrested more than 200 people who tried to illegally cross the borders. Most of them were sold by the human traffickers including many women and children.",
  "This year, the European Council held a meeting to discuss the refugee crisis as well as proposed new policies for asylum seekers and illegal immigrants.",
  "This year, the EU and Libya agreed to a deal to tackle illegal migration. The irregular migrants arriving in Italy or Malta would be sent back to Libya if they did not apply for asylum or their claim was rejected. In return, the EU sent Libya €2.5 billion to help it host refugees and allowed Libyan citizens to travel freely into the Schengen zone.",
  "This year, hundreds of 'No Borders' activists protested in different cities of Europe. The wars, environmental pollution, famine, and unemployment still kept causing more and more people to leave their own countries.",
];
//Source of the timeline of European refugee issue: https://en.wikipedia.org/wiki/Timeline_of_the_European_migrant_crisis

const s1 = [
  //sentence1 alternatives
  "decided to start the journey of finding a better life.",
  "started the long travel of finding a new life.",
  "began a long journey to search for a new life.",
  "was finally determined to find a new life in another country.",
  "made the decision to begin the journey of finding a better life in another place.",
];

const s3 = [
  //sentence3 alternatives
  "made this determination to leave",
  "decided to leave",
  "left",
  "was determined to leave",
  "made the determination to leave",
];

const because = ["because of", "due to", "as a result of"];
const reason = [
  "the war",
  "racial persecution",
  "social persecution",
  "religious persecution",
  "political persecution",
  "environmental degradation",
  "natural disasters",
  "the violation of human rights",
  "the unemployment problem",
  "poverty",
  "food scarcity",
  "famine",
  "the poor economy",
  "the undeveloped healthcare system",
];
//Source of the reasons caused refugees: https://epimonia.com/blogs/news/biggest-causes-of-a-refugee-crisis

const s4 = [
  "knew it would be a long and difficult journey,",
  "knew the journey would be long and uncertain,",
  "understood the journey might be unpredictable and dangerous,",
  "knew it would be a dangerous and tough journey,",
  "knew it would be an uncertain and tough journey,",
  "understood the journey might be difficult and dangerous,",
];

const routes = [
  // routes of immigration
  " and across the Mediterranean Sea to ",
  " to Turkey and cross the Mediterranean Sea to ",
  " to Libya and cross the Mediterranean Sea to ",
  " to ",
  " to Morocco and go to ",
];

const destinations = [
  "Europe",
  "Italy",
  "Malta",
  "Spain",
  "Greece",
  "the Canary Islands",
  "Lampedusa",
];

let survivors = 0;
let deaths = 0;

let img;
function preload() {
  img = loadImage("Map.png");
}

function setup() {
  createCanvas(700, 600);
  image(img, 0, 0, 700, 600);
  colorMode(HSB,100);
  const people = men.concat(women);

  let p = createP("The Journeys");
  p.style("font-size", "30px");

  for (let i = 0; i < years.length; i++) {
    // Generate time
    let month = random(months);
    year[i] = years[i];

    // Generate characters
    let person = [];
    let pronoun = [];
    let origin = [];
    let identity = [];
    let gen = [];
    for (let j = 0; j < 4; j++) {
      let personNum = floor(random(people.length));
      person[j] = people[personNum];
      people.splice(personNum, 1); //remove the selected people
      //check genders
      let genderCheck = men.filter((m) => {
        let sex = match(person[j], m);
        if (sex != null) {
          return m;
        }
      });
      pronoun[j] = []; // Assign pronouns
      if (genderCheck[0] != null) {
        pronoun[j][0] = "He";
        pronoun[j][1] = "he";
        pronoun[j][2] = "his"; //Possessive Adjectives
        pronoun[j][3] = "him"; //Object Pronouns
        identity[j] = random(maleId);
      } else if (genderCheck[0] == null) {
        pronoun[j][0] = "She";
        pronoun[j][1] = "she";
        pronoun[j][2] = "her";
        pronoun[j][3] = "her";
        identity[j] = random(femaleId);
      }

      origin[j] = random(origins);

      let genIndex = {
        person: person[j],
        pronoun: pronoun[j],
        origin: origin[j],
        identity: identity[j],
      };

      gen[j] = genIndex; //characters and info
    }

    console.log(gen);
    let end;

    // Paragraph 1 Intro
    let sentence1 =
      "In " + month + " " + year[i] + ", " + gen[0].person + " " + random(s1);
    let sentence2 =
      gen[0].person +
      " was " +
      gen[0].identity +
      " from " +
      gen[0].origin +
      ".";
    let reason1 = random(reason);
    let sentence3 =
      gen[0].pronoun[0] +
      " " +
      random(s3) +
      " " +
      random(because) +
      " " +
      reason1 +
      " in " +
      gen[0].pronoun[2] +
      " " +
      random(["country", "hometown"]) +
      ".";
    let sentence4 =
      "Although " +
      gen[0].pronoun[1] +
      " " +
      random(s4) +
      " " +
      gen[0].pronoun[1] +
      random([
        " still had to do it.",
        " still had to leave the current place.",
        " still had to leave the current country.",
        " had no choice.",
        " had no other options.",
      ]);
    let route = random(routes);
    let destination = random(destinations);
    let sentence5 =
      "The journey would " +
      random(["start from", "begin from"]) +
      " " +
      gen[0].origin +
      route +
      destination +
      ".";
    createP(
      sentence1 +
        " " +
        sentence2 +
        " " +
        sentence3 +
        " " +
        sentence4 +
        " " +
        sentence5
    );

    //Paragraph 2 Timeline
    createP(timeline[i]);

    //Paragraph 3 Partners
    let sentence7 =
      "On the way to " +
      destination +
      ", " +
      gen[0].person +
      " also met some other people.";
    let sentence8 =
      gen[1].person +
      " was " +
      gen[1].identity +
      " suffering from " +
      random(reason) +
      " in " +
      gen[1].origin +
      ". ";
    let sentence9 =
      gen[2].person +
      " was " +
      gen[2].identity +
      " from " +
      gen[2].origin +
      ", who left " +
      random(because) +
      " " +
      random(reason) +
      ".";
    let sentence10 = random([
      "They decided to travel together.",
      "They became partners in the journey.",
      "The long journey was no longer lonely.",
    ]);
    createP(sentence7 + " " + sentence8 + " " + sentence9 + " " + sentence10);

    //Paragrah 5 Journey
    if (random() < 0.1) {
      //The lucky travel: the chance is pretty small
      let sentence11 =
        "After " +
        random(["several days of", "several weeks of", "around a month of"]) +
        " " +
        "travel, they " +
        random(["finally", "eventually"]) +
        " " +
        random(["arrived at", "got to", "made it to", "reached"]) +
        " " +
        random(["a small town", "a small village"]) +
        " on the coast of the Mediterranean Sea. ";
      let sentence12 = random([
        "There were also many people trying to go to Europe. ",
        "Many people were also trying to go to Europe from there. ",
      ]);
      let sentence13 =
        "They " +
        random(["planned to", "decided to", "are going to "]) +
        " use " +
        random([
          "a small rubber boat",
          "an inflated rubber boat",
          "a small wooden boat",
          "a small boat",
        ]) +
        " to cross the Mediterranean Sea. ";
      let sentence14 =
        "Without a whistle, the boat carrying " +
        floor(random(20, 40)) +
        " people quietly left the port and started to voyage. ";
      let sentence15 =
        random(["Luckily", "Fortunately"]) +
        ", after " +
        random(["a few days", "a few weeks", "one week", "two weeks"]) +
        ", they were found by " +
        random([
          "the coast guards of " + destination,
          "NGO workers from " + destination,
        ]) +
        " and finally arrived in Europe.";
      createP(
        sentence11 +
          " " +
          sentence12 +
          " " +
          sentence13 +
          " " +
          sentence14 +
          " " +
          sentence15
      );
      //End
      let sentence25 = "";
      if (
        (year[i] == "2020" &&
          month != "January" &&
          month != "February" &&
          month != "March") ||
        year[i] == "2021" ||
        year[i] == 2022 ||
        year[i] == 2023
      ) {
        sentence25 =
          "Due to the coronavirus, the rescue boats need to wait for conducting the COVID test. " +
          "The people were stuck on the boat for " +
          floor(random(2, 15)) +
          " days. " +
          "Standing on the board, " +
          gen[0].person +
          " contemplated. Some locals were protesting against accepting refugees...";
      } else {
        sentence25 =
          "In the port the boat arrived, some locals were protesting against accepting refugees. They believed the refugees damaged local tourism.";
      }
      createP(sentence25);
      console.log("end1");
      end = 1;
    } else {
      //Troubles which are more common in the journey
      // Had to change the direction
      let sentence16 =
        "After " +
        random(["several days of", "several weeks of", "around a month of"]) +
        " " +
        random(["walking", "traveling"]) +
        ", they arrived in a small town " +
        random(["close to", "near"]) +
        " the border. Everyone was " +
        random(["exhausted", "tired", "fatigued", "overtired", "weary"]) +
        ".";
      let sick = floor(random(1, 3));
      let sentence17 =
        gen[0].person +
        " tried to ask the direction, but they were told the border was closed, so they had to change to some other places. " +
        "However, " +
        gen[sick].person +
        " was getting " +
        random(["sick", "ill", "unwell", "ailing", "indisposed"]) +
        ".";
      let sickperson = gen[sick];
      gen.splice(sick, 1); // remove the sickperson -> death
      let sentence18 =
        gen[0].person +
        " and " +
        gen[1].person +
        " were both worried about " +
        sickperson.pronoun[3] +
        ", and if they could go to Europe.";
      createP(sentence16 + " " + sentence17 + " " + sentence18);

      //Paragraph 6
      let chance = random(0.9);
      console.log(chance);
      let boatChance = random();
      if (chance < 0.3) {
        //Get Lost
        let sentence19 =
          random(["Several days later", "A few weeks later", "A month later"]) +
          ", they still couldn't find the port that could go to Europe. ";
        let sentence20 =
          sickperson.person + "'s disease was becoming more and more severe.";
        let sentence21 =
          "Ultimately, they got lost in a desert without food and water. Everyone was in despair and waiting for the coming of death.";
        createP(sentence19 + " " + sentence20 + " " + sentence21);
        console.log("end2");
        end = 2;
      } else {
        if (chance >= 0.3 && chance < 0.6) {
          //The human trafficker
          let sentence19 =
            random([
              "Several days later",
              "A few weeks later",
              "A month later",
            ]) +
            ", they still couldn't find the port that could take the migrant boat. ";
          let sentence20 =
            "At this helpless point, they met a guy who claimed he could take them to Europe. " +
            gen[0].person +
            " and others were convinced by him and got in a car. ";
          let sentence21 = "";
          let sentenceB = "";
          if (boatChance >= 0.4) {
            // They might be sent on the boat or not.
            sentence21 =
              "The car drove for a long time to a very small town. The guy was revealed to be a human trafficker. They were all sold to an unknown place in an unknown country.";
            createP(sentence19 + " " + sentence20 + " " + sentence21);
            console.log("end3");
            end = 3;
          } else {
            // boatChance<0.4
            sentence21 =
              "The car drove them to a small port. The guy was a human trafficker, who put them on a boat to Europe. " +
              "It was " +
              random([
                "a small rubber boat",
                "an inflated rubber boat",
                "a small wooden boat",
                "a small boat",
              ]) +
              " carrying " +
              floor(random(20, 80)) +
              " people. " +
              "Without a whistle, the boat quietly left the port and started to voyage. ";

            sentenceB =
              "Fortunately, at an accidental moment, they found a chance to escape from the camp. It took them a few weeks to find the port and the boat to Europe. " +
              "It was " +
              random([
                "a small rubber boat",
                "an inflated rubber boat",
                "a small wooden boat",
                "a small boat",
              ]) +
              " carrying " +
              floor(random(20, 80)) +
              " people. " +
              "Without a whistle, the boat quietly left the port and started to voyage. ";
            createP(
              sentence19 + " " + sentence20 + " " + sentence21 + " " + sentenceB
            );
          }
        } else if (0.6 <= chance && chance < 0.9) {
          //The refugee camp
          let sentence19 =
            "Since the original plan didn't work, they changed to head to a port in Libya. However, when they arrived in Libya, they were arrested by the Libyan coast guards in a refugee camp.";
          let sentence20 =
            "There were many people in the refugee camp from different places. " +
            gen[2].person +
            " was " +
            gen[2].identity +
            " from " +
            gen[2].origin +
            ". ";
          let sentence21 =
            gen[2].person +
            " said without any emotion" +
            ", \" You guys shouldn't come here. It's a hell" +
            '..."';
          let victom = random(gen);
          let sentence22;
          if (victom.pronoun[0] == "He") {
            sentence22 =
              "After a few days, " +
              victom.person +
              " was beaten by the police. " +
              sickperson.person +
              " also passed away since " +
              sickperson.pronoun[2] +
              "disease was getting more and more severe but couldn't receive proper medical treatment.";
          } else if (victom.pronoun[0] == "She") {
            sentence22 =
              "After a few days, " +
              victom.person +
              " was raped by the police. " +
              sickperson.person +
              " also passed away since " +
              sickperson.pronoun[2] +
              " " +
              " disease was getting more and more severe but couldn't receive proper medical treatment. ";
          }

          let sentence23 = "";
          if (boatChance < 0.4) {
            sentence23 =
              "Fortunately, at an accidental moment, they found a chance to escape from the camp. It took them a few weeks to find the port and the boat to Europe. " +
              "It was " +
              random([
                "a small rubber boat",
                "an inflated rubber boat",
                "a small wooden boat",
                "a small boat",
              ]) +
              " carrying " +
              floor(random(20, 80)) +
              " people. " +
              "Without a whistle, the boat quietly left the port and started to voyage. ";
          } else {
            sentence23 =
              "No one knew when they couldn't get out or stayed in the refugee camp forever.";
            console.log("end4");
            end = 4;
          }
          createP(
            sentence19 +
              " " +
              sentence20 +
              " " +
              sentence21 +
              " " +
              sentence22 +
              " " +
              sentence23
          );
        }
        if (boatChance < 0.4) {
          // Get on a boat
          let sentence24;
          if (random() < 0.3) {
            //The refugees have a high chance that couldn't be rescued.
            sentence24 =
              "After a few days on the Mediterranean Sea, the boat lost its direction. The food and water were getting less and less. Everyone gradually got into despair in the tremendous and deep sea. The only thing they could do was waiting for the current and wind to determine their destiny.";
            console.log("end5");
            end = 5;
            createP(sentence24);
          } else {
            // Rescued
            sentence24 =
              "After a few days on the Mediterranean Sea, the boat lost its direction. The food and water were getting less and less. However, luckily, the boat was found by a patrolling " +
              random(["European coast guard boat", "NGO boat"]) +
              ". The people were rescued and finally arrived in Europe.";
            let sentence25 = "";
            if (
              (year[i] == "2020" &&
                month != "January" &&
                month != "February" &&
                month != "March") ||
              year[i] == "2021" ||
              year[i] == 2022 ||
              year[i] == 2023
            ) {
              sentence25 =
                "Due to the coronavirus, the rescue boats need to wait for conducting the COVID test. " +
                "The people were stuck on the boat for " +
                floor(random(2, 15)) +
                " days. " +
                "Standing on the board, " +
                gen[0].person +
                " contemplated the people on the land. Some locals were protesting against accepting refugees...";
              console.log("end7");
              end = 7;
            } else {
              sentence25 =
                " In the port the boat arrived, some locals were protesting against accepting refugees. They believed the refugees damaged local tourism.";
              console.log("end6");
              end = 6;
            }
            createP(sentence24 + " " + sentence25);
          }
        }
      }
    }
    createP("----------------------------------------------------");

    let sx, sy;
    let dx, dy;
    if (end == 1 || end == 6 || end ==7 ) { // The ending is arriving in Europe
      for (let i = 0; i < gen.length; i++) {
        let country = gen[i].origin;
        if (country == "Pakistan") {
          sx = random(630, 700);
          sy = random(240, 300);
        } else if (country == "Syria") {
          sx = random(390, 420);
          sy = random(200, 220);
        } else if (country == "Iraq") {
          sx = random(420, 460);
          sy = random(200, 220);
        } else if (country == "Afghanistan") {
          sx = random(560, 630);
          sy = random(240, 300);
        } else if (country == "Nigeria") {
          sx = random(140, 210);
          sy = random(420, 480);
        } else if (country == "Yemen") {
          sx = random(470, 500);
          sy = random(400, 430);
        } else if (country == "Mali") {
          sx = random(70, 130);
          sy = random(360, 410);
        } else if (country == "Burkina Faso") {
          sx = random(70, 130);
          sy = random(420, 440);
        } else if (country == "Niger") {
          sx = random(140, 210);
          sy = random(360, 410);
        } else if (country == "Chad") {
          sx = random(210, 280);
          sy = random(360, 410);
        } else if (country == "the Central African Republic") {
          sx = random(210, 280);
          sy = random(420, 480);
        } else if (country == "South Sudan") {
          sx = random(280, 350);
          sy = random(420, 480);
        } else if (country == "Sudan") {
          sx = random(280, 350);
          sy = random(360, 420);
        } else if (country == "Congo") {
          sx = random(210, 280);
          sy = random(480, 540);
        } else if (country == "Ethiopia") {
          sx = random(350, 420);
          sy = random(420, 480);
        } else if (country == "Mozambique") {
          sx = random(350, 420);
          sy = random(570, 600);
        } else if (country == "Eritrea") {
          sx = random(420, 440);
          sy = random(400, 440);
        } else if (country == "Somalia") {
          sx = random(490, 520);
          sy = random(460, 500);
        } else if (country == "Burundi") {
          sx = random(210, 280);
          sy = random(480, 540);
        } else if (country == "the Gambia") {
          sx = random(0, 35);
          sy = random(440, 480);
        } else if (country == "Palestine") {
          sx = random(400, 420);
          sy = random(240, 270);
        }

        if (destination == "Europe") {
          dx = random(140, 280);
          dy = random(30, 120);
        } else if (destination == "Italy") {
          dx = 210;
          dy = 140;
        } else if (destination == "Malta") {
          dx = 210;
          dy = 210;
        } else if (destination == "Spain") {
          dx = 70;
          dy = 180;
        } else if (destination == "Greece" || destination == "Lampedusa") {
          dx = 280;
          dy = 180;
        } else if (destination == "the Canary Islands") {
          dx = 10;
          dy = 160;
        }
       
        strokeWeight(4);
        stroke(100);
        noFill();
        beginShape();
        curveVertex(sx, sy);
        curveVertex(sx, sy);
        curveVertex((sx + dx + random(10,30)) / 2, (sy + dy + random(10,30)) / 2);
        curveVertex(dx, dy);
        curveVertex(dx, dy);
        endShape();
        
        noStroke();
        fill(2,80,100);
        circle(sx, sy, 12);
        circle(dx, dy, 8);

        
      }
    }
    
    if(end ==1){
      survivors +=3
    }else if(end ==2){
      deaths +=3
    }else if(end ==3){
      deaths +=3
    }else if(end ==4){
      deaths +=4
    }else if(end ==5){
      deaths +=4
    }else if(end ==6){
     survivors +=3
    }else if(end ==7){
     survivors +=3
    }
 
  }
   createP( "In these 29 years, " + survivors + " people successfully arrived in Europe, but " + deaths + " people didn't make it or passed away on the journey.")
}
