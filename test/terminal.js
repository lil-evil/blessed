const blessed = require("../")

const screen = blessed.screen({
    smartCSR: true,
    fullUnicode: true,
    dockBorders: true,
    ignoreDockContrast: true,
    useBCE:true,
    autoPadding:true,
    title:"Terminal",
    warnings:true
});

const terminal = blessed.terminal({
    parent:screen,
    width:"100%",
    height:"100%",
    top:0,
    left:0,
    border:"line",
    label:"Terminal",
    cursor: 'line',
    mouse:true,
    cursorBlink: true,
    screenKeys: false,
    scrollable:true,
    scrollbars:true,
    style: {
        fg: 'default',
        bg: 'default',
        focus: {
          border: {
            fg: 'green'
          }
        }
      }
})



screen.key("C-q", function() {
    return screen.destroy();
});

screen.render()