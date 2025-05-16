const sidebarNav = [
  {
    link: "/",
    section: "dashboard",
    icon: "lucide:layout-dashboard", //width:"20"
    text: "Dashboard",
  },
  {
    link: "/categories",
    section: "categories",
    icon: "icon-park-outline:ad-product",
    text: "CATEGORIES",
  },
  {
    link: "/blogs",
    section: "blogs",
    icon: "mdi:post-it-note-text-outline",
    text: "BLOGS",
    children: 
    [
      {
        link: "/add-blog",
        section: "addBlog",
        text: "BLOG_CREATE",
      },
    ]
  },
  {
    link: "/comments",
    section: "comments",
    icon: "fluent:chat-12-regular",
    text: "COMMENTS",
  },
  {
    link: "/tags",
    section: "tags",
    icon: "mdi:tag-outline",
    text: "TAGS",
  },
  {
    link: "/settings",
    section: "settings",
    icon: "uil:setting",
    text: "SETTING",
  },
];

export default sidebarNav;
