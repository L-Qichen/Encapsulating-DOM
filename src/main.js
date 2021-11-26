const test1 = dom.create("<div id=\"hello\"><p>Hello</p></div>");
console.log(test1);
const test2 = dom.create(`<div id=\"second\">This div should be added after the 
\'hello\' div.</div>`);
const test3 = dom.create(`<span id=\"third\">This span element should be added inside div 
\'second\', after the p element.</span>`);
const body = document.getElementsByTagName('body')[0];
const script = document.getElementsByTagName('script')[0];
body.insertBefore(test1, script);
dom.after(hello, test2);
dom.append(test2, test3);
dom.wrap('<main></main>', test1);
dom.remove(checkRemove);
let deletedList = dom.empty(checkEmpty);
console.log(deletedList);
dom.attr(checkEmpty, 'title', 'the setAttribute method test.');
console.log(dom.attr(checkEmpty, 'title'));
console.log("The text content of node test1 before changed : " + dom.text(test1));
dom.text(test1, "check the text method.");
dom.style(test1, { border: '1px solid red', color: 'orange' });
console.log(dom.style(test1, 'border'));
dom.style(test2, 'border', '1px solid orange');
dom.class.add(test2, 'gold');
console.log(dom.class.has(test2, 'gold'));
dom.class.remove(test2, 'gold');
console.log(dom.class.has(test2, 'gold'));
const fn = () => {
  alert("Click");
}
dom.on(test1, 'click', fn);
dom.off(test1, 'click', fn);
console.log(dom.find('#checkFind')[0]);
console.log(dom.find('#l1', checkFind)[0]);
console.log(dom.parent(l1));
console.log(dom.children(checkFind));
console.log(dom.siblings(l1));
console.log(dom.next(l1));
console.log(dom.previous(l4));
const nl = dom.find('#checkFind');
dom.each(nl, (n) => dom.style(n, 'color', 'red'));
console.log(dom.index(l3));
