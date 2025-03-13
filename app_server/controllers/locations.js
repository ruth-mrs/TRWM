const homelist = function(_req, res) {
    res.render("locations-list", { 
        title: "Loc8r - find a place to work with wifi",
        pageHeader: {
            title: "Loc8r",
            strapline: "Find places to work with wifi near you!"
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find coworking spaces, cafés, and other places with reliable internet and a great work environment.",        
        locations: [
            {
                name: "Starbucks",
                address: "123 Main Street, New York, NY",
                rating: 3.5,
                facilities: ["Wifi", "Coffee", "Power outlets"],
                distance: "100m"
            },
            {
                name: "WeWork",
                address: "456 Business Ave, San Francisco, CA",
                rating: 4.5,
                facilities: ["Wifi", "Meeting rooms", "Free coffee"],
                distance: "250m"
            },
            {
                name: "Local Café",
                address: "789 Cozy Rd, Austin, TX",
                rating: 3,
                facilities: ["Wifi", "Snacks", "Outdoor seating"],
                distance: "500m"
            }
        ]
     });
};

const locationInfo = function(_req, res) {
    res.render("location-info", {
        title: 'Starbucks',
        pageHeader: {
            title: 'Starbucks'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Starbucks',
            address: "123 Main Street, New York, NY",
            rating: 3.5,
            facilities: ["Wifi", "Coffee", "Power outlets"],
            coords: { lat: 40.712776, lng: -74.005974 },
            openingTimes: [
                { days: "Monday - Friday", opening: "6:00am", closing: "8:00pm", closed: false },
                { days: "Saturday", opening: "7:00am", closing: "6:00pm", closed: false },
                { days: "Sunday", closed: true }
            ],
            reviews: [
                { author: "John Doe", rating: 4, timestamp: "12 March 2024", reviewText: "Great place to work, but gets crowded." },
                { author: "Jane Smith", rating: 3, timestamp: "5 March 2024", reviewText: "Decent coffee, but limited seating." }
            ]
        }
    });
};

const addReview = function(_req, res) {
    res.render("index", { title: "Add review" });
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};