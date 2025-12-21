export default function AboutPage() {
  return (
    <div className="simple-page">
      <h1>About</h1>
      <p className="muted">
        HÂN NOTION là một ứng dụng ghi chú và quản lý công việc được xây dựng với React, 
        mang đến trải nghiệm đơn giản và hiện đại để bạn tổ chức ý tưởng, ghi chép và lập kế hoạch.
      </p>
      <p>
        <strong>Tính năng chính:</strong>
      </p>
      <ul style={{ lineHeight: '1.8', color: '#374151', marginLeft: '24px' }}>
        <li>Tạo và quản lý nhiều trang ghi chú</li>
        <li>Chỉnh sửa tiêu đề và nội dung theo thời gian thực</li>
        <li>Giao diện đẹp mắt và dễ sử dụng</li>
        <li>Đăng ký và đăng nhập an toàn</li>
      </ul>
      <p className="muted" style={{ marginTop: '32px', fontSize: '14px' }}>
        Được xây dựng với ❤️ bằng React
      </p>
    </div>
  );
}
