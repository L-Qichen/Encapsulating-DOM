window.dom = {
  create(string) {
    const container = document.createElement("template");
    container.innerHTML = string.trim();
    return container.content.firstChild;
  },
  after(node, node2) {
    node.parentNode.insertBefore(node2, node.nextSibling);
  },
  before(node, node2) {
    node.parentNode.insertBefore(node2, node);
  },
  append(parent, child) {
    parent.appendChild(child);
  },
  wrap(string, node) {
    const parentTag = dom.create(string);
    dom.before(node, parentTag);
    dom.append(parentTag, node);
  },
  remove(node) {
    node.remove();
    return node;
  },
  empty(parent) {
    const arr = [];
    let x = parent.firstChild;
    while (x) {
      arr.push(dom.remove(parent.firstChild));
      x = parent.firstChild;
    }
    return arr;
  },
  attr(node, name, value) {
    if (arguments.length === 3) {
      node.setAttribute(name, value);
    } else if (arguments.length === 2) {
      return node.getAttribute(name, value);
    }
  },
  text(node, string) {
    if (arguments.length === 2) {
      node.innerText = string;
    } else if (arguments.length === 1) {
      return node.innerText;
    }
  },
  html(node, string) {
    if (arguments.length === 2) {
      node.innerHTML = string;
    } else if (arguments.length === 1) {
      return node.innerHTML;
    }
  },
  style(node, name, value) {
    if (arguments.length === 2) {
      if (typeof name === 'string') {
        return node.style[name];
      } else if (name instanceof Object) {
        for (let key in name) {
          node.style[key] = name[key];
        }
      }
    } else if (arguments.length === 3) {
      node.style[name] = value;
    }
  },
  class: {
    add(node, className) {
      node.classList.add(className);
    },
    remove(node, className) {
      node.classList.remove(className);
    },
    has(node, className) {
      return node.classList.contains(className);
    },
  },
  on(node, event, fn) {
    node.addEventListener(event, fn);
  },
  off(node, event, fn) {
    node.removeEventListener(event, fn);
  },
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector);
  },
  parent(node) {
    return node.parentNode;
  },
  children(node) {
    return node.children;
  },
  siblings(node) {
    return Array.from(node.parentNode.children).filter(n => n !== node);
  },
  next(node) {
    let x = node.nextSibling;
    if (x && x.nodeType === 3) {
      x = x.nextSibling;
    }
    return x;
  },
  previous(node) {
    let x = node.previousSibling;
    if (x && x.nodeType === 3) {
      x = x.previousSibling;
    }
    return x;
  },
  each(nodes, fn) {
    for (let i = 0; i < nodes.length; i++) {
      fn.call(null, nodes[i]);
    }
  },
  index(node) {
    const nl = dom.children(dom.parent(node));
    let i;
    for (i = 0; i < nl.length; i++) {
      if (nl[i] === node) {
        break;
      }
    }
    return i;
  }
}
