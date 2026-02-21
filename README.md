<p align="center">
  <img src="./img.png" alt="Study Or Else Banner" width="100%">
</p>

# 📚 Study Or Else 🎯

## Basic Details

### Team Name: [Meta]

### Team Members
- Member 1: [Tess Maria Binu] - [Viswajyothi College Of Engineering And Technology]
- Member 2: [Meera Johnson] - [[Viswajyothi College Of Engineering And Technology]

### Hosted Project Link
[https://meera-2812.github.io/studymot/]

### Project Description
Study Or Else is a motivational study companion web app designed to keep you accountable and push you to study harder with humor, countdowns, and roasts! Track your exams, earn XP, and get roasted when you're not studying enough.

### The Problem Statement
Students often struggle with exam preparation procrastination, lose track of exam dates, and lack motivation during their study sessions. They need a fun and engaging tool that keeps them accountable while maintaining motivation through gamification and humor.

### The Solution
Study Or Else combines countdown timers, notifications, a gamified XP/level system, and humorous roasts with memes to keep students motivated and on track with their exam preparation. The app uses browser notifications and danger mode alerts when exams are approaching.

---

## Technical Details

### Technologies/Components Used

**For Software:**
- Languages used: HTML5, CSS3, JavaScript (ES6+)
- Frameworks/Libraries: Vanilla JavaScript (No external frameworks)
- Tools used: VS Code, Git, Live Server
- Storage: Browser LocalStorage API
- APIs: Web Notifications API

---

## Features

List the key features of your project:
- **👤 Personalized Experience**: Enter your name and get welcomed back each time
- **📅 Exam Countdown**: Add your exams and get a live countdown timer showing days, hours, minutes, and seconds
- **🔥 Roast Notifications**: Get roasted at intervals to remind you to study (browser notifications when enabled)
- **😂 Meme Display**: Random memes pop up alongside roasts to keep things fun and engaging
- **⚠️ Danger Mode**: When an exam is less than 7 days away, urgent warnings activate to increase pressure
- **🎮 XP & Level System**: Earn XP points based on study duration and progress through study levels
- **💾 Local Storage**: Your progress, exams, and XP are saved automatically in your browser

---

## Implementation

### Requirements
- A modern web browser (Chrome, Firefox, Safari, Edge)
- For notifications to work: Use **Live Server** or **GitHub Pages** (not file:// protocol)
- For development: VS Code with Live Server extension (recommended)

### Installation

```bash
# Clone or download the project
git clone [your-repo-link]
cd studymot

# Using VS Code Live Server
# 1. Install Live Server extension in VS Code
# 2. Right-click on index.html
# 3. Select "Open with Live Server"
```

**Or manually:**
1. Download the project
2. Open `index.html` in your browser or use Live Server

### File Structure

```
studymot/
├── index.html       # Main HTML structure
├── script.js        # Application logic
├── style.css        # Styling
├── memes/           # Meme images for roasts
│   ├── meme1.jpg.png
│   ├── meme2.jpg.png
│   └── meme3.jpg.jpg
└── README.md        # This file
```

## How to Use

### 1. **Get Started**
   - Enter your name in the welcome section
   - Click "Start Studying" to begin

### 2. **Add Exams**
   - Enter subject name (e.g., "Maths", "Biology")
   - Select the exam date
   - Click "Add Exam"
   - Your exams will be sorted by date with countdown labels

### 3. **Enable Notifications**
   - Click "Enable notifications" in the Roast Notifications section
   - Optionally test a roast with "Test roast now"
   - ⚠️ **Note**: Notifications require Live Server or GitHub Pages

### 4. **Track Study Time**
   - Click the buttons under XP/Level based on how long you studied
   - Earn XP and progress through study levels
   - Use "Decrease XP (-5)" button if needed

### 5. **Get Roasted**
   - Click "Roast" to get a random roast message with a meme
   - Motivate yourself with humor!

## Data Storage

All your data is stored locally in your browser using localStorage:
- **userName**: Your name
- **exams**: List of exams with subjects and dates
- **xp**: Your earned experience points
- **notificationsEnabled**: Notification preference

**Clearing your browser cache will erase this data**, so be careful!

## Features Explained

### Countdown Timer
- Updates in real-time showing days, hours, minutes, and seconds until your next exam
- Displays an urgent warning ("⚠ WHY ARE YOU CALM?? ⚠") when exams are within 7 days

### Roast System
- Random motivational (and humorous) messages
- Appears with random memes from the `memes/` folder
- Can be triggered manually or via notifications every 30 minutes

### XP Levels
- Professional Procrastinator (< 10 XP)
- Casual Studier (10-20 XP)
- Regular Scholar (20-40 XP)
- Dedicated Student (40-60 XP)
- Study Machine (60-80 XP)
- Legendary Scholar (80+ XP)

## Troubleshooting

**Notifications not working?**
- Make sure you're using Live Server or a similar local server, not file://
- Check your browser's notification permissions
- Some browsers block notifications on localhost - try deploying to GitHub Pages

**Data not saving?**
- Check if localStorage is enabled in your browser
- Try clearing browser cache and starting fresh

**Memes not loading?**
- Ensure the `memes/` folder and images exist in the project directory
- Check the browser console for error messages (F12 → Console)

## Customization

- **Add more memes**: Add `.jpg` or `.png` files to the `memes/` folder
- **Change roast messages**: Edit the roasts array in `script.js`
- **Modify colors/styling**: Edit `style.css`
- **Adjust notification frequency**: Change the interval in `script.js`

## Project Documentation

### Screenshots

![Welcome Screen](./Screenshot%202026-02-21%20064228.png)
*Users can enter their name and start the app - welcoming interface with study motivation*

![Exam Management & Countdown](./Screenshot%202026-02-21%20064253.png)
*Add exams with dates and see them sorted by countdown with live timer updates*

![Roasts & XP System](./Screenshot%202026-02-21%20064313.png)
*Get roasted with memes and track your study progress through the XP and level system*

### System Architecture

**Application Flow:**
```
User Input (Name, Exams, Study Time)
        ↓
LocalStorage (Data Persistence)
        ↓
JavaScript Logic (Calculations, Countdown, Roasts)
        ↓
DOM Manipulation (UI Updates)
        ↓
Web Notifications API (Browser Alerts)
        ↓
User Feedback (Memes, Roasts, Progress)
```

---

## API / Data Structure

### LocalStorage Keys

**User Profile:**
```json
{
  "userName": "string - User's name"
}
```

**Exams Data:**
```json
{
  "exams": [
    {
      "subject": "string - Subject name",
      "date": "YYYY-MM-DD - Exam date"
    }
  ]
}
```

**Progress Data:**
```json
{
  "xp": "number - Total experience points",
  "notificationsEnabled": "boolean - Notification preference"
}
```

---

## How to Use

### 1. **Get Started**
   - Enter your name in the welcome section
   - Click "Start Studying" to begin
   - Your name will be saved and displayed on return visits

### 2. **Add Exams**
   - Enter subject name (e.g., "Maths", "Biology", "Physics")
   - Select the exam date using the date picker
   - Click "Add Exam"
   - Your exams will be sorted by date with countdown labels (e.g., "5d left", "Today", "Overdue")

### 3. **Enable Notifications**
   - Click "Enable notifications" in the Roast Notifications section
   - Grant browser permission when prompted
   - **Note**: Notifications require Live Server or GitHub Pages (not file://)
   - Optionally test with "Test roast now"

### 4. **Track Study Time**
   - Click buttons based on how long you studied:
     - "I studied < 10 mins" → +2 XP
     - "I studied < 30 mins" → +6 XP
     - "I studied > 30 mins" → +10 XP
     - "I studied > 1 hour" → +20 XP
   - Watch your level progress as you studyUse "Decrease XP (-5)" if needed to correct entries

### 5. **Get Roasted**
   - Click "Roast" to get a random motivational roast with a meme
   - Manual roasts appear instantly with random memes from the `memes/` folder

---

## Features Explained

### Countdown Timer
- Updates in real-time showing days, hours, minutes, and seconds until your next exam
- Displays urgent warning ("⚠ WHY ARE YOU CALM?? ⚠") when exams are less than 7 days away
- **Danger Mode**: Active when any exam is within the week

### Roast System
- Random motivational/humorous messages to keep you pumped
- Paired with random memes from the `memes/` folder
- Can be triggered:
  - **Manually**: Click "Roast" button
  - **Via Notifications**: Auto-roasts every 30 minutes when enabled

### XP Levels & Progression

| Level | XP Range | Title |
|-------|----------|-------|
| 1 | 0-10 | Professional Procrastinator |
| 2 | 10-20 | Casual Studier |
| 3 | 20-40 | Regular Scholar |
| 4 | 40-60 | Dedicated Student |
| 5 | 60-80 | Study Machine |
| 6 | 80+ | Legendary Scholar |

---

## Troubleshooting

**Notifications not working?**
- Ensure you're using Live Server or GitHub Pages, not file:// protocol
- Check browser notification permissions (Settings → Privacy & Security)
- Some browsers block notifications on localhost - try GitHub Pages deployment
- Ensure notifications are enabled in the app and browser

**Data not saving?**
- Verify localStorage is enabled in your browser settings
- Try clearing browser cache and starting fresh
- Check if private/incognito mode is interfering with data persistence

**Memes not loading?**
- Verify the `memes/` folder exists in project root
- Check that image files (meme1.jpg.png, meme2.jpg.png, meme3.jpg.jpg) are present
- Open browser console (F12 → Console) to see error messages
- Verify image paths in script.js match actual file locations

**Countdown not updating?**
- Ensure at least one exam is added with a future date
- Check browser console for JavaScript errors
- Verify the countdown interval is running (should update every second)

---

## Customization

- **Add more memes**: Place `.jpg` or `.png` files in the `memes/` folder and update the roast function in `script.js`
- **Change roast messages**: Edit the roasts array in `script.js` (line ~150)
- **Modify colors/styling**: Edit `style.css` to customize the theme
- **Adjust notification frequency**: Modify the interval duration in the `enableRoastNotifications()` function (default: 30 minutes)
- **Change danger mode threshold**: Adjust the day threshold in the countdown logic (currently set to 7 days)

---

## Tips for Success

- ✅ Set realistic exam dates to keep your countdown accurate
- ✅ Enable notifications for extra motivation throughout the day  
- ✅ Log your study sessions consistently to build momentum and track progress
- ✅ Revisit your exams list regularly to stay on top of approaching deadlines
- ✅ Use the "Roast" feature when you need quick motivation boosts
- ✅ Customize roasts and memes to keep the experience fresh

---

---


## Project Demo

### Video
[https://drive.google.com/file/d/1jkASYOsSLvMLLgyRu2LOkQ6d87EvA3N2/view?usp=drive_link]

*Show key features: adding exams, countdown timer, roast notifications, XP tracking*

### Live Demo
[https://drive.google.com/file/d/1zRgarQbWvSN1OL5TN9KC3ZvkLuQ4GTnq/view?usp=drive_link]

---

## License

This project is open-source and free to use! 

Licensed under the MIT License - see the LICENSE file for details.

---


