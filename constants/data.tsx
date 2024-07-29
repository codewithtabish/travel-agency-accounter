export const users = [
  {
    name: "John Doe",
    image: "https://avatar.iran.liara.run/public/boy",
    amount: 5000,
    debt: 1000,
    percent: 20,
    profit: true, // Profit
    userType: "Customer",
  },
  {
    name: "Jane Smith",
    image: "https://avatar.iran.liara.run/public/girl",
    amount: 7000,
    debt: 1500,
    percent: 21.43,
    profit: true, // Profit
    userType: "Supplier",
  },
  {
    name: "Michael Johnson",
    image: "https://avatar.iran.liara.run/public/boy",
    amount: 4500,
    debt: 450,
    percent: 10,
    profit: true, // Profit
    userType: "Customer",
  },
  {
    name: "Emily Davis",
    image: "https://avatar.iran.liara.run/public/girl",
    amount: 3000,
    debt: 600,
    percent: 20,
    profit: false, // Loss
    userType: "Supplier",
  },
  {
    name: "William Brown",
    image: "https://avatar.iran.liara.run/public/boy",
    amount: 8000,
    debt: 0,
    percent: 0,
    profit: true, // Profit
    userType: "Customer",
  },
  {
    name: "Olivia Wilson",
    image: "https://avatar.iran.liara.run/public/girl",
    amount: 2000,
    debt: 400,
    percent: 20,
    profit: false, // Loss
    userType: "Supplier",
  },
  {
    name: "James Taylor",
    image: "https://avatar.iran.liara.run/public/boy",
    amount: 10000,
    debt: 2000,
    percent: 20,
    profit: true, // Profit
    userType: "Customer",
  },
  {
    name: "Sophia Moore",
    image: "https://avatar.iran.liara.run/public/girl",
    amount: 2500,
    debt: 500,
    percent: 20,
    profit: false, // Loss
    userType: "Supplier",
  },
  {
    name: "David Martinez",
    image: "https://avatar.iran.liara.run/public/boy",
    amount: 6000,
    debt: 1200,
    percent: 20,
    profit: true, // Profit
    userType: "Customer",
  },
  {
    name: "Isabella Garcia",
    image: "https://avatar.iran.liara.run/public/girl",
    amount: 4000,
    debt: 800,
    percent: 20,
    profit: true, // Profit
    userType: "Supplier",
  },
  {
    name: "Alexander Rodriguez",
    image: "https://avatar.iran.liara.run/public/boy",
    amount: 5500,
    debt: 1100,
    percent: 20,
    profit: true, // Profit
    userType: "Customer",
  },
  {
    name: "Mia Martinez",
    image: "https://avatar.iran.liara.run/public/girl",
    amount: 5000,
    debt: 1000,
    percent: 20,
    profit: false, // Loss
    userType: "Supplier",
  },
  {
    name: "Christopher Hernandez",
    image: "https://avatar.iran.liara.run/public/boy",
    amount: 7000,
    debt: 1400,
    percent: 20,
    profit: true, // Profit
    userType: "Customer",
  },
  {
    name: "Ava Lopez",
    image: "https://avatar.iran.liara.run/public/girl",
    amount: 3500,
    debt: 700,
    percent: 20,
    profit: true, // Profit
    userType: "Supplier",
  },
  {
    name: "Daniel Gonzalez",
    image: "https://avatar.iran.liara.run/public/boy",
    amount: 4500,
    debt: 900,
    percent: 20,
    profit: false, // Loss
    userType: "Customer",
  },
  {
    name: "Charlotte Perez",
    image: "https://avatar.iran.liara.run/public/girl",
    amount: 3000,
    debt: 600,
    percent: 20,
    profit: false, // Loss
    userType: "Supplier",
  },
  {
    name: "Lucas Lee",
    image: "https://avatar.iran.liara.run/public/boy",
    amount: 8000,
    debt: 1600,
    percent: 20,
    profit: true, // Profit
    userType: "Customer",
  },
  {
    name: "Amelia Thompson",
    image: "https://avatar.iran.liara.run/public/girl",
    amount: 9000,
    debt: 1800,
    percent: 20,
    profit: true, // Profit
    userType: "Supplier",
  },
  {
    name: "Matthew White",
    image: "https://avatar.iran.liara.run/public/boy",
    amount: 10000,
    debt: 2000,
    percent: 20,
    profit: true, // Profit
    userType: "Customer",
  },
  {
    name: "Sophia King",
    image: "https://avatar.iran.liara.run/public/girl",
    amount: 2000,
    debt: 400,
    percent: 20,
    profit: false, // Loss
    userType: "Supplier",
  },
  {
    name: "Rachel Adams",
    image: "https://avatar.iran.liara.run/public/girl",
    amount: 1000,
    debt: 1500,
    percent: 60,
    profit: false, // Loss
    userType: "Customer",
  },
  {
    name: "Ethan Davis",
    image: "https://avatar.iran.liara.run/public/boy",
    amount: 3500,
    debt: 4000,
    percent: 10,
    profit: false, // Loss
    userType: "Supplier",
  },
  {
    name: "Liam Robinson",
    image: "https://avatar.iran.liara.run/public/boy",
    amount: 3000,
    debt: 3500,
    percent: 10,
    profit: false, // Loss
    userType: "Customer",
  },
  {
    name: "Ava Martinez",
    image: "https://avatar.iran.liara.run/public/girl",
    amount: 2500,
    debt: 3000,
    percent: 20,
    profit: false, // Loss
    userType: "Supplier",
  },
];

