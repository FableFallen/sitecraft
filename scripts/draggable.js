function makeElementDraggable(handle, target) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    let ctrlPressed = false;
  
    handle.onmousedown = dragMouseDown;
  
    document.addEventListener("keydown", (event) => {
      if (event.code === "ControlLeft" || event.code === "ControlRight") {
        ctrlPressed = true;
      }
    });
  
    document.addEventListener("keyup", (event) => {
      if (event.code === "ControlLeft" || event.code === "ControlRight") {
        ctrlPressed = false;
      }
    });
  
    function dragMouseDown(e) {
      if (!ctrlPressed) return;
  
      e = e || window.event;
      e.preventDefault();
  
      pos3 = e.clientX;
      pos4 = e.clientY;
  
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
  
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
  
      target.style.top = target.offsetTop - pos2 + "px";
      target.style.left = target.offsetLeft - pos1 + "px";
    }
  
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const consoleElement = document.querySelector(".command-prompt");
    const titleBar = document.querySelector(".draggable");
    makeElementDraggable(titleBar, consoleElement);
  });
  