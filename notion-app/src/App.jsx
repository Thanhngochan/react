import {useState} from 'react';
import {Routes, Route} from "react-router-dom";
import "./index.css";
import './App.css'
import NotionApp from "./NotionApp.jsx";
import SettingsPage from "./SettingsPage.jsx";
import AboutPage from "./AboutPage.jsx";


function NotionApp() {
  // 1. Tủ pages : giống như một cái "database" nhỏ trong bộ nhớ 
  const [pages, setPages] = useState([
    {id:1, title:"Welcome", content: "Đây là Notion của Hân Hân"},
    {id:2, title:"Kế hoạch học tập", content: "Kế hoạch học tập của Hân Hân"},
    {id:3, title:"Ý tưởng dự án", content: "Cách làm, content của các dự án mini"},
  ]);
  // 2. Trang đang chọn 
  const [selectedId, setSelectedId] = useState(1);
  // 3. Lấy trang hiện tại 
  const selectedPage = pages.find((p) => p.id == selectedId);
  // 4. Hàm đổi content 
  const handleContentChange = (newContent) => {
    setPages((prev) =>
     prev.map((page)=>
      page.id == selectedId ? {...page, content : newContent} : page
    )
   );
  };
  // 5. Hàm đổi title 
  const handleTitlechange = (newTitle) => {
    setPages((prev) =>
      prev.map((page) =>
        page.id == selectedId ? {...page, title : newTitle}: page
    )
  );

  };
   
 // 6.Hàm thêm trang
  const handleAddPage = () => {;
   const newId= Date.now();
   const newPage ={
    id:newId,
    title: "Untitled",
    content:"",
    
   };
   setPages((prev) => [...prev, newPage]);
   setSelectedId(newId);
  };
// 7,8,9. UI ( giao diện)
 return (
    <div
      style={{
        display: "flex",
        height: "100vh",
      }}
    >
      {/* SIDEBAR */}
      <div
        style={{
          width: "260px",
          borderRight: "1px solid #ddd",
          padding: "16px",
          backgroundColor: "#fbfbfb",
        }}
      >
        <div
          style={{
            fontWeight: 600,
            marginBottom: "12px",
            fontSize: "18px",
          }}
        >
          Notion mini của Hân
        </div>

        <button
          onClick={handleAddPage}
          style={{
            width: "100%",
            padding: "8px 10px",
            marginBottom: "12px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            cursor: "pointer",
            backgroundColor: "white",
          }}
        >
          + New page
        </button>

        <div>
          {pages.map((page) => (
            <div
              key={page.id}
              onClick={() => setSelectedId(page.id)}
              style={{
                padding: "8px 10px",
                borderRadius: "6px",
                cursor: "pointer",
                marginBottom: "6px",
                backgroundColor:
                  page.id === selectedId ? "#e3f2fd" : "transparent",
                fontWeight: page.id === selectedId ? 600 : 400,
                fontSize: "14px",
              }}
            >
              {page.title || "Untitled"}
            </div>
          ))}
        </div>
      </div>

      {/* EDITOR */}
      <div
        style={{
          flex: 1,
          padding: "20px 40px",
          overflowY: "auto",
        }}
      >
        {selectedPage ? (
          <>
            <input
              value={selectedPage.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Untitled"
              style={{
                border: "none",
                outline: "none",
                fontSize: "28px",
                fontWeight: 600,
                marginBottom: "16px",
                backgroundColor: "transparent",
                width: "100%",
              }}
            />
            <textarea
              value={selectedPage.content}
              onChange={(e) => handleContentChange(e.target.value)}
              placeholder="Viết gì đó đi..."
              style={{
                width: "100%",
                minHeight: "70vh",
                border: "none",
                outline: "none",
                resize: "none",
                fontSize: "16px",
                lineHeight: 1.6,
                backgroundColor: "transparent",
              }}
            />
          </>
        ) : (
          <div>Chưa có page nào được chọn.</div>
        )}
      </div>
    </div>
  );
}

// App thật sự export
function App() {
  return (
    <><nav
      style={{
        height: "56px",
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        borderBottom: "1px solid #ddd",
        backgroundColor: "#ffffff",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontWeight: 600 }}>Hân Notion</div>

      <div style={{ display: "flex", gap: "16px" }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/settings">Settings</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
    <Routes>
        {/* Trang Notion chính, path = "/" */}
        <Route path="/" element={<NotionApp />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes></>
  );
}

export default App;
