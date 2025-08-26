# ReactJS Day 21 🚀  

In this project, I practiced three very important concepts in React: *Derived State, **Lifting State Up, and **Updating Objects in State*.  

---

## 📌 Concepts Covered  

### 1. Derived State in React  
- Instead of storing redundant values, I derived values such as:  
  - *Total users*  
  - *Last user added*  
  - *Unique users* (using Set)  

This helps avoid duplication and makes the state more predictable.  

---

### 2. Lifting State Up  
- When multiple child components need to share and update data, I *lifted the state* to their parent component.  
- This ensures *data consistency* and avoids prop-drilling issues.  

---

### 3. Updating Objects in State  
- I updated nested object properties like address.city without mutating the state.  
- Used the spread operator (...) to keep immutability intact while updating values.  

---

## ⚛ Example Features  
- Add new users  
- Display total, last, and unique users  
- Update object properties inside state (like changing user city dynamically)  

---

## 📂 Project Structure

src
├── App.jsx          # Main component (handles state, derived data, lifting state)
├── AddUser.jsx      # Component to add new user
├── DisplayUser.jsx  # Component to display user details
├── App.css          # Styling
└── main.jsx         # Entry point

---

## 🛠 Tech Stack  
- React JS  
- JavaScript (ES6+)  
- CSS  

---

## 🚀 How to Run  

1. Clone this repository  
   ```bash
   git clone <your-repo-link>
   cd project-folder

2. Install dependencies

npm install


3. Run the development server

npm run dev




---

🌟 Learnings

✔ Derived state makes code cleaner and avoids unnecessary state updates.
✔ Lifting state up ensures smooth data flow across components.
✔ Correctly updating objects in state helps maintain immutability.


