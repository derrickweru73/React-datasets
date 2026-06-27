# React Datasets (Media Explorer)
---

## Project Overview
This dashboard helps users organize media libraries without clutter. It displays datasets of books and movies, handles total task counts, updates average user ratings, and filters entries instantly as you type.

---

## Problems It Solves
* Scattered media lists: Keeps all your books and movies in one digital place.
* Overwhelming choices: Filters records instantly using text search bars.
* Lack of tracking: Shows live statistics of items completed.

---

## Features

### Component-Based Interface
* Dashboard Layout: A clean shell managing sub-component placement.
* Dataset Grid: Flexible card modules displaying item covers and info.
* Interactive Control Panel: Houses search tools and category dropdowns.

### Data Handling & Exploration
* Dataset Toggle: Switch instantly between Book and Movie data lists.
* Instant Search: Matches text inputs against titles, authors, and directors.
* Sorting System: Arranges items alphabetically, by date, or by score.

### State & Progress Management
* Watchlist Toggles: Move records in or out of personal collections.
* Rating Engine: Interactive star components that recalculate user score metrics.
* Live Statistics: Displays real-time progress bars based on completed items.

### Persistent Data Storage
* State Synchronization: Saves lists automatically using browser memory.
* Data Recovery: Restores tracking logs instantly on page refresh.

### Responsive User Interface
* Fluid Breakpoints: Layout formats automatically for phones, tablets, and desktops.

---

## Technical Concepts Implemented

### Component-Based Structure
* Functional React components
* Props usage
* Reusable view cards

### State Management
* `useState` hook for handling real-time interface changes
* `useEffect` hook for local storage data updates
* Controlled form elements

### Data Handling
* Custom `.json` format structures
* Immutable array filtering arrays
* Dynamic key search algorithms

### Styling Paradigms
* Component-scoped styling layouts
* CSS variables
* Flexbox and Grid

### Unit Testing
* Vitest engine configurations
* React Testing Library rendering validation

---

## Project Structure
```text
react-datasets/
│
├──  
├── src/
│   ├── assets/
│   │   └──  
│   ├── components/
│   │   ├── MovieItem.jsx
│   │   ├── MovieList.jsx
│   │   ├── MovieForm.jsx
│   │   ├──  
│   │   └── Navbar.jsx
│   ├── data/
│   │   ├── books.json
│   │   └── movies.json
│   ├── App.jsx
│   ├── App.test.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

---

## Technologies Used
* React 19+
* Vite
* CSS v4
* Local Storage Web API
* Vitest & React Testing Library

---

## Visual Identity
* Brand Name: React Datasets
* Primary Color: Deep Slate Indigo for modern framing
* Secondary Color: Teal for highlight markers
* Accent Color: Charcoal & Off-White for layout text

---

## Requirements Before Running
* Node.js environment package runner
* npm terminal dependency helper

---

## Typography
* Headers: Inter font family
* Body Text: Roboto sans-serif family
* Metrics: JetBrains Mono layout styling

---

## Installation

### Clone Repository
```bash
git clone https://github.com
```
 
### Open Project
```bash
cd react-datasets
code .
```

### Install Dependencies
```bash
npm install
```

---

## How to Use the Project
1. Launch Server: Run `npm run dev` and click the generated `localhost` link.
2. Switch Collections:Click Books or Movies tabs to swap current views.
3. Filter Data:Type keywords in the search box to filter rows.
4. Track Items: Tap Add to Watchlist buttons to update your counts.
5. Rate Media: Select star scores to refresh application analytics.

---

## Running Automated Tests
```bash
npm run test
```

---

## Deployment

### GitHub Pages
```bash
npm run deploy
```

### Vercel
1. Link your personal Vercel dashboard to your code repository.
2. Select Deploy to process live builds instantly.

---

## Future Improvements
* Live external API source connections
* Light and Dark interface toggle layout themes
* Drag-and-drop structural tier sorting

---

## Privacy and Data Security
All tracking history lists remain strictly inside your browser's private local cache space. No external network data analytics servers are used.

---

## Contribution

### How to Contribute
1. Fork Repository: Create custom remote workspace branches.
2. Isolate Code: Run `git checkout -b feature/AmazingFeature` changes.
3. Commit Changes: Use explicit functional tags like `git commit -m 'Add Feature'`.
4. Verify Frameworks: Run `npm run test` components tests.
5. Open Pull Request: Send target files upstream for repository evaluation.

### Contribution Areas
* JSON file data array array optimization
* Component layout accessibility
* UI animation smoothers

---

## Author
Developed by Derrick Weru

---

## License
This project is for educational purposes.