<h1 align="center" id="title">351-chat-app</h1>

<p align="center"><img src="https://socialify.git.ci/Pur1t/351-chat-app/image?description=1&amp;name=1&amp;owner=1&amp;pattern=Plus&amp;theme=Dark" alt="project-image"></p>

<h2>🚀 Demo</h2>

<h2>Project Screenshots:</h2>

<img src="https://cdn.discordapp.com/attachments/397365903202975756/1207351535550603274/2567-02-14_22.42.47.png?ex=65df54bd&amp;is=65ccdfbd&amp;hm=97464c5896ecf6b036734923e5a97d4c8bbf9fd31ea3ba08517e22547588542e&amp;" alt="project-screenshot" width="2000" height="400/">

<h2>🛠️ Installation Steps:</h2>

<p>1. Clone the Repository</p>

```
git clone https://github.com/Pur1t/351-chat-app.git
```

<p>2. install dependency ต่างๆ ของ client server และ socket</p>

```
cd 351-chat-app/client 
npm install

cd 351-chat-app/server
npm install

cd 351-chat-app/socket
npm install
```

<p>3. แก้ไขไฟล์ .env</p>

```
cd 351-chat-app/server
cp .env.example .env

###############################################

#.env
ATLAS_URI = {URI_DATABASE}
JWT_SECRET_KEY = {YOUR_SECRET_KEY}
```

<p>4. การรัน App</p>

```
cd 351-chat-app/server
node index.js

cd 351-chat-app/client
npm run dev

cd 351-chat-app/socket
node index.js
```

<p>5. การเข้าถึงเว็บไซต์ สามารถเข้าได้ผ่าน http://localhost:5173 หลังจากทำครบ 4 ขั้นตอนข้างต้นแล้ว</p>