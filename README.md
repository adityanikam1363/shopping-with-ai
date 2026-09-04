# 🛍️ ShoppingWithAI

### 🤖 AI-Powered Agentic Commerce Platform

ShoppingWithAI is an AI-powered shopping platform designed to make online shopping **smarter, faster, and more conversational**.

Instead of manually searching through multiple products, applying filters, comparing specifications, and deciding what to buy, users can describe what they need and interact with the shopping experience using **AI-powered product discovery and conversational search**.

The platform also supports **voice-based shopping**, allowing users to speak their requirements and convert them into shopping queries.

> **Search less. Decide smarter. Shop with AI.**

---

## 🚀 Problem Statement

Traditional e-commerce requires users to:

* Search for products manually
* Apply multiple filters
* Open several product pages
* Compare specifications
* Compare prices
* Read reviews and product information
* Decide which product provides the best value

This process can be time-consuming, especially when users don't know the exact product specifications they need.

### Example

A user may want:

> "Find me a smartphone under ₹30,000 with a good camera and battery."

Instead of manually searching and comparing dozens of products, ShoppingWithAI is designed to understand the requirement and help the user discover suitable products.

---

# 💡 Solution

ShoppingWithAI introduces an **AI-assisted shopping experience** where users can communicate their requirements naturally.

### Traditional Shopping

```text
Search
   ↓
Filter
   ↓
Browse Products
   ↓
Compare
   ↓
Decide
   ↓
Buy
```

### ShoppingWithAI

```text
Tell AI What You Need
        ↓
AI Understands Requirement
        ↓
Product Discovery
        ↓
Product Recommendations
        ↓
Compare Products
        ↓
User Selects Product
        ↓
Add to Cart
        ↓
Checkout
        ↓
Payment
```

The goal is to reduce the effort required to discover and select the right product.

---

# 🤖 AI Shopping Assistant

The AI shopping experience allows users to describe their requirements using natural language.

### Example

```text
Find me a smartphone under ₹30,000
with a good camera and battery.
```

The shopping assistant can help the user continue the conversation with questions such as:

```text
Which one is best for photography?
```

or:

```text
Which one gives the best value for money?
```

This creates a more conversational shopping experience compared with traditional keyword-based product search.

---

# 🎤 Voice Shopping

ShoppingWithAI also supports a voice-based shopping experience.

Users can speak their product requirements instead of typing them.

### Voice Shopping Flow

```text
User Speaks
     ↓
Speech-to-Text
     ↓
Shopping Query
     ↓
AI Shopping Assistant
     ↓
Product Search
     ↓
Product Recommendations
```

### Example

A user can say:

> "Find me a gaming laptop under seventy thousand rupees."

The spoken request can be converted into a text query and used for product discovery.

### Benefits

* 🎤 Hands-free shopping
* ⚡ Faster product search
* 💬 Natural interaction
* 📱 Convenient on mobile devices
* ♿ Improved accessibility
* 🤖 Conversational product discovery

---

# 🛍️ Key Features

### 🤖 AI Shopping Assistant

Understand natural-language shopping requirements and assist users during product discovery.

### 🎤 Voice Product Search

Allow users to speak their shopping requirements and convert speech into searchable queries.

### 🔎 Intelligent Product Discovery

Help users find products based on their requirements instead of relying only on traditional keyword searches.

### 💬 Conversational Search

Users can continue asking questions about products instead of performing a completely new search every time.

### ⭐ Product Recommendations

Help users identify products that better match their requirements.

### 🛒 Shopping Cart

Users can select products and manage their shopping cart before checkout.

### 💳 Online Payment

The platform integrates Razorpay for payment processing.

### 🗄️ MongoDB

MongoDB is used as the database layer for application data where required by the backend.

### ☁️ Cloud Deployment

The project is designed to run using modern cloud deployment platforms.

---

# 🤝 Agentic Commerce

ShoppingWithAI focuses on the idea of **Agentic Commerce**.

Traditional e-commerce places most of the responsibility on the user.

```text
Search → Filter → Browse → Compare → Decide → Buy
```

ShoppingWithAI moves part of the discovery process toward an AI-assisted workflow.

```text
Tell AI
   ↓
AI Understands
   ↓
AI Finds Products
   ↓
AI Helps Compare
   ↓
User Decides
   ↓
Cart
   ↓
Checkout
   ↓
Payment
```

The user remains in control of the final purchase decision while AI helps reduce the effort involved in product discovery.

---

# 💳 Razorpay Integration

ShoppingWithAI uses **Razorpay** for online payment processing.

### Payment Flow

```text
User
 ↓
Product Selection
 ↓
Shopping Cart
 ↓
Checkout
 ↓
Backend
 ↓
Razorpay
 ↓
Payment
 ↓
Payment Verification
 ↓
Order Status
```

Razorpay credentials should be handled securely on the backend.

> ⚠️ Never expose the Razorpay Secret Key in frontend code or commit it to GitHub.

---

# 🗄️ MongoDB Integration

MongoDB is used as the database for backend application data.

The backend connects to MongoDB using an environment variable such as:

```env
MONGODB_URI=your_mongodb_connection_string
```

Keeping the database connection string inside environment variables prevents sensitive database credentials from being stored directly in source code.

---

# 🏗️ System Architecture

