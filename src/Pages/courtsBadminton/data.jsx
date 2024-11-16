const courts = [
  {
    id: 1,
    name: "Sân cầu lông Cây Lộc Vừng",
    address: "1110 B2, Phạm Văn Đồng, Phường Linh Đông, Thủ Đức",
    rating: 5.0,
    reviews: 2,
    image:
      "https://cdn.shopvnb.com/uploads/images/tin_tuc/san-cau-long-cay-loc-vung-2-1718398064.webp",
    hours: "05:00 - 22:00",
    phone: "0934 098 004",
    pricing: [
      { day: "T2 - T6", time: "5h - 12h", cost: "60,000đ" },
      { day: "T2 - T6", time: "15h - 22h", cost: "80,000đ" },
      { day: "T7 - CN", time: "5h - 22h", cost: "120,000đ" },
    ],
  },
  {
    id: 2,
    name: "Sân cầu lông Bình Triệu",
    address: "Số B Đường 20, Khu phố 4, Phường Hiệp Bình Chánh, Thủ Đức",
    rating: 4.9,
    reviews: 2,
    image:
      "https://thethaothienlong.vn/wp-content/uploads/2022/04/Danh-sach-san-cau-long-o-tphcm-1.jpg",
    hours: "05:00 - 22:00",
    phone: "0904 123 456",
    pricing: [
      { day: "T2 - T6", time: "5h - 12h", cost: "50,000đ" },
      { day: "T2 - T6", time: "15h - 22h", cost: "75,000đ" },
      { day: "T7 - CN", time: "5h - 22h", cost: "100,000đ" },
    ],
  },
  {
    id: 3,
    name: "Sân cầu lông Lan Anh",
    address: "119 Đ. Số 7, Phường Linh Trung, Thủ Đức",
    rating: 4.8,
    reviews: 3,
    image:
      "https://babolat.com.vn/wp-content/uploads/2023/11/san-danh-cau-long-lavie.jpg",
    hours: "06:00 - 22:00",
    phone: "0987 654 321",
    pricing: [
      { day: "T2 - T6", time: "6h - 12h", cost: "55,000đ" },
      { day: "T2 - T6", time: "15h - 22h", cost: "85,000đ" },
      { day: "T7 - CN", time: "6h - 22h", cost: "110,000đ" },
    ],
  },
  {
    id: 4,
    name: "Sân cầu lông Hiển Hoa",
    address: "262/3 Đường Trần Não, Phường Bình An, Quận 2",
    rating: 4.7,
    reviews: 5,
    image:
      "https://sanbaokim.com/upload/baiviet/thamsancaulongkhongthethieuchocacnhathidau01-4710.png",
    hours: "05:30 - 21:30",
    phone: "0912 345 678",
    pricing: [
      { day: "T2 - T6", time: "5h30 - 12h", cost: "65,000đ" },
      { day: "T2 - T6", time: "14h - 21h30", cost: "90,000đ" },
      { day: "T7 - CN", time: "5h30 - 21h30", cost: "120,000đ" },
    ],
  },
  {
    id: 5,
    name: "Sân cầu lông Tao Đàn",
    address: "Số 01 Đường Huyền Trân Công Chúa, Quận 1",
    rating: 4.8,
    reviews: 6,
    image:
      "https://badmintonw.com/uploads/images/nhung-dia-chi-gia-thue-san-cau-long-tp-ho-chi-minh-gia-re-uy-tin6.png",
    hours: "06:00 - 22:00",
    phone: "0903 456 789",
    pricing: [
      { day: "T2 - T6", time: "6h - 12h", cost: "70,000đ" },
      { day: "T2 - T6", time: "15h - 22h", cost: "90,000đ" },
      { day: "T7 - CN", time: "6h - 22h", cost: "130,000đ" },
    ],
  },
  {
    id: 6,
    name: "Sân cầu lông Nguyễn Văn Thủ",
    address: "Số 04 Đường Nguyễn Văn Thủ, Quận 1",
    rating: 4.6,
    reviews: 7,
    image:
      "https://static.fbshop.vn/wp-content/media-old/uploads/2019/03/tham-cau-long-tinsue-bsc-750.png",
    hours: "05:00 - 22:00",
    phone: "0908 123 789",
    pricing: [
      { day: "T2 - T6", time: "5h - 12h", cost: "60,000đ" },
      { day: "T2 - T6", time: "15h - 22h", cost: "85,000đ" },
      { day: "T7 - CN", time: "5h - 22h", cost: "115,000đ" },
    ],
  },
  {
    id: 7,
    name: "Sân cầu lông Phú Thọ",
    address: "221 Lý Thường Kiệt, Quận 10",
    rating: 4.5,
    reviews: 8,
    image:
      "https://lh5.googleusercontent.com/proxy/sdR4jJngWlMElsL2imTfZP3krNyY0hsJGo4gi7Jl8w-BrJZngauh5nlS3TjbwxQ6q_rmxyPwMQMmwMiceDL3QR6xlZabC7bo-6DU-nbRekDI-ixbb00saRxjsXJ40GtDjTE6MluRjoTt1n0",
    hours: "05:00 - 23:00",
    phone: "0909 456 123",
    pricing: [
      { day: "T2 - T6", time: "5h - 12h", cost: "65,000đ" },
      { day: "T2 - T6", time: "16h - 23h", cost: "90,000đ" },
      { day: "T7 - CN", time: "5h - 23h", cost: "125,000đ" },
    ],
  },
  {
    id: 8,
    name: "Sân cầu lông Hoàng Hoa Thám",
    address: "Số 10 Hoàng Hoa Thám, Phường 7, Bình Thạnh",
    rating: 4.4,
    reviews: 4,
    image:
      "https://chieusangngoaitroi.com/wp-content/uploads/2020/08/tong-hop-nhung-loai-den-chieu-sang-san-cau-long.jpg",
    hours: "06:00 - 22:00",
    phone: "0976 543 210",
    pricing: [
      { day: "T2 - T6", time: "6h - 12h", cost: "55,000đ" },
      { day: "T2 - T6", time: "15h - 22h", cost: "85,000đ" },
      { day: "T7 - CN", time: "6h - 22h", cost: "115,000đ" },
    ],
  },
  {
    id: 9,
    name: "Sân cầu lông Vinhomes Central Park",
    address: "208 Nguyễn Hữu Cảnh, Phường 22, Bình Thạnh",
    rating: 4.9,
    reviews: 9,
    image:
      "https://cdn.shopvnb.com/uploads/tin_tuc/kich-thuoc-tieu-chuan-san-cau-long-trong-nha-danh-doi-va-danh-don.webp",
    hours: "05:00 - 22:00",
    phone: "0923 456 654",
    pricing: [
      { day: "T2 - T6", time: "5h - 12h", cost: "75,000đ" },
      { day: "T2 - T6", time: "15h - 22h", cost: "100,000đ" },
      { day: "T7 - CN", time: "5h - 22h", cost: "130,000đ" },
    ],
  },
  {
    id: 10,
    name: "Sân cầu lông Gia Định",
    address: "Số 1 Đường Nơ Trang Long, Phường 7, Bình Thạnh",
    rating: 4.3,
    reviews: 5,
    image: "https://sancaulong.vn/upload_images/images/2022/03/28/1(30).jpg",
    hours: "05:30 - 21:30",
    phone: "0981 234 567",
    pricing: [
      { day: "T2 - T6", time: "5h30 - 12h", cost: "60,000đ" },
      { day: "T2 - T6", time: "14h - 21h30", cost: "80,000đ" },
      { day: "T7 - CN", time: "5h30 - 21h30", cost: "120,000đ" },
    ],
  },
];

export default courts;
