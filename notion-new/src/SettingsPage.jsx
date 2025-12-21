export default function SettingsPage() {
  return (
    <div className="simple-page">
      <h1>Settings</h1>
      <p className="muted">
        Quản lý cài đặt tài khoản và tùy chọn của bạn.
      </p>
      
      <div style={{ marginTop: '32px', padding: '24px', background: '#f9fafb', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
        <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: '700', color: '#111827' }}>
          Tài khoản
        </h2>
        <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#6b7280' }}>
          Email: <strong style={{ color: '#111827' }}>Đã đăng nhập</strong>
        </p>
        <p style={{ margin: '0', fontSize: '14px', color: '#6b7280' }}>
          Tài khoản của bạn được lưu trữ cục bộ và an toàn.
        </p>
      </div>
      
      <div style={{ marginTop: '24px', padding: '24px', background: '#f9fafb', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
        <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: '700', color: '#111827' }}>
          Giao diện
        </h2>
        <p style={{ margin: '0', fontSize: '14px', color: '#6b7280' }}>
          Giao diện hiện tại: <strong style={{ color: '#111827' }}>Sáng</strong>
        </p>
        <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9ca3af' }}>
          Chế độ tối sẽ được thêm trong phiên bản sau.
        </p>
      </div>
    </div>
  );
}