```text
                   ┌─────────────────────┐
                   │        User         │
                   └──────────┬──────────┘
                              │
                ┌─────────────┴─────────────┐
                │                           │
          Text Search                 Voice Search
                │                           │
                │                    Speech-to-Text
                │                           │
                └─────────────┬─────────────┘
                              ↓
                  ┌─────────────────────┐
                  │ AI Shopping Assistant│
                  └──────────┬──────────┘
                             ↓
                  ┌─────────────────────┐
                  │ Product Discovery   │
                  └──────────┬──────────┘
                             ↓
                  ┌─────────────────────┐
                  │ Recommendations     │
                  └──────────┬──────────┘
                             ↓
                  ┌─────────────────────┐
                  │ Product Details     │
                  └──────────┬──────────┘
                             ↓
                  ┌─────────────────────┐
                  │ Shopping Cart       │
                  └──────────┬──────────┘
                             ↓
                  ┌─────────────────────┐
                  │ Checkout            │
                  └──────────┬──────────┘
                             ↓
                  ┌─────────────────────┐
                  │ Backend             │
                  └──────────┬──────────┘
                             ↓
                ┌────────────┴────────────┐
                │                         │
             MongoDB                  Razorpay
```

---

# 🔄 Application Workflow

### 1. Open ShoppingWithAI

The user opens the ShoppingWithAI web application.

### 2. Enter a Requirement

The user can enter a shopping requirement using natural language.

Example:

```text
I need a laptop for programming under ₹70,000.
```

### 3. Use Voice Search

The user can also provide the requirement using voice.

### 4. AI-Assisted Discovery

The shopping assistant processes the requirement and helps identify suitable products.

### 5. Explore Products

Users can view the products and their relevant information.

### 6. Select a Product

The user chooses a product based on their requirements.

### 7. Add to Cart

The selected product can be added to the shopping cart.

### 8. Checkout

The user proceeds to checkout.

### 9. Payment

The payment process is handled through Razorpay.

---

# 🧑‍💻 Technology Stack

## Frontend

* React.js
* Vite
* JavaScript / TypeScript
* HTML5
* CSS3

## Backend

* Node.js
* Express.js

## Database

* MongoDB

## AI

* AI-powered conversational shopping
* Natural-language product discovery
* Product recommendations
* Speech-to-Text based voice interaction

## Payments

* Razorpay

## Deployment

* Vercel
* Backend cloud deployment

---

# 🔐 Environment Variables

Create a `.env` file for backend configuration.

Example:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

RAZORPAY_KEY_ID=your_razorpay_key_id

RAZORPAY_KEY_SECRET=your_razorpay_key_secret

AI_API_KEY=your_ai_api_key
```

> The exact variables required depend on the services enabled in your deployment.

### Important Security Rules

Never commit:

```text
.env
.env.local
```

to GitHub.

Also never expose:

```text
MongoDB passwords
MongoDB connection strings
Razorpay secret keys
AI API keys
```

in frontend source code.

---

# ⚙️ Running the Project Locally

## 1. Clone the Repository

```bash
git clone https://github.com/adityanikam1363/shopping-with-ai.git
```

## 2. Open the Project

```bash
cd shopping-with-ai
```

## 3. Install Dependencies

```bash
npm install
```

If the project contains separate frontend and backend applications, install dependencies inside the respective directories as well.

## 4. Configure Environment Variables

Create a `.env` file and add the required configuration.

## 5. Start the Application

Use the project's configured npm scripts, for example:

```bash
npm run dev
```

or, for a backend service:

```bash
npm start
```

---

# 🌐 Live Website

### ShoppingWithAI

[Open ShoppingWithAI](https://shopping-with-ai.vercel.app/?utm_source=chatgpt.com)

The deployed application provides the user-facing shopping experience.

---

# 📦 Project Repository

### GitHub

[ShoppingWithAI GitHub Repository](https://github.com/adityanikam1363/shopping-with-ai?utm_source=chatgpt.com)

---

# 🎯 Razorpay AI Buildathon

ShoppingWithAI is designed around the **AI Growth & Agentic Commerce** concept.

The project demonstrates how AI can be integrated into an e-commerce experience to simplify product discovery and make commerce more conversational.

The core idea is:

```text
User Intent
     ↓
AI Understanding
     ↓
Product Discovery
     ↓
Recommendation
     ↓
Shopping Cart
     ↓
Checkout
     ↓
Payment
```

---

# 🎬 Demo Flow

A typical demonstration of ShoppingWithAI can follow this sequence:

```text
1. Open ShoppingWithAI
        ↓
2. Start AI Shopping Assistant
        ↓
3. Enter a product requirement
        ↓
4. Receive product recommendations
        ↓
5. Ask follow-up questions
        ↓
6. Try voice-based shopping
        ↓
7. View product information
        ↓
8. Add product to cart
        ↓
9. Proceed to checkout
        ↓
10. Complete payment using Razorpay
```

---

# 🔮 Future Improvements

Potential future improvements include:

* 🌐 Multilingual AI shopping
* 🎤 More advanced voice interaction
* 🔍 Better product comparison
* 💰 Deal and discount detection
* 🔔 Price-drop alerts
* 👤 Personalized user profiles
* 📦 Order tracking
* 💬 Conversational checkout
* 🧠 Personalized shopping preferences
* 🤖 More autonomous shopping workflows
* 📊 Merchant analytics
* 📈 AI-powered revenue optimization

---

# 🌟 Vision

ShoppingWithAI aims to move e-commerce from:

> **"Search for what you want."**

towards:

> **"Tell AI what you need."**

The goal is to make online shopping more natural, conversational, personalized, and efficient.

---

# 👨‍💻 Developer

**Aditya Nikam**

Frontend Developer & Project Developer

GitHub:
[@adityanikam1363](https://github.com/adityanikam1363?utm_source=chatgpt.com)

---

# ⭐ Project

### ShoppingWithAI

**AI-Powered Agentic Commerce Platform**

> **Search less. Decide smarter. Shop with AI.**