export const galileoCommands = [
  {
    id: 1,
    title: "Availability Display",
    description: "Displays available flights for a specified date and route.",
    command: "A21MAYLONPAR",
  },
  {
    id: 2,
    title: "Sell Flight",
    description: "Books a flight for a specified number of passengers.",
    command: "0C1Y1",
  },
  {
    id: 3,
    title: "Sell with SSR",
    description:
      "Books a flight and includes a Special Service Request (SSR) like meal preference.",
    command: "0C1Y1/SSR",
  },
  {
    id: 4,
    title: "PNR Creation",
    description: "Starts the creation of a Passenger Name Record (PNR).",
    command: "N.MR SMITH/JOHN",
  },
  {
    id: 5,
    title: "Add Ticketing Information",
    description: "Adds ticketing details to a PNR.",
    command: "T.TAW/21MAY",
  },
  {
    id: 6,
    title: "End and Retrieve PNR",
    description: "Saves and retrieves a PNR.",
    command: "ER",
  },
  {
    id: 7,
    title: "Pricing",
    description: "Prices the itinerary in the PNR.",
    command: "FXX",
  },
  {
    id: 8,
    title: "Fare Quote",
    description: "Retrieves fare information for a given itinerary.",
    command: "FQ",
  },
  {
    id: 9,
    title: "Ticket Issuance",
    description: "Issues a ticket for the booked itinerary.",
    command: "TKP",
  },
  {
    id: 10,
    title: "Cancel Segment",
    description: "Cancels a booked segment in a PNR.",
    command: "X1",
  },
  {
    id: 11,
    title: "Change Passenger Name",
    description: "Changes the name in a PNR.",
    command: "-N.SMITH/JOHN",
  },
  {
    id: 12,
    title: "Add or Change Special Service Request (SSR)",
    description:
      "Adds or changes SSR like meal preference or special assistance.",
    command: "3SSR",
  },
  {
    id: 13,
    title: "Add Remarks",
    description: "Adds remarks to a PNR.",
    command: "5.RMK",
  },
  {
    id: 14,
    title: "Divide PNR",
    description: "Splits a PNR into two separate records.",
    command: "DP",
  },
  {
    id: 15,
    title: "Waitlist",
    description: "Waitlists a passenger for a flight.",
    command: "0C1Y1/WL",
  },
  {
    id: 16,
    title: "Availability with Cabin Filter",
    description: "Displays availability for a specific cabin class.",
    command: "A21MAYLONPAR-B",
  },
  {
    id: 17,
    title: "Fare Calculation",
    description: "Displays detailed fare calculation.",
    command: "FQD",
  },
  {
    id: 18,
    title: "Seat Assignment",
    description: "Assigns a seat to a passenger.",
    command: "4G/22F",
  },
  {
    id: 19,
    title: "Display PNR",
    description: "Displays details of a PNR.",
    command: "*P",
  },
  {
    id: 20,
    title: "Queue Placement",
    description: "Places a PNR on a queue for further action.",
    command: "QEP",
  },
  {
    id: 21,
    title: "Queue Removal",
    description: "Removes a PNR from a queue.",
    command: "QR",
  },
  {
    id: 22,
    title: "Modify PNR",
    description: "Modifies details in a PNR.",
    command: "MOD",
  },
  {
    id: 23,
    title: "Request Special Meal",
    description: "Requests a special meal for a passenger.",
    command: "3SPML",
  },
  {
    id: 24,
    title: "Add Frequent Flyer Number",
    description: "Adds a frequent flyer number to a PNR.",
    command: "FF",
  },
  {
    id: 25,
    title: "Itinerary Printing",
    description: "Prints the itinerary of a PNR.",
    command: "IGT",
  },
  {
    id: 26,
    title: "Ticket Reissue",
    description: "Reissues a ticket for the booked itinerary.",
    command: "TIR",
  },
  {
    id: 27,
    title: "Fare Display",
    description: "Displays the available fares for a route.",
    command: "FD",
  },
  {
    id: 28,
    title: "Availability with Time Filter",
    description:
      "Displays availability for flights within a specific time range.",
    command: "A21MAYLONPAR/0800-1200",
  },
  {
    id: 29,
    title: "Request Wheelchair",
    description: "Requests wheelchair assistance for a passenger.",
    command: "3WCHR",
  },
  {
    id: 30,
    title: "Infant Addition",
    description: "Adds an infant to an existing PNR.",
    command: "3INFT",
  },
  {
    id: 31,
    title: "Group Booking",
    description: "Books multiple passengers as a group.",
    command: "GBA",
  },
  {
    id: 32,
    title: "Display Seat Map",
    description: "Displays the seat map for a flight.",
    command: "SM",
  },
  {
    id: 33,
    title: "Change Flight Date",
    description: "Changes the date of a booked flight.",
    command: "CD",
  },
  {
    id: 34,
    title: "Display Special Service Requests",
    description: "Displays all SSRs in a PNR.",
    command: "*SSR",
  },
  {
    id: 35,
    title: "Request Assistance for Unaccompanied Minor",
    description: "Requests assistance for an unaccompanied minor.",
    command: "3UMNR",
  },
  {
    id: 36,
    title: "Change Flight Time",
    description: "Changes the time of a booked flight.",
    command: "CT",
  },
  {
    id: 37,
    title: "Group PNR Split",
    description: "Splits a group PNR into individual records.",
    command: "GPS",
  },
  {
    id: 38,
    title: "Update Contact Information",
    description: "Updates contact information in a PNR.",
    command: "9.",
  },
  {
    id: 39,
    title: "Add Secure Flight Data",
    description: "Adds Secure Flight Passenger Data (SFPD) to a PNR.",
    command: "3DOCS",
  },
  {
    id: 40,
    title: "Cancel PNR",
    description: "Cancels an entire PNR.",
    command: "CAN",
  },
  {
    id: 41,
    title: "Emergency Contact",
    description: "Adds emergency contact information to a PNR.",
    command: "3CTCE",
  },
  {
    id: 42,
    title: "Add Remarks to Queue",
    description: "Adds remarks to a PNR when placing it on a queue.",
    command: "QER",
  },
  {
    id: 43,
    title: "Display Queue Count",
    description: "Displays the count of PNRs on a specific queue.",
    command: "QC",
  },
  {
    id: 44,
    title: "Ticket Refund",
    description: "Processes a refund for a ticket.",
    command: "REF",
  },
  {
    id: 45,
    title: "Display Ticket Record",
    description: "Displays the ticket record for a PNR.",
    command: "TR",
  },
  {
    id: 46,
    title: "Add APIS Data",
    description:
      "Adds Advanced Passenger Information System (APIS) data to a PNR.",
    command: "3APIS",
  },
  {
    id: 47,
    title: "Request Bassinet",
    description: "Requests a bassinet for an infant.",
    command: "3BSCT",
  },
  {
    id: 48,
    title: "Add Contact Email",
    description: "Adds a contact email address to a PNR.",
    command: "9EMAIL",
  },
  {
    id: 49,
    title: "Special Handling",
    description: "Requests special handling services for a passenger.",
    command: "3SHAND",
  },
];
