class Widget {
  constructor() { }
}

class TextLabel extends Widget {
  constructor(text) {
    super();
    this.text = text;
  }
}

class Button extends Widget {
  constructor() {
    super();
  }
}

class ButtonMinimize extends Button {
  constructor() {
    super();
  }
}

class ButtonMaximize extends Button {
  constructor() {
    super();
  }
}

class ButtonClose extends Button {
  constructor() {
    super();
  }
}

class MenuItem extends Widget {
  constructor(menuText) {
    super();
    this.menuText = menuText;
  }
}

// TODO: 01. Buat class Icon

class MenuBar extends Widget {
  constructor(text, menuItems = []) {
    super();
    this.menuText = new TextLabel(text);
    this.buttonMinimize = new ButtonMinimize();
    this.buttonMaximize = new ButtonMaximize();
    this.buttonClose = new ButtonClose();
    this.arrMenuItem = menuItems;
  }
}

// TODO: 02. Buat class MenuBarWithIcon

// TODO: 04. Buat class MenuFactory
// class MenuFactory memiliki sebuah method createMenu
// menerima parameter berupa: 
//    selector - String
//    title - String
//    arrMenuName - Array of String
// akan mereturn
//    MenuBarWithIcon atau MenuBar dengan parameter yang diberikan

// Driver code - 01
// Before Factory Method
// Instantiate di sini

// TODO: 03. Setelah membuat Icon dan MenuBarWithIcon, uncomment this
// dan jalankan apps

// TODO: 05. Setelah membuat Factory Method, comment this

// let menuBars = [];

// let vsCodeMenuItems = [
//   new MenuItem("File"),
//   new MenuItem("Edit"),
//   new MenuItem("View")
// ];
// let vsCode = new MenuBarWithIcon("VSCode", vsCodeMenuItems);

// let adobeMenuItems = [
//   new MenuItem("File"),
//   new MenuItem("Help")
// ]
// let adobe = new MenuBarWithIcon("Adobe", adobeMenuItems)

// let terminal = new MenuBar("Terminal");

// menuBars.push(vsCode, adobe, terminal);
// console.log(menuBars);

// ------------------------------------------------------------------

// Driver code - 02
// After Factory Method

// TODO: 06. Setelah membuat Factory, uncomment this
// dan jalankan apps

// let menuFactory = new MenuFactory();
// let menuBars = [];

// let vsCodeText = "VSCode";
// let vsCodeMenuItems = ["File", "Edit", "View"];

// let adobeText = "Adobe";
// let adobeMenuItems = ["File", "Help"];

// let terminalText = "Terminal";

// menuBars.push(
//   menuFactory.createMenu("icon", vsCodeText, vsCodeMenuItems),
//   menuFactory.createMenu("icon", adobeText, adobeMenuItems),
//   menuFactory.createMenu("noicon", terminalText, [])
// );
// console.log(menuBars);