const App = {
    init: () => {
      console.log("init our timeline")
  
      App.controllers.createElements()
      App.event.createHover()
  
      console.log("end our timeline")
    },
  
    event: {
      createHover() {
        const els = App.elements
        //#region upperMenu
        els.upperMenu.rightHover1.onmouseover = () => {
          els.upperMenu.rightHover1.style.textDecoration = "underline"
        }
        els.upperMenu.rightHover1.onmouseleave = () => {
          els.upperMenu.rightHover1.style.textDecoration = "none"
        }
        els.upperMenu.rightHover2.onmouseover = () => {
          els.upperMenu.rightHover2.style.textDecoration = "underline"
        }
        els.upperMenu.rightHover2.onmouseleave = () => {
          els.upperMenu.rightHover2.style.textDecoration = "none"
        }
        els.upperMenu.leftHover1.onmouseenter = () => {
          els.upperMenu.leftHover1.style.textDecoration = "underline"
        }
        els.upperMenu.leftHover1.onmouseleave = () => {
          els.upperMenu.leftHover1.style.textDecoration = "none"
        }
        els.upperMenu.leftHover2.onmouseenter = () => {
          els.upperMenu.leftHover1.style.textDecoration = "underline"
        }
        els.upperMenu.leftHover2.onmouseleave = () => {
          els.upperMenu.leftHover2.style.textDecoration = "none"
        }
  
  
  
      },
  
  
  
  
  
    },
    controllers: {
      createElements() {
        //#region els
        const els = App.elements
        //#endregion
        //style 
  
        //#region uppermenu 
  
        const u = els.upperMenu
  
        u.Container.style.display = "flex"
        u.Container.style.justifyContent = "space-between"
        u.rightHover1.innerHTML = "Googleについて"
        u.rightHover1.style.marginRight = "10px"
        u.rightHover2.innerHTML = "ストア"
        u.rightHover2.style.marginRight = "10px"
        u.leftHover1.innerHTML = "Gmail"
        u.leftHover1.style.marginLeft = "auto"
        u.leftHover2.innerHTML = "画像"
        u.leftHover2.style.marginRight = "10px"
        u.leftIcon1a.style.backgroundColor = "rgb(200,200,200)"
        u.leftIcon1a.style.border = "1px"
        u.leftIcon1a.style.borderRadius = "100%"
        u.leftIcon1a.style.cursor = "pointer"
        u.leftIcon1a.style.marginRight = "10px"
        u.leftIcon1svg.setAttribute("width", "24px"),
          u.leftIcon1svg.setAttribute("height", "24px"),
          u.leftIcon1svg.setAttribute("viewBox", "0 0 24 24"),
          u.leftIcon1path.setAttribute("fill", "currentColor"),
          u.leftIcon1path.setAttribute("d", "M12 16C13.1 16 14 16.9 14 18S13.1 20 12 20 10 19.1 10 18 10.9 16 12 16M12 10C13.1 10 14 10.9 14 12S13.1 14 12 14 10 13.1 10 12 10.9 10 12 10M12 4C13.1 4 14 4.9 14 6S13.1 8 12 8 10 7.1 10 6 10.9 4 12 4M6 16C7.1 16 8 16.9 8 18S7.1 20 6 20 4 19.1 4 18 4.9 16 6 16M6 10C7.1 10 8 10.9 8 12S7.1 14 6 14 4 13.1 4 12 4.9 10 6 10M6 4C7.1 4 8 4.9 8 6S7.1 8 6 8 4 7.1 4 6 4.9 4 6 4M18 16C19.1 16 20 16.9 20 18S19.1 20 18 20 16 19.1 16 18 16.9 16 18 16M18 10C19.1 10 20 10.9 20 12S19.1 14 18 14 16 13.1 16 12 16.9 10 18 10M18 4C19.1 4 20 4.9 20 6S19.1 8 18 8 16 7.1 16 6 16.9 4 18 4Z"),
          u.leftIcon2a.style.backgroundColor = "rgb(200,200,200)"
        u.leftIcon2a.style.border = "1px"
        u.leftIcon2a.style.borderRadius = "100%"
        u.leftIcon2a.style.cursor = "pointer"
        u.leftIcon2a.style.marginRight = "10px"
        u.leftIcon2svg.setAttribute("width", "24px"),
          u.leftIcon2svg.setAttribute("height", "24px"),
          u.leftIcon2svg.setAttribute("viewBox", "0 0 24 24"),
          u.leftIcon2path.setAttribute("fill", "currentColor"),
          u.leftIcon2path.setAttribute("d", "M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"),
          //#endregion
  
          //#region Append
  
          els.root.appendChild(els.upperMenu.Container)
        els.upperMenu.Container.appendChild(els.upperMenu.rightHover1)
        els.upperMenu.Container.appendChild(els.upperMenu.rightHover2)
        els.upperMenu.Container.appendChild(els.upperMenu.leftHover1)
        els.upperMenu.Container.appendChild(els.upperMenu.leftHover2)
        els.upperMenu.Container.appendChild(els.upperMenu.leftIcon1a)
        els.upperMenu.leftIcon1svg.appendChild(els.upperMenu.leftIcon1path)
        els.upperMenu.Container.appendChild(els.upperMenu.leftIcon1svg)
        els.upperMenu.Container.appendChild(els.upperMenu.leftIcon2a)
        els.upperMenu.leftIcon2svg.appendChild(els.upperMenu.leftIcon2path)
        els.upperMenu.Container.appendChild(els.upperMenu.leftIcon2svg)
        els.title.titlep.appendChild(els.title.titlediv)
        els.root.appendChild(els.title.titlep)
        els.title.titlediv.appendChild(els.title.titleimg)
        els.root.appendChild(els.searchBox.Container)
        els.searchBox.Container.appendChild(els.searchBox.searchBoxdiv)
        els.searchBox.searchBoxdiv.appendChild(els.searchBox.searchBoxMeganeS)
        els.searchBox.searchBoxMeganeS.appendChild(els.searchBox.searchBoxMeganeP)
        els.searchBox.searchBoxdiv.appendChild(els.searchBox.searchBoxinput)
        els.searchBox.searchBoxdiv.appendChild(els.searchBox.searchBoxMikeS)
        els.searchBox.searchBoxMikeS.appendChild(els.searchBox.searchBoxMikeP) 
        els.root.appendChild(els.underSB.container)
        els.underSB.container.appendChild(els.underSB.underSB1)
        els.underSB.container.appendChild(els.underSB.underSB2)
        els.root.appendChild(els.underBox1)
        els.root.appendChild(els.underBox2.container)
        els.underBox2.container.appendChild(els.underBox2.a1)
        els.underBox2.container.appendChild(els.underBox2.a2)
        els.underBox2.container.appendChild(els.underBox2.a3)
        els.underBox2.container.appendChild(els.underBox2.a4)
        els.underBox2.container.appendChild(els.underBox2.a5)
        els.underBox2.container.appendChild(els.underBox2.a6)
        //#endregion
  
        //#region title
        const t = els.title
  
        t.titlediv.style.textAlign = "center"
        t.titlediv.style.marginTop = "200px"
        t.titleimg.src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        //#endregion
  
        //#region searchBox
        const sb = els.searchBox
  
        sb.Container.style.border = "none"
        sb.Container.style.display = "flex"
        sb.Container.style.justifyContent = "center"
        sb.searchBoxdiv.classList.add("searchBox")
        sb.searchBoxMeganeS.setAttribute("width", "24px")
        sb.searchBoxMeganeS.setAttribute("height", "24px")
        sb.searchBoxMeganeS.setAttribute("viewBox", "0 0 24 24")
        sb.searchBoxMeganeP.setAttribute("fill", "currentColor")
        sb.searchBoxMeganeP.setAttribute("d", "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z")
        sb.searchBoxinput.setAttribute("type", "text")
        sb.searchBoxinput.classList.add("searchBox-input")
        sb.searchBoxMikeS.setAttribute("width", "24px")
        sb.searchBoxMikeS.setAttribute("height", "24px")
        sb.searchBoxMikeS.setAttribute("viewBox", "0 0 24 24")
        sb.searchBoxMikeP.setAttribute("fill", "currentColor")
        sb.searchBoxMikeP.setAttribute("d", "M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z")
        //#endregion
  
        //#region underSB
        const usb = els.underSB
  
        usb.container.classList.add("box"),
          usb.underSB1.classList.add("searchbox2"),
          usb.underSB1.innerHTML = "Google検索"
        usb.underSB2.classList.add("searchbox2"),
          usb.underSB2.innerHTML = "I'm Feeling Lucky"
        //#endregion
  
        //#region underBox1
        els.underBox1.innerHTML = "日本"
        els.underBox1.innerHTML = "日本"
        els.underBox1.style.marginTop = "250px"
        els.underBox1.style.backgroundColor = "rgb(240, 240, 240)"
        els.underBox1.style.borderBottom = "rgb(200, 200, 200)"
        //#endregion
  
        //#region underBox2
        const u2 = els.underBox2
  
        u2.container.style.display = "flex"
        u2.container.style.justifyContent = "space-between"
        u2.container.style.backgroundColor = "rgb(240, 240, 240)"
        u2.a1.style.marginRight = "10px"
        u2.a1.innerHTML = "広告"
        u2.a2.style.marginRight = "10px"
        u2.a2.innerHTML = "ビジネス"
        u2.a3.style.marginRight = "auto"
        u2.a3.innerHTML = "検索の仕組み"
        u2.a4.style.marginRight = "10px"
        u2.a4.innerHTML = "プライバシー"
        u2.a5.style.marginRight = "10px"
        u2.a5.innerHTML = "規約"
        u2.a6.style.marginRight = "10px"
        u2.a6.innerHTML = "設定"
        //#endregion
  
      },
  
  
    },
  
    elements: {
      root: document.getElementById("app"),
  
      upperMenu: {
        Container: document.createElement("div"),
        rightHover1: document.createElement("a"),
        rightHover2: document.createElement("a"),
        leftHover1: document.createElement("a"),
        leftHover2: document.createElement("a"),
        leftIcon1a: document.createElement("a"),
        leftIcon1svg: document.createElementNS("http://www.w3.org/2000/svg", "svg"),
        leftIcon1path: document.createElementNS('http://www.w3.org/2000/svg', 'path'),
        leftIcon2a: document.createElement("a"),
        leftIcon2svg: document.createElementNS("http://www.w3.org/2000/svg", "svg"),
        leftIcon2path: document.createElementNS('http://www.w3.org/2000/svg', 'path'),
      },
  
      title: {
        titlep: document.createElement("p"),
        titlediv: document.createElement("div"),
        titleimg: document.createElement("img"),
      },
      searchBox: {
        Container: document.createElement("div"),
        searchBoxdiv: document.createElement("div"),
        searchBoxMeganeS: document.createElementNS("http://www.w3.org/2000/svg", "svg"),
        searchBoxMeganeP: document.createElementNS('http://www.w3.org/2000/svg', 'path'),
        searchBoxinput: document.createElement("input"),
        searchBoxMikeS: document.createElementNS("http://www.w3.org/2000/svg", "svg"),
        searchBoxMikeP: document.createElementNS('http://www.w3.org/2000/svg', 'path'),
      },
  
      underSB: {
        container: document.createElement("div"),
        underSB1: document.createElement("div"),
        underSB2: document.createElement("div"),
      },
  
      underBox1: document.createElement("div"),
  
      underBox2: {
        container: document.createElement("div"),
        a1: document.createElement("a"),
        a2: document.createElement("a"),
        a3: document.createElement("a"),
        a4: document.createElement("a"),
        a5: document.createElement("a"),
        a6: document.createElement("a"),
      },
  
    },
  }
  
  App.init(),
  
    console.log(App)
  