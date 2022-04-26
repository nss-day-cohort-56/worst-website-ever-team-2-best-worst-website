const database = {
    movies: [
        {
            id: 1,
            title: 'The Village',
            year: "2004",
            synopsis: "M Night Shyamalan makes another bad movie, but this time it takes place in a colonial village",
            spoiler: "The movie takes place in modern day, even though the villagers think they live in the past.  The monsters are just the village elders trying to scare the villagers into staying inside the town so they never find out about the modern world, and they reveal it halfway through the movie.  Noah dies, I don't remember how.",
        },
        {
            id: 2,
            title: "The Notebook",
            year: "2004",
            synopsis: "Ryan Gosling and Rachel McAdams fall in love in the rain",
            spoiler: "Ryan Gosling and Rachel McAdams are an old couple and she has dementia. He tells her the story of how they fell in love and they imagine that they look like Ryan Gosling and Rachel McAdams but they probably didn't. Oh, and they both die at the end.",
        },
        {
            id: 3,
            title: "Titanic",
            year: "1997",
            synopsis: "Leonardo DiCaprio is poor, Kate Winslet is rich, they both ride the Titanic",
            spoiler: "The titanic sinks. Sorry.  Oh, and Leo dies even though they both could have fit on the floating door. Also Kate gets old and they go on a multimillion dollar expedition to recover this rare diamond necklace she had.  When they find it, she throws it back in the ocean because reasons.",
        },
        {
            id: 4,
            title: "Star Wars Episode V: The Empire Strikes Back",
            year: "1980",
            synopsis: "Luke, Leia, Han, and the gang get into more shenanigans as the stars continue to war",
            spoiler: "It's actually the second movie, not the fifth..............And Vader is Luke's dad.",
        },
        {
            id: 5,
            title: "Fight Club",
            year: "1999",
            synopsis: "Edward Norton and Brad Pitt start a fight club.  Hilarity ensues",
            spoiler: "Edward Norton and Brad Pitt are the same guy.  And their fight club is actually an underground terrorist cell. They blow up a bunch of buildings in the end.",
        },
        {
            id: 10,
            title: "Avengers:  Infinity War",
            year: "2018",
            synopsis: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
            spoiler: "Spider-Man dies in this one",
        },
        {
            id: 11,
            title: "Avengers: Endgame",
            year: "2019",
            synopsis: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store.",
            spoiler: "Spider-Man comes back, but now Iron-Man is dead. :(",

        },
        {
            id: 12,
            title: "Looper",
            year: "2012",
            synopsis: "Joe is classified as a looper, a job in which his employers use time travel to send men from the future to be killed into the past, where Joe can properly dispose of their bodies.",
            spoiler: "He's been trying to kill himself the whole time!",
        },
        {
            id: 13,
            title: "Memento",
            year: "2000",
            synopsis: "A man with short-term memory loss attempts to track down his wife's murderer.",
            spoiler: "The one who really killed his wife was Leonard himself!",
        },
        {
            id: 14,
            title: "Black Swan",
            year: "2010",
            synopsis: " A committed dancer struggles to maintain her sanity after winning the lead role in a production of Tchaikovsky's Swan Lake",
            spoiler: "She doesn't maintain her sanity, this girl is crazy.  She stabs herself in the gut.",
        },
        {
            id: 15,
            title: "Gone Girl",
            year: "2014",
            synopsis: "When his seemingly perfect wife Amy goes missing, philandering Nick becomes the prime suspect.",
            spoiler: "She faked her own murder and framed her husband",
        },
        {
            id: 16,
            title: "Dirty Rotten Scoundrels",
            year: "1988",
            synopsis: "Two con men try to settle their rivalry by betting on who can swindle a young American heiress out of fifty thousand dollars first.",
            spoiler: "She was the one conning them the whole time.",
        },
        {
            id: 17,
            title: "The Prestige",
            year: "2006",
            synopsis: "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
            spoiler: "The secret to the trick was it was two guys the whole time.  Christian Bale was actually twins.",
        },
        {
            id: 18,
            title: "It's a Wonderful Life",
            year: "1946",
            synopsis: "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.",
            spoiler: "He decides not to kill himeself.",

        },
        {
            id: 19,
            title: "The Sound of Music",
            year: "1965",
            synopsis: "A young novitiate is sent by her convent in 1930s Austria to become a governess to the seven children of a widowed naval officer.",
            spoiler: "The nun decides to marry this dude old enough to be her dad, then the Nazi's come and everyone has to go on a long hike.",
        },
        {
            id: 20,
            title: "The Dark knight rises ",
            year: "2012",
            synopsis: "Batman tries to protect gotham from the joker",
            spoiler: "Batman saves Harvey. Rachel is killed in the explosion. The left side of Harvey's face is badly burned. The Joker escapes"

        },
        {
            id: 21,
            title: "Once upon a time in hollywood",
            year: "2019",
            synopsis: "A failed actor (Leonardo Dicaprio) is trying to find work in Hollywood with his stunt double Brad pitt. ",
            spoiler: "Dicaprio and Brad Pitt kill the Manson family. ",

        },
        {
            id: 22,
            title: "Halloween ",
            year: "1978",
            synopsis: "Michael Myers returns to town to try and scout out his next victims",
            spoiler: "Michael Myers kills a bunch of people but doesnt die so you have to watch the next movie.",

        },
        {
            id: 23,
            title: "Shutter Island",
            year: "2010",
            synopsis: "U.S. Marshal Teddy Daniels (Leonardo DiCaprio) and his new partner (Mark Ruffalo) to Ashecliffe Hospital",
            spoiler: "DiCaprio's character is a patient himself, committed to the Shutter Island facility after murdering his wife because she went insane and killed their children.",

        },
        {
            id: 24,
            title: "Arrival",
            year: "2016",
            synopsis: "Linguistics professor Louise Banks (Amy Adams) leads an elite team of investigators when gigantic spaceships touch down in 12 locations around the world",
            spoiler: "The aliens leave Earth, and Louise decides to pursue a relationship with Ian Donnelly (one of her co-workers) since they will become parents to Hannah, even though things will not end well for any of them.",

        },
        {
            id: 30,
            title: "Big",
            year: "1988",
            synopsis: "A little kid turns into Tom Hanks",
            spoiler: "Tom Hanks turns back into the little kid. Hell yeah."

        },
        {
            id: 31,
            title: "Blade",
            year: "1998",
            synopsis: "Wesley Snipes is half-vampire and is hunting down pure vampires",
            spoiler: "Head vampire turns into a blood god, but Wesley Snipes kills him. Hell yeah."

        },
        {
            id: 32,
            title: "Men In Black 2",
            year: "2002",
            synopsis: "An alien disguised as a lingerie model tries to take over MIB headquarters",
            spoiler: "Will Smith and Tommy Lee Jones take the building back. Hell yeah."
        },
        {
            id: 33,
            title: "Goodburger",
            year: "1997",
            synopsis: "A giant burger place called Mondo Burger threatens to put Good Burger out of business... not if Dexter and Ed can help it!",
            spoiler: "Dexter and Ed find that Mondo Burger is putting illegal chemicals in their burgers to make them bigger. They bring this to the cops, they shut the place down. Good Burger stays in business. Ok, hell yeah. ",
        },
        {
            id: 34,
            title: "Shrek",
            year: "2001",
            synopsis: "Shrek the Ogre doesn't want anyone in his swamp. People start coming into his swamp. In fact, lord Farquaad tries to TAKE his swamp. Shrek's not a fan of that. Shrek cuts a deal with Lord Farquaad. He'll get his swamp back if he rescues Princess Fiona to marry Lord Farquaad.",
            spoiler: "So, turns out Princess Fiona (who is Cameron Diaz the whole time btw) is an Ogre too? Lord Farquaad gets eaten by a dragon, Shrek and Fiona get married instead and get the swamp back. Hell yeah, you are THRIVING, Shrek!",
        },
        {
            id: 35,
            title: "Shrek 2",
            year: "2004",
            synopsis: "So Shrek and Fiona gotta go meet Fiona's parents. They don't know that they're orges tho! Talk about in-law drama.",
            spoiler: "Everyone tries to turn back into a human (including the donkey) to be more norm-core and impress Fiona's parents. In the end they decide its not worth it, turn back into their disgusting selves, and sing Livin La Vida Loca. Hell yeah."
        },
        {
            id: 36,
            title: "Shrek 3",
            year: "2007",
            synopsis: "Shrek wants to keep shrekking",
            spoiler: "Shrek just kept shrekking on. Hell yeah, Shrek.",
        },
        {
            id: 37,
            title: "Shrek 4",
            year: "2010",
            synopsis: "Shrek wanted to shrek till he couldn't shrek anymore",
            spoiler: "Shrek fully entered shrek mode.",
        },
        {
            id: 41,
            title: "The Usual Suspects",
            year: "1995",
            synopsis: "group of criminals executes heist most of them die",
            spoiler: "Kevin Spacey did it",
        },
        {
            id: 42,
            title: "The Sixth Sense",
            year: "1999",
            synopsis: "Cole is frightened by visitations from those with unresolved problems who appear from the shadows",
            spoiler: "Bruce Willis is a ghost",

        },
        {
            id: 43,
            title: "The Visit",
            year: "2015",
            synopsis: "Kids visit creepy grandparents they've never met",
            spoiler: "Grandparents were really murdered by escaped mental hospital patients",
        },
    ]
} 
export const getMovie = () => {
    return database.movies.map(movies => ({...movies}))}