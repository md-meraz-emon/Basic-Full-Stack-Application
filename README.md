# 📸 Post Feed App

A simple full-stack MERN application that lets users create image posts (with a caption) and view all posts in a feed. Images are uploaded to **ImageKit** cloud storage, and post data is stored in **MongoDB**.

---

## 🚀 Tech Stack

**Frontend**
- React (Vite/CRA)
- React Router DOM (`react-router-dom`)
- Axios
- Plain CSS

**Backend**
- Node.js
- Express.js
- Multer (in-memory file handling)
- Mongoose (MongoDB ODM)
- ImageKit Node SDK (`@imagekit/nodejs`) — cloud image storage
- CORS
- dotenv

**Tools used during development**
- Postman — for testing the API endpoints
- MongoDB Compass — for viewing/managing the database
- ImageKit — for cloud image hosting

---

## 📂 Project Structure

```
project-root/
│
├── backend/
│   ├── server.js
│   └── src/
│       ├── app.js
│       ├── db/
│       │   └── db.js
│       ├── models/
│       │   └── post.model.js
│       └── services/
│           └── storage.service.js
│
└── frontend/
    ├── src/
    │   ├── App.jsx
    │   ├── App.css
    │   └── pages/
    │       ├── CreatePost.jsx
    │       └── Feed.jsx
    └── ...
```

---

## ✨ Features

- Create a post by uploading an image + adding a caption
- Image is uploaded to ImageKit cloud storage, and the returned URL is saved in MongoDB
- View all posts in a feed with images and captions
- Auto-navigation to `/feed` after successfully creating a post

---

## 🔌 API Endpoints

| Method | Endpoint         | Description                       |
|--------|------------------|-----------------------------------|
| POST   | `/create-post`   | Create a new post (image + caption) |
| GET    | `/posts`         | Fetch all posts                   |

### `POST /create-post`
- **Body:** `multipart/form-data`
  - `image` (file)
  - `caption` (text)
- **Response:**
```json
{
  "message": "Post created successfully",
  "post": {
    "_id": "...",
    "image": "https://ik.imagekit.io/...",
    "caption": "..."
  }
}
```

### `GET /posts`
- **Response:**
```json
{
  "message": "Posts fetched successfully",
  "posts": [ ... ]
}
```

---

## ⚙️ Setup & Installation

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd project-root
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:
```
MONGO_URI=your_mongodb_connection_string
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

Run the backend server:
```bash
node server.js
```
Server runs at: `http://localhost:3000`

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

---

## 🧪 Testing the API (Postman)

1. Open Postman
2. Create a `POST` request to `http://localhost:3000/create-post`
3. Set body type to `form-data`
4. Add fields:
   - `image` → File
   - `caption` → Text
5. Send the request and check the response

For fetching all posts, send a `GET` request to `http://localhost:3000/posts`.

---

## 🗄️ Database (MongoDB Compass)

- Connect Compass using your `MONGO_URI`
- Database will contain a `posts` collection with documents like:
```json
{
  "_id": "ObjectId",
  "image": "ImageKit URL",
  "caption": "String"
}
```

---

## 📌 Notes / Future Improvements

- Add loading and error states on the frontend during upload/fetch
- Add image size/type validation on the backend
- Add authentication (currently anyone can create a post)
- Add delete/edit post functionality
- Add pagination for the feed

---

## 📄 License

This project is open source and available for learning/demo purposes.
