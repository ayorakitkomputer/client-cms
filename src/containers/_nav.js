export default [
  {
    _name: "CSidebarNav",
    _children: [
      {
        _name: "CSidebarNavTitle",
        _children: ["Menu"],
      },
      {
        _name: "CSidebarNavItem",
        name: "Dashboard",
        to: "/dashboard",
        icon: "cil-speedometer",
      },
      {
        _name: "CSidebarNavDropdown",
        name: "Select Components",
        route: "/component",
        icon: "cil-puzzle",
        items: [
          {
            name: "CPU",
            to: "/component/CPU",
          },
          {
            name: "Motherboard",
            to: "/component/Motherboard",
          },
          {
            name: "Memory",
            to: "/component/Memory",
          },
          {
            name: "Storage",
            to: "/component/Storage",
          },
          {
            name: "GPU",
            to: "/component/GPU",
          },
          {
            name: "Case",
            to: "/component/Case",
          },
          {
            name: "Power Supply",
            to: "/component/PowerSupply",
          },
          {
            name: "Monitor",
            to: "/component/Monitor",
          },
        ],
      },
      {
        _name: "CSidebarNavItem",
        name: "Live Chat",
        to: "/chat",
        icon: "cil-speech",
      },
      {
        _name: "CSidebarNavDivider",
        _class: "m-2",
      },
      {
        _name: "CSidebarNavTitle",
        _children: ["Admin"],
      },
      {
        _name: "CSidebarNavDropdown",
        name: "Account",
        route: "/account",
        icon: "cil-star",
        items: [
          {
            name: "Login",
            to: "/account/login",
          },
          {
            name: "Logout",
            to: "/account/login",
          },
        ],
      },
    ],
  },
];
