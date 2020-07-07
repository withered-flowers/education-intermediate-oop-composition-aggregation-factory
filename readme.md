## Table of Content
1. [Recap OOP](#recap-oop)
1. [OOP - Composition](#oop---composition)
1. [OOP - Aggregation](#oop---aggregation)
1. [Pattern - Factory](#pattern---factory)
    * [Static Method](#static-method)
1. [References](#references)

## Recap OOP

Mari kita mengulang untuk membuat OOP yang sederhana yah. Misalkan kita 
mengetahui bahwa pada *smartphone* kita ini, semua *user interface* yang dilihat
merupakan sesuatu yang bernama `TextLabel` dan `Button`. 

Keduanya ini merupakan *anakan* dari sesuatu yang bernama `Widget`.

Maka, apabila didefinisikan dalam bentuk OOP, maka kita dapat menuliskan
keempatnya, dengan cara sebagai berikut:

```javascript
// File: 01-recap-oop.js
class Widget {
  constructor() { }
}

class TextLabel extends Widget {
  constructor() {
    // Ingat ini yah !
    super();
  }
}

class Button extends Widget {
  constructor() {
    // Ingat ini yah !
    super();
  }
}
```

Nah berarti dari contoh di atas ini, kita bisa melihat bahwa sebenarnya, 
terjadi suatu hubungan `Parent` dan `Child` dari kode di atas ini yah !

Tapi, apakah mungkin, kalau kita mendefinisikan relasi lainnya yang merupakan
suatu keterikatan antar class yang setara, ataupun class yang berbeda sama 
sekali?

Untuk mengetahui jawaban ini, kita butuh untuk mengetahui sesuatu lebih lanjut
yang bernama `Composition` dan `Aggregation`.

## OOP - Composition

Misalnya, dalam aplikasi Desktop, pada suatu `MenuBar`, kita harus 
memiliki suatu `TextLabel` yang menyatakan judul, dan 3 buah Tombol yang 
menyatakan `ButtonMinimize`, `ButtonMaximize`, dan `ButtonClose` yang merupakan
*anak* dari `Button` ?

Bagaimanakah cara nya kita merepresentasikan permasalahan ini dalam bentuk 
kode OOP?

```javascript
// File: 02-oop-composition.js
...

class TextLabel extends Widget {
  constructor(text) {
    super();
    this.text = text;
  }
}

...

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
  constructor(text) {
    super();
    this.menuText = new TextLabel(text);
    this.buttonMinimize = new ButtonMinimize();
    this.buttonMaximize = new ButtonMaximize();
    this.buttonClose = new ButtonClose();
  }
}

// Instantiate di sini
let VSCode = new MenuBar("VSCode");
console.log(VSCode);
```

Berarti secara tidak langsung, kita sudah mempelajari, bagaimana cara kita
membuat beberapa class yang memilik relasi dalam bentuk `Composition`,
sebuah relasi yang menyatakan bahwa, `apalah aku tanpamu`, 

Dalam bahasa *berat*-nya, `Composition` merupakan hubungan yang menyatakan 
sebuah `class` merupakan `bagian dari` (`part-of`) `class` lainnya.

Selain contoh yang ada di atas ini, kita juga bisa mengambil contoh dari 
kehidupan sehari-hari yang lainnya, misalnya, di dalam sebuah `Mobil` harus
punya `Mesin`.

(Supaya sebuah mobil bisa berjalan, membutuhkan adanya mesin bukan?)

Nah, setelah mengerti tentang `Composition`, mari kita melanjutkan pembuatan 
`MenuBar` lagi yah !

## OOP - Aggregation

Selanjutnya, untuk `MenuBar` yang akan kita buat, kalau kita lihat dari
aplikasi yang ada di pasaran, tentunya belum lengkap bukan? karena belum 
memiliki `MenuItem`.

Bagaimana kalau kita ingin merepresentasikannya dalam kode OOP kita ini?

```javascript
// File: 03-oop-aggregation.js
...

// Class baru, MenuItem
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

let vsCode = new MenuBar("VSCode", VSCodeMenuItems);
console.log(vsCode);
```

Sekarang kalau kita analisis perbedaan dengan kode sebbelumnya adalah, 
`MenuBar` ini bisa atau boleh terbentuk tanpa adanya `MenuItem`, sehingga 
`MenuItem` ini sifatnya adalah sesuatu yang optional jumlahnya dan boleh 
ditambahkan seperlunya saja.

Dalam bahasa *berat*-nya, `Aggregation` merupakan hubungan yang menyatakan
sebuah `class` memiliki `sebuah referensi` pada (`has-a`) `class` lainnya.

Contoh lainnya dalam kehidupan nyata misalnya adalah hubungan antara 
`Departemen` dengan `Pegawai` yang ada. Satu departemen bisa memiliki 
satu atau bahkan lebih pegawai, bahkan jumlah bisa nol, kalau departemen itu
sudah ditutup, namun tidak dihapuskan.

## Pattern - Factory

Nah kemudian kita bergerak ke permasalahan selanjutnya, bagaimana seandainya
bila kita ingin membuat dua tipe `MenuBar`, di mana yang satu memiliki `Icon`,
dan yang kedua tidak memiliki `Icon`?

Maka kita akan membuatnya seperti berikut:

```javascript
// File: 04-pattern-factory.js
class Icon extends Widget {
  constructor() {
    super();
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
```

Nah, sekarang bagaimana bila kita ingin meng-`instantiate` 3 `MenuBar`, 
2 non-icon dan 1 icon dan menaruhnya dalam kumpulan `MenuBar` ?

```javascript
let menuBars = [];

let vsCodeMenuItems = [
  new MenuItem("File"),
  new MenuItem("Edit"),
  new MenuItem("View")
];
let vsCode = new MenuBarWithIcon("VSCode", vsCodeMenuItems);

let adobeMenuItems = [
  new MenuItem("File"),
  new MenuItem("Help")
]
let adobe = new MenuBarWithIcon("Adobe", adobeMenuItems)

let terminal = new MenuBar("Terminal");

menuBars.push(vsCode, adobe, terminal);
console.log(menuBars);
```

Kalau menulis seperti ini cukup *pegel* bukan? Kurang efisien bukan?
Bayangkan kalau ada 10 yang akan kita tulis, tangan bisa jadi keriting* bukan?

Bagaimana cara kita mengakalinya?

Dengan menggunakan `Factory` method !

`Factory` method, adalah sebuah metode atau pola desain pemrograman, dimana kita
membuat pabrik untuk `class` yang akan dibuat. Dalam contoh di atas, `class`nya 
adalah `MenuBar` dan `MenuBarWithIcon`.

Bagaimana cara kita menuliskannya?

```javascript
// File: 04-pattern-factory.js
...
// Buat sebuah class baru misalnya MenuFactory
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
}

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

let menuFactory = new MenuFactory();
let menuBars = [];

let vsCodeText = "VSCode";
let vsCodeMenuItems = ["File", "Edit", "View"];

let adobeText = "Adobe";
let adobeMenuItems = ["File", "Help"];

let terminalText = "Terminal";

menuBars.push(
  menuFactory.createMenu("icon", vsCodeText, vsCodeMenuItems),
  menuFactory.createMenu("icon", adobeText, adobeMenuItems),
  menuFactory.createMenu("noicon", terminalText, [])
);
console.log(menuBars);
```

Dan dengan demikian, kita sudah berhasil untuk membuat sebuah `Factory` 
classnya. Hore kita berhasil !

*Eits*, tapi jangan senang dulu, karena, kita masih ada sedikit kesalahan loh !
Mengapa demikian? Karena method dalam `Factory` baru bisa digunakan ketika 
classnya kita `instantiate` loh, padahal kan `Factory` method ini sebaiknya
digunakan tanpa perlu kita `instantiate` classnya, *loh* bagaimanakah caranya?

Ya, caranya adalah dengan menggunakan `static` method !

### Static Method

`Static` method adalah sebuah method (fungsi) yang bisa digunakan tanpa perlu 
kita meng-*instantiate* class dimana method tersebut berada.

Cara menggunakannya pun cukup mudah, cukup menambahkan kata `static` di method
yang akan digunakan.

Sekarang kita akan coba mengubah method `createMenu` pada `MenuFactory` menjadi
`createMenu2` dan menjadi `static`.

Caranya adalah dengan:

```javascript
// File: 05-static-method.js
...

class MenuFactory {
  ...

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

...

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
```

Nah dengan demikian, kita sudah berhasil mempelajari 
Composition, Aggregation, Factory Pattern, dan Static Method

## References
* [Aggregation vs Composition](https://techdifferences.com/difference-between-aggregation-and-composition.html)
* [Association, Aggregation, and Composition in Java](https://www.geeksforgeeks.org/association-composition-aggregation-java/)
