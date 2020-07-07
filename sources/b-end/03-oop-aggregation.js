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

// Jangan lupa untuk mengganti constructornya karena 
// kebutuhannya sekarang sudah berubah
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

// Instantiate di sini
let vsCodeMenuItems = [
  new MenuItem("File"),
  new MenuItem("Edit"),
  new MenuItem("View")
];

let vsCode = new MenuBar("VSCode", menuItems);
console.log(vsCode);

