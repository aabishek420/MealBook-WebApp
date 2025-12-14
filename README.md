---

# MealBook 🍽️

MealBook is a modern recipe web application built with **React** that allows users to browse meal categories, explore meals by category, search for recipes, view detailed meal information, and manage favorite dishes. The app uses the **MealDB API** for recipe data and is styled using **Tailwind CSS**, enhanced with **GSAP animations** for smooth user experience.

---

## 🌐 Live Demo

[View Live Demo Here....](https://mealbook-recipes.netlify.app)

---

## 🚀 Features

- **Home Page:** Displays meal categories with images and titles.
- **Category Meals:** Browse meals based on selected categories.
- **Search:** Search meals by name in real time.
- **Meal Details Page:** View full recipe details including instructions and images.
- **Favorites:** Mark/unmark favorite meals and store them using Context API.
- **Responsive Design:** Fully responsive for mobile and desktop screens.

---

## 🖥 Tech Stack

- **Frontend:** React  
- **UI Framework:** Tailwind CSS + Styled Components  
- **Routing:** React Router DOM  
- **State Management:** Context API  
- **API Fetching:** Axios  
- **Animations:** GSAP & @gsap/react  
- **Build Tool:** Vite (Vite + React template)  
- **Recipe API:** [TheMealDB API](https://www.themealdb.com/)

---

## 📂 Folder Structure

```

MealBook-WebApp/
├─ public/                      # Static files (images, favicon)
├─ src/
│  ├─ api/                      # Axios instance
│  │   └─ axios.js
│  ├─ assets/                   # Images, icons, etc.
│  ├─ components/               # Reusable components
│  │   ├─ MealCard.jsx
│  │   ├─ Navbar.jsx
│  │   └─ Search.jsx
│  ├─ context/                  # Context API providers
│  │   └─ FavouriteContext.jsx
│  ├─ pages/                    # Route pages
│  │   ├─ Home.jsx
│  │   ├─ CategoryMeal.jsx
│  │   ├─ Meal.jsx
│  │   └─ Favourites.jsx
│  ├─ ui/                       # UI utilities
│  │   └─ Loader.jsx
│  ├─ utils/                    # Helper utilities
│  │   └─ ScrollToTop.js
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ App.css
│  └─ index.css
│
|--------- README.md

````

---

# ⚙️ Installation & Setup

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

* **Node.js** (v18 or higher)
* **npm** (comes with Node.js)

---

### Installation Steps

1. **Clone the repository:**

```bash
git clone https://github.com/aabishek420/MealBook-WebApp.git
cd MealBook-WebApp
````

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm run dev
```

* The app will be available at [http://localhost:5173](http://localhost:5173).

---

## 🌐 Deployment

You can deploy MealBook on platforms like **Netlify**:

**Netlify:**

1. Connect your GitHub repository.
2. Set the build command: `npm run build`
3. Set publish directory: `dist`

---

## 🖼️ UI Preview

### 🏡 Home Page
<img width="1884" height="930" alt="image" src="https://github.com/user-attachments/assets/e0c07252-0c6c-4ced-9ac0-5373b3f26139" />

### 📂 Category Meals Page
<img width="1891" height="931" alt="image" src="https://github.com/user-attachments/assets/fdb51f87-30a2-466a-bf9f-47bc2bdee846" />


### ❤️ Favorites Page
<img width="1903" height="919" alt="image" src="https://github.com/user-attachments/assets/126b7e4b-59b5-434c-9613-3e8837af2723" />
<img width="1899" height="926" alt="image" src="https://github.com/user-attachments/assets/538c5d19-eeed-45dd-9175-c96691983ddc" />



### 🍽️ Meal Details Page
<img width="1870" height="923" alt="image" src="https://github.com/user-attachments/assets/f2f705a3-a7fe-4242-80e5-56b9d8834076" />


---

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## 👨‍💻 Developed by

**ABISHEK A**

* GitHub: [https://github.com/aabishek420](https://github.com/aabishek420)
* Email: [aabishek636@gmail.com](mailto:aabishek636@gmail.com)

---

## 🙏 Acknowledgements

* [TheMealDB API](https://www.themealdb.com/)
* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [GSAP](https://greensock.com/gsap/)

> *Every Meal Tells a Story*

