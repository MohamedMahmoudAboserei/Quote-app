let arrayOfQuotes = [
    {
        'author': "Steve Jobs",
        'quote': "Design is not just what it looks like and feels like. Design is how it works.",
        'authorImg': "img/Steve Jobs.jpg"
    },
    {
        'author': "Steve Krug",
        'quote': "If there's one thing you learn by working on a lot of different Web sites, it’s that almost any design idea–no matter how appallingly bad–can be made usable in the right circumstances, with enough effort.",
        'authorImg': "img/Steve Krug.jpeg"
    },
    {
        'author': "Josh Wilson",
        'quote': "Responsive Web Design always plays an important role whenever going to promote your website.",
        'authorImg': "img/Josh Wilson.jpg"
    },
    {
        'author': "Paul Rand",
        'quote': "The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring.",
        'authorImg': "img/Paul Rand.jpg"
    },
    {
        'author': "Milton Glaser",
        'quote': "There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for.",
        'authorImg': "img/Milton Glaser.jpg"
    },
    {
        'author': "Lindon Leader",
        'quote': "I strive for two things in design: simplicity and clarity. Great design is born of those two things.",
        'authorImg': "img/Lindon Leader.jpeg"
    },
    {
        'author': "Frank Chimero",
        'quote': "Good design is all about making other designers feel like idiots because that idea wasn't theirs.",
        'authorImg': "img/Frank Chimero.jpg"
    },
    {
        'author': "Thomas Watson Jr.",
        'quote': "Good design is good business",
        'authorImg': "img/Thomas Watson Jr..jpg"
    },
    {
        'author': "Dr. Edwin Land",
        'quote': "An essential aspect of creativity is not being afraid to fail.",
        'authorImg': "img/Dr. Edwin Land.jpg"
    }
];

function newquote() {
    let random = Math.floor(Math.random() * arrayOfQuotes.length);
    let selectedQuote = arrayOfQuotes[random];

    let cartoon = `
        <div class="img shadow-lg">
            <img src="${selectedQuote.authorImg}" alt="${selectedQuote.author}">
        </div>
        <div class="quote-contact">
            <h3>
                <i class="fa-solid fa-quote-left tops"></i>
                ${selectedQuote.quote}
                <i class="fa-solid fa-quote-right bottoms"></i>
            </h3>
            <h4>
                -- ${selectedQuote.author} --
            </h4>
        </div>
    `;

    document.getElementById("quote").innerHTML = cartoon;
}
