# ✈️ AI Trip Planner

A smart React application that generates personalized travel itineraries using the Google Gemini AI. Users can input their travel preferences (destination, budget, vibe, etc.), and the AI constructs a custom trip plan instantly.

## 🚀 Features

* **AI-Powered Planning:** Uses Google's Gemini 1.5 Flash model to generate detailed itineraries.
* **Customizable Inputs:** set destination, duration, budget, group size, and travel "vibe" (e.g., History, Modern).
* **Instant Results:** Displays a structured trip plan without reloading the page.
* **Responsive Design:** Built with Tailwind CSS for a fully responsive mobile and desktop experience.

## 🛠️ Tech Stack

* **Frontend:** React.js (Vite)
* **Styling:** Tailwind CSS
* **AI Integration:** Google Generative AI SDK (`@google/generative-ai`)
* **Icons:** FontAwesome

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
* [Node.js](https://nodejs.org/) (v16 or higher)
* A Google AI Studio API Key ([Get one here](https://aistudio.google.com/))

## ⚙️ Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/ai-trip-planner.git](https://github.com/your-username/ai-trip-planner.git)
    cd ai-trip-planner
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Install required packages (if missing):**
    ```bash
    npm install @google/generative-ai @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
    ```

## 🔑 Configuration

To keep your API key secure, do not paste it directly into the code.

1.  Create a `.env` file in the root directory of your project.
2.  Add your Google Gemini API key:
    ```env
    VITE_GEMINI_API_KEY=your_actual_api_key_here
    ```
3.  *Optional:* Update `theresponse.js` (or your service file) to use this variable:
    ```javascript
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
    ```

## 🏃‍♂️ Running the App

Start the development server:

```bash
npm run dev

### 💡 Quick Tip for You
Since you are submitting this for an internship or project:
1.  **Screenshots:** It is highly recommended to take a screenshot of your app (the form and the result) and save it as `screenshot.png` in your folder. Then, add `![App Screenshot](screenshot.png)` to the top of this README.
2.  **Repo Link:** Don't forget to replace `https://github.com/your-username/...` with your actual GitHub link.
