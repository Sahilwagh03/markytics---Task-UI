export const headerLinks = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Create Event',
      route: '/events/create',
    },
    {
      label: 'Dashboard',
      route:'/dashboard'
    },
  ]

export const eventCategories = ['Conference', 'Workshop', 'Meetup', 'Webinar'];


export const eventData =[
  {
    "title": "Tech Conference 2024",
    "description": "A conference about the latest trends in technology.",
    "location": "San Francisco, CA",
    "imageUrl": "/assets/images/event1.jpg",
    "startDateTime": "2024-10-01T09:00:00",
    "endDateTime": "2024-10-01T17:00:00",
    "category": { "name": "Technology" },
    "price": "299.99",
    "isFree": false,
    "organizer": { "firstName": "John", "lastName": "Doe" },
    "_id": "event1"
  },
  {
    "title": "Music Fest 2024",
    "description": "An open-air music festival featuring various artists.",
    "location": "Austin, TX",
    "imageUrl": "/assets/images/event2.jpg",
    "startDateTime": "2024-09-15T12:00:00",
    "endDateTime": "2024-09-15T22:00:00",
    "category": { "name": "Music" },
    "price": "149.99",
    "isFree": false,
    "organizer": { "firstName": "Alice", "lastName": "Smith" },
    "_id": "event2"
  },
  {
    "title": "Art Expo 2024",
    "description": "An exhibition showcasing modern art pieces.",
    "location": "New York, NY",
    "imageUrl": "/assets/images/event3.jpg",
    "startDateTime": "2024-11-05T10:00:00",
    "endDateTime": "2024-11-05T18:00:00",
    "category": { "name": "Art" },
    "price": "49.99",
    "isFree": false,
    "organizer": { "firstName": "Robert", "lastName": "Brown" },
    "_id": "event3"
  },
  {
    "title": "Yoga Retreat 2024",
    "description": "A weekend yoga retreat for relaxation and mindfulness.",
    "location": "Sedona, AZ",
    "imageUrl": "/assets/images/event4.jpg",
    "startDateTime": "2024-08-20T08:00:00",
    "endDateTime": "2024-08-22T17:00:00",
    "category": { "name": "Health" },
    "price": "499.99",
    "isFree": false,
    "organizer": { "firstName": "Emily", "lastName": "Johnson" },
    "_id": "event4"
  },
  {
    "title": "Culinary Workshop 2024",
    "description": "A hands-on cooking workshop with top chefs.",
    "location": "Chicago, IL",
    "imageUrl": "/assets/images/event5.png",
    "startDateTime": "2024-12-10T09:00:00",
    "endDateTime": "2024-12-10T16:00:00",
    "category": { "name": "Food" },
    "price": "199.99",
    "isFree": false,
    "organizer": { "firstName": "Sarah", "lastName": "Lee" },
    "_id": "event5"
  },
  {
    "title": "Charity Run 2024",
    "description": "A 5K charity run for a good cause.",
    "location": "Los Angeles, CA",
    "imageUrl": "/assets/images/event6.jpg",
    "startDateTime": "2024-09-20T07:00:00",
    "endDateTime": "2024-09-20T12:00:00",
    "category": { "name": "Sports" },
    "price": "FREE",
    "isFree": true,
    "organizer": { "firstName": "Michael", "lastName": "Garcia" },
    "_id": "event6"
  }
]
