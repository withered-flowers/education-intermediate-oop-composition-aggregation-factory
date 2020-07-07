// File: 04-pattern-factory.js
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

class Icon extends Widget {
  constructor() {
    super();
  }
}

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

class MenuBarWithIcon extends Widget {
  constructor(text, menuItems = []) {
    super();
    this.menuText = new TextLabel(text);
    this.buttonMinimize = new ButtonMinimize();
    this.buttonMaximize = new ButtonMaximize();
    this.buttonClose = new ButtonClose();
    this.icon = new Icon();
    this.arrMenuItem = menuItems;
  }
}

class MenuFactory {
  createMenu(selector, title, arrMenuName) {
    let menuItems = [];

    for(let i = 0; i < arrMenuName.length; i++) {
      menuItems.push(new MenuItem(arrMenuName[i]));
    }

    if(selector === 'icon') {
      return new MenuBarWithIcon(title, menuItems); 
    }
    else if(selector === 'noicon') {
      return new MenuBar(title, menuItems);
    }
  }

  // Nah kita mengubahnya menjadi static sekarang
  static createMenu2(selector, title, arrMenuName) {
    let menuItems = [];

    for(let i = 0; i < arrMenuName.length; i++) {
      menuItems.push(new MenuItem(arrMenuName[i]));
    }

    if(selector === 'icon') {
      return new MenuBarWithIcon(title, menuItems); 
    }
    else if(selector === 'noicon') {
      return new MenuBar(title, menuItems);
    }
  }
}

// let menuFactory = new MenuFactory();
let menuBars = [];

let vsCodeText = "VSCode";
let vsCodeMenuItems = ["File", "Edit", "View"];

let adobeText = "Adobe";
let adobeMenuItems = ["File", "Help"];

let terminalText = "Terminal";

menuBars.push(
  // Cara menggunakan static method
  // Panggil NamaClass[dot]namaMethod(... params)
  // e.g. 
  // MenuFactory.createMenu2()
  MenuFactory.createMenu2("icon", vsCodeText, vsCodeMenuItems),
  MenuFactory.createMenu2("icon", adobeText, adobeMenuItems),
  MenuFactory.createMenu2("noicon", terminalText, [])
);
console.log(menuBars);