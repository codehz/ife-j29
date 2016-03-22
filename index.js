"use strict";

class ValidationResults {
  constructor(status, msg) {
    this.status = status;
    this.msg = msg;
  }
}

function getLen(str) {
  return (str.length + encodeURI(str).split(/%..|./).length - 1) / 2;
}

function lenValid(value, name) {
  if (value.length == 0)
    return new ValidationResults(false, name + "不能为空");
  if (getLen(value) < 4 || getLen(value) > 16)
    return new ValidationResults(false, name + "长度不合法");
  return new ValidationResults(true, name + "可用");
}

function submit() {
  let ret = lenValid(document.getElementById('name').value, "名字");
  document.getElementById('name').parentElement.className = ret.status ? "box verified" : "box error";
  document.getElementById('name').nextSibling.setAttribute("data-validation", ret.msg);
}