// TODO: Buat class MenuItem

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

class MenuBar extends Widget {
  // TODO: Tambahkan parameter untuk array of MenuItem di dalam constructor
  constructor(text) {
    super();
    this.menuText = new TextLabel(text);
    this.buttonMinimize = new ButtonMinimize();
    this.buttonMaximize = new ButtonMaximize();
    this.buttonClose = new ButtonClose();
    // TODO: Buat Kumpulan Menu Item di sini
  }
}

// driver code
// Instantiate di sini

// TODO: Selesai buat class, uncomment this
// let vsCodeMenuItems = [
//   new MenuItem("File"),
//   new MenuItem("Edit"),
//   new MenuItem("View")
// ];

// let vsCode = new MenuBar("VSCode", menuItems);
// console.log(vsCode);