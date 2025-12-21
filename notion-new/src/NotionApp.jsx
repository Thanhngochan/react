import { useState } from "react";

export default function NotionApp() {
  const [pages, setPages] = useState([
    { id: 1, title: "Welcome", content: " Notion ✨" },
    { id: 2, title: "Kế hoạch học React", content: "Ghi plan học ở đây..." },
    { id: 3, title: "Ý tưởng dự án", content: "List mấy cái startup, app..." },
  ]);

  // lấy ra page đang chọn
  const [selectedId, setSelectedId] = useState(1);
  const selectedPage = pages.find((p) => p.id === selectedId);

  // cập nhật title/content
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

  // tạo page mới
  const handleAddPage = () => {
    const newId = Date.now();
    const newPage = { id: newId, title: "Untitled", content: "" };
    setPages((prev) => [...prev, newPage]);
    setSelectedId(newId);
  };

  // xoá page (giữ hành vi cũ, nhưng sửa sạch state)
  const handleDeletePage = () => {
    if (!selectedPage) return;

    if (pages.length === 1) {
      alert("Không thể xoá vì chỉ còn 1 trang duy nhất.");
      return;
    }

    const deletedIndex = pages.findIndex((p) => p.id === selectedId);
    const newPages = pages.filter((p) => p.id !== selectedId);

    const nextIndex = Math.max(0, deletedIndex - 1);
    const nextSelectedId = newPages[nextIndex]?.id ?? newPages[0]?.id;

    setPages(newPages);
    setSelectedId(nextSelectedId);
  };

  return (
    <div className="notion-layout">
      {/* SIDEBAR */}
      <div className="sidebar">
        <div className="sidebar-header">Workspace của Hân</div>
        <div className="sidebar-sub">Notes · Ideas · Plans</div>

        <button className="sidebar-add-btn" onClick={handleAddPage}>
          <span>＋</span>
          <span>New page</span>
        </button>

        <div className="page-list">
          {pages.map((page) => (
            <div
              key={page.id}
              className={"page-item" + (page.id === selectedId ? " active" : "")}
              onClick={() => setSelectedId(page.id)}
            >
              <span className="page-item-bullet" />
              <span>{page.title || "Untitled"}</span>
            </div>
          ))}
        </div>
      </div>

      {/* EDITOR */}
      <div className="editor">
        <div className="editor-inner">
          {selectedPage ? (
            <>
              <div
                className="editor-top"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <input
                  className="editor-title"
                  value={selectedPage.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Untitled"
                />

                <button
                  onClick={handleDeletePage}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>

              <textarea
                className="editor-content"
                value={selectedPage.content}
                onChange={(e) => handleContentChange(e.target.value)}
                placeholder="Viết gì đó đi..."
              />
            </>
          ) : (
            <div>Chưa có page nào được chọn.</div>
          )}
        </div>
      </div>
