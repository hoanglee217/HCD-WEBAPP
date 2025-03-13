import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          //start auth
          logout: "Logout",
          login: "Login",
          register: "Register",
          loginPage: "Login Into Your Account",
          registerPage: "Create Your Account",
          forgetPage: "Forget Password",
          redirectLogin: "Already have an account?",
          redirectRegister: "Don't have an account?",
          forgetPass: "Forget your password?",
          rememberMe: "Remember me",
          confirmPass: "Confirm Password",
          userName: "User Name",
          firstName: "First Name",
          lastName: "Last Name",
          pass: "Password",
          phoneNumber: "Phone Number",
          email: "Email",
          //end auth

          admin: "admin",
          dashboard: "Dashboard",
          orders: "Orders",
          products: "Products",
          customers: "Customers",
          analytics: "Analytics",
          discount: "Discount",
          inventory: "Inventory",

          summary: "Summary",
          thisMonthSales: "This month Sales",
          thisMonthOrders: "This month Orders",
          thisMonthRevenue: "This month Revenue",
          quickAnalysis: "Quick Analysis",
          topCustomers: "Top Customers",
          latestTransaction: "Latest Transactions",
          customer: "Customer",
          totalSpending: "Total Spending",
          totalOrders: "Total Orders",
          orderID: "Order ID",
          totalPrice: "Total Price",
          date: "Date",
          status: "Status",
          approved: "Approved",
          pending: "Pending",
          rejected: "Rejected",
          viewAll: "View All",
          search: "Search",
          editCustomer: "Edit Customer",
          editProduct: "Edit Product",
          AccountDetails: "Account Details",
          contacts: "Contacts",
          address: "Address",
          location: "Location",
          deleteCustomer: "Delete Customer",
          modalMessage: "Are you sure about delete this?",
          actions: "Actions",
          all: "All",
          clothing: "Clothing",
          digital: "Digital",
          beauty: "Beauty",
          product: "Product",
          price: "Price",
          proName: "Product Name",
          inventoryCount: "Inventory Count",
          salesAmount: "5,340",
          orderAmount: "3000",
          revenueAmount: "2,500",
          currency: "$",
          summaryOfSale: "Chart Of Sale",
          summaryOfRevenue: "Chart Of Revenue",
          summaryOfOrders: "Chart Of Order",
          Jan: "Jan",
          Feb: "Feb",
          Mar: "Mar",
          Apr: "Apr",
          May: "May",
          Jun: "Jun",
          July: "July",
          Aug: "Aug",
          Sep: "Sep",
          Oct: "Oct",
          Nov: "Nov",
          Dec: "Dec",
          backToHome: "Back to Main Page",
          notFoundMsg: "Page Not Found!",

          //common
          PERMALINK: "Permalink",
          //end common

          //action
          ADD: "Add",
          EDIT: "Edit",
          DELETE: "Delete",
          SAVE: "Save",
          CANCEL: "Cancel",
          UPLOAD: "Upload",
          CONFIRM: "Confirm",
          //end action

          //common column
          NAME: "Name",
          ACTION: "Action",
          TITLE: "Title",
          SLUG: "Slug",
          RATING: "Rating",
          AUTHOR: "Author",
          //end common column

          //common alert
          UPDATE_SUCCESS: "Update Successfully",
          SEARCH_PLACEHOLDER: "Search here...",
          //end common alert

          //table
          MISSING_TITLE_TABLE: "Missing Title Table",
          MISSING_PLACEHOLDER_SEARCH: "Missing Placeholder Search",
          //end table

          //Category
          CATEGORIES: "Categories",
          CATEGORY: "Category",
          CATEGORY_SUB_TITLE: "List of categories",
          CATEGORY_UPDATE: "Update Category",
          CATEGORY_CREATE: "Add New Category",
          CATEGORY_NAME: "Category Name",
          CATEGORY_NAME_PLACEHOLDER: "Enter Category Name",
          CATEGORY_NAME_REQUIRED: "Please enter category name",
          CATEGORY_PARENT: "Parent Category",
          CATEGORY_PARENT_PLACEHOLDER: "Select Parent Category",

          CATEGORY_DELETE_TITLE: "Delete Category",
          CATEGORY_DELETE_CONTENT:
            "Are you sure you want to delete this category '{{name}}'?",
          CATEGORY_DELETE_SUCCESS: "Delete Category Successfully",
          CATEGORY_CREATE_SUCCESS: "Add Category Successfully",

          CATEGORY_MAX_CHILDREN: "Subcategory limit exceeded",

          CATEGORY_UPDATE_FAIL: "Category update failed:",
          CATEGORY_CREATE_FAIL: "Add Category failed",
          //end Category

          //blog
          BLOG: "Blog",
          BLOGS: "Blogs",

          BLOG_SUB_TITLE: "List of blogs",
          BLOG_UPDATE: "Blog Update",
          BLOG_CREATE: "Blog Create",
          BLOG_TITLE: "Blog Title",
          BLOG_SLUG: "Blog Slug",
          BLOG_CATEGORY: "Blog Category",
          BLOG_CONTENT: "Blog Content",

          ADD_BLOG_HEADER: "Add new post",
          ADD_BLOG_TITLE_PLACEHOLDER: "Add title",
          //end blog

          //comment
          COMMENT: "Comment",
          COMMENTS: "Comments",
          //end comment

          //tag
          TAG: "Tag",
          TAGS: "Tags",
          //end tag
        },
      },
      vi: {
        translation: {
          //start auth
          loginPage: "Đăng nhập vào tài khoản của bạn",
          registerPage: "Đăng ký tài khoản",
          forgetPage: "Lấy lại mật khẩu của bạn",
          login: "Đăng nhập",
          register: "Đăng ký",
          redirectLogin: "Bạn đã có tài khoản?",
          redirectRegister: "Bạn chưa có tài khoản?",
          forgetPass: "Quên mật khẩu?",
          rememberMe: "Ghi nhớ đăng nhập",
          logout: "Đăng xuất",
          confirmPass: "Nhập lại mật khẩu",
          userName: "Tên người dùng",
          firstName: "Họ",
          lastName: "Tên",
          pass: "Mật khẩu",
          phoneNumber: "Số điện thoại",
          //end auth

          admin: "Quản trị viên",
          dashboard: "Bảng điều khiển",
          orders: "Đơn hàng",
          products: "Sản phẩm",
          customers: "Khách hàng",
          analytics: "Phân tích",
          discount: "Giảm giá",
          inventory: "Tồn kho",
          summary: "Tóm tắt",
          thisMonthSales: "Doanh số tháng này",
          thisMonthOrders: "Đơn hàng tháng này",
          thisMonthRevenue: "Doanh thu tháng này",
          quickAnalysis: "Phân tích nhanh",
          topCustomers: "Khách hàng hàng đầu",
          latestTransaction: "Giao dịch mới nhất",
          customer: "Khách hàng",
          totalSpending: "Tổng chi tiêu",
          totalOrders: "Tổng đơn hàng",
          orderID: "Mã đơn hàng",
          totalPrice: "Tổng giá trị",
          date: "Ngày",
          status: "Trạng thái",
          approved: "Đã phê duyệt",
          pending: "Đang chờ",
          rejected: "Bị từ chối",
          viewAll: "Xem tất cả",
          search: "Tìm kiếm",
          editCustomer: "Chỉnh sửa khách hàng",
          editProduct: "Chỉnh sửa sản phẩm",
          AccountDetails: "Thông tin tài khoản",
          contacts: "Thông tin liên lạc",
          email: "Email",
          address: "Địa chỉ",
          location: "Vị trí",
          actions: "Hành động",
          deleteCustomer: "Xóa khách hàng",
          modalMessage: "Bạn có chắc chắn muốn xóa không?",
          all: "Tất cả",
          clothing: "Quần áo",
          digital: "Kỹ thuật số",
          beauty: "Làm đẹp",
          product: "Sản phẩm",
          price: "Giá",
          proName: "Tên sản phẩm",
          inventoryCount: "Số lượng tồn kho",
          salesAmount: "24,000,000",
          orderAmount: "3,000",
          revenueAmount: "12,000,000",
          currency: "VND",
          summaryOfSale: "Biểu đồ doanh số",
          summaryOfRevenue: "Biểu đồ lợi nhuận",
          summaryOfOrders: "Biểu đồ đơn hàng",
          Jan: "Tháng 1",
          Feb: "Tháng 2",
          Mar: "Tháng 3",
          Apr: "Tháng 4",
          May: "Tháng 5",
          Jun: "Tháng 6",
          July: "Tháng 7",
          Aug: "Tháng 8",
          Sep: "Tháng 9",
          Oct: "Tháng 10",
          Nov: "Tháng 11",
          Dec: "Tháng 12",
          backToHome: "Trở về trang chủ",
          notFoundMsg: "Không tìm thấy trang!",

          //common
          PERMALINK: "Permalink",
          //end common

          //action
          ADD: "Thêm mới",
          EDIT: "Chỉnh sửa",
          DELETE: "Xóa",
          SAVE: "Lưu",
          CANCEL: "Hủy",
          UPLOAD: "Tải lên",
          CONFIRM: "Xác nhận",
          //end action

          //common column
          NAME: "Tên",
          ACTION: "Hành động",
          TITLE: "Tiêu đề",
          SLUG: "Đường dẫn",
          RATING: "Đánh giá",
          AUTHOR: "Tác giả",
          //end common column

          //common alert
          UPDATE_SUCCESS: "Cập nhật thành công",
          SEARCH_PLACEHOLDER: "Tìm kiếm...",
          //end common alert

          //table
          MISSING_TITLE_TABLE: "Thiếu tiêu đề bảng",
          MISSING_PLACEHOLDER_SEARCH: "Thiếu chỗ tìm kiếm",
          //end table

          //Category
          CATEGORIES: "Danh mục",
          CATEGORY: "Danh mục",
          CATEGORY_SUB_TITLE: "Danh sách danh mục",
          CATEGORY_UPDATE: "Cập nhật danh mục",
          CATEGORY_CREATE: "Thêm mới danh mục",
          CATEGORY_NAME: "Tên danh mục:",
          CATEGORY_NAME_PLACEHOLDER: "Nhập tên danh mục",
          CATEGORY_NAME_REQUIRED: "Vui lòng nhập tên danh mục",
          CATEGORY_PARENT: "Danh mục cha:",
          CATEGORY_PARENT_PLACEHOLDER: "Chọn danh mục cha",

          CATEGORY_DELETE_TITLE: "Xoá Danh mục",
          CATEGORY_DELETE_CONTENT:
            "Bạn chắc chắn muốn xoá danh mục '{{name}}' này chứ?",
          CATEGORY_DELETE_SUCCESS: "Xoá danh mục thành công",
          CATEGORY_CREATE_SUCCESS: "Thêm mới danh mục thành công",

          CATEGORY_MAX_CHILDREN: "Quá giới hạn danh mục con",

          CATEGORY_UPDATE_FAIL: "Cập nhật danh mục không thành công:",
          CATEGORY_CREATE_FAIL: "Thêm mới danh mục không thành công:",
          //end Category

          //blog
          BLOG: "Bài viết",
          BLOGS: "Bài viết",

          BLOG_SUB_TITLE: "Danh sách bài viết",
          BLOG_UPDATE: "Cập nhật bài viết",
          BLOG_CREATE: "Tạo bài viết",
          BLOG_TITLE: "Tiêu đề bài viết",
          BLOG_SLUG: "Đường dẫn bài viết",
          BLOG_CATEGORY: "Danh mục bài viết",
          BLOG_CONTENT: "Nội dung bài viết",

          ADD_BLOG_HEADER: "Thêm bài viết",
          ADD_BLOG_TITLE_PLACEHOLDER: "Thêm tiêu đề",
          //end blog

          //comment
          COMMENT: "Bình luận",
          COMMENTS: "Bình luận",
          //end comment

          //tag
          TAG: "Thẻ",
          TAGS: "Thẻ",
          //end tag
        },
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
