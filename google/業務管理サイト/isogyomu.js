const App = {
    init: () => {
      console.log("init our timeline")
  
      App.controllers.createElements()
  
      console.log("end our timeline")
    },
  
    state: {
      rirekiLogs: [],
      workersList: [
        { id: 1, name: "牛場" },
        { id: 2, name: "柴藤" },
        { id: 3, name: "塚本" },
        { id: 4, name: "岸上" },
        { id: 5, name: "村瀬" },
        { id: 6, name: "水野" },
        { id: 7, name: "加藤" },
      ],
      workers: [
        { id: -1, td1: "名前", td2: "勤務状況", td3: "時間" },     
        { id: 1, td1: "牛場", td2: "退勤", td3: new Date() },
        { id: 2, td1: "柴藤", td2: "退勤", td3: new Date() },
        { id: 3, td1: "塚本", td2: "退勤", td3: new Date() },
        { id: 4, td1: "岸上", td2: "退勤", td3: new Date() },
        { id: 5, td1: "村瀬", td2: "退勤", td3: new Date() },
        { id: 6, td1: "水野", td2: "退勤", td3: new Date() },
        { id: 7, td1: "加藤", td2: "退勤", td3: new Date() },
      ],
    },
  
    events: {
      onNewRireki() {
        // inputのvalueを取得する
        const workerId = parseInt(App.elements.createRireki.select.value, 10)
  
        console.log("onNewRireki", workerId)
  
        // 1. workerを探す (find the worker): loop
        console.log("[]...", App.state.workersList)
  
        // workerのtable rowを探す
        for (let index = 0; index < App.state.workers.length; index++) {
          const w = App.state.workers[index]
  
          // check if this is the worker we are looking for(idが同じworkerを見つけたら)
          if (w.id === workerId) {
            // change the worker status(workerのstatusを変更する)
            w.td2 = "出勤"
            w.td3 = new Date()
  
            // update the table row(table rowを更新する)
            App.controllers.renderWorkers()
            App.controllers.renderRirekilogs()
  
  
            const log = {
              userId : workerId,
              action : w.td2,
              startAt : w.td3,
            }
  
            App.state.rirekiLogs.push(log)
          }
        }
      },
  
      onWorkOver() {
        // inputのvalueを取得する
        const workerId = parseInt(App.elements.createRireki.select.value, 10)
  
        console.log("onWorkOver", workerId)
  
        // 1. workerを探す (find the worker): loop
        console.log("[]...", App.state.workersList)
  
        // workerのtable rowを探す
        for (let index = 0; index < App.state.workers.length; index++) {
          const w = App.state.workers[index]
  
          // check if this is the worker we are looking for(idが同じworkerを見つけたら)
          if (w.id === workerId) {
            // change the worker status
            w.td2 = "退勤"
            w.td3 = new Date()
  
           
            const log = {
              userId : workerId,
              action : w.td2,
              startAt : w.td3,
            }
  
            App.state.rirekiLogs.push(log)
  
             // update the table row
             App.controllers.renderWorkers()
             App.controllers.renderRirekilogs()
  
          }
        }
      },
    },
  
    controllers: {
      renderRirekilogs() {
        const container = App.elements.createRireki.logs
        const logs = App.state.RirekiLogs
  
        logs.forEach((log) => {
          const el = document.createElement("div")
  
          el.innerHTML = "ユーザーID" + log.
  
        })
      },
      renderWorkers() {
        const table = App.elements.memberStatus.table
  
        table.innerHTML = ""
  
        App.state.workers.forEach((item) => {
          const tr = document.createElement("tr")
          const td1 = document.createElement("td")
          const td2 = document.createElement("td")
          const td3 = document.createElement("td")
  
          tr.id = item.id
  
          td1.innerHTML = item.td1
          td2.innerHTML = item.td2
  
          if (typeof item.td3 === "object") {
            td3.innerHTML = new Intl.DateTimeFormat("ja", {
              dateStyle: "full",
              timeStyle: "long",
            }).format(item.td3)
          } else {
            td3.innerHTML = item.td3
          }
  
          tr.appendChild(td1)
          tr.appendChild(td2)
          tr.appendChild(td3)
          table.appendChild(tr)
        })
      },
      createWorkerSelect() {
        const select = App.elements.createRireki.select
        const option = document.createElement("option")
  
        select.innerHTML = ""
  
        option.innerHTML = "選択してください"
        option.disabled = true
        option.selected = true
  
        select.appendChild(option)
  
        App.state.workersList.forEach((worker) => {
          // <option value="dog">Dog</option>
  
          const option = document.createElement("option")
  
          option.value = worker.id
          option.innerHTML = worker.name
  
          console.log("worker", worker)
          select.appendChild(option)
        })
      },
  
      // Create all static elements
      createElements() {
        const els = App.elements
  
        // Title
        els.title.innerHTML = "インサイドアウト株式会社業務管理サイト"
  
        // Create new Rireki
        els.createRireki.title.innerHTML = "勤怠報告する(名前を選択してボタンをタップ)"
        els.createRireki.button.innerHTML = "出勤"
        els.createRireki.button.onclick = App.events.onNewRireki
        els.createRireki.left.innerHTML = "退勤"
        els.createRireki.left.onclick = App.events.onWorkOver
        els.createRireki.logs.style.border = "1px solid blue"
        els.createRireki.container.style.marginTop = "20px"
        els.createRireki.container.style.marginBottom = "20px"
        els.createRireki.container.style.border = "1px solid green"
        els.createRireki.container.appendChild(els.createRireki.title)
        els.createRireki.container.appendChild(els.createRireki.select)
        els.createRireki.container.appendChild(els.createRireki.button)
        els.createRireki.container.appendChild(els.createRireki.left)
        els.createRireki.container.appendChild(els.createRireki.logs)
        App.controllers.createWorkerSelect()
  
        // oshin rireki / Logs
        els.logs.title.innerHTML = "更新履歴"
        els.logs.list.style.border = "1px solid black"
        els.logs.container.appendChild(els.logs.title)
        els.logs.container.appendChild(els.logs.list)
  
        // Member list
        els.memberStatus.title.innerHTML = "メンバーの状況"
        els.memberStatus.container.style.marginTop = "20px"
        els.memberStatus.container.appendChild(els.memberStatus.title)
  
        els.memberStatus.table.border = "1"
        els.memberStatus.table.align = "center"
  
        App.controllers.renderWorkers()
  
        // evidence
  
        els.evidence.container.innerHTML = "<a href=>メンバーの確証ページへ(クリックで別ページへ)</a>"
  
        // Append to root
        els.root.appendChild(els.title)
        els.root.appendChild(els.createRireki.container)
        els.root.appendChild(els.logs.container)
        els.root.appendChild(els.memberStatus.container)
        els.root.appendChild(els.memberStatus.table)
        els.root.appendChild(els.evidence.container)
      },
    },
  
    elements: {
      root: document.getElementById("app"),
      title: document.createElement("h1"),
      createRireki: {
        container: document.createElement("div"),
        title: document.createElement("div"),
        select: document.createElement("select"),
        button: document.createElement("button"),
        left: document.createElement("button"),
        logs: document.createElement("div"),
      },
      logs: {
        container: document.createElement("div"),
        title: document.createElement("div"),
        list: document.createElement("div"),
      },
      memberStatus: {
        container: document.createElement("div"),
        title: document.createElement("div"),
        list: document.createElement("div"),
        table: document.createElement("table"),
      },
      evidence: {
        container: document.createElement("div"),
      },
    },
  }
  
  App.init()
  
  console.log(App)
  