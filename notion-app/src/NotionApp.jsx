import { useState } from "react";

export default function NotionApp() {
  const [pages, setPages] = useState([
    { id: 1, title: "Welcome", content: "Đây là Notion mini của bé Hân ✨" },
    { id: 2, title: "Kế hoạch học React", content: "Ghi plan học ở đây..." },
    { id: 3, title: "Ý tưởng dự án", content: "List mấy cái startup, app..." },
  ]);

  const [selectedId, setSelectedId] = useState(1);
  const selectedPage = pages.find((p) => p.id === selectedId);

  const handleContentChange = (newContent) => {
    setPages((prev) =>
      prev.map((page) =>
        page.id === selectedId ? { ...page, content: newContent } : page
      )
    );
  };

  const handleTitleChange = (newTitle) => {
    setPages((prev) =>
      prev.map((page) =>
        page.id === selectedId ? { ...page, title: newTitle } : page
      )
    );
  };

  const handleAddPage = () => {
    const newId = Date.now();
    const newPage = {
      id: newId,
      title: "Untitled",
      content: "",
    };
    setPages((prev) => [...prev, newPage]);
    setSelectedId(newId);
  };

  return (
    <div
      style={{
        display: "flex",
        height: "calc(100vh - 56px)",
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

