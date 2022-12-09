let data = [];
const todoContent = document.querySelector(".todoContent");
const addTodo = document.querySelector(".addTodo");
const tab__content = document.querySelector(".tab__content");
const todoNum = document.querySelector(".todoNum");
let empty = document.querySelector("#empty");

function getAxios() {
  axios
    .get("https://fathomless-brushlands-42339.herokuapp.com/todo5")
    .then(function (response) {
      data = response.data;
      console.log(data);
      renderData();
    })
    .catch(function (error) {
      console.log(error);
    });
}
getAxios();

function getAxiosUncompleted() {
  axios
    .get("https://fathomless-brushlands-42339.herokuapp.com/todo5")
    .then(function (response) {
      data = response.data;
      console.log(data);
      renderUncompleted();
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getAxiosCompleted() {
  axios
    .get("https://fathomless-brushlands-42339.herokuapp.com/todo5")
    .then(function (response) {
      data = response.data;
      console.log(data);
      renderCompleted();
    })
    .catch(function (error) {
      console.log(error);
    });
}

function addAxios(obj) {
  axios
    .post("https://fathomless-brushlands-42339.herokuapp.com/todo5", obj)
    .then(function (response) {
      data = response.data;
      console.log(data);
      getAxios();
    })
    .catch(function (error) {
      console.log(error);
    });
}

function deleteAxios(id) {
  axios
    .delete(`https://fathomless-brushlands-42339.herokuapp.com/todo5/${id}`)
    .then(function (response) {
      data = response.data;
      console.log(data);
      getAxios();
    })
    .catch(function (error) {
      console.log(error);
    });
}

function deleteAxiosUncompleted(id) {
  axios
    .delete(`https://fathomless-brushlands-42339.herokuapp.com/todo5/${id}`)
    .then(function (response) {
      data = response.data;
      console.log(data);
      getAxiosUncompleted();
    })
    .catch(function (error) {
      console.log(error);
    });
}

function deleteAxiosCompleted(id) {
  axios
    .delete(`https://fathomless-brushlands-42339.herokuapp.com/todo5/${id}`)
    .then(function (response) {
      data = response.data;
      console.log(data);
      getAxiosCompleted();
    })
    .catch(function (error) {
      console.log(error);
    });
}

function patchAxios(id, newCheck, newFinished, newDelete) {
  axios
    .patch(`https://fathomless-brushlands-42339.herokuapp.com/todo5/${id}`, {
      check: newCheck,
      finished: newFinished,
      delete: newDelete,
    })
    .then(function (response) {
      data = response.data;
      console.log(data);
      getAxios();
    })
    .catch(function (error) {
      console.log(error);
    });
}

function patchAxiosUncompleted(id, newCheck, newFinished, newDelete) {
  axios
    .patch(`https://fathomless-brushlands-42339.herokuapp.com/todo5/${id}`, {
      check: newCheck,
      finished: newFinished,
      delete: newDelete,
    })
    .then(function (response) {
      data = response.data;
      console.log(data);
      getAxiosUncompleted();
    })
    .catch(function (error) {
      console.log(error);
    });
}

function patchAxiosCompleted(id, newCheck, newFinished, newDelete) {
  axios
    .patch(`https://fathomless-brushlands-42339.herokuapp.com/todo5/${id}`, {
      check: newCheck,
      finished: newFinished,
      delete: newDelete,
    })
    .then(function (response) {
      data = response.data;
      console.log(data);
      getAxiosCompleted();
    })
    .catch(function (error) {
      console.log(error);
    });
}

// 初始化
function renderData() {
  let str = "";
  let uncompletedNum = 0;
  data.forEach(function (item, index) {
    str += `<li class="pt-6 pb-4 flex space-x-4 ${item.delete}">
              <a href="#"><img id="checkTodo" class="${item.finished}" data-check="${item.check}" data-num="${index}" data-id="${item.id}" src="/dist/images/checkbox.svg"></a>
              <div id="todoText" class="grow text-secondary"> ${item.content}</div>
              <a href="#" class="delTodo" data-id="${item.id}""><img src="/dist/images/delete.svg" class="px-2"></a>
              </li>`;
    if (item.check === "false") {
      uncompletedNum += 1;
    }

    if (data.length === 0) {
      document.getElementById("empty").style.display = "block";
      document.getElementById("list").style.display = "none";
    } else {
      document.getElementById("empty").style.display = "none";
      document.getElementById("list").style.display = "block";
    }
  });
  tab__content.innerHTML = str;
  todoNum.textContent = `${uncompletedNum}個待完成項目`;
}

function renderUncompleted() {
  uncompletedData = data.filter((item) => {
    return item.check === "false";
  });
  let str = "";
  let uncompletedNum = 0;
  uncompletedData.forEach((item, index) => {
    str += `<li class="pt-6 pb-4 flex space-x-4 ${item.delete}">
              <a href="#"><img id="checkTodo" class="${item.finished}" data-check="${item.check}" data-num="${index}" data-id="${item.id}" src="/dist/images/checkbox.svg"></a>
              <div id="todoText" class="grow text-secondary"> ${item.content}</div>
              <a href="#" class="delTodo" data-id="${item.id}""><img src="/dist/images/delete.svg" class="px-2"></a>
              </li>`;
  });

  data.forEach(function (item) {
    if (item.check === "false") {
      uncompletedNum += 1;
    }
  });
  tab__content.innerHTML = str;
  todoNum.textContent = `${uncompletedNum}個待完成項目`;
}

function renderCompleted() {
  completedData = data.filter((item) => {
    return item.check === "true";
  });
  let str = "";
  let uncompletedNum = 0;
  completedData.forEach((item, index) => {
    str += `<li class="pt-6 pb-4 flex space-x-4 ${item.delete}">
              <a href="#"><img id="checkTodo" class="${item.finished}" data-check="${item.check}" data-num="${index}" data-id="${item.id}" src="/dist/images/check.svg"></a>
              <div id="todoText" class="grow text-secondary"> ${item.content}</div>
              <a href="#" class="delTodo" data-id="${item.id}""><img src="/dist/images/delete.svg" class="px-2"></a>
              </li>`;
  });

  data.forEach(function (item) {
    if (item.check === "false") {
      uncompletedNum += 1;
    }
  });
  tab__content.innerHTML = str;
  todoNum.textContent = `${uncompletedNum}個待完成項目`;
}

// 新增待辦
addTodo.addEventListener("click", function (e) {
  // 不要重新整理
  e.preventDefault();
  // input 內容不得為空
  if (todoContent.value === "") {
    alert("請輸入待辦事項內容");
    return;
  }

  // 將 input 的 value 新增至陣列中
  let obj = {
    check: "false",
    finished: "",
    delete: "",
  };
  obj.content = todoContent.value;
  data.push(obj);
  addAxios(obj);
  renderData();

  // input 新增後為空
  todoContent.value = "";
});

// 刪除待辦
tab__content.addEventListener("click", function (e) {
  if (e.target.parentNode.getAttribute("class") === "delTodo") {
    let id = Number(e.target.parentNode.dataset.id);
    data.forEach(function (item, index) {
      // 賦予樣式
      if (item.id === id) {
        data.splice(index, 1);
      }
      if (item.check === "false") {
        deleteAxiosCompleted(id);
      } else if (item.check === "true") {
        // deleteAxiosCompleted(id);
        deleteAxiosUncompleted(id);
      }
    });

  }
});

// 全部刪除
let delAllTodo = document.querySelector("#delAllTodo");
delAllTodo.addEventListener("click", function (e) {
  if (e.target.getAttribute("id") === "delAllTodo") {
    data = data.filter(function (item) {
      if (item.check === "true") {
        deleteAxios(item.id);
      }
    });
    renderData();
  }
});

// 打勾
tab__content.addEventListener("click", function (e) {
  if (e.target.getAttribute("id") === "checkTodo") {
    let check = e.target.getAttribute("data-check");
    let num = e.target.getAttribute("data-num");
    let id = e.target.getAttribute("data-id");

    // 賦予樣式
    if (check === "false") {
      data[num].check = "true";
      data[num].finished = "confirm-finished";
      data[num].delete = "deleted";
    } else if (check === "true") {
      data[num].check = "false";
      data[num].finished = " ";
      data[num].delete = " ";
    }

    // 接 axios
    let newCheck;
    let newFinished;
    let newDelete;
    if (check === "false") {
      newCheck = data[num].check;
      newFinished = data[num].finished;
      newDelete = data[num].delete;
      patchAxiosUncompleted(id, newCheck, newFinished, newDelete);
    } else if (check === "true") {
      newCheck = data[num].check;
      newFinished = data[num].finished;
      newDelete = data[num].delete;
      patchAxiosCompleted(id, newCheck, newFinished, newDelete);
    }
  }
});

// 狀態
const tabs = document.querySelectorAll("[data-tab]");
let list = document.querySelector("#list");
// 賦予頁籤按鈕樣式
tabs.forEach((item, index) => {
  item.addEventListener("click", () => {
    // 頁籤
    tabs.forEach(function (item) {
      item.classList.remove("tab--active");
    });
    tabs[index].classList.toggle("tab--active");
  });
});
list.addEventListener("click", function (e) {
  let str = "";
  if (e.target.value === "全部") {
    // renderData();
    getAxios();
  } else if (e.target.value === "待完成") {
    data.forEach(function (item, index) {
      if (item.check === "false") {
        str += `<li class="pt-6 pb-4 flex space-x-4 ${item.delete}">
        <a href="#"><img id="checkTodo" class="${item.finished}" data-check="${item.check}" data-num="${index}" data-id="${item.id}" src="/dist/images/checkbox.svg"></a>
        <div id="todoText" class="grow text-secondary"> ${item.content}</div>
        <a href="#" class="delTodo" data-id="${item.id}""><img src="/dist/images/delete.svg" class="px-2"></a>
        </li>`;
      }
    });
    tab__content.innerHTML = str;
  } else if (e.target.value === "已完成") {
    data.forEach(function (item, index) {
      if (item.check === "true") {
        str += `<li class="pt-6 pb-4 flex space-x-4 ${item.delete}">
        <a href="#"><img id="checkTodo" class="${item.finished}" data-check="${item.check}" data-num="${index}" data-id="${item.id}" src="/dist/images/check.svg"></a>
        <div id="todoText" class="grow text-secondary"> ${item.content}</div>
        <a href="#" class="delTodo" data-id="${item.id}""><img src="/dist/images/delete.svg" class="px-2"></a>
        </li>`;
      }
    });
    tab__content.innerHTML = str;
  }
});
