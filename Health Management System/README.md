
# 🏥 Healthcare Web Application

A modern, responsive healthcare platform developed using React.js and Tailwind CSS. This application showcases healthcare services with a clean user interface and features a fully functional contact form integrated with EmailJS for handling user inquiries without a backend server.

## 🚀 Features

* **Responsive Design:** Fully adaptive UI built with Tailwind CSS that looks great on mobile, tablet, and desktop.
* **Service Showcase:** dedicated sections to display medical specializations (Cardiology, Dental, General Consultation, etc.).
* **Functional Contact Form:** Integrated with **EmailJS** to send real emails directly from the frontend.
* **Modern UI/UX:** Clean aesthetics, smooth hover effects, and accessible navigation.

## 🛠️ Tech Stack

* **Frontend:** React.js (Vite)
* **Styling:** Tailwind CSS
* **Form Handling:** EmailJS (or Getform.io)
* **Icons:** FontAwesome / Heroicons

## 📦 Prerequisites

Ensure you have the following installed:
* [Node.js](https://nodejs.org/) (v16 or higher)
* An EmailJS account (Free tier is sufficient)

## ⚙️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/healthcare-app.git](https://github.com/your-username/healthcare-app.git)
    cd healthcare-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Tailwind CSS:**
    Ensure `tailwind.config.js` is set up correctly (this is pre-configured if you cloned the repo).

4.  **Setup Environment Variables:**
    Create a `.env` file in the root directory to store your EmailJS keys securely.
    ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```

5.  **Start the Development Server:**
    ```bash
    npm run dev
    ```

## 📧 How to Setup EmailJS

1.  Go to [EmailJS.com](https://www.emailjs.com/) and sign up.
2.  **Add Service:** Connect your email provider (e.g., Gmail).
3.  **Create Template:** Design your email template (Use variables like `{{name}}`, `{{email}}`, `{{message}}`).
4.  **Get Keys:** Copy your Service ID, Template ID, and Public Key into your `.env` file or directly into `ContactForm.jsx` for testing.
